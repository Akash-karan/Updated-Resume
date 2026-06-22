"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { XIcon } from "@/components/icons";

export default function About() {
  return (
    <section id="about" className="dot-grid w-full px-4 py-16 sm:px-6 sm:py-24">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-[1136px] rounded-xl border border-black bg-[#ffe68c] p-6 drop-shadow-[0px_1px_1px_rgba(16,24,40,0.05)] sm:p-8"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-0.5">
            <h2 className="font-sans text-[28px] font-bold leading-tight tracking-[-0.8px] text-black sm:text-[40px] sm:leading-[1.4]">
              Me, beyond the resume
            </h2>
            <p className="max-w-[463px] text-[15px] leading-6 text-ink sm:text-[16px]">
              Supposed to be an engineer. Became a designer instead.
              <br />
              Lockdown gave me time. Design gave me purpose. I fell for the craft — the precision, the
              communication, the attention to detail that makes people feel something.
              <br />
              Zero experience. Full commitment. Still going.
            </p>
          </div>

          <a
            href={site.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center gap-1.5 rounded-full border border-black bg-white px-3.5 py-2.5 text-[14px] font-black text-ink shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0px_6px_0px_0px_#000] active:translate-y-0 active:shadow-none"
          >
            <XIcon className="h-[18px] w-[18px]" />
            Still curious? Let&apos;s talk on X
          </a>
        </div>

        {/* Character — head pokes above the card, lower half blends with the yellow */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute bottom-0 right-[3%] hidden w-[260px] min-[900px]:block xl:w-[308px]"
        >
          <Image
            src="/images/about-character.svg"
            alt="Illustration of Akash"
            width={308}
            height={423}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
