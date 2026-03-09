"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

// ── Frost texture SVG as data URI ──────────────────────────────
const frostTexture = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='frost'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' seed='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeBlend in='SourceGraphic' mode='soft-light'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23frost)' opacity='0.5'/%3E%3C/svg%3E")`;

function ProjectCard({
  project,
  index,
  priority = false,
}: {
  project: (typeof projects)[0];
  index: number;
  priority?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 60%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity,
        y,
        borderRadius: "3px",
        boxShadow: hovered
          ? "0 24px 60px rgba(18,17,19,0.5), 0 1px 0 rgba(247,247,242,0.06) inset"
          : "0 8px 30px rgba(18,17,19,0.35)",
        transition: "box-shadow 0.6s ease",
      }}
      className="group relative overflow-hidden cursor-pointer w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/projects/${project.slug}`} className="block w-full h-full">

        {/* ── Layer 1: Actual image — revealed on hover ── */}
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority={priority}
            className="object-cover"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1.08)",
              transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
          {/* Image darkening overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(18,17,19,0.92) 0%, rgba(18,17,19,0.3) 50%, rgba(18,17,19,0.1) 100%)",
            }}
          />
        </div>

        {/* ── Layer 2: Frost panel — fades out on hover ── */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: hovered ? 0 : 1,
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Frosted glass base */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(34,39,37,0.82)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          />

          {/* Noise / ice texture */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: frostTexture,
              backgroundSize: "200px 200px",
              mixBlendMode: "overlay",
            }}
          />

          {/* Subtle moss tint shimmer */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 40% 30%, rgba(137,152,120,0.18) 0%, transparent 65%)",
            }}
          />

          {/* Glass edge highlights */}
          <div
            className="absolute inset-0"
            style={{
              boxShadow: "inset 0 1px 0 rgba(247,247,242,0.12), inset 0 -1px 0 rgba(18,17,19,0.2), inset 1px 0 rgba(247,247,242,0.05), inset -1px 0 rgba(247,247,242,0.05)",
            }}
          />

          {/* Frosted state content — center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
            <span
              className="text-cream/20 text-[9px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {project.category}
            </span>
            <h3
              className="text-cream/40 text-center leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 300,
                fontStyle: "italic",
                textShadow: "0 1px 8px rgba(18,17,19,0.5)",
              }}
            >
              {project.title}
            </h3>
            {/* Hover hint */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="flex items-center gap-2 mt-1"
            >
              <span className="w-4 h-px bg-moss/40" />
              <span
                className="text-moss/50 text-[8px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Hover to reveal
              </span>
              <span className="w-4 h-px bg-moss/40" />
            </motion.div>
          </div>
        </div>

        {/* ── Layer 3: Bottom content — always present ── */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 lg:px-7 py-6 flex items-end justify-between"
          style={{
            background: "linear-gradient(to top, rgba(18,17,19,0.92) 0%, rgba(18,17,19,0.4) 60%, transparent 100%)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: hovered ? "0.15s" : "0s",
          }}
        >
          <div className="flex flex-col gap-2">
            <span
              className="self-start text-[8px] tracking-[0.22em] uppercase px-2.5 py-1"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(137,152,120,0.9)",
                background: "rgba(18,17,19,0.5)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(137,152,120,0.2)",
              }}
            >
              {project.category}
            </span>
            <h3
              className="text-cream leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                fontWeight: 300,
                textShadow: "0 2px 20px rgba(18,17,19,0.8)",
              }}
            >
              {project.title}
            </h3>
            <span
              className="text-cream/25 text-[8px] tracking-[0.3em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {project.year}
            </span>
          </div>

          {/* Arrow */}
          <div
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center ml-4"
            style={{
              background: "rgba(137,152,120,0.15)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(137,152,120,0.3)",
            }}
          >
            <span className="text-moss text-xs">↗</span>
          </div>
        </div>

        {/* Index number — top left, always visible on frost */}
        <div className="absolute top-5 left-6">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: hovered ? "rgba(247,247,242,0.08)" : "rgba(247,247,242,0.15)",
              transition: "color 0.5s ease",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

      </Link>
    </motion.div>
  );
}

