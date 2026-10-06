# PLAN: Redesign dkotlidas.com

Ημερομηνία: 6 Οκτωβρίου 2026. Branch: `redesign`.
Πηγές: `CLAUDE.md` (κανόνες repo) και `BRIEF.md` (στρατηγική και περιεχόμενο).

Το αρχείο αυτό είναι μόνο σχέδιο. Δεν έχει αλλάξει κώδικας.

---

## 0. Συγκρούσεις μεταξύ BRIEF.md και CLAUDE.md (και πώς τις λύνω)

Το BRIEF γράφτηκε για Next.js και φόρμα email. Το CLAUDE.md, που ισχύει για αυτό το repo, λέει άλλα.
Όπου διαφωνούν, ακολουθώ το CLAUDE.md και προσαρμόζω το BRIEF.

| Θέμα | BRIEF.md | CLAUDE.md | Απόφαση στο πλάνο |
| --- | --- | --- | --- |
| Stack | Next.js App Router, Vercel, `next/image`, `next/og`, `next.config` redirects | Vite, React, TS, Tailwind, shadcn/ui | **Μένουμε σε Vite + React Router.** Τα αντίστοιχα: `react-helmet-async` για metadata, στατικά OG images, redirects στο hosting (βλ. §6) |
| Φόρμα leads / `/api/subscribe` | Φόρμα email για το 5 email course, API route, adapter provider | "Δεν υπάρχει φόρμα leads" | **Αποφασίστηκε (6/10):** το 5 email course και το `/free-course` βγαίνουν από τη Phase 1. Στη θέση τους μπαίνει ένα **απλό popup με lead magnet** για list building (βλ. §7b). Το popup μένει ανενεργό μέχρι να επιλεγεί provider (§9, ερώτηση 2). Το CLAUDE.md ενημερώθηκε ώστε να το επιτρέπει |
| Supabase / Notion | Δεν αναφέρεται | Δεν χρησιμοποιούμε, επιτρέπεται η αφαίρεση | **Αφαιρείται** (βλ. §3) |
| Branch | `rebuild` | - (session: `redesign`) | Δουλεύουμε στο `redesign` |
| Περιεχόμενο σε MDX | MDX για case studies | Καμία νέα βιβλιοθήκη χωρίς αιτιολόγηση | **TypeScript content files** (`src/content/*.ts`). Μηδέν νέες εξαρτήσεις, ίδιο αποτέλεσμα για 2 έως 3 case studies |
| Διάρκεια κλήσης | 15 λεπτά | Ίδιο Calendly link | **Αποφασίστηκε (6/10):** ο Dimitris άλλαξε το event σε 15' με το ίδιο URL `https://calendly.com/dkotlidas-vrwr/free-strategy-call`. Όλο το copy γράφει "15 min" |

---

## 1. Τι υπάρχει σήμερα

### 1.1 Stack και tooling
- Lovable export: Vite 5, React 18, TypeScript, Tailwind 3, shadcn/ui (48 components στο `src/components/ui`).
- Routing: `react-router-dom` 6, SPA. Metadata: `react-helmet-async`.
- Άλλα deps σε χρήση: `framer-motion` (δεν χρησιμοποιείται στα custom components, έλεγχος), `@tanstack/react-query` (μόνο ο provider), `lucide-react`, `zod`, `react-hook-form`, `@supabase/supabase-js`, `lovable-tagger` (dev).
- Tests: Vitest με ένα example test. ESLint 9.
- **Build: περνάει** (`npm run build`, 5.7 s).
- **Lint: 3 errors, 8 warnings** (2 σε shadcn `command.tsx`, `textarea.tsx`, 1 στο `require()` του `tailwind.config.ts`).

### 1.2 Routes

| Route | Αρχείο | Σημείωση |
| --- | --- | --- |
| `/` | `src/pages/Index.tsx` | One page portfolio, FAQ JSON-LD |
| `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` | Στο sitemap |
| `/admin/login` | `src/pages/AdminLogin.tsx` | Supabase auth |
| `/admin` | `src/pages/Admin.tsx` | Λίστα leads από Supabase |
| `*` | `src/pages/NotFound.tsx` | |

