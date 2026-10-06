// Privacy and cookie pages. DRAFT written from what the site actually does
// (Calendly, GTM with GA4 and Meta Pixel, CookieYes, Luma, Vercel). Needs
// Dimitris's review and, ideally, a legal check before launch
// (CONTENT-TODO #28, #29, #36). Anything marked [CONFIRM] must be filled in.

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };

export type LegalPage = {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export const privacy: LegalPage = {
  title: "Privacy Policy",
  description: "How personal data is collected, used and protected on dkotlidas.com, in line with GDPR.",
  updated: "[CONFIRM: date of publication]",
  sections: [
    {
      heading: "Who is responsible",
      paragraphs: [
        // [CONFIRM] CONTENT-TODO #28: entity wording and whether the address is public
        "The controller of your personal data is [CONFIRM: ΚΟΤΛΙΔΑΣ ΝΙΚ. ΔΗΜΗΤΡΙΟΣ, sole proprietorship registered in Greece, address].",
        "For any privacy question or request, write to [CONFIRM: email].",
      ],
    },
    {
      heading: "What this site collects",
      list: [
        "Call bookings: when you book a call, Calendly collects your name, email address and any answers you give in the booking form.",
        "Webinar registration: when you register, Luma collects your name and email address.",
        "Email signup: if you subscribe to emails, your email address is stored with the email provider [CONFIRM: provider name].",
        "Analytics and advertising: with your consent, Google Analytics 4 and the Meta Pixel record how you use the site, through Google Tag Manager.",
        "Server logs: the hosting provider, Vercel, records technical data such as IP address and browser type to deliver and secure the site.",
      ],
    },
    {
      heading: "Why and on what legal basis",
      list: [
        "To arrange and hold the call you booked: steps you ask for before a possible contract (GDPR Art. 6(1)(b)).",
        "To send emails you subscribed to: your consent (Art. 6(1)(a)). You can unsubscribe from any email.",
        "Analytics and advertising measurement: your consent (Art. 6(1)(a)), given through the cookie banner.",
        "Security and operation of the site: legitimate interest (Art. 6(1)(f)).",
      ],
    },
    {
      heading: "Who receives your data",
      paragraphs: [
        "Your data is processed by these providers on my behalf or as independent controllers under their own terms: Calendly, Luma, Google (Tag Manager, Analytics), Meta (Pixel), CookieYes, Vercel and [CONFIRM: email provider].",
        "Some of these providers are based in the United States. Transfers rely on the EU-US Data Privacy Framework or the European Commission's standard contractual clauses.",
        "Your data is never sold.",
      ],
    },
    {
      heading: "How long it is kept",
      list: [
        "Call bookings and related emails: [CONFIRM: period, e.g. 24 months after the last contact].",
        "Email subscriptions: until you unsubscribe.",
        "Analytics data: [CONFIRM: GA4 retention setting, e.g. 14 months].",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: ["Under GDPR you can ask to:"],
      list: [
        "access the personal data I hold about you",
        "correct inaccurate data",
        "have your data erased",
        "restrict or object to processing",
        "receive your data in a portable format",
        "withdraw consent at any time, without affecting earlier processing",
      ],
    },
    {
      heading: "Complaints",
      paragraphs: [
        // [CONFIRM] CONTENT-TODO #36
        "You can complain to a data protection authority, for example [CONFIRM: the Hellenic Data Protection Authority (www.dpa.gr)] or the authority where you live.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: ["The cookies this site uses and how to change your choice are on the Cookie Policy page."],
    },
    {
      heading: "Changes",
      paragraphs: ["When this policy changes, the new version is published here with a new date."],
    },
  ],
};

export const cookies: LegalPage = {
  title: "Cookie Policy",
  description: "Which cookies dkotlidas.com uses and how to change your consent.",
  updated: "[CONFIRM: date of publication]",
  sections: [
    {
      heading: "How consent works",
      paragraphs: [
        "When you first visit, a banner asks which cookies you accept. Only necessary cookies run before you answer. Analytics and advertising cookies run only if you accept them.",
        "You can change your choice at any time with the Cookie settings button below or in the footer.",
      ],
    },
    {
      heading: "Categories",
      list: [
        "Necessary: remember your cookie choice and keep the site working. Always on.",
        "Analytics: Google Analytics 4 measures visits and how the site is used. Off until you accept.",
        "Advertising: the Meta Pixel measures the results of ads on Facebook and Instagram. Off until you accept.",
        "Embedded content: the Calendly booking calendar and the Luma registration form may set their own cookies when they load.",
      ],
    },
    {
      heading: "Full list",
      paragraphs: [
        "The table below is kept up to date by CookieYes, the consent tool this site uses. If it does not load, the cookie banner shows the same list.",
      ],
    },
  ],
};
