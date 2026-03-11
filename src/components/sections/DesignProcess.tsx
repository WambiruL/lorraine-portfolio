"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const principles = [
  {
    number: "01",
    icon: "◎",
    title: "Start with People",
    description:
      "Every brief starts with one question: what does the person on the other end actually need? I sit with real users before touching a wireframe; observing, questioning, and unlearning assumptions.",
  },
  {
    number: "02",
    icon: "⊞",
    title: "Clarity Over Complexity",
    description:
      "The best design makes hard things feel effortless. I strip away until what remains is precisely what's needed, nothing more. Simplicity is the hardest thing to achieve and the most valuable thing to deliver.",
  },
  {
    number: "03",
    icon: "↺",
    title: "Iterate Without Ego",
    description:
      "No design survives first contact with users, and it shouldn't. I validate early, fail fast, and treat every round of feedback as a gift. The version that ships is always stronger for what was thrown away.",
  },
  {
    number: "04",
    icon: "◈",
    title: "Aesthetic with Intent",
    description:
      "Visual craft isn't decoration, it's communication. Every colour, typeface, and spacing decision carries meaning. I design systems that are as considered as they are beautiful.",
  },
];

function PrincipleCard({
  principle,
  index,
}: {
  principle: (typeof principles)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 55%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="flex flex-col gap-5 group"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center text-moss/60 group-hover:text-moss transition-colors duration-500"
        style={{
          background: "rgba(34,39,37,0.6)",
          border: "1px solid rgba(137,152,120,0.15)",
          fontSize: "1rem",
        }}
      >
        {principle.icon}
      </div>

      {/* Number */}
      <span
        className="text-moss text-[9px] tracking-[0.3em] uppercase"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {principle.number}
      </span>

      {/* Title */}
      <div>
        <h3
          className="text-cream mb-1 leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            fontWeight: 400,
          }}
        >
          {principle.title}
        </h3>
        {/* Underline */}
        <div
          className="h-px w-8 bg-moss/30 group-hover:w-full transition-all duration-700"
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        />
      </div>

      {/* Description */}
      <p
        className="text-sage/45 leading-relaxed"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.82rem",
          lineHeight: 1.75,
        }}
      >
        {principle.description}
      </p>
    </motion.div>
  );
}

export default function DesignProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 30%"],
  });

  const headerOpacity = useTransform(headerProgress, [0, 1], [0, 1]);
  const headerY = useTransform(headerProgress, [0, 1], [40, 0]);

  const caseStudyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: caseProgress } = useScroll({
    target: caseStudyRef,
    offset: ["start end", "start 60%"],
  });
  const caseOpacity = useTransform(caseProgress, [0, 1], [0, 1]);
  const caseY = useTransform(caseProgress, [0, 1], [40, 0]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-28 lg:py-40"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-8 right-8 lg:left-16 lg:right-16 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(137,152,120,0.12), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 lg:px-16">

        {/* ── Header block ── */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16 lg:mb-20"
        >
          {/* Left — heading */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-moss text-[9px] tracking-[0.35em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
              
              </span>
              <span className="w-8 h-px bg-moss/30" />
              <span
                className="text-moss/60 text-[0.8em] tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Design Thinking
              </span>
            </div>
            <h2
              className="text-cream leading-[1.05]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                fontWeight: 300,
              }}
            >
              How I approach
              <br />
              <span style={{ fontStyle: "italic" }}>every problem.</span>
            </h2>
          </div>

          {/* Right — quote */}
          <div className="flex items-end lg:items-center">
            <div className="relative pl-6">
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(137,152,120,0.4), transparent)",
                }}
              />
              <blockquote
                className="text-sage/50 leading-relaxed"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                "Good design is not just how something looks, it&apos;s how
                clearly it communicates, how gracefully it handles the
                unexpected, and how respectfully it treats the person using it."
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div
          className="w-full h-px mb-16 lg:mb-20"
          style={{
            background:
              "linear-gradient(to right, rgba(137,152,120,0.12), rgba(137,152,120,0.06), transparent)",
          }}
        />

        {/* ── Principles grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-24 lg:mb-32">
          {principles.map((p, i) => (
            <PrincipleCard key={p.number} principle={p} index={i} />
          ))}
        </div>

        {/* ── Featured case study ── */}
        <motion.div
          ref={caseStudyRef}
          style={{ opacity: caseOpacity, y: caseY }}
        >
          <Link href="/projects/visual-journalism-branding/uganda-elections" className="group block">
            <div
              className="relative overflow-hidden px-8 py-10 lg:px-12 lg:py-14"
              style={{
                background: "rgba(34,39,37,0.5)",
                border: "1px solid rgba(137,152,120,0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {/* Hover background bloom */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 50%, rgba(137,152,120,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Top edge highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(137,152,120,0.25), transparent)",
                }}
              />

              <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
                {/* Left content */}
                <div>
                  <span
                    className="text-moss text-[0.8em] tracking-[0.3em] uppercase mb-5 block"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Featured Case Study
                  </span>
                  <h3
                    className="text-cream leading-tight mb-4 group-hover:text-sage transition-colors duration-500"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.8rem, 4vw, 3rem)",
                      fontWeight: 300,
                    }}
                  >
                    How I built a visual identity for BBC News Africa,
                    <span style={{ fontStyle: "italic" }}>
                      {" "}and made it feel both global and rooted.
                    </span>
                  </h3>
                  <p
                    className="text-sage/40 max-w-xl"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                    }}
                  >
                    A deep dive into the research, creative decisions, and craft
                    behind one of the most significant projects of my career,
                    event branding at one of the world&apos;s most recognised
                    media organisations.
                  </p>
                </div>

                {/* Right CTA */}
                <div className="flex-shrink-0">
                  <div
                    className="group/btn relative overflow-hidden flex items-center justify-center gap-3 px-7 py-4 transition-all duration-500"
                    style={{
                      border: "1px solid rgba(137,152,120,0.35)",
                      color: "var(--moss)",
                    }}
                  >
                    <span
                      className="relative z-10 text-[0.6em] tracking-[0.25em] uppercase group-hover/btn:text-ink transition-colors duration-500 whitespace-nowrap"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Read Case Study
                    </span>
                    <motion.span
                      className="relative z-10 group-hover/btn:text-ink transition-colors duration-300"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                    <span
                      className="absolute inset-0 bg-moss translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500"
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}