import { useEffect } from "react";
import Seo from "@/components/layout/Seo";
import Section from "@/components/layout/Section";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { book } from "@/content/book";
import { site } from "@/content/site";
import { track } from "@/lib/track";

// BRIEF §6. The embed reports bookings (calendly.event_scheduled), stores a
// pending conversion and sends the visitor to /thanks/booked.
const Book = () => {
  useEffect(() => track("book_call_view"), []);

  return (
    <>
      <Seo title={book.title} description={book.description} path="/book" ogImage="/og/book.jpg" />
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
        <p className="mt-8 text-[15px] text-muted-foreground">
          Prefer to write first?{" "}
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("outbound_linkedin", { location: "book" })}
            className="font-medium text-primary underline underline-offset-4"
          >
            Message me on LinkedIn
          </a>
          {site.email.includes("@") ? (
            <>
              {" "}
              or email{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-primary underline underline-offset-4">
                {site.email}
              </a>
            </>
          ) : (
            <> or email {site.email}</>
          )}
          .
        </p>
      </Section>
    </>
  );
};

export default Book;
