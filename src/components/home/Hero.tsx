import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCallButton from "@/components/BookCallButton";
import { Container } from "@/components/layout/Section";
import { hero } from "@/content/home";
import { track } from "@/lib/track";

// Served from public/ as plain URLs. Imported assets get an automatic
// preload from vite-react-ssg for every size, which downloads the photo twice.
const portrait = {
  src: "/images/dimitris-portrait-960.webp",
  srcSet: "/images/dimitris-portrait-480.webp 480w, /images/dimitris-portrait-960.webp 960w",
  sizes: "(min-width: 1024px) 420px, 360px",
};

const Hero = () => (
  <section className="pb-16 pt-10 md:pb-24 md:pt-20">
    <Head>
      <link rel="preload" as="image" href={portrait.src} imageSrcSet={portrait.srcSet} imageSizes={portrait.sizes} />
    </Head>
    <Container className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_360px] lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{hero.eyebrow}</p>
        <h1 className="mt-4 text-[2.25rem] sm:text-5xl lg:text-[3.5rem]">{hero.title}</h1>
        <p className="mt-6 max-w-[38rem] text-muted-foreground md:text-xl md:leading-relaxed">{hero.sub}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <BookCallButton location="hero" label={hero.primaryCta.label} className="h-12 px-6 text-base" />
          <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
            <Link
              to={hero.secondaryCta.href}
              onClick={() => track("cta_click", { cta_id: "webinar", location: "hero" })}
            >
              {hero.secondaryCta.label}
            </Link>
          </Button>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-3 text-[15px] text-muted-foreground sm:grid-cols-2">
          {hero.proof.map((item) => (
            <li key={item} className="flex gap-2.5">
              <Check aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto w-full max-w-[360px] md:max-w-none">
        <img
          src={portrait.src}
          srcSet={portrait.srcSet}
          sizes={portrait.sizes}
          width={960}
          height={1130}
          alt={hero.portraitAlt}
          // Lowercase attribute: React 18 does not know the fetchPriority prop yet
          {...{ fetchpriority: "high" }}
          className="aspect-[960/1130] w-full rounded-xl border object-cover"
        />
      </div>
    </Container>
  </section>
);

export default Hero;
