import { Link } from "react-router-dom";
import Seo from "@/components/layout/Seo";
import Section from "@/components/layout/Section";
import BookCallButton from "@/components/BookCallButton";

const NotFound = () => (
  <>
    <Seo title="Page not found" path="/404" noindex />
    <Section innerClassName="max-w-2xl">
      <h1 className="text-4xl md:text-5xl">Page not found</h1>
      <p className="mt-4 text-muted-foreground">This page does not exist or has moved.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <BookCallButton location="not_found" />
        <Link to="/" className="font-medium text-primary underline underline-offset-4">
          Go to the home page
        </Link>
      </div>
    </Section>
  </>
);

export default NotFound;
