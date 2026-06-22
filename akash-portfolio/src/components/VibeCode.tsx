"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const noteText =
  'I build tiny apps by vibe coding — which is basically coding with 10% logic and 90% "this should probably work?" I\'ll share them once they survive testing. Oh, and yeah — this very website? Also vibe-coded. No regrets.';

export default function VibeCode() {
  return (
    <section className="dot-grid w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto mb-10 w-fit bg-[#ffe68c] px-2 sm:mb-12">
        <h2 className="text-center font-sans text-[26px] font-bold tracking-[-0.8px] text-black sm:text-[40px] sm:leading-[1.4]">
          I Build Things Too
        </h2>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0, rotate: -2 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-[420px] sm:max-w-[520px]"
      >
        <Image
          src="/images/vibe-note.png"
          alt={noteText}
          width={682}
          height={688}
          className="h-auto w-full"
        />
      </motion.div>
    </section>
  );
}
