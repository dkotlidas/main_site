import { Link } from "react-router-dom";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/SectionHeading";
import StatStrip from "@/components/StatStrip";
import CaseStudyCard from "@/components/CaseStudyCard";
import { proof } from "@/content/home";
import { caseStudies } from "@/content/case-studies";

// Testimonials and logos are left out until real, approved ones exist (BRIEF §5.7).
const Proof = () => (
  <Section id="results" className="border-t">
    <SectionHeading title={proof.title}>
      <p>{proof.intro}</p>
    </SectionHeading>
    <div className="mt-10">
      <StatStrip stats={proof.stats} />
    </div>
    <ul className="mt-10 grid gap-4 md:grid-cols-2">
      {caseStudies.slice(0, 3).map((study) => (
        <li key={study.slug}>
          <CaseStudyCard study={study} />
        </li>
      ))}
    </ul>
    <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <p className="max-w-2xl text-[15px] text-muted-foreground">{proof.credibility}</p>
      <Link
        to={proof.caseStudiesLink.href}
        className="shrink-0 font-medium text-primary underline underline-offset-4"
      >
        {proof.caseStudiesLink.label}
      </Link>
    </div>
  </Section>
);

export default Proof;