### 1.3 Sections της αρχικής (σειρά)
`Navbar` → `Hero` → `StatsBar` → `CaseStudies` → `Services` → `Consulting` → `FitSection` → `Process` → `About` → `Contact` (Calendly inline) → `FAQ` → `Footer`.
Το `Certifications.tsx` υπάρχει αλλά δεν χρησιμοποιείται. Το `NavLink.tsx` επίσης δεν χρησιμοποιείται.

Positioning σήμερα: γενικός freelancer για e-commerce και lead gen brands, "Paid Social & Google Ads Expert". Όχι white label για agencies.

### 1.4 Conversion και tracking
- **Calendly:** `src/components/Contact.tsx`, `CALENDLY_URL = "https://calendly.com/dkotlidas-vrwr/free-strategy-call"`, inline widget, φορτώνει `widget.js` με `useEffect`. Όλα τα CTA είναι anchors `#contact`.
- Δεν υπάρχει listener για `calendly.event_scheduled`, ούτε dataLayer events από τον κώδικα.
- **GTM:** `GTM-NTSC726P` στο `index.html` (head + noscript). Δεν αγγίζεται.
- **Meta pixel:** το CLAUDE.md αναφέρει snippet στο `index.html`, αλλά **δεν βρέθηκε** στο αρχείο. Πιθανότατα φορτώνει μέσα από το GTM. `[CONFIRM]`
- Google Search Console verification meta tag στο `index.html`.
- Consent banner: **CookieYes, φορτώνει μέσα από το GTM** (επιβεβαίωση Dimitris 6/10). Δεν υπάρχει στον κώδικα.

### 1.5 Supabase / Notion
- `src/integrations/supabase/client.ts`, `types.ts`: χρησιμοποιούνται μόνο από `Admin.tsx` και `AdminLogin.tsx`.
- `supabase/`: 6 migrations (`leads`, `user_roles`), 2 edge functions (`send-lead-notification`, `sync-lead-to-notion`), `config.toml`.
- Η φόρμα leads δεν υπάρχει πια στο front end. Το Supabase client φορτώνει ως ξεχωριστό chunk 174 KB.
- **`.env` είναι committed** με `VITE_SUPABASE_*` (publishable key, όχι secret, αλλά δεν πρέπει να είναι στο repo).

### 1.6 SEO και assets
- `index.html`: title/description/OG δείχνουν σε `dimitris-roi-engine.lovable.app` και OG image από Lovable R2.
- JSON-LD `ProfessionalService` στο `index.html`, `FAQPage` στο `Index.tsx`.
- `public/`: `sitemap.xml` (2 URLs), `robots.txt`, `llms.txt`, favicons, `placeholder.svg`.
- `src/assets/dimitris-portrait.jpg`: **2.5 MB, 1631x1920**, μπαίνει στο hero. Το μεγαλύτερο πρόβλημα για LCP.
- Fonts: Montserrat, Open Sans, Lora, Space Mono από Google Fonts με `@import` (render blocking).

### 1.7 Ασυνέπειες σε αριθμούς (δεν τις διορθώνω μόνος μου)
| Πού | Τι λέει |
| --- | --- |
| `StatsBar.tsx` | €3M+ ad spend, 20+ accounts, up to 10x ROAS |
| `index.html`, `llms.txt` | €500K+ managed, up to 11.93x ROAS |
| `BRIEF.md` §11 | 5+ years, €500K+ annual spend, 15-20 Meta και 5-10 Google accounts |

Όλα μπαίνουν ως `[CONFIRM]` στο `docs/CONTENT-TODO.md`.

### 1.8 Hosting
Το README είναι το default του Lovable. Δεν υπάρχει `vercel.json` ή `netlify.toml`. Το site πιθανότατα σερβίρεται από Lovable με custom domain. Το νέο site πάει σε Vercel (απόφαση 6/10).

---

## 2. Τι κρατάμε

