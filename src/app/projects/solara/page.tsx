"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase" as const,
          color: "var(--moss)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="w-full h-px my-28"
      style={{
        background: "linear-gradient(to right, transparent, rgba(137,152,120,0.15), transparent)",
      }}
    />
  );
}

const stats = [
  { value: "73%",     label: "Of students experience mental health crises" },
  { value: "2–3wks",  label: "Average campus counselling wait time" },
  { value: "5",       label: "Core screens designed end-to-end" },
  { value: "4-stage", label: "User journey mapped end-to-end" },
];

const process = [
  {
    num: "01",
    title: "Discover",
    body: "Audited existing mental health apps and campus counselling systems. Mapped the core insight: students face a 2–3 week wait for support at the exact moment they need it most.",
  },
  {
    num: "02",
    title: "Define",
    body: "Three needs emerged, a low-barrier entry point, a private space to process emotions, and personalised guidance that improves over time.",
  },
  {
    num: "03",
    title: "Ideate",
    body: "Explored 20+ directions before converging on three pillars: Private Journaling, AI Chat Companion, and Mood Insights, a complete support loop, not isolated features.",
  },
  {
    num: "04",
    title: "Prototype",
    body: "Built high-fidelity screens in Figma covering every core flow, onboarding, dashboard, journal, AI chat, insights, and therapist resources, plus a full component library.",
  },
  {
    num: "05",
    title: "Validate",
    body: "Stress-tested the IA through walkthroughs, refining onboarding so users understand Solara's value within three screens before committing to sign-up.",
  },
];

