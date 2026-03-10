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

const ACCENT = "#2E7D32";
const ACCENT_LIGHT = "rgba(46,125,50,0.8)";

function ImgSlot({ src, label, aspect = "16/9", className = "" }: { src: string; label: string; aspect?: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: aspect, background: "#0a1a0b", border: "1px solid rgba(46,125,50,0.1)" }}
    >
      <img src={src} alt={label} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "rgba(46,125,50,0.2)", textTransform: "uppercase" }}>
        {label}
      </div>
    </div>
  );
}

export default function WafconPage() {
  return (
    <main style={{ background: "#080f08", color: "var(--cream)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end pb-24 pt-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1a0b 0%, #080f08 55%, #060d06 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(5rem, 16vw, 16rem)",
            fontWeight: 700, color: "transparent", WebkitTextStroke: `1px ${ACCENT}0a`,
            userSelect: "none", whiteSpace: "nowrap", letterSpacing: "-0.02em",
          }}>
            WAFCON 2024
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
              WAFCON 2024 —{" "}
              <em style={{ color: ACCENT_LIGHT }}>the identity behind Africa's biggest women's tournament.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ borderTop: `1px solid ${ACCENT}18` }}>
              {[
                { label: "Client", value: "BBC News Africa" },
                { label: "Type", value: "Broadcast · Promo · Social" },
                { label: "Year", value: "2024" },
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
    <em style={{ color: ACCENT_LIGHT }}>came from.</em>
  </h2>
</Reveal>

<Reveal delay={0.05}>
  <div
    className="relative overflow-hidden mb-6 p-12 lg:p-20"
    style={{
      background: "linear-gradient(135deg, #0a1a0b 0%, #080f08 100%)",
      border: `1px solid ${ACCENT}20`,
      minHeight: "420px",
    }}
  >
    {/* Ghost pattern — silhouette grid */}
    {/* <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden> */}
      {/* {[...Array(6)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 60 100"
          style={{
            position: "absolute",
            width: "80px",
            left: `${8 + i * 16}%`,
            top: i % 2 === 0 ? "10%" : "30%",
            opacity: 0.04,
            transform: `rotate(${i % 2 === 0 ? -5 : 5}deg)`,
          }}
        > */}
          {/* Abstract player silhouette */}
          {/* <circle cx="30" cy="15" r="10" fill="#899878" />
          <path d="M20,25 L15,60 L25,58 L30,45 L35,58 L45,60 L40,25 Z" fill="#899878" />
          <path d="M15,60 L10,85 L20,85 L25,65 Z" fill="#899878" />
          <path d="M45,60 L50,85 L40,85 L35,65 Z" fill="#899878" />
        </svg> */}
      {/* ))} */}
      {/* Morocco pattern hint — geometric circle */}
      {/* <svg viewBox="0 0 200 200" style={{ position: "absolute", right: "-5%", bottom: "-10%", width: "300px", opacity: 0.05 }}>
        <circle cx="100" cy="100" r="80" stroke="#899878" strokeWidth="3" fill="none" />
        <polygon points="100,20 120,80 185,80 133,118 153,180 100,142 47,180 67,118 15,80 80,80" stroke="#899878" strokeWidth="2" fill="none" />
      </svg> */}
    {/* </div> */}

    <div className="relative z-10 grid lg:grid-cols-[1fr_400px] gap-16 items-start">
      <div>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2vw, 1.45rem)", fontWeight: 300, lineHeight: 1.75, color: "rgba(242,242,242,0.75)" }}>
          The WAFCON 2024 branding is a{" "}
          <em style={{ color: "#899878" }}>vibrant celebration</em> of African
          tradition and the rising power of women's football. The pattern design,
          filled with{" "}
          <em style={{ color: "#899878" }}>silhouettes of female players in motion</em>,
          captures the sport's dynamic energy and spirit of empowerment.
        </p>
        <p className="mt-6" style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "rgba(242,242,242,0.4)" }}>
          Central to the visual identity is the WAFCON logo — a football with a
          pattern that pays symbolic tribute to Morocco, this year's host nation.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {[
          { symbol: "◈", label: "Player Silhouettes", note: "Dynamic energy & empowerment" },
          { symbol: "⬡", label: "Moroccan Pattern", note: "Tribute to the host nation" },
          { symbol: "✦", label: "African Tradition", note: "Cultural celebration in motion" },
        ].map((m) => (
          <div key={m.label} className="flex items-start gap-5 p-5" style={{ border: `1px solid ${ACCENT}20`, background: "rgba(46,125,50,0.03)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: ACCENT, lineHeight: 1, minWidth: "32px" }}>
              {m.symbol}
            </span>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: ACCENT, marginBottom: "4px" }}>
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

        {/* <Reveal>
          <ImgSlot src="/images/projects/vjb/wafcon/concept.jpg" label="Concept / Identity Origin" aspect="16/7" className="mb-6" />
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.25em", color: "rgba(228,230,195,0.25)", textTransform: "uppercase" as const }}>
            Identity concept & visual direction
          </p>
        </Reveal> */}

        <div className="my-28" style={{ height: "1px", background: `${ACCENT}12` }} />

        {/* ── CORE BRAND ELEMENTS ── */}
        <Reveal>
          <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>Core Brand Elements</p>
          <h2 className="mb-16" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
            Colour, pattern,{" "}
            <em style={{ color: ACCENT_LIGHT }}>and wordtype.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mb-6">
  <div className="p-10" style={{ border: `1px solid ${ACCENT}20`, background: "#080f08" }}>
    <p style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--moss)", marginBottom: "32px" }}>
      Colour Palette
    </p>

    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(242,242,242,0.25)", marginBottom: "16px" }}>
      Primary
    </p>
    <div className="grid grid-cols-3 gap-4 mb-8">
      {[
        { hex: "#222222", name: "Ebon", role: "Primary dark" },
        { hex: "#f2f2f2", name: "Lunar", role: "Primary light" },
        { hex: "#b80000", name: "Postbox", role: "Primary accent" },
      ].map((c) => (
        <div key={c.hex}>
          <div className="w-full mb-3" style={{ height: "80px", background: c.hex, border: "1px solid rgba(255,255,255,0.06)" }} />
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--cream)", marginBottom: "2px" }}>{c.hex}</p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 400, color: "var(--cream)", marginBottom: "2px" }}>{c.name}</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(242,242,242,0.35)" }}>{c.role}</p>
        </div>
      ))}
    </div>

    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(242,242,242,0.25)", marginBottom: "16px" }}>
      Highlight
    </p>
    <div className="grid grid-cols-3 gap-4">
      <div>
        <div className="w-full mb-3" style={{ height: "80px", background: "#eb0000", border: "1px solid rgba(255,255,255,0.06)" }} />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--cream)", marginBottom: "2px" }}>#eb0000</p>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 400, color: "var(--cream)", marginBottom: "2px" }}>Scarlet</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(242,242,242,0.35)" }}>Celebration & energy</p>
      </div>
      <div className="col-span-2 flex items-center p-6" style={{ border: `1px solid ${ACCENT}15`, background: "rgba(46,125,50,0.03)" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(242,242,242,0.45)", fontStyle: "italic" }}>
          Built on BBC's core brand colours, applied creatively to show campaign distinction while remaining unmistakably part of one unified BBC visual family.
        </p>
      </div>
    </div>
  </div>
</Reveal>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Reveal delay={0.05}>
            {/* PATH: /images/projects/vjb/wafcon/patterns.jpg */}
            <ImgSlot src="/images/projects/vjb/wafcon/patterns.png" label="Brand Patterns" aspect="4/3" />
          </Reveal>
          <Reveal delay={0.1}>
            {/* PATH: /images/projects/vjb/wafcon/supporting.jpg */}
            <ImgSlot src="/images/projects/vjb/wafcon/supporting.png" label="Supporting Elements" aspect="4/3" />
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mb-6">
          {/* PATH: /images/projects/vjb/wafcon/wordtype.jpg */}
          <ImgSlot src="/images/projects/vjb/wafcon/wordtype.png" label="Wordtype" aspect="16/5" />
        </Reveal>

        <div className="my-28" style={{ height: "1px", background: `${ACCENT}12` }} />

        {/* ── USE CASES ── */}
        <Reveal>
          <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>Use Cases</p>
          <h2 className="mb-16" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
            Broadcast, promo{" "}
            <em style={{ color: ACCENT_LIGHT }}>and social.</em>
          </h2>
        </Reveal>

        {/* BROADCAST */}
        <Reveal>
          <p className="mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: `${ACCENT}80` }}>── Broadcast</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Reveal delay={0.03}>
            {/* PATH: /images/projects/vjb/wafcon/broadcast-1.jpg */}
            <ImgSlot src="/images/projects/vjb/wafcon/broadcast-1.png" label="Broadcast 01" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            {/* PATH: /images/projects/vjb/wafcon/broadcast-2.jpg */}
            <ImgSlot src="/images/projects/vjb/wafcon/broadcast-2.png" label="Broadcast 02" aspect="16/9" />
          </Reveal>
        </div>
        {/* <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[3, 4, 5].map((n, i) => (
            <Reveal key={n} delay={i * 0.03}>
              <ImgSlot src={`/images/projects/vjb/wafcon/broadcast-${n}.jpg`} label={`Broadcast ${String(n).padStart(2, "0")}`} aspect="16/9" />
            </Reveal>
          ))}
        </div> */}

        {/* PROMOS */}
        <Reveal>
          <p className="mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: `${ACCENT}80` }}>── Promos</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Reveal delay={0.03}>
            {/* PATH: /images/projects/vjb/wafcon/promo-1.jpg */}
            <ImgSlot src="/images/projects/vjb/wafcon/promo-1.png" label="Promo 01" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            {/* PATH: /images/projects/vjb/wafcon/promo-2.jpg */}
            <ImgSlot src="/images/projects/vjb/wafcon/promo-2.png" label="Promo 02" aspect="16/9" />
          </Reveal>
        </div>
        {/* <div className="grid md:grid-cols-3 gap-4 mb-16">
          {[3, 4, 5].map((n, i) => (
            <Reveal key={n} delay={i * 0.03}>
              <ImgSlot src={`/images/projects/vjb/wafcon/promo-${n}.jpg`} label={`Promo ${String(n).padStart(2, "0")}`} aspect="16/9" />
            </Reveal>
          ))}
        </div> */}

        {/* SOCIAL */}
        <Reveal>
          <p className="mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.4em", textTransform: "uppercase" as const, color: `${ACCENT}80` }}>── Social Media</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[1, 2, 3, 4].map((n, i) => (
            <Reveal key={n} delay={i * 0.04}>
              {/* PATH: /images/projects/vjb/wafcon/social-{n}.jpg */}
              <ImgSlot src={`/images/projects/vjb/wafcon/social-${n}.png`} label={`Social ${String(n).padStart(2, "0")}`} aspect="1/1" />
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
