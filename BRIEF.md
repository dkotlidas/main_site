# Site Rebuild Brief: dkotlidas.com

Audience of this file: Claude Code working in VS Code on the repo for dkotlidas.com.
Owner: Dimitris Kotlidas. Date: 4 October 2026.
Source of truth for strategy: "Scale Plan 90 ημερών" (coaching with Aris Pilitsopoulos, sessions 27/7 to 29/9) and the "online funnel" doc.

Read this whole file before touching code. Then follow section 12 (working rules) and start at Phase 0.

---

## 1. Why the site changes

The current site is a general portfolio built on Lovable. The business plan has a narrower target now, and the site has to serve it.

**Goal for the next 12 months:** double income from white label performance marketing for agencies, reaching about €10k per month. Aris framed it as "when it is one client, 5. When it is two, 10."

**Q4 2026 job of the site:** it is the destination of every LinkedIn connection request, DM, cold email and webinar invite. A prospect who clicks through must understand in 10 seconds who this is for, what he does, why he can be trusted, and how to book a 15 minute call.

**What the site is not:** a portfolio of everything Dimitris has ever done, a Greek-market brochure, or a blog-first content hub (blog is Phase 2).

## 2. Positioning

- **Brand:** personal brand, "Dimitris Kotlidas". It must match the LinkedIn profile, since LinkedIn is the main traffic source.
- **Language:** English only. Audience is agencies in UK first, then Netherlands, Switzerland (Basel, Zurich), Germany, Slovakia, Czech Republic.
- **Offer:** done-for-you white label performance marketing (Meta Ads, Google Ads, tracking) delivered under the agency's own brand, so the agency adds a revenue line without hiring.
- **Primary buyer (ICP):** owners, directors and CFOs of small and mid agencies in web development, SEO, branding, design and creative, with no in-house performance marketing.
- **Their pains:** no performance marketing know-how, no time or people to build it, their own clients asking for results they cannot deliver, and the risk of losing those clients to a specialist.
- **How Dimitris helps:** a new service line and revenue source, client retention, expertise without hiring cost, and a non-compete agreement.
- **LinkedIn headline to mirror on the site:** "Performance Marketing Specialist | I help digital agencies increase capacity in 10 days through a white label system".

## 3. Conversion goals, in priority order