export default function SolaraPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale   = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>

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

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section 
      ref={heroRef} 
      className="relative min h-screen flex flex-col justify-end pb-24 pt-40 overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #1B4332 0%, #121113 55%, #0d1f17 100%)" }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
            aria-hidden
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(8rem, 22vw, 22rem)",
                fontWeight: 300,
                letterSpacing: "0.15em",
                color: "rgba(149,213,178,0.04)",
                lineHeight: 1,
              }}
            >
              SOLARA
            </span>
          </div>
        </motion.div>

        <div
          className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, #121113 0%, transparent 100%)" }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 w-full max-w-6xl mx-auto px-8 lg:px-16 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-10"
            style={{
              background: "rgba(27,67,50,0.7)",
              border: "1px solid rgba(149,213,178,0.2)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: "#95D5B2",
              }}
            >
              UX/UI Case Study
            </span>
          </motion.div>

          {/* <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4rem, 9vw, 8rem)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--cream)",
              }}
            >
              Solara
            </motion.h1>
          </div> */}

          <Reveal delay={0.1}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 6rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--sage)",
                maxWidth: "820px",
              }}
            >
              AI - Powered {" "}
              <em style={{ color: "rgba(149,213,178,0.8)" }}>Well-being
              Platform</em> {" "} For Students
            </h1>
          </Reveal>
        </motion.div>

        {/* Metadata strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-[-30px] left-0 right-0 z-30"
          style={{ borderTop: "1px solid rgba(137,152,120,0.12)" }}
        >
          <div
            className="max-w-6xl mx-auto px-8 lg:px-16 grid grid-cols-2 lg:grid-cols-4"
            style={{ backgroundColor: "rgba(18,17,19,0.9)", backdropFilter: "blur(12px)" }}
          >
            {[
              { label: "Role",  value: "Lead Product Designer" },
              { label: "Type",  value: "UX/UI · Mobile App" },
              { label: "Year",  value: "2024" },
              { label: "Tools", value: "Figma · Prototyping" },
            ].map((m, i) => (
              <div
                key={m.label}
                className="py-6 px-2 lg:px-8 first:pl-0"
                style={{ borderRight: i < 3 ? "1px solid rgba(137,152,120,0.1)" : "none" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase" as const,
                    color: "var(--moss)",
                    marginBottom: "8px",
                  }}
                >
                  {m.label}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(228,230,195,0.7)" }}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ OVERVIEW ══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16 pt-36 pb-0">
        <Reveal>
          <SectionLabel>Overview</SectionLabel>
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.25,
              color: "var(--cream)",
              maxWidth: "800px",
            }}
          >
            A mobile app giving students immediate, private access to mental
            health support; no appointment, no waiting room,{" "}
            <em>no barrier.</em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "rgba(228,230,195,0.55)",
              maxWidth: "660px",
            }}
          >
            Campus mental health resources are overwhelmed. I designed Solara,
            a three-pillar system of Private Journaling, AI Chat, and Mood
            Insights, that creates a daily mental health practice rather than a
            crisis-only intervention.
          </p>
        </Reveal>

        {/* Stats bar */}
        {/* <Reveal delay={0.15} className="mt-20">
          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{
              background: "rgba(27,67,50,0.18)",
              border: "1px solid rgba(149,213,178,0.1)",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="p-10"
                style={{ borderRight: i < 3 ? "1px solid rgba(149,213,178,0.08)" : "none" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                    fontWeight: 300,
                    color: "#95D5B2",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    color: "rgba(228,230,195,0.35)",
                    textTransform: "uppercase" as const,
                    lineHeight: 1.6,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal> */}
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ THE PROBLEM ═══════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-28 items-start">
          <Reveal>
            <SectionLabel>The Problem</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "var(--cream)",
                marginBottom: "28px",
              }}
            >
              Students in crisis can't wait{" "}
              <em style={{ color: "rgba(149,213,178,0.8)" }}>two to three weeks</em>{" "}
              for an appointment.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "rgba(228,230,195,0.5)",
              }}
            >
              Campus counselling is stretched beyond capacity. Most existing
              mental health apps feel clinical and cold, designed for adults
              with disposable income, not students in a difficult moment between
              lectures.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 lg:mt-16">
            <div
              className="p-10"
              style={{
                background: "rgba(27,67,50,0.15)",
                borderLeft: "2px solid rgba(149,213,178,0.35)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: "#95D5B2",
                  marginBottom: "20px",
                }}
              >
                The Challenge
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "73% of college students experience mental health crises",
                  "Average counselling wait time is 2–3 weeks",
                  "Stigma prevents most students from seeking help",
                  "Existing apps aren't designed for the student context",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "rgba(228,230,195,0.6)",
                      marginBottom: "14px",
                    }}
                  >
                    <span style={{ color: "#95D5B2", flexShrink: 0, marginTop: "3px" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ PROCESS ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <Reveal>
          <SectionLabel>Process</SectionLabel>
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
            Five stages. One through-line:{" "}
            <em style={{ color: "rgba(149,213,178,0.8)" }}>
              lower the barrier to help.
            </em>
          </h2>
        </Reveal>

        <div>
          {process.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.07}>
              <div
                className="grid lg:grid-cols-[140px_1fr] gap-8 py-12"
                style={{ borderTop: "1px solid rgba(137,152,120,0.1)" }}
              >
                <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-3">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.25em",
                      color: "var(--moss)",
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontWeight: 300,
                      color: "var(--cream)",
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.05rem",
                    lineHeight: 1.85,
                    color: "rgba(228,230,195,0.5)",
                    maxWidth: "600px",
                    alignSelf: "center",
                  }}
                >
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ KEY DESIGN DECISION ═══════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <Reveal>
          <SectionLabel>Key Design Decision</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="p-12 lg:p-16 mt-2"
            style={{
              background: "rgba(27,67,50,0.15)",
              borderLeft: "3px solid rgba(149,213,178,0.5)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 2.5vw, 2.1rem)",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "var(--cream)",
              }}
            >
              Placing the mood check-in on the dashboard, the first screen
              students see daily, rather than burying it in an insights tab.
              This turns Solara from a crisis tool into{" "}
              <em style={{ color: "rgba(149,213,178,0.9)" }}>
                a daily habit that prevents the crisis.
              </em>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <SectionLabel>My Approach</SectionLabel>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "rgba(228,230,195,0.55)",
              maxWidth: "700px",
            }}
          >
            Three truths shaped every decision. The AI Chat had to feel warm,
            conversation starters like "I am feeling stressed about..." lower the
            activation energy for opening up. The Journal needed AI that assists
            without intruding, Solara only offers reflection after you've
            finished writing. And Insights needed to show narrative, not just
            data, "You feel calmer after morning walks" is more motivating than
            any graph.
          </p>
        </Reveal>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ SCREENS ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
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
    End-to-end design —{" "}
    <em style={{ color: "rgba(149,213,178,0.8)" }}>from splash to insights.</em>
  </h2>

  {/* Action buttons */}
  <div className="flex items-center gap-5 flex-wrap mb-20">
    
     <a href="https://www.behance.net/gallery/208762161/Solara-AI-An-AI-powered-Mental-health-Therapist"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden flex items-center gap-3 px-7 py-3.5 transition-colors duration-500"
      style={{
        border: "1px solid rgba(149,213,178,0.3)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.6rem",
        letterSpacing: "0.25em",
        textTransform: "uppercase" as const,
        color: "#95D5B2",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#95D5B2")}
    >
      <span className="relative z-10">View on Behance</span>

        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 12L12 4M12 4H6M12 4v6"/>
        </svg>        
        <span
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        style={{
          background: "#95D5B2",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </a>

    {/* App link — swap href and label when live */}
    <div className="relative group">
      <div
        className="flex items-center gap-3 px-7 py-3.5 cursor-not-allowed"
        style={{
          border: "1px solid rgba(137,152,120,0.12)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase" as const,
          color: "rgba(228,230,195,0.2)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: "rgba(149,213,178,0.3)" }}
        />
        Try the App — Coming Soon
      </div>

      {/* Tooltip on hover */}
      <div
        className="absolute bottom-full left-0 mb-3 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
        style={{
          background: "var(--forest)",
          border: "1px solid rgba(137,152,120,0.15)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.55rem",
          letterSpacing: "0.2em",
          color: "rgba(228,230,195,0.4)",
        }}
      >
        Currently in development — check back soon
      </div>
    </div>
  </div>
</Reveal>

        {[
            {
                src: "/images/projects/solara/3.png",
                label: "01 — Splash & Identity",
                caption: "The launch screen establishes Solara's identity — calm, botanical, deeply green. The open-book logomark communicates reflection and growth before a word is read.",
            },
            {
                src: "/images/projects/solara/15.png",
                label: "02 — Onboarding",
                caption: "Three screens, three value propositions. Students understand what Solara offers before committing to sign-up — reducing drop-off at the most critical moment.",
            },
            {
                src: "/images/projects/solara/13.png",
                label: "03 — Dashboard",
                caption: "The mood check-in is the hero element. Personalised resource cards surface based on your recent journal entries. Everything responds to you.",
            },
            {
            src: "/images/projects/solara/12.png",
            label: "04 — Journal",
            caption: "A private, judgement-free space to write freely. Daily prompts lower the barrier to starting. Every entry is completely private and encrypted — and when you're done, Solara offers to reflect on it with you.",
            },
            {
            src: "/images/projects/solara/4.png",
            label: "05 — AI Chat",
            caption: "Conversation starters lower the barrier to opening up. The AI responds with empathy first, advice second. Chat history becomes a record of growth.",
            },
            {
                src: "/images/projects/solara/11.png",
                label: "06 — Insights",
                caption: "Mood graphs sit alongside written AI observations. Data becomes narrative. Numbers become motivation.",
            },
            {
                src: "/images/projects/solara/10.png",
                label: "07 — Resources",
                caption: "Books, articles, and videos are surfaced based on what you've been writing about. The therapist directory lets users message licensed professionals directly inside the app, removing the friction of finding help outside it.",
            },
            ].map((screen, i) => (
            <Reveal key={i} delay={0.05} className="mb-32">

                {/* Full-width image */}
                <div
                className="w-full overflow-hidden mb-8"
                style={{ border: "1px solid rgba(137,152,120,0.1)" }}
                >
                <img
                    src={screen.src}
                    alt={screen.label}
                    className="w-full h-auto object-cover"
                />
                </div>

                {/* Caption row — label left, text right */}
                <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16">
                <p
                    style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase" as const,
                    color: "var(--moss)",
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

        {/* Design system grid */}
        <Reveal delay={0.05}>
          <SectionLabel>Design System</SectionLabel>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
  {/* Colour Palette */}
  <Reveal delay={0}>
    <div className="p-8 h-full" style={{ border: "1px solid rgba(149,213,178,0.12)" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#95D5B2", marginBottom: "20px" }}>
        Colour Palette
      </p>
      {[
        { hex: "#1B4332", name: "Deep Forest" },
        { hex: "#2D6A4F", name: "Mid Green" },
        { hex: "#95D5B2", name: "Solara Mint" },
        { hex: "#F8F9FA", name: "Off White" },
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

  {/* Typography */}
  <Reveal delay={0.05}>
    <div className="p-8 h-full" style={{ border: "1px solid rgba(149,213,178,0.12)" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#95D5B2", marginBottom: "20px" }}>
        Typography
      </p>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, color: "var(--cream)", lineHeight: 1, marginBottom: "12px", letterSpacing: "-0.02em" }}>
        Nunito
      </p>
      <div className="flex gap-3 flex-wrap mb-5">
        {["Light", "Regular", "Medium", "Bold"].map((w) => (
          <span key={w} style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(228,230,195,0.4)", textTransform: "uppercase" as const }}>
            {w}
          </span>
        ))}
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(228,230,195,0.4)" }}>
        Nunito for display and body, clean and accessible at every size.
      </p>
    </div>
  </Reveal>

  {/* Components */}
  <Reveal delay={0.1}>
    <div className="p-8 h-full" style={{ border: "1px solid rgba(149,213,178,0.12)" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#95D5B2", marginBottom: "20px" }}>
        Key Components
      </p>
      {[
        "Mood check-in slider",
        "AI chat interface",
        "Journal entry cards",
        "Personalised resource tiles",
        "Mood trend graph",
        "Therapist directory cards",
        "Onboarding progress dots",
      ].map((c) => (
        <div key={c} className="flex items-start gap-3 mb-4">
          <span style={{ color: "#95D5B2", fontSize: "0.6rem", paddingTop: "5px" }}>→</span>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(228,230,195,0.5)", lineHeight: 1.5 }}>{c}</p>
        </div>
      ))}
    </div>
  </Reveal>
</div>
        </Reveal>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

      {/* ══ OUTCOME ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 lg:px-16">
        <Reveal>
          <SectionLabel>Outcome & Reflection</SectionLabel>
          <p
            className="mb-10"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "rgba(228,230,195,0.55)",
              maxWidth: "700px",
            }}
          >
            Solara is a complete, publication-ready UX case study with
            full-fidelity prototypes across every core flow. It demonstrates my
            ability to identify a genuine human problem, design a coherent system
            response, and deliver a product that feels considered at every
            layer — from macro IA down to a mood selector's active state.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "rgba(228,230,195,0.3)",
              maxWidth: "700px",
            }}
          >
            If I were to continue, the next phase would add crisis escalation
            pathways — routing users to human support when the AI detects
            language suggesting acute distress. The groundwork already exists in
            the Resources section. The product knows where it wants to go.
          </p>
        </Reveal>
      </section>

      <div className="max-w-6xl mx-auto px-8 lg:px-16"><Divider /></div>

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
            Public Pulse
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

          <Link href="/projects/public-pulse" className="group block">
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
              Public Pulse
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
              AI Civic Feedback System
            </p>
          </Link>

          <Link
            href="/projects/public-pulse"
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