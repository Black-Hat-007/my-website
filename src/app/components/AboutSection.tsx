import imgNabeel from "figma:asset/d636149ebfe89fffe510d15a56b8500c4c2bf70c.png";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Person image with decorative elements */}
          <div className="relative flex justify-center">
            {/* Green background blob */}
            <div className="absolute bottom-0 left-1/4 w-[444px] h-[415px] bg-[#037668] rounded-[70px] opacity-80" />

            {/* Decorative teal oval */}
            <div className="absolute bottom-8 right-1/4 opacity-80">
              <div className="w-[312px] h-[156px] rounded-full bg-[#0FFFF1] opacity-80" />
            </div>

            {/* Person image */}
            <div className="relative z-10 h-[580px]">
              <img
                src={imgNabeel}
                alt="About Scholed"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Circular stroke */}
            <div className="absolute -left-8 bottom-20 w-[312px] h-[156px] opacity-30">
              <svg viewBox="0 0 645 177" fill="none" className="w-full h-full">
                <path d="M641 8C641 8 356 -22 89 88C-28 122 10 176 130 176" stroke="#68DBD4" strokeWidth="6" />
              </svg>
            </div>
          </div>

          {/* Right - About text */}
          <div className="bg-[#20b486]/25 p-10 rounded-[30px]">
            <h2
              className="text-black mb-8"
              style={{ fontFamily: "'Crimson Text', serif", fontWeight: 400, fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              ABOUT US
            </h2>
            <p
              className="text-black text-justify leading-normal"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 200, fontSize: "clamp(16px, 2vw, 36px)" }}
            >
              Scholed is one of the best online educational coaching centres in Kerala's premier online learning destination! We're revolutionizing education by bridging gaps and opening doors to new opportunities. Our mission is to provide world-class coaching and tuition for degree programs, empowering students to achieve academic excellence. We're committed to delivering personalized learning experiences that cater to individual needs and goals. Our expert faculty, cutting-edge technology, and innovative teaching methods ensure that our students receive the best possible support and guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
