import Seo from "@/components/layout/Seo";
import Hero from "@/components/home/Hero";
import { site } from "@/content/site";

// JSON-LD is extended with FAQPage and Person in step 7.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.seo.defaultDescription,
  url: site.url,
  areaServed: ["GB", "NL", "CH", "DE", "SK", "CZ"],
  knowsAbout: ["Meta Ads", "Google Ads", "Server-side tracking", "White label performance marketing"],
  address: { "@type": "PostalAddress", addressLocality: site.location, addressCountry: "FR" },
};

// Sections from BRIEF §5.3 to §5.11 are added in step 4.
const Index = () => (
  <>
    <Seo path="/" jsonLd={jsonLd} />
    <Hero />
  </>
);

export default Index;
