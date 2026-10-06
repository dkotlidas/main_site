import Section from "@/components/layout/Section";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqTitle, objections, practical, type Faq } from "@/content/faq";

const FaqList = ({ items, prefix }: { items: Faq[]; prefix: string }) => (
  <Accordion type="multiple" className="border-t">
    {items.map((item, i) => (
      <AccordionItem key={item.q} value={`${prefix}-${i}`}>
        <AccordionTrigger className="text-left text-base font-semibold hover:no-underline md:text-lg">
          {item.q}
        </AccordionTrigger>
        <AccordionContent className="max-w-3xl text-base text-muted-foreground">{item.a}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const Objections = () => (
  <Section id="faq" className="border-t bg-card">
    <SectionHeading title={faqTitle} />
    <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
      <FaqList items={objections} prefix="objection" />
      <FaqList items={practical} prefix="practical" />
    </div>
  </Section>
);

export default Objections;
