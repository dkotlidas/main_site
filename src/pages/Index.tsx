import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Seo from "@/components/layout/Seo";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import WhatIRun from "@/components/home/WhatIRun";
import HowItWorks from "@/components/home/HowItWorks";
import Proof from "@/components/home/Proof";
import Objections from "@/components/home/Objections";
import WebinarBlock from "@/components/home/WebinarBlock";
import FinalCta from "@/components/home/FinalCta";
import { legacyAnchors } from "@/content/home";
import { allFaqs } from "@/content/faq";
import { personJsonLd, serviceJsonLd } from "@/lib/schema";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Links to the old one-page site (e.g. /#contact) go to the new pages.
const useLegacyAnchors = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const target = legacyAnchors[hash];
    if (target) navigate(target, { replace: true });
  }, [hash, navigate]);
};

const Index = () => {
  useLegacyAnchors();

  return (
    <>
      <Seo path="/" jsonLd={[serviceJsonLd, personJsonLd, faqJsonLd]} />
      <Hero />
      <Problem />
      <Solution />
      <WhatIRun />
      <HowItWorks />
      <Proof />
      <Objections />
      <WebinarBlock />
      <FinalCta />
    </>
  );
};

export default Index;
