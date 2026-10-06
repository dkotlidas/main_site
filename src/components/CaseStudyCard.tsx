import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { CaseStudy } from "@/content/case-studies";

const CaseStudyCard = ({ study, headingLevel = "h3" }: { study: CaseStudy; headingLevel?: "h2" | "h3" }) => {
  const Heading = headingLevel;
  return (
    <Card className="relative flex h-full flex-col bg-background p-6 shadow-none transition-colors hover:border-primary">
      <p className="text-sm text-muted-foreground">{study.channels}</p>
      <Heading className="mt-2 text-xl">
        <Link to={`/case-studies/${study.slug}`} className="after:absolute after:inset-0">
          {study.title}
        </Link>
      </Heading>
      <p className="mt-3 text-[15px] text-muted-foreground">{study.summary}</p>
      <dl className="mt-6 grid grid-cols-3 gap-3 border-t pt-4">
        {study.numbers.map((n) => (
          <div key={n.label}>
            <dt className="text-xs text-muted-foreground">{n.label}</dt>
            <dd className="mt-1 break-words text-sm font-semibold">{n.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-auto flex items-center gap-1.5 pt-6 text-[15px] font-medium text-primary">
        Read the case study <ArrowRight aria-hidden className="size-4" />
      </p>
    </Card>
  );
};

export default CaseStudyCard;
