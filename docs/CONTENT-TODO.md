# Content TODO

Open facts for the agency copy on the `redesign` branch. Every item below still appears on the page as a visible `[CONFIRM: ...]`, or sits as a placeholder in `src/content/site.ts`. Production must not ship while any `[CONFIRM` remains. `npm run check:content`, run after `npm run build`, fails while one is left. The workflow in `.github/workflows/content-check.yml` runs both steps on every push and pull request to `main`.

| # | Open item | Where it shows |
| --- | --- | --- |
| 1 | Number of active agency accounts | Hero proof line, stats strip ("Client accounts managed") |
| 2 | Peak ROAS value to show (11.93x is in the old meta description) | Stats strip, meta description, JSON-LD |
| 4 | Final portrait photo, matching LinkedIn | `src/assets/dimitris-portrait.jpg` (Hero, About) |
| 5 | LinkedIn URL and public email for footer and contact | `LINKEDIN_URL`, `contact.email` in `src/content/site.ts` |
| 6 | Which case studies, if any, ran through an agency, and whether any client allows a name | Case Studies cards |
| 7 | Number of agencies worked with at once (5 to 6) | About, paragraph 3 |
| 8 | Contract terms: billing start, minimum length, month-to-month scope | Partner vs hire table, FAQ "How does the collaboration work month to month?" |
| 9 | Non-compete template: available to mention or not | Partner vs hire benefit card |
| 10 | Whether creative production is offered or only direction | Services, Creative Direction card |
| 11 | Reporting tool name | FAQ "Which tools do you use?" |
| 12 | Webinar date and Luma URL. The hero secondary link appears once `hero.webinar.url` is set | `hero.webinar` in `src/content/site.ts` |
| 13 | "Increase capacity in 10 days" (LinkedIn headline claim): use it on the site or not | Not used yet |
| 14 | Wording of the two FAQ answers on minimum budget and time to results | FAQ |

## Settled

- Ad spend: €3M+ per year (stats strip, hero proof line, meta description, JSON-LD).
- Calendly: the current link stays.
- "Book a Call" scrolls to the Contact section with the Calendly embed.
- Privacy Policy, admin pages and `public/llms.txt` keep "Dimitrios".
- Cookie consent runs through GTM. No banner component in the repo.
