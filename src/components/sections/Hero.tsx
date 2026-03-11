"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import InkBleed from "@/components/shared/InkBleed";
// import VellumOverlay from "@/components/shared/VellumOverlay";
import Image from "next/image";

// Stagger helper
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax on the image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  // Fade out content as you scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY       = useTransform(scrollYProgress, [0, 0.5], ["0%", "-6%"]);

  // Cursor tracking springs
const rawX = useSpring(0, { stiffness: 25, damping: 15, mass: 1.0 });
const rawY = useSpring(0, { stiffness: 25, damping: 15, mass: 1.0 });
const trackX = useTransform(rawX, [-1, 1], [-19, 19]);
const trackY = useTransform(rawY, [-1, 1], [-15, 15]);

useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const handleMove = (e: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  container.addEventListener("mousemove", handleMove);
  container.addEventListener("mouseleave", handleLeave);
  return () => {
    container.removeEventListener("mousemove", handleMove);
    container.removeEventListener("mouseleave", handleLeave);
  };
}, [rawX, rawY]);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* ── Grain overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Starfield ── */}
      {/* <StarField /> */}
      {/* ── Ink bleed ── */}
<InkBleed />

{/* ── Vellum paper texture ── */}
{/* <VellumOverlay /> */}


      {/* ── Vertical label — left edge ── */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4">
        <span
          className="text-moss/40 text-[15px] tracking-[0.35em] uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Portfolio 2026
        </span>
        <span className="w-px h-16 bg-moss/20" />
      </div>

      {/* ── Scroll indicator — bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span
          className="text-moss/40 text-[9px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-moss/40 to-tr ansparent"
        />
      </motion.div>

      {/* ── Main grid ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 items-center min-h-screen pt-24 pb-16">

        {/* ── Left: Text ── */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="flex flex-col justify-center"
        >
          {/* Eyebrow */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex items-center gap-4 mb-10"
          >
            <span className="w-10 h-px bg-moss/60" />
            <span
              className="text-moss text-[1em] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Product & Visual Designer
            </span>
          </motion.div>

          {/* Display heading — large editorial */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="text-cream leading-[0.9] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4rem, 9vw, 8.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Lorraine
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.62 }}
              className="text-cream leading-[0.9] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4rem, 9vw, 8.5rem)",
                fontWeight: 300,
              }}
            >
              Wambiru
            </motion.h1>
          </div>

          {/* Tagline row */}
          <motion.div
            {...fadeUp(0.95)}
            className="flex items-center gap-5 mt-10 mb-12"
          >
            <span className="w-12 h-px bg-cream/30" />
            <p
              className="text-sage/60 text-xs tracking-[0.28em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Crafting interfaces that think
            </p>
          </motion.div>

          {/* Second tagline line */}
          <motion.div
            {...fadeUp(1.05)}
            className="flex items-center gap-5 -mt-8 mb-12"
          >
            <span className="w-12 h-px bg-transparent" />
            <p
              className="text-sage/40 text-xs tracking-[0.28em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              & visuals that feel
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(1.15)}
            className="flex items-center gap-5 flex-wrap"
          >
            <button
              data-hover
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden border border-moss/50 px-8 py-3.5 text-[0.8em] tracking-[0.25em] uppercase text-moss transition-all duration-500 hover:text-ink"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="relative z-10">View Work</span>
              <span className="absolute inset-0 bg-moss translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </button>

            <button
              data-hover
              onClick={() => {
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[0.8em] tracking-[0.25em] uppercase text-sage/50 hover:text-cream transition-colors duration-300 flex items-center gap-2 group"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              About Me
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </motion.div>

        {/* ── Right: Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative hidden lg:flex justify-end items-center h-full"
        >
          <motion.div
            style={{ y: imageY }}
            className="relative w-[580px] h-[620px]"
          >
            <motion.div
              style={{ x: trackX, y: trackY }}
              className="absolute inset-0"
            >
            {/* Image container with CSS treatment */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/lorraine.png"
                alt="Lorraine Wambiru"
                fill
                priority
                className="object-cover object-top"
                style={{
                  // filter: "contrast(1.08) brightness(0.82) saturate(0.72)",
                  objectPosition: "50% 35%",  // was "55% 50%" — pulls face down to natural eye level
                  mixBlendMode: "normal",
                }}
              />
              {/* Duotone-style overlay — moss tint on shadows */}
              <div
                className="absolute inset-0"
                style={{
                  //background: "linear-gradient(160deg, transparent 40%, rgba(18,17,19,0.55) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
              {/* Left fade — blends into content */}
              <div
                className="absolute inset-y-0 left-0 w-32"
                style={{
                  // background: "linear-gradient(to right, #121113, transparent)",
                }}
              />
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-28"
                style={{
                   //background: "linear-gradient(to top, #121113, transparent)",
                }}
              />
            </div>
            </motion.div>

            {/* Floating stat card — bottom left of image */}
            {/* <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-10 bg-forest border border-moss/20 px-8 py-4"
            >
              <p
                className="text-moss text-[9px] tracking-[0.3em] uppercase mb-1"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Experience
              </p>
              <p
                className="text-cream text-2xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
              >
                2+ Years
              </p>
            </motion.div> */}

            {/* Floating discipline tag — top right */}
            {/* <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-4 bg-moss/10 border border-moss/30 backdrop-blur-sm px-4 py-2"
            >
              <p
                className="text-moss text-[9px] tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                UX · UI · Graphic Design
              </p>
            </motion.div> */}
          </motion.div>
        </motion.div>

        {/* ── Mobile image (below text on small screens) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="lg:hidden relative w-full h-64 mt-12 overflow-hidden"
        >
          <Image
            src="/images/lorraine.png"
            alt="Lorraine Wambiru"
            fill
            className="object-cover object-top"
            style={{ filter: "contrast(1.08) brightness(0.82) saturate(0.72)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #121113 20%, transparent 80%)" }}
          />
        </motion.div>

      </div>
    </section>
  );
}