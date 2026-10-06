import Section from "@/components/layout/Section";
import SectionHeading from "@/components/SectionHeading";
import { howItWorks } from "@/content/home";

const HowItWorks = () => (
  <Section id={howItWorks.id} className="scroll-mt-16 border-t bg-card">
    <SectionHeading title={howItWorks.title} />
    <ol className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2">
      {howItWorks.steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <span
            aria-hidden
            className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary text-sm font-semibold text-primary"
          >
            {i + 1}
          </span>
          <div>
            <h3 className="text-lg">{step.title}</h3>
            <p className="mt-1 text-[15px] text-muted-foreground">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
    <p className="mt-10 max-w-3xl rounded-lg border bg-background p-5 text-[15px]">{howItWorks.note}</p>
  </Section>
);

export default HowItWorks;
