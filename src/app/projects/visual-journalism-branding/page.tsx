"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { ImgSlot, SeriesCard } from "@/components/shared/SeriesLightbox";

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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type Filter = "ALL" | "GRAPHICS" | "BRANDING";

const STORIES = "/images/projects/vjb/stories";

type StoryPost =
  | { type: "single"; slug: string; title: string; src: string }
  | { type: "series"; slug: string; title: string; images: string[] };

const storyPosts: StoryPost[] = [
  { type: "series", slug: "ivory-coast-elections", title: "How Ivory Coast Voted", images: [1, 2, 3, 4, 5, 6].map((n) => `${STORIES}/ivory-coast-elections/${n}.png`) },
  { type: "single", slug: "hausa-day", title: "Hausa Day", src: `${STORIES}/hausa-day.png` },
  { type: "single", slug: "ramadan", title: "Ramadan", src: `${STORIES}/ramadan.png` },
  { type: "single", slug: "eid-mubarak", title: "Eid Mubarak", src: `${STORIES}/eid-mubarak.png` },
  { type: "series", slug: "uk-immigration", title: "UK's Immigration Policy", images: [1, 2, 3, 4, 5, 6, 7].map((n) => `${STORIES}/uk-immigration/${n}.png`) },
  { type: "series", slug: "sudan-war-timeline", title: "Sudan War Timeline", images: Array.from({ length: 10 }, (_, i) => `${STORIES}/sudan-war-timeline/${i + 1}.png`) },
  { type: "series", slug: "sudan-conflict-in-numbers", title: "Sudan Conflict in Numbers", images: [1, 2, 3, 4].map((n) => `${STORIES}/sudan-conflict-in-numbers/${n}.png`) },
  { type: "series", slug: "south-sudan-crisis", title: "South Sudan Crisis", images: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${STORIES}/south-sudan-crisis/${n}.png`) },
  { type: "series", slug: "ukaid", title: "UK Aid", images: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `${STORIES}/ukaid/${n}.png`) },
  { type: "series", slug: "violence-against-children", title: "Violence Against Children", images: [1, 2, 3, 4, 5, 6, 7].map((n) => `${STORIES}/violence-against-children/${n}.png`) },
  { type: "series", slug: "african-women", title: "African Women Being Punished for Being Poor", images: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${STORIES}/african-women-being-punished-for-being-poor/${n}.png`) },
  { type: "series", slug: "health-workers-strike", title: "Health Workers Strike", images: [1, 2, 3].map((n) => `${STORIES}/health-workers-strike/${n}.png`) },
  { type: "series", slug: "new-media-journalism", title: "New Media Journalism", images: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${STORIES}/new-media-journalism/${n}.png`) },
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

function BrandingCard({
  project,
  index,
}: {
  project: (typeof brandingProjects)[0];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
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
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700"
            style={{ opacity: 0.75 }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Frost layer — fades out on hover */}
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
  );
}

export default function VisualJournalismPage() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<Filter>("ALL");

  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

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
                fontWeight: 700,
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

          {/* Client toggle */}
          <Reveal delay={0.06}>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-5 py-2.5"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "var(--ink)",
                  background: "var(--moss)",
                  border: "1px solid var(--moss)",
                }}
              >
                BBC News Africa
              </span>
              <Link
                href="/projects/visual-journalism-branding/gates-foundation"
                className="px-5 py-2.5 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "rgba(228,230,195,0.5)",
                  border: "1px solid rgba(137,152,120,0.25)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(228,230,195,0.5)")}
              >
                Gates Foundation Africa
              </Link>
            </div>
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
              Editorial graphics and brand identity work spanning a contract
              with BBC News Africa and a social campaign for Gates Foundation
              Africa, design that informs and communicates across the continent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FILTER + CONTENT ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">

        {!mounted && (
          <div className="flex items-center justify-center py-32">
            <div
              className="w-px h-16 animate-pulse"
              style={{ background: "var(--moss)" }}
            />
          </div>
        )}

        {mounted && (
          <>
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
                  {storyPosts.map((post, i) => (
                    <Reveal key={post.slug} delay={i * 0.02}>
                      {post.type === "single" ? (
                        <ImgSlot src={post.src} label={post.title} aspect="1/1" />
                      ) : (
                        <SeriesCard images={post.images} label={post.title} aspect="1/1" />
                      )}
                    </Reveal>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── BRANDING CARDS ── */}
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
                    <BrandingCard key={project.slug} project={project} index={i} />
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}

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