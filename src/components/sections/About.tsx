"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const skills = [
  "UX Research",
  "Information Architecture",
  "Interaction Design",
  "Visual Design",
  "Design Systems",
  "Prototyping",
  "Brand Identity",
  "Coding & Software Development",
  "AI-assisted Design",
  "Accessibility",
  "Mobile-first Design"
];

const tools = [
  //{ name: "Git & Github", level: 98 },
  { name: "Figma",             level: 95 },
  { name: "Adobe Photoshop",     level: 85 },
  { name: "Adobe Illustrator", level: 75 },
  { name: "React & TypeScript", level: 65 }

];

const outside = [
  "Literature", "Visual Aesthetics", "Cinema", "Pinterest Curation", "Music"
];

function ToolBar({ tool, index }: { tool: (typeof tools)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 55%"],
  });
  const width  = useTransform(scrollYProgress, [0, 1], ["0%", `${tool.level}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div ref={ref} style={{ opacity }} className="group">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-sage/60 text-[11px] tracking-[0.15em]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {tool.name}
        </span>
        <span
          className="text-moss/50 text-[0.7em] tracking-[0.15em]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {tool.level}%
        </span>
      </div>
      <div
  className="relative w-full"
  style={{ background: "rgba(137,152,120,0.1)", height: "1px", overflow: "visible" }}
>
        <motion.div
          style={{ width, height: "1px", overflow: "visible" }}
          className="absolute top-0 left-0"
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
        >
          {/* Bar body */}
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to right, rgba(137,152,120,0.3), rgba(137,152,120,0.95))",
            }}
          />
            {/* Glow trail along the whole bar */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, transparent 0%, rgba(137,152,120,0.25) 50%, rgba(137,152,120,0.6) 100%)",
                filter: "blur(3px)",
              }}
            />
          {/* Glowing tip dot */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
            style={{
              background: "var(--sage)",
              boxShadow: "0 0 6px 2px rgba(137,152,120,0.8), 0 0 12px 4px rgba(137,152,120,0.3)",
            }}
          />
                  </motion.div>
                </div>
              </motion.div>
            );
          }

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y       = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: imgProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "start 40%"],
  });
  const imageOpacity = useTransform(imgProgress, [0, 1], [0, 1]);
  const imageScale   = useTransform(imgProgress, [0, 1], [0.96, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
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

        {/* Section label */}
        <motion.div
          style={{ opacity, y }}
          className="flex items-center gap-4 mb-16"
        >
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
            About
          </span>
        </motion.div>

        {/* ── Main grid: image left, content right ── */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">

          {/* ── Left: Image + status ── */}
          <motion.div
            ref={imageRef}
            style={{ opacity: imageOpacity, scale: imageScale }}
            className="flex flex-col gap-5"
          >
            {/* Photo */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "3/4",
                background: "var(--forest)",
              }}
            >
              <Image
                src="/images/lorraine-org.png"
                alt="Lorraine Wambiru"
                fill
                className="object-cover object-top"
                style={{ filter: "contrast(1.05) brightness(0.92)" }}
              />
              {/* Subtle bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background: "linear-gradient(to top, rgba(18,17,19,0.4), transparent)",
                }}
              />
              {/* Corner bracket — top left */}
              <div
                className="absolute top-3 left-3 w-5 h-5"
                style={{
                  borderTop: "1px solid rgba(137,152,120,0.4)",
                  borderLeft: "1px solid rgba(137,152,120,0.4)",
                }}
              />
              {/* Corner bracket — bottom right */}
              <div
                className="absolute bottom-3 right-3 w-5 h-5"
                style={{
                  borderBottom: "1px solid rgba(137,152,120,0.4)",
                  borderRight: "1px solid rgba(137,152,120,0.4)",
                }}
              />
            </div>

            {/* Availability badge */}
            <div
              className="flex items-center gap-2.5 self-start px-4 py-2.5"
              style={{
                background: "rgba(34,39,37,0.6)",
                border: "1px solid rgba(137,152,120,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--moss)" }}
              />
              <span
                className="text-moss/80 text-[9px] tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Available for projects
              </span>
            </div>

            {/* Outside of work — on desktop sits under photo */}
            <div className="hidden lg:block mt-4">
              <p
                className="text-moss/50 text-[0.6em] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Outside of Work
              </p>
              <div className="flex flex-wrap gap-2">
                {outside.map((item) => (
                  <span
                    key={item}
                    className="text-sage/35 text-[10px] tracking-[0.12em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item}
                    <span className="text-moss/20 mx-1.5">·</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col gap-10">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h2
                className="text-cream leading-[1.08]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                  fontWeight: 300,
                }}
              >
                I&apos;m Lorraine;
                <br />
                <span style={{ fontStyle: "italic" }}>designer at heart</span>
                <br />
                <span className="text-sage/35">engineer by practise.</span>
              </h2>
            </motion.div>

            {/* Bio paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              <p
                className="text-sage/55 leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
              >
                I&apos;m a Product & Visual Designer with 2+ years of experience
                designing digital products and visual identities, including work
                for <span className="text-cream/70">BBC News</span>, where I contributed to
                graphic design and event branding for one of the world&apos;s
                most recognised media organisations.
              </p>
              <p
                className="text-sage/55 leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
              >
                I work at the intersection of UX thinking and visual craft, from
                early discovery research and information architecture to
                high-fidelity UI systems and brand identity. I also build in
                React and TypeScript, which means I design with real
                constraints in mind and communicate with engineers in their
                language.
              </p>
              <p
                className="text-sage/55 leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
              >
                I&apos;m currently open to{" "}
                <span className="text-cream/70">
                  product design and visual design roles
                </span>{" "}
                full-time or freelance, at organisations where design is
                treated as a strategic function, not a finishing touch.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <p
                className="text-moss/50 text-[0.8em] tracking-[0.3em] uppercase mb-5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] tracking-[0.12em] px-3 py-1.5 transition-colors duration-300 hover:border-moss/40 hover:text-cream/80"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "rgba(228,230,195,0.45)",
                      border: "1px solid rgba(137,152,120,0.15)",
                      background: "rgba(34,39,37,0.3)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              <p
                className="text-moss/50 text-[0.8em] tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Tools & Proficiency
              </p>
              <div className="flex flex-col gap-5">
                {tools.map((tool, i) => (
                  <ToolBar key={tool.name} tool={tool} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Outside of work — mobile only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="lg:hidden"
            >
              <p
                className="text-moss/50 text-[9px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Outside of Work
              </p>
              <div className="flex flex-wrap gap-2">
                {outside.map((item) => (
                  <span
                    key={item}
                    className="text-sage/35 text-[10px] tracking-[0.12em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item}
                    <span className="text-moss/20 mx-1.5">·</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex items-center gap-5 pt-2"
            >
              
              <a  href="/lorraine-wambiru-cv.pdf"
                download
                data-hover
                className="group relative overflow-hidden flex items-center gap-3 px-7 py-3.5 transition-all duration-500"
                style={{
                  border: "1px solid rgba(137,152,120,0.35)",
                  color: "var(--moss)",
                }}
              >
                <span
                  className="relative z-10 text-[10px] tracking-[0.25em] uppercase group-hover:text-ink transition-colors duration-500"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Download CV
                </span>
                <span className="relative z-10 text-xs group-hover:text-ink transition-colors duration-300">
                  ↓
                </span>
                <span
                  className="absolute inset-0 bg-moss translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                />
              </a>

              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 group transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "rgba(228,230,195,0.3)",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--cream)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(228,230,195,0.3)")}
              >
                View Behance
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12L12 4M12 4H6M12 4v6"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}