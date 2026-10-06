import { Link } from "react-router-dom";
import LegalPageView from "@/components/LegalPageView";
import { privacy } from "@/content/legal";

const Privacy = () => (
  <LegalPageView page={privacy} path="/privacy">
    <p className="mt-10 text-muted-foreground">
      See also the{" "}
      <Link to="/cookies" className="font-medium text-primary underline underline-offset-4">
        Cookie Policy
      </Link>
      .
    </p>
  </LegalPageView>
);

export default Privacy;
