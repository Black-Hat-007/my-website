import imgNios1 from "figma:asset/ab0bfce8b37035f5a31501cda24dce830f4c0491.png";
import imgSgou1 from "figma:asset/561ea65841a2f416766417a30bf1d786da9090c6.png";

export function PartnersSection() {
  return (
    <section className="bg-[#20b486]/25 py-16 overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Title */}
          <div className="flex-shrink-0">
            <p
              className="text-black"
              style={{
                fontFamily: "'sans-serif'",
                fontSize: "clamp(24px, 3vw, 40px)",
                letterSpacing: "8px",
                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              }}
            >
              OUR ELITE PARTNERS
            </p>
          </div>

          {/* Partner logos */}
          <div className="flex flex-wrap items-center gap-10 justify-center">
            <div className="h-[160px] w-[280px] flex items-center justify-center shadow-md bg-white rounded-lg p-4">
              <img src={imgNios1} alt="NIOS" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="h-[160px] w-[280px] flex items-center justify-center shadow-md bg-white rounded-lg p-4">
              <img src={imgSgou1} alt="SGOU" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
