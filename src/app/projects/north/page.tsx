"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="h-px w-8 flex-shrink-0" style={{ background: "rgba(137,152,120,0.4)" }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: ACCENT }}>
        {children}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="w-full h-px my-28" style={{ background: "linear-gradient(to right, transparent, rgba(212,146,47,0.15), transparent)" }} />
  );
}

const ACCENT = "#D4922F";
const ACCENT_LIGHT = "rgba(212,146,47,0.85)";
const N = "/images/projects/north";

const process = [
  { num: "01", title: "Discover", body: "Mapped my own scattered setup, six apps for notes, tasks, money, career, hobbies, and none of them talking to each other." },
  { num: "02", title: "Define", body: "One system, organised as rooms rather than tabs. Each area of life gets its own rules, built from a shared kit." },
  { num: "03", title: "Ideate", body: "Tested a folder-and-tag structure first. Dropped it. Retrieval by recency and pinning matched how people actually think back on a day." },
  { num: "04", title: "Prototype", body: "Built the full shell in Figma: sign-up, home, a daily check-in, and seven rooms, notes, lists, career, learning, finances, work, hobbies." },
  { num: "05", title: "Validate", body: "Walked the corridor in order to confirm the arrangement itself made the case: each room recognisable in under two seconds." },
];

const flagship = [
  { src: `${N}/home.png`, label: "01 — Home", caption: "One evening greeting, two things that moved forward today, three cards worth acting on. Nothing else competes for attention." },
  { src: `${N}/sign-up.png`, label: "02 — Sign Up", caption: "Three fields, each one explained. A system holding finances and a private journal has to earn trust before it earns data." },
  { src: `${N}/check-in.png`, label: "03 — Daily Check-In", caption: "The single habit the whole system is built around. Everything else is easier to keep up once this one sticks." },
  { src: `${N}/room-notes.png`, label: "04 — Notes", caption: "Shaped like a journal page: a date, a note, an optional pin. No folders, no tags, nothing to file." },
  { src: `${N}/room-career.png`, label: "05 — Career", caption: "A path diagram instead of a résumé, milestones behind, opportunities ahead, gaps drawn honestly as gaps." },
  { src: `${N}/studio-home.png`, label: "06 — Studio", caption: "The one room with no status field. Moodboards, sketches and dead ends live together, on purpose." },
  { src: `${N}/settings.png`, label: "07 — Settings", caption: "Plain-language controls for a system that touches money, career and private writing, nothing buried." },
];