| Στοιχείο | Γιατί |
| --- | --- |
| Vite, React, TS, Tailwind, shadcn/ui, React Router, `react-helmet-async` | Κανόνας CLAUDE.md, δουλεύει, build περνάει |
| `src/components/ui/*` (shadcn) | Button, Card, Accordion, Sheet (mobile menu), Badge, Separator, Input, Label, Sonner. Τα αχρησιμοποίητα μένουν προς το παρόν (tree-shaken) |
| Calendly URL `https://calendly.com/dkotlidas-vrwr/free-strategy-call` | Κανόνας CLAUDE.md. Μεταφέρεται σε ένα σημείο (`src/content/site.ts`) |
| `index.html`: GTM snippets, Search Console tag | Κανόνας CLAUDE.md |
| `bun.lock`, `bun.lockb`, `package-lock.json` | Κανόνας CLAUDE.md |
| `src/assets/dimitris-portrait.jpg` | Ως πηγή. Θα παραχθεί βελτιστοποιημένη έκδοση (WebP/AVIF, ~1000 px) μέχρι να έρθει η νέα φωτογραφία |
| `src/lib/utils.ts`, `src/hooks/use-mobile.tsx`, toast hooks | Χρησιμοποιούνται από shadcn |
| `src/hooks/useScrollFade.ts` | Ξαναγράφεται ελαφρά για `prefers-reduced-motion` |
| Case study δεδομένα (`CaseStudies.tsx`) | Ως πρώτη ύλη. Μπαίνουν όλα `[CONFIRM]` μέχρι να επιβεβαιωθούν αριθμοί και άδεια |
| LinkedIn URL `https://www.linkedin.com/in/dimitrioskotlidas/` | Βασική πηγή traffic |
| `public/robots.txt`, `sitemap.xml`, `llms.txt`, favicons | Ενημερώνονται με τα νέα routes |
| Vitest setup | Για unit tests του tracking helper |

## 3. Τι αφαιρούμε

| Στοιχείο | Αιτία |
| --- | --- |
| `supabase/` (migrations, functions, config) | CLAUDE.md: δεν χρησιμοποιούμε Supabase/Notion |
| `src/integrations/supabase/` | Ίδιο |
| `src/pages/Admin.tsx`, `src/pages/AdminLogin.tsx` και τα routes `/admin`, `/admin/login` | Μοναδικοί χρήστες του Supabase. Χωρίς φόρμα δεν υπάρχουν leads να διαχειριστείς |
| `@supabase/supabase-js` από `package.json` | Αφαίρεση dependency. **Προσοχή:** αυτό θα άλλαζε `package-lock.json`, που δεν αγγίζουμε. Προτείνω να αφαιρεθεί μόνο ο κώδικας και το package να αφαιρεθεί από τον Dimitris με `npm uninstall` σε ξεχωριστό commit, ή να το εγκρίνει ρητά. `[ΑΠΟΦΑΣΗ]` |
| `.env` από το git | Προσθήκη στο `.gitignore`, νέο `.env.example`. Τα Supabase keys δεν χρειάζονται πια. Προτείνεται rotate/διαγραφή του Supabase project από τον Dimitris |
| `Services`, `Consulting`, `FitSection`, `StatsBar`, `Certifications`, `NavLink` | Αντικαθίστανται από τα νέα sections του BRIEF §5. Consulting/training (Greek market, 1-on-1) δεν ανήκουν στο νέο offer |
| Instagram και Facebook links στο footer | BRIEF §5.12: μόνο LinkedIn και email |
| Lovable OG URLs και OG image | Νέα στατικά OG images στο `public/og/` |
| Fonts Montserrat, Open Sans, Lora, Space Mono | BRIEF §7: μία sans οικογένεια (Inter) |

Πριν από κάθε αφαίρεση: `npm run build` πρέπει να περνάει.

## 4. Τι ξαναγράφουμε

