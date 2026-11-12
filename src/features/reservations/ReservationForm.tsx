import React, { useState } from 'react';
import { Mail, Users, Calendar } from 'lucide-react';
import { PartySize, ReservationFormData, SeatingArea } from '../../types/reservation';

export interface ReservationFormProps {
  onSubmit: (data: ReservationFormData) => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [partySize, setPartySize] = useState<PartySize>('2 Guests');
  const [preferredDate, setPreferredDate] = useState('');
  const [seatingArea, setSeatingArea] = useState<SeatingArea>('Main Timber Hall');
  const [specialNotes, setSpecialNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      guestName,
      guestPhone,
      partySize,
      preferredDate,
      seatingArea,
      specialNotes,
    });
  };

  return (
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
            className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
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
            className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
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
            onChange={(e) => setPartySize(e.target.value as PartySize)}
            className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
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
            className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          {(['Main Timber Hall', 'The Bavarian Bar', 'Outdoor Terrace'] as SeatingArea[]).map((area) => (
            <button
              key={area}
              type="button"
              role="radio"
              aria-checked={seatingArea === area}
              onClick={() => setSeatingArea(area)}
              className={`py-2.5 px-3 min-h-[42px] rounded-xl text-xs border transition-all cursor-pointer ${
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
          className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] focus:outline-none focus:border-[#C5A46D]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 min-h-[48px] rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
      >
        <Mail className="w-4 h-4" />
        <span>Send Reservation Request</span>
      </button>
    </form>
  );
};

