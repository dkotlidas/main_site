import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CaseStudies from "@/components/CaseStudies";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import Consulting from "@/components/Consulting";
import FitSection from "@/components/FitSection";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <CaseStudies />
      <Certifications />
      <Services />
      <Consulting />
      <FitSection />
      <Process />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
