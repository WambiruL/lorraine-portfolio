"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  // { label: "Work",     href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Process",  href: "#process" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]  = useState(false);
  const [menuOpen,    setMenuOpen]  = useState(false);
  const [activeLink,  setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${scrolled
            ? "bg-ink/90 backdrop-blur-md border-b border-forest/60 py-4"
            : "bg-transparent py-6"
          }
        `}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col leading-none text-left"
          >
            <span
              className="text-cream text-lg tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              L.
            </span>
            {/* <span
              className="text-moss text-[10px] tracking-[0.25em] uppercase mt-0.5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Product & Visual Designer
            </span> */}
          </button>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  data-hover
                  className="relative group text-[12px] tracking-[0.18em] uppercase transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: activeLink === link.href ? "#899878" : "rgba(228,230,195,0.55)",
                  }}
                  onMouseEnter={e => { if (activeLink !== link.href) (e.currentTarget as HTMLElement).style.color = "#F7F7F2"; }}
                  onMouseLeave={e => { if (activeLink !== link.href) (e.currentTarget as HTMLElement).style.color = "rgba(228,230,195,0.55)"; }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-moss transition-all duration-500"
                    style={{ width: activeLink === link.href ? "100%" : "0%" }}
                  />
                </button>
              </motion.li>
            ))}
          </ul>

          {/* ── Hamburger (mobile) ── */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8 relative z-[60]"
          >
            <motion.span
              animate={menuOpen
                ? { rotate: 45, y: 7, width: "28px" }
                : { rotate: 0,  y: 0, width: "28px" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block h-px bg-cream origin-center"
              style={{ width: "28px" }}
            />
            <motion.span
              animate={menuOpen
                ? { opacity: 0, x: -6 }
                : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-px bg-cream"
              style={{ width: "20px" }}
            />
            <motion.span
              animate={menuOpen
                ? { rotate: -45, y: -7, width: "28px" }
                : { rotate: 0,   y: 0,  width: "16px" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block h-px bg-cream origin-center"
              style={{ width: "16px" }}
            />
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-forest border-l border-moss/20 md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-moss/10">
                <span
                  className="text-moss text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-sage/50 hover:text-cream transition-colors text-lg leading-none"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-8 pt-10 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-center justify-between py-4 border-b border-moss/10 text-left"
                  >
                    <span
                      className="text-2xl transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: activeLink === link.href ? "#899878" : "#F7F7F2",
                        fontWeight: 300,
                      }}
                    >
                      {link.label}
                    </span>
                    {/* Right arrow */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12L12 4M12 4H6M12 4v6"/>
                </svg>

                {/* Left arrow */}
                {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 8H3M7 4L3 8l4 4"/>
                </svg> */}
                  </motion.button>
                ))}
              </nav>

              {/* Footer of drawer */}
              <div className="px-8 pb-10 pt-6">
                <p
                  className="text-sage/30 text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  © 2026 Lorraine Wambiru
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}