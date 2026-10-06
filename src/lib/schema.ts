// JSON-LD shared across pages (BRIEF §8: Person, ProfessionalService, FAQPage).

import { site } from "@/content/site";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}/images/dimitris-portrait-960.webp`,
  sameAs: [site.linkedinUrl],
  address: { "@type": "PostalAddress", addressLocality: site.location, addressCountry: "FR" },
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${site.name}, white label performance marketing`,
  description: site.seo.defaultDescription,
  url: site.url,
  image: `${site.url}/images/dimitris-portrait-960.webp`,
  founder: { "@type": "Person", name: site.name },
  areaServed: ["GB", "NL", "CH", "DE", "SK", "CZ"],
  knowsAbout: ["Meta Ads", "Google Ads", "Server-side tracking", "White label performance marketing"],
  address: { "@type": "PostalAddress", addressLocality: site.location, addressCountry: "FR" },
};
