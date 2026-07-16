import { motion } from "framer-motion";
import portrait from "@/assets/dimitris-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-24 md:pt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start"
          >
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4 text-center lg:text-left">
              Performance Marketing Specialist, Meta & Google Ads
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold leading-[1.05] mb-6 text-center lg:text-left">
              Dimitrios Kotlidas
              <span className="block text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-muted-foreground mt-3">
                Performance Marketing Specialist — Meta &amp; Google Ads
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              I help brands turn ad spend into predictable, scalable growth across Meta and Google.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 rounded-lg font-heading font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Free Strategy Call
              </a>
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
                alt="Dimitrios Kotlidas, Performance Marketing Specialist"
                width={384}
                height={500}
                fetchPriority="high"
                decoding="async"
                className="relative rounded-2xl w-72 md:w-80 lg:w-96 object-contain max-h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