| Αρχείο | Αλλαγή |
| --- | --- |
| `src/index.css`, `tailwind.config.ts` | Tokens `--bg`, `--fg`, `--muted`, `--border`, `--accent` (map σε shadcn vars), dark mode με `prefers-color-scheme`, Inter, body 17-18 px, line height 1.6, max width 1120 px |
| `src/App.tsx` | Νέα routes (§5), layout route με Header/Footer, `ScrollToTop`, αφαίρεση admin routes, αφαίρεση `QueryClientProvider` αν δεν χρειάζεται |
| `Navbar.tsx` → `SiteHeader.tsx` | Nav: How it works, Case studies, About, Webinar. Κουμπί "Book a 15 min call" → `/book`. Sticky, mobile menu με shadcn `Sheet` |
| `Footer.tsx` → `SiteFooter.tsx` | Όνομα, μία γραμμή, LinkedIn, email, `/privacy`, `/cookies`, copyright |
| `Hero.tsx` | Νέο copy BRIEF §5.2, proof line με `[CONFIRM]`, CTA σε `/book` |
| `CaseStudies.tsx` | Γίνεται `CaseStudyCard` + `CaseStudiesSection` που διαβάζει από `src/content/case-studies.ts` |
| `Process.tsx` | 7 βήματα BRIEF §5.6 και σημείωση για free 3 slide audit |
| `About.tsx` | Γίνεται σελίδα `/about` (BRIEF §6), credibility line Knowcrunch |
| `FAQ.tsx` | Objections + practical questions από content file, `FAQPage` JSON-LD από τα ίδια δεδομένα |
| `Contact.tsx` → `CalendlyEmbed.tsx` | Ίδιο URL. Φόρτωση script μία φορά, listener `calendly.event_scheduled` → `call_booked` στο dataLayer → redirect `/thanks/booked`. Χρώματα από tokens |
| `PrivacyPolicy.tsx` → `Privacy.tsx` | Νέο URL `/privacy` (βλ. §6), οντότητα `[CONFIRM]` |
| `index.html` | **Μόνο** title, description, OG, canonical, JSON-LD. Τα GTM snippets μένουν αυτούσια |
| `README.md` | Οδηγίες για το νέο site και πώς αλλάζει περιεχόμενο |

---

## 5. Προτεινόμενη δομή αρχείων

```
index.html                     # GTM αμετάβλητο, νέα meta
vercel.json                    # 301 redirects, SPA rewrites, security headers
.env.example                   # VITE_SITE_URL, VITE_EMAIL_SIGNUP_URL
public/
  og/default.png, og/book.png, og/webinar.png
  robots.txt, sitemap.xml, llms.txt
docs/
  current-site-audit.md        # σύνοψη §1 (BRIEF Phase 0)
  tracking-plan.md             # events, παράμετροι, triggers για GTM
  CONTENT-TODO.md              # όλα τα [CONFIRM]
  redirects.md                 # χάρτης παλιών → νέων URLs
src/
  main.tsx
  App.tsx                      # routes
  index.css
  content/
    site.ts                    # όνομα, links, Calendly URL, nav, stats, email
    home.ts                    # copy των sections της αρχικής
    faq.ts                     # objections + practical
    case-studies.ts            # slug, client type, goal, approach, 3 numbers
    webinars.json              # επόμενο webinar, past recordings
    lead-magnet.ts             # τίτλος, περιγραφή, αρχείο lead magnet, κανόνες εμφάνισης popup [CONFIRM]
  lib/
    utils.ts
    track.ts                   # typed dataLayer helper
    utm.ts                     # διατήρηση UTM σε sessionStorage, προσθήκη σε Calendly/Luma links
  hooks/
    useScrollFade.ts           # με prefers-reduced-motion
    use-mobile.tsx, use-toast.ts
  components/
    ui/                        # shadcn, όπως είναι
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      Section.tsx              # wrapper: max width, spacing, id
      Seo.tsx                  # Helmet: title pattern, canonical, OG, JSON-LD
    BookCallButton.tsx         # shadcn Button → /book, fires cta_click
    CalendlyEmbed.tsx
    LumaEmbed.tsx
    StatStrip.tsx
    CaseStudyCard.tsx
    LeadMagnetPopup.tsx        # shadcn Dialog + Input + Button
    home/
      Hero.tsx
      Problem.tsx
      Solution.tsx
      WhatIRun.tsx
      HowItWorks.tsx
      Proof.tsx
      Objections.tsx
      (χωρίς LeadMagnetBlock: το lead magnet ζει μόνο στο popup)
      WebinarBlock.tsx
      FinalCta.tsx
  pages/
    Index.tsx                  # /
    Book.tsx                   # /book
    Webinar.tsx                # /webinar
    (FreeCourse.tsx: εκτός Phase 1)
    Thanks.tsx                 # /thanks/:type (booked | webinar)
    CaseStudies.tsx            # /case-studies
    CaseStudy.tsx              # /case-studies/:slug
    About.tsx                  # /about
    Privacy.tsx                # /privacy
    Cookies.tsx                # /cookies
    NotFound.tsx
  test/
    track.test.ts
    routes.test.tsx            # κάθε CTA καταλήγει σε /book, το /book έχει το σωστό Calendly URL
```

