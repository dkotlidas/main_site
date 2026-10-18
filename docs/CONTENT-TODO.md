# Content TODO

Open facts for the agency copy on the `redesign` branch. Unknown facts appear on the page as a visible `[CONFIRM: ...]`, or sit as a placeholder in `src/content/site.ts`. Production must not ship while any `[CONFIRM` remains. `npm run check:content`, run after `npm run build`, fails while one is left. The workflow in `.github/workflows/content-check.yml` runs both steps on every push and pull request to `main`.

## Open

Nothing open.

## Settled

- Portrait photo: the current one stays.
- Email: dkotlidas@dkotlidas.gr, shown in Contact as an "Email" link only. The address is not printed.
- `public/llms.txt`: ad spend set to €3M+ per year.

- Ad spend: €3M+ per year (stats strip, hero proof line, meta description, JSON-LD).
- Active agency accounts: 5 to 7 at any time (hero proof line, stats strip, About).
- Peak ROAS: 11.93x stays.
- Calendly: the current link stays.
- LinkedIn: the current URL stays.
- Case studies: all ran through partner agencies. Client names are not shared.
- Contract: month to month, no minimum term. The retainer starts when the first client account goes live.
- Non-compete: mentioned on the site.
- Creative: no production. Dimitris writes the briefs, the agency's designers produce the assets.
- Reporting: Looker Studio, or whichever platform the agency uses.
- Webinar: none for now. All webinar mentions removed.
- "Increase capacity from day one": used in the Partner vs hire intro.
- FAQ: the minimum budget and time to results questions were removed.
- "Book a Call" scrolls to the Contact section with the Calendly embed.
- Privacy Policy, admin pages and `public/llms.txt` keep "Dimitrios".
- Cookie consent runs through GTM. No banner component in the repo.
