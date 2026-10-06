// Objections and practical questions (BRIEF §5.8). Used by the FAQ accordion
// and the FAQPage JSON-LD. Answers were drafted for Dimitris to review
// (CONTENT-TODO #33). Anything marked [CONFIRM] is listed there too.

export type Faq = { q: string; a: string };

export const faqTitle = "Questions agency owners ask";

export const objections: Faq[] = [
  {
    q: "Is this the right time?",
    a: "You do not need to start now. A 15 minute call shows what it would take, so you can plan it for when it suits you. We can also start with a single client account, so the first step stays small.",
  },
  {
    q: "We do not have the time to onboard a partner.",
    a: "From your side, onboarding is access to the ad accounts, a short brief on the client and a contact person. I handle the setup, the tracking and the first campaigns.",
  },
  {
    q: "We do not have the budget.",
    a: "There is no salary, recruitment fee or training cost. The fee is a fixed monthly amount per client account, agreed before we start, so you can price the service to your client with your own margin.",
  },
  {
    q: "We are happy with our current team.",
    a: "Good. I work next to them on the channel they do not cover, usually paid ads and tracking, and stay out of the rest.",
  },
  {
    q: "We tried it before and it did not work.",
    a: "Paid ads often fail because of broken tracking, a weak offer or a budget spread too thin. Before we start I audit the account and tell you what I see, including when I think ads are not the right fit.",
  },
  {
    q: "I need to discuss it internally.",
    a: "Of course. After the call I send a short summary with the scope and the next steps, so you can share it with your partners.",
  },
  {
    q: "Let me think about it.",
    a: "Take the time you need. If it helps, I can send a free 3 slide audit of one of your clients' ad accounts, so you see how I work before you decide.",
  },
];

export const practical: Faq[] = [
  {
    q: "Do you contact my clients?",
    a: "No. I talk to you, not to your clients. A non-compete agreement says I will not contact your clients or work with them directly.",
  },
  {
    q: "Whose name is on the reports?",
    a: "Yours. Reports go out in your template and under your brand.",
  },
  {
    q: "Which tools do you use?",
    a: "Meta Ads Manager, Google Ads, Google Tag Manager (web and server-side), GA4, Meta Conversions API and Google Enhanced Conversions.",
  },
  {
    q: "How fast can we start?",
    // [CONFIRM] CONTENT-TODO #34
    a: "Campaigns are usually live within [CONFIRM: 10 days] of getting access to the accounts.",
  },
  {
    q: "Which countries and time zones do you work with?",
    a: "I work in English with agencies across Europe. I am based in Strasbourg (CET), one hour ahead of the UK.",
  },
];

export const allFaqs = [...objections, ...practical];
