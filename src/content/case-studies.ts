// Case studies (BRIEF §5.7, §6). Only real data. Numbers come from the old
// site and are all unconfirmed until Dimitris checks them and the client
// approves (CONTENT-TODO #7 to #11). Clients stay anonymous until then.

export type CaseStudy = {
  slug: string;
  title: string;
  clientType: string;
  channels: string;
  summary: string;
  // Three numbers per case (BRIEF §5.7): spend, result, change
  numbers: { label: string; value: string }[];
  problem: string;
  approach: string[];
  whatChanged: string;
  agencyOutcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "kitchenware-ecommerce",
    title: "Kitchenware e-commerce",
    clientType: "Kitchenware e-commerce, [CONFIRM: country]",
    channels: "Meta Ads and Google Ads",
    summary:
      "Full-funnel Meta and Google Ads for an online kitchenware store: [CONFIRM: 2,870 purchases and €171K+ in revenue over 4 months].",
    numbers: [
      { label: "Ad spend", value: "[CONFIRM]" },
      { label: "Revenue", value: "[CONFIRM: €171K+]" },
      { label: "ROAS", value: "[CONFIRM: 4.35x]" },
    ],
    problem: "[CONFIRM: what the client needed before the project started]",
    approach: [
      "Full-funnel structure across Meta Ads and Google Ads.",
      "[CONFIRM: tracking setup and main changes]",
    ],
    whatChanged: "[CONFIRM: 2,870 purchases and €171K+ in revenue over 4 months, compared with what before?]",
    agencyOutcome: "[CONFIRM: was this delivered through an agency, and what did the agency do with it?]",
  },
  {
    slug: "b2b-lead-generation",
    title: "B2B lead generation",
    clientType: "High-ticket B2B service, [CONFIRM: country]",
    channels: "Meta Ads",
    summary:
      "A 3 month lead generation campaign on Meta for a high-ticket B2B service: [CONFIRM: 402 leads at €78 per lead].",
    numbers: [
      { label: "Ad spend", value: "[CONFIRM]" },
      { label: "Leads", value: "[CONFIRM: 402]" },
      { label: "Cost per lead", value: "[CONFIRM: €78]" },
    ],
    problem: "[CONFIRM: what the client needed before the project started]",
    approach: ["Lead generation campaigns on Meta over 3 months.", "[CONFIRM: targeting, offer and tracking setup]"],
    whatChanged: "[CONFIRM: how lead volume or cost changed compared with before]",
    agencyOutcome: "[CONFIRM: was this delivered through an agency, and what did the agency do with it?]",
  },
];

export const caseStudiesPage = {
  title: "Case studies",
  description: "Results from Meta Ads and Google Ads accounts I run, with the numbers from the ad accounts.",
  intro: "Client names stay private until the client approves. Numbers are from the ad accounts.",
};

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
