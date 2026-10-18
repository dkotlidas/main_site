// All page copy for the home page lives here. Components read from this file.
// Any unknown fact stays visible as [CONFIRM: ...] and is listed in docs/CONTENT-TODO.md.

export const CALENDLY_URL = "https://calendly.com/dkotlidas-vrwr/free-strategy-call"; // [CONFIRM: 15 minute event type URL]
export const LINKEDIN_URL = "https://www.linkedin.com/in/dimitrioskotlidas/"; // [CONFIRM: URL]

export const CTA_LABEL = "Book a Free 15min Call";

export const meta = {
  title: "White Label Performance Marketing for Agencies | Dimitris Kotlidas",
  description:
    "I run Meta Ads, Google Ads and tracking under your agency's brand. €500K+ in ad spend managed, up to 11.93x ROAS. Book a free 15 minute call.",
  author: "Dimitris Kotlidas",
};

export const nav = {
  links: [
    { label: "Results", href: "#case-studies" },
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  button: "Book a Call",
};

export const hero = {
  eyebrow: "White Label Performance Marketing for Agencies",
  headline: "Sell Meta Ads and Google Ads under your own brand.",
  headlineAccent: "I run them.",
  nameFirst: "Dimitris",
  nameLast: "Kotlidas",
  nameRole: "Performance Marketing Specialist",
  sub: "Your clients ask for paid ads. I build and manage the campaigns and tracking behind your name, so you add a revenue line without hiring a performance team.",
  // Shown only when url is set. [CONFIRM: Luma URL and date]
  webinar: { label: "Watch the next webinar", url: null as string | null },
  proof: [
    "[CONFIRM: number] active agency accounts",
    "5+ years in paid media",
    "€500K+ in ad spend managed",
    "Based in Strasbourg, working in UK and EU time zones",
  ],
  portraitAlt: "Dimitris Kotlidas, Performance Marketing Specialist", // [CONFIRM: final photo file]
};

// `display` replaces the animated counter when the value is not confirmed yet.
export const stats: Array<{
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  decimal?: boolean;
  display?: string;
}> = [
  { value: 500, prefix: "€", suffix: "K+", label: "Ad spend managed" },
  { value: 0, prefix: "", suffix: "+", label: "Client accounts managed", display: "[CONFIRM]+" },
  { value: 11.93, prefix: "", suffix: "x", label: "Peak ROAS [CONFIRM: still the figure to show]", decimal: true },
  { value: 5, prefix: "", suffix: "+", label: "Years in paid media" },
];

export const problem = {
  heading: "You already have the clients. The service they ask for is missing.",
  body: "Your clients want leads and sales from paid ads. If you say no, they find a specialist, and some take the whole account with them. If you say yes without the skills, your name sits on campaigns you cannot control. Hiring a performance marketer means paying a salary before the first invoice.",
};

export const caseStudies = {
  label: "Results",
  heading: "Case Studies",
  intro: "Real accounts, real numbers. This is the work your clients would get under your brand.",
  // [CONFIRM: which cases ran through an agency]. Do not add "for an agency" or "white label" until confirmed.
  cases: [
    {
      title: "B2B lead generation",
      tag: "B2B · Meta Ads",
      heroStat: { label: "Leads", value: "312" },
      stats: [
        { label: "CPL", value: "€41" },
        { label: "Revenue Generated", value: "€27K" },
      ],
      description: "Ran a lead generation campaign for a B2B company targeting SMB decision-makers. Delivered consistent pipeline growth with a CPL well below the industry average.",
    },
    {
      title: "Kitchenware e-commerce",
      tag: "Kitchenware E-Commerce · Meta & Google Ads",
      heroStat: { label: "ROAS", value: "4.35x" },
      stats: [
        { label: "Revenue", value: "€171K+" },
        { label: "Purchases", value: "2,870" },
      ],
      description: "Built a full-funnel Meta & Google Ads strategy for a kitchenware brand, driving 2,870 purchases and €171K+ in revenue over a 4-month period.",
    },
    {
      title: "Local service business, lead gen",
      tag: "Service Business · Meta & Google Ads",
      heroStat: { label: "Growth", value: "3.2x" },
      stats: [
        { label: "CPL", value: "€55" },
        { label: "Qualified Leads", value: "180" },
      ],
      description: "Built a full-funnel lead generation system for a local service provider, combining Meta awareness with Google intent capture. Achieved a stable CPL within 30 days of launch.",
    },
    {
      title: "B2B lead generation, high-ticket service",
      tag: "B2B · Meta Ads",
      heroStat: { label: "Leads", value: "402" },
      stats: [
        { label: "CPL", value: "€78" },
        { label: "Channel", value: "B2B" },
      ],
      description: "Ran a 3-month B2B lead generation campaign on Meta for a high-ticket service, delivering 402 qualified leads at €78 CPL, consistently below the industry benchmark.",
    },
  ],
  closingHeading: "Want results like these for your clients?",
  closingBody: "Tell me what your clients ask for, and I will tell you what it would take.",
};

export const services = {
  label: "What I Do",
  heading: "What I run for your clients",
  intro: "Everything below is delivered under your brand, in your reporting templates if you want them.",
  items: [
    {
      title: "Meta & Social Ads",
      desc: "When a client's paid social spends without returns, I rebuild the account. Audience structure, creative tests and weekly optimisation on Meta, TikTok and LinkedIn, with a media plan your client can read.",
    },
    {
      title: "Google Ads",
      desc: "When a client pays for clicks that do not convert, I restructure the account around intent and bidding. Search, Shopping and Performance Max, checked every day.",
    },
    {
      title: "Tag Manager Setup",
      desc: "A clean Google Tag Manager container, with tags, triggers and variables that match what happens on your client's site. Before any budget goes in, the data has to be right.",
    },
    {
      title: "Tracking & Attribution",
      desc: "Server-side tracking, Meta CAPI and enhanced conversions, so each campaign is credited with the sales and leads it produced. Your client sees numbers that match their own records.",
    },
    {
      title: "Strategy",
      desc: "A written paid media plan per client: goals, channel mix, budget split, funnel structure and KPIs. You can present it as your own work.",
    },
    {
      title: "Creative Direction",
      desc: "Creative briefs and testing frameworks for ads that stop the scroll. Your design team produces the assets, or I brief them. [CONFIRM: whether production is offered]",
    },
  ],
};

export const partnerVsHire = {
  label: "Why an External Partner",
  heading: "A specialist on call costs less than a salary on payroll.",
  intro: "You can add this service by hiring or by partnering. Here is how the two compare for a small or mid-size agency.",
  columns: { hire: "Hire an employee", partner: "Work with me" },
  rows: [
    {
      topic: "Cost before the first invoice",
      hire: "Salary, recruitment fee and equipment start on day one",
      partner: "A monthly retainer that starts when the first client account goes live [CONFIRM: billing start]",
    },
    {
      topic: "Time to start",
      hire: "Weeks to hire, then months to train",
      partner: "Account access, tracking check and first campaigns in 3 to 5 days",
    },
    {
      topic: "Range of skills",
      hire: "One person's experience",
      partner: "One specialist who runs e-commerce, B2B lead gen and services accounts every day, on Meta, Google and tracking",
    },
    {
      topic: "When client volume drops",
      hire: "The salary stays",
      partner: "The scope moves with the work, month to month [CONFIRM: contract terms]",
    },
    {
      topic: "When a client wants more",
      hire: "You hire again",
      partner: "New accounts join the same process",
    },
    {
      topic: "Tools and know-how",
      hire: "You buy the tools and the training",
      partner: "Already in place: GTM, server-side tracking, Meta CAPI, reporting templates",
    },
    {
      topic: "Your time",
      hire: "Management, reviews, one-to-ones",
      partner: "A weekly update and your approval on strategy",
    },
    {
      topic: "Risk to the client relationship",
      hire: "A new hire learns on your live accounts",
      partner: "Campaigns built by someone who has done it many times, under a non-compete",
    },
  ],
  benefits: [
    { title: "A new service line.", desc: "Something you can sell this month." },
    { title: "Clients stay.", desc: "You cover the channel they were about to go and find elsewhere." },
    { title: "No hiring risk.", desc: "No recruitment fee, no salary, no notice period." },
    { title: "A non-compete agreement.", desc: "I never contact your clients. [CONFIRM: template contract available]" },
  ],
};

export const consulting = {
  label: "For Agencies Building In-House",
  heading: "Prefer to build the skill in-house?",
  intro: "Some agencies want their own team to run paid media. I can help with that too.",
  items: [
    {
      title: "Performance Marketing Consulting",
      desc: "If your agency manages paid campaigns but struggles with strategy, structure or results, I audit the accounts, restructure them and coach your team on Meta and Google Ads.",
    },
    {
      title: "GTM & Tracking Training",
      desc: "Focused sessions on Google Tag Manager, server-side tracking, Meta CAPI and attribution, so your team can implement and maintain clean tracking without help.",
    },
  ],
  closing: "Want your team to learn it instead?",
  button: "Talk to me",
};

export const fit = {
  label: "Who I Work With",
  heading: "Is This a Good Fit?",
  good: [
    "Agencies in web development, SEO, branding and design with no in-house performance marketing",
    "Agencies whose clients ask for paid ads and who want to say yes",
    "Owners and directors who want to keep the client relationship and the invoice",
    "Client accounts with a real offer: e-commerce spending €3K+/month on ads, or lead gen that needs qualified pipeline",
  ],
  notFit: [
    "Agencies with a strong in-house paid media team and no overflow",
    "One-off tasks with no ongoing commitment",
    "Client accounts under €500/month in ad spend",
    "Agencies looking for the lowest hourly rate",
  ],
};

export const process = {
  label: "How It Works",
  heading: "How a project runs",
  steps: [
    { num: "01", title: "Audit", desc: "I review your client's current ad accounts and funnel." },
    { num: "02", title: "Competitor research", desc: "Who bids for the same customers, and what they run." },
    { num: "03", title: "Website audit", desc: "Landing pages and tracking checked before any budget goes in." },
    { num: "04", title: "Strategy", desc: "Goals, channels, funnel and KPIs, written down." },
    { num: "05", title: "Media plan and budget", desc: "Budget split by channel and by month." },
    { num: "06", title: "Execution", desc: "Campaigns, creatives and tracking built and launched under your brand. Setup takes 3 to 5 days." },
    { num: "07", title: "Reporting and optimisation", desc: "Weekly optimisation, a monthly report in your template, and continuous testing." },
  ],
  note: "Before we talk, I can send a free 3 slide audit of one of your clients' ad accounts, or your own.",
};

export const about = {
  label: "About Me",
  heading: "Who I Am",
  paragraphs: [
    "If your clients ask for Meta or Google Ads and you have nobody to run them, you are in a common spot. Most small agencies are good at design, development or SEO, and paid media is a different job.",
    "I am a performance marketer. For more than 5 years I have run campaigns on Meta and Google for clients across Europe, mostly in e-commerce and B2B lead generation, plus service businesses and events.",
    "Today I work with [CONFIRM: 5 to 6] agencies at the same time. They sell the service and own the client relationship. I do the work, and their clients see only their agency.",
    "I co-founded a DTC brand, so I know the pressure of making every ad euro count. I also teach Google Tag Manager at Knowcrunch, the largest digital marketing course in Greece. I am based in Strasbourg and work in UK and EU time zones.",
  ],
  badges: { location: "Based in Strasbourg", instructor: "GTM Instructor at Knowcrunch" },
  portraitAlt: "Dimitris Kotlidas",
};

export const contact = {
  label: "Get In Touch",
  heading: "15 minutes, no pitch deck.",
  body: "We look at your current situation, your capacity and what your clients ask for. If it fits, we plan the next step.",
  email: "[CONFIRM: email address to show publicly]",
};

export const faq = {
  label: "FAQ",
  heading: "Common Questions",
  items: [
    {
      q: "Do you contact my clients?",
      a: "No. A non-compete agreement covers it. All communication goes through you, unless you ask me to join a client call.",
    },
    {
      q: "Whose name is on the reports?",
      a: "Yours. Reports use your logo and, if you prefer, your template.",
    },
    {
      q: "How does the collaboration work month to month?",
      a: "A fixed monthly retainer, agreed before we start. Each month includes weekly optimisation, a report you can send to your client and a call if you want one. [CONFIRM: minimum contract length]",
    },
    {
      q: "How fast can we start?",
      a: "After the call and the audit, setup takes 3 to 5 days per client account.",
    },
    {
      q: "Which tools do you use?",
      a: "Meta Ads Manager, Google Ads, Google Tag Manager (web and server-side), GA4, Meta CAPI and enhanced conversions. [CONFIRM: reporting tool, for example Looker Studio]",
    },
    {
      q: "Which countries and time zones do you cover?",
      a: "I work from Strasbourg, on Central European Time. I work with agencies in the UK and across Europe, and calls fit UK mornings and afternoons without trouble.",
    },
    {
      q: "What is the minimum ad budget?",
      a: "Client accounts under €500/month in ad spend are not a good fit. E-commerce accounts do best from about €3K/month. [CONFIRM: wording]",
    },
    {
      q: "How quickly will my client see results?",
      a: "For lead generation, cost per lead usually settles within about 30 days of launch. E-commerce takes longer, because the algorithm needs purchase data. [CONFIRM: wording]",
    },
    {
      q: "We do not have time to onboard a partner.",
      a: "Onboarding is account access, a briefing call and a tracking check. The rest is on me.",
    },
    {
      q: "We do not have the budget.",
      a: "You sell the service to your client at your own price, so the cost sits inside a new revenue line, not in your payroll. On the call we can work out the numbers for one client.",
    },
    {
      q: "We are happy with our current team.",
      a: "Then keep them. I cover the channel they do not cover, or take the overflow when they are full.",
    },
    {
      q: "We tried this before and it did not work.",
      a: "Most failed attempts trace back to broken tracking or a weak account structure. The audit shows which one it was, and whether it can be fixed.",
    },
    {
      q: "I need to discuss it internally. Let me think about it.",
      a: "Fair. I can send the free 3 slide audit and a one page summary you can forward to your partners, then we talk again when you are ready.",
    },
  ],
};

export const footer = {
  name: "Dimitris Kotlidas",
};
