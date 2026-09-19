import { siteData } from '../data/siteData';
import { Phone, MessageCircle, MessageSquare } from 'lucide-react';

const FloatingActionButtons = () => {
  return (
    <aside
      aria-label="Quick contact floating actions"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Floating WhatsApp / Chat Button */}
      <a
        href={siteData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ladies PG on WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-[#25D366]/50"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
        {/* Mobile: Clean Message Icon */}
        <MessageSquare className="w-5 h-5 sm:hidden shrink-0" />
        {/* Desktop: WhatsApp Icon */}
        <MessageCircle className="hidden sm:block w-5 h-5 shrink-0" />
        <span className="hidden sm:inline-block text-xs font-extrabold tracking-wide uppercase">
          WhatsApp
        </span>
      </a>

      {/* Floating Call Button */}
      <a
        href={`tel:${siteData.contact.phone}`}
        aria-label={`Call Ladies PG at ${siteData.contact.displayPhone}`}
        className="pointer-events-auto group relative flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3 rounded-full bg-[#832B4C] text-white shadow-xl shadow-[#832B4C]/35 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-[#832B4C]/50"
      >
        <span className="absolute -inset-1 rounded-full bg-[#832B4C] opacity-25 animate-pulse pointer-events-none"></span>
        <Phone className="w-5 h-5 sm:w-5 sm:h-5 shrink-0" />
        <span className="hidden sm:inline-block text-xs font-extrabold tracking-wide uppercase">
          Call Now
        </span>
      </a>
    </aside>
  );
};

export default FloatingActionButtons;

