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
const GF = "/images/projects/vjb/gates-foundation";

type PillarItem =
  | { type: "single"; src: string; label: string }
  | { type: "series"; images: string[]; label: string };

const pillars: { tag: string; title: string; copy: string; items: PillarItem[] }[] = [
  {
    tag: "Global Health",
    title: "Immunisation, malaria & World Health Day",
    copy: "Data-led storytelling on vaccine impact and disease prevention, from immunisation milestones to malaria awareness, produced in English and French for World Health Day.",
    items: [
      { type: "single", src: `${GF}/world-health-day-fr.png`, label: "World Health Day (FR)" },
      { type: "series", images: [1, 2, 3, 4].map((n) => `${GF}/world-health-day/slide-${n}.png`), label: "World Health Day Carousel" },
      { type: "single", src: `${GF}/malaria-poster.png`, label: "Malaria Awareness" },
      { type: "series", images: [1, 2, 3].map((n) => `${GF}/malaria-awareness/slide-${n}.png`), label: "What It Takes to End Malaria" },
      { type: "series", images: [1, 2].map((n) => `${GF}/vaccination-week/post-${n}.png`), label: "Vaccination Week" },
      { type: "series", images: [1, 2, 3, 4].map((n) => `${GF}/immunisation-week/quote-cards-1/quote-${n}.png`), label: "Immunisation Week Quote Cards I" },
      { type: "series", images: [1, 2, 3].map((n) => `${GF}/immunisation-week/quote-cards-2/quote-${n}.png`), label: "Immunisation Week Quote Cards II" },
      { type: "series", images: [`${GF}/immunisation-impact.png`, ...[1, 2, 3].map((n) => `${GF}/immunisation-week/data-infographics/slide-${n}.png`)], label: "Immunisation Impact & Data" },
      { type: "series", images: [1, 2, 3, 4].map((n) => `${GF}/immunisation-week/end-polio/slide-${n}.png`), label: "End Polio" },
    ],
  },
  {
    tag: "Nigeria Africa Month",
    title: "A regional adaptation, story by story",
    copy: "The Africa Month system retuned for a Nigerian audience: single posts and four story-driven carousels, from smallholder agriculture to maternal health.",
    items: [
      { type: "series", images: [1, 2].map((n) => `${GF}/nigeria-africa-month/single-posts/post-${n}.png`), label: "Single Posts" },
      { type: "series", images: [1, 2, 3].map((n) => `${GF}/nigeria-africa-month/babban/slide-${n}.png`), label: "Babban Carousel" },
      { type: "series", images: [1, 2, 3, 4].map((n) => `${GF}/nigeria-africa-month/innovators/slide-${n}.png`), label: "Innovators Carousel" },
      { type: "series", images: [1, 2, 3, 4].map((n) => `${GF}/nigeria-africa-month/nneka/slide-${n}.png`), label: "Nneka Carousel" },
      { type: "series", images: [1, 2, 3, 4].map((n) => `${GF}/nigeria-africa-month/save-mums/slide-${n}.png`), label: "Save Mums Carousel" },
    ],
  },
  {
    tag: "Agriculture & Economic Opportunity",
    title: "Making data-driven arguments visual",
    copy: "Explainer graphics and quote cards translating research on smallholder farming, AI-assisted agriculture, and economic opportunity into share-ready social content.",
    items: [
      { type: "series", images: [1, 2, 3].map((n) => `${GF}/ai-agriculture-week/post-${n}.png`), label: "AI & Agriculture Week" },
      { type: "single", src: `${GF}/grants-opportunities.png`, label: "Grant Opportunities" },
      { type: "series", images: [`${GF}/economic-opportunity.png`, ...[2, 3].map((n) => `${GF}/our-work/post-${n}.png`)], label: "Our Work Showcase" },
    ],
  },
  {
    tag: "Organisation",
    title: "Careers & internal comms",
    copy: "On-brand hiring announcements for the Africa team, keeping recruitment content consistent with the Foundation's public-facing visual identity.",
    items: [
      { type: "series", images: [1, 2].map((n) => `${GF}/job-cards/job-card-${n}.png`), label: "Careers, Africa Team" },
    ],
  },
];

