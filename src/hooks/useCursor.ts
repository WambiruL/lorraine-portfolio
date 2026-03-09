"use client";
import { useEffect } from "react";

export function useCursor() {
  useEffect(() => {
    const dot  = document.querySelector(".cursor-dot")  as HTMLElement | null;
    const ring = document.querySelector(".cursor-ring") as HTMLElement | null;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top  = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top  = `${ringY}px`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const addHover = () => ring.classList.add("hovered");
    const removeHover = () => ring.classList.remove("hovered");

    const interactives = document.querySelectorAll("a, button, [data-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);
}
