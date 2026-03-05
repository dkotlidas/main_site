import { motion } from "framer-motion";
import { TrendingUp, ShoppingBag, BarChart3, Users } from "lucide-react";

const cases = [
  {
    icon: ShoppingBag,
    title: "Fashion E-Commerce",
    tag: "Fashion E-Commerce · Meta Ads",
    heroStat: { label: "ROAS", value: "9.71x" },
    stats: [
      { label: "Revenue", value: "€162,957" },
      { label: "CPA", value: "€5.76" },
    ],
    description: "Scaled a fashion e-commerce brand from €0 to €162K in revenue over 3 months using precision targeting and systematic creative testing on Meta.",
    testimonial: {
      quote: "Dimitris completely transformed our ad performance. The results spoke for themselves.",
      author: "E.P., E-Commerce Manager",
    },
  },
  {
    icon: TrendingUp,
    title: "Kitchenware E-Commerce",
    tag: "Kitchenware E-Commerce · Meta & Google Ads",
    heroStat: { label: "ROAS", value: "4.35x" },
    stats: [
      { label: "Revenue", value: "€171K+" },
      { label: "Purchases", value: "2,870" },
    ],
    description: "Built a full-funnel Meta & Google Ads strategy for a kitchenware brand, driving 2,870 purchases and €171K+ in revenue over a 4-month period.",
  },
  {
    icon: BarChart3,
    title: "Account Recovery — Retail",
    tag: "Retail · Meta Ads",
    heroStat: { label: "After", value: "8x ROAS" },
    stats: [
      { label: "Before", value: "2x ROAS" },
      { label: "Growth", value: "4x" },
    ],
    description: "Took over a failing Meta Ads account and fully restructured campaigns within 60 days, quadrupling performance from 2x to 8x ROAS.",
  },
  {
    icon: Users,
    title: "B2B Lead Generation",
    tag: "B2B · Meta Ads",
    heroStat: { label: "Leads", value: "402" },
    stats: [
      { label: "CPL", value: "€78" },
      { label: "Channel", value: "B2B" },
    ],
    description: "Ran a 3-month B2B lead generation campaign on Meta for a high-ticket service, delivering 402 qualified leads at €78 CPL, consistently below the industry benchmark.",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">Results</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">Case Studies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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

              {/* Hero metric */}
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

              {/* Testimonial */}
              {c.testimonial && (
                <div className="mt-auto pt-5 border-t border-border">
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    "{c.testimonial.quote}"
                  </p>
                  <p className="text-muted-foreground text-xs mt-2 font-medium">— {c.testimonial.author}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-card border border-border rounded-2xl p-10 md:p-14 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold mb-3">Want results like these?</h3>
          <p className="text-muted-foreground text-lg mb-6">Let's talk about your brand and what's possible.</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-xl font-heading font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
