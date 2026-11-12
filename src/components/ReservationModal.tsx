import React, { useState } from 'react';
import { X, Phone, Mail, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/bavarianData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [partySize, setPartySize] = useState('2 Guests');
  const [preferredDate, setPreferredDate] = useState('');
  const [seatingArea, setSeatingArea] = useState('Main Timber Hall');
  const [specialNotes, setSpecialNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const composeMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Table Reservation — ${guestName || 'Guest'} (${partySize})`
    );
    const body = encodeURIComponent(
      `Hello The Bavarian Team,\n\nI would like to reserve a table at The Bavarian (11 Galle Face Terrace, Colombo).\n\n` +
        `• Name: ${guestName || 'Not specified'}\n` +
        `• Phone: ${guestPhone || 'Not specified'}\n` +
        `• Party Size: ${partySize}\n` +
        `• Date / Time: ${preferredDate || 'Flexible'}\n` +
        `• Seating: ${seatingArea}\n` +
        `• Notes: ${specialNotes || 'None'}\n\n` +
        `Warm regards,\n${guestName || 'Guest'}`
    );
    return `mailto:${RESTAURANT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = composeMailtoUrl();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/82 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a Table at The Bavarian"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#1D1A17] border border-[#C5A46D]/40 p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.92)] max-h-[92vh] overflow-y-auto animate-modal-3d"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#141311] border border-[#C5A46D]/30 text-[#F2EAE0] hover:text-[#C5A46D] flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 mb-6">
          <div className="text-xs tracking-wider text-[#C5A46D] font-medium">
            11 Galle Face Terrace · Colombo
          </div>
          <h3 className="font-serif-display text-3xl text-[#F2EAE0]">Reserve a Table</h3>
        </div>

        {/* Instant Call Strip */}
        <div className="mb-6 p-4 rounded-2xl bg-[#141311] border border-[#C5A46D]/25 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-[#9E9589]">Instant Confirmation</div>
            <div className="font-serif-display text-lg text-[#F2EAE0]">
              {RESTAURANT_INFO.phoneDisplay}
            </div>
          </div>
          <a
            href={RESTAURANT_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>
        </div>

        {submitted ? (
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
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label
                  htmlFor="reservation-guest-name"
                  className="block text-xs text-[#9E9589] mb-1.5"
                >
                  Name
                </label>
                <input
                  id="reservation-guest-name"
                  name="guestName"
                  type="text"
                  autoComplete="name"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
                />
              </div>
              <div>
                <label
                  htmlFor="reservation-guest-phone"
                  className="block text-xs text-[#9E9589] mb-1.5"
                >
                  Phone
                </label>
                <input
                  id="reservation-guest-phone"
                  name="guestPhone"
                  type="tel"
                  autoComplete="tel"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="+94 77 ..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label
                  htmlFor="reservation-party-size"
                  className="block text-xs text-[#9E9589] mb-1.5"
                >
                  <Users className="w-3.5 h-3.5 inline mr-1 text-[#C5A46D]" />
                  Guests
                </label>
                <select
                  id="reservation-party-size"
                  name="partySize"
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
                >
                  <option>2 Guests</option>
                  <option>3–4 Guests</option>
                  <option>5–6 Guests</option>
                  <option>7–10 Guests</option>
                  <option>10+ Guests</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="reservation-preferred-date"
                  className="block text-xs text-[#9E9589] mb-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#C5A46D]" />
                  Date &amp; Time
                </label>
                <input
                  id="reservation-preferred-date"
                  name="preferredDate"
                  type="text"
                  autoComplete="off"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  placeholder="e.g. Friday, 7:30 PM"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
                />
              </div>
            </div>

            <div>
              <span
                id="reservation-atmosphere-label"
                className="block text-xs text-[#9E9589] mb-1.5"
              >
                Seating Area
              </span>
              <div
                role="radiogroup"
                aria-labelledby="reservation-atmosphere-label"
                className="grid grid-cols-3 gap-2"
              >
                {['Main Timber Hall', 'The Bavarian Bar', 'Outdoor Terrace'].map((area) => (
                  <button
                    key={area}
                    type="button"
                    role="radio"
                    aria-checked={seatingArea === area}
                    onClick={() => setSeatingArea(area)}
                    className={`py-2 px-2.5 rounded-xl text-xs border transition-all cursor-pointer ${
                      seatingArea === area
                        ? 'bg-[#C5A46D] text-[#141311] border-[#C5A46D] font-semibold'
                        : 'bg-[#141311] text-[#9E9589] border-[#C5A46D]/20 hover:text-[#F2EAE0]'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="reservation-special-notes"
                className="block text-xs text-[#9E9589] mb-1.5"
              >
                Notes (Optional)
              </label>
              <input
                id="reservation-special-notes"
                name="specialNotes"
                type="text"
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                placeholder="Special requests..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Send Reservation Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
