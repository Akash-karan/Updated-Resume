"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Tag = {
  label: string;
  bg: string;
  text: string;
  arrow: string;
  /** position on the large-screen stage, in % of the 1440x768 frame */
  style: React.CSSProperties;
  arrowAbove?: boolean;
  align: "start" | "end";
  /** diagonal drift toward the title (px) — horizontal component */
  driftX: number;
  /** diagonal drift toward the title (px) — vertical component */
  driftY: number;
  /** subtle rotation amplitude (deg) */
  rotate: number;
  /** seconds for one float cycle */
  duration: number;
  /** stagger offset so tags drift independently */
  delay: number;
};

const tags: Tag[] = [
  {
    label: "Product Thinking",
    bg: "#927cff",
    text: "#ffffff",
    arrow: "/images/arrow-1.svg",
    style: { left: "24.9%", top: "29.3%" },
    align: "end",
    // top-left → drift toward title (right + down)
    driftX: 12,
    driftY: 9,
    rotate: -2,
    duration: 6,
    delay: 0,
  },
  {
    label: "Illustrate",
    bg: "#d82363",
    text: "#ffffff",
    arrow: "/images/arrow-2.svg",
    style: { left: "19.4%", bottom: "31%", marginLeft: "30px" },
    arrowAbove: true,
    align: "end",
    // bottom-left → drift toward title (right + up)
    driftX: 12,
    driftY: -9,
    rotate: 2,
    duration: 6,
    delay: 1.5,
  },
  {
    label: "Sketching",
    bg: "#189ffa",
    text: "#ffffff",
    arrow: "/images/arrow-3.svg",
    style: { left: "73.8%", top: "28.6%" },
    align: "start",
    // top-right → drift toward title (left + down)
    driftX: -12,
    driftY: 9,
    rotate: 2,
    duration: 6,
    delay: 3,
  },
  {
    label: "User Research",
    bg: "#ffc700",
    text: "#000000",
    arrow: "/images/arrow-4.svg",
    style: { left: "68.5%", bottom: "31.9%" },
    arrowAbove: true,
    align: "start",
    // bottom-right → drift toward title (left + up)
    driftX: -12,
    driftY: -9,
    rotate: -2,
    duration: 6,
    delay: 4.5,
  },
];

function Pill({ tag }: { tag: Tag }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full px-2.5 py-1.5 font-marker text-[13px] font-medium shadow-[0px_4px_6px_0px_rgba(0,0,0,0.08)] whitespace-nowrap"
      style={{ backgroundColor: tag.bg, color: tag.text }}
    >
      {tag.label}
    </span>
  );
}

