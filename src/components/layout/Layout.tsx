import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

// Scroll to the top on page change, or to the anchor when the URL has a hash.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:ring-2 focus:ring-ring"
    >
      Skip to content
    </a>
    <ScrollToTop />
    <SiteHeader />
    <main id="main" className="flex-1">
      <Outlet />
    </main>
    <SiteFooter />
  </div>
);

export default Layout;
