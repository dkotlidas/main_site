import { motion } from "framer-motion";
import { Share2, Search, Tags, Target, FileText, Megaphone } from "lucide-react";

const services = [
  { icon: Share2, title: "Meta & Social Ads", desc: "If your paid social campaigns are spending without consistent returns, I build and manage full-funnel strategies across Meta, TikTok, LinkedIn, and other social platforms, combining precise audience targeting, creative testing, and continuous optimization to turn spend into predictable revenue." },
  { icon: Search, title: "Google Ads", desc: "If you're paying for clicks that don't convert, I restructure and manage Google Ads campaigns with a focus on intent, bidding strategy, and continuous optimization that drives qualified traffic." },
  { icon: Tags, title: "Tag Manager Setup", desc: "If you're making decisions with incomplete or unreliable data, I implement clean GTM setups, tags, triggers, and variables, so your tracking actually reflects what's happening on your site." },
  { icon: Target, title: "Tracking & Attribution", desc: "If you don't know which campaigns are actually driving results, I set up server-side tracking, Meta CAPI, and enhanced conversions so your attribution is accurate and your decisions are data-driven." },
  { icon: FileText, title: "Strategy", desc: "If you're spending without a clear plan, I build a paid media strategy aligned with your business goals, channel mix, budget allocation, funnel structure, and KPIs that make sense for your market." },
  { icon: Megaphone, title: "Creative Direction", desc: "If your ads look like everyone else's, I provide creative direction and performance-focused frameworks that make your visuals and copy stop the scroll and drive action." },
];

const Services = () => {
  return (
    <section id="services" className="py-10 md:py-28 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
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
