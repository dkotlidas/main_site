import { Button } from "@/components/ui/button";
import LegalPageView from "@/components/LegalPageView";
import { cookies } from "@/content/legal";

const Cookies = () => (
  <LegalPageView page={cookies} path="/cookies">
    {/* CookieYes fills elements with this class with its cookie audit table */}
    <div className="cky-audit-table-element mt-6 overflow-x-auto text-[15px]" />
    <Button type="button" variant="outline" className="mt-8" onClick={() => window.revisitCkyConsent?.()}>
      Cookie settings
    </Button>
  </LegalPageView>
);

export default Cookies;
