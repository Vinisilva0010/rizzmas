import React from 'react';

export default function BackgroundDecorations() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7a0303] via-[#9e0606] to-[#4a0101]" />

      {/* Brilho radial no topo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#fffad1]/10 blur-[130px] rounded-full" />

      {/* Camada 1: Flocos médios rápidos */}
      <svg className="anim-snow-layer1 absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4%" cy="5%" r="3.5" fill="#faf6f6" opacity="0.85" />
        <circle cx="12%" cy="18%" r="3" fill="#faf6f6" opacity="0.7" />
        <circle cx="21%" cy="8%" r="4" fill="#faf6f6" opacity="0.9" />
        <circle cx="29%" cy="25%" r="3" fill="#faf6f6" opacity="0.75" />
        <circle cx="38%" cy="12%" r="4.5" fill="#faf6f6" opacity="0.85" />
        <circle cx="47%" cy="22%" r="3" fill="#faf6f6" opacity="0.65" />
        <circle cx="56%" cy="6%" r="4" fill="#faf6f6" opacity="0.9" />
        <circle cx="64%" cy="28%" r="3.5" fill="#faf6f6" opacity="0.75" />
        <circle cx="73%" cy="14%" r="4" fill="#faf6f6" opacity="0.85" />
        <circle cx="82%" cy="24%" r="3" fill="#faf6f6" opacity="0.7" />
        <circle cx="91%" cy="9%" r="4" fill="#faf6f6" opacity="0.9" />
        <circle cx="97%" cy="20%" r="3.5" fill="#faf6f6" opacity="0.8" />
      </svg>

      {/* Camada 2: Flocos finos em profundidade */}
      <svg className="anim-snow-layer2 absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2%" cy="45%" r="2" fill="#faf6f6" opacity="0.5" />
        <circle cx="9%" cy="70%" r="2.5" fill="#faf6f6" opacity="0.6" />
        <circle cx="17%" cy="52%" r="2" fill="#faf6f6" opacity="0.55" />
        <circle cx="26%" cy="82%" r="2.5" fill="#faf6f6" opacity="0.65" />
        <circle cx="34%" cy="40%" r="2" fill="#faf6f6" opacity="0.5" />
        <circle cx="43%" cy="75%" r="2.5" fill="#faf6f6" opacity="0.6" />
        <circle cx="52%" cy="58%" r="2" fill="#faf6f6" opacity="0.55" />
        <circle cx="61%" cy="88%" r="2.5" fill="#faf6f6" opacity="0.65" />
        <circle cx="69%" cy="46%" r="2" fill="#faf6f6" opacity="0.5" />
        <circle cx="78%" cy="72%" r="2.5" fill="#faf6f6" opacity="0.6" />
        <circle cx="87%" cy="54%" r="2" fill="#faf6f6" opacity="0.55" />
        <circle cx="95%" cy="84%" r="2.5" fill="#faf6f6" opacity="0.6" />
      </svg>

      {/* Camada 3: Flocos rápidos mais cheios (primeiro plano) */}
      <svg className="anim-snow-layer3 absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6%" cy="30%" r="4.5" fill="#faf6f6" opacity="0.95" />
        <circle cx="15%" cy="60%" r="5" fill="#faf6f6" opacity="0.9" />
        <circle cx="24%" cy="35%" r="4" fill="#faf6f6" opacity="0.85" />
        <circle cx="33%" cy="65%" r="5" fill="#faf6f6" opacity="0.9" />
        <circle cx="42%" cy="32%" r="4.5" fill="#faf6f6" opacity="0.95" />
        <circle cx="51%" cy="68%" r="4" fill="#faf6f6" opacity="0.85" />
        <circle cx="60%" cy="38%" r="5" fill="#faf6f6" opacity="0.9" />
        <circle cx="70%" cy="62%" r="4.5" fill="#faf6f6" opacity="0.95" />
        <circle cx="80%" cy="34%" r="4" fill="#faf6f6" opacity="0.85" />
        <circle cx="89%" cy="66%" r="5" fill="#faf6f6" opacity="0.9" />
        <circle cx="98%" cy="40%" r="4" fill="#faf6f6" opacity="0.85" />
      </svg>

      {/* Camada 4: Flocos intermediários espalhados */}
      <svg className="anim-snow-layer4 absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7%" cy="80%" r="3" fill="#faf6f6" opacity="0.7" />
        <circle cx="19%" cy="92%" r="3.5" fill="#faf6f6" opacity="0.8" />
        <circle cx="31%" cy="78%" r="3" fill="#faf6f6" opacity="0.75" />
        <circle cx="45%" cy="95%" r="3.5" fill="#faf6f6" opacity="0.8" />
        <circle cx="58%" cy="82%" r="3" fill="#faf6f6" opacity="0.7" />
        <circle cx="72%" cy="90%" r="3.5" fill="#faf6f6" opacity="0.75" />
        <circle cx="85%" cy="85%" r="3" fill="#faf6f6" opacity="0.8" />
        <circle cx="94%" cy="96%" r="3" fill="#faf6f6" opacity="0.7" />
      </svg>
    </div>
  );
}
