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

const Index = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Index;
