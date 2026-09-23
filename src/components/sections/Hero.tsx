"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InkBleed from "@/components/shared/InkBleed";
import Image from "next/image";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Content settles as you leave the hero, no dramatic parallax
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-3%"]);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Grain, keeps the flat colour from feeling sterile */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Quiet, atmospheric background, tuned down for the hero */}
      <InkBleed />

      {/* Scroll cue, restrained */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="block w-px h-7 bg-gradient-to-b from-moss/30 to-transparent"
        />
      </motion.div>

      {/* Main composition: role, portrait and name read as one unit */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 w-full max-w-2xl mx-auto px-6 flex flex-col items-center text-center pt-24 pb-16"
      >
        {/* Role, sits close enough to feel like a caption for the portrait */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
          className="mb-6"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            letterSpacing: "0.03em",
            color: "rgba(228,230,195,0.55)",
          }}
        >
          Product &amp; Visual Designer
        </motion.p>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOut, delay: 0.35 }}
          className="relative z-20 w-[170px] h-[200px] sm:w-[220px] sm:h-[255px] lg:w-[280px] lg:h-[325px]"
        >
          <Image
            src="/images/lorraine.png"
            alt="Lorraine Wambiru"
            fill
            priority
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* Name, emerging from behind the portrait */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOut, delay: 0.45 }}
          className="relative z-10 leading-[0.85] tracking-tight -mt-7 sm:-mt-9 lg:-mt-12"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(3.2rem, 11vw, 7.5rem)",
            color: "var(--cream)",
          }}
        >
          Wambiru
        </motion.h1>

        {/* Introduction, short and personal */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.6 }}
          className="mt-8 max-w-md"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.02rem",
            lineHeight: 1.7,
            color: "rgba(228,230,195,0.6)",
          }}
        >
          Hi, I&apos;m Lorraine. I design digital products and visual
          experiences with equal curiosity for how they work and how they feel.
        </motion.p>

        {/* CTA, a quiet underline rather than a boxed button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.75 }}
          data-hover
          onClick={() => {
            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group mt-9 inline-flex items-center gap-2 border-b pb-1 transition-colors duration-300"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "var(--moss)",
            borderColor: "rgba(137,152,120,0.4)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--moss)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(137,152,120,0.4)")}
        >
          See my work
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
