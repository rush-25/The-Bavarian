import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../../utils/constants';

export interface ReservationSuccessProps {
  onClose: () => void;
  onReset: () => void;
}

export const ReservationSuccess: React.FC<ReservationSuccessProps> = ({
  onClose,
  onReset,
}) => {
  return (
    <div className="p-6 rounded-2xl bg-[#141311] border border-[#C5A46D]/35 text-center space-y-4">
      <CheckCircle2 className="w-10 h-10 text-[#C5A46D] mx-auto" />
      <h4 className="font-serif-display text-2xl text-[#F2EAE0]">
        Request Prepared
      </h4>
      <p className="text-xs sm:text-sm text-[#9E9589] leading-relaxed">
        Your email app has opened with your reservation details for{' '}
        <span className="text-[#F2EAE0]">{RESTAURANT_INFO.email}</span>.
      </p>
      <div className="flex justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => {
            onReset();
            onClose();
          }}
          className="px-6 py-2.5 min-h-[44px] rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider cursor-pointer hover:bg-[#F2EAE0] transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
};

