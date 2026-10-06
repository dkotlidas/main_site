import { Link } from "react-router-dom";
import { Button, type ButtonProps } from "@/components/ui/button";
import { site } from "@/content/site";
import { track } from "@/lib/track";

type BookCallButtonProps = {
  // Where the button sits, for the cta_click event (e.g. "header", "hero").
  location: string;
  label?: string;
  size?: ButtonProps["size"];
  className?: string;
};

// Every "book a call" CTA goes through /book, where the Calendly embed lives.
const BookCallButton = ({ location, label = site.cta.book.label, size = "lg", className }: BookCallButtonProps) => (
  <Button asChild size={size} className={className}>
    <Link to={site.cta.book.href} onClick={() => track("cta_click", { cta_id: "book_call", location })}>
      {label}
    </Link>
  </Button>
);

export default BookCallButton;
