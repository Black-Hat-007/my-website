import imgNiyas1 from "figma:asset/5c8e98b581579fc463eb75cb971135ce8b6b1842.png";
import imgNiyas2 from "figma:asset/951909ce4b1a7355642aefbd1f69eae6ffbd5e37.png";
import imgNiyas3 from "figma:asset/6aa57be79be7cdd81f4154df77a24633a082ff3a.png";
import imgNiyas4 from "figma:asset/228c85277649489d73c32a5564aaad763cf52ec4.png";
import imgNiyas5 from "figma:asset/627b956be2749aa25ec156d04d9535d4fac84cef.png";

type StaffMember = {
  name: string;
  role: string;
  qualifications: string;
  img: string;
};

// Layout matches screenshot:
// Row 1: [Label]   [HASHIR]        [SOORAJ]
// Row 2: [NIYAS]   [RENJITH P]     [JAYAKRISHNAN]
const row1: StaffMember[] = [
  {
    name: "HASHIR",
    role: "Head of Commerce department, Scholed Learning",
    qualifications: "M.com B.Ed NET",
    img: imgNiyas2,
  },
  {
    name: "SOORAJ",
    role: "Head of Malayalam department,Scholed Learning",
    qualifications:
      "MA MALAYALAM 1st Rank with gold medal( Madras university-2022) ,BEd Malayalam ( first class with distinction( kannur university ,UGC NET Malayalam (2021)",
    img: imgNiyas3,
  },
];

const row2: StaffMember[] = [
  {
    name: "NIYAS",
    role: "Head of English department, Scholed Learning",
    qualifications: "MA English literature, UGC, NET, JRF",
    img: imgNiyas1,
  },
  {
    name: "RENJITH P",
    role: "Head of management studies department, Scholed learning",
    qualifications: "M.Com B.Ed ,NET, SET",
    img: imgNiyas4,
  },
  {
    name: "JAYAKRISHNAN",
    role: "Head of history department, Scholed Learning",
    qualifications:
      "B.ed social science, MA history ( KANNUR UNIVERSITY 1 ST RANK HOLDER) UGC NET IN HISTORY, SET IN HISTORY,KET 2 KTET 3",
    img: imgNiyas5,
  },
];

function StaffCard({ staff }: { staff: StaffMember }) {
  return (
    <div
      className="rounded-[22px] overflow-hidden flex flex-col"
      style={{
        background: "rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255, 255, 255, 0.38)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      {/* Photo — object-contain so the full face is always visible, no cropping */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          height: "260px",
          flexShrink: 0,
          background: "rgba(255, 255, 255, 0.12)",
        }}
      >
        <img
          src={staff.img}
          alt={staff.name}
          className="w-full h-full object-contain object-center"
          style={{ display: "block" }}
        />
      </div>

      {/* Text info */}
      <div className="flex flex-col items-center text-center px-5 py-4 flex-1">
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "0.5px",
            color: "#ffffff",
          }}
        >
          {staff.name}
        </p>
        <p
          className="mt-1"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "1.5",
            color: "rgba(255,255,255,0.90)",
          }}
        >
          {staff.role}
        </p>
        <p
          className="mt-1"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "11px",
            lineHeight: "1.4",
            color: "rgba(255,255,255,0.78)",
          }}
        >
          Qualifications: {staff.qualifications}
        </p>
      </div>
    </div>
  );
}

export function StaffSection() {
  return (
    <section className="py-20 bg-[#20b486] relative overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16">

        {/* ── ROW 1 : Label | HASHIR | SOORAJ ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 items-center">

          {/* Label cell */}
          <div className="flex flex-col items-start gap-5 justify-center h-full">
            <div className="bg-white rounded-[40px] px-8 py-4 shadow-md inline-block">
              <span
                className="text-black"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 2vw, 32px)",
                  letterSpacing: "0.5px",
                }}
              >
                STAFF PROFILE
              </span>
            </div>
            {/* Arrow circle */}
            <div className="w-12 h-12 bg-[#20b486] rounded-full flex items-center justify-center border-2 border-white ml-2">
              <svg viewBox="0 0 62 16" className="w-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.2273 7.95023C61.6111 7.55314 61.6004 6.92007 61.2033 6.53622L54.7324 0.281013C54.3353 -0.102838 53.7023 -0.0921078 53.3184 0.304978C52.9346 0.702064 52.9453 1.33514 53.3424 1.71899L59.0943 7.27917L53.5341 13.0311C53.1503 13.4282 53.161 14.0612 53.5581 14.4451C53.9552 14.8289 54.5882 14.8182 54.9721 14.4211L61.2273 7.95023ZM0.0169458 8.28043L0.0338916 9.28028L60.5252 8.25506L60.5083 7.25521L60.4914 6.25535L0 7.28057L0.0169458 8.28043Z" />
              </svg>
            </div>
          </div>

          {/* HASHIR */}
          <StaffCard staff={row1[0]} />

          {/* SOORAJ */}
          <StaffCard staff={row1[1]} />
        </div>

        {/* ── ROW 2 : NIYAS | RENJITH P | JAYAKRISHNAN ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {row2.map((staff) => (
            <StaffCard key={staff.name} staff={staff} />
          ))}
        </div>

      </div>
    </section>
  );
}