import Seo from "@/components/layout/Seo";
import Section from "@/components/layout/Section";
import BookCallButton from "@/components/BookCallButton";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { hero } from "@/content/home";
import { personJsonLd } from "@/lib/schema";
import { track } from "@/lib/track";

const About = () => (
  <>
    <Seo title={about.title} description={about.description} path="/about" jsonLd={personJsonLd} />
    <Section className="pt-10 md:pt-16">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{about.title}</p>
          <h1 className="mt-4 text-4xl md:text-5xl">{about.heading}</h1>
          <div className="mt-8 max-w-[38rem] space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookCallButton location="about" className="h-12 px-6 text-base" />
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("outbound_linkedin", { location: "about" })}
              className="font-medium text-primary underline underline-offset-4"
            >
              {about.linkedinLabel}
            </a>
          </div>
        </div>

        <aside>
          <img
            src="/images/dimitris-portrait-960.webp"
            srcSet="/images/dimitris-portrait-480.webp 480w, /images/dimitris-portrait-960.webp 960w"
            sizes="320px"
            width={960}
            height={1130}
            alt={hero.portraitAlt}
            loading="lazy"
            className="aspect-[960/1130] w-full max-w-[320px] rounded-xl border object-cover"
          />
          <dl className="mt-8 space-y-4">
            {about.facts.map((f) => (
              <div key={f.label} className="border-t pt-3">
                <dt className="text-sm text-muted-foreground">{f.label}</dt>
                <dd className="mt-0.5 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  </>
);

export default About;
