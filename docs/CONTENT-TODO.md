# CONTENT-TODO

Όλα τα `[CONFIRM]` του site. Τίποτα από αυτά δεν συμπληρώνεται χωρίς τον Dimitris (BRIEF §11, §12.4).
Πριν από το launch κάθε γραμμή πρέπει να έχει απάντηση ή να έχει αφαιρεθεί από το site. Ένα CI check θα σπάει το build αν βρει `[CONFIRM` σε production περιεχόμενο.

Κατάσταση: ⬜ ανοιχτό, ✅ κλειστό.

## Αριθμοί και ισχυρισμοί

| # | Στοιχείο | Πού εμφανίζεται | Τι ξέρουμε | Τι λείπει | Κατάσταση |
| --- | --- | --- | --- | --- | --- |
| 1 | Ενεργοί λογαριασμοί agencies | Hero proof line, stat strip | 15-20 Meta και 5-10 Google accounts, 5-6 agencies | Ο ακριβής αριθμός την ημέρα δημοσίευσης | ⬜ |
| 2 | Ad spend | Hero, stat strip, meta description | BRIEF: €500K+ ετήσια. Σημερινό `StatsBar`: €3M+ (συνολικά;) | Ποιος αριθμός ισχύει και με ποια διατύπωση (ετήσιο ή συνολικό) | ⬜ |
| 3 | Χρόνια εμπειρίας | Hero, stat strip | 5+ χρόνια σε paid media | Επιβεβαίωση διατύπωσης | ⬜ |
| 4 | Μέγιστο ROAS | Μόνο αν το κρατήσουμε | `index.html`/`llms.txt`: 11.93x. `StatsBar`: 10x | Κρατάμε αριθμό ROAS ή όχι; Αν ναι, ποιον και από ποιο case | ⬜ |
| 5 | Πλήθος agencies ταυτόχρονα | Credibility line (BRIEF §5.7b) | 5 έως 6 | Ο αριθμός την ημέρα δημοσίευσης | ⬜ |
| 6 | Χώρες που εξυπηρετούνται | Stat strip | - | Λίστα ή αριθμός | ⬜ |

## Case studies

Δεδομένα από το παλιό site, τώρα στο `src/content/case-studies.ts` (τα 2 πρώτα έχουν σελίδα). Κανένα δεν είναι επιβεβαιωμένο για δημοσίευση.

| # | Case | Αριθμοί σήμερα | Τι λείπει | Κατάσταση |
| --- | --- | --- | --- | --- |
| 7 | B2B lead generation (Meta) | 312 leads, €41 CPL, €27K revenue | Πραγματικά νούμερα, spend, διάρκεια, άδεια ή ανωνυμοποίηση | ⬜ |
| 8 | Kitchenware e-commerce (Meta + Google) | 4.35x ROAS, €171K+ revenue, 2,870 purchases, 4 μήνες | Spend, άδεια ή ανωνυμοποίηση ("Kitchenware e-commerce, Greece") | ⬜ |
| 9 | Local service lead gen (Meta + Google) | 3.2x growth, €55 CPL, 180 qualified leads | Τι σημαίνει "3.2x growth", spend, άδεια | ⬜ |
| 10 | B2B high-ticket lead gen (Meta) | 402 leads, €78 CPL, 3 μήνες | Spend, άδεια | ⬜ |
| 11 | Επιλογή | - | Ποια 2 ή 3 cases μπαίνουν στο launch. Ιδανικά τουλάχιστον ένα για agency ως πελάτη (white label) | ⬜ |

Για κάθε case το BRIEF ζητά: τύπο πελάτη, στόχο, τι έγινε, τρεις αριθμούς (spend, αποτέλεσμα, μεταβολή).

## Proof

| # | Στοιχείο | Τι ξέρουμε | Τι λείπει | Κατάσταση |
| --- | --- | --- | --- | --- |
| 12 | Testimonials | Κανένα επιβεβαιωμένο | Quotes με άδεια. Αν δεν υπάρχουν, το section δεν μπαίνει | ⬜ |
| 13 | Logos agencies | Κανένα επιβεβαιωμένο | Άδεια ανά agency. Αν δεν υπάρχουν, το section δεν μπαίνει | ⬜ |
| 14 | Knowcrunch | Διδάσκει GTM στο Knowcrunch | Επιβεβαίωση διατύπωσης ("the largest digital marketing course in Greece") | ⬜ |

