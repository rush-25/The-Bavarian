import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  maxWidth = 'lg',
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }[maxWidth];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/82 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Dialog'}
    >
      <div
        className={`relative w-full ${maxWidthClass} rounded-3xl bg-[#1D1A17] border border-[#C5A46D]/40 p-5 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.92)] max-h-[90dvh] overflow-y-auto animate-modal-3d ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-[#141311] border border-[#C5A46D]/30 text-[#F2EAE0] hover:text-[#C5A46D] flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {title && (
          <div className="mb-5 sm:mb-6 pr-10">
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F2EAE0]">
              {title}
            </h3>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

