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

const clients = [
  {
    slug: "bbc-news-africa",
    title: "BBC News Africa",
    subtitle: "Editorial graphics & brand identity",
    meta: "Politics · Conflict · Culture · Broadcast",
    src: "/images/projects/vjb/uganda/cover.png",
    accent: "#C15B44",
    bg: "#180d0a",
  },
  {
    slug: "gates-foundation",
    title: "Gates Foundation Africa",
    subtitle: "Social content across health & agriculture",
    meta: "Global Health · Agriculture · Africa Month",
    src: "/images/projects/vjb/gates-foundation/africa-month/week1/opening-card.png",
    accent: "#899878",
    bg: "#0a1a0f",
  },
];

function ClientCard({ client, index }: { client: (typeof clients)[0]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <Link
        href={`/projects/visual-journalism-branding/${client.slug}`}
        className="group block relative overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ background: client.bg }}
        >
          <img
            src={client.src}
            alt={client.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700"
            style={{ opacity: 0.8 }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <div
          className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none"
          style={{
            backdropFilter: "blur(20px) brightness(0.55)",
            WebkitBackdropFilter: "blur(20px) brightness(0.6)",
            background: `${client.bg}99`,
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center transition-opacity duration-500 group-hover:opacity-0">
            <h3
              className="text-center mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 2.4vw, 2.6rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--sage)",
                lineHeight: 1.1,
              }}
            >
              {client.title}
            </h3>
            <p
              className="text-center mb-2"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "rgba(228,230,195,0.5)",
              }}
            >
              {client.subtitle}
            </p>
            <p
              className="text-center mb-5"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "rgba(228,230,195,0.3)",
              }}
            >
              {client.meta}
            </p>
            <div
              className="mb-4"
              style={{ width: "24px", height: "1px", background: client.accent }}
            />
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.59rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: client.accent,
              }}
            >
              View the Work
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function VisualJournalismPage() {
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
        className="relative min-h-[55vh] flex flex-col justify-end pb-20 pt-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1206 0%, #121113 55%, #0d0e0a 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
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
          </span>
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
              Editorial graphics and brand identity work spanning a contract
              with BBC News Africa and a social campaign for Gates Foundation
              Africa, design that informs and communicates across the continent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CLIENT CARDS ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <Reveal>
          <p
            className="mb-10"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase" as const,
              color: "rgba(228,230,195,0.3)",
            }}
          >
            Choose a body of work
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {clients.map((client, i) => (
            <ClientCard key={client.slug} client={client} index={i} />
          ))}
        </div>
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
