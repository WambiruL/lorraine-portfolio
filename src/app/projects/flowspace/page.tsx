"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-5"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.6rem",
        letterSpacing: "0.35em",
        textTransform: "uppercase" as const,
        color: "var(--moss)",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div
      className="my-28 w-full"
      style={{ height: "1px", background: "rgba(213,137,54,0.12)" }}
    />
  );
}

// Flowspace accent colours
const FS_AMBER = "#f2f3ae";
const FS_AMBER_LIGHT = "rgba(213,137,54,0.8)";
const FS_BORDER = "#69140E";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FlowspacePage() {
  const heroRef = useRef<HTMLDivElement>(null); 
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main style={{ background: "var(--ink)", color: "var(--cream)", minHeight: "100vh" }}>

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

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end pb-24 pt-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #3C1518 0%, #121113 60%, #1e0b0d 100%)" }}
      >
        {/* Ghost wordmark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(8rem, 22vw, 22rem)",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "rgba(149,213,178,0.04)",
                lineHeight: 1,
              }}
            >
              FLOWSPACE
            </motion.span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
          {/* Category pill */}
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 mb-10"
              style={{
                border: `1px solid ${FS_AMBER}40`,
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: FS_AMBER,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: FS_AMBER }}
              />
              UX / UI Design · Productivity · AI
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
              Productivity that works{" "}
              <em style={{ color: FS_AMBER_LIGHT }}>with your mind,</em>{" "}
              not against it.
            </h1>
          </Reveal>

          {/* Metadata strip */}
          <Reveal delay={0.2}>
            <div
              className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
              style={{ borderTop: `1px solid ${FS_AMBER}18` }}
            >
              {[
                { label: "Role", value: "Lead Designer" },
                { label: "Type", value: "Mobile Application" },
                { label: "Year", value: "2026" },
                { label: "Tools", value: "Figma · Nunito · Warm System" },
              ].map((m) => (
                <div key={m.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase" as const,
                      color: "rgba(228,230,195,0.3)",
                      marginBottom: "8px",
                    }}
                  >
                    {m.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "var(--cream)",
                    }}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-32">

        {/* ── OVERVIEW ── */}
        <Reveal>
          <SectionLabel>Overview</SectionLabel>
        </Reveal>

        {/* Stats bar */}
        <Reveal delay={0.05}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px mb-24"
            style={{ border: `1px solid ${FS_AMBER}18`, background: `${FS_AMBER}12` }}
          >
            {[
              { value: "6", label: "Core screens" },
              { value: "5", label: "Inner Council voices" },
              { value: "1", label: "Unified workspace" },
              { value: "Offline", label: "First architecture" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col justify-center p-8"
                style={{ background: "var(--ink)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 300,
                    color: FS_AMBER,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "rgba(228,230,195,0.4)",
                    lineHeight: 1.5,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Overview body */}
        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: "var(--cream)",
                  marginBottom: "24px",
                }}
              >
                Your tools manage tasks.{" "}
                <em style={{ color: FS_AMBER_LIGHT }}>
                  Flowspace manages you.
                </em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "rgba(228,230,195,0.6)",
                }}
              >
                Flowspace is an integrated productivity environment where tasks,
                reflections, and ideas live in one unified workspace and where
                the app adapts to your mental state rather than demanding you
                perform at a fixed capacity every day.
              </p>
            </div>
            <div
              className="p-8"
              style={{
                border: `1px solid ${FS_AMBER}20`,
                background: `${FS_AMBER}05`,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: FS_AMBER,
                  marginBottom: "16px",
                }}
              >
                The core insight
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "var(--cream)",
                }}
              >
                Most productivity tools ignore the user's mental state entirely.
                Flowspace makes energy the primary input, not an afterthought.
              </p>
            </div>
          </div>
        </Reveal>

        <Divider />

        {/* ── THE PROBLEM ── */}
        <Reveal>
          <SectionLabel>The Problem</SectionLabel>
          <h2
            className="mb-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "var(--cream)",
            }}
          >
            Productive tools,{" "}
            <em style={{ color: FS_AMBER_LIGHT }}>unproductive experience.</em>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              number: "01",
              title: "The mental state gap",
              body: "Every productivity tool assumes you show up the same every day. They don't account for exhaustion, anxiety, or low focus, so on hard days, the tool becomes another source of pressure rather than support.",
            },
            {
              number: "02",
              title: "Scattered thinking",
              body: "Ideas live in notes apps. Tasks live in To-do-lists. Reflections live in a journal. Decisions get made in your head at 2am. The fragmentation creates cognitive overhead that defeats the purpose of being organised.",
            },
            {
              number: "03",
              title: "Generic advice at critical moments",
              body: "When users face real dilemmas, a career decision, a creative block, a conflict, productivity apps offer nothing. The tools that are supposed to support your thinking abandon you exactly when you need them most.",
            },
          ].map((p) => (
            <Reveal key={p.number} delay={0.05}>
              <div
                className="p-8 h-full"
                style={{
                  border: `1px solid ${FS_AMBER}15`,
                  background: `${FS_AMBER}03`,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    color: FS_AMBER,
                    marginBottom: "16px",
                  }}
                >
                  {p.number}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "var(--cream)",
                    marginBottom: "12px",
                  }}
                >
                  {p.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.85,
                    color: "rgba(228,230,195,0.5)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Divider />

        {/* ── PROCESS ── */}
        <Reveal>
          <SectionLabel>Design Process</SectionLabel>
          <h2
            className="mb-20"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "var(--cream)",
            }}
          >
            Designing for energy,{" "}
            <em style={{ color: FS_AMBER_LIGHT }}>not just output.</em>
          </h2>
        </Reveal>

        {[
          {
            number: "01",
            title: "Discover",
            body: "I spoke to people who considered themselves \"organised\" but still felt overwhelmed. The recurring theme: the tools worked, but the people using them didn't always. Energy fluctuated. Motivation dipped. The todo list stayed the same whether you slept four hours or eight.",
          },
          {
            number: "02",
            title: "Define",
            body: "The design challenge reframed itself: don't build a better task manager, build an environment that responds to the human using it. The primary input became energy level, not just due date. Everything else flowed from that decision.",
          },
          {
            number: "03",
            title: "Ideate",
            body: "The Inner Council concept emerged from asking: what if the app could think about your situation the way a wise friend would? Not a chatbot with generic prompts, but five distinct perspectives, each with a different lens, drawing from your actual logged patterns, mood, and energy to give genuinely contextual responses.",
          },
          {
            number: "04",
            title: "Prototype",
            body: "The warm burgundy and amber palette was a deliberate departure from productivity app convention (blue, white, minimal). Flowspace needed to feel like a private space, warm, considered, slightly intimate. The colour system reinforced the emotional purpose of the product.",
          },
          {
            number: "05",
            title: "Validate",
            body: "Testing surfaced one critical insight: users trusted the energy-based task suggestions immediately, but needed to understand *why* a task was recommended. Adding the energy cost indicator per task, visible before you commit, resolved the hesitation and made the system feel transparent rather than prescriptive.",
          },
        ].map((stage) => (
          <Reveal key={stage.number} delay={0.05}>
            <div
              className="grid lg:grid-cols-[180px_1fr] gap-8 lg:gap-16 py-10"
              style={{ borderTop: `1px solid ${FS_AMBER}08` }}
            >
              <div className="flex items-start gap-4">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    color: FS_AMBER,
                    paddingTop: "4px",
                  }}
                >
                  {stage.number}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--cream)",
                  }}
                >
                  {stage.title}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "rgba(228,230,195,0.55)",
                  maxWidth: "680px",
                }}
              >
                {stage.body}
              </p>
            </div>
          </Reveal>
        ))}

        <Divider />

        {/* ── KEY DECISION ── */}
        <Reveal>
          <div
            className="p-10 lg:p-16 mb-28"
            style={{
              borderLeft: `3px solid ${FS_AMBER}`,
              background: `${FS_AMBER}04`,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: FS_AMBER,
                marginBottom: "20px",
              }}
            >
              Key Design Decision
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                fontWeight: 300,
                lineHeight: 1.4,
                color: "var(--cream)",
                maxWidth: "780px",
              }}
            >
              The Inner Council isn't a chatbot. It's five distinct
              perspectives, each with a name, a voice, and a point of view,
              that draw from your actual logged life to speak with context. That
              distinction changed everything about how users engaged with it."
            </p>
          </div>
        </Reveal>

        {/* ── SCREENS ── */}
        <Reveal>
          <SectionLabel>Selected Screens</SectionLabel>
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "var(--cream)",
            }}
          >
            Six screens.{" "}
            <em style={{ color: FS_AMBER_LIGHT }}>One unified system.</em>
          </h2>

          {/* Behance + app placeholder */}
          <div className="flex items-center gap-5 flex-wrap mb-20">
            
            <a  href="https://www.behance.net/gallery/245239735/FlowSpace-Productivity-tool"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center gap-3 px-7 py-3.5 transition-colors duration-500"
              style={{
                border: `1px solid ${FS_AMBER}50`,
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                color: FS_AMBER,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = FS_AMBER)}
            >
              <span className="relative z-10">View on Behance</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12L12 4M12 4H6M12 4v6"/>
                </svg>              
                <span
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                style={{ background: FS_AMBER, transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              />
            </a>

          <a  href="https://flow-space-pro.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-3 px-7 py-3.5 transition-colors duration-500"
                style={{
                    border: `1px solid ${FS_AMBER}50`,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase" as const,
                    color: FS_AMBER,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = FS_AMBER)}
                >
                <span className="relative z-10">Try the App</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12L12 4M12 4H6M12 4v6"/>
                </svg>                <span
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    style={{ background: FS_AMBER, transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                />
                </a>
          </div>
        </Reveal>

        {[
          {
            src: "/images/projects/flowspace/1.png",
            label: "01 — Dashboard",
            caption: "The day starts with two questions: how's your energy, and what's your mood? Flowspace uses those inputs to surface the right tasks from your active projects, not everything on your list, just what you can realistically tackle today. Active projects and a focused task list sit below, shaped by what you told the app you have capacity for.",
          },
          {
            src: "/images/projects/flowspace/2.png",
            label: "02 — Projects",
            caption: "All your projects in one view, filterable by status, All, Active, Paused, Completed. Projects are categorised as Career, Personal, Creative, or Learning, giving you a picture of where your effort is actually going across life areas, not just work.",
          },
          {
            src: "/images/projects/flowspace/3.png",
            label: "03 — Tasks",
            caption: "Tasks show their energy cost before you commit. Overdue items surface clearly without shame, just clarity. The app also suggests tasks based on your logged energy for the day, so when you're running low, it steers you toward lighter work rather than letting you stall on something that needs your full capacity.",
          },
          {
            src: "/images/projects/flowspace/4.png",
            label: "04 — Inner Council",
            caption: "Five inner voices. One clearer path. The Council isn't a generic AI assistant, each voice brings a distinct perspective to your dilemma, drawing from your energy, mood patterns, and recent logs. You come with a real question. You leave with a real answer. This was the feature users described as 'unlike anything else they'd used.'",
          },
          {
            src: "/images/projects/flowspace/5.png",
            label: "05 — Mood & Focus",
            caption: "A daily check-in for mood, focus level, and energy, paired with a free-form journal entry. The 7-day and 30-day graphs turn your logs into visible patterns, helping you notice when your energy dips weekly, or see the correlation between your focus and your sleep. Reflection becomes data without losing its humanity.",
          },
          {
            src: "/images/projects/flowspace/6.png",
            label: "06 — Brain Dump",
            caption: "Capture anything, a project idea, a worry, a half-formed thought, without needing to organise it immediately. The Brain Dump is a pressure valve. When you're ready, you can convert any entry directly into a project or a task. Nothing is lost, nothing is forced into a system before it's ready.",
          },
        ].map((screen) => (
          <Reveal key={screen.label} delay={0.05} className="mb-28">
            <div
              className="w-full overflow-hidden mb-8"
              style={{ border: `1px solid ${FS_AMBER}12` }}
            >
              <img
                src={screen.src}
                alt={screen.label}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: FS_AMBER,
                  paddingTop: "4px",
                }}
              >
                {screen.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(228,230,195,0.5)",
                  maxWidth: "580px",
                }}
              >
                {screen.caption}
              </p>
            </div>
          </Reveal>
        ))}

        <Divider />

        {/* ── DESIGN SYSTEM ── */}
        <Reveal>
          <SectionLabel>Design System</SectionLabel>
          <h2
            className="mb-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "var(--cream)",
            }}
          >
            Warm by design.{" "}
            <em style={{ color: FS_AMBER_LIGHT }}>Intentionally intimate.</em>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Colours */}
          <Reveal delay={0}>
            <div className="p-8 h-full" style={{ border: `1px solid ${FS_AMBER}15` }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: FS_AMBER, marginBottom: "20px" }}>
                Colour Palette
              </p>
              {[
                { hex: "#3C1518", name: "Deep Wine" },
                { hex: "#69140E", name: "Border Red" },
                { hex: "#A44200", name: "Burnt Orange" },
                { hex: "#D58936", name: "Amber" },
                { hex: "#F2F3AE", name: "Pale Cream" },
              ].map((c) => (
                <div key={c.hex} className="flex items-center gap-4 mb-4">
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0"
                    style={{ background: c.hex, border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                  <div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--cream)" }}>{c.hex}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(228,230,195,0.4)" }}>{c.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Typography */}
          <Reveal delay={0.05}>
            <div className="p-8 h-full" style={{ border: `1px solid ${FS_AMBER}15` }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: FS_AMBER, marginBottom: "20px" }}>
                Typography
              </p>
              <p style={{ fontSize: "3rem", fontWeight: 700, color: "var(--cream)", lineHeight: 1, marginBottom: "12px", letterSpacing: "-0.01em" }}>
                Nunito
              </p>
              <div className="flex gap-3 flex-wrap mb-5">
                {["Light", "Regular", "SemiBold", "Bold"].map((w) => (
                  <span key={w} style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(228,230,195,0.4)", textTransform: "uppercase" as const }}>
                    {w}
                  </span>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(228,230,195,0.4)" }}>
                Nunito's rounded terminals soften the interface and reduce cognitive tension, a deliberate choice for an app dealing with mental state and reflection.
              </p>
            </div>
          </Reveal>

          {/* Components */}
          <Reveal delay={0.1}>
            <div className="p-8 h-full" style={{ border: `1px solid ${FS_AMBER}15` }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: FS_AMBER, marginBottom: "20px" }}>
                Key Components
              </p>
              {[
                "Energy level selector",
                "Mood & focus check-in",
                "Energy cost task badges",
                "Inner Council voice cards",
                "Project category pills",
                "7-day & 30-day mood graphs",
                "Brain dump capture input",
                "Offline sync indicator",
              ].map((c) => (
                <div key={c} className="flex items-start gap-3 mb-4">
                  <span style={{ color: FS_AMBER, fontSize: "0.6rem", paddingTop: "5px" }}>→</span>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(228,230,195,0.5)", lineHeight: 1.5 }}>{c}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Divider />

        {/* ── OUTCOME ── */}
        <Reveal>
          <SectionLabel>Outcome & Reflection</SectionLabel>
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "var(--cream)",
            }}
          >
            What this taught me about{" "}
            <em style={{ color: FS_AMBER_LIGHT }}>designing for the whole person.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "rgba(228,230,195,0.6)",
              maxWidth: "780px",
            }}
          >
            Flowspace pushed me to think about design beyond the screen. The hardest
            problems weren't visual, they were conceptual. How do you represent
            energy without it feeling clinical? How do you make five AI voices feel
            distinct without making the interface feel cluttered? How do you design
            a Brain Dump that feels genuinely pressure-free?
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "rgba(228,230,195,0.6)",
              maxWidth: "780px",
            }}
          >
            The offline-first architecture was also a design decision, not just a
            technical one. It sent a message: this app is yours, even when you have
            no signal. Your data, your reflections, your Inner Council, all
            available regardless of connectivity. For an app about mental
            wellbeing and focus, that reliability felt essential.
          </p>
        </Reveal>

      </div>

      {/* ══ NEXT PROJECT ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--forest)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
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
            Visual Design
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

          <Link href="/projects/visual-journalism-branding" className="group block">
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
              Visual Design
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
              Graphic Design & Branding
            </p>
          </Link>

          <Link
            href="/projects/visual-journalism-branding"
            className="group inline-flex items-center gap-3 mt-14"
            style={{ color: "rgba(228,230,195,0.3)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(228,230,195,0.3)")}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
              }}
            >
              View Case Study
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-2 inline-block">→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}