import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <CaseStudies />
      <Services />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
