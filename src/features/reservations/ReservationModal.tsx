import React, { useState } from 'react';
import { X, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../../utils/constants';
import { ReservationFormData } from '../../types/reservation';
import { ReservationForm } from './ReservationForm';
import { ReservationSuccess } from './ReservationSuccess';

export interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFormSubmit = (data: ReservationFormData) => {
    const subject = encodeURIComponent(
      `Table Reservation — ${data.guestName || 'Guest'} (${data.partySize})`
    );
    const body = encodeURIComponent(
      `Hello The Bavarian Team,\n\nI would like to reserve a table at The Bavarian (11 Galle Face Terrace, Colombo).\n\n` +
        `• Name: ${data.guestName || 'Not specified'}\n` +
        `• Phone: ${data.guestPhone || 'Not specified'}\n` +
        `• Party Size: ${data.partySize}\n` +
        `• Date / Time: ${data.preferredDate || 'Flexible'}\n` +
        `• Seating: ${data.seatingArea}\n` +
        `• Notes: ${data.specialNotes || 'None'}\n\n` +
        `Warm regards,\n${data.guestName || 'Guest'}`
    );
    const mailtoUrl = `mailto:${RESTAURANT_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <div
      className="animate-backdrop-fade fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/82 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a Table at The Bavarian"
    >
      <div
        className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl bg-[#1D1A17] border-t sm:border border-[#C5A46D]/40 p-5 sm:p-8 pb-7 sm:pb-8 shadow-[0_30px_90px_rgba(0,0,0,0.92)] max-h-[90dvh] overflow-y-auto animate-sheet-up sm:animate-modal-3d"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Bottom-Sheet Pill Indicator */}
        <div className="sm:hidden w-10 h-1 rounded-full bg-[#F2EAE0]/25 mx-auto mb-4" />

        <button
          type="button"
          onClick={onClose}
          className="touch-press absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-[#141311] border border-[#C5A46D]/30 text-[#F2EAE0] hover:text-[#C5A46D] flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 mb-5 sm:mb-6 pr-10">
          <div className="text-xs tracking-wider text-[#C5A46D] font-medium">
            11 Galle Face Terrace · Colombo
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F2EAE0]">
            Reserve a Table
          </h3>
        </div>

        {/* Instant Call Strip */}
        <div className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-2xl bg-[#141311] border border-[#C5A46D]/25 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-[#9E9589]">Instant Confirmation</div>
            <div className="font-serif-display text-base sm:text-lg text-[#F2EAE0]">
              {RESTAURANT_INFO.phoneDisplay}
            </div>
          </div>
          <a
            href={RESTAURANT_INFO.phoneHref}
            className="touch-press inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[40px] rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>
        </div>

        {submitted ? (
          <ReservationSuccess
            onClose={onClose}
            onReset={() => setSubmitted(false)}
          />
        ) : (
          <ReservationForm onSubmit={handleFormSubmit} />
        )}
      </div>
    </div>
  );
};
