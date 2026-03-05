import { motion } from "framer-motion";
import { Facebook, Search, BarChart2, FlaskConical, FileText, Target, Tags } from "lucide-react";

const services = [
  { icon: Facebook, title: "Meta Ads", desc: "Full-funnel Facebook & Instagram ad campaigns optimized for conversions." },
  { icon: Search, title: "Google Ads", desc: "Search, Shopping & Performance Max campaigns driving qualified traffic." },
  { icon: Tags, title: "Tag Manager Setup", desc: "Full GTM implementation including triggers, tags, data layers, and container configuration." },
  { icon: Target, title: "Tracking & Attribution", desc: "Server-side tracking, GA4, and conversion API implementation." },
  { icon: FlaskConical, title: "A/B Testing", desc: "Systematic creative and audience testing to maximize ad performance." },
  { icon: BarChart2, title: "Reporting", desc: "Custom dashboards and data-driven reporting for actionable insights." },
  { icon: FileText, title: "Strategy", desc: "Full paid media strategy aligned with your business goals and KPIs." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
