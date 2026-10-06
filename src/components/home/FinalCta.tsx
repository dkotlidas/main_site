import Section from "@/components/layout/Section";
import BookCallButton from "@/components/BookCallButton";
import { finalCta } from "@/content/home";

const FinalCta = () => (
  <Section className="border-t">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl md:text-4xl">{finalCta.title}</h2>
      <p className="mt-5 text-muted-foreground">{finalCta.body}</p>
      <BookCallButton location="final_cta" label={finalCta.cta.label} className="mt-8 h-12 px-6 text-base" />
    </div>
  </Section>
);

export default FinalCta;
