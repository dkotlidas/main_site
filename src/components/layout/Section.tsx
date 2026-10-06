import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

// Page section on the 8px grid: 64px vertical padding on mobile, 96px on desktop.
const Section = ({ id, className, innerClassName, children }: SectionProps) => (
  <section id={id} className={cn("py-16 md:py-24", className)}>
    <Container className={innerClassName}>{children}</Container>
  </section>
);

export const Container = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn("mx-auto w-full max-w-site px-4", className)}>{children}</div>
);

export default Section;
