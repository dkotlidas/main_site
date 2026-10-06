import Section from "@/components/layout/Section";
import SectionHeading from "@/components/SectionHeading";
import { whatIRun } from "@/content/home";

const WhatIRun = () => (
  <Section id="what-i-run" className="border-t">
    <SectionHeading title={whatIRun.title} />
    <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {whatIRun.services.map((service) => (
        <div key={service.title} className="border-t-2 border-primary pt-4">
          <dt className="font-semibold">{service.title}</dt>
          <dd className="mt-2 text-[15px] text-muted-foreground">{service.text}</dd>
        </div>
      ))}
    </dl>
    <p className="mt-10 text-[15px] text-muted-foreground">
      <span className="font-semibold text-foreground">{whatIRun.industriesLabel}:</span>{" "}
      {whatIRun.industries.join(", ")}
    </p>
  </Section>
);

export default WhatIRun;
