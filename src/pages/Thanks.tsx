import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Seo from "@/components/layout/Seo";
import Section from "@/components/layout/Section";
import BookCallButton from "@/components/BookCallButton";
import NotFound from "@/pages/NotFound";
import { thanks, thanksTypes, type ThanksType } from "@/content/thanks";
import { site } from "@/content/site";
import { fireBookingConversion, fireOncePerSession } from "@/lib/conversion";
import { track } from "@/lib/track";

const isThanksType = (t: string | undefined): t is ThanksType => !!t && (thanksTypes as string[]).includes(t);

const Thanks = () => {
  const { type } = useParams();
  const valid = isThanksType(type);

  useEffect(() => {
    if (type === "booked") fireBookingConversion();
    // Luma has no callback to this site; the visit itself is the signal
    // (needs Luma to redirect here, CONTENT-TODO #23).
    if (type === "webinar") fireOncePerSession("webinar_registered");
  }, [type]);

  if (!valid) return <NotFound />;
  const content = thanks[type];

  return (
    <>
      <Seo title={content.title} path={`/thanks/${type}`} noindex />
      <Section className="pt-10 md:pt-16" innerClassName="max-w-2xl">
        <h1 className="text-4xl md:text-5xl">{content.title}</h1>
        <p className="mt-6 text-lg">{content.body}</p>
        <p className="mt-4 text-muted-foreground">{content.next}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          {type === "webinar" && <BookCallButton location="thanks_webinar" className="h-12 px-6 text-base" />}
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("outbound_linkedin", { location: `thanks_${type}` })}
            className="font-medium text-primary underline underline-offset-4"
          >
            Connect on LinkedIn
          </a>
        </div>
      </Section>
    </>
  );
};

export default Thanks;
