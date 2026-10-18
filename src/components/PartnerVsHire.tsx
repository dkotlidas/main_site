import { CheckCircle, XCircle } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { partnerVsHire, CTA_LABEL } from "@/content/site";

const PartnerVsHire = () => {
  const ref = useScrollFade();
  const { columns, rows, benefits } = partnerVsHire;

  return (
    <section className="py-12 md:py-20 px-4">
      <div ref={ref} className="container mx-auto max-w-6xl scroll-fade">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">{partnerVsHire.label}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">{partnerVsHire.heading}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{partnerVsHire.intro}</p>
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/4 p-5" />
                <th className="w-[37.5%] p-5 text-left font-heading font-bold text-base text-muted-foreground">{columns.hire}</th>
                <th className="w-[37.5%] p-5 text-left font-heading font-bold text-base text-primary bg-primary/5">{columns.partner}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.topic} className="border-b border-border last:border-0">
                  <th scope="row" className="p-5 text-left font-heading font-semibold align-top">{r.topic}</th>
                  <td className="p-5 text-muted-foreground align-top">{r.hire}</td>
                  <td className="p-5 text-foreground align-top bg-primary/5">{r.partner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4">
          {rows.map((r) => (
            <div key={r.topic} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-heading font-bold mb-3">{r.topic}</h3>
              <div className="flex items-start gap-3 text-sm text-muted-foreground mb-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">{columns.hire}: </span>
                  {r.hire}
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">{columns.partner}: </span>
                  {r.partner}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card border border-border rounded-xl p-6 card-hover">
              <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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

export default PartnerVsHire;
