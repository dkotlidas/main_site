# Χάρτης redirects

Κάθε παλιό URL πρέπει να πηγαίνει στο πιο κοντινό νέο με 301 (BRIEF §10, §13).
Hosting: Vercel. Τα server redirects μπαίνουν στο `vercel.json` με `permanent: true`.

## 1. Server redirects (301 στο `vercel.json`)

| Παλιό URL | Νέο URL | Λόγος |
| --- | --- | --- |
| `/privacy-policy` | `/privacy` | Αλλαγή URL (BRIEF §4). Είναι στο sitemap και πιθανότατα indexed |
| `/admin` | `/` | Η σελίδα αφαιρέθηκε 6/10 |
| `/admin/login` | `/` | Η σελίδα αφαιρέθηκε 6/10 |

Σημείωση: τα `/admin` και `/admin/login` είχαν `noindex` και `Disallow` στο `robots.txt`, οπότε δεν έχουν SEO αξία. Το 301 μπαίνει για καθαρότητα. Εναλλακτικά, 410.

Προσχέδιο για το `vercel.json`:

```json
{
  "redirects": [
    { "source": "/privacy-policy", "destination": "/privacy", "permanent": true },
    { "source": "/admin", "destination": "/", "permanent": true },
    { "source": "/admin/login", "destination": "/", "permanent": true }
  ]
}
```

## 2. Anchors της αρχικής (client side)

Τα hashes δεν φτάνουν ποτέ στον server, οπότε δεν γίνεται 301. Τα χειρίζεται ένα μικρό script στην αρχική. Μετράνε γιατί παλιά links σε LinkedIn, email και Calendly μπορεί να δείχνουν σε `/#contact`.

| Παλιό | Νέο | Τρόπος |
| --- | --- | --- |
| `/#contact` | `/book` | `navigate("/book", { replace: true })` |
| `/#case-studies` | `/case-studies` | Ίδιο |
| `/#about` | `/about` | Ίδιο |
| `/#services` | `/#what-i-run` | Scroll στο νέο section |
| `/#certifications` | `/about` | Ίδιο (το section δεν εμφανιζόταν) |

## 3. Domain

| Από | Προς | Κατάσταση |
| --- | --- | --- |
| `dkotlidas.gr` (όλα τα paths) | `https://dkotlidas.com` (ίδιο path) | `[CONFIRM]` ποιο domain είναι canonical (CONTENT-TODO #30) |
| `www.dkotlidas.com` | `https://dkotlidas.com` | Ρύθμιση στο Vercel Domains |
| `dimitris-roi-engine.lovable.app` | - | Μένει ενεργό μέχρι να ακυρωθεί το Lovable (BRIEF §9, Phase 6) |

Το redirect domain προς domain γίνεται από τις ρυθμίσεις Domains του Vercel, όχι από το `vercel.json`.

## 4. Νέα URLs (δεν χρειάζονται redirect)

`/book`, `/webinar`, `/thanks/booked`, `/thanks/webinar`, `/case-studies`, `/case-studies/:slug`, `/about`, `/privacy`, `/cookies`.

Το `/free-course` βγήκε από τη Phase 1 (απόφαση 6/10) και δεν υπήρξε ποτέ, οπότε δεν χρειάζεται redirect.

## 5. Έλεγχος πριν από το launch

- [ ] Κάθε γραμμή του §1 επιστρέφει 301 στο Vercel preview (`curl -I`).
- [ ] Κάθε anchor του §2 καταλήγει στη σωστή σελίδα.
- [ ] Το `sitemap.xml` έχει μόνο νέα URLs.
- [ ] Το `robots.txt` δεν αναφέρει πια `/admin`.
- [ ] Search Console: υποβολή νέου sitemap, έλεγχος coverage μία εβδομάδα μετά.
