const testimonials = [
  {
    name: "Rinsha",
    quote: `"I am a BA Sociology student. I joined with a lot of tension. Even after studying by myself using YouTube and books, nothing was clear to me. I joined this mainly because I had doubts about whether I would pass. Now, after listening to their classes, I feel confident that I will pass. The classes are very good. Similarly, the notes and everything else are exceptionally good."`,
  },
  {
    name: "Badrudhuja",
    quote: `"Scholed Learning is an excellent online tuition academy that provides high-quality education with well-structured lessons and expert tutors. The platform offers a supportive learning environment, making complex concepts easy to understand. The interactive sessions and personalized approach help students improve their academic performance. Highly recommended for those seeking quality online education!"`,
  },
  {
    name: "Shameena",
    quote: `"Scholed Learning online tuition seems well-structured, offering a solid learning experience. Providing regular classes, special exam-focused sessions, and previous question analysis ensures thorough preparation. The inclusion of mental support is a great addition, as it helps students stay motivated and confident. Overall, it appears to be a well-balanced and student-friendly platform."`,
  },
];

export function SuccessSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
        <h2
          className="text-black text-center mb-14"
          style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400, fontSize: "clamp(36px, 6vw, 96px)", letterSpacing: "19.2px" }}
        >
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-[20px] border-2 border-[#20b486] p-8 flex flex-col shadow-md min-h-[600px]"
            >
              {/* Green line accent */}
              <div className="w-full h-[3px] bg-[#20b486] mb-8" />

              <h3
                className="text-black mb-4"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(28px, 3vw, 48px)" }}
              >
                {t.name}
              </h3>

              <p
                className="text-black text-justify leading-normal flex-1"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300, fontSize: "clamp(14px, 1.3vw, 22px)" }}
              >
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