export default function NorthPage() {
  return (
    <main style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>

      {/* Back link */}
      <div className="fixed top-8 left-8 lg:left-16 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 transition-colors duration-300"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(228,230,195,0.4)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(228,230,195,0.4)")}
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1 inline-block">←</span>
          Back to portfolio
        </Link>
      </div>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col justify-end pb-24 pt-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2b1d0a 0%, #121113 55%, #1f1608 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(6rem, 18vw, 18rem)", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(212,146,47,0.05)", lineHeight: 1 }}>
            NORTH
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 mb-10"
              style={{ border: `1px solid ${ACCENT}40`, fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
              UX / UI Design · Personal Software
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 6rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--cream)", maxWidth: "820px" }}>
              One system for a life{" "}
              <em style={{ color: ACCENT_LIGHT }}>that used to live in six apps.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ borderTop: `1px solid ${ACCENT}20` }}>
              {[
                { label: "Role", value: "Product & UX Designer" },
                { label: "Type", value: "Responsive Web App" },
                { label: "Year", value: "2026" },
                { label: "Tools", value: "Figma · Cormorant" },
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

      {/* ══ OVERVIEW ══ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16 pt-36 pb-0">
        <Reveal>
          <SectionLabel>Overview</SectionLabel>
          <h2 className="mb-12" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, lineHeight: 1.25, color: "var(--cream)", maxWidth: "800px" }}>
            A personal operating system holding notes, career, money and creative work{" "}
            <em>in one calm place.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(228,230,195,0.55)", maxWidth: "660px" }}>
            I designed North to replace six apps I used to keep separate, notes, tasks,
            career planning, finances, hobbies and a creative studio, with one system built
            around a daily check-in and seven distinct rooms.
          </p>
        </Reveal>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ THE PROBLEM ══ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-28 items-start">
          <Reveal>
            <SectionLabel>The Problem</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)", marginBottom: "28px" }}>
              Scattered tools make a scattered <em style={{ color: ACCENT_LIGHT }}>sense of self.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(228,230,195,0.5)" }}>
              Notes apps, planners, budgeting tools and journals each hold a slice of a life,
              but none of them show the whole picture, or make it easy to check in on it daily.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 lg:mt-16">
            <div className="p-10" style={{ background: "rgba(212,146,47,0.06)", borderLeft: `2px solid ${ACCENT}55` }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT, marginBottom: "20px" }}>
                The Challenge
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Six separate apps for one life, none of them talking to each other",
                  "No daily habit tying career, money and wellbeing together",
                  "Folders and tags that ask for upkeep instead of offering clarity",
                  "Progress that disappears the moment a tab is closed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4" style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.7, color: "rgba(228,230,195,0.6)", marginBottom: "14px" }}>
                    <span style={{ color: ACCENT, flexShrink: 0, marginTop: "3px" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ PROCESS ══ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <Reveal>
          <SectionLabel>Process</SectionLabel>
          <h2 className="mb-20" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
            Five stages. One through-line:{" "}
            <em style={{ color: ACCENT_LIGHT }}>rooms, not tabs.</em>
          </h2>
        </Reveal>

        <div>
          {process.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.07}>
              <div className="grid lg:grid-cols-[140px_1fr] gap-8 py-12" style={{ borderTop: "1px solid rgba(137,152,120,0.1)" }}>
                <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-3">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", color: ACCENT }}>{step.num}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 300, color: "var(--cream)" }}>{step.title}</h3>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85, color: "rgba(228,230,195,0.5)", maxWidth: "600px", alignSelf: "center" }}>
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ KEY DESIGN DECISION ══ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <Reveal>
          <SectionLabel>Key Design Decision</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="p-12 lg:p-16 mt-2" style={{ background: "rgba(212,146,47,0.06)", borderLeft: `3px solid ${ACCENT}60` }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2.1rem)", fontWeight: 300, lineHeight: 1.6, color: "var(--cream)" }}>
              Building every room from the same kit, so career, finances and hobbies each
              feel distinct without the interface{" "}
              <em style={{ color: ACCENT_LIGHT }}>starting over each time.</em>
            </p>
          </div>
        </Reveal>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ SELECTED SCREENS ══ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <Reveal>
          <SectionLabel>Selected Screens</SectionLabel>
          <h2 className="mb-20" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
            End-to-end design —{" "}
            <em style={{ color: ACCENT_LIGHT }}>from sign-up to the studio.</em>
          </h2>
        </Reveal>

        {flagship.map((screen, i) => (
          <Reveal key={i} delay={0.05} className="mb-32">
            <div className="w-full overflow-hidden mb-8" style={{ border: `1px solid ${ACCENT}20` }}>
              <img src={screen.src} alt={screen.label} className="w-full h-auto object-cover" />
            </div>
            <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT, paddingTop: "4px" }}>
                {screen.label}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "rgba(228,230,195,0.5)", maxWidth: "580px" }}>
                {screen.caption}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ DESIGN SYSTEM ══ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <Reveal>
          <SectionLabel>Design System</SectionLabel>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            <Reveal delay={0}>
              <div className="p-8 h-full" style={{ border: `1px solid ${ACCENT}20` }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT, marginBottom: "20px" }}>
                  Colour Palette
                </p>
                {[
                  { hex: "#001524", name: "Midnight" },
                  { hex: "#15616D", name: "Deep Teal" },
                  { hex: "#FF7D00", name: "Signal Orange" },
                  { hex: "#FFECD1", name: "Warm Paper" },
                ].map((c) => (
                  <div key={c.hex} className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: c.hex, border: "1px solid rgba(255,255,255,0.1)" }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--cream)" }}>{c.hex}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(228,230,195,0.4)" }}>{c.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="p-8 h-full" style={{ border: `1px solid ${ACCENT}20` }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT, marginBottom: "20px" }}>
                  Typography
                </p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, color: "var(--cream)", lineHeight: 1, marginBottom: "12px", letterSpacing: "-0.02em" }}>
                  Cormorant
                </p>
                <div className="flex gap-3 flex-wrap mb-5">
                  {["Medium", "Semibold", "Bold", "Italic"].map((w) => (
                    <span key={w} style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(228,230,195,0.4)", textTransform: "uppercase" as const }}>
                      {w}
                    </span>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(228,230,195,0.4)" }}>
                  A serif display paired with Work Sans, giving the system an editorial,
                  unhurried voice.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="p-8 h-full" style={{ border: `1px solid ${ACCENT}20` }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT, marginBottom: "20px" }}>
                  Key Components
                </p>
                {[
                  "Daily check-in card",
                  "Room navigation rail",
                  "Journal-style note entry",
                  "Career path diagram",
                  "Studio slide viewer",
                  "Ledger-style finance summary",
                ].map((c) => (
                  <div key={c} className="flex items-start gap-3 mb-4">
                    <span style={{ color: ACCENT, fontSize: "0.6rem", paddingTop: "5px" }}>→</span>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(228,230,195,0.5)", lineHeight: 1.5 }}>{c}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ OUTCOME ══ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <Reveal>
          <SectionLabel>Outcome & Reflection</SectionLabel>
          <p className="mb-10" style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(228,230,195,0.55)", maxWidth: "700px" }}>
            North shows how I approach information architecture at scale, seven distinct
            life areas, one shared visual kit, and a daily habit tying it all together.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(228,230,195,0.3)", maxWidth: "700px" }}>
            Next: syncing the Studio room with real file storage, and a lighter mobile
            shell for the daily check-in specifically, the one screen worth opening in
            under five seconds.
          </p>
        </Reveal>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ NEXT PROJECT ══ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--forest)" }}>
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden>
          <span
            style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(6rem, 18vw, 18rem)", fontWeight: 300, fontStyle: "italic",
              color: "rgba(137,152,120,0.04)", lineHeight: 1, position: "absolute", bottom: "-0.1em", right: "-0.05em", whiteSpace: "nowrap",
            }}
          >
            Visual Work
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-28 lg:py-40">
          <p className="mb-8" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>
            Next Project
          </p>

          <Link href="/projects/visual-journalism-branding" className="group block">
            <h2 className="mb-4 transition-colors duration-300 group-hover:text-moss" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 300, lineHeight: 0.95, color: "var(--cream)" }}>
              Visual Work
            </h2>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2.5rem)", fontWeight: 300, fontStyle: "italic", color: "rgba(228,230,195,0.4)" }}>
              Graphic Design & Brand Identity
            </p>
          </Link>

          <Link
            href="/projects/visual-journalism-branding"
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
