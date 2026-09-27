import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const installments = (product.price / 3).toFixed(2).replace(".", ",");
  const formattedPrice = product.price.toFixed(2).replace(".", ",");
  const formattedOriginalPrice = product.originalPrice
    ? product.originalPrice.toFixed(2).replace(".", ",")
    : null;

  return (
    <div className="relative group flex flex-col justify-between bg-gradient-to-b from-[#fffad1] to-[#f4ebaa] rounded-2xl p-2.5 sm:p-4 border-2 sm:border-4 border-[#e2d075] shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1">
      
      {/* Detalhe de Caixa de Presente: Fitas Cruzadas Sutis */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
        {/* Fita vertical vermelha central */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 sm:w-5 bg-[#9e0606]/15" />
        {/* Fita horizontal vermelha */}
        <div className="absolute top-28 sm:top-36 left-0 right-0 h-4 sm:h-5 bg-[#9e0606]/15" />
      </div>

      {/* Topo do Presente: Laço em SVG com Badge de Destaque */}
      <div className="relative z-10 flex items-center justify-between gap-1 mb-2">
        {/* Laço de Presente Vermelho */}
        <div className="flex items-center gap-1">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 7C9.5 4 4.5 4 4.5 7.5C4.5 10.5 10 11.5 12 12M12 7C14.5 4 19.5 4 19.5 7.5C19.5 10.5 14 11.5 12 12M12 12V20M12 12L7 21M12 12L17 21"
              stroke="#9e0606"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {product.badge && (
            <span className="bg-[#9e0606] text-[#fffad1] text-[10px] sm:text-xs font-black px-1.5 sm:px-2 py-0.5 rounded shadow-sm tracking-wide uppercase truncate max-w-[110px] sm:max-w-none">
              {product.badge}
            </span>
          )}
        </div>

        {discountPercent && (
          <span className="bg-[#025a11] text-[#fffad1] text-[10px] sm:text-xs font-black px-1.5 py-0.5 rounded shadow-sm">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Imagem do Produto */}
      <div className="relative z-10 w-full aspect-square bg-[#faf6f6] rounded-xl overflow-hidden border border-[#d6c469] flex items-center justify-center p-2 mb-2.5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
          className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Dados do Produto: Organização no Estilo Mercado Livre Mobile-First */}
      <div className="relative z-10 flex flex-col flex-1 justify-between">
        <div>
          {/* Vendedor / Loja */}
          <div className="flex items-center gap-1.5 mb-1 text-[11px] sm:text-xs text-[#524410] font-semibold">
            <span className="truncate">{product.shopName || "Shopee Oficial"}</span>
          </div>

          {/* Nome do Produto */}
          <h3 className="text-gray-900 font-bold text-xs sm:text-sm line-clamp-2 leading-snug mb-1.5 min-h-[32px] sm:min-h-[38px]">
            {product.name}
          </h3>

          {/* Avaliação e Vendas (Prova Social) */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#3a2f06] mb-2">
            <span className="text-amber-600 font-bold">★ {product.rating?.toFixed(1) || "4.9"}</span>
            <span className="text-gray-500 text-[10px] sm:text-[11px]">({product.soldCount ? `${(product.soldCount / 1000).toFixed(0)}k+ vendidos` : "Bem avaliado"})</span>
          </div>
        </div>

        {/* Bloco de Preço */}
        <div className="mt-1">
          {formattedOriginalPrice && (
            <span className="text-[11px] sm:text-xs text-gray-500 line-through block">
              R$ {formattedOriginalPrice}
            </span>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-base sm:text-2xl font-black text-[#9e0606]">
              R$ {formattedPrice}
            </span>
          </div>
          <p className="text-[10px] sm:text-xs text-[#025a11] font-bold mt-0.5">
            em 3x de R$ {installments} sem juros
          </p>

          {/* Botão de Compra Direto */}
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 bg-[#025a11] hover:bg-[#037817] text-[#fffad1] font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all duration-200 active:scale-95"
          >
            <span>Ver na Shopee</span>
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}
