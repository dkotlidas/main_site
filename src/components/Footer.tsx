import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
    <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span>© {new Date().getFullYear()} Dimitrios Kotlidas. All rights reserved.</span>
      <Link
        to="/privacy-policy"
        className="hover:text-primary transition-colors"
      >
        Privacy Policy
      </Link>
    </div>
  </footer>
);

export default Footer;