export default function GatesFoundationPage() {
  return (
    <main style={{ background: "#0a1a0f", color: "var(--cream)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end pb-24 pt-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f13 0%, #0a1a0f 55%, #081409 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(5rem, 16vw, 16rem)",
            fontWeight: 700, color: "transparent", WebkitTextStroke: `1px ${ACCENT}0a`,
            userSelect: "none", whiteSpace: "nowrap", letterSpacing: "-0.02em",
          }}>
            GATES FOUNDATION
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-10"
              style={{ border: `1px solid ${ACCENT}40`, fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Gates Foundation Africa · Social Content
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 6rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--cream)", maxWidth: "820px" }}>
              Gates Foundation Africa,{" "}
              <em style={{ color: ACCENT_LIGHT }}>a growing visual language for social storytelling.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ borderTop: `1px solid ${ACCENT}18` }}>
              {[
                { label: "Client", value: "Gates Foundation Africa" },
                { label: "Type", value: "Social Content · Multi-Campaign" },
                { label: "Focus", value: "Health · Agriculture · Africa Month" },
                { label: "Format", value: "Bilingual, English & French" },
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
            The Brief
          </p>
          <h2 className="mb-10" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, lineHeight: 1.2, color: "var(--cream)" }}>
            Ongoing social content{" "}
            <em style={{ color: ACCENT_LIGHT }}>for Gates Foundation's Africa channels.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div
            className="relative overflow-hidden mb-6 p-10 lg:p-14"
            style={{ background: "linear-gradient(135deg, #0d1f13 0%, #0a1a0f 100%)", border: `1px solid ${ACCENT}20` }}
          >
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.8vw, 1.3rem)", fontWeight: 300, lineHeight: 1.75, color: "rgba(242,242,242,0.75)" }}>
              I design social graphics for Gates Foundation Africa's regional
              channels: quote cards, data explainers, campaign identities, and
              carousels, produced to the Foundation's brand guidelines and
              delivered in <em style={{ color: ACCENT }}>English and French</em>, optimised for X, WhatsApp,
              Facebook, LinkedIn, and Instagram.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "rgba(228,230,195,0.3)" }}>
            Series marked <span style={{ color: ACCENT }}>N SLIDES</span> open in full, click any card to browse the set.
          </p>
        </Reveal>

        <div className="my-28" style={{ height: "1px", background: `${ACCENT}12` }} />

        {/* ── FEATURED: AFRICA MONTH ── */}
        <Reveal>
          <Link
            href="/projects/visual-journalism-branding/gates-foundation/africa-month"
            className="group relative overflow-hidden block mb-28"
            style={{ border: `1px solid ${ACCENT}30`, background: "linear-gradient(135deg, #0d1f13 0%, #0a1a0f 100%)" }}
          >
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: ACCENT }}>
                  Featured Campaign
                </span>
                <h3 className="mt-5 mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", fontWeight: 300, lineHeight: 1.15, color: "var(--cream)" }}>
                  Africa Month,{" "}
                  <em style={{ color: ACCENT_LIGHT }}>a brand system built to scale across four weeks.</em>
                </h3>
                <p className="mb-8 max-w-md" style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(242,242,242,0.45)" }}>
                  The largest collection in this body of work: a dedicated identity carried through launch,
                  innovation spotlights, personal stories, and a closing innovators showcase, in English and French.
                </p>
                <div className="flex items-center gap-8 mb-8">
                  {[["46", "Assets"], ["4", "Weeks"], ["EN/FR", "Format"]].map(([v, l]) => (
                    <div key={l}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 300, color: "var(--cream)" }}>{v}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(228,230,195,0.35)", textTransform: "uppercase" as const }}>{l}</div>
                    </div>
                  ))}
                </div>
                <span
                  className="inline-flex items-center gap-3 self-start"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", color: ACCENT, textTransform: "uppercase" as const }}
                >
                  Explore the full campaign
                  <span className="transition-transform duration-300 group-hover:translate-x-2 inline-block">→</span>
                </span>
              </div>
              <div className="relative min-h-[280px]" style={{ background: "#0d1445" }}>
                <img src={`${GF}/africa-month/week1/opening-card.png`} alt="Africa Month campaign" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0a1a0f 0%, transparent 30%)" }} />
              </div>
            </div>
          </Link>
        </Reveal>

        {/* ── PILLARS ── */}
        {pillars.map((pillar, pi) => (
          <div key={pillar.tag} className={pi > 0 ? "mt-24" : ""}>
            <Reveal>
              <p className="mb-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--moss)" }}>
                {pillar.tag}
              </p>
              <h3 className="mb-6 max-w-2xl" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontWeight: 300, lineHeight: 1.3, color: "var(--cream)" }}>
                {pillar.title}
              </h3>
              <p className="mb-10 max-w-2xl" style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(242,242,242,0.45)" }}>
                {pillar.copy}
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pillar.items.map((item, i) => (
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
