import imgStudent from "figma:asset/dc33296764724460297de2da00fc7c1f50b543f7.png";
import { BookOpen, Monitor } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-white relative overflow-hidden min-h-[900px]">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-0 w-[490px] h-[490px] rounded-full opacity-16"
        style={{ background: "radial-gradient(circle, #FBCE9A 0%, transparent 70%)", right: "-100px", top: "-100px" }}
      />
      <div className="absolute bottom-0 left-0 w-[476px] h-[476px] rounded-full opacity-12"
        style={{ background: "radial-gradient(circle, #24BB8C 0%, transparent 70%)", left: "-100px", bottom: "-100px" }}
      />

      <div className="max-w-[1728px] mx-auto px-8 lg:px-16 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 max-w-[600px]">
            <h1
              className="text-[#101828] leading-tight capitalize"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(40px, 4vw, 64px)", letterSpacing: "-0.5px" }}
            >
              Missed Your{" "}
              <span className="text-[#20b486]">+2</span>
              {" "}or{" "}
              <span className="text-[#20b486]">Degree?</span>
              {" "}Start Again the{" "}
              <span className="text-[#20b486]">Right </span>
              Way.
            </h1>
            <p
              className="text-[#646464] leading-[1.8]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px" }}
            >
              Comprehensive video classes, live sessions, structured materials and expert guidance that keep you on track toward academic success.
            </p>

            {/* App Store buttons */}
            <div className="flex items-center gap-6 mt-2">
              <a
                href="https://apps.apple.com/us/app/scholed/id6758979796"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black rounded-[8px] px-4 py-3 flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-white text-[10px] opacity-80">Download on the</span>
                  <span className="text-white font-semibold text-[16px]">App Store</span>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.scholed.learning"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black rounded-[8px] px-4 py-3 flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path fill="#00C6FF" d="m3 20.5 9.5-5.5V9.5L3 4V20.5z"/>
                  <path fill="#FFD800" d="M21 12 17 9.5l-4.5 2.5 4.5 2.5L21 12z"/>
                  <path fill="#FF3A44" d="M12.5 12 17 9.5 12.5 7 3 4l9.5 5.5V12z"/>
                  <path fill="#00E676" d="m3 20.5 9.5-3V15l-9.5 5.5z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-white text-[10px] opacity-80">Get it on</span>
                  <span className="text-white font-semibold text-[16px]">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Student image with floating cards */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            {/* Decorative circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[414px] h-[414px] relative">
                <div className="absolute inset-0 rounded-full border border-[#20B486]/25" />
                <div className="absolute inset-[17%] rounded-full border border-[#20B486]/25" />
                <div className="absolute inset-[32%] rounded-full border border-[#20B486]/25" />
                <div className="absolute inset-[44%] rounded-full border border-[#20B486]/25" />
              </div>
            </div>

            {/* Green circle background */}
            <div className="absolute w-[495px] h-[495px] bg-[#20b486] rounded-full right-0" />

            {/* Student image */}
            <div className="relative z-10 h-[480px] flex items-end">
              <img
                src={imgStudent}
                alt="Student"
                className="h-full object-contain"
                style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}
              />
            </div>

            {/* Floating stat cards */}
            {/* Card 1 - Progress (10+ courses) */}
            <div className="absolute top-8 right-0 bg-[#f5f5f4] rounded-[18px] p-4 shadow-lg border border-[#20b486]/20 z-20">
              <div className="flex flex-col items-center gap-1">
                <div className="w-16 h-16 relative">
                  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
                    <path d="M40 4C44.7 4 49.4 4.9 53.8 6.7C58.1 8.5 62.1 11.2 65.5 14.5C68.8 17.9 71.5 21.9 73.3 26.2C75.1 30.6 76 35.3 76 40C76 44.7 75.1 49.4 73.3 53.8C71.5 58.1 68.8 62.1 65.5 65.5C62.1 68.8 58.1 71.5 53.8 73.3C49.4 75.1 44.7 76 40 76C35.3 76 30.6 75.1 26.2 73.3C21.9 71.5 17.9 68.8 14.5 65.5C11.2 62.1 8.5 58.1 6.7 53.8C4.9 49.4 4 44.7 4 40C4 35.3 4.9 30.6 6.7 26.2C8.5 21.9 11.2 17.9 14.5 14.5C17.9 11.2 21.9 8.5 26.2 6.7C30.6 4.9 35.3 4 40 4Z" stroke="#EAECF0" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M40 4C47.6 4 55 6.4 61.2 10.9C67.3 15.3 71.9 21.6 74.2 28.9" stroke="#20B486" strokeWidth="8" strokeLinecap="round"/>
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px" }} className="text-[#101828]">10+</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px" }} className="text-[#101828]/50 whitespace-nowrap">6 Month Courses</span>
              </div>
            </div>

            {/* Card 2 - Video classes */}
            <div className="absolute bottom-24 left-0 bg-[#f5f5f4] rounded-[18px] p-4 shadow-lg border border-[#20b486]/20 z-20 flex items-center gap-4">
              <div className="bg-[#20b486] rounded-[12px] w-12 h-12 flex items-center justify-center">
                <Monitor size={24} className="text-white" />
              </div>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px" }} className="text-[#101828]">30+</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px" }} className="text-[#101828]/50">Video Classes</p>
              </div>
            </div>

            {/* Card 3 - Tutors */}
            <div className="absolute bottom-4 right-4 bg-[#f5f5f4] rounded-[18px] p-4 shadow-lg border border-[#20b486]/20 z-20 flex items-center gap-3">
              <div className="bg-[#20b486] rounded-[12px] w-12 h-12 flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px" }} className="text-[#101828]/50">Tutors</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px" }} className="text-[#101828]">10+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}