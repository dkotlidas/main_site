import Seo from "@/components/layout/Seo";
import Section from "@/components/layout/Section";
import CaseStudyCard from "@/components/CaseStudyCard";
import FinalCta from "@/components/home/FinalCta";
import { caseStudies, caseStudiesPage } from "@/content/case-studies";

const CaseStudies = () => (
  <>
    <Seo title={caseStudiesPage.title} description={caseStudiesPage.description} path="/case-studies" />
    <Section className="pt-10 md:pt-16">
      <h1 className="text-4xl md:text-5xl">{caseStudiesPage.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{caseStudiesPage.intro}</p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <CaseStudyCard study={study} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </Section>
    <FinalCta />
  </>
);

export default CaseStudies;
