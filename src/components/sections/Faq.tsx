"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona a seleção dos produtos?",
    answer:
      "Nosso sistema monitora continuamente o catálogo da Shopee por meio de automações dedicadas. O algoritmo filtra apenas vendedores com reputação comprovada, alto volume de vendas, avaliações positivas acima de 4.7 estrelas e descontos reais aplicados. Quando uma oferta qualificada é identificada, ela é cadastrada e exibida instantaneamente aqui.",
  },
  {
    question: "O pagamento é feito por aqui?",
    answer:
      "Não. Por motivos de segurança e proteção aos seus dados, nenhum pagamento é processado neste site. Ao clicar em qualquer presente ou produto, você é redirecionado diretamente para o aplicativo ou site oficial da Shopee, onde realiza a compra com a garantia de entrega da plataforma, cupons oficiais e suporte oficial.",
  },
  {
    question: "Os preços e descontos são atualizados em tempo real?",
    answer:
      "Sim. As ofertas são sincronizadas com frequência para garantir que você veja os valores promocionais ativos, cupons vigentes e o estoque real disponível nas lojas oficiais parceiras.",
  },
  {
    question: "Tenho garantia de entrega e reembolso?",
    answer:
      "Sim. Como toda a transação ocorre diretamente no ecossistema da Shopee, você conta integralmente com a Garantia Shopee: seu pagamento só é liberado ao vendedor após você receber o produto em casa e confirmar que está tudo correto.",
  },
  {
    question: "Como utilizo cupons de frete grátis e desconto?",
    answer:
      "Ao clicar no botão de compra do produto, você acessa a página do item na Shopee. Caso você tenha cupons de frete ou de desconto disponíveis na sua conta da Shopee, basta selecioná-los normalmente na tela de finalização do pedido.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
      {/* Cabeçalho do FAQ */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#025a11] border border-[#fffad1]/40 text-[#fffad1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-md">
          🛡️ Transparência e Segurança
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#faf6f6] drop-shadow-md">
          Perguntas <span className="text-[#fffad1]">Frequentes</span>
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#faf6f6]/90 max-w-lg mx-auto">
          Tire suas dúvidas sobre o funcionamento da curadoria automatizada e a segurança das suas compras.
        </p>
      </div>

      {/* Lista de Acordeão */}
      <div className="flex flex-col gap-3.5">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-[#680303] border-[#fffad1] shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                  : "bg-[#7e0404]/80 border-[#fffad1]/30 hover:border-[#fffad1]/70"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left gap-4 focus:outline-none"
              >
                <span className="text-sm sm:text-base font-bold text-[#faf6f6]">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm transition-transform duration-200 ${
                    isOpen
                      ? "bg-[#fffad1] text-[#9e0606] rotate-180"
                      : "bg-[#025a11] text-[#fffad1]"
                  }`}
                >
                  ↓
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#fffad1]/95 leading-relaxed border-t border-[#fffad1]/15">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
