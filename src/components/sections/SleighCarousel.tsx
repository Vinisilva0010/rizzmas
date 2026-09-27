"use client";

import React, { useState } from "react";
import Image from "next/image";

// 4 imagens de produtos que ficam como carga do trenó
const PRODUCT_IMAGES = [
  { id: 1, src: "/images/santa.png", alt: "Produto 1" },
  { id: 2, src: "/images/santa.png", alt: "Produto 2" },
  { id: 3, src: "/images/santa.png", alt: "Produto 3" },
  { id: 4, src: "/images/santa.png", alt: "Produto 4" },
];

export default function SleighCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  // Multiplicado para criar fluxo infinito e contínuo de ponta a ponta
  const displayItems = [...PRODUCT_IMAGES, ...PRODUCT_IMAGES, ...PRODUCT_IMAGES];

  return (
    <section className="relative w-full py-16 overflow-hidden z-10">
      {/* Título simples e direto */}
      <div className="w-full text-center px-4 mb-6">
        <h2 className="text-2xl sm:text-4xl font-black text-[#fffad1] tracking-wider uppercase drop-shadow-md">
          O que você encontra aqui
        </h2>
      </div>

      {/* Trenó de Ponta a Ponta */}
      <div
        className="relative w-screen left-1/2 -translate-x-1/2 cursor-pointer select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* CARGA: Produtos correndo em cima da base do trenó */}
        <div className="relative w-full overflow-hidden pb-4">
          <div
            className="flex gap-8 sm:gap-12 w-max animate-sleigh-loop items-end px-4"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="relative flex-shrink-0 w-36 h-36 sm:w-52 sm:h-52 bg-[#faf6f6] rounded-2xl p-2 border-4 border-[#fffad1] shadow-[0_10px_25px_rgba(0,0,0,0.5)] transform -rotate-1 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 150px, 220px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ESTRUTURA DO TRENÓ: SVG clássico com lâminas e bico ponta a ponta */}
        <div className="relative w-full h-28 sm:h-36 -mt-8 pointer-events-none">
          <svg
            className="w-full h-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]"
            viewBox="0 0 1600 140"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Corpo Vermelho do Trenó */}
            <path
              d="M -50,50 L 1400,50 Q 1520,50 1560,10 L 1580,20 Q 1530,90 1380,90 L -50,90 Z"
              fill="#9e0606"
              stroke="#5a0202"
              strokeWidth="4"
            />

            {/* Friso Dourado Superior */}
            <path
              d="M -50,46 L 1400,46 Q 1520,46 1560,6 L 1570,14 Q 1530,70 1385,70 L -50,70 Z"
              fill="#fffad1"
            />

            {/* Suportes verticais das lâminas */}
            <rect x="150" y="85" width="16" height="35" rx="3" fill="#cfbe56" stroke="#9e8a2a" strokeWidth="2" />
            <rect x="500" y="85" width="16" height="35" rx="3" fill="#cfbe56" stroke="#9e8a2a" strokeWidth="2" />
            <rect x="900" y="85" width="16" height="35" rx="3" fill="#cfbe56" stroke="#9e8a2a" strokeWidth="2" />
            <rect x="1300" y="85" width="16" height="35" rx="3" fill="#cfbe56" stroke="#9e8a2a" strokeWidth="2" />

            {/* Lâmina Dourada Inferior com Bico Curvado Frontal */}
            <path
              d="M -50,115 L 1420,115 Q 1540,115 1580,75 Q 1600,45 1575,30 Q 1555,20 1545,40 Q 1540,65 1490,95 Q 1430,105 1380,105 L -50,105 Z"
              fill="#fffad1"
              stroke="#e0c767"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
