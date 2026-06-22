import Image from "next/image";

const skills = [
  { label: "Web Design", icon: "/images/skill-1.svg" },
  { label: "Illustration", icon: "/images/skill-2.svg" },
  { label: "Graphic Design", icon: "/images/skill-3.svg" },
  { label: "Saas Products", icon: "/images/skill-4.svg" },
];

function DarkRibbonRow() {
  return (
    <div className="flex shrink-0 items-center gap-[80px] pr-[80px] sm:gap-[120px] sm:pr-[120px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="font-sans text-[28px] font-black tracking-[-0.96px] text-transparent [-webkit-text-stroke:1.5px_#fff] sm:text-[40px] lg:text-[48px] whitespace-nowrap"
        >
          Teaming Up With You As Well!!
        </span>
      ))}
    </div>
  );
}

function OrangeRibbonRow() {
  return (
    <div className="flex shrink-0 items-center gap-[48px] pr-[48px] sm:gap-[80px] sm:pr-[80px]">
      {[...skills, ...skills].map((s, i) => (
        <span key={i} className="flex shrink-0 items-center gap-[48px] sm:gap-[80px]">
          <Image
            src={s.icon}
            alt=""
            width={59}
            height={75}
            className="h-[44px] w-auto sm:h-[60px] lg:h-[75px]"
          />
          <span className="font-sans text-[28px] font-black tracking-[-0.96px] text-white sm:text-[40px] lg:text-[48px] whitespace-nowrap">
            {s.label}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="dot-grid relative w-full overflow-hidden py-16 sm:py-20">
      <div className="mx-auto mb-10 w-fit bg-[#ffe68c] px-2 sm:mb-14">
        <h2 className="text-center font-sans text-[26px] font-bold tracking-[-0.8px] text-black sm:text-[40px] sm:leading-[1.4]">
          Things That Work for Me
        </h2>
      </div>

      <style>{`
        @keyframes skills-marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes skills-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) {
          .skills-marquee { animation: none !important; }
        }
      `}</style>

      <div className="relative h-[330px] sm:h-[500px]">
        {/* Dark ribbon — tilted up, outlined text (crosses behind) */}
        <div className="absolute left-1/2 top-1/2 w-[150vw] -translate-x-1/2 -translate-y-1/2 rotate-[7deg] overflow-hidden bg-[#182230] py-3 sm:py-5">
          <div
            className="skills-marquee flex w-max will-change-transform"
            style={{ animation: "skills-marquee-right 44s linear infinite" }}
          >
            <DarkRibbonRow />
            <DarkRibbonRow />
          </div>
        </div>

        {/* Orange ribbon — tilted down, crosses on top */}
        <div className="absolute left-1/2 top-1/2 w-[150vw] -translate-x-1/2 -translate-y-1/2 -rotate-[10deg] overflow-hidden bg-brand py-3 sm:py-5">
          <div
            className="skills-marquee flex w-max will-change-transform"
            style={{ animation: "skills-marquee-left 35s linear infinite" }}
          >
            <OrangeRibbonRow />
            <OrangeRibbonRow />
          </div>
        </div>
      </div>
    </section>
  );
}
