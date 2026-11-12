import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  className = '',
  align = 'left',
}) => {
  return (
    <div
      className={`space-y-2 reveal-3d ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : ''
      } ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="w-6 h-[1px] bg-[#C5A46D]" />
        <span>{eyebrow}</span>
        {align === 'center' && <span className="w-6 h-[1px] bg-[#C5A46D]" />}
      </div>
      <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F2EAE0] font-normal leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-[#9E9589] max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

