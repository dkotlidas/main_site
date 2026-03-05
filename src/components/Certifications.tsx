import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "Google Ads Certified",
  "Google Analytics 4 (GA4)",
  "Google Tag Manager (GTM)",
  "Conversion Rate Optimization (CRO)",
  "Meta Blueprint",
  
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-10 md:py-28 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">Credentials</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold">Certifications</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 card-hover"
            >
              <Award className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-heading font-semibold text-sm">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
