import { useEffect, useRef } from "react";
import { site } from "@/content/site";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

// Calendly cannot read CSS variables, so the colours are passed as hex values
// that match the light and dark tokens in index.css.
const colours = {
  light: { background_color: "ffffff", text_color: "0f172a", primary_color: "1d4ed8" },
  dark: { background_color: "0b1120", text_color: "f1f5f9", primary_color: "60a5fa" },
};

function buildUrl() {
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const params = new URLSearchParams({
    // CookieYes handles consent for the whole site
    hide_gdpr_banner: "1",
    ...(dark ? colours.dark : colours.light),
  });
  return `${site.calendlyUrl}?${params.toString()}`;
}

function loadScript(): Promise<void> {
  if (window.Calendly) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
  return new Promise((resolve, reject) => {
    const script = existing ?? document.createElement("script");
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("Calendly failed to load")), { once: true });
    if (!existing) {
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  });
}

const CalendlyEmbed = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !ref.current || !window.Calendly) return;
        ref.current.innerHTML = "";
        window.Calendly.initInlineWidget({ url: buildUrl(), parentElement: ref.current });
      })
      .catch(() => {
        // The fallback link below stays visible, so the visitor can still book.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div ref={ref} className="h-[700px] min-w-[320px] overflow-hidden rounded-xl border bg-card" />
      <p className="mt-4 text-[15px] text-muted-foreground">
        Calendar not loading?{" "}
        <a
          href={site.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4"
        >
          Open it on Calendly
        </a>
      </p>
    </div>
  );
};

export default CalendlyEmbed;
