import Section from "@/components/layout/Section";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { problem } from "@/content/home";

const Problem = () => (
  <Section className="border-t bg-card">
    <SectionHeading title={problem.title}>
      <p>{problem.body}</p>
    </SectionHeading>
    <ul className="mt-10 grid gap-4 md:grid-cols-3">
      {problem.pains.map((pain) => (
        <li key={pain.title}>
          <Card className="h-full bg-background p-6 shadow-none">
            <h3 className="text-lg">{pain.title}</h3>
            <p className="mt-2 text-[15px] text-muted-foreground">{pain.text}</p>
          </Card>
        </li>
      ))}
    </ul>
  </Section>
);

export default Problem;
