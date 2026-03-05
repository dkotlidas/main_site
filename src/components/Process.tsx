import { useScrollFade } from "@/hooks/useScrollFade";

const steps = [
  {
    num: "01",
    title: "Strategy Call",
    desc: "We talk about your business, goals, and current performance. No pitch, just clarity.",
  },
  {
    num: "02",
    title: "Audit & Proposal",
    desc: "I review your accounts and send a clear plan with scope, timeline, and expected outcomes.",
  },
  {
    num: "03",
    title: "Onboarding",
    desc: "We align on tracking, access, and creative assets. Setup takes 3–5 days.",
  },
  {
    num: "04",
    title: "Ongoing Optimization",
    desc: "Weekly optimizations, monthly reporting, and continuous testing to compound results.",
  },
];

const Process = () => {
  const ref = useScrollFade();

  return (
    <section className="py-12 md:py-20 px-4 bg-card/30">
      <div ref={ref} className="container mx-auto max-w-6xl scroll-fade">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">From First Call to Full Execution</h2>
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
      </div>
    </section>
  );
};

export default Process;
