"use client";
import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  targetRadius: number;
  opacity: number;
  targetOpacity: number;
  phase: number;
  phaseSpeed: number;
  morphAngle: number;
  morphSpeed: number;
  points: { angle: number; radiusOffset: number; speed: number }[];
}

export default function InkBleed() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const context = ctx as CanvasRenderingContext2D;

    let width  = canvas.offsetWidth  || window.innerWidth;
    let height = canvas.offsetHeight || window.innerHeight;
    canvas.width  = width;
    canvas.height = height;

    let raf: number;

    const BLOB_COUNT = 5;

    function createBlob(forced?: Partial<Omit<Blob, "baseX" | "baseY">>): Blob {
      const x      = forced?.x      ?? Math.random() * width;
      const y      = forced?.y      ?? Math.random() * height;
      const radius = forced?.radius ?? (Math.random() * 260 + 180) * Math.max(Math.min(width, height) / 900, 0.5);
      return {
        x,
        y,
        baseX:         x,
        baseY:         y,
        vx:            (Math.random() - 0.5) * 0.18,
        vy:            (Math.random() - 0.5) * 0.18,
        radius,
        targetRadius:  (Math.random() * 300 + 160) * Math.max(Math.min(width, height) / 900, 0.5),
        opacity:       forced?.opacity ?? 0,
        targetOpacity: Math.random() * 0.08 + 0.03,
        phase:         Math.random() * Math.PI * 2,
        phaseSpeed:    Math.random() * 0.004 + 0.001,
        morphAngle:    Math.random() * Math.PI * 2,
        morphSpeed:    Math.random() * 0.003 + 0.001,
        points: Array.from({ length: 8 }, (_, i) => ({
          angle:        (i / 8) * Math.PI * 2,
          radiusOffset: (Math.random() - 0.5) * 40,
          speed:        (Math.random() - 0.5) * 0.008,
        })),
      };
    }

    const blobs: Blob[] = Array.from({ length: BLOB_COUNT }, (_, i) =>
      createBlob({
        x:       (width  / BLOB_COUNT) * i + Math.random() * (width / BLOB_COUNT),
        y:       Math.random() * height,
        opacity: Math.random() * 0.05,
      })
    );

    function drawBlob(blob: Blob) {
      if (blob.opacity <= 0.002) return;

      blob.points.forEach((p) => {
        p.radiusOffset += p.speed;
        if (Math.abs(p.radiusOffset) > 45) p.speed *= -1;
      });

      blob.morphAngle += blob.morphSpeed;

      const pointCount = blob.points.length;
      const coords = blob.points.map((p, i) => {
        const angle = (i / pointCount) * Math.PI * 2 + blob.morphAngle;
        const r     = blob.radius + p.radiusOffset;
        return {
          x: blob.x + Math.cos(angle) * r,
          y: blob.y + Math.sin(angle) * r,
        };
      });

      context.beginPath();
      coords.forEach((point, i) => {
        const prev = coords[(i - 1 + pointCount) % pointCount];
        const next = coords[(i + 1) % pointCount];

        const cpx1 = prev.x + (point.x - coords[(i - 2 + pointCount) % pointCount].x) * 0.18;
        const cpy1 = prev.y + (point.y - coords[(i - 2 + pointCount) % pointCount].y) * 0.18;
        const cpx2 = point.x - (next.x - prev.x) * 0.18;
        const cpy2 = point.y - (next.y - prev.y) * 0.18;

        if (i === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, point.x, point.y);
        }
      });
      context.closePath();

      const grad = context.createRadialGradient(
        blob.x, blob.y, 0,
        blob.x, blob.y, blob.radius * 1.4
      );

      grad.addColorStop(0,    `rgba(34, 39, 37,  ${blob.opacity * 7})`);
      grad.addColorStop(0.25, `rgba(34, 39, 37,  ${blob.opacity * 5})`);
      grad.addColorStop(0.5,  `rgba(40, 52, 40,  ${blob.opacity * 3})`);
      grad.addColorStop(0.75, `rgba(60, 74, 58,  ${blob.opacity * 1.5})`);
      grad.addColorStop(1,    `rgba(137,152,120, 0)`);

      context.fillStyle = grad;
      context.fill();
    }

    function update() {
      blobs.forEach((blob) => {
        blob.x     += blob.vx;
        blob.y     += blob.vy;
        blob.phase += blob.phaseSpeed;

        // Breathe
        blob.radius += (blob.targetRadius - blob.radius) * 0.003;
        if (Math.abs(blob.radius - blob.targetRadius) < 5) {
          blob.targetRadius = (Math.random() * 300 + 160) * Math.max(Math.min(width, height) / 900, 0.5);
        }

        // Fade
        blob.opacity += (blob.targetOpacity - blob.opacity) * 0.008;
        if (Math.abs(blob.opacity - blob.targetOpacity) < 0.002) {
          blob.targetOpacity = Math.random() * 0.08 + 0.03;
        }

        // Soft boundary wrap
        const margin = 200;
        if (blob.x < -margin)        { blob.x = width  + margin * 0.5; blob.targetOpacity = 0; }
        if (blob.x > width  + margin) { blob.x = -margin * 0.5;        blob.targetOpacity = 0; }
        if (blob.y < -margin)        { blob.y = height + margin * 0.5; blob.targetOpacity = 0; }
        if (blob.y > height + margin) { blob.y = -margin * 0.5;        blob.targetOpacity = 0; }

        // Gentle center pull
        blob.vx += (0.5 - blob.x / width)  * 0.0003;
        blob.vy += (0.5 - blob.y / height) * 0.0003;

        // Cap velocity
        const maxV = 0.25;
        blob.vx = Math.max(-maxV, Math.min(maxV, blob.vx));
        blob.vy = Math.max(-maxV, Math.min(maxV, blob.vy));
      });
    }

    function render() {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "multiply";
      blobs.forEach(drawBlob);
      context.globalCompositeOperation = "source-over";
      update();
      raf = requestAnimationFrame(render);
    }

    raf = requestAnimationFrame(render);

    const onResize = () => {
      width         = canvas.offsetWidth  || window.innerWidth;
      height        = canvas.offsetHeight || window.innerHeight;
      canvas.width  = width;
      canvas.height = height;

      blobs.forEach((blob) => {
        blob.x     = Math.random() * width;
        blob.y     = Math.random() * height;
        blob.baseX = blob.x;
        blob.baseY = blob.y;

        const scale       = Math.min(width, height) / 900;
        blob.radius       = (Math.random() * 260 + 180) * Math.max(scale, 0.5);
        blob.targetRadius = (Math.random() * 300 + 160) * Math.max(scale, 0.5);
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}