1. **Book a free 15 minute call** (Calendly, Dimitris's own link). Primary CTA everywhere.
2. **Register for the webinar** "5 ways agency owners can increase revenue with white label digital marketing" (hosted on Luma, roughly every 15 days).
3. **Join the 5 email course** (lead magnet). This feeds the 20 email sequence and the evergreen list. Target: about 50 new subscribers per month, 600 in a year.
4. Secondary: connect on LinkedIn, read case studies.

One page, one primary action per section. No pricing on the site. Internal rule: every new project is quoted at a minimum of €20 per hour of real work, as a fixed monthly retainer. That belongs in sales calls only.

## 4. Information architecture

| Route | Purpose | Phase |
| --- | --- | --- |
| `/` | Long landing page for agency owners. Hero, problem, solution, process, proof, objections, final CTA | 1 |
| `/book` | Calendly embed with a short qualifying intro. Linked from every CTA | 1 |
| `/webinar` | Registration page for the next webinar (Luma link and embed), past recordings list | 1 |
| `/free-course` | 5 email course opt-in page | 1 |
| `/thanks/[type]` | Confirmation pages: `booked`, `webinar`, `course`. Each fires its conversion event | 1 |
| `/case-studies` and `/case-studies/[slug]` | Results with real numbers, MDX content | 1 (index plus first 2) |
| `/about` | Dimitris, background, how the work runs, who he works with | 1 |
| `/privacy`, `/cookies` | Legal | 1 |
| `/blog` and `/blog/[slug]` | Long form from webinars and LinkedIn posts | 2 |
| `/newsletter` | Evergreen list archive | 2 |

Remove from the old site anything about Greek-market services, personal projects, Knowcrunch teaching as a headline item (it can appear in `/about` as a credibility line), and any page that does not map to the table above. Keep a redirect map (section 10).

## 5. Landing page (`/`) structure and draft copy

Tone: concrete, direct, short sentences. Write like a person who runs accounts, not like an agency brochure. No em dashes anywhere. No words like elevate, unlock, landscape, tapestry. Avoid "not just X but Y" and filler endings. Every claim must be true on the day it is published (see section 11 for what needs confirming).

### 5.1 Header
Logo text "Dimitris Kotlidas". Nav: How it works, Case studies, About, Webinar. Right side button: **Book a 15 min call** (links to `/book`). Sticky on scroll, collapses to menu on mobile.

### 5.2 Hero
- Eyebrow: White label performance marketing for agencies
- H1: **Sell Meta Ads and Google Ads under your own brand. I run them.**
- Sub: Your clients ask for performance marketing. I build and manage the campaigns and tracking behind your name, so you add revenue without hiring a team.
- Primary CTA: Book a 15 min call
- Secondary CTA: Watch the next webinar (anchor to `/webinar`)
- Proof line under CTAs: `[CONFIRM: number]` active agency accounts, 5+ years in paid media, €500K+ managed in annual ad spend, based in Strasbourg and working across time zones
- Visual: clean portrait photo (passport style, clear face), matches LinkedIn photo.

### 5.3 Problem
Heading: **You already have the clients. The service they ask for is missing.**

Body: Your clients want leads and sales from paid ads. If you say no, they find a specialist and sometimes they take the whole account with them. If you say yes without the skills, you carry the risk. Hiring a performance marketer costs a salary before the first invoice.

Three short pain cards (render as cards, keep each to two lines):
- Clients ask for ads and you have nobody to run them
- Your team has no time to learn a new channel
- Bad campaigns damage the relationship you built

### 5.4 Solution
Heading: **A performance marketing team that works inside your agency, invisible to your clients.**

Body: I work as your external performance department. You keep the client relationship, the invoice and the brand. I handle strategy, setup, tracking, daily checks, optimisation and reporting, in your templates if you want them. A non-compete agreement protects you.

Benefit list (4 items):
- A new service line you can sell this month
- Clients stay because you now cover the channel they were asking for
- Expertise without a hire, a salary or a recruitment fee
- A non-compete agreement, so I never contact your clients

### 5.5 What I run
Short grid, no hype: Meta Ads, Google Ads, tracking and measurement (server-side GTM, Meta CAPI, Enhanced Conversions, GA4), reporting. Industries: e-commerce, B2B lead generation, services and events.

### 5.6 How it works (7 steps, from Aris's method)
1. Audit of the client's current account and funnel
2. Competitor research
3. Website audit
4. Strategy
5. Media plan and budget
6. Execution
7. Reporting and optimisation

Heading: **How a project runs.** One line under each step, plain language. Add a note: "Before we talk, I can send a free 3 slide audit of one of your clients' ad accounts or your own."

### 5.7 Proof
- 2 or 3 case studies, each with: client type, goal, what was done, three numbers (spend, result, change). Use only real data. Until approved by the client, anonymise ("Fashion e-commerce, Greece").
- Stat strip: `[CONFIRM]` accounts managed, 5+ years, €500K+ annual spend, countries served.
- Testimonials: only real quotes with permission. If none exist at launch, omit the section. Do not invent any.
- Logos: only agencies that approved it.

### 5.7b Credibility line
Teaches Google Tag Manager at Knowcrunch, the largest digital marketing course in Greece. Works with `[CONFIRM: 5 to 6]` agencies at once.

### 5.8 Objections (FAQ accordion, based on Aris's list of 7)
Write one honest answer each, 2 to 3 sentences:
- Not the right time
- We do not have the time to onboard a partner
- We do not have the budget
- We are happy with our current team
- We tried it before and it did not work
- I need to discuss it internally
- Let me think about it

Add practical questions: Do you contact my clients? Whose name is on the reports? Which tools do you use? How fast can we start? Which countries and time zones?

### 5.9 Lead magnet block
Heading: **Not ready to talk? Take the 5 email course.** One email per day on how agencies add revenue with white label performance marketing. Email field, button "Send me the course". Link to `/free-course`.

### 5.10 Webinar block
Next webinar date from a data file (`content/webinars.json`), title, three bullet outcomes, button to register on Luma. If no date is set, show "Next date announced soon" with the course opt-in instead.

### 5.11 Final CTA
Heading: **15 minutes, no pitch deck.** Body: We look at your current situation, your capacity and what your clients ask for. If it fits, we plan the next step. Button: Book a 15 min call.

### 5.12 Footer
Name, short line, LinkedIn link, email, legal links, copyright. Business entity details go on the legal page (see section 11).

## 6. Page copy for other routes (outline, expand when building)

- `/book`: H1 "Book a 15 minute call". Three lines on what happens in the call. Calendly inline embed. Under it: LinkedIn link and a fallback email.
- `/webinar`: H1 with the webinar title, date and time with the visitor's time zone, speaker block, agenda (5 ways), Luma registration, past recordings (YouTube embeds).
- `/free-course`: H1, 5 bullet previews of the 5 emails (titles `[CONFIRM with Aris's sequence]`), form, privacy line.
- `/about`: story in first person, 4 short paragraphs: who I am, why white label, how I work with agencies, where I am based. Photo. Experience facts only as given in section 11. Link to LinkedIn.
- `/case-studies/[slug]`: Problem, approach, numbers, what changed, what the agency did with it.

## 7. Design direction

I have no mockup, so treat this as a starting point and show Dimitris a first screen before building everything.

- Style: light, quiet, professional. Lots of white space, strong typography, one accent colour. It should feel like an operator, not a design studio.
- Type: one sans family for headings and body (Inter or Geist), sizes with a clear scale, body 17 to 18 px, line height 1.6.
- Colour tokens in CSS variables: `--bg`, `--fg`, `--muted`, `--border`, `--accent`. Support dark mode through `prefers-color-scheme`. Accent is a single saturated blue or green, contrast checked to WCAG AA.
- Layout: max width 1120 px, 8 px spacing grid, 16 px side gutter on mobile. Design mobile first, since LinkedIn traffic is largely mobile.
- Components: Button (primary, secondary), Section, Card, Accordion, StatStrip, CaseStudyCard, Form, CalendlyEmbed, LumaEmbed.
- Motion: minimal. Fade and translate on scroll at most, respect `prefers-reduced-motion`.
- Images: portrait, one or two supporting photos, no stock photos of people at laptops. Use `next/image`.
- Performance targets: Lighthouse 95+ on mobile for Performance, Accessibility, Best Practices and SEO. LCP under 2.0 s.

## 8. Technical specification

- **Framework:** Next.js (App Router), TypeScript, Tailwind CSS. Deployed on Vercel, auto-deploy on push to `main`, preview deployments on branches.
- **Content:** MDX for case studies and blog, JSON for webinars and site settings. No database needed in Phase 1.
- **Forms:** one `POST /api/subscribe` route that takes `email`, `source` and optional `name`, validates with zod, rate limits, and forwards to the email provider through an adapter (`lib/email/provider.ts`). The provider is undecided (Klaviyo is the candidate because Christina knows it). Build the adapter with a stub and an env var `EMAIL_PROVIDER`. Honeypot field for spam.
- **Booking:** Calendly inline embed on `/book`. Listen for the Calendly `message` event `calendly.event_scheduled` to push the conversion event and redirect to `/thanks/booked`.
- **Webinar:** Luma registration link or embed. Webinar data from `content/webinars.json`.
- **SEO:** metadata per page, Open Graph images generated with `next/og`, `sitemap.xml`, `robots.txt`, canonical URLs, JSON-LD (`Person`, `ProfessionalService`, `FAQPage`). Title pattern: "White Label Performance Marketing for Agencies | Dimitris Kotlidas".
- **Analytics and tracking:** Dimitris is a tracking specialist, so do this properly.
  - Google Tag Manager as the single script (ID from env `NEXT_PUBLIC_GTM_ID`).
  - Consent banner with Google Consent Mode v2 defaults set to denied for EU, UK and CH visitors. No tags fire before consent except cookieless pings.
  - A typed `dataLayer` helper in `lib/track.ts` with these events: `cta_click` (cta_id, location), `book_call_view`, `call_booked`, `webinar_register_click`, `webinar_registered`, `course_signup`, `case_study_view`, `scroll_75`, `outbound_linkedin`.
  - GA4 and Meta Pixel configured inside GTM, not in code. Document the event spec in `docs/tracking-plan.md` so the GTM container can be built from it.
  - UTM parameters preserved through the site and passed to the form submission (`utm_source`, `utm_medium`, `utm_campaign`). LinkedIn DM links will carry them.
- **Accessibility:** semantic HTML, visible focus, keyboard navigable accordion, alt text, labels on all fields, colour contrast AA.
- **Security and privacy:** security headers in `next.config`, no secrets in the client bundle, `.env.example` committed, `.env.local` ignored.
- **Code quality:** ESLint, Prettier, `tsc --noEmit` in CI, a basic Playwright smoke test (home loads, CTA reaches `/book`, form validates).

Suggested folder structure:

```
app/
  (marketing)/page.tsx
  book/page.tsx
  webinar/page.tsx
  free-course/page.tsx
  thanks/[type]/page.tsx
  case-studies/...
  about/page.tsx
  privacy/page.tsx
  cookies/page.tsx
  api/subscribe/route.ts
components/
content/
  case-studies/*.mdx
  webinars.json
  site.ts          // name, links, nav, stats (single place to edit)
lib/
  track.ts
  email/provider.ts
docs/
  tracking-plan.md
  CONTENT-TODO.md
```

## 9. Build phases

**Phase 0: Discovery (do first, no changes).** Inspect the current repo (Lovable export on GitHub), list dependencies, routes, assets, GTM or pixel IDs in use, domain setup, and what Vercel or Netlify is configured. Write `docs/current-site-audit.md`. Ask Dimitris before deleting anything.

**Phase 1: Foundation.** New branch `rebuild`. Scaffold Next.js with Tailwind, tokens, layout, header, footer, `content/site.ts`. Set up ESLint, Prettier, CI. Show Dimitris the hero screen for approval.

**Phase 2: Landing page.** Build `/` section by section from section 5, with placeholders clearly marked `[CONFIRM]` where facts are missing. Mobile first.

**Phase 3: Conversion pages.** `/book`, `/webinar`, `/free-course`, thanks pages, `/api/subscribe`, tracking helper, consent banner.

**Phase 4: Proof and about.** Case study template and the first 2 case studies, `/about`, legal pages.

**Phase 5: SEO, performance, QA.** Metadata, schema, sitemap, Lighthouse, accessibility pass, cross-browser check, tracking verification in GTM preview and Meta Pixel Helper, test the form end to end.

**Phase 6: Launch.** Redirects, DNS, production env vars, 301 map checked, Search Console and GA4 verified, LinkedIn Featured links updated, old Lovable subscription cancelled only after a week of stable traffic.

**Phase 7 (later): Blog and newsletter archive.** Turn webinar recordings into posts. Add RSS.

Each phase ends with: what changed, how to test it, what Dimitris needs to decide.

## 10. Redirects and domain

- Primary domain: dkotlidas.com. Memory also lists dkotlidas.gr. Decide which is canonical and 301 the other. `[CONFIRM]`
- Build a redirect map from every old URL to the closest new one. Old Greek-market pages go to `/` or `/about`. Keep the map in `next.config` `redirects()`.
- Do not take the old site down until the new one passes Phase 5.

## 11. Facts to confirm before publishing (do not invent)

Claude Code: never fill these in yourself. Leave a visible `[CONFIRM]` in the draft and list each one in `docs/CONTENT-TODO.md`.

| Item | What is known | What is missing |
| --- | --- | --- |
| Number of active agency accounts in the hero | Manages 15 to 20 Meta and 5 to 10 Google accounts; works with 5 to 6 agencies | The exact number that is true on publish day |
| Experience and spend | 5+ years in paid media, €500K+ annual ad spend managed | Confirm the wording |
| Case studies | Documented high-ROAS e-commerce and B2B lead gen results exist | Which ones, real numbers, client permission, anonymise or name |
| Testimonials and logos | None confirmed | Permission and quotes. Omit if none |
| Photo | Passport style photo planned for LinkedIn | Final photo files, banner |
| Calendly URL | Dimitris has his own | The link. The slides from Aris must show Dimitris's link, not Aris's |
| Webinar | Title decided, hosted on Luma, first one late October | Date, Luma URL |
| 5 email course | Aris sends the 20 email sequence for adaptation | Titles and content of the 5 emails |
| Email provider | Klaviyo is the candidate | Final choice and API key |
| Legal entity | ΚΟΤΛΙΔΑΣ ΝΙΚ. ΔΗΜΗΤΡΙΟΣ, sole proprietorship, tax office Ε΄ Θεσσαλονίκης, registered address Ερμού 1, Thessaloniki | Whether to show the address publicly and which entity wording to use on the privacy page |
| Canonical domain | .com and .gr both mentioned | Which one |
| Non-compete wording | Part of the offer | Whether a template contract is available to mention |

## 12. Working rules for Claude Code

1. Ask before large decisions. One question at a time, with a default you recommend.
2. Work on a branch. Small commits with clear messages. No direct pushes to `main` until Phase 6.
3. Content rules for any text you write: English, no em dashes, no puffery, no "not just X but Y", no filler endings, concrete numbers over adjectives. If a number is unknown, use `[CONFIRM]`.
4. Never invent testimonials, logos, client names, results or credentials.
5. Do not send emails, publish, change DNS, change account settings or spend money. Prepare, then ask.
6. Keep secrets out of the repo. Provide `.env.example`.
7. Keep everything editable from `content/site.ts`, `content/webinars.json` and MDX files, so Dimitris can change copy without touching components.
8. After each phase, run lint, type check, build and the smoke test, and report results.

## 13. Acceptance criteria

- A visitor from a LinkedIn DM understands the offer and sees a booking button within one screen on mobile.
- `/book` shows the Calendly calendar and fires `call_booked` on schedule, verified in GTM preview.
- The course form stores the email in the chosen provider and fires `course_signup`. Invalid emails and bots are rejected.
- Lighthouse mobile scores of 95 or higher on `/`, `/book`, `/webinar`.
- No tag fires before consent in EU, UK or CH.
- Every `[CONFIRM]` is resolved or removed before launch. A CI check fails the build if the string `[CONFIRM` appears in production content.
- All old URLs redirect with a 301.
- Dimitris can update the next webinar date by editing one JSON file.

## 14. Context for how the site fits the plan

- Daily routine from 12 October: 2 hours each morning on LinkedIn and business development, 15 to 20 connection requests and 10 to 15 comments per day. Every one of those points at this site.
- Outreach chain per prospect: connection request, like, DM after 3 to 4 days with a 15 minute call offer, 6 to 7 follow-ups, then email with the subject "White-label performance marketing for your agency" and the Calendly link.
- Funnel: LinkedIn posts bring attention, the webinar brings the email address, the emails bring the call.
- Dates: catch-up with Aris on Thursday 15/10 at 17:00. First webinar toward the end of October, second in November (Black Friday preparation for agencies), third in December. Quarter review at the end of December.
- Target for the quarter: 1,000 connection requests and about 200 connect-backs. The site needs tracking that shows how many of those visits become calls.
- Christina takes over daily account checks and email marketing, so the email provider and list structure should be simple enough for her to run.

## 15. First message to send Claude Code

Paste this in VS Code after adding the file to the repo root:

> Read SITE-REBUILD-BRIEF.md fully. Start with Phase 0: audit the current repo and write docs/current-site-audit.md. Do not change or delete anything yet. When done, list your questions, one at a time, with a recommended default for each.
