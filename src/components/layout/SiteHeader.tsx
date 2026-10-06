import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import BookCallButton from "@/components/BookCallButton";
import { Container } from "@/components/layout/Section";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

// Anchor links ("/#how-it-works") would match "/" and look active on the home page.
const isActiveLink = (href: string, isActive: boolean) => isActive && !href.includes("#");

const navLinkClass = (href: string) => ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-[15px] font-medium transition-colors hover:text-foreground",
    isActiveLink(href, isActive) ? "text-foreground" : "text-muted-foreground",
  );

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="text-[17px] font-semibold tracking-tight text-foreground">
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <NavLink key={item.href} to={item.href} className={navLinkClass(item.href)} end>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <BookCallButton location="header" size="sm" className="hidden md:inline-flex" />
          {/* Short label keeps the booking button visible next to the menu on small phones */}
          <BookCallButton location="header_mobile" size="sm" label="Book a call" className="md:hidden" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="!size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm">
              <SheetTitle className="text-base">{site.name}</SheetTitle>
              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
                {site.nav.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "rounded-md px-2 py-3 text-lg font-medium hover:bg-accent",
                        isActiveLink(item.href, isActive) ? "text-foreground" : "text-muted-foreground",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-8" onClick={() => setOpen(false)}>
                <BookCallButton location="mobile_menu" className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default SiteHeader;
