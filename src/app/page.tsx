import PinGate from "@/components/gate/PinGate";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/hero/HeroSection";
import BridgePhrase from "@/components/sections/BridgePhrase";
import BentoGrid from "@/components/catalog/BentoGrid";
import CompoundBlock from "@/components/compound/CompoundBlock";
import CTABlock from "@/components/cta/CTABlock";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <PinGate />
      <Navigation />
      <HeroSection />
      <BridgePhrase />
      <BentoGrid />
      <CompoundBlock />
      <CTABlock />
      <Footer />
    </>
  );
}
