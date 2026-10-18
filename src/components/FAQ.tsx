import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollFade } from "@/hooks/useScrollFade";
import { faq as faqContent } from "@/content/site";

const faqs = faqContent.items;

const FAQ = () => {
  const ref = useScrollFade();

  return (
    <section className="py-12 md:py-20 px-4">
      <div ref={ref} className="container mx-auto max-w-3xl scroll-fade">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">{faqContent.label}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">{faqContent.heading}</h2>
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
