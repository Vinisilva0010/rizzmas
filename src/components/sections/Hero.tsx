"use client";

import React, { useEffect, useRef, useState } from "react";
import ParticleTitle from "@/components/animations/ParticleTitle";
import SantaClaus from "@/components/animations/SantaClaus";

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const targetRef = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    let raf = 0;

    const loop = () => {
      setProgress((prev) => {
        const diff = targetRef.current - prev;
        if (Math.abs(diff) < 0.002) return targetRef.current;
        return prev + diff * 0.14;
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onWheel = (e: WheelEvent) => {
      // Se estiver no topo da página e ainda não completou a animação
      if (window.scrollY <= 10) {
        if (e.deltaY > 0 && targetRef.current < 1) {
          e.preventDefault();
          targetRef.current = Math.min(targetRef.current + 0.18, 1);
        } else if (e.deltaY < 0 && targetRef.current > 0) {
          e.preventDefault();
          targetRef.current = Math.max(targetRef.current - 0.18, 0);
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (window.scrollY <= 10) {
        const diffY = touchStartY.current - e.touches[0].clientY;
        if (diffY > 10 && targetRef.current < 1) {
          targetRef.current = Math.min(targetRef.current + 0.08, 1);
        } else if (diffY < -10 && targetRef.current > 0) {
          targetRef.current = Math.max(targetRef.current - 0.08, 0);
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-8">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Lado Esquerdo */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#025a11]/90 border border-[#fffad1]/40 text-[#fffad1] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-md">
            <span>✨ Seleção de Achadinhos Shopee</span>
          </div>

          <div className="w-full mb-3">
            <ParticleTitle />
          </div>

          <p className="text-base sm:text-lg text-[#faf6f6] font-medium leading-relaxed max-w-xl mb-8 opacity-95">
            Os melhores produtos de Natal testados e selecionados para decorar sua casa e presentear quem você ama, direto dos melhores vendedores com frete rápido e desconto garantido.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#produtos"
              className="px-8 py-4 bg-[#025a11] hover:bg-[#037817] text-[#fffad1] font-bold text-base rounded-xl shadow-lg border border-[#fffad1]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Ver Achadinhos de Natal 🎄
            </a>
          </div>
        </div>

        {/* Lado Direito */}
        <div className="lg:col-span-5 flex items-center justify-center w-full relative min-h-[420px]">
          <SantaClaus progress={progress} />
        </div>

      </div>
    </section>
  );
}
