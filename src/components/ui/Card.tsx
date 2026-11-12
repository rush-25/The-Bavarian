import React, { useState } from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  enableTilt = false,
  onClick,
}) => {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, hovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: -(py - 0.5) * 12,
      ry: (px - 0.5) * 14,
      hovered: true,
    });
  };

  const handleMouseLeave = () => {
    if (!enableTilt) return;
    setTilt({ rx: 0, ry: 0, hovered: false });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={
        enableTilt
          ? {
              transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(${
                tilt.hovered ? '1.02, 1.02, 1.02' : '1, 1, 1'
              })`,
              transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1)',
            }
          : undefined
      }
      className={`rounded-3xl bg-[#141311] border border-[#C5A46D]/15 hover:border-[#C5A46D]/50 transition-all duration-300 ${
        enableTilt ? 'preserve-3d' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

