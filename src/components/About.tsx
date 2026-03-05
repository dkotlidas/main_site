import { motion } from "framer-motion";
import { MapPin, Globe, GraduationCap } from "lucide-react";
import portrait from "@/assets/dimitris-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl bg-primary/15 blur-2xl scale-110" />
              <img
                src={portrait}
                alt="Dimitrios Kotlidas"
                className="relative rounded-2xl w-72 md:w-80 object-cover glow-border"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3 text-center lg:text-left">About Me</p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-center lg:text-left">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With <span className="text-foreground font-medium">5+ years</span> as a freelance performance marketer, I specialize in scaling paid campaigns across Meta and Google platforms for e-commerce and lead gen businesses.
              </p>
              <p>
                I'm the co-founder of a DTC brand — so I understand the pressure of making every ad euro count. I also serve as a <span className="text-foreground font-medium">GTM Instructor at Knowcrunch</span>, one of Greece's leading digital marketing academies.
              </p>
              <p>
                I work with international clients across Europe and beyond, delivering data-driven strategies that consistently outperform benchmarks.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-lg px-4 py-2">
                <MapPin className="w-4 h-4 text-primary" /> Strasbourg, France
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-lg px-4 py-2">
                <Globe className="w-4 h-4 text-primary" /> Remote Worldwide
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-lg px-4 py-2">
                <GraduationCap className="w-4 h-4 text-primary" /> GTM Instructor
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
