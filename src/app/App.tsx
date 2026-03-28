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
import { FaWhatsapp } from "react-icons/fa"; // ✅ ADD THIS

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

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/918547547014"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-2xl shadow-lg hover:bg-green-600 z-50 transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}