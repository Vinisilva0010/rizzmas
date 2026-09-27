"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl h-14 sm:h-16 px-3 sm:px-5 rounded-full flex items-center justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] border-2 border-[#e6dc98] ${
          scrolled
            ? "bg-[#fffad1]/95 backdrop-blur-md shadow-[0_14px_35px_rgba(0,0,0,0.55)]"
            : "bg-[#fffad1]"
        }`}
      >
        {/* Lado Esquerdo: Selo Circular + Nome */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group select-none">
          {/* Selo Natalino Circular */}
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#025a11] border-2 border-[#fffad1] shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#fffad1]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                d="M12 2L9 7h6l-3-5zm0 5L7 12h10l-5-5zm0 5l-7 7h14l-7-7zm-1 7v3h2v-3h-2z"
              />
            </svg>
          </div>

          {/* Nome da Marca com espaçamento */}
          <span className="text-base sm:text-xl font-black tracking-[0.18em] text-[#025a11] uppercase drop-shadow-sm">
            Rizzamas
          </span>
        </a>

        {/* Lado Direito: Links + Botão Circular de Ação */}
        <div className="flex items-center gap-4 sm:gap-7">
          <a
            href="#vitrine"
            className="text-xs sm:text-sm font-extrabold text-[#025a11] hover:text-[#013f0c] tracking-wide transition-colors"
          >
            Produtos
          </a>

          <a
            href="#faq"
            className="text-xs sm:text-sm font-extrabold text-[#025a11] hover:text-[#013f0c] tracking-wide transition-colors"
          >
            FAQ
          </a>

          {/* Botão de Destaque Circular Verde */}
          <a
            href="#vitrine"
            title="Ver Ofertas"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#025a11] hover:bg-[#037817] border border-[#fffad1]/50 shadow-md flex items-center justify-center text-[#fffad1] transition-transform duration-200 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