Σημείωση: το CLAUDE.md λέει νέα components στο `src/components`. Οι υποφάκελοι `layout/` και `home/` είναι μέσα σε αυτόν. Αν προτιμάς flat δομή, τα βγάζω ένα επίπεδο πάνω.

### Νέες βιβλιοθήκες
- **`vite-react-ssg`: εγκρίθηκε (6/10).** Prerender για στατικό HTML ανά route. Λόγος: SEO και LinkedIn previews, γιατί το LinkedIn δεν τρέχει JavaScript και θα βλέπει τα meta του `index.html` για κάθε σελίδα. Χωρίς αυτό, τα OG ανά σελίδα δεν θα εμφανίζονται στα LinkedIn shares.
- **`@playwright/test`: θέλει έγκριση.** Για το smoke test του BRIEF §8. Ο Chromium υπάρχει ήδη στο περιβάλλον.

---

## 6. URLs και redirects (χρειάζονται 301 για SEO)

| Παλιό URL | Νέο URL | Τύπος |
| --- | --- | --- |
| `/privacy-policy` | `/privacy` | **Αλλαγή URL**, 301 |
| `/admin`, `/admin/login` | `/` | Αφαίρεση, 301 (ή 410) |
| `/#contact` | `/book` | Hash, δεν γίνεται server redirect. Μικρό client script στο `Index` που στέλνει `#contact` → `/book` |
| `/#services`, `/#about`, `/#case-studies` κ.λπ. | `/#how-it-works`, `/about`, `/case-studies` | Hash, client side |

Ένα SPA δεν μπορεί να στείλει πραγματικό 301. **Hosting: Vercel (απόφαση 6/10).**
- `vercel.json` στη ρίζα: `redirects` με `permanent: true` (301) για τον πίνακα πάνω, και `rewrites` όλων των routes στο `/index.html` για το React Router.
- Το ίδιο αρχείο κρατάει security headers (BRIEF §8).
- Η σύνδεση του repo στο Vercel, τα env vars και το DNS γίνονται από τον Dimitris (BRIEF §12.5).

Canonical domain (`.com` ή `.gr`): `[CONFIRM]`. Προτείνω `dkotlidas.com`, αφού όλα τα canonical tags το χρησιμοποιούν ήδη.

---

## 7. Tracking (χωρίς αλλαγή στα GTM snippets)

- `src/lib/track.ts`: `track(event, params)` που κάνει `window.dataLayer.push`. Typed union για: `cta_click` (cta_id, location), `book_call_view`, `call_booked`, `webinar_register_click`, `webinar_registered`, `lead_magnet_view`, `lead_magnet_signup`, `case_study_view`, `scroll_75`, `outbound_linkedin`.
- `call_booked`: από το Calendly `postMessage` `calendly.event_scheduled` στο `CalendlyEmbed`.
- `webinar_registered`: πυροδοτείται στο `/thanks/webinar`, αν το Luma κάνει redirect εκεί μετά την εγγραφή. `[CONFIRM]`
- `lead_magnet_view` όταν ανοίγει το popup, `lead_magnet_signup` όταν το email γίνει δεκτό από τον provider.
- UTM: αποθήκευση στην πρώτη σελίδα, προσθήκη ως `utm_*` στο Calendly URL (το Calendly τα δέχεται και τα δείχνει στο booking).
- Consent Mode v2: **το χειρίζεται το CookieYes μέσα στο GTM** (απόφαση 6/10). Κανένα consent component στον κώδικα, καμία αλλαγή στο `index.html`.
  - Έλεγχος στη Phase 7: το CookieYes template ορίζει default `denied` για EU, UK, CH πριν από κάθε άλλο tag, και τα GA4/Meta tags έχουν consent checks.
  - Τα events του `track.ts` γράφονται πάντα στο dataLayer. Το αν θα φύγουν προς GA4/Meta το αποφασίζει το GTM με βάση το consent.
  - Ο σύνδεσμος "Cookie settings" στο footer ανοίγει ξανά το CookieYes banner (`revisitCkyConsent()`, αν το API είναι διαθέσιμο).
