import imgAdobeExpressFile1 from "figma:asset/bc19de9ed61686a68f665cd4047c179234ef29b8.png";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a142f] overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Address */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[60px] w-[60px]">
                <img src={imgAdobeExpressFile1} alt="Scholed Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[#178160] tracking-[2.4px] leading-none"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 800, fontSize: "28px" }}
                >
                  SCHOLED
                </span>
                <span
                  className="text-[#178160] tracking-[1.2px] leading-none"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "13px" }}
                >
                  LEARNING
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-white flex-shrink-0 mt-1" />
                <p
                  className="text-white leading-[36px]"
                  style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.3vw, 22px)" }}
                >
                  Hilite Business Park, Kozhikode, Kerala
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-white flex-shrink-0" />
                <div>
                  <p
                    className="text-white border-b border-white pb-0.5 inline-block"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.3vw, 20px)" }}
                  >
                    8547547014
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-white flex-shrink-0" />
                <p
                  className="text-white"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.3vw, 20px)" }}
                >
                  scholedlearning@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "18px" }}
            >
              Quick Links
            </h4>
            <div
              className="flex flex-col gap-2 text-white/75"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.3vw, 20px)", lineHeight: "30px" }}
            >
              <a href="#about" className="hover:text-[#20b486] transition-colors">About</a>
              <a href="#programs" className="hover:text-[#20b486] transition-colors">Courses</a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdy_dOPMuqbDmrCnFVPWHW2wdmGY_Ua8vCScO5RrgDSftVXgw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#20b486] transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Social / Extra */}
          <div>
            <h4
              className="text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "18px" }}
            >
              Programs
            </h4>
            <div
              className="flex flex-col gap-2 text-white/75"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.3vw, 20px)", lineHeight: "30px" }}
            >
              <a href="#nios" className="hover:text-[#20b486] transition-colors">Plus Two (NIOS)</a>
              <a href="#sgou" className="hover:text-[#20b486] transition-colors">UG Degree (SGOU)</a>
              <a
                href="https://web.scholed.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#20b486] transition-colors"
              >
                Student Portal
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <p
            className="text-white/65 text-center"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1vw, 16px)" }}
          >
            © 2026 Scholed Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}