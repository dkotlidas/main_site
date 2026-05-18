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
        <title>Dimitrios Kotlidas — Paid Social &amp; Google Ads Expert</title>
        <meta name="description" content="Dimitrios Kotlidas scales paid campaigns profitably. €500K+ managed, up to 11.93x ROAS. Expert in Meta Ads, Google Ads, tracking & attribution." />
        <link rel="canonical" href="https://dkotlidas.com/" />
        <meta property="og:title" content="Dimitrios Kotlidas — Paid Social & Google Ads Expert" />
        <meta property="og:description" content="Dimitrios Kotlidas scales paid campaigns profitably. €500K+ managed, up to 11.93x ROAS." />
        <meta property="og:url" content="https://dkotlidas.com/" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <CaseStudies />
        <Services />
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
