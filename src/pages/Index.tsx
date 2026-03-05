import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CaseStudies from "@/components/CaseStudies";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
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
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
