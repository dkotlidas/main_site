import { TrendingUp, ShoppingBag, BarChart3, Users } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { caseStudies, CTA_LABEL } from "@/content/site";

const icons = [Users, TrendingUp, BarChart3, Users];

const cases: Array<{
  icon: typeof Users;
  title: string;
  tag: string;
  heroStat: { label: string; value: string };
  stats: { label: string; value: string }[];
  description: string;
  testimonial?: { quote: string; author: string };
}> = caseStudies.cases.map((c, i) => ({ ...c, icon: icons[i] ?? Users }));

const CaseStudies = () => {
  const ref = useScrollFade();

  return (
    <section id="case-studies" className="section-padding">
      <div ref={ref} className="container mx-auto max-w-6xl scroll-fade">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">{caseStudies.label}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">{caseStudies.heading}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{caseStudies.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 md:p-8 card-hover flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">{c.title}</h3>
                  <p className="text-muted-foreground text-xs">{c.tag}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">{c.description}</p>

              <div className="flex items-end gap-4 mb-3">
                <div className="bg-primary/10 rounded-xl px-5 py-4 flex-1 text-center">
                  <p className="text-foreground font-heading font-extrabold text-3xl md:text-4xl gradient-text">{c.heroStat.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{c.heroStat.label}</p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  {c.stats.map((s) => (
                    <div key={s.label} className="bg-secondary/50 rounded-lg p-2.5 text-center">
                      <p className="text-foreground font-heading font-bold text-sm truncate">{s.value}</p>
                      <p className="text-muted-foreground text-xs truncate">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {c.testimonial && (
                <div className="mt-auto pt-5 border-t border-border">
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    "{c.testimonial.quote}"
                  </p>
                  <p className="text-muted-foreground text-xs mt-2 font-medium">— {c.testimonial.author}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 bg-card border border-border rounded-2xl p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold mb-3">{caseStudies.closingHeading}</h3>
          <p className="text-muted-foreground text-lg mb-6">{caseStudies.closingBody}</p>
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

export default CaseStudies;
