import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { captureUtm } from "@/lib/utm";
import { track } from "@/lib/track";

// Per page view: keep UTMs and fire scroll_75 once when the visitor reaches
// 75% of the page (BRIEF §8).
export function usePageTracking() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    captureUtm(search);
  }, [search]);

  useEffect(() => {
    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if ((window.scrollY + window.innerHeight) / doc.scrollHeight >= 0.75) {
        fired = true;
        track("scroll_75", { page_path: pathname });
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
}
