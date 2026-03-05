import { Award } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const certs = [
  "Google Ads Certified",
  "Google Analytics 4 (GA4)",
  "Google Tag Manager (GTM)",
  "Conversion Rate Optimization (CRO)",
  "Meta Blueprint",
];

const Certifications = () => {
  const ref = useScrollFade();

  return (
    <section id="certifications" className="py-10 md:py-28 px-4 bg-card/30">
      <div ref={ref} className="container mx-auto max-w-6xl scroll-fade">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">Credentials</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold">Certifications</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {certs.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 card-hover"
            >
              <Award className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-heading font-semibold text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
