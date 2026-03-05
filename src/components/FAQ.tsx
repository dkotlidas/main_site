import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollFade } from "@/hooks/useScrollFade";

const faqs = [
  {
    q: "What's the minimum ad budget you work with?",
    a: "I typically work with brands spending a minimum of €1,500/month in ad spend. Below that, the margin for optimization is too thin to deliver meaningful results.",
  },
  {
    q: "How does the collaboration work on a monthly basis?",
    a: "You get weekly campaign optimizations, a monthly performance report, and direct access to me via Slack or email. No account managers, no middlemen.",
  },
  {
    q: "Do you work with clients outside Greece?",
    a: "Yes. I work remotely with clients across Europe. My setup is fully remote-first.",
  },
  {
    q: "How quickly can I expect to see results?",
    a: "Early signals usually appear within the first 2–4 weeks. Meaningful, compounding results typically show within 60–90 days.",
  },
  {
    q: "Do you also handle creatives?",
    a: "I provide creative direction and performance frameworks. For production (video/photo), I work with trusted collaborators or your in-house team.",
  },
];

const FAQ = () => {
  const ref = useScrollFade();

  return (
    <section className="py-12 md:py-20 px-4">
      <div ref={ref} className="container mx-auto max-w-3xl scroll-fade">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">Common Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-sm hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