// ── Grid layout ────────────────────────────────────────────────
function ProjectsGrid({ visibleProjects }: { visibleProjects: typeof projects }) {
  const count = visibleProjects.length;

  if (count === 1) {
    return (
      <div className="h-[500px]">
        <ProjectCard project={visibleProjects[0]} index={0} priority />
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="h-[500px]"><ProjectCard project={visibleProjects[0]} index={0} priority /></div>
        <div className="h-[500px]"><ProjectCard project={visibleProjects[1]} index={1} /></div>
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="flex flex-col gap-3">
        <div className="h-[500px] lg:h-[560px]">
          <ProjectCard project={visibleProjects[0]} index={0} priority />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="h-[380px]"><ProjectCard project={visibleProjects[1]} index={1} /></div>
          <div className="h-[380px]"><ProjectCard project={visibleProjects[2]} index={2} /></div>
        </div>
      </div>
    );
  }

  if (count === 4) {
    return (
      <div className="flex flex-col gap-3">
        <div className="h-[500px] lg:h-[580px]">
          <ProjectCard project={visibleProjects[0]} index={0} priority />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="h-[360px]"><ProjectCard project={visibleProjects[1]} index={1} /></div>
          <div className="h-[360px]"><ProjectCard project={visibleProjects[2]} index={2} /></div>
          <div className="h-[360px]"><ProjectCard project={visibleProjects[3]} index={3} /></div>
        </div>
      </div>
    );
  }

  const hero      = visibleProjects[0];
  const second    = visibleProjects.slice(1, 3);
  const remaining = visibleProjects.slice(3);

  return (
    <div className="flex flex-col gap-3">
      <div className="h-[500px] lg:h-[580px]">
        <ProjectCard project={hero} index={0} priority />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {second.map((p, i) => (
          <div key={p.slug} className="h-[380px]">
            <ProjectCard project={p} index={i + 1} />
          </div>
        ))}
      </div>
      {remaining.length > 0 && (
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: `repeat(${Math.min(remaining.length, 3)}, 1fr)` }}
        >
          {remaining.map((p, i) => (
            <div key={p.slug} className="h-[340px]">
              <ProjectCard project={p} index={i + 3} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main section ───────────────────────────────────────────────
const INITIAL_SHOW = 4;

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const hasMore = projects.length > INITIAL_SHOW;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_SHOW);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 40%"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: "var(--ink)" }}
    >
      {/* Subtle noise over the green background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Top fade from ink */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--ink), transparent)" }}
      />

      {/* Bottom fade to ink */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--ink), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="flex items-end justify-between mb-12 lg:mb-16"
        >
          <div>
            <p
              className="text-moss text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Selected Work
            </p>
            <h2
              className="text-cream leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Projects
            </h2>
          </div>
          <span
            className="text-cream/[0.06] hidden lg:block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            {String(projects.length).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? "all" : "initial"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectsGrid visibleProjects={visibleProjects} />
          </motion.div>
        </AnimatePresence>

        {/* View All */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <button
              data-hover
              onClick={() => setShowAll((v) => !v)}
              className="group relative overflow-hidden border border-moss/25 hover:border-moss/50 px-10 py-3.5 transition-all duration-500 flex items-center gap-3"
            >
              <span
                className="relative z-10 text-[10px] tracking-[0.28em] uppercase text-sage/60 group-hover:text-ink transition-colors duration-500"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {showAll ? "Show Less" : `View All Projects (${projects.length})`}
              </span>
              <motion.span
                className="relative z-10 text-moss group-hover:text-ink transition-colors duration-500 text-xs"
                animate={{ y: showAll ? [0, -3, 0] : [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                {showAll ? "↑" : "↓"}
              </motion.span>
              <span
                className="absolute inset-0 bg-moss translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              />
            </button>
          </motion.div>
        )}

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 flex items-center gap-4"
        >
          <span className="w-6 h-px bg-moss/25" />
          <p
            className="text-sage/30 text-[10px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            More work available on request
          </p>
        </motion.div>
      </div>
    </section>
  );
}