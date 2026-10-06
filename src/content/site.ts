// Single place to edit names, links and navigation (BRIEF §12.7).
// Anything marked [CONFIRM] is listed in docs/CONTENT-TODO.md and must be
// resolved before launch.

export const site = {
  // [CONFIRM] CONTENT-TODO #15: "Dimitris" (BRIEF, LinkedIn) or "Dimitrios" (old site)
  name: "Dimitris Kotlidas",
  role: "Performance Marketing Specialist",
  tagline: "White label Meta Ads, Google Ads and tracking for agencies.",
  url: "https://dkotlidas.com",
  location: "Strasbourg",

  // Same Calendly link as the old site (CLAUDE.md). Event is 15 minutes.
  calendlyUrl: "https://calendly.com/dkotlidas-vrwr/free-strategy-call",
  linkedinUrl: "https://www.linkedin.com/in/dimitrioskotlidas/",
  // [CONFIRM] CONTENT-TODO #17
  email: "[CONFIRM: email]",

  nav: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Case studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Webinar", href: "/webinar" },
  ],

  cta: {
    book: { label: "Book a 15 min call", href: "/book" },
    webinar: { label: "Watch the next webinar", href: "/webinar" },
  },

  legal: [{ label: "Privacy", href: "/privacy" }],

  seo: {
    defaultTitle: "White Label Performance Marketing for Agencies | Dimitris Kotlidas",
    titleSuffix: " | Dimitris Kotlidas",
    defaultDescription:
      "I run Meta Ads, Google Ads and tracking for digital agencies, under the agency's own brand. Add performance marketing to your services without hiring.",
  },
} as const;
