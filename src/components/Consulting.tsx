import { TrendingUp, Code } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { consulting } from "@/content/site";

const icons = [TrendingUp, Code];
const offerings = consulting.items.map((s, i) => ({ ...s, icon: icons[i] }));

const Consulting = () => {
  const ref = useScrollFade();

  return (
    <section className="py-12 md:py-20 px-4 bg-secondary/10">
      <div ref={ref} className="container mx-auto max-w-6xl scroll-fade">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">{consulting.label}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">{consulting.heading}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {consulting.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {offerings.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg mb-4">{consulting.closing}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-xl font-heading font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {consulting.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
