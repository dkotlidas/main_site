import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import Consulting from "@/components/Consulting";
import FitSection from "@/components/FitSection";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ProblemBand from "@/components/ProblemBand";
import PartnerVsHire from "@/components/PartnerVsHire";
import { faq, meta } from "@/content/site";

const faqs = faq.items;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href="https://dkotlidas.com/" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta property="og:url" content="https://dkotlidas.com/" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ProblemBand />
        <CaseStudies />
        <Services />
        <PartnerVsHire />
        <Consulting />
        <FitSection />
        <Process />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;
