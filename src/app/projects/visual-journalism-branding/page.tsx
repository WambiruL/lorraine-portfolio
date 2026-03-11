"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type Filter = "ALL" | "GRAPHICS" | "BRANDING";

const editorialPosts = [
  { id: 1,  title: "Crimes Against Children", src: "/images/projects/vjb/1.png",  category: "GRAPHICS",  url: "https://www.instagram.com/p/DRADorZju6c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 2,  title: "How Ivory Coast Voted",                                     src: "/images/projects/vjb/2.png",  category: "GRAPHICS", url: "https://www.instagram.com/p/DQYoN5JAih7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 3,  title: "Hausa Day",                                                  src: "/images/projects/vjb/3.png",  category: "GRAPHICS", url: "https://www.instagram.com/p/DQYoN5JAih7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 4,  title: "Ramadan Kareem",                                             src: "/images/projects/vjb/4.png",  category: "GRAPHICS", url: "https://www.instagram.com/reel/DGn8V07sHS7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 5,  title: "Foreign Aid in Africa",      src: "/images/projects/vjb/5.png",  category: "GRAPHICS", url: "https://www.instagram.com/p/DGnunhQsnBL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 6,  title: "UK's Immigration Policy?",   src: "/images/projects/vjb/6.png",  category: "GRAPHICS", url: "https://www.instagram.com/p/DJuN_Ifhlxc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 7,  title: "Eid Mubarak",                                                src: "/images/projects/vjb/7.png",  category: "GRAPHICS", url: "https://www.instagram.com/p/DHz53dwsMOd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 8,  title: "The Crisis in Sudan",               src: "/images/projects/vjb/8.png",  category: "GRAPHICS", url: "https://www.instagram.com/p/DIeTVUuss5X/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 9,  title: "Sudan Civil War: Key Events",                                src: "/images/projects/vjb/9.png",  category: "GRAPHICS", url: "https://www.instagram.com/p/DHtCUesMp1c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 10, title: "The Golden Boot Race",                       src: "/images/projects/vjb/10.png", category: "GRAPHICS", url: "https://www.instagram.com/p/DMNiL87TFHF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 11, title: "African Women Jailed",         src: "/images/projects/vjb/11.png", category: "GRAPHICS", url: "https://www.instagram.com/p/DHdLIMoRC4M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 12, title: "Health Workers in Ethiopia",    src: "/images/projects/vjb/12.png", category: "GRAPHICS", url: "https://www.instagram.com/p/DJ9jcLhM2Ck/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==https://www.bbc.com/YOUR-LINK-1" },
  { id: 13, title: "A Tale of Two Rivals",                   src: "/images/projects/vjb/13.png", category: "GRAPHICS", url: "https://www.instagram.com/p/DHvt75nRBkS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { id: 14, title: "New Media",    src: "/images/projects/vjb/14.png", category: "GRAPHICS", url: "https://www.instagram.com/p/DLcSd3APweU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
];

const brandingProjects = [
  {
    slug: "uganda-elections",
    title: "Uganda Elections 2026",
    subtitle: "Visual identity for broadcast, promo & social",
    src: "/images/projects/vjb/uganda/cover.png",
    accent: "#899878",
    bg: "#1a1206",
  },
  {
    slug: "wafcon",
    title: "WAFCON 2024",
    subtitle: "Visual identity for broadcast, promo & social",
    src: "/images/projects/vjb/wafcon/cover.png",
    accent: "#899878",
    bg: "#0a1a0b",
  },
];

export default function VisualJournalismPage() {
  const [active, setActive] = useState<Filter>("ALL");

  const filters: Filter[] = ["ALL", "GRAPHICS", "BRANDING"];

  const showGraphics = active === "ALL" || active === "GRAPHICS";
  const showBranding = active === "ALL" || active === "BRANDING";

  return (
    <main style={{ background: "var(--ink)", color: "var(--cream)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      {/* Back link */}
      <div className="fixed top-8 left-8 lg:left-16 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 transition-colors duration-300"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase" as const,
            color: "rgba(228,230,195,0.4)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(228,230,195,0.4)")}
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1 inline-block">←</span>
          Back to portfolio
        </Link>
      </div>

      <section
        className="relative min-h-[55vh] flex flex-col justify-end pb-20 pt-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1206 0%, #121113 55%, #0d0e0a 100%)" }}
      >
        {/* Ghost wordmark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(6rem, 18vw, 18rem)",
                fontWeight: 300,
                letterSpacing: "0.15em",
                color: "rgba(149,213,178,0.04)",
                lineHeight: 1,
              }}
            >
              VISUAL WORK
            </motion.span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 mb-10"
              style={{
                border: "1px solid rgba(228,230,195,0.12)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: "var(--moss)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--moss)" }} />
              Graphic Design · Brand Identity · Visual Journalism
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 6rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--cream)",
                maxWidth: "820px",
              }}
            >
              Visual Design{" "}
              <em style={{ color: "rgba(228,230,195,0.45)" }}>&</em>{" "}
              Branding
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "rgba(228,230,195,0.45)",
                maxWidth: "580px",
              }}
            >
              Editorial graphics and brand identity work, including a contract
              with BBC News Africa, covering stories across the continent with
              design that informs as much as it communicates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FILTER + CONTENT ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">

        {/* Filter pills */}
        <Reveal>
          <div className="flex items-center gap-3 mb-16">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="relative px-6 py-2.5 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: active === f ? "var(--ink)" : "rgba(228,230,195,0.4)",
                  background: active === f ? "var(--moss)" : "transparent",
                  border: active === f ? "1px solid var(--moss)" : "1px solid rgba(137,152,120,0.2)",
                  cursor: "pointer",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ── GRAPHICS GRID ── */}
        {/* <AnimatePresence> */}
          {showGraphics && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
            >
              {active === "ALL" && (
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
letterSpacing: "0.3em",
                    textTransform: "uppercase" as const,
                    color: "rgba(228,230,195,0.2)",
                  }}
                >
                  ── Editorial Graphics
                </p>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-20">
                {editorialPosts.map((post, i) => (
                  <Reveal key={post.id} delay={i * 0.03}>
                    <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden block" 
                    style={{ aspectRatio: "1/1", isolation: "isolate", transform: "translateZ(0)"}}
                    >

                        {/* Image — desaturated at rest, colour on hover */}
                        <div
                            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                            style={{ background: "var(--forest)" }}
                        >
                            <img
                            src={post.src}
                            alt={post.title}
                            className="w-full h-full object-cover transition-all duration-700"
                            style={{ filter: "grayscale(100%)" }}
                            onMouseEnter={(e) => ((e.target as HTMLImageElement).style.filter = "grayscale(0%)")}
                            onMouseLeave={(e) => ((e.target as HTMLImageElement).style.filter = "grayscale(100%)")}
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                            />
                            {/* Placeholder number */}
                            <div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.55rem",
                                color: "rgba(228,230,195,0.15)",
                                letterSpacing: "0.3em",
                            }}
                            >
                            {String(post.id).padStart(2, "0")}
                            </div>
                        </div>

                        {/* Frost layer — fades out on hover */}
                        <div
                        className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none"
                        style={{
                            backdropFilter: "blur(12px) saturate(0.4) brightness(0.7)",
                            WebkitBackdropFilter: "blur(12px) saturate(0.4) brightness(0.7)",
                            background: "rgba(34,55,40,0.45)",
                            willChange: "opacity",
                            isolation: "isolate",
                        }}
                        />

                        {/* Title — always visible at rest, stays on hover */}
                        {/* Title — centred, editorial styled */}
                        <div
                        className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(20,45,28,0.92) 0%, rgba(20,45,28,0.4) 100%)" }}
                        >
                        {/* Title */}
                        <p
                            className="text-center transition-opacity duration-500 group-hover:opacity-0 mb-3"
                            style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
                            fontWeight: 300,
                            fontStyle: "italic",
                            lineHeight: 1.4,
                            color: "var(--sage)",
                            opacity:0.7,
                            letterSpacing: "0.01em",
                            }}
                        >
                            {post.title}
                        </p>

                        {/* Divider line */}
                        <div
                            className="transition-opacity duration-500 group-hover:opacity-0 mb-3"
                            style={{
                            width: "24px",
                            height: "1px",
                            background: "var(--moss)",
                            }}
                        />

                        {/* Click directive */}
                        <p
                            className="transition-opacity duration-500 group-hover:opacity-0"
                            style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.53rem",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase" as const,
                            color: "var(--moss)",
                            }}
                        >
                            Click to view Post
                        </p>
                        </div>

                    </a>
                  </Reveal>
                ))}
              </div>
            </motion.div>
          )}
        {/* </AnimatePresence> */}

        {/* ── BRANDING CARDS ── */}
        {/* <AnimatePresence> */}
          {showBranding && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
            >
              {active === "ALL" && (
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
letterSpacing: "0.3em",
                    textTransform: "uppercase" as const,
                    color: "rgba(228,230,195,0.2)",
                  }}
                >
                  ── Brand Identity
                </p>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {brandingProjects.map((project, i) => (
                  <Reveal key={project.slug} delay={i * 0.08}>
                    <Link
                        href={`/projects/visual-journalism-branding/${project.slug}`}
                        className="group block relative overflow-hidden"
                        style={{ aspectRatio: "4/3" }}
                        >
                        {/* Cover image — colour always retained */}
                        <div
                            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                            style={{ background: project.bg }}
                        >
                            <img
                            src={project.src}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-700"
                            style={{ opacity: 0.75 }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = "none";
                            }}
                            />
                        </div>

                        {/* Frost layer — fades out on hover, tinted with project accent */}
                        <div
                            className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none"
                            style={{
                            backdropFilter: "blur(20px) brightness(0.55)",
                            WebkitBackdropFilter: "blur(20px) brightness(0.6)",
                            background: `${project.bg}99`,
                            }}
                        />

                        {/* Content — centred, fades out with frost */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                            <div className="flex flex-col items-center transition-opacity duration-500 group-hover:opacity-0">
                            {/* <p
                                className="mb-3 text-center"
                                style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.55rem",
                                letterSpacing: "0.3em",
                                textTransform: "uppercase" as const,
                                color: project.accent,
                                }}
                            >
                                Brand Identity
                            </p> */}
                            <h3
                                className="text-center mb-3"
                                style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(1.5rem, 2vw, 2.5rem)",
                                fontWeight: 300,
                                fontStyle: "italic",
                                color: "var(--sage)",
                                lineHeight: 1.1,
                                }}
                            >
                                {project.title}
                            </h3>
                            <p
                                className="text-center mb-5"
                                style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "0.85rem",
                                color: "rgba(228,230,195,0.45)",
                                }}
                            >
                                {project.subtitle}
                            </p>
                            <div
                                className="mb-4"
                                style={{ width: "24px", height: "1px", background: project.accent }}
                            />
                            <p
                                style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.59rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase" as const,
                                color: project.accent,
                                }}
                            >
                                Click to View Identity
                            </p>
                            </div>
                        </div>

                        </Link>
                  </Reveal>
                ))}
              </div>
            </motion.div>
          )}
        {/* </AnimatePresence> */}

      </div>

      {/* ══ NEXT PROJECT ══ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--forest)" }}
      >
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(6rem, 18vw, 18rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(137,152,120,0.04)",
              lineHeight: 1,
              position: "absolute",
              bottom: "-0.1em",
              right: "-0.05em",
              whiteSpace: "nowrap",
            }}
          >
            Solara
          </span>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-28 lg:py-40">
          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase" as const,
              color: "var(--moss)",
            }}
          >
            Next Project
          </p>
          <Link href="/projects/solara" className="group block">
            <h2
              className="mb-4 transition-colors duration-300 group-hover:text-moss"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--cream)",
              }}
            >
              Solara
            </h2>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 3vw, 2.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(228,230,195,0.4)",
              }}
            >
              AI Student Wellbeing App
            </p>
          </Link>
          <Link
            href="/projects/solara"
            className="group inline-flex items-center gap-3 mt-14"
            style={{ color: "rgba(228,230,195,0.3)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(228,230,195,0.3)")}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const }}>
              View Case Study
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-2 inline-block">→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}