import { Send, CheckCircle2, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useScrollFade } from "@/hooks/useScrollFade";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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
        newsletter_consent: newsletterConsent,
      });

      if (error) throw error;

      // Sync lead to Notion (fire-and-forget, don't block form success)
      supabase.functions.invoke("sync-lead-to-notion", {
        body: { name: form.name, email: form.email, service: form.service, message: form.message, newsletter_consent: newsletterConsent },
      }).catch((err) => console.error("Notion sync failed:", err));

      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "form_submit",
        enhanced_conversion_data: {
          email: form.email,
        },
      });

      setShowSuccess(true);
      setSubmitError(null);
      setForm({ name: "", email: "", service: "", message: "" });
      setGdprConsent(false);
      setNewsletterConsent(false);
    } catch (error) {
      console.error("Error submitting lead:", error);
      setSubmitError("Please try again or reach out directly via LinkedIn.");
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
            placeholder="Your Name *"
            required
            maxLength={200}
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
            <option value="" disabled className="text-muted-foreground">Select a Service *</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <input
            type="email"
            placeholder="Your Email *"
            required
            maxLength={320}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-body"
          />
          <textarea
            placeholder="Your Message (optional)"
            rows={5}
            maxLength={5000}
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
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={newsletterConsent}
              onChange={(e) => setNewsletterConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-border accent-primary"
            />
            <span className="text-sm text-muted-foreground leading-relaxed">
              I'd like to receive marketing updates and tips. You can unsubscribe at any time. (Optional)
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
          {submitError && (
            <p className="text-center text-destructive text-sm font-medium">{submitError}</p>
          )}
        </form>
      </div>

      {/* Success Popup Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm px-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-card border border-border rounded-2xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-primary" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                You're All Set!
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Thanks for reaching out — I've received your message and I'll get back to you within 24 hours. Let's make your ads work harder.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-heading font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Got It
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
