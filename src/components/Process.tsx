import { useScrollFade } from "@/hooks/useScrollFade";
import { process, CTA_LABEL } from "@/content/site";

const steps = process.steps;

const Process = () => {
  const ref = useScrollFade();

  return (
    <section id="how-it-works" className="py-12 md:py-20 px-4 bg-card/30">
      <div ref={ref} className="container mx-auto max-w-6xl scroll-fade">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">{process.label}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">{process.heading}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover"
            >
              <p className="text-3xl font-heading font-extrabold gradient-text mb-3">{s.num}</p>
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto bg-primary/10 border border-primary/20 rounded-xl px-6 py-4 text-center">
          <p className="text-sm text-foreground">{process.note}</p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-xl font-heading font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
