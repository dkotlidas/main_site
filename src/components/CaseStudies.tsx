import { motion } from "framer-motion";
import { TrendingUp, ShoppingBag, BarChart3, Users } from "lucide-react";

const cases = [
  {
    icon: ShoppingBag,
    title: "KIKA Fashion",
    platform: "Meta Ads",
    stats: [
      { label: "ROAS", value: "9.71x" },
      { label: "Revenue", value: "€162,957" },
      { label: "CPA", value: "€5.76" },
    ],
    description: "Scaled a fashion e-commerce brand with precision targeting and creative testing on Meta.",
  },
  {
    icon: TrendingUp,
    title: "Kitchenware Brand",
    platform: "Meta & Google Ads",
    stats: [
      { label: "ROAS", value: "4.35x" },
      { label: "Revenue", value: "€171K+" },
      { label: "Purchases", value: "2,870" },
    ],
    description: "Full-funnel paid strategy driving consistent purchases at scale for kitchenware products.",
  },
  {
    icon: BarChart3,
    title: "eShop Turnaround",
    platform: "Meta Ads",
    stats: [
      { label: "Before", value: "2x ROAS" },
      { label: "After", value: "8x ROAS" },
      { label: "Growth", value: "4x" },
    ],
    description: "Took over a failing account and restructured campaigns to quadruple performance.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    platform: "Meta Ads",
    stats: [
      { label: "Leads", value: "402" },
      { label: "CPL", value: "€78" },
      { label: "Channel", value: "B2B" },
    ],
    description: "High-quality B2B lead generation campaign delivering qualified leads at competitive cost.",
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
          className="mb-14"
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
              className="bg-card border border-border rounded-xl p-6 md:p-8 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">{c.title}</h3>
                  <p className="text-muted-foreground text-xs">{c.platform}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">{c.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {c.stats.map((s) => (
                  <div key={s.label} className="bg-secondary/50 rounded-lg p-3 text-center">
                    <p className="text-foreground font-heading font-bold text-lg">{s.value}</p>
                    <p className="text-muted-foreground text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
