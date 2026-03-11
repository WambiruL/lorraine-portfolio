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
      style={{ height: "1px", background: "rgba(137,152,120,0.12)" }}
    />
  );
}

const PP = "#008895";
const PP_LIGHT = "rgba(0,136,149,0.8)";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PublicPulsePage() {
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
        style={{ background: "linear-gradient(160deg, #031f22 0%, #053034 45%, #121113 100%)" }}
      >
        {/* Ghost wordmark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(8rem, 22vw, 22rem)",
                fontWeight: 300,
                letterSpacing: "0.15em",
                color: "rgba(149,213,178,0.04)",
                lineHeight: 1,
              }}
            >
              PUBLIC PULSE
            </motion.span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
          {/* Category pill */}
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 mb-10"
              style={{
                border: `1px solid ${PP}40`,
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: PP,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: PP }} />
              UX / UI Design · Civic Tech
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
              Designing for{" "}
              <em style={{ color: PP_LIGHT }}>civic accountability</em>{" "}
              in the age of AI.
            </h1>
          </Reveal>

          {/* Metadata strip */}
          <Reveal delay={0.2}>
            <div
              className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
              style={{ borderTop: "1px solid rgba(0,136,149,0.15)" }}
            >
              {[
                { label: "Role", value: "Lead Designer" },
                { label: "Type", value: "Web Platform" },
                { label: "Year", value: "2024" },
                { label: "Tools", value: "Figma · Roboto · Teal System" },
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
            style={{ border: "1px solid rgba(0,136,149,0.12)", background: "rgba(0,136,149,0.12)" }}
          >
            {[
              { value: "2", label: "User types designed for" },
              { value: "5", label: "Core features" },
              { value: "4-step", label: "Reporting flow" },
              { value: "Dual", label: "Citizen + Admin views" },
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
                    color: PP,
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
                When citizens speak,{" "}
                <em style={{ color: PP_LIGHT }}>governments should listen.</em>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(228,230,195,0.6)" }}>
                Public Pulse is an AI-powered civic feedback platform designed for two distinct audiences simultaneously — the citizen filing a complaint about a broken road, and the government official trying to understand what their county most urgently needs.
              </p>
            </div>
            <div
              className="p-8"
              style={{
                border: "1px solid rgba(0,136,149,0.15)",
                background: "rgba(0,136,149,0.04)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: PP,
                  marginBottom: "16px",
                }}
              >
                The core challenge
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
                "Citizens face daily challenges with public services, but existing channels for reporting issues are fragmented, slow, and lack transparency."
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
            A broken feedback loop{" "}
            <em style={{ color: PP_LIGHT }}>erodes public trust.</em>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              number: "01",
              title: "Fragmented channels",
              body: "Citizens had no unified place to report issues. A pothole, a water shortage, an illegal structure — each went to a different ministry, phone number, or physical office.",
            },
            {
              number: "02",
              title: "Zero transparency",
              body: "After filing a complaint, citizens heard nothing. No status updates, no timelines, no acknowledgment. The report disappeared into a void, breeding distrust.",
            },
            {
              number: "03",
              title: "No data for decision-makers",
              body: "Authorities lacked aggregated, reliable data to understand where problems clustered or what the public actually felt about services. Decisions were made in the dark.",
            },
          ].map((p) => (
            <Reveal key={p.number} delay={0.05}>
              <div
                className="p-8 h-full"
                style={{
                  border: "1px solid rgba(0,136,149,0.12)",
                  background: "rgba(0,136,149,0.03)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    color: PP,
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
            Five stages.{" "}
            <em style={{ color: PP_LIGHT }}>Two very different users.</em>
          </h2>
        </Reveal>

        {[
          {
            number: "01",
            title: "Discover",
            body: "I mapped the existing landscape of civic reporting — what existed, what failed, and why. I interviewed citizens who had tried to report issues and government staff who received them. The gap between both experiences was stark. Citizens felt unheard; officials felt buried in noise.",
          },
          {
            number: "02",
            title: "Define",
            body: "Two user personas emerged: the Citizen (frustrated, time-poor, distrustful of institutions) and the Admin (overwhelmed with unstructured data, needing prioritisation tools). Any solution had to serve both meaningfully — or it would serve neither.",
          },
          {
            number: "03",
            title: "Ideate",
            body: "The conversational reporting model was the key breakthrough. Instead of a cold form, the AI assistant guides citizens through a natural 4-step flow — what happened, where, any evidence, confirmation. It lowered the barrier dramatically while collecting structured data on the backend.",
          },
          {
            number: "04",
            title: "Prototype",
            body: "I built both sides in parallel. The citizen-facing interface needed to feel approachable and human. The admin dashboard needed density and clarity — charts, filters, user management — without feeling overwhelming. Teal carried meaning across both: action, trust, civic responsibility.",
          },
          {
            number: "05",
            title: "Validate",
            body: "Usability testing revealed that the step-by-step progress indicator (Step 1 of 4) significantly reduced user anxiety. Citizens wanted to know they were almost done. On the admin side, the sentiment analysis view became the most-used feature — officials loved seeing public emotion mapped geographically.",
          },
        ].map((stage, i) => (
          <Reveal key={stage.number} delay={0.05}>
            <div
              className="grid lg:grid-cols-[180px_1fr] gap-8 lg:gap-16 py-10"
              style={{ borderTop: "1px solid rgba(0,136,149,0.08)" }}
            >
              <div className="flex items-start gap-4">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    color: PP,
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
              borderLeft: `3px solid ${PP}`,
              background: "rgba(0,136,149,0.04)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: PP,
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
              "A form asks. A conversation listens. Replacing the report form with a step-by-step AI assistant wasn't just a UX choice — it was the product's entire value proposition reframed."
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
            Citizen-facing and admin —{" "}
            <em style={{ color: PP_LIGHT }}>designed as one system.</em>
          </h2>

          {/* Behance + live link buttons */}
          <div className="flex items-center gap-5 flex-wrap mb-20">
            
            <a  href="https://www.behance.net/gallery/205605743/Public-Pulse-An-AI-powered-Citizen-Feedback-System"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center gap-3 px-7 py-3.5 transition-colors duration-500"
              style={{
                border: `1px solid ${PP}50`,
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                color: PP,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = PP)}
            >
              <span className="relative z-10">View on Behance</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12L12 4M12 4H6M12 4v6"/>
                </svg>                
                <span
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                style={{ background: PP, transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              />
            </a>

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
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: `${PP}50` }} />
                Live Platform — Coming Soon
              </div>
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

        {/* Screen groups */}

        {/* GROUP LABEL — Branding & Landing */}
        <Reveal>
          <p
            className="mb-10"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase" as const,
              color: "rgba(228,230,195,0.2)",
            }}
          >
            ── Brand & Landing
          </p>
        </Reveal>

        {[
          {
            src: "/images/projects/public-pulse/1.png",
            label: "01 — Brand Identity",
            caption: "The double-P logomark is built from mirrored columns — a visual metaphor for dialogue between citizen and state. The dark navy backdrop positions Public Pulse as serious civic infrastructure, not a startup app.",
          },
          {
            src: "/images/projects/public-pulse/8.png",
            label: "02 — Home Page",
            caption: "\"Citizen feedback, finally taken seriously.\" The headline does the political work. The curved image container softens the civic tone without undermining it. One CTA: Join the Conversation.",
          },
        ].map((screen, i) => (
          <Reveal key={screen.label} delay={0.05} className="mb-28">
            <div className="w-full overflow-hidden mb-8" style={{ border: "1px solid rgba(0,136,149,0.1)" }}>
              <img src={screen.src} alt={screen.label} className="w-full h-auto object-cover" />
            </div>
            <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: PP, paddingTop: "4px" }}>
                {screen.label}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "rgba(228,230,195,0.5)", maxWidth: "580px" }}>
                {screen.caption}
              </p>
            </div>
          </Reveal>
        ))}

        {/* GROUP LABEL — Citizen Side */}
        <Reveal>
          <p
            className="mb-10 mt-8"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase" as const,
              color: "rgba(228,230,195,0.2)",
            }}
          >
            ── Citizen-Facing Interface
          </p>
        </Reveal>

        {[
          {
            src: "/images/projects/public-pulse/10.png",
            label: "03 — AI Assistant",
            caption: "The entry point for citizens: not a form, a conversation. \"Hi Castell, what would you like to do?\" First-name personalisation makes the platform feel like a service, not a bureaucratic portal. Two paths — Report an Issue or Ask a Question — keep the experience focused.",
          },
          {
            src: "/images/projects/public-pulse/13.png",
            label: "04 — Step 1 of 4: Issue Details",
            caption: "The reporting flow opens with the hardest part: describing what happened. The progress indicator (Step 1 of 4) tells the citizen exactly how much they're committing to. The chat bubble format makes a government form feel like a human conversation.",
          },
          {
            src: "/images/projects/public-pulse/14.png",
            label: "05 — Step 2 of 4: Location",
            caption: "The AI responds to the citizen's message with empathy — \"That's dangerous. Thanks for pointing it out.\" — before asking for location. This sequence was a deliberate UX decision: acknowledge first, gather data second. It mirrors how a helpful human would actually behave.",
          },
          {
            src: "/images/projects/public-pulse/15.png",
            label: "06 — Step 3 of 4: Evidence",
            caption: "Optional photo upload — the system moves on whether or not evidence exists. \"No, I don't have any\" is a valid answer. Removing this blocker was critical: many citizens abandoned earlier prototypes when evidence upload felt mandatory.",
          },
          {
            src: "/images/projects/public-pulse/16.png",
            label: "07 — Step 4 of 4: Escalation",
            caption: "\"Your report has been escalated. Thank you for your service.\" The word 'service' is intentional — it reframes civic reporting as an act of community contribution, not a complaint. The conversation is now a record. The citizen has been heard.",
          },
          {
            src: "/images/projects/public-pulse/19.png",
            label: "08 — Help Center",
            caption: "A self-serve knowledge base organised by task, not by department. Citizens can find answers to platform questions without opening a new report. The search bar and 7-category grid keep navigation low-friction.",
          },
          {
            src: "/images/projects/public-pulse/20.png",
            label: "09 — Notification Settings",
            caption: "Fine-grained control over what citizens hear back about — from report escalation to area-wide alerts when a common issue in their neighbourhood is resolved. Transparency built into the settings layer, not bolted on after the fact.",
          },
        ].map((screen) => (
          <Reveal key={screen.label} delay={0.05} className="mb-28">
            <div className="w-full overflow-hidden mb-8" style={{ border: "1px solid rgba(0,136,149,0.1)" }}>
              <img src={screen.src} alt={screen.label} className="w-full h-auto object-cover" />
            </div>
            <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: PP, paddingTop: "4px" }}>
                {screen.label}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "rgba(228,230,195,0.5)", maxWidth: "580px" }}>
                {screen.caption}
              </p>
            </div>
          </Reveal>
        ))}

        {/* GROUP LABEL — Admin Side */}
        <Reveal>
          <p
            className="mb-10 mt-8"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase" as const,
              color: "rgba(228,230,195,0.2)",
            }}
          >
            ── Government Admin Interface
          </p>
        </Reveal>

        {[
          {
            src: "/images/projects/public-pulse/21.png",
            label: "10 — Admin Dashboard",
            caption: "2,340 reports. 800 assigned, 540 under review, 1,000 resolved. The headline metrics make the scale of civic engagement immediately legible. Sentiment donut charts and category breakdowns give officials the pattern — not just the noise.",
          },
          {
            src: "/images/projects/public-pulse/22.png",
            label: "11 — User Management",
            caption: "Full citizen account management with role-based filtering (Citizen, Admin), activity tracking, and report counts per user. The table-plus-filter layout mirrors familiar admin conventions — lowering the learning curve for government staff.",
          },
          {
            src: "/images/projects/public-pulse/23.png",
            label: "12 — Interactions Management",
            caption: "Every report in one filterable table. Location, category, status, and a View Details action per row. The colour-coded status pills (Assigned / Under Review / Resolved) create a visual triage system that works at a glance.",
          },
          {
            src: "/images/projects/public-pulse/24.png",
            label: "13 — Sentiment Analysis",
            caption: "The most strategically important screen. An overall sentiment score of 0.75, trend lines across 12 months, geographic breakdowns by county, and category filters. For the first time, an official can answer: \"What does Langata feel about water services right now?\" — and have data to back it up.",
          },
        ].map((screen) => (
          <Reveal key={screen.label} delay={0.05} className="mb-28">
            <div className="w-full overflow-hidden mb-8" style={{ border: "1px solid rgba(0,136,149,0.1)" }}>
              <img src={screen.src} alt={screen.label} className="w-full h-auto object-cover" />
            </div>
            <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: PP, paddingTop: "4px" }}>
                {screen.label}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "rgba(228,230,195,0.5)", maxWidth: "580px" }}>
                {screen.caption}
              </p>
            </div>
          </Reveal>
        ))}

        <Divider />

        {/* ── DESIGN SYSTEM ── */}
        <><Reveal>
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
            A system built on{" "}
            <em style={{ color: PP_LIGHT }}>trust and legibility.</em>
        </h2>
    </Reveal><div className="grid lg:grid-cols-3 gap-6 mb-16">
            {/* Colours */}
            <Reveal delay={0}>
                <div className="p-8 h-full" style={{ border: "1px solid rgba(0,136,149,0.12)" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: PP, marginBottom: "20px" }}>
                        Colour Palette
                    </p>
                    {[
                        { hex: "#053034", name: "Deep Civic" },
                        { hex: "#0B535F", name: "Mid Teal" },
                        { hex: "#008895", name: "Action Teal" },
                        { hex: "#F0F5F5", name: "Off White" },
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
                <div className="p-8 h-full" style={{ border: "1px solid rgba(0,136,149,0.12)" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: PP, marginBottom: "20px" }}>
                        Typography
                    </p>
                    <p style={{ fontSize: "3rem", fontWeight: 700, color: "var(--cream)", lineHeight: 1, marginBottom: "12px", letterSpacing: "-0.02em" }}>
                        Roboto
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        {["Light", "Regular", "Medium", "Bold"].map((w) => (
                            <span key={w} style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(228,230,195,0.4)", textTransform: "uppercase" as const }}>
                                {w}
                            </span>
                        ))}
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(228,230,195,0.4)", marginTop: "20px" }}>
                        Roboto was chosen for its civic clarity and democratic legibility — readable at every weight, on every screen, for every citizen.
                    </p>
                </div>
            </Reveal>

            {/* Components */}
            <Reveal delay={0.1}>
                <div className="p-8 h-full" style={{ border: "1px solid rgba(0,136,149,0.12)" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: PP, marginBottom: "20px" }}>
                        Key Components
                    </p>
                    {[
                        "Conversational message bubbles",
                        "Step progress indicator",
                        "Status pills (Assigned / Review / Resolved)",
                        "Role-based navigation sidebar",
                        "Data visualisation charts",
                        "Toggle notification controls",
                        "Pagination system",
                    ].map((c) => (
                        <div key={c} className="flex items-start gap-3 mb-4">
                            <span style={{ color: PP, fontSize: "0.6rem", paddingTop: "5px" }}>→</span>
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(228,230,195,0.5)", lineHeight: 1.5 }}>{c}</p>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div><Divider /></>

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
            What this project{" "}
            <em style={{ color: PP_LIGHT }}>taught me about designing for power.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p
            className="mb-8"
            style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(228,230,195,0.6)", maxWidth: "780px" }}
          >
            Public Pulse required me to hold two fundamentally different mental models in tension at once. Citizens needed warmth, simplicity, and reassurance that they'd been heard. Administrators needed density, control, and data they could act on. The visual system — teal, dark surfaces, clean type — had to work for both without compromise.
          </p>
          <p
            style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(228,230,195,0.6)", maxWidth: "780px" }}
          >
            The biggest lesson: designing for civic contexts means designing for trust. Every interaction — from the AI's first greeting to the admin's sentiment score — either builds or erodes it. In government tech, there is no neutral.
          </p>
        </Reveal>

        <Divider />
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
            Flowspace
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

          <Link href="/projects/flowspace" className="group block">
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
              Flowspace
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
              All-in-one productivity tool
            </p>
          </Link>

          <Link
            href="/projects/flowspace"
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