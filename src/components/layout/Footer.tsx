import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full z-10 pt-20 pb-12 border-t border-[#fffad1]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Selo / Logo Centralizado com Texto Orbital */}
        <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
          {/* Texto Curvado Girando Suavemente */}
          <svg
            className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite] pointer-events-none"
            viewBox="0 0 200 200"
          >
            <path
              id="textRing"
              d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              fill="none"
            />
            <text className="text-[10px] tracking-[0.24em] uppercase fill-[#fffad1] font-bold opacity-80">
              <textPath href="#textRing" startOffset="0%">
                RIZZAMAS SHOP • O NATAL DOS ACHADINHOS •
              </textPath>
            </text>
          </svg>

          {/* Emblema do Centro (placeholder para a sua logo oficial em public/images/logo.png) */}
          <div className="relative w-20 h-20 rounded-full bg-[#700404] border-2 border-[#fffad1] shadow-[0_4px_25px_rgba(0,0,0,0.6)] flex items-center justify-center p-2">
            {/* Ícone de sino/presente até você colocar sua logo */}
            <svg className="w-10 h-10 text-[#fffad1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
              />
              <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
            </svg>
          </div>
        </div>

        {/* Frase de Impacto */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#faf6f6] max-w-2xl leading-snug mb-8">
          A magia do Natal com os melhores achadinhos e preços que cabem no bolso.
        </h3>

        {/* Pílulas de Redes Sociais: Instagram e TikTok */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#5a0303]/80 hover:bg-[#720404] border border-[#fffad1]/40 text-[#fffad1] text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all duration-200 hover:scale-105"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>@rizzamas_shop</span>
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#5a0303]/80 hover:bg-[#720404] border border-[#fffad1]/40 text-[#fffad1] text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all duration-200 hover:scale-105"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.34a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 1 0 6.34 6.34V8.42a8.27 8.27 0 0 0 4.88 1.57V6.69z" />
            </svg>
            <span>@rizzamas</span>
          </a>
        </div>

        {/* Linha Divisória */}
        <div className="w-full border-t border-[#fffad1]/15 mb-6" />

        {/* Rodapé Inferior: 3 Colunas */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#fffad1]/70 font-medium">
          {/* Lado Esquerdo */}
          <div>
            Rizzamas Shop • Achadinhos Shopee
          </div>

          {/* Centro: Links de Navegação Âncora */}
          <div className="flex items-center gap-6">
            <a
              href="#produtos"
              className="text-[#fffad1] hover:text-white font-bold transition-colors"
            >
              Produtos
            </a>
            <a
              href="#faq"
              className="text-[#fffad1] hover:text-white font-bold transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Lado Direito */}
          <div className="text-[11px] sm:text-xs opacity-75">
            Pagamentos e entregas processados pela Shopee.
          </div>
        </div>

      </div>
    </footer>
  );
}
