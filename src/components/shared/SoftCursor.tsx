"use client";
import { useCursor } from "@/hooks/useCursor";

export default function SoftCursor() {
  useCursor();
  return (
    <>
      <div className="cursor-dot lg:block hidden" />
      <div className="cursor-ring lg:block hidden" />
    </>
  );
}