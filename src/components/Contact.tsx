import { Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useScrollFade } from "@/hooks/useScrollFade";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const ref = useScrollFade();

  const services = [
    "Meta & Social Ads",
    "Google Ads",
    "Tag Manager Setup",
    "Tracking & Attribution",
    "Strategy",
    "Creative Direction",
    "Consulting & Training",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: form.name,
        email: form.email,
        service: form.service,
        message: form.message,
      });

      if (error) throw error;

      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "form_submit",
        enhanced_conversion_data: {
          email: form.email,
        },
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", service: "", message: "" });
      setGdprConsent(false);
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out directly via LinkedIn.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4">
      <div ref={ref} className="container mx-auto max-w-2xl scroll-fade">
        <div className="text-center mb-14">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">Contact Me</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-body"
          />
          <select
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-body appearance-none"
          >
            <option value="" disabled className="text-muted-foreground">Select a Service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-body"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-body resize-none"
          />
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-border accent-primary"
            />
            <span className="text-sm text-muted-foreground leading-relaxed">
              I agree to the processing of my personal data as described in the{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">
                Privacy Policy
              </Link>
              . I can withdraw my consent at any time.
            </span>
          </label>
          <button
            type="submit"
            disabled={!gdprConsent || isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" /> {isSubmitting ? "Sending..." : "Book a Free Strategy Call"}
          </button>
          <p className="text-center text-muted-foreground text-sm">I'll get back to you within 24 hours.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
