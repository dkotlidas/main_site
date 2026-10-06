import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/layout/Seo";
import Section from "@/components/layout/Section";
import StatStrip from "@/components/StatStrip";
import FinalCta from "@/components/home/FinalCta";
import NotFound from "@/pages/NotFound";
import { getCaseStudy } from "@/content/case-studies";
import { track } from "@/lib/track";

// BRIEF §6: problem, approach, numbers, what changed, what the agency did with it.
const CaseStudy = () => {
  const { slug = "" } = useParams();
  const study = getCaseStudy(slug);

  useEffect(() => {
    if (study) track("case_study_view", { slug: study.slug });
  }, [study]);

  if (!study) return <NotFound />;

  return (
    <>
      <Seo title={`${study.title} case study`} description={study.summary} path={`/case-studies/${study.slug}`} />
      <Section className="pt-10 md:pt-16" innerClassName="max-w-3xl">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1.5 text-[15px] text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft aria-hidden className="size-4" /> All case studies
        </Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-primary">{study.channels}</p>
        <h1 className="mt-3 text-4xl md:text-5xl">{study.title}</h1>
        <p className="mt-4 text-muted-foreground">{study.clientType}</p>

        <div className="mt-10">
          <StatStrip stats={study.numbers} />
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-2xl">The problem</h2>
            <p className="mt-3 text-muted-foreground">{study.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl">What I did</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
              {study.approach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">What changed</h2>
            <p className="mt-3 text-muted-foreground">{study.whatChanged}</p>
          </div>
          <div>
            <h2 className="text-2xl">What the agency did with it</h2>
            <p className="mt-3 text-muted-foreground">{study.agencyOutcome}</p>
          </div>
        </div>
      </Section>
      <FinalCta />
    </>
  );
};

export default CaseStudy;
