import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { leadMagnet } from "@/content/lead-magnet";
import { subscribe } from "@/lib/email/provider";
import { track } from "@/lib/track";

const DISMISS_KEY = "dk_lead_magnet_dismissed";
const emailSchema = z.string().trim().email().max(254);

function recentlyDismissed() {
  try {
    const at = Number(localStorage.getItem(DISMISS_KEY) || 0);
    return Date.now() - at < leadMagnet.dismissDays * 86_400_000;
  } catch {
    return false;
  }
}

function rememberDismiss() {
  try {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  } catch {
    // Storage blocked: the popup may show again next visit
  }
}

// CookieYes banner still waiting for an answer
const consentBannerOpen = () => !!document.querySelector(".cky-consent-container:not(.cky-hide)");

// PLAN.md §7b: once per visitor, after 20s and 50% scroll (or exit intent on
// desktop), never on booking, thanks or legal pages, never over the consent banner.
function useShouldOpen(pathname: string) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!leadMagnet.enabled) return;
    if (leadMagnet.excludedPaths.some((p) => pathname.startsWith(p))) return;
    if (recentlyDismissed()) return;

    const start = Date.now();
    let scrolled = false;
    const tryOpen = () => {
      if (Date.now() - start < leadMagnet.minSecondsOnPage * 1000) return;
      if (consentBannerOpen()) return;
      setOpen(true);
      cleanup();
    };
    const onScroll = () => {
      const doc = document.documentElement;
      if ((window.scrollY + window.innerHeight) / doc.scrollHeight >= leadMagnet.scrollDepth) scrolled = true;
      if (scrolled) tryOpen();
    };
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) tryOpen();
    };
    const timer = window.setInterval(() => scrolled && tryOpen(), 2000);
    const desktop = window.matchMedia("(pointer: fine)").matches;

    window.addEventListener("scroll", onScroll, { passive: true });
    if (desktop) document.addEventListener("mouseout", onMouseOut);
    function cleanup() {
      window.clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    }
    return cleanup;
  }, [pathname]);

  return [open, setOpen] as const;
}

const LeadMagnetPopup = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useShouldOpen(pathname);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [fieldError, setFieldError] = useState("");

  useEffect(() => {
    if (open) track("lead_magnet_view");
  }, [open]);

  if (!leadMagnet.enabled) return null;

  const onOpenChange = (next: boolean) => {
    if (!next) rememberDismiss();
    setOpen(next);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // Honeypot: real visitors never see or fill this field
    if (form.get("company_website")) return;
    const parsed = emailSchema.safeParse(form.get("email"));
    if (!parsed.success) {
      setFieldError("Enter a valid email address.");
      return;
    }
    setFieldError("");
    setState("sending");
    try {
      await subscribe({ email: parsed.data, source: "lead_magnet_popup" });
      track("lead_magnet_signup");
      rememberDismiss();
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogTitle className="text-xl">{leadMagnet.title}</DialogTitle>
        <DialogDescription className="text-base">{leadMagnet.description}</DialogDescription>
        {state === "done" ? (
          <p role="status" className="font-medium">
            {leadMagnet.success}
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-2 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lead-email">{leadMagnet.emailLabel}</Label>
              <Input
                id="lead-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={!!fieldError}
                aria-describedby={fieldError ? "lead-email-error" : undefined}
              />
              {fieldError && (
                <p id="lead-email-error" className="text-sm text-destructive">
                  {fieldError}
                </p>
              )}
            </div>
            <div aria-hidden className="hidden">
              <label htmlFor="company_website">Company website</label>
              <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
            </div>
            <Button type="submit" className="w-full" disabled={state === "sending"}>
              {leadMagnet.buttonLabel}
            </Button>
            {state === "error" && (
              <p role="alert" className="text-sm text-destructive">
                {leadMagnet.error}
              </p>
            )}
            <p className="text-sm text-muted-foreground">{leadMagnet.privacy}</p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadMagnetPopup;
