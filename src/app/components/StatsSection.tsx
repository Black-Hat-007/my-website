const stats = [
  { value: "2500", label: "STUDENTS ENROLLED" },
  { value: "99%", label: "PASSING RATE" },
  { value: "99%", label: "SATISFACTION RATE" },
  { value: "25+", label: "INSTRUCTORS" },
];

export function StatsSection() {
  return (
    <section className="bg-[#20b486]/25 py-12">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-[20px] p-8 shadow-md flex flex-col items-center justify-center text-center min-h-[200px]"
              style={{ background: "linear-gradient(to bottom, #20B486, #0E4E3A)" }}
            >
              <p
                className="text-white"
                style={{ fontFamily: "'Hammersmith One', sans-serif", fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "normal" }}
              >
                {stat.value}
              </p>
              <p
                className="text-white/80 mt-2"
                style={{ fontFamily: "'Hammersmith One', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.5vw, 22px)", letterSpacing: "6.4px" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
