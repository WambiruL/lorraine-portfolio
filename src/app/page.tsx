"use client";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Navbar        from "@/components/sections/Navbar";
import Hero          from "@/components/sections/Hero";
import Projects      from "@/components/sections/Projects";
import DesignProcess from "@/components/sections/DesignProcess";
import About         from "@/components/sections/About";
import Footer        from "@/components/sections/Footer";

export default function Home() {
  useSmoothScroll();
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <DesignProcess />
      <About />
      <Footer />
    </main>
  );
}
