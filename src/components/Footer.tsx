import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/dimitrioskotlidas/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/kotlid/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/dimitrios.kotlidas/", label: "Facebook" },
];

const Footer = () => (
  <footer className="border-t border-border py-8 text-muted-foreground text-sm">
    <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span>© {new Date().getFullYear()} Dimitrios Kotlidas. All rights reserved.</span>
      <div className="flex items-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <s.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <Link to="/privacy-policy" className="hover:text-primary transition-colors">
        Privacy Policy
      </Link>
    </div>
  </footer>
);

export default Footer;
