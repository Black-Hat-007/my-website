export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
        <h2
          className="text-black text-center mb-14"
          style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 500, fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "28px" }}
        >
          Academic Programs We Offer
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plus Two Card */}
          <div
            className="rounded-[20px] p-10 min-h-[550px] flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0E4E38 0%, #20B486 60%, white 100%)",
              boxShadow: "6px 5px 44px rgba(113,139,165,0.28), -10px -6px 32px rgba(255,255,255,0.7)",
            }}
          >
            <div className="absolute inset-0 rounded-[20px] border-2 border-white/30" />
            <div className="relative">
              <h3
                className="text-white mb-6"
                style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 500, fontSize: "clamp(24px, 2.5vw, 40px)", lineHeight: "28px" }}
              >
                Plus Two (NIOS)
              </h3>
              <div className="w-full h-px bg-white/50 mb-6" />
              <p
                className="text-[#f5f5f4] leading-[28px]"
                style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 400, fontSize: "clamp(16px, 1.5vw, 22px)" }}
              >
                A fast-track 6-month higher secondary program designed for students who could not complete or pass previously, supported by structured video lessons, live sessions and continuous academic guidance.
              </p>
            </div>
            <div className="relative mt-8">
              <span
                className="inline-block bg-white/20 text-white rounded-full px-6 py-2 backdrop-blur-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px" }}
              >
                NIOS Certified Program
              </span>
            </div>
          </div>

          {/* UG Degree Card */}
          <div
            className="rounded-[20px] p-10 min-h-[550px] flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #E3EDF7 0%, #f0f8ff 60%, white 100%)",
              boxShadow: "6px 5px 44px rgba(113,139,165,0.28), -10px -6px 32px rgba(255,255,255,0.7)",
            }}
          >
            <div className="absolute inset-0 rounded-[20px] border-2 border-black/10" />
            <div className="relative">
              <h3
                className="text-black mb-6"
                style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 500, fontSize: "clamp(24px, 2.5vw, 40px)", lineHeight: "28px" }}
              >
                UG Degree (SGOU)
              </h3>
              <div className="w-full h-px bg-black/20 mb-6" />
              <p
                className="text-[#333] leading-[28px]"
                style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 400, fontSize: "clamp(16px, 1.5vw, 22px)" }}
              >
                A structured 4-year undergraduate program across eight semesters for learners seeking career progression, supported by organised learning modules and consistent academic support.
              </p>
            </div>
            <div className="relative mt-8">
              <span
                className="inline-block bg-black/10 text-black rounded-full px-6 py-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px" }}
              >
                SGOU Affiliated Program
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}