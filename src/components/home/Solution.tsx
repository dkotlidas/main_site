import { Check } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/SectionHeading";
import { solution } from "@/content/home";

const Solution = () => (
  <Section>
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <SectionHeading title={solution.title}>
        <p>{solution.body}</p>
      </SectionHeading>
      <ul className="space-y-4 md:pt-2">
        {solution.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3">
            <Check aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default Solution;
