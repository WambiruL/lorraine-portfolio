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

const ACCENT = "#899878";
const ACCENT_LIGHT = "rgba(137,152,120,0.85)";
const BASE = "/images/projects/vjb/gates-foundation/africa-month";

const weeks = [
  {
    tag: "Week 1",
    title: "Campaign Launch",
    copy: "Two carousels set the tone for the month: an open-ended provocation on Africa's future, and a direct look at what still needs fixing.",
    items: [
      { type: "single" as const, src: `${BASE}/week1/opening-card.png`, label: "Opening Card" },
      { type: "series" as const, images: [1, 2, 3, 4, 5].map((n) => `${BASE}/week1/future-carousel/slide-${n}.png`), label: "The Future of Africa Is ___" },
      { type: "series" as const, images: [1, 2, 3, 4, 5].map((n) => `${BASE}/week1/fix-carousel/slide-${n}.png`), label: "What Must We Fix Now?" },
    ],
  },
  {
    tag: "Week 2",
    title: "Innovation Spotlight",
    copy: "A set of innovation cards paired with a personal story, how one hospital moment led Simon Maina to start saving mothers' lives with a simple tool, plus supporting quote cards.",
    items: [
      { type: "single" as const, src: `${BASE}/week2/intro-card.png`, label: "Week 2 Intro" },
      { type: "single" as const, src: `${BASE}/week2/simon-intro-card.png`, label: "Simon Maina, Story Intro" },
      { type: "series" as const, images: [1, 2, 3, 4, 5].map((n) => `${BASE}/week2/innovation-cards/slide-${n}.png`), label: "Innovation Cards" },
      { type: "series" as const, images: [1, 2, 3].map((n) => `${BASE}/week2/quote-cards/slide-${n}.png`), label: "Quote Cards" },
    ],
  },
  {
    tag: "Week 3",
    title: "People-First Innovation",
    copy: "“What happens when innovation meets people where they are?”, a story carousel grounded in real settings, with quote and comparison cards backing up the argument with data.",
    items: [
      { type: "single" as const, src: `${BASE}/week3/intro-card.png`, label: "Week 3 Intro" },
      { type: "series" as const, images: [1, 2, 3, 4, 5, 6].map((n) => `${BASE}/week3/story-carousel/slide-${n}.png`), label: "Story Carousel" },
      { type: "series" as const, images: [1, 2].map((n) => `${BASE}/week3/quote-cards/slide-${n}.png`), label: "Quote Cards" },
      { type: "series" as const, images: [1, 2].map((n) => `${BASE}/week3/comparison-cards/slide-${n}.png`), label: "Comparison Cards" },
    ],
  },
  {
    tag: "Week 4",
    title: "Innovators & Changemakers",
    copy: "The month closes with a showcase carousel introducing the innovators and changemakers shaping Africa's future, one solution at a time.",
    items: [
      { type: "series" as const, images: [1, 2, 3, 4, 5, 6].map((n) => `${BASE}/week4/innovators-carousel/slide-${n}.png`), label: "Innovators Carousel" },
      { type: "series" as const, images: [1, 2].map((n) => `${BASE}/week4/quote-cards/slide-${n}.png`), label: "Quote Cards" },
    ],
  },
];

