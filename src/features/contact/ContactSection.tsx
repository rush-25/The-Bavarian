import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  ExternalLink,
  CalendarCheck,
  ShoppingBag,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../../utils/constants';
import { BavarianCrestLogo } from '../../components/common/BavarianCrestLogo';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export interface ContactSectionProps {
  onOpenReservation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-32 bg-[#141311] overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full bg-[#542B32]/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full bg-[#344237]/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 reveal-3d">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span>Visit Us</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F2EAE0] font-normal">
              Your Table Awaits.
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenReservation}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 min-h-[44px] rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-all duration-300 shadow-[0_10px_30px_rgba(197,164,109,0.28)] cursor-pointer self-stretch sm:self-end"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Reserve a Table</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch reveal-3d">
          {/* Left Column: Clean Contact Details Card */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-[#1D1A17] border border-[#C5A46D]/25 p-5 sm:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.75)] space-y-6 sm:space-y-7">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3.5 sm:gap-4 pb-5 sm:pb-6 border-b border-[#C5A46D]/15">
                <BavarianCrestLogo className="w-12 h-12 sm:w-13 sm:h-13" />
                <div>
                  <div className="text-xs text-[#C5A46D]">Est. 1983 · Colombo</div>
                  <h3 className="font-serif-display text-xl sm:text-2xl text-[#F2EAE0]">
                    {RESTAURANT_INFO.name}
                  </h3>
                </div>
              </div>

              {/* Clean Contact Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#141311]/85 border border-[#C5A46D]/15 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#C5A46D]">
                    <MapPin className="w-4 h-4" />
                    <span>Location</span>
                  </div>
                  <address className="not-italic font-serif-display text-base sm:text-lg text-[#F2EAE0] leading-snug">
                    {RESTAURANT_INFO.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#141311]/85 border border-[#C5A46D]/15 space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#C5A46D] mb-0.5">
                      <Phone className="w-4 h-4" />
                      <span>Direct Line</span>
                    </div>
                    <a
                      href={RESTAURANT_INFO.phoneHref}
                      className="font-serif-display text-lg sm:text-xl text-[#F2EAE0] hover:text-[#C5A46D] transition-colors"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-[#C5A46D]/10">
                    <div className="flex items-center gap-2 text-xs text-[#C5A46D] mb-0.5">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </div>
                    <a
                      href={RESTAURANT_INFO.emailHref}
                      className="text-xs text-[#F2EAE0] hover:text-[#C5A46D] break-all transition-colors"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <a
                  href={RESTAURANT_INFO.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 min-h-[44px] rounded-2xl bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>

                <a
                  href={RESTAURANT_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 min-h-[44px] rounded-2xl bg-[#141311] border border-[#C5A46D]/35 text-[#F2EAE0] hover:border-[#C5A46D] hover:text-[#C5A46D] text-xs font-semibold tracking-wider transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={RESTAURANT_INFO.emailHref}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 min-h-[44px] rounded-2xl bg-[#141311] border border-[#C5A46D]/35 text-[#F2EAE0] hover:border-[#C5A46D] hover:text-[#C5A46D] text-xs font-semibold tracking-wider transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Social & Delivery Links — Stacks cleanly on narrow mobile, 3-col on sm+ */}
            <div className="pt-5 border-t border-[#C5A46D]/15 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={RESTAURANT_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-2xl bg-[#141311] border border-[#C5A46D]/15 hover:border-[#C5A46D]/55 text-xs text-[#F2EAE0] transition-all group"
              >
                <span className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-[#C5A46D]" />
                  <span>Instagram</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9E9589] group-hover:text-[#C5A46D]" />
              </a>

              <a
                href={RESTAURANT_INFO.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-2xl bg-[#141311] border border-[#C5A46D]/15 hover:border-[#C5A46D]/55 text-xs text-[#F2EAE0] transition-all group"
              >
                <span className="flex items-center gap-2">
                  <FacebookIcon className="w-4 h-4 text-[#C5A46D]" />
                  <span>Facebook</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9E9589] group-hover:text-[#C5A46D]" />
              </a>

              <a
                href={RESTAURANT_INFO.links.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 min-h-[44px] rounded-2xl bg-[#344237]/70 border border-[#C5A46D]/30 hover:border-[#C5A46D] text-xs text-[#F2EAE0] transition-all group"
              >
                <span className="flex items-center gap-2 font-medium">
                  <ShoppingBag className="w-4 h-4 text-[#C5A46D]" />
                  <span>Uber Eats</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A46D]" />
              </a>
            </div>
          </div>

          {/* Right Column: Dark-Tinted Google Map */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-[#1D1A17] border border-[#C5A46D]/25 shadow-[0_25px_70px_rgba(0,0,0,0.75)]">
            <div className="relative w-full h-[380px] sm:h-[430px] lg:h-full min-h-[380px] bg-[#141311]">
              <iframe
                title="The Bavarian German Restaurant & Pub — 11 Galle Face Terrace, Colombo"
                src="https://www.google.com/maps?q=The+Bavarian+German+Restaurant+and+pub+11+Galle+Face+Terrace+Colombo+Sri+Lanka&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 invert-[0.88] hue-rotate-180 opacity-85"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#C5A46D]/10 mix-blend-overlay" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-2xl bg-[#141311]/92 backdrop-blur-xl border border-[#C5A46D]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 shadow-2xl">
                <div>
                  <div className="font-serif-display text-base sm:text-lg text-[#F2EAE0]">
                    11 Galle Face Terrace, Colombo
                  </div>
                  <p className="text-xs text-[#9E9589]">
                    Call {RESTAURANT_INFO.phoneDisplay} to confirm today&apos;s hours
                  </p>
                </div>

                <a
                  href={RESTAURANT_INFO.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[40px] rounded-xl bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

