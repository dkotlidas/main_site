import { useScrollFade } from "@/hooks/useScrollFade";
import { problem } from "@/content/site";

const ProblemBand = () => {
  const ref = useScrollFade();

  return (
    <section className="py-12 md:py-16 px-4">
      <div ref={ref} className="container mx-auto max-w-3xl text-center scroll-fade">
        <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-4">{problem.heading}</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">{problem.body}</p>
      </div>
    </section>
  );
};

export default ProblemBand;