- GA4 και Meta Pixel μένουν μέσα στο GTM. Το spec γράφεται στο `docs/tracking-plan.md`.

## 7b. Lead magnet popup (απόφαση 6/10)

- Component `LeadMagnetPopup` με shadcn `Dialog`, `Input`, `Label`, `Button`. Χωρίς νέα βιβλιοθήκη.
- Περιεχόμενο από `src/content/lead-magnet.ts`: τίτλος, 2 γραμμές περιγραφή, κουμπί, γραμμή privacy. Όλα `[CONFIRM]` μέχρι να υπάρχει το lead magnet.
- Πότε εμφανίζεται (προτεινόμενο default): μία φορά ανά επισκέπτη, μετά από 50% scroll ή exit intent σε desktop, ποτέ πριν από 20 δευτερόλεπτα. Ποτέ στα `/book`, `/thanks/*`, `/privacy`, `/cookies`. Ποτέ όσο είναι ανοιχτό το CookieYes banner (ανοίγει μόνο αφού ο επισκέπτης απαντήσει στο consent). Το κλείσιμο θυμάται για 30 ημέρες (`localStorage`).
- Το popup δεν κρύβει το βασικό CTA: η κλήση μένει η κύρια μετατροπή, το popup είναι για όσους δεν είναι έτοιμοι.
- Mobile: χωρίς exit intent, εμφάνιση μόνο με scroll, πλήρες κλείσιμο με ένα tap. Google τιμωρεί intrusive interstitials σε mobile, οπότε δεν ανοίγει στην πρώτη οθόνη.
- Accessibility: focus trap και Esc από το Radix Dialog, label στο πεδίο email.
- Validation με `zod` (υπάρχει ήδη), honeypot πεδίο.
- **Προορισμός emails:** αποφασίστηκε (6/10). Το popup χτίζεται αλλά μένει ανενεργό μέχρι να επιλεγεί provider (MailerLite ή Brevo) και να υπάρχει το lead magnet. Η σύνδεση με τον provider γίνεται με το hosted form endpoint του, χωρίς δικό μας backend.

---

## 8. Βήματα υλοποίησης (με σειρά)

Κάθε βήμα: μικρά commits στο `redesign`, `npm run build` να περνάει, αναφορά στο τέλος (τι άλλαξε, πώς ελέγχεται, τι πρέπει να αποφασίσει ο Dimitris).

**Βήμα 1. Audit και docs (χωρίς αλλαγή κώδικα)**
- `docs/current-site-audit.md` από το §1.
- `docs/CONTENT-TODO.md` με όλα τα `[CONFIRM]` του BRIEF §11 και του §1.7.
- `docs/redirects.md` από το §6.

**Βήμα 2. Καθαρισμός**
- Αφαίρεση `Admin`, `AdminLogin`, admin routes, `src/integrations/supabase`, `supabase/`.
- `.env` εκτός git, `.env.example`, `.gitignore`.
- `npm run build` και `npm run lint`. Διόρθωση των 3 υπαρχόντων lint errors.
- Απόφαση για `@supabase/supabase-js` στο `package.json` (§3).

**Βήμα 3. Foundation**
- Tokens, Inter, typography scale, dark mode στο `index.css` / `tailwind.config.ts`.
- `src/content/site.ts` με Calendly URL, links, nav, stats.
- `vite-react-ssg`: routes ως array, `main.tsx` με `ViteReactSSG`, build script `vite-react-ssg build`. Έλεγχος ότι το `dist/` έχει ένα HTML ανά route και τα GTM snippets αυτούσια.
- Layout route, `SiteHeader`, `SiteFooter`, `Section`, `Seo`, `BookCallButton`.
- Βελτιστοποιημένο portrait.
- **Στάση: δείχνω στον Dimitris την πρώτη οθόνη (header + hero, mobile και desktop) για έγκριση** (BRIEF §7).

**Βήμα 4. Landing page `/`**
- Sections με τη σειρά του BRIEF §5.2 έως §5.11 (χωρίς το §5.9, που γίνεται popup), copy από `src/content/home.ts`, `faq.ts`, `case-studies.ts`.
- Κάθε CTA κλήσης πάει σε `/book`. Mobile first.
- Αφαίρεση των παλιών sections μόλις αντικατασταθούν.

