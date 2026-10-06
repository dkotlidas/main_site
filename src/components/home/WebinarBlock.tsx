import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/SectionHeading";
import LumaEmbed from "@/components/LumaEmbed";
import LocalDateTime from "@/components/LocalDateTime";
import BookCallButton from "@/components/BookCallButton";
import { webinar, webinarPage } from "@/content/webinars";
import { useNextWebinar } from "@/hooks/useNextWebinar";
import { site } from "@/content/site";
import { track } from "@/lib/track";

// BRIEF §5.10. Without a date it shows "announced soon"; the course opt-in
// the BRIEF mentions was dropped (decision 6/10), so LinkedIn and the call
// are the fallback.
const WebinarBlock = () => {
  const next = useNextWebinar();

  return (
    <Section id="webinar" className="border-t">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <SectionHeading eyebrow="Free webinar" title={webinar.title}>
          {next ? (
            <p className="font-medium text-foreground">
              <LocalDateTime iso={next.startsAt} />
            </p>
          ) : (
            <>
              <p className="font-medium text-foreground">{webinarPage.noDate}</p>
              <p className="mt-2">{webinarPage.noDateHint}</p>
            </>
          )}
        </SectionHeading>

        <div>
          <ul className="space-y-3">
            {webinar.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3">
                <Check aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {next ? (
              <LumaEmbed event={next} location="home_webinar" />
            ) : (
              <>
                <BookCallButton location="home_webinar" className="h-12 px-6 text-base" />
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("outbound_linkedin", { location: "home_webinar" })}
                  className="font-medium text-primary underline underline-offset-4"
                >
                  Follow on LinkedIn
                </a>
              </>
            )}
          </div>
          <Link to="/webinar" className="mt-6 inline-block text-[15px] text-muted-foreground underline underline-offset-4">
            About the webinar
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default WebinarBlock;
