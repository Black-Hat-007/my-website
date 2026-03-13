import imgBackground from "figma:asset/e3b21bccd50dbbcdf06dd0cebb6f4e2cc9b0a7fd.png";

const advantages = [
  {
    title: "Live & Recorded Classes",
    description: "Flexible access to high-quality video lessons with interactive live sessions for deeper understanding.",
    bg: "bg-[#20b486]",
    textColor: "text-white",
  },
  {
    title: "Structure Learning System",
    description: "Semester-wise plan, organised video modules and curated study materials to keep you on track.",
    bg: "bg-[#f5f5f4]",
    textColor: "text-black",
  },
  {
    title: "Dedicated Tutor Support",
    description: "Clear your doubts, get academic guidance and stay accountable with expert mentors.",
    bg: "bg-[#f5f5f4]",
    textColor: "text-black",
  },
  {
    title: "Exam-Focused Preparation",
    description: "Mock tests, revision strategies and focused guidance to help you perform confidently.",
    bg: "bg-[#20b486]",
    textColor: "text-white",
  },
];

export function AdvantageSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgBackground}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative max-w-[1728px] mx-auto px-8 lg:px-16 py-20">
        <h2
          className="text-black mb-14"
          style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 600, fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "4px" }}
        >
          THE SCHOLED ADVANTAGE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-[20px] p-8 shadow-md flex flex-col gap-4 min-h-[400px]`}
            >
              <h3
                className={`${item.textColor}`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "22px", lineHeight: "28px" }}
              >
                {item.title}
              </h3>
              <p
                className={`${item.textColor} leading-relaxed`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(16px, 1.5vw, 22px)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}