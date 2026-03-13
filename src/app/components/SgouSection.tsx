import imgFrame9 from "figma:asset/fd8c6c6aa099e101556d59fc2de3819f330b22a0.png";
import imgBookNewOne2 from "figma:asset/afccbb322710203dc62174522009d28ae64f1597.png";
import imgConvocationCapnew12 from "figma:asset/b3aae9c2ca05cde4f051af19d7f58e17bd15956b.png";

export function SgouSection() {
  return (
    <section id="sgou" className="bg-white py-20">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
        <h2
          className="text-black mb-10"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "clamp(28px, 3vw, 40px)" }}
        >
          What is SGOU ?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Main Description */}
          <div className="bg-[#eaeaea] rounded-[20px] p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-40 overflow-hidden rounded-[20px] rotate-[18.75deg] opacity-50">
              <img src={imgConvocationCapnew12} alt="Convocation" className="w-full object-cover" />
            </div>
            <div
              className="text-black text-justify leading-[35px] relative z-10"
              style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: "clamp(14px, 1.4vw, 22px)" }}
            >
              <p className="mb-4">Sreenarayanaguru Open University (SGOU) is a state open university offering undergraduate programs through distance mode under the Four Year Undergraduate Programme (FYUGP) framework.</p>
              <p className="mb-4">Students can pursue either a standard 3-year degree (6 semesters) or continue into a 4-year Honours format (8 semesters), with an exit option available after the third year.</p>
              <p>SGOU degrees follow a credit-based academic structure aligned with national higher education guidelines.</p>
            </div>
          </div>

          {/* Frame image */}
          <div className="rounded-[40px] overflow-hidden bg-[#eaeaea]">
            <img src={imgFrame9} alt="SGOU" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Three info boxes at bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Programs Offered */}
          <div className="bg-[#20b486] rounded-[20px] p-8 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-40 overflow-hidden rounded-[40px] opacity-40">
              <img src={imgBookNewOne2} alt="Book" className="w-full object-cover" />
            </div>
            <div
              className="text-black text-justify leading-[normal] relative z-10"
              style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: "clamp(14px, 1.3vw, 18px)" }}
            >
              <p className="underline mb-3 font-semibold">Programs Offered</p>
              <p className="mb-3">BA – English, History, Sociology, Economics, Malayalam and other disciplines</p>
              <p className="mb-3">BCom – Finance and Co-operation</p>
              <p>BBA – Business Administration</p>
            </div>
          </div>

          {/* Program Format */}
          <div className="bg-[#eaeaea] rounded-[20px] p-8">
            <div
              className="text-black text-justify leading-[normal]"
              style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: "clamp(14px, 1.3vw, 18px)" }}
            >
              <p className="underline mb-3 font-semibold">Program Format &amp; Academic Structure</p>
              <p className="mb-2">• 3-Year Degree – 6 Semesters (132 Credits)</p>
              <p className="mb-2">• 4-Year Honours – 8 Semesters (176 Credits)</p>
              <p className="mb-2">• Credit-based semester system</p>
              <p>• Major, Minor, Skill and Ability Enhancement courses included</p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-[#20b486] rounded-[20px] p-8">
            <div
              className="text-black text-justify leading-[normal]"
              style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: "clamp(14px, 1.3vw, 18px)" }}
            >
              <p className="underline mb-3 font-semibold">Eligibility &amp; Admission</p>
              <p className="mb-2">• Completion of 10+2 or equivalent</p>
              <p className="mb-2">• Online application through SGOU ERP Portal</p>
              <p className="mb-2">• DEB ID required as per UGC regulations</p>
              <p>• Registration fee applicable during admission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}