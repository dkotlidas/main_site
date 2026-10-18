import { Share2, Search, Tags, Target, FileText, Megaphone } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { services } from "@/content/site";

const icons = [Share2, Search, Tags, Target, FileText, Megaphone];
const items = services.items.map((s, i) => ({ ...s, icon: icons[i] }));

const Services = () => {
  const ref = useScrollFade();

  return (
    <section id="services" className="py-12 md:py-20 px-4 bg-card/30">
      <div ref={ref} className="container mx-auto max-w-6xl scroll-fade">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">{services.label}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">{services.heading}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{services.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
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
      </div>
    </section>
  );
};

export default Services;
