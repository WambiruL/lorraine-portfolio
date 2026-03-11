"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

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

const ACCENT = "#C8963E";

// ── Image slot component ───────────────────────────────────────────────────
// Replace src with your actual image paths. Label tells you what goes there.
function ImgSlot({ src, label, aspect = "16/9", className = "" }: { src: string; label: string; aspect?: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: aspect, background: "#1a1206", border: "1px solid rgba(200,150,62,0.1)" }}
    >
      <img src={src} alt={label} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
      {/* Placeholder label — hidden once image loads */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "rgba(200,150,62,0.2)", textTransform: "uppercase" }}>
        {label}
      </div>
    </div>
  );
}

export default function UgandaElectionsPage() {
  return (
    <main style={{ background: "#0d0a06", color: "var(--cream)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end pb-24 pt-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1206 0%, #0d0a06 55%, #0a0806 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(5rem, 16vw, 16rem)",
            fontWeight: 700, color: "transparent", WebkitTextStroke: `1px ${ACCENT}08`,
            userSelect: "none", whiteSpace: "nowrap", letterSpacing: "-0.02em",
          }}>
            UGANDA 2026
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-10"
              style={{ border: `1px solid ${ACCENT}40`, fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              BBC News Africa · Brand Identity · 2025
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--cream)", maxWidth: "820px" }}>
              Uganda Elections 2026 —{" "}
              <em style={{ color: `${ACCENT}cc` }}>a visual identity built for the ballot.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ borderTop: `1px solid ${ACCENT}18` }}>
              {[
                { label: "Client", value: "BBC News Africa" },
                { label: "Type", value: "Broadcast · Promo · Social" },
                { label: "Year", value: "2025" },
                { label: "Scope", value: "Full Visual Identity" },
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

        {/* ── CONCEPT ── */}
        {/* ── CONCEPT ── */}
<Reveal>
  <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>
    The Concept
  </p>
  <h2 className="mb-16" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
    Where the visual identity{" "}
    <em style={{ color: `${ACCENT}cc` }}>came from.</em>
  </h2>
</Reveal>

{/* Concept moodboard */}
<Reveal delay={0.05}>
  <div
  className="relative overflow-hidden mb-6 p-12 lg:p-20"
  style={{
    background: "linear-gradient(135deg, #1a1206 0%, #0d0a06 100%)",
    border: `1px solid ${ACCENT}20`,
    minHeight: "420px",
  }}
>
  {/* Frost patch — top right corner */}
  <div
    className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
    style={{
      backdropFilter: "blur(0px) brightness(0.7) saturate(0.6)",
      WebkitBackdropFilter: "blur(40px) brightness(0.7) saturate(0.6)",
      background: "linear-gradient(135deg, transparent 0%, rgba(26,18,6,0.6) 40%, rgba(255,180,44,0.06) 100%)",
      maskImage: "linear-gradient(to left, black 0%, black 30%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to left, black 0%, black 30%, transparent 100%)",
    }}
  />
    {/* Large ghost ribbon motif */}
    {/* <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    > */}
      {/* <svg
        viewBox="0 0 800 400"
        className="absolute"
        style={{ width: "110%", top: "-10%", left: "-5%", opacity: 0.04 }}
        preserveAspectRatio="none"
      > */}
        {/* <path
          d="M-50,200 C100,80 200,320 400,200 C600,80 700,320 850,200"
          stroke="#FFB42C"
          strokeWidth="60"
          fill="none"
          strokeLinecap="round"
        /> */}
        {/* <path
          d="M-50,220 C100,100 200,340 400,220 C600,100 700,340 850,220"
          stroke="#b80000"
          strokeWidth="30"
          fill="none"
          strokeLinecap="round"
        /> */}
      {/* </svg> */}
      {/* Tick motif */}
      {/* <svg
        viewBox="0 0 100 100"
        className="absolute"
        style={{ width: "280px", right: "5%", bottom: "-10%", opacity: 0.06 }}
      > */}
        {/* <polyline
          points="15,55 40,78 85,25"
          stroke="#FFB42C"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        /> */}
      {/* </svg> */}
    {/* </div> */}

    {/* Content */}
    <div className="relative z-10 grid lg:grid-cols-[1fr_400px] gap-16 items-start">
      <div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(242,242,242,0.75)",
          }}
        >
          The visual identity draws from the Ugandan flag, abstracting its
          colours into a{" "}
          <em style={{ color: "#FFB42C" }}>flowing national ribbon</em> that
          represents continuity, movement and the evolving nature of the
          country's political landscape. Integrated within this ribbon is a
          subtle{" "}
          <em style={{ color: "#FFB42C" }}>election tick motif</em>, referencing
          the act of voting, civic participation and the repetition of democratic
          choice.
        </p>
        <p
          className="mt-6"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "rgba(242,242,242,0.4)",
          }}
        >
          Together, these elements create a unifying visual system that links
          leadership and citizens — reinforcing the idea of the electoral process
          as an ongoing, collective national experience rather than a single
          isolated event.
        </p>
      </div>

      {/* Key motif callouts */}
      <div className="flex flex-col gap-4">
        {[
          { symbol: "⟿", label: "National Ribbon", note: "Continuity & movement" },
          { symbol: "✓", label: "Tick Motif", note: "Civic participation" },
          { symbol: "◎", label: "Democratic Cycle", note: "Ongoing collective experience" },
        ].map((m) => (
          <div
            key={m.label}
            className="flex items-start gap-5 p-5"
            style={{ border: `1px solid ${ACCENT}20`, background: "rgba(255,180,44,0.03)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                color: "#FFB42C",
                lineHeight: 1,
                minWidth: "32px",
              }}
            >
              {m.symbol}
            </span>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#FFB42C", marginBottom: "4px" }}>
                {m.label}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "rgba(242,242,242,0.4)" }}>
                {m.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</Reveal>

        {/* Concept hero image */}
        {/* <Reveal> */}
          {/* PATH: /images/projects/vjb/uganda/concept.jpg */}
          {/* <ImgSlot src="/images/projects/vjb/uganda/concept.jpg" label="Concept / Identity Origin" aspect="16/7" className="mb-6" /> */}
          {/* <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.25em", color: "rgba(228,230,195,0.25)", textTransform: "uppercase" as const }}>
            Identity concept & visual direction
          </p> */}
        {/* </Reveal> */}

        {/* ── DIVIDER ── */}
        <div className="my-28" style={{ height: "1px", background: `${ACCENT}12` }} />

        {/* ── CORE BRAND ELEMENTS ── */}
        <Reveal>
          <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>
            Core Brand Elements
          </p>
          <h2 className="mb-16" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
            Colour, pattern,{" "}
            <em style={{ color: `${ACCENT}cc` }}>and wordtype.</em>
          </h2>
        </Reveal>

        {/* Colour palette */}
        {/* Colour Palette — designed, no image needed */}
<Reveal delay={0.05} className="mb-6">
  <div
    className="p-10"
    style={{ border: `1px solid ${ACCENT}20`, background: "#0d0a06" }}
  >
    <p style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--moss)", marginBottom: "32px" }}>
      Colour Palette
    </p>

    {/* Primary swatches */}
    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(242,242,242,0.25)", marginBottom: "16px" }}>
      Primary
    </p>
    <div className="grid grid-cols-3 gap-4 mb-8">
      {[
        { hex: "#222222", name: "Ebon", role: "Primary dark" },
        { hex: "#f2f2f2", name: "Lunar", role: "Primary light", dark: true },
        { hex: "#b80000", name: "Postbox", role: "Primary accent" },
      ].map((c) => (
        <div key={c.hex}>
          <div
            className="w-full mb-3"
            style={{ height: "80px", background: c.hex, border: "1px solid rgba(255,255,255,0.06)" }}
          />
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--sage)", marginBottom: "2px" }}>{c.hex}</p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 400, color: "var(--sage)", marginBottom: "2px" }}>{c.name}</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(242,242,242,0.35)" }}>{c.role}</p>
        </div>
      ))}
    </div>

    {/* Highlight */}
    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(242,242,242,0.25)", marginBottom: "16px" }}>
      Highlight
    </p>
    <div className="grid grid-cols-3 gap-4">
      <div>
        <div
          className="w-full mb-3"
          style={{ height: "80px", background: "#FFB42C", border: "1px solid rgba(255,255,255,0.06)" }}
        />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--cream)", marginBottom: "2px" }}>#FFB42C</p>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 400, color: "var(--cream)", marginBottom: "2px" }}>Yellow</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(242,242,242,0.35)" }}>Ugandan flag gold — civic energy</p>
      </div>

      {/* BBC brand note */}
      <div
        className="col-span-2 flex items-center p-6"
        style={{ border: `1px solid ${ACCENT}15`, background: "rgba(255,180,44,0.03)" }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,242,242,0.45)", fontStyle: "italic" }}>
          Built on BBC's core brand colours, applied creatively to show campaign distinction while remaining unmistakably part of one unified BBC visual family.
        </p>
      </div>
    </div>
  </div>
