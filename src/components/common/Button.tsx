import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold tracking-wider rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 min-h-[38px] gap-1.5',
    md: 'text-xs px-5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-sm px-7 py-3.5 sm:py-4 min-h-[48px] gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#C5A46D] text-[#141311] hover:bg-[#F2EAE0] shadow-[0_10px_30px_rgba(197,164,109,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    secondary:
      'bg-[#1D1A17]/85 text-[#F2EAE0] border border-[#C5A46D]/30 hover:border-[#C5A46D] hover:bg-[#2A241E] hover:-translate-y-0.5',
    outline:
      'bg-transparent text-[#F2EAE0] border border-[#C5A46D]/35 hover:border-[#C5A46D] hover:text-[#C5A46D]',
    ghost:
      'bg-transparent text-[#9E9589] hover:text-[#F2EAE0] hover:bg-[#1D1A17]/60',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

