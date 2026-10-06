// Copy for the landing page (BRIEF §5). Edit text here, not in components.
// Anything marked [CONFIRM] is listed in docs/CONTENT-TODO.md.

import { site } from "./site";

export const hero = {
  eyebrow: "White label performance marketing for agencies",
  title: "Sell Meta Ads and Google Ads under your own brand. I run them.",
  sub: "Your clients ask for performance marketing. I build and manage the campaigns and tracking behind your name, so you add revenue without hiring a team.",
  primaryCta: site.cta.book,
  secondaryCta: site.cta.webinar,
  proof: [
    // [CONFIRM] CONTENT-TODO #1
    "[CONFIRM: number] active agency accounts",
    "5+ years in paid media",
    // [CONFIRM] CONTENT-TODO #2: €500K+ (BRIEF) or €3M+ (old site)
    "[CONFIRM: €500K+] managed in annual ad spend",
    "Based in Strasbourg, working across time zones",
  ],
  portraitAlt: "Dimitris Kotlidas",
};

export const problem = {
  title: "You already have the clients. The service they ask for is missing.",
  body: "Your clients want leads and sales from paid ads. If you say no, they find a specialist and sometimes they take the whole account with them. If you say yes without the skills, you carry the risk. Hiring a performance marketer costs a salary before the first invoice.",
  pains: [
    {
      title: "Clients ask for ads",
      text: "And you have nobody to run them.",
    },
    {
      title: "No time to learn a new channel",
      text: "Your team is busy with the work you already sell.",
    },
    {
      title: "Bad campaigns cost trust",
      text: "They damage the relationship you built with the client.",
    },
  ],
};

export const solution = {
  title: "A performance marketing team that works inside your agency, invisible to your clients.",
  body: "I work as your external performance department. You keep the client relationship, the invoice and the brand. I handle strategy, setup, tracking, daily checks, optimisation and reporting, in your templates if you want them. A non-compete agreement protects you.",
  benefits: [
    "A new service line you can sell this month",
    "Clients stay because you now cover the channel they were asking for",
    "Expertise without a hire, a salary or a recruitment fee",
    "A non-compete agreement, so I never contact your clients",
  ],
};

export const whatIRun = {
  title: "What I run",
  services: [
    {
      title: "Meta Ads",
      text: "Prospecting, retargeting and lead campaigns on Facebook and Instagram.",
    },
    {
      title: "Google Ads",
      text: "Search, Performance Max and Shopping campaigns.",
    },
    {
      title: "Tracking and measurement",
      text: "Server-side GTM, Meta CAPI, Enhanced Conversions and GA4.",
    },
    {
      title: "Reporting",
      text: "Reports in your template and under your brand, ready to send to the client.",
    },
  ],
  industriesLabel: "Industries",
  industries: ["E-commerce", "B2B lead generation", "Services and events"],
};

export const howItWorks = {
  id: "how-it-works",
  title: "How a project runs.",
  steps: [
    { title: "Audit", text: "I review the client's current ad accounts and funnel." },
    { title: "Competitor research", text: "I look at what competitors run and where the gaps are." },
    { title: "Website audit", text: "I check landing pages, speed and tracking before any spend." },
    { title: "Strategy", text: "Channels, offers and audiences, agreed with you before launch." },
    { title: "Media plan and budget", text: "How the budget splits across channels and what each part should return." },
    { title: "Execution", text: "Setup, tracking and launch, with daily checks." },
    { title: "Reporting and optimisation", text: "Regular reports in your template and ongoing changes based on the numbers." },
  ],
  // [CONFIRM] CONTENT-TODO #26
  note: "Before we talk, I can send a free 3 slide audit of one of your clients' ad accounts or your own.",
};

export const proof = {
  title: "Results",
  intro: "Client names stay private until the client approves. Numbers are from the ad accounts.",
  stats: [
    // [CONFIRM] CONTENT-TODO #1, #2, #6
    { value: "[CONFIRM]", label: "Accounts managed" },
    { value: "5+", label: "Years in paid media" },
    { value: "[CONFIRM: €500K+]", label: "Annual ad spend managed" },
    { value: "[CONFIRM]", label: "Countries served" },
  ],
  // [CONFIRM] CONTENT-TODO #5, #14
  credibility:
    "I teach Google Tag Manager at Knowcrunch, [CONFIRM: the largest digital marketing course in Greece]. I work with [CONFIRM: 5 to 6] agencies at once.",
  caseStudiesLink: { label: "See all case studies", href: "/case-studies" },
};

export const finalCta = {
  title: "15 minutes, no pitch deck.",
  body: "We look at your current situation, your capacity and what your clients ask for. If it fits, we plan the next step.",
  cta: site.cta.book,
};

// Old anchors from the previous one-page site (docs/redirects.md §2).
export const legacyAnchors: Record<string, string> = {
  "#contact": "/book",
  "#case-studies": "/case-studies",
  "#about": "/about",
  "#certifications": "/about",
  "#services": "/#what-i-run",
};
