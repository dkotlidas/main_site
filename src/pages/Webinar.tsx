import { Check } from "lucide-react";
import Seo from "@/components/layout/Seo";
import Section from "@/components/layout/Section";
import LumaEmbed from "@/components/LumaEmbed";
import LocalDateTime from "@/components/LocalDateTime";
import BookCallButton from "@/components/BookCallButton";
import { webinar, webinarPage } from "@/content/webinars";
import { useNextWebinar } from "@/hooks/useNextWebinar";
import { site } from "@/content/site";
import { track } from "@/lib/track";
import { hero } from "@/content/home";

// BRIEF §6: title, date in the visitor's time zone, speaker, agenda (5 ways),
// Luma registration, past recordings.
const Webinar = () => {
  const next = useNextWebinar();

  return (
    <>
      <Seo title="Free webinar for agency owners" description={webinarPage.description} path="/webinar" ogImage="/og/webinar.jpg" />

      <Section className="pt-10 md:pt-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Free webinar</p>
            <h1 className="mt-4 text-4xl md:text-5xl">{webinar.title}</h1>

            <div className="mt-6 text-lg">
              {next ? (
                <p className="font-medium">
                  <LocalDateTime iso={next.startsAt} />
                  <span className="text-muted-foreground"> · {next.durationMinutes} minutes · online</span>
                </p>
              ) : (
                <>
                  <p className="font-medium">{webinarPage.noDate}</p>
                  <p className="mt-2 text-muted-foreground">{webinarPage.noDateHint}</p>
                </>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {next ? (
                <LumaEmbed event={next} location="webinar_page" embed />
              ) : (
                <>
                  <BookCallButton location="webinar_page" className="h-12 px-6 text-base" />
                  <a
                    href={site.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("outbound_linkedin", { location: "webinar_page" })}
                    className="font-medium text-primary underline underline-offset-4"
                  >
                    Follow on LinkedIn
                  </a>
                </>
              )}
            </div>

            <h2 className="mt-14 text-2xl">{webinarPage.agendaTitle}</h2>
            <ol className="mt-5 space-y-3">
              {webinar.agenda.map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden className="w-6 shrink-0 font-semibold text-primary">
                    {i + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-2xl">{webinarPage.outcomesTitle}</h2>
            <ul className="mt-5 space-y-3">
              {webinar.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:pt-14">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {webinarPage.speakerTitle}
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <img
                src="/images/dimitris-portrait-480.webp"
                alt={hero.portraitAlt}
                width={64}
                height={75}
                loading="lazy"
                className="size-16 rounded-full border object-cover object-top"
              />
              <p className="font-semibold">{site.name}</p>
            </div>
            <p className="mt-4 text-[15px] text-muted-foreground">{webinarPage.speakerBio}</p>
          </aside>
        </div>
      </Section>

      {webinar.past.length > 0 && (
        <Section className="border-t">
          <h2 className="text-3xl">{webinarPage.pastTitle}</h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-2">
            {webinar.past.map((rec) => (
              <li key={rec.youtubeId}>
                <div className="aspect-video overflow-hidden rounded-xl border">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${rec.youtubeId}`}
                    title={rec.title}
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="size-full"
                  />
                </div>
                <p className="mt-3 font-medium">{rec.title}</p>
                <p className="text-[15px] text-muted-foreground">{rec.date}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
};

export default Webinar;
