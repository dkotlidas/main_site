import { motion } from "framer-motion";
import { Globe, GraduationCap } from "lucide-react";
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
                If you're spending on Meta or Google Ads and not seeing predictable returns, you're not alone, and it's usually not the budget that's the problem.
              </p>
              <p>
                I work with e-commerce brands and lead gen businesses to <span className="text-foreground font-medium">fix what's broken and scale what's working</span>.
              </p>
              <p>
                With <span className="text-foreground font-medium">5+ years</span> as a freelance performance marketer, I've managed campaigns across Meta and Google for clients throughout Europe.
              </p>
              <p>
                I'm the co-founder of a DTC brand, so I know the pressure of making every ad euro count.
              </p>
              <p>
                I also serve as a <span className="text-foreground font-medium">GTM Instructor at Knowcrunch</span>, one of Greece's leading digital marketing academies.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className="flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg px-5 py-2.5 hover:bg-primary/90 transition-colors">
                <Globe className="w-4 h-4" /> Available Worldwide
              </a>
              <div className="flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg px-5 py-2.5">
                <GraduationCap className="w-4 h-4" /> GTM Instructor
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
