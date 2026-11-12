import React from 'react';
import { BavarianCrestLogo } from './BavarianCrestLogo';

interface LoadingProps {
  label?: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  label = 'Loading...',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 space-y-4 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-[#C5A46D]/20 border-t-[#C5A46D] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <BavarianCrestLogo className="w-8 h-8 opacity-90 animate-pulse" />
        </div>
      </div>
      <p className="text-xs tracking-widest text-[#C5A46D] font-medium uppercase">
        {label}
      </p>
    </div>
  );
};

