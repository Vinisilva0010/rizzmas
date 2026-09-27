"use client";

import { useEffect, useRef } from "react";

const TEXT = "Rizzamas shop";
const COLORS = ["#ffffff", "#faf6f6", "#fffad1"];
const GAP = 2.5;
const REPEL_RADIUS = 110;
const REPEL_FORCE = 2.4;

const W = 900;
const H = 180;

type P = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  phase: number;
};

export default function ParticleTitle() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;

    let mouseX = -1000;
    let mouseY = -1000;
    let particles: P[] = [];

    const build = () => {
      const off = document.createElement("canvas");
      const octx = off.getContext("2d");
      if (!octx) return;

      off.width = W;
      off.height = H;

      const fontSize = 110;
      octx.font = `900 ${fontSize}px system-ui, -apple-system, sans-serif`;
      octx.textBaseline = "middle";
      octx.textAlign = "left";

      octx.clearRect(0, 0, W, H);
      octx.fillStyle = "#000000";
      octx.fillText(TEXT, 10, H / 2);

      const data = octx.getImageData(0, 0, W, H).data;
      const next: P[] = [];

      for (let py = 0; py < H; py += GAP) {
        for (let px = 0; px < W; px += GAP) {
          const index = (Math.floor(py) * W + Math.floor(px)) * 4;
          if (data[index + 3] > 120) {
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            next.push({
              x: px,
              y: py,
              homeX: px,
              homeY: py,
              vx: 0,
              vy: 0,
              size: 1.6,
              color,
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      particles = next;
    };

    build();

    const touch = window.matchMedia("(hover: none)").matches;
    let raf = 0;

    const draw = (t: number) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);

      if (touch) {
        mouseX = W / 2 + Math.sin(t * 0.0008) * W * 0.38;
        mouseY = H / 2 + Math.sin(t * 0.0016) * H * 0.25;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.vx += (p.homeX - p.x) * 0.022;
        p.vy += (p.homeY - p.y) * 0.022;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const d = Math.hypot(dx, dy);

        if (d < REPEL_RADIUS) {
          const f = (REPEL_RADIUS - d) / REPEL_RADIUS;
          const a = Math.atan2(dy, dx);
          p.vx += Math.cos(a) * f * REPEL_FORCE;
          p.vy += Math.sin(a) * f * REPEL_FORCE;
        }

        p.vx += Math.sin(t * 0.0018 + p.phase) * 0.008;
        p.vy += Math.cos(t * 0.0014 + p.phase) * 0.008;

        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - r.left) / r.width) * W;
      mouseY = ((e.clientY - r.top) / r.height) * H;
    };

    const onLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label={TEXT}
      className="w-full max-w-[620px] h-auto block drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
      style={{
        aspectRatio: `${W} / ${H}`,
        touchAction: "none",
      }}
    />
  );
}
