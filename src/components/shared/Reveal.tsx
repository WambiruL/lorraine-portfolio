"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
  duration = 0.7,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  // Fallback for elements already sitting in the viewport when this mounts,
  // e.g. returning to a page via browser back navigation. Scroll position can
  // get restored slightly after mount, so the IntersectionObserver behind
  // useInView sometimes misses the resulting intersection, leaving content
  // stuck at opacity 0 forever. Poll briefly right after mount to catch that.
  useEffect(() => {
    if (visible) return;
    let frame: number;
    let elapsed = 0;
    const check = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true);
        return;
      }
      elapsed += 1;
      if (elapsed < 60) frame = requestAnimationFrame(check);
    };
    frame = requestAnimationFrame(check);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
