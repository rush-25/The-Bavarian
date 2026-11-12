import React from 'react';
import bavarianLogo from '../../assets/images/bavarian-logo.webp';

interface BavarianCrestLogoProps {
  className?: string;
}

export const BavarianCrestLogo: React.FC<BavarianCrestLogoProps> = ({
  className = 'w-10 h-10',
}) => {
  return (
    <div
      className={`relative rounded-full bg-[#EFEBD6] border border-[#C5A46D]/55 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(197,164,109,0.2)] overflow-hidden ${className}`}
    >
      <img
        src={bavarianLogo}
        alt="The Bavarian German Restaurant & Pub — Since 1983"
        className="w-full h-full object-cover scale-110"
      />
    </div>
  );
};

