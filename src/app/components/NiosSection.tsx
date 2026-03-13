export function NiosSection() {
  return (
    <section id="nios" className="bg-white py-20">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
        <h2
          className="text-black mb-10"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "clamp(28px, 3vw, 40px)" }}
        >
          What is NIOS ?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main description */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div
              className="text-black text-justify leading-[45px]"
              style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: "clamp(16px, 1.5vw, 22px)" }}
            >
              <p className="mb-4">The National Institute of Open Schooling (NIOS) is a government-recognised open schooling examination system that enables students to complete their Senior Secondary (+2) education through a flexible and distance-based model.</p>
              <p className="mb-4">NIOS certification is considered equivalent to other recognised higher secondary boards for higher education and employment opportunities.</p>
              <p>This system is designed to offer flexibility in subject selection, examination attempts and academic progression.</p>
            </div>
          </div>

          {/* Admission & Eligibility box */}
          <div className="bg-[#eaeaea] rounded-[20px] p-8">
            <div
              className="text-black text-justify leading-[45px]"
              style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: "clamp(14px, 1.3vw, 20px)" }}
            >
              <p className="underline mb-4 font-semibold">Admission &amp; Eligibility</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Must have completed Class 10 from a recognised board</li>
                <li>Minimum age: 15 years (as per admission year criteria)</li>
                <li>Fully online registration process</li>
                <li>Two examination blocks annually (April/May &amp; October/November)</li>
              </ul>
            </div>
          </div>

          {/* Academic Structure box */}
          <div className="bg-[#eaeaea] rounded-[20px] p-8">
            <div
              className="text-black text-justify leading-[45px]"
              style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: "clamp(14px, 1.3vw, 20px)" }}
            >
              <p className="underline mb-4 font-semibold">Academic Structure &amp; Evaluation</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Minimum 5 subjects required (including languages)</li>
                <li>Flexible subject combinations across streams</li>
                <li>Internal assessments (Tutor Marked Assignments)</li>
                <li>On-Demand Examination option available</li>
                <li>Passing criteria: 33% aggregate</li>
                <li>Certificate valid for higher studies and competitive exams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}