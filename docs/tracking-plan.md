# Tracking plan

Για το GTM container `GTM-NTSC726P` (BRIEF §8). Ο κώδικας στέλνει μόνο events στο `dataLayer` μέσω του `src/lib/track.ts`. GA4, Meta Pixel και consent ρυθμίζονται **μέσα στο GTM**, όχι στον κώδικα.

## 1. Consent

- CookieYes φορτώνει από το GTM και ορίζει Consent Mode v2.
- Default: `denied` για `ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage` σε EU, UK, CH (BRIEF §13).
- Τα events μπαίνουν στο `dataLayer` πάντα. Τα GA4/Meta tags πρέπει να έχουν consent checks (Additional consent: `analytics_storage` για GA4, `ad_storage` για Meta).
- Footer: "Cookie settings" καλεί `window.revisitCkyConsent()`.

## 2. Events

Όλα τα events είναι `dataLayer.push({ event: "<name>", ...params })`.

| Event | Πότε | Παράμετροι | Πού στον κώδικα | GA4 | Meta |
| --- | --- | --- | --- | --- | --- |
| `cta_click` | Κλικ σε κουμπί "Book a call" ή "Watch the next webinar" | `cta_id` (`book_call`, `webinar`), `location` (`header`, `header_mobile`, `mobile_menu`, `hero`, `final_cta`, `home_webinar`, `webinar_page`, `thanks_webinar`, `not_found`) | `BookCallButton.tsx`, `Hero.tsx` | event `cta_click` | - |
| `book_call_view` | Φόρτωση `/book` | - | `pages/Book.tsx` | event `book_call_view` | `ViewContent` (προαιρετικά) |
| `call_booked` | Ολοκληρωμένη κράτηση στο Calendly embed | - | `CalendlyEmbed.tsx` (σήμα) → `pages/Thanks.tsx` στο `/thanks/booked` | **key event** `call_booked` | `Schedule` (standard event) |
| `webinar_register_click` | Κλικ στο "Register on Luma" | `location` | `LumaEmbed.tsx` | event | - |
| `webinar_registered` | Φόρτωση `/thanks/webinar`, μία φορά ανά session | - | `pages/Thanks.tsx` | **key event** | `CompleteRegistration` |
| `lead_magnet_view` | Άνοιγμα popup (σήμερα ανενεργό) | - | `LeadMagnetPopup.tsx` | event | - |
| `lead_magnet_signup` | Επιτυχής εγγραφή στο popup (σήμερα ανενεργό) | - | `LeadMagnetPopup.tsx` | **key event** | `Lead` |
| `case_study_view` | Φόρτωση σελίδας case study | `slug` | `pages/CaseStudy.tsx` | event | - |
| `scroll_75` | 75% της σελίδας, μία φορά ανά σελίδα | `page_path` | `hooks/usePageTracking.ts` | event | - |
| `outbound_linkedin` | Κλικ σε link προς LinkedIn | `location` | footer, `/book`, `/webinar`, thanks, webinar block | event | - |

### Πώς μετράει η κράτηση (`call_booked`)

1. Το Calendly embed στέλνει `postMessage` με `calendly.event_scheduled`.
2. Το `CalendlyEmbed` κρατάει σημάδι στο `sessionStorage` και πάει στο `/thanks/booked`.
3. Η σελίδα `/thanks/booked` στέλνει `call_booked` μόνο αν βρει το σημάδι, και το σβήνει.

Άρα refresh ή απευθείας επίσκεψη στο `/thanks/booked` δεν μετράει δεύτερη φορά.

### `webinar_registered`

Το Luma δεν ειδοποιεί το site. Το event στέλνεται όταν ο επισκέπτης φτάσει στο `/thanks/webinar`. Χρειάζεται redirect από το Luma μετά την εγγραφή (`[CONFIRM]` CONTENT-TODO #23). Χωρίς αυτό, μετράμε μόνο το `webinar_register_click`.

## 3. UTM

- Το `src/lib/utm.ts` κρατάει `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` από την πρώτη σελίδα με UTM της επίσκεψης (`sessionStorage`).
- Προστίθενται στο URL του Calendly embed, οπότε φαίνονται στα στοιχεία της κράτησης στο Calendly.
- Προτεινόμενη μορφή για LinkedIn DMs: `?utm_source=linkedin&utm_medium=dm&utm_campaign=q4-2026-outreach`.

## 4. Ρύθμιση στο GTM (checklist)

- [ ] Custom Event triggers για κάθε event του §2.
- [ ] Data Layer Variables: `cta_id`, `location`, `slug`, `page_path`.
- [ ] GA4 Event tags. Mark as key events στο GA4: `call_booked`, `webinar_registered`, `lead_magnet_signup`.
- [ ] Meta Pixel: `Schedule` στο `call_booked`, `CompleteRegistration` στο `webinar_registered`, `Lead` στο `lead_magnet_signup`.
- [ ] Page views: το site είναι SPA μετά το πρώτο φόρτωμα. GA4 Configuration με "Page changes based on browser history events" (Enhanced Measurement) ή History Change trigger για το Meta PageView.
- [ ] Consent checks σε όλα τα tags.
- [ ] Έλεγχος στο GTM Preview και στο Meta Pixel Helper (Phase 5 του BRIEF).