**Βήμα 5. Conversion pages**
- `/book` με `CalendlyEmbed` (ίδιο URL), `call_booked`, redirect `/thanks/booked`.
- `/webinar` και `WebinarBlock` από `webinars.json`, `LumaEmbed`, fallback "Next date announced soon".
- `LeadMagnetPopup` (§7b). Μένει ανενεργό (`enabled: false` στο `lead-magnet.ts`) μέχρι να υπάρχουν lead magnet και προορισμός για τα emails.
- `/thanks/:type`, `lib/track.ts`, `lib/utm.ts`, `docs/tracking-plan.md`.

**Βήμα 6. Proof, about, legal**
- `/case-studies`, `/case-studies/:slug` (index + 2 πρώτα).
- `/about`, `/privacy` (νέο URL), `/cookies`.

**Βήμα 7. SEO, performance, QA**
- `Seo` ανά σελίδα, JSON-LD `Person`, `ProfessionalService`, `FAQPage`, `sitemap.xml`, `robots.txt`, `llms.txt`, στατικά OG images.
- Έλεγχος prerender: κάθε route έχει δικό του `<title>`, OG tags και περιεχόμενο στο στατικό HTML (LinkedIn Post Inspector).
- Fonts με `<link rel="preload">` αντί `@import` (στο `index.html`, εκτός GTM block).
- Lighthouse mobile 95+ σε `/`, `/book`, `/webinar`.
- Tests: track helper, όλα τα CTA καταλήγουν σε `/book`, το `/book` έχει το σωστό Calendly URL.
- Script που αποτυγχάνει αν βρει `[CONFIRM` στο `src/content` κατά το production build.

**Βήμα 8. Launch (με τον Dimitris, όχι από εμένα)**
- Σύνδεση repo στο Vercel, έλεγχος redirects στο preview, canonical domain, DNS.
- GTM preview: `call_booked`, consent, κανένα tag πριν από consent σε EU/UK/CH.
- LinkedIn Featured links. Το Lovable ακυρώνεται μετά από μία εβδομάδα σταθερής κίνησης.

**Phase 2 (αργότερα):** `/blog`, `/newsletter`.

---

## 9. Αποφάσεις που χρειάζομαι (μία τη φορά, με προτεινόμενο default)

1. ~~**Διάρκεια κλήσης**~~ **Αποφασίστηκε:** 15', ίδιο URL. Το copy γράφει "Book a 15 min call".
2. ~~**Email course / προορισμός emails**~~ **Αποφασίστηκε:** popup με lead magnet, χτίζεται τώρα και μένει ανενεργό (`enabled: false`) μέχρι να υπάρχουν lead magnet και provider. Υποψήφιοι provider: MailerLite ή Brevo (δωρεάν πακέτο, εύκολα για την Christina). Το CLAUDE.md ενημερώθηκε.
3. ~~**Hosting**~~ **Αποφασίστηκε (6/10):** Vercel. Redirects και SPA rewrite στο `vercel.json`, preview deploy ανά branch.
4. ~~**Consent Mode**~~ **Αποφασίστηκε (6/10):** CookieYes, ήδη στο GTM. Τίποτα στον κώδικα, μόνο έλεγχος στη Phase 7.
5. ~~**`@supabase/supabase-js`**~~ **Έγινε (6/10, με άδεια Dimitris):** αφαιρέθηκαν ο κώδικας, ο φάκελος `supabase/`, οι σελίδες admin και το package. Από το `package-lock.json` βγήκαν μόνο οι εγγραφές του Supabase. Το `bun.lock`/`bun.lockb` δεν άλλαξαν.
6. ~~**Prerender**~~ **Αποφασίστηκε (6/10):** ναι, με `vite-react-ssg` ως νέα dependency (λόγος: LinkedIn previews και SEO ανά σελίδα). Μπαίνει στο Βήμα 3 (foundation), ώστε όλες οι σελίδες να χτιστούν από την αρχή με αυτό. Το `index.html` μένει το template, άρα τα GTM snippets δεν αλλάζουν. Η εγκατάσταση θα αλλάξει το `package-lock.json` μόνο για αυτό το package.
7. **Meta pixel:** επιβεβαίωσε ότι φορτώνει από το GTM (δεν είναι στο `index.html`).
