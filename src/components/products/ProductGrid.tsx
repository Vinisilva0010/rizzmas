"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCategory } from "@/types/product";
import ProductCard from "./ProductCard";

const CATEGORIES: { label: string; value: ProductCategory | "todas" }[] = [
  { label: "Todos os Presentes 🎁", value: "todas" },
  { label: "Árvores 🎄", value: "arvores" },
  { label: "Iluminação ✨", value: "iluminacao" },
  { label: "Decoração 🔔", value: "decoracao" },
  { label: "Guirlandas 🎀", value: "guirlandas" },
  { label: "Presentes 🎅", value: "presentes" },
];

export default function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "todas">("todas");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (!p.active) return false;
      const matchesCategory = selectedCategory === "todas" || p.category === selectedCategory;
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        term === "" ||
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.tags.some((t) => t.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="vitrine" className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 z-10">
      
      {/* Cabeçalho da Vitrine */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#faf6f6] drop-shadow-md">
          Caixas de Presentes <span className="text-[#fffad1]">Shopee</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#faf6f6]/90 max-w-xl mx-auto">
          Clique no presente para conferir os descontos e avaliações direto no vendedor oficial.
        </p>
      </div>

      {/* Barra de Busca Ágil */}
      <div className="max-w-xl mx-auto mb-6 px-1">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por árvore, pisca-pisca, guirlanda..."
            className="w-full py-3 pl-11 pr-4 bg-[#faf6f6] text-gray-900 placeholder-gray-500 font-medium rounded-2xl border-2 border-[#fffad1] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#025a11]"
          />
          <svg
            className="absolute left-4 w-5 h-5 text-gray-500 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 text-xs font-bold text-gray-500 hover:text-gray-900 bg-gray-200 px-2 py-1 rounded-full"
            >
              Limpar
            </button>
          )}
        </div>
      </div>

      {/* Filtros em Pílulas de Navegação Rápida (com scroll horizontal em mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar justify-start sm:justify-center px-1">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                isActive
                  ? "bg-[#fffad1] text-[#9e0606] border-[#e2d075] shadow-md scale-105"
                  : "bg-[#720404]/80 text-[#faf6f6] border-[#fffad1]/30 hover:bg-[#860505]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid de Presentes: 2 colunas no celular (estilo Mercado Livre) e até 4 no PC */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#720404]/40 rounded-3xl border-2 border-[#fffad1]/20">
          <p className="text-lg text-[#faf6f6] font-bold">Nenhum presente encontrado com esse nome.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("todas");
            }}
            className="mt-4 px-6 py-2 bg-[#025a11] text-[#fffad1] font-bold rounded-xl text-sm"
          >
            Ver todos os presentes
          </button>
        </div>
      )}

    </section>
  );
}