function FloatingTag({ tag }: { tag: Tag }) {
  const positionStyle: React.CSSProperties = {
    ...tag.style,
    ...(typeof tag.style.top === "string" ? { top: `calc(${tag.style.top} - 30px)` } : {}),
    ...(typeof tag.style.bottom === "string" ? { bottom: `calc(${tag.style.bottom} + 30px)` } : {}),
    willChange: "transform",
  };

  // Arrows that sit below the pill are flipped vertically so the cursor points outward/down.
  const arrowImg = (
    <Image
      src={tag.arrow}
      alt=""
      width={20}
      height={24}
      className={`h-6 w-5 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.25)] ${
        tag.arrowAbove ? "" : "-scale-y-100"
      }`}
    />
  );

  return (
    <motion.div
      className={`pointer-events-none absolute z-20 hidden min-[900px]:flex flex-col gap-2 ${
        tag.align === "end" ? "items-end" : "items-start"
      }`}
      style={positionStyle}
      // x and y peak at different moments so the tag traces a soft, looping
      // path (instead of a straight diagonal) — reads as organic floating.
      animate={{
        x: [0, tag.driftX, tag.driftX * 0.35, 0],
        y: [0, tag.driftY * 0.35, tag.driftY, 0],
        rotate: [0, tag.rotate, -tag.rotate * 0.6, 0],
      }}
      transition={{
        duration: tag.duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        times: [0, 0.33, 0.66, 1],
        delay: tag.delay,
      }}
    >
      {tag.arrowAbove && arrowImg}
      <Pill tag={tag} />
      {!tag.arrowAbove && arrowImg}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="dot-grid relative w-full overflow-hidden pt-28 pb-12 sm:pt-32 min-[900px]:pt-0"
    >
      {/* Large-screen artistic stage */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] min-[900px]:-mt-[65px] min-[900px]:block" style={{ aspectRatio: "1440 / 768" }}>
        {tags.map((tag) => (
          <FloatingTag key={tag.label} tag={tag} />
        ))}

        {/* Title cluster */}
        <div className="absolute left-1/2 top-[28.6%] flex w-[38.5%] -translate-x-1/2 flex-col items-center gap-3 max-[1023px]:-translate-y-[45px]">
          <div className="relative w-full -translate-y-[30px]">
            <Image
              src="/images/hero-title-t.png"
              alt="I Do Design"
              width={555}
              height={170}
              priority
              className="h-auto w-full"
            />
            <div className="absolute left-[82%] top-[24%] flex items-center gap-2.5 whitespace-nowrap">
              <span className="font-carter text-[clamp(18px,2.1vw,31px)] leading-none pt-3 text-transparent [-webkit-text-stroke:1px_#000]">&amp;</span>
              <span className="font-caveat text-[clamp(30px,3.4vw,50px)] leading-none text-brand">I Care !!</span>
            </div>
          </div>

          {/* Sticky note */}
          <div className="rotate-[-3deg]">
            <div className="relative inline-block">
              <Image
                src="/images/note-tape.svg"
                alt=""
                aria-hidden="true"
                width={59}
                height={31}
                className="pointer-events-none absolute left-[-31px] top-1/2 z-10 w-[59px] -translate-y-1/2 rotate-[98deg]"
              />
              <div className="relative bg-note-blue px-7 py-3 text-center shadow-[0px_3px_9px_0px_rgba(0,0,0,0.10)]">
                <p className="font-marker text-[17px] leading-7 text-black">Hello! Akash,</p>
                <p className="font-marker text-[17px] leading-7 text-black">Product Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intro paragraph */}
        <p className="absolute left-1/2 top-[83%] w-[58%] -translate-x-1/2 text-center text-[16px] leading-6 text-ink-soft">
          <span className="text-ink">1+ year</span> of turning ideas into screens. Not the most
          experienced in the room — but probably the <span className="text-ink">most curious.</span> I
          ask why before I ask how, and that makes all the difference in what I build.
        </p>
      </div>

      {/* Mobile / tablet stacked layout */}
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center min-[900px]:hidden">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <Pill tag={tags[0]} />
          <Pill tag={tags[2]} />
        </div>

        <div className="relative w-[88%] max-w-md">
          <Image
            src="/images/hero-title-t.png"
            alt="I Do Design"
            width={555}
            height={170}
            priority
            className="h-auto w-full"
          />
          <div className="absolute left-[78%] top-[18%] ml-[5px] flex items-center gap-1.5 whitespace-nowrap">
            <span className="font-carter text-[clamp(14px,3.6vw,22px)] leading-none pt-3 text-transparent [-webkit-text-stroke:1px_#000]">&amp;</span>
            <span className="font-caveat text-[clamp(22px,6vw,34px)] leading-none text-brand">I Care !!</span>
          </div>
        </div>

        <div className="mt-4 rotate-[-3deg]">
          <div className="relative inline-block">
            <Image
              src="/images/note-tape.svg"
              alt=""
              aria-hidden="true"
              width={59}
              height={31}
              className="pointer-events-none absolute left-[-31px] top-1/2 z-10 w-[59px] -translate-y-1/2 rotate-[98deg]"
            />
            <div className="relative bg-note-blue px-7 py-3 text-center shadow-[0px_3px_9px_0px_rgba(0,0,0,0.10)]">
              <p className="font-marker text-[16px] leading-7 text-black">Hello! Akash,</p>
              <p className="font-marker text-[16px] leading-7 text-black">Product Designer</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <Pill tag={tags[1]} />
          <Pill tag={tags[3]} />
        </div>

        <p className="mt-7 text-[15px] leading-6 text-ink-soft">
          <span className="text-ink">1+ year</span> of turning ideas into screens. Not the most
          experienced in the room — but probably the <span className="text-ink">most curious.</span> I
          ask why before I ask how, and that makes all the difference in what I build.
        </p>
      </div>
    </section>
  );
}
