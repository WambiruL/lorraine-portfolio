"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ImgSlot, SeriesCard } from "@/components/shared/SeriesLightbox";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const ACCENT = "#C15B44";
const ACCENT_LIGHT = "rgba(193,91,68,0.85)";
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

const brandProjects = [
  {
    slug: "uganda-elections",
    title: "Uganda Elections 2026",
    subtitle: "Visual identity for broadcast, promo & social",
    src: "/images/projects/vjb/uganda/cover.png",
  },
  {
    slug: "wafcon",
    title: "WAFCON 2024",
    subtitle: "Visual identity for broadcast, promo & social",
    src: "/images/projects/vjb/wafcon/cover.png",
  },
];

export default function BBCNewsAfricaPage() {
  return (
    <main style={{ background: "#180d0a", color: "var(--cream)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end pb-24 pt-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #22120d 0%, #180d0a 55%, #120a07 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(5rem, 16vw, 16rem)",
            fontWeight: 700, color: "transparent", WebkitTextStroke: `1px ${ACCENT}0a`,
            userSelect: "none", whiteSpace: "nowrap", letterSpacing: "-0.02em",
          }}>
            BBC NEWS AFRICA
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-10"
              style={{ border: `1px solid ${ACCENT}40`, fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              BBC News Africa · Editorial & Brand Identity
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--cream)", maxWidth: "820px" }}>
              BBC News Africa,{" "}
              <em style={{ color: ACCENT_LIGHT }}>editorial graphics and brand identity for a continent-wide newsroom.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ borderTop: `1px solid ${ACCENT}18` }}>
              {[
                { label: "Client", value: "BBC News Africa" },
                { label: "Type", value: "Editorial · Brand Identity" },
                { label: "Focus", value: "Politics · Conflict · Culture" },
                { label: "Scope", value: "Graphics, Broadcast & Social" },
              ].map((m) => (
                <div key={m.label}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(228,230,195,0.3)", marginBottom: "8px" }}>{m.label}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--cream)" }}>{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-32">

        {/* ── OVERVIEW ── */}
        <Reveal>
          <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: ACCENT }}>
            The Brief
          </p>
          <h2 className="mb-10" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
            A contract graphic design role{" "}
            <em style={{ color: ACCENT_LIGHT }}>inside BBC News Africa.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div
            className="relative overflow-hidden mb-6 p-10 lg:p-14"
            style={{ background: "linear-gradient(135deg, #22120d 0%, #180d0a 100%)", border: `1px solid ${ACCENT}20` }}
          >
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.8vw, 1.3rem)", fontWeight: 300, lineHeight: 1.75, color: "rgba(242,242,242,0.75)" }}>
              Editorial graphics and campaign identities produced for BBC News Africa's Hausa, English,
              and pan-African desks, covering elections, conflict, health, and culture, alongside full
              broadcast identities for major sporting and civic events.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "rgba(228,230,195,0.3)" }}>
            Series marked <span style={{ color: ACCENT }}>N SLIDES</span> open in full, click any card to browse the set.
          </p>
        </Reveal>

        <div className="my-28" style={{ height: "1px", background: `${ACCENT}12` }} />

        {/* ── EDITORIAL GRAPHICS ── */}
        <Reveal>
          <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: ACCENT }}>
            Editorial Graphics
          </p>
          <h3 className="mb-6 max-w-2xl" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontWeight: 300, lineHeight: 1.3, color: "var(--cream)" }}>
            Stories told across single posts and carousels.
          </h3>
          <p className="mb-10 max-w-2xl" style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(242,242,242,0.45)" }}>
            News explainers, cultural observances, and breaking coverage, designed for fast-scrolling
            social feeds without losing editorial nuance.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {storyPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.02}>
              {post.type === "single" ? (
                <ImgSlot src={post.src} label={post.title} aspect="1/1" accent={ACCENT} />
              ) : (
                <SeriesCard images={post.images} label={post.title} aspect="1/1" accent={ACCENT} />
              )}
            </Reveal>
          ))}
        </div>

        <div className="my-28" style={{ height: "1px", background: `${ACCENT}12` }} />

        {/* ── BRAND IDENTITY ── */}
        <Reveal>
          <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: ACCENT }}>
            Brand Identity
          </p>
          <h3 className="mb-6 max-w-2xl" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontWeight: 300, lineHeight: 1.3, color: "var(--cream)" }}>
            Full visual systems for two major events.
          </h3>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {brandProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                href={`/projects/visual-journalism-branding/${project.slug}`}
                className="group relative block overflow-hidden"
                style={{ aspectRatio: "4/3", border: `1px solid ${ACCENT}20` }}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(24,13,10,0.92) 0%, rgba(24,13,10,0.2) 60%)" }} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 300, color: "var(--cream)", marginBottom: "6px" }}>
                    {project.title}
                  </h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(242,242,242,0.5)", marginBottom: "14px" }}>
                    {project.subtitle}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 self-start"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: ACCENT }}
                  >
                    Click to view identity
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>

      {/* ══ BACK ══ */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">
        <Link
          href="/projects/visual-journalism-branding"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(228,230,195,0.3)", transition: "color 0.3s" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--cream)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(228,230,195,0.3)")}
        >
          ← Back to Visual Work
        </Link>
      </div>

    </main>
  );
}