</Reveal>

        {/* Patterns + supporting elements — 2 col */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Reveal delay={0.05}>
            {/* PATH: /images/projects/vjb/uganda/patterns.jpg */}
            <ImgSlot src="/images/projects/vjb/uganda/patterns.png" label="Brand Patterns" aspect="4/3" />
          </Reveal>
          <Reveal delay={0.05} className="mb-6">
            <div
                className="relative overflow-hidden"
                style={{
                aspectRatio: "700/525",
                background: "#1a1206",
                border: `1px solid ${ACCENT}15`,
                maxWidth: "900px",
                }}
            >
                <img
                src="/images/projects/vjb/uganda/supporting.png"
                loading="lazy"
                alt="supporting"
                className="w-full h-full"
                style={{ objectFit: "contain", padding: "24px" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
            </div>
        </Reveal>
        </div>

        {/* Wordtype — full width */}
        <Reveal delay={0.05} className="mb-6">
          {/* PATH: /images/projects/vjb/wafcon/wordtype.jpg */}
          <ImgSlot src="/images/projects/vjb/uganda/wordtype.png" label="Wordtype" aspect="16/5" />
        </Reveal>
        


        {/* ── DIVIDER ── */}
        <div className="my-28" style={{ height: "1px", background: `${ACCENT}12` }} />

        {/* ── USE CASES ── */}
        <Reveal>
          <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>
            Use Cases
          </p>
          <h2 className="mb-16" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
            Broadcast, promo{" "}
            <em style={{ color: `${ACCENT}cc` }}>and social.</em>
          </h2>
        </Reveal>

        {/* BROADCAST */}
        <Reveal>
          <p className="mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.4em", textTransform: "uppercase" as const, color: `${ACCENT}60` }}>
            ── Broadcast
          </p>
        </Reveal>
        {/* Add as many broadcast images as you have — duplicate ImgSlot rows */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Reveal delay={0.03}>
            {/* PATH: /images/projects/vjb/uganda/broadcast-1.jpg */}
            <ImgSlot src="/images/projects/vjb/uganda/broadcast-1.png" label="Broadcast 01" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            {/* PATH: /images/projects/vjb/uganda/broadcast-2.jpg */}
            <ImgSlot src="/images/projects/vjb/uganda/broadcast-2.png" label="Broadcast 02" aspect="16/9" />
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <Reveal delay={0.03}>
            {/* PATH: /images/projects/vjb/uganda/broadcast-3.jpg */}
            <ImgSlot src="/images/projects/vjb/uganda/broadcast-3.png" label="Broadcast 03" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            {/* PATH: /images/projects/vjb/uganda/broadcast-4.jpg */}
            <ImgSlot src="/images/projects/vjb/uganda/broadcast-4.png" label="Broadcast 04" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.09}>
            {/* PATH: /images/projects/vjb/uganda/broadcast-5.jpg */}
            <ImgSlot src="/images/projects/vjb/uganda/broadcast-5.png" label="Broadcast 05" aspect="16/9" />
          </Reveal>
        </div>

        {/* PROMOS */}
        <Reveal>
          <p className="mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.4em", textTransform: "uppercase" as const, color: `${ACCENT}60` }}>
            ── Promos
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Reveal delay={0.03}>
            {/* PATH: /images/projects/vjb/uganda/promo-1.jpg */}
            <ImgSlot src="/images/projects/vjb/uganda/promo-1.png" label="Promo 01" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            {/* PATH: /images/projects/vjb/uganda/promo-2.jpg */}
            <ImgSlot src="/images/projects/vjb/uganda/promo-2.png" label="Promo 02" aspect="16/9" />
          </Reveal>
        </div>
        {/* <div className="grid md:grid-cols-3 gap-4 mb-16">
          <Reveal delay={0.03}>
            <ImgSlot src="/images/projects/vjb/uganda/promo-3.jpg" label="Promo 03" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            <ImgSlot src="/images/projects/vjb/uganda/promo-4.jpg" label="Promo 04" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.09}>
            <ImgSlot src="/images/projects/vjb/uganda/promo-5.jpg" label="Promo 05" aspect="16/9" />
          </Reveal>
        </div> */}

        {/* SOCIAL */}
        <Reveal>
          <p className="mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.4em", textTransform: "uppercase" as const, color: `${ACCENT}60` }}>
            ── Social Media
          </p>
        </Reveal>
        {/* Social posts are square — grid of 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[1, 2, 3, 4].map((n, i) => (
            <Reveal key={n} delay={i * 0.04}>
              {/* PATH: /images/projects/vjb/uganda/social-{n}.jpg */}
              <ImgSlot src={`/images/projects/vjb/uganda/social-${n}.png`} label={`Social ${String(n).padStart(2, "0")}`} aspect="1/1" />
            </Reveal>
          ))}
        </div>

        {/* OPTIMO BANNER */}
        <Reveal>
          <p className="mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.4em", textTransform: "uppercase" as const, color: `${ACCENT}60` }}>
            ── Optimo Web Banner
          </p>
        </Reveal>
        <Reveal delay={0.05} className="mb-16">
  <div
    style={{
      background: "#1a1206",
      border: `1px solid ${ACCENT}15`,
      padding: "32px 24px",
    }}
  >
    <img
      src="/images/projects/vjb/uganda/optimo-banner.png"
      alt="Optimo Web Banner"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        imageRendering: "crisp-edges",
      }}
      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
    />
  </div>
</Reveal>

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