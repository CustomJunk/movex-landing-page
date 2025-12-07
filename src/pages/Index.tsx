import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import WhoItsFor from "@/components/WhoItsFor";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import ExitPopup from "@/components/ExitPopup";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProps />
      <WhoItsFor />
      <Features />
      <Pricing />
      <HowItWorks />
      {/* <Testimonials /> */}
      <Security />
      <FAQ />
      <FinalCTA />
      <Footer />
      {/* <ExitPopup /> */}
    </div>
  );
};

export default Index;
