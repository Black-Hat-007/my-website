import imgAdobeExpressFile1 from "figma:asset/bc19de9ed61686a68f665cd4047c179234ef29b8.png";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1728px] mx-auto px-8 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative h-[60px] w-[60px]">
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

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-12">
          <a
            href="#"
            className="text-black hover:text-[#20b486] transition-colors"
            style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 400, fontSize: "18px" }}
          >
            HOME
          </a>
          <a
            href="#nios"
            onClick={(e) => { e.preventDefault(); document.getElementById("nios")?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-black hover:text-[#20b486] transition-colors cursor-pointer"
            style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 400, fontSize: "18px" }}
          >
            PLUS TWO
          </a>
          <a
            href="#sgou"
            onClick={(e) => { e.preventDefault(); document.getElementById("sgou")?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-black hover:text-[#20b486] transition-colors cursor-pointer"
            style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 400, fontSize: "18px" }}
          >
            DEGREE
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Phone button */}
          <div className="bg-[#20b486] rounded-[5px] px-4 py-2 flex items-center gap-2">
            <Phone size={18} className="text-white" />
            <span
              className="text-white"
              style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 400, fontSize: "18px" }}
            >
              8547547014
            </span>
          </div>

          {/* Student Portal button */}
          <a
            href="https://web.scholed.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#20b486] via-[#178160] to-[#0e4e3a] text-white rounded-[8px] px-5 py-2 shadow-md hover:opacity-90 transition-opacity"
          >
            <span
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: "16px" }}
            >
              STUDENT PORTAL
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}