"use client";
import { useCursor } from "@/hooks/useCursor";

export default function SoftCursor() {
  useCursor();
  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </>
  );
}