## Ταυτότητα και assets

| # | Στοιχείο | Τι ξέρουμε | Τι λείπει | Κατάσταση |
| --- | --- | --- | --- | --- |
| 15 | Όνομα στο site | Site σήμερα: "Dimitrios". BRIEF: "Dimitris Kotlidas", όπως στο LinkedIn | Ποια μορφή παντού (logo, title, schema) | ⬜ |
| 16 | Φωτογραφία | Σημερινό portrait 2.5 MB | Τελική φωτογραφία τύπου διαβατηρίου, ίδια με LinkedIn, και banner | ⬜ |
| 17 | Email επικοινωνίας | - | Ποιο email εμφανίζεται στο footer και στο `/book` | ⬜ |
| 18 | LinkedIn URL | `https://www.linkedin.com/in/dimitrioskotlidas/` | Επιβεβαίωση | ⬜ |
| 19 | Τοποθεσία | Strasbourg (site, schema) | Επιβεβαίωση ότι μένει "Strasbourg, working across time zones" | ⬜ |

## Conversion

| # | Στοιχείο | Τι ξέρουμε | Τι λείπει | Κατάσταση |
| --- | --- | --- | --- | --- |
| 20 | Calendly | `https://calendly.com/dkotlidas-vrwr/free-strategy-call`, 15 λεπτά | - | ✅ 6/10 |
| 21 | Calendly redirect | - | Αν το Calendly κάνει redirect μετά την κράτηση (αλλιώς χρησιμοποιούμε το `postMessage` event) | ⬜ |
| 22 | Webinar | Τίτλος: "5 ways agency owners can increase revenue with white label digital marketing", Luma, πρώτο τέλη Οκτωβρίου | Ημερομηνία, ώρα, Luma URL, 3 outcomes | ⬜ |
| 23 | Webinar redirect | - | Αν το Luma μπορεί να κάνει redirect στο `/thanks/webinar` μετά την εγγραφή | ⬜ |
| 24 | Lead magnet | Popup για list building (απόφαση 6/10) | Θέμα, τίτλος, μορφή (PDF, checklist, κ.λπ.), αρχείο | ⬜ |
| 25 | Email provider | Υποψήφιοι: MailerLite ή Brevo | Τελική επιλογή, λογαριασμός, form endpoint | ⬜ |
| 26 | Free 3 slide audit | Αναφέρεται στο BRIEF §5.6 | Επιβεβαίωση ότι το προσφέρεις δημόσια | ⬜ |
| 27 | Non-compete | Μέρος του offer | Υπάρχει template σύμβασης που μπορούμε να αναφέρουμε; | ⬜ |

## Νομικά και domain

| # | Στοιχείο | Τι ξέρουμε | Τι λείπει | Κατάσταση |
| --- | --- | --- | --- | --- |
| 28 | Νομική οντότητα | ΚΟΤΛΙΔΑΣ ΝΙΚ. ΔΗΜΗΤΡΙΟΣ, ατομική επιχείρηση, ΔΟΥ Ε΄ Θεσσαλονίκης, Ερμού 1, Θεσσαλονίκη | Αν η διεύθυνση εμφανίζεται δημόσια και ποια διατύπωση μπαίνει στο privacy | ⬜ |
| 29 | Privacy policy | Σήμερα αναφέρει contact form και newsletter που δεν υπάρχουν | Επιβεβαίωση νέου κειμένου (Calendly, GTM, CookieYes, email provider) | ⬜ |
| 30 | Canonical domain | `.com` και `.gr` | Ποιο είναι το κύριο. Πρόταση: `dkotlidas.com`, αφού τα canonical tags το χρησιμοποιούν ήδη | ⬜ |
| 31 | Hosting | Vercel | - | ✅ 6/10 |
| 32 | Consent | CookieYes μέσα στο GTM | - | ✅ 6/10 |
