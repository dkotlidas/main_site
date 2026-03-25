import { useScrollFade } from "@/hooks/useScrollFade";

const CALENDLY_URL = "https://calendly.com/dkotlidas-vrwr/free-strategy-call";

const Contact = () => {
  const ref = useScrollFade();

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div ref={ref} className="container mx-auto max-w-3xl scroll-fade">
        <div className="text-center mb-10">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">Book a Free Strategy Call</h2>
          <p className="text-muted-foreground mt-3 font-body">Pick a time that works for you and let's talk about scaling your ads.</p>
        </div>

        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden border border-border bg-card"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=6d5acd`}
          style={{ minWidth: '320px', height: '900px' }}
        />
      </div>
    </section>
  );
};

export default Contact;
