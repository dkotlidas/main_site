import { MapPin, GraduationCap } from "lucide-react";
import portrait from "@/assets/dimitris-portrait.jpg";
import { useScrollFade } from "@/hooks/useScrollFade";
import { about } from "@/content/site";

const About = () => {
  const ref = useScrollFade();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-center scroll-fade">
          <div>
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-2xl bg-primary/15 blur-2xl scale-110" />
              <img
                src={portrait}
                alt={about.portraitAlt}
                loading="lazy"
                className="relative rounded-2xl w-72 md:w-80 object-cover glow-border"
              />
            </div>
          </div>

          <div>
            <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3 text-center lg:text-left">{about.label}</p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-center lg:text-left">{about.heading}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg px-5 py-2.5">
                <MapPin className="w-4 h-4" /> {about.badges.location}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg px-5 py-2.5">
                <GraduationCap className="w-4 h-4" /> {about.badges.instructor}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
