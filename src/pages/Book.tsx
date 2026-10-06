import Seo from "@/components/layout/Seo";
import Section from "@/components/layout/Section";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { book } from "@/content/book";

// Basic version so every CTA works from step 3. Tracking (call_booked,
// redirect to /thanks/booked) and UTM passing come in step 5.
const Book = () => (
  <>
    <Seo title={book.title} description={book.description} path="/book" />
    <Section className="pt-10 md:pt-16" innerClassName="max-w-3xl">
      <h1 className="text-4xl md:text-5xl">{book.title}</h1>
      <ul className="mt-6 space-y-2 text-muted-foreground">
        {book.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="mt-10">
        <CalendlyEmbed />
      </div>
    </Section>
  </>
);

export default Book;
