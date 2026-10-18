import { useScrollFade } from "@/hooks/useScrollFade";
import { useEffect, useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import { contact, CALENDLY_URL, LINKEDIN_URL, CONTACT_EMAIL } from "@/content/site";

const Contact = () => {
  const scrollRef = useScrollFade();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div ref={scrollRef} className="container mx-auto max-w-3xl scroll-fade">
        <div className="text-center mb-10">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">{contact.label}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">{contact.heading}</h2>
          <p className="text-muted-foreground mt-3 font-body">{contact.body}</p>
        </div>

        <div
          ref={widgetRef}
          className="calendly-inline-widget rounded-2xl overflow-hidden border border-border bg-card"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=6d5acd`}
          style={{ minWidth: '320px', height: '900px' }}
        />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
