"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";

const DEFAULT_ACCENT = "#899878";

export function ImgSlot({ src, label, aspect = "4/5", className = "", accent }: { src: string; label: string; aspect?: string; className?: string; accent?: string }) {
  return <SeriesCard images={[src]} label={label} aspect={aspect} className={className} accent={accent} />;
}

export function SeriesCard({
  images,
  label,
  aspect = "4/5",
  className = "",
  accent = DEFAULT_ACCENT,
}: {
  images: string[];
  label: string;
  aspect?: string;
  className?: string;
  accent?: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const multi = images.length > 1;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (multi && e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (multi && e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, images.length, multi]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (!multi) return;
    if (info.offset.x < -60) setIndex((i) => (i + 1) % images.length);
    else if (info.offset.x > 60) setIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => { setIndex(0); setOpen(true); }}
        className={`group relative overflow-hidden text-left w-full ${className}`}
        style={{ aspectRatio: aspect, background: "#0a1a0f", border: `1px solid ${accent}1a`, cursor: "pointer" }}
      >
        <img
          src={images[0]}
          alt={label}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(10,26,15,0.75) 0%, transparent 45%)" }}>
          {multi ? (
            <span
              className="self-start px-2 py-1"
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.15em",
                color: accent, background: "rgba(10,26,15,0.7)", border: `1px solid ${accent}40`,
              }}
            >
              {images.length} SLIDES
            </span>
          ) : <span />}
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(228,230,195,0.7)", textTransform: "uppercase" }}>
            {label}
          </p>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "rgba(10,26,15,0.35)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em",
              color: "var(--cream)", border: `1px solid ${accent}`, padding: "8px 16px", background: "rgba(10,26,15,0.6)",
            }}
          >
            {multi ? "VIEW SERIES" : "VIEW"}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(8,20,12,0.94)", backdropFilter: "blur(6px)" }}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.2em", color: "rgba(228,230,195,0.6)" }}
            >
              CLOSE ✕
            </button>

            <p
              className="absolute top-7 left-6 md:left-10"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: accent, textTransform: "uppercase" }}
            >
              {multi ? `${label} · ${index + 1} / ${images.length}` : label}
            </p>

            <motion.div
              key={index}
              drag={multi ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[80vh] max-w-[92vw] md:max-w-[420px]"
              style={{ aspectRatio: "2160/2700", touchAction: multi ? "pan-y" : "auto", cursor: multi ? "grab" : "default" }}
              whileTap={multi ? { cursor: "grabbing" } : undefined}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[index]}
                alt={multi ? `${label}, slide ${index + 1}` : label}
                className="w-full h-full object-contain pointer-events-none select-none"
                draggable={false}
              />
            </motion.div>

            {multi && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }}
                  className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
                  style={{ border: `1px solid ${accent}50`, color: accent, background: "rgba(10,26,15,0.5)" }}
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }}
                  className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
                  style={{ border: `1px solid ${accent}50`, color: accent, background: "rgba(10,26,15,0.5)" }}
                >
                  →
                </button>
              </>
            )}

            {multi && (
              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {images.map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: i === index ? accent : "rgba(228,230,195,0.25)",
                      transition: "background 0.3s",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
