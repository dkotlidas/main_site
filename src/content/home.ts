// Copy for the landing page (BRIEF §5). Sections are added in step 4.
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
