import { motion } from "framer-motion";
import { TrendingUp, Code, UserCheck } from "lucide-react";

const offerings = [
  {
    icon: TrendingUp,
    title: "Performance Marketing Consulting",
    desc: "If your agency is managing paid campaigns but struggling with strategy, structure, or results, I offer hands-on consulting to audit, restructure, and upskill your team's approach to Meta and Google Ads.",
  },
  {
    icon: Code,
    title: "GTM & Tracking Training",
    desc: "If your team is flying blind on data, I run focused training sessions on Google Tag Manager, server-side tracking, Meta CAPI, and attribution, so your team can implement and maintain clean tracking independently.",
  },
  {
    icon: UserCheck,
    title: "1-on-1 Mentoring",
    desc: "If you're a marketer or freelancer looking to level up in performance marketing, I offer structured 1-on-1 sessions covering campaign strategy, tracking setup, and career growth in paid media.",
  },
];

const Consulting = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">For Teams & Agencies</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Consulting & Training</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond client work, I help agencies and marketing teams build internal performance marketing capabilities, from tracking fundamentals to full campaign management.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offerings.map((s, i) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-lg mb-4">Interested in training for your team?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-xl font-heading font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Consulting;
