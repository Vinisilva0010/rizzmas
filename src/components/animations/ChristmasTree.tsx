import React from 'react';

interface ChristmasTreeProps {
  className?: string;
}

export default function ChristmasTree({ className = 'w-full max-w-[600px] h-auto' }: ChristmasTreeProps) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        className="anim-tree w-full h-full drop-shadow-2xl"
        viewBox="0 0 1200 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tronco */}
        <rect x="565" y="800" width="70" height="90" fill="#351400" stroke="#1d0a00" strokeWidth="4" rx="4" />

        {/* Galhos */}
        <polygon points="600,520 60,830 1140,830" fill="#025a11" stroke="#013f0c" strokeWidth="6" />
        <polygon points="600,340 180,610 1020,610" fill="#036a16" stroke="#013f0c" strokeWidth="6" />
        <polygon points="600,180 300,430 900,430" fill="#025a11" stroke="#013f0c" strokeWidth="6" />
        <polygon points="600,50 420,250 780,250" fill="#036a16" stroke="#013f0c" strokeWidth="6" />

        {/* Guirlandas Douradas */}
        <path d="M 450 230 Q 600 280 750 230" stroke="#fffad1" strokeWidth="7" fill="none" strokeDasharray="10,8" opacity="0.9" />
        <path d="M 330 400 Q 600 480 870 400" stroke="#fffad1" strokeWidth="8" fill="none" strokeDasharray="12,9" opacity="0.9" />
        <path d="M 220 580 Q 600 680 980 580" stroke="#fffad1" strokeWidth="9" fill="none" strokeDasharray="14,10" opacity="0.9" />
        <path d="M 100 800 Q 600 930 1100 800" stroke="#fffad1" strokeWidth="10" fill="none" strokeDasharray="16,12" opacity="0.9" />

        {/* Bolas / Luzes */}
        <circle cx="600" cy="130" r="16" fill="#9e0606" stroke="#fffad1" strokeWidth="3" className="anim-light-1" />
        <circle cx="510" cy="200" r="15" fill="#fffad1" className="anim-light-2" />
        <circle cx="690" cy="200" r="15" fill="#faf6f6" stroke="#9e0606" strokeWidth="3" className="anim-light-3" />

        <circle cx="410" cy="370" r="19" fill="#faf6f6" stroke="#fffad1" strokeWidth="3" className="anim-light-1" />
        <circle cx="530" cy="320" r="17" fill="#fffad1" className="anim-light-2" />
        <circle cx="670" cy="320" r="17" fill="#9e0606" stroke="#fffad1" strokeWidth="3" className="anim-light-3" />
        <circle cx="790" cy="370" r="19" fill="#fffad1" className="anim-light-1" />

        <circle cx="280" cy="560" r="22" fill="#9e0606" stroke="#fffad1" strokeWidth="4" className="anim-light-2" />
        <circle cx="470" cy="490" r="19" fill="#fffad1" className="anim-light-3" />
        <circle cx="600" cy="450" r="21" fill="#faf6f6" stroke="#9e0606" strokeWidth="3" className="anim-light-1" />
        <circle cx="730" cy="490" r="19" fill="#9e0606" stroke="#fffad1" strokeWidth="3" className="anim-light-2" />
        <circle cx="920" cy="560" r="22" fill="#fffad1" className="anim-light-3" />

        <circle cx="180" cy="780" r="25" fill="#fffad1" className="anim-light-1" />
        <circle cx="360" cy="700" r="22" fill="#faf6f6" stroke="#9e0606" strokeWidth="3" className="anim-light-2" />
        <circle cx="520" cy="660" r="20" fill="#9e0606" stroke="#fffad1" strokeWidth="3" className="anim-light-3" />
        <circle cx="680" cy="660" r="20" fill="#fffad1" className="anim-light-1" />
        <circle cx="840" cy="700" r="22" fill="#faf6f6" stroke="#9e0606" strokeWidth="3" className="anim-light-2" />
        <circle cx="1020" cy="780" r="25" fill="#9e0606" stroke="#fffad1" strokeWidth="3" className="anim-light-3" />

        {/* Estrela */}
        <polygon
          points="600,5 613,38 650,38 620,60 632,95 600,72 568,95 580,60 550,38 587,38"
          fill="#fffad1"
          stroke="#cfbe56"
          strokeWidth="3"
          className="anim-light-1"
        />

        {/* Presentes */}
        <rect x="330" y="820" width="130" height="95" rx="5" fill="#9e0606" stroke="#5a0202" strokeWidth="3" />
        <rect x="385" y="820" width="20" height="95" fill="#fffad1" />
        <rect x="330" y="860" width="130" height="20" fill="#fffad1" />
        <circle cx="385" cy="810" r="12" fill="none" stroke="#fffad1" strokeWidth="5" />
        <circle cx="405" cy="810" r="12" fill="none" stroke="#fffad1" strokeWidth="5" />

        <rect x="535" y="835" width="130" height="90" rx="5" fill="#faf6f6" stroke="#c4bebe" strokeWidth="3" />
        <rect x="590" y="835" width="20" height="90" fill="#9e0606" />
        <rect x="535" y="870" width="130" height="20" fill="#9e0606" />
        <circle cx="590" cy="825" r="11" fill="none" stroke="#9e0606" strokeWidth="5" />
        <circle cx="610" cy="825" r="11" fill="none" stroke="#9e0606" strokeWidth="5" />

        <rect x="735" y="810" width="120" height="110" rx="5" fill="#025a11" stroke="#01380b" strokeWidth="3" />
        <rect x="785" y="810" width="20" height="110" fill="#fffad1" />
        <rect x="735" y="855" width="120" height="20" fill="#fffad1" />
        <circle cx="785" cy="800" r="12" fill="none" stroke="#fffad1" strokeWidth="5" />
        <circle cx="805" cy="800" r="12" fill="none" stroke="#fffad1" strokeWidth="5" />

        <rect x="880" y="845" width="90" height="80" rx="4" fill="#fffad1" stroke="#cfbe56" strokeWidth="3" />
        <rect x="918" y="845" width="14" height="80" fill="#025a11" />
        <rect x="880" y="878" width="90" height="14" fill="#025a11" />
      </svg>
    </div>
  );
}
