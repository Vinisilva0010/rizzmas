"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface SantaClausProps {
  progress: number;
}

export default function SantaClaus({ progress }: SantaClausProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 460;
    const H = 560;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;

    const COLORS = ["#ffffff", "#fffad1", "#faf6f6", "#ffeaa7"];
    const count = 380;
    const particles = Array.from({ length: count }, () => {
      const radius = Math.random() * 190 + 20;
      const angle = Math.random() * Math.PI * 2;
      return {
        baseRadius: radius,
        angle,
        speed: (Math.random() * 0.015 + 0.006) * (Math.random() < 0.5 ? 1 : -1),
        size: Math.random() * 2.8 + 1.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        offsetY: (Math.random() - 0.5) * 60,
      };
    });

    let raf = 0;
    const draw = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);

      const centerX = W / 2;
      const centerY = H / 2;
      const expand = progress * 300;
      const opacity = Math.max(1 - progress * 1.3, 0);

      if (opacity > 0.01) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.angle += p.speed * (1 + progress * 2.5);

          const r = p.baseRadius + expand;
          const x = centerX + Math.cos(p.angle) * r;
          const y = centerY + Math.sin(p.angle) * (r * 0.85) + p.offsetY;

          ctx.fillStyle = p.color;
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(x, y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [progress]);

  return (
    <div className="relative w-full max-w-[480px] aspect-[4/5] flex items-center justify-center select-none">
      {/* Brilho de fundo que se expande */}
      <div
        className="absolute w-72 h-72 rounded-full bg-[#fffad1]/25 blur-[90px] pointer-events-none"
        style={{
          transform: `scale(${0.3 + progress * 1.3})`,
          opacity: 0.1 + progress * 0.9,
        }}
      />

      {/* Papai Noel preso em cena sem fugir */}
      <div
        className="relative w-full h-full flex items-center justify-center will-change-transform pointer-events-none"
        style={{
          transform: `scale(${0.65 + progress * 0.45}) translateY(${(1 - progress) * 35}px)`,
          opacity: 0.12 + progress * 0.88,
          filter: `blur(${(1 - progress) * 14}px)`,
        }}
      >
        <Image
          src="/images/santa.png"
          alt="Papai Noel Rizzamas"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Camada frontal de partículas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        style={{
          aspectRatio: "460 / 560",
        }}
      />
    </div>
  );
}
