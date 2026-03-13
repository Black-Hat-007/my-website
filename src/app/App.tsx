import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AdvantageSection } from "./components/AdvantageSection";
import { VisionSection } from "./components/VisionSection";
import { ProgramsSection } from "./components/ProgramsSection";
import { StreamSection } from "./components/StreamSection";
import { StatsSection } from "./components/StatsSection";
import { NiosSection } from "./components/NiosSection";
import { SgouSection } from "./components/SgouSection";
import { PartnersSection } from "./components/PartnersSection";
import { SuccessSection } from "./components/SuccessSection";
import { StaffSection } from "./components/StaffSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AdvantageSection />
      <VisionSection />
      <ProgramsSection />
      <StreamSection />
      <StatsSection />
      <NiosSection />
      <SgouSection />
      <PartnersSection />
      <SuccessSection />
      <StaffSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
