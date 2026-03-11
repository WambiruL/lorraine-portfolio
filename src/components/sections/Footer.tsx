"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const socials = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/lorraine-wambiru/" },
  { label: "Behance",   href: "https://www.behance.net/lorrainewambui" },
  { label: "GitHub",    href: "https://github.com/WambiruL" },
];

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 30%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y       = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@lorrainewambiru.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative"
      style={{ backgroundColor: "var(--forest)" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-8 right-8 lg:left-16 lg:right-16 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(137,152,120,0.15), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 pt-28 lg:pt-36 pb-10">

        {/* ── Main content ── */}
        <motion.div style={{ opacity, y }} className="mb-20 lg:mb-24">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "var(--moss)" }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8em",
                letterSpacing: "0.3em",
                color: "rgba(137,152,120,0.6)",
                textTransform: "uppercase" as const,
              }}
            >
              {"Let's Connect"}
            </span>
          </div>

          {/* Big headline */}
          <div className="mb-10">
            <h2
              className="leading-[0.95] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                fontWeight: 300,
                color: "var(--cream)",
              }}
            >
              {"Let's design"}
              <br />
              {"something "}
              <span style={{ fontStyle: "italic", color: "var(--moss)" }}>
                meaningful
              </span>
              <br />
              together.
            </h2>
          </div>

          {/* Subtext */}
          <p
            className="max-w-lg mb-14"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              color: "rgba(228,230,195,0.4)",
            }}
          >
            Whether it&apos;s a new product, a design system, brand identity, or
            just a conversation about craft,I&apos;m always up for a
            thoughtful discussion.
          </p>

          {/* Email block */}
          <div>
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                color: "rgba(137,152,120,0.4)",
                textTransform: "uppercase" as const,
              }}
            >
              Email
            </p>

            <div className="flex items-center gap-5 flex-wrap">
              {/* Email address */}
              
              <a  href="mailto:wambirulorraine@gmail.com"
                data-hover
                className="group transition-colors duration-300"
                style={{ color: "var(--cream)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--moss)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--cream)")
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                    fontWeight: 300,
                  }}
                >
                  wambirulorraine@gmail.com
                </span>
              </a>

              {/* Copy button */}
              <button
                onClick={handleCopy}
                data-hover
                className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 transition-all duration-300"
                style={{
                  border: "1px solid rgba(137,152,120,0.25)",
                  color: copied
                    ? "var(--moss)"
                    : "rgba(228,230,195,0.4)",
                }}
              >
                <motion.span
                  key={copied ? "copied" : "copy"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  {copied ? "Copied ✓" : "Copy email"}
                </motion.span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div
          className="w-full h-px mb-8"
          style={{
            background:
              "linear-gradient(to right, rgba(137,152,120,0.12), rgba(137,152,120,0.06), transparent)",
          }}
        />

        {/* ── Bottom bar ── */}
        <div className="flex items-center justify-between flex-wrap gap-6">

          {/* Socials */}
          <div className="flex items-center gap-8">
            {socials.map((s) => (
              
              <a key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group flex items-center gap-1.5 transition-colors duration-300"
                style={{ color: "rgba(228,230,195,0.3)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cream)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(228,230,195,0.3)")
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  {s.label}
                </span>
                <span className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block">
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* Right — CV download + copyright */}
          <div className="flex items-center gap-8">

            {/* Copyright */}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                color: "rgba(137,152,120,0.2)",
              }}
            >
              © 2026 Lorraine Wambiru
            </span>

            {/* Download CV */}
            
            <a href="/lorraine-wambiru-cv.pdf"
              download
              data-hover
              className="group relative overflow-hidden flex items-center gap-2.5 px-6 py-3 transition-all duration-500"
              style={{
                background: "var(--moss)",
                color: "var(--ink)",
              }}
            >
              {/* Hover fill */}
              <span
                className="absolute inset-0 bg-forest translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              />
              <span className="relative z-10 text-xs group-hover:text-moss transition-colors duration-300">
                ↓
              </span>
              <span
                className="relative z-10 group-hover:text-moss transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                }}
              >
                Download CV
              </span>
            </a>
          </div>
        </div>

        {/* ── Large background name — decorative ── */}
        {/* <div
          className="mt-16 overflow-hidden select-none pointer-events-none"
          aria-hidden
        >
          <p
            className="leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 12vw, 11rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(137,152,120,0.04)",
              marginLeft: "-0.03em",
            }}
          >
            Lorraine Wambiru
          </p>
        </div> */}

      </div>
    </footer>
  );
}