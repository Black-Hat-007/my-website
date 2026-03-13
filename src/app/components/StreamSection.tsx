export function StreamSection() {
  const plusTwoStreams = ["COMMERCE", "HUMANITIES", "SCIENCE"];
  const ugDegrees = ["BA MALAYALAM", "BCOM", "BA ENGLISH", "BA HISTORY", "BBA", "BA SOCIOLOGY"];

  return (
    <section className="overflow-hidden">
      {/* PLUS TWO - Black background */}
      <div className="bg-black py-16 relative">
        <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
          <h2
            className="text-[#f5f5f4] text-center mb-8 underline"
            style={{ fontFamily: "'Hammersmith One', sans-serif", fontWeight: 400, fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "12.8px" }}
          >
            PLUS TWO
          </h2>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-20">
            {plusTwoStreams.map((stream) => (
              <div key={stream} className="text-center">
                <span
                  className="text-[#f5f5f4]"
                  style={{ fontFamily: "'Hammersmith One', sans-serif", fontWeight: 400, fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "8px" }}
                >
                  {stream}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STREAM - Center crossover text */}
      <div className="relative" style={{ background: "linear-gradient(to bottom, black 50%, #20b486 50%)" }}>
        <div className="flex justify-center items-center relative z-10 py-0">
          <h2
            className="leading-none text-center py-4 px-6"
            style={{
              fontFamily: "'Hammersmith One', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(60px, 8vw, 128px)",
              letterSpacing: "25.6px",
              color: "black",
              background: "linear-gradient(to bottom, black 50%, #20b486 50%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            STREAM
          </h2>
        </div>
      </div>

      {/* UG DEGREE - Green background */}
      <div className="bg-[#20b486] py-16">
        <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
          <h2
            className="text-[#f5f5f4] text-center mb-4 underline"
            style={{ fontFamily: "'Hammersmith One', sans-serif", fontWeight: 400, fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "12.8px" }}
          >
            UG DEGREE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
            {ugDegrees.map((degree) => (
              <div key={degree} className="text-center">
                <span
                  className="text-[#f5f5f4]"
                  style={{ fontFamily: "'Hammersmith One', sans-serif", fontWeight: 400, fontSize: "clamp(18px, 2.2vw, 40px)", letterSpacing: "8px" }}
                >
                  {degree}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}