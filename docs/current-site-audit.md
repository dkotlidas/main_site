# Audit του σημερινού site

Ημερομηνία: 6 Οκτωβρίου 2026. Branch: `redesign`.
Phase 0 του BRIEF.md (§9). Καταγραφή του site όπως ήταν πριν από το redesign, μαζί με όσα έχουν ήδη αλλάξει.

## 1. Stack

| Θέμα | Τιμή |
| --- | --- |
| Προέλευση | Lovable export (`lovable-tagger` στα devDependencies, default README του Lovable) |
| Build | Vite 5, plugin `@vitejs/plugin-react-swc`, alias `@` → `src` |
| UI | React 18, TypeScript 5, Tailwind 3, shadcn/ui (48 components στο `src/components/ui`) |
| Routing | `react-router-dom` 6, SPA, lazy loading για τις δευτερεύουσες σελίδες |
| Metadata | `react-helmet-async` |
| Animation | `framer-motion` (Hero), δικό μας `useScrollFade` |
| Tests | Vitest + Testing Library, 1 example test |
| Lint | ESLint 9, `typescript-eslint` |
| Package managers | `package-lock.json`, `bun.lock`, `bun.lockb` (όλα committed) |

### Κατάσταση εντολών (6/10, μετά την αφαίρεση του Supabase)

| Εντολή | Αποτέλεσμα |
| --- | --- |
| `npm run build` | Περνάει |
| `npm test` | 1/1 περνάει |
| `npm run lint` | 3 errors, 7 warnings (βλ. §8) |

## 2. Routes

| Route | Αρχείο | Κατάσταση |
| --- | --- | --- |
| `/` | `src/pages/Index.tsx` | Ενεργό |
| `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` | Ενεργό, στο sitemap |
| `/admin/login` | `AdminLogin.tsx` | **Αφαιρέθηκε 6/10**, θέλει 301 |
| `/admin` | `Admin.tsx` | **Αφαιρέθηκε 6/10**, θέλει 301 |
| `*` | `src/pages/NotFound.tsx` | Ενεργό |

Anchors της αρχικής που χρησιμοποιούνται στο nav και στα CTA: `#case-studies`, `#services`, `#about`, `#contact`. Υπάρχει και το `#certifications`, αλλά το component δεν εμφανίζεται.

## 3. Αρχική σελίδα

Σειρά sections: `Navbar`, `Hero`, `StatsBar`, `CaseStudies`, `Services`, `Consulting`, `FitSection`, `Process`, `About`, `Contact`, `FAQ`, `Footer`.

| Section | Περιεχόμενο | Τι γίνεται |
| --- | --- | --- |
| Navbar | Results, Services, About, Contact, κουμπί προς `#contact` | Ξαναγράφεται (`SiteHeader`) |
| Hero | "Dimitrios Kotlidas", "Performance Marketing Specialist, Meta & Google Ads", CTA "Book a Free 30min Call" | Ξαναγράφεται με το copy του BRIEF §5.2 |
| StatsBar | €3M+ ad spend, 20+ accounts, up to 10x ROAS, 5+ years | Αφαιρείται, οι αριθμοί περνούν στο `CONTENT-TODO.md` |
| CaseStudies | 4 κάρτες (2 B2B lead gen, kitchenware e-commerce, local service), καμία με testimonial | Δεδομένα ως πρώτη ύλη, όλα `[CONFIRM]` |
| Services | Meta & Social Ads (Meta, TikTok, LinkedIn), Google Ads, tracking | Αντικαθίσταται από "What I run" |
| Consulting | Agency consulting, tracking training, 1-on-1 mentoring | Αφαιρείται (εκτός offer) |
| FitSection | Ποιοι ταιριάζουν και ποιοι όχι (brands €3K+/μήνα, budgets κάτω από €500) | Αφαιρείται (το ICP είναι agencies) |
| Process | 4 βήματα (call, plan, setup 3-5 ημέρες, optimisation) | Αντικαθίσταται από τα 7 βήματα του BRIEF §5.6 |
| About | Portrait, 4 παράγραφοι, CTA | Γίνεται σελίδα `/about` |
| Contact | Calendly inline embed | Γίνεται σελίδα `/book` |
| FAQ | 5 ερωτήσεις για brands (min budget €1,500, χρόνος αποτελεσμάτων, creatives) | Αντικαθίσταται από objections του BRIEF §5.8 |
| Footer | LinkedIn, Instagram, Facebook | Μόνο LinkedIn και email |

Αχρησιμοποίητα components: `Certifications.tsx`, `NavLink.tsx`.

## 4. Conversion

- **Calendly:** `https://calendly.com/dkotlidas-vrwr/free-strategy-call`, μόνο στο `src/components/Contact.tsx`. Inline widget με παραμέτρους χρωμάτων για σκούρο θέμα (`background_color=1a1a2e`, `primary_color=6d5acd`). Το `widget.js` φορτώνει με `useEffect`.
- Το event στο Calendly άλλαξε σε 15 λεπτά (6/10). Το site γράφει ακόμη "30min" σε 3 σημεία (`Hero`, `CaseStudies`, `Contact`).
- Όλα τα CTA είναι anchors `#contact`. Δεν υπάρχει ξεχωριστή σελίδα κράτησης.
- Δεν υπάρχει listener για `calendly.event_scheduled`, δηλαδή καμία μέτρηση κρατήσεων από τον κώδικα.
- Φόρμα leads: δεν υπάρχει στο front end. Υπήρχε παλιότερα (πίνακας `leads` στο Supabase, sync σε Notion), αφαιρέθηκε 6/10.

## 5. Tracking

| Στοιχείο | Πού |
| --- | --- |
| GTM `GTM-NTSC726P` | `index.html`, head script και noscript iframe. **Δεν αγγίζεται** |
| Meta pixel | Μέσα στο GTM (επιβεβαίωση 6/10) |
| GA4 | Μέσα στο GTM |
| Consent | CookieYes μέσα στο GTM (επιβεβαίωση 6/10) |
| Search Console | `google-site-verification` meta στο `index.html` |
| dataLayer events από κώδικα | Κανένα |
| UTM handling | Κανένα |

## 6. SEO

- `index.html`: title "Dimitrios Kotlidas — Paid Social & Google Ads Expert", description με "€500K+ managed, up to 11.93x ROAS".
- `og:url` και JSON-LD `url` δείχνουν στο `dimitris-roi-engine.lovable.app`. Η OG εικόνα είναι screenshot του Lovable σε R2. Πρέπει να αλλάξουν.
- Canonical στις σελίδες: `https://dkotlidas.com/...`.
- JSON-LD: `ProfessionalService` (Strasbourg, FR) στο `index.html`, `FAQPage` στο `Index.tsx`.
- `public/sitemap.xml`: `/`, `/privacy-policy`.
- `public/robots.txt`: `Disallow: /admin`, `/admin/login`.
- `public/llms.txt`: περιγραφή του παλιού offer (brands, min €1,500/μήνα).
- SPA χωρίς prerender: crawlers και LinkedIn βλέπουν μόνο τα meta του `index.html`. Λύνεται με `vite-react-ssg` (απόφαση 6/10).

## 7. Assets και performance

| Asset | Θέμα |
| --- | --- |
| `src/assets/dimitris-portrait.jpg` | 2.5 MB, 1631x1920 JPEG, στο hero. Ο μεγαλύτερος κίνδυνος για LCP |
| Fonts | Montserrat, Open Sans, Lora, Space Mono με `@import` στο `index.css` (render blocking, 4 οικογένειες) |
| JS bundle | `index` 490 KB (157 KB gzip). Το chunk του Supabase (174 KB) έφυγε 6/10 |
| `public/placeholder.svg` | Lovable placeholder, αχρησιμοποίητο |

## 8. Τεχνικά θέματα

- **Lint errors:** `src/components/ui/command.tsx:24` και `src/components/ui/textarea.tsx:5` (empty interface), `tailwind.config.ts:162` (`require()`).
- **`package-lock.json` εκτός συγχρονισμού:** του λείπουν πακέτα που χρησιμοποιούνται (π.χ. `react-helmet-async`). Το `npm ci` πιθανότατα αποτυγχάνει. Χρειάζεται ένα `npm install` που το ξαναγράφει, με έγκριση Dimitris, πριν από το πρώτο deploy στο Vercel.
- **`.env` committed:** περιέχει μόνο `VITE_SUPABASE_*`, που δεν χρησιμοποιούνται πια. Να βγει από το git και να μπει `.env.example`. Προτείνεται διαγραφή του Supabase project (`ppuzojwnushynbnfqvxt`).
- **Privacy policy:** αναφέρει "contact form" και newsletter που δεν υπάρχουν, και controller "Dimitrios Kotlidas, Strasbourg" χωρίς την επιχειρηματική οντότητα.
- **Όνομα:** το site γράφει "Dimitrios", το BRIEF ζητά "Dimitris" για να ταιριάζει με το LinkedIn. Στο `CONTENT-TODO.md`.

## 9. Hosting και domain

- Δεν υπάρχει `vercel.json` ή `netlify.toml`. Το site πιθανότατα σερβίρεται από Lovable με custom domain.
- Νέο hosting: Vercel (απόφαση 6/10). Redirects στο `vercel.json` (βλ. `docs/redirects.md`).
- Canonical domain `.com` ή `.gr`: ανοιχτό (`CONTENT-TODO.md`).

## 10. Τι έχει ήδη αλλάξει στο `redesign`

| Ημερομηνία | Αλλαγή |
| --- | --- |
| 6/10 | `PLAN.md` |
| 6/10 | Αφαίρεση Supabase (`supabase/`, `src/integrations/supabase/`, admin σελίδες, package). Από το `package-lock.json` βγήκαν μόνο οι εγγραφές του Supabase |
| 6/10 | `CLAUDE.md`: lead magnet popup, Meta pixel μέσω GTM |
