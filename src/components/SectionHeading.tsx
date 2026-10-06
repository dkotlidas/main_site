import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

const SectionHeading = ({ eyebrow, title, children, className }: SectionHeadingProps) => (
  <div className={cn("max-w-3xl", className)}>
    {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>}
    <h2 className={cn("text-3xl md:text-4xl", eyebrow && "mt-3")}>{title}</h2>
    {children && <div className="mt-5 text-muted-foreground">{children}</div>}
  </div>
);

export default SectionHeading;
