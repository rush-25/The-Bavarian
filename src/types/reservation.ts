export type SeatingArea =
  | 'Main Timber Hall'
  | 'The Bavarian Bar'
  | 'Outdoor Terrace';

export type PartySize =
  | '2 Guests'
  | '3–4 Guests'
  | '5–6 Guests'
  | '7–10 Guests'
  | '10+ Guests';

export interface ReservationFormData {
  guestName: string;
  guestPhone: string;
  partySize: PartySize;
  preferredDate: string;
  seatingArea: SeatingArea;
  specialNotes?: string;
}

