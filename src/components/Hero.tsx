import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import portrait from "@/assets/dimitris-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4 text-center lg:text-left">
              Paid Social & Google Ads Expert
            </p>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-[1.05] mb-6 text-center lg:text-left">
              Dimitrios<br />
              <span className="gradient-text">Kotlidas</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              I help brands turn ad spend into predictable, scalable growth across Meta and Google.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="#case-studies"
                className="inline-flex items-center px-7 py-3.5 rounded-lg font-heading font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                See My Results
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 rounded-lg font-heading font-semibold text-sm tracking-wide border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
              >
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm justify-center lg:justify-start">
              <MapPin className="w-4 h-4 text-primary" />
              Based in Strasbourg, France — Available Remote
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl scale-110" />
              <img
                src={portrait}
                alt="Dimitrios Kotlidas"
                className="relative rounded-2xl w-72 md:w-80 lg:w-96 object-cover glow-border"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