export default function AfricaMonthPage() {
  return (
    <main style={{ background: "#0a1a0f", color: "var(--cream)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[65vh] flex flex-col justify-end pb-24 pt-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1445 0%, #0a1a0f 60%, #081409 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(5rem, 16vw, 16rem)",
            fontWeight: 700, color: "transparent", WebkitTextStroke: `1px ${ACCENT}0a`,
            userSelect: "none", whiteSpace: "nowrap", letterSpacing: "-0.02em",
          }}>
            AFRICA MONTH
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-10"
              style={{ border: `1px solid ${ACCENT}40`, fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Gates Foundation Africa · Featured Campaign
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--cream)", maxWidth: "820px" }}>
              Africa Month,{" "}
              <em style={{ color: ACCENT_LIGHT }}>one identity, carried across four weeks of storytelling.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ borderTop: `1px solid ${ACCENT}18` }}>
              {[
                { label: "Assets", value: "46 total" },
                { label: "Structure", value: "4-week arc" },
                { label: "Format", value: "English & French" },
                { label: "Client", value: "Gates Foundation Africa" },
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
          <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>
            The Arc
          </p>
          <h2 className="mb-10 max-w-2xl" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
            Launch, spotlight, story,{" "}
            <em style={{ color: ACCENT_LIGHT }}>showcase.</em>
          </h2>
          <p className="mb-16 max-w-2xl" style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(242,242,242,0.45)" }}>
            The largest single collection in this partnership. One brand system, held together by a
            recurring palette, wordmark, and supporting pattern, adapted week to week: from an opening
            provocation, through innovation and personal stories, to a closing celebration of the people
            behind the ideas.
          </p>
        </Reveal>

        {/* ── IDENTITY ── */}
        <Reveal>
          <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>
            Campaign Identity
          </p>
          <h3 className="mb-10" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontWeight: 300, lineHeight: 1.3, color: "var(--cream)" }}>
            One palette, held for a month.
          </h3>
        </Reveal>
        <Reveal delay={0.02}>
          <div
            className="grid grid-cols-3 md:grid-cols-6 gap-3"
            style={{ gridAutoRows: "clamp(90px, 11vw, 130px)" }}
          >
            {/* Pattern — large anchor tile */}
            <div
              className="relative overflow-hidden col-span-3 row-span-2"
              style={{ border: `1px solid ${ACCENT}1a` }}
            >
              <img src={`${BASE}/identity/pattern.png`} alt="Supporting pattern" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-end p-4 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(10,26,15,0.75) 0%, transparent 45%)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(228,230,195,0.6)", textTransform: "uppercase" as const }}>Supporting Pattern</p>
              </div>
            </div>

            {/* Colour chips — real hex values */}
            {[
              { hex: "#12236D", name: "Ink Navy", text: "#f3ecdd" },
              { hex: "#EBCB00", name: "Marigold", text: "#12236D" },
              { hex: "#F5F3ED", name: "Ivory", text: "#12236D" },
            ].map((c) => (
              <div
                key={c.hex}
                className="relative flex flex-col justify-end p-3 col-span-1"
                style={{ background: c.hex, border: c.hex === "#F5F3ED" ? `1px solid ${ACCENT}30` : "none" }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontStyle: "italic", color: c.text, marginBottom: 2 }}>{c.name}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: c.text, opacity: 0.75 }}>{c.hex.slice(1).toLowerCase()}</p>
              </div>
            ))}

            {/* Gold splatter — supporting graphic */}
            <div
              className="relative overflow-hidden flex items-center justify-center p-6 col-span-2"
              style={{ background: "#F5F3ED", border: `1px solid ${ACCENT}1a` }}
            >
              <img src={`${BASE}/identity/gold-splatter.png`} alt="Gold splatter graphic" className="max-w-[75%] max-h-[75%] object-contain" />
            </div>

            {/* Type sample */}
            <div
              className="relative overflow-hidden flex items-center justify-center col-span-1"
              style={{ background: "#12236D", border: `1px solid ${ACCENT}1a` }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#f3ecdd" }}>Aa</span>
            </div>
          </div>
          <p className="mt-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.15em", color: "rgba(228,230,195,0.3)" }}>
            Ink Navy, Marigold & Ivory, held across every touchpoint, from carousels to quote cards.
          </p>
        </Reveal>

        <div className="my-28" style={{ height: "1px", background: `${ACCENT}12` }} />

        {/* ── WEEKS ── */}
        {weeks.map((week, wi) => (
          <div key={week.tag} className={wi > 0 ? "mt-24" : ""}>
            <Reveal>
              <div className="flex items-baseline gap-4 mb-5">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>
                  {week.tag}
                </span>
                <span className="flex-1 h-px" style={{ background: `${ACCENT}18` }} />
              </div>
              <h3 className="mb-6 max-w-2xl" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontWeight: 300, lineHeight: 1.3, color: "var(--cream)" }}>
                {week.title}
              </h3>
              <p className="mb-10 max-w-2xl" style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(242,242,242,0.45)" }}>
                {week.copy}
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {week.items.map((item, i) => (
                <Reveal key={item.type === "single" ? item.src : item.label} delay={i * 0.03}>
                  {item.type === "single" ? (
                    <ImgSlot src={item.src} label={item.label} aspect="4/5" />
                  ) : (
                    <SeriesCard images={item.images} label={item.label} aspect="4/5" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* ══ BACK ══ */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">
        <Link
          href="/projects/visual-journalism-branding/gates-foundation"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(228,230,195,0.3)", transition: "color 0.3s" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--cream)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(228,230,195,0.3)")}
        >
          ← Back to Gates Foundation Africa
        </Link>
      </div>

    </main>
  );
}
