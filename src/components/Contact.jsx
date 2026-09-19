import { useState } from 'react';
import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle,
  Building2,
  Navigation,
  ExternalLink,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const { location, contact, landmarks, faq } = siteData;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'Executive Double Sharing',
    moveInDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `New PG Inquiry from Website:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Preferred Room: ${formData.roomType}
- Tentative Move-in: ${formData.moveInDate || 'Immediate'}
- Message: ${formData.message || 'I would like to schedule a visit.'}`;

    const waLink = `https://wa.me/919433359907?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FDF9FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Section Heading */}
        <SectionHeading
          badge="LOCATION & DIRECT CONTACT"
          title="Visit Our Campus &"
          highlight="Connect Directly With Management"
          description="Located at Ajanta Building beside Chowman Restaurant, Biswa Bangla Gate. Schedule a physical walkthrough or book your room with 0% brokerage."
          className="mb-14"
        />

        {/* Main Grid: Direct Contact/Location Cards + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          
          {/* Left Column: Direct Call, WhatsApp, Address, and Landmarks */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Quick Contact Action Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call Card */}
              <a
                href={`tel:${contact.phone}`}
                className="p-5 rounded-2xl bg-white border border-[#F0E1E8] hover:border-[#832B4C] card-luxury-shadow hover:-translate-y-1.5 transition-all duration-300 group flex items-start gap-3.5 relative overflow-hidden"
              >
                {/* Glossy Crystal Sheen Sweep on Card Hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent card-shimmer-sweep opacity-0"></div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-[#FDF2F5] text-[#832B4C] flex items-center justify-center shrink-0 group-hover:bg-[#832B4C] group-hover:text-white transition-all duration-300 shadow-xs relative z-10">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#832B4C] block">
                    Direct Call
                  </span>
                  <span className="text-base font-extrabold text-[#1D1518] block mt-0.5">
                    {contact.displayPhone}
                  </span>
                  <span className="text-[11px] text-[#6B5B63] block mt-0.5">
                    Speak with warden
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-[#F0E1E8] hover:border-[#25D366] card-luxury-shadow hover:-translate-y-1.5 transition-all duration-300 group flex items-start gap-3.5 relative overflow-hidden"
              >
                {/* Glossy Crystal Sheen Sweep on Card Hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent card-shimmer-sweep opacity-0"></div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 shadow-xs relative z-10">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803D] block">
                    WhatsApp Chat
                  </span>
                  <span className="text-base font-extrabold text-[#1D1518] block mt-0.5">
                    +91 {contact.whatsapp}
                  </span>
                  <span className="text-[11px] text-[#6B5B63] block mt-0.5">
                    Instant availability
                  </span>
                </div>
              </a>
            </div>

            {/* Address & Timings Box */}
            <div className="p-6 rounded-3xl bg-white border border-[#F0E1E8] shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F5] text-[#832B4C] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#832B4C]">
                    Official Campus Address
                  </span>
                  <h4 className="text-base font-bold text-[#1D1518] mt-0.5">
                    {location.building}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C4C55] mt-1 leading-relaxed">
                    {location.fullAddress}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#F0E1E8] text-xs">
                <div className="flex items-center gap-2 text-[#5C4C55]">
                  <Building2 className="w-4 h-4 text-[#832B4C] shrink-0" />
                  <span><strong>Landmark:</strong> {location.landmark}</span>
                </div>
                <div className="flex items-center gap-2 text-[#5C4C55]">
                  <Clock className="w-4 h-4 text-[#832B4C] shrink-0" />
                  <span><strong>Visits:</strong> {contact.visitingHours}</span>
                </div>
              </div>
            </div>

            {/* Commute Times to Nearby Tech Hubs */}
            <div className="bg-white p-6 rounded-3xl border border-[#F0E1E8] shadow-xs">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#832B4C] mb-3">
                Nearby Hubs & Commute Times:
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {landmarks.slice(0, 6).map((lm, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-[#FDF2F5] border border-[#F0E1E8] text-xs">
                    <span className="font-bold text-[#1D1518] block truncate">
                      {lm.name}
                    </span>
                    <span className="text-[#832B4C] font-semibold block mt-0.5">
                      {lm.time} ({lm.distance})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zero Brokerage Assurance */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-900 text-xs font-bold">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Strict 0% Brokerage • 100% Direct Owner Transparency • No Hidden Costs</span>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#F0E1E8] shadow-xl p-7 sm:p-9">
            <h3 className="text-xl font-extrabold text-[#1D1518] mb-1">
              Send an Instant Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5B63] mb-6">
              Fill in your details to check real-time availability or book a physical walkthrough.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Redirecting your inquiry to WhatsApp... Our warden will respond immediately!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1D1518] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sneha Roy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F0E1E8] text-sm text-[#1D1518] focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1D1518] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F0E1E8] text-sm text-[#1D1518] focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1D1518] uppercase tracking-wider mb-1.5">
                    Preferred Room Type
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F0E1E8] text-sm text-[#1D1518] bg-white focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                  >
                    <option value="Single Private Suite">Single Private Suite</option>
                    <option value="Executive Double Sharing">Executive Double Sharing (Popular)</option>
                    <option value="Comfort Triple Sharing">Comfort Triple Sharing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1D1518] uppercase tracking-wider mb-1.5">
                    Approximate Move-In Date
                  </label>
                  <input
                    type="date"
                    value={formData.moveInDate}
                    onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F0E1E8] text-sm text-[#1D1518] bg-white focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1D1518] uppercase tracking-wider mb-1.5">
                  Questions or Requirements (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Need AC room, early morning tiffin, or planning to visit this weekend..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#F0E1E8] text-sm text-[#1D1518] focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#832B4C] via-[#9E355D] to-[#B44A70] hover:shadow-lg hover:shadow-[#832B4C]/25 transition-all active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </form>

          </div>

        </div>

        {/* Integrated Location Map Embed Section */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#F0E1E8] shadow-sm mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#832B4C]">
                Interactive Map & Directions
              </span>
              <h4 className="text-lg font-bold text-[#1D1518]">
                Find Us Beside Chowman at Biswa Bangla Gate
              </h4>
            </div>

            <a
              href={location.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#832B4C] hover:bg-[#6D233E] transition-colors shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-75" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#F0E1E8]">
            <iframe
              title="Ladies PG Biswa Bangla Gate Kolkata Map"
              src={location.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Integrated FAQ Accordion Section (No separate route) */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-[#F0E1E8]">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#832B4C]">
              Helpful Information
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#1D1518] mt-1">
              Common Questions Before Moving In
            </h4>
          </div>

          <div className="space-y-3">
            {faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#F0E1E8] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#1D1518] flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#832B4C] shrink-0" />
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#832B4C] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C4C55] leading-relaxed border-t border-[#F0E1E8] pt-3 pl-11">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
