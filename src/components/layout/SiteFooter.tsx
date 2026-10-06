import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Section";
import { site } from "@/content/site";
import { track } from "@/lib/track";

declare global {
  interface Window {
    // Exposed by CookieYes, which loads through GTM
    revisitCkyConsent?: () => void;
  }
}

const linkClass = "text-muted-foreground transition-colors hover:text-foreground";

const SiteFooter = () => {
  const hasEmail = site.email.includes("@");

  return (
    <footer className="border-t py-12 text-[15px]">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-semibold text-foreground">{site.name}</p>
          <p className="mt-2 text-muted-foreground">{site.tagline}</p>
        </div>

        <ul className="flex flex-col gap-3">
          <li>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              onClick={() => track("outbound_linkedin", { location: "footer" })}
            >
              LinkedIn
            </a>
          </li>
          <li>
            {hasEmail ? (
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            ) : (
              <span className="text-muted-foreground">{site.email}</span>
            )}
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          {site.legal.map((item) => (
            <li key={item.href}>
              <Link to={item.href} className={linkClass}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button type="button" className={linkClass} onClick={() => window.revisitCkyConsent?.()}>
              Cookie settings
            </button>
          </li>
        </ul>
      </Container>

      <Container className="mt-10">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
};

export default SiteFooter;
