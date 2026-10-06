Αυτό είναι το προσωπικό portfolio site του Dimitris Kotlidas.

Stack: Vite, React, TypeScript, Tailwind, shadcn/ui.
Εντολές: npm install, npm run dev, npm run build.
Το site πρέπει να κάνει build χωρίς errors πριν ολοκληρωθεί κάθε task.

Διάβασε το BRIEF.md πριν ξεκινήσεις οποιοδήποτε task.

Μετατροπή (conversion):
- Το βασικό CTA είναι η κράτηση κλήσης μέσω Calendly.
- Κράτα το ίδιο Calendly link (βρες το στον υπάρχοντα κώδικα) και
  βεβαιώσου ότι δουλεύει σε κάθε σελίδα όπου υπάρχει CTA.
- Η μόνη φόρμα είναι το lead magnet popup (LeadMagnetPopup) για list
  building. Μένει ανενεργό μέχρι να επιλεγεί email provider και να
  υπάρχει το lead magnet. Καμία άλλη φόρμα leads.
- Δεν χρησιμοποιούμε Supabase ή Notion.

Δεν αγγίζεις:
- τα snippets GTM στο index.html (το Meta pixel, το GA4 και το CookieYes
  φορτώνουν μέσα από το GTM, όχι από τον κώδικα)
- τα αρχεία bun.lock, bun.lockb, package-lock.json

Επιτρέπεται να αφαιρέσεις:
- τον φάκελο supabase και κάθε import ή κώδικα που τον χρησιμοποιεί,
  αφού επιβεβαιώσεις ότι το build περνάει.

Κανόνες:
- Νέα components στο src/components, σελίδες στο src/pages.
- Χρησιμοποίησε τα υπάρχοντα shadcn components πριν φτιάξεις δικά σου.
- Δεν προσθέτεις νέες βιβλιοθήκες χωρίς να εξηγήσεις γιατί.
- Αν αλλάξεις URL σελίδας, ανέφερέ το, γιατί χρειάζεται redirect για το SEO.
