import { useState } from 'react';
import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';
import { Phone, MessageCircle, MapPin, Clock, Send, ShieldCheck, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'Executive Double Sharing',
    moveInDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

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

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F3EDE6]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="DIRECT BOOKINGS & VISITS"
          title="Connect Directly With Management —"
          highlight="Zero Brokerage"
          description="Schedule a physical walkthrough or lock in your room reservation today. We are available on call and WhatsApp all 7 days."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Call Card */}
            <a
              href={`tel:${siteData.contact.phone}`}
              className="block p-6 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#832B4C] hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#832B4C]/10 text-[#832B4C] flex items-center justify-center shrink-0 group-hover:bg-[#832B4C] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D48B68]">
                    Direct Warden Call
                  </span>
                  <h4 className="text-xl font-bold text-[#1E1B18] mt-0.5">
                    {siteData.contact.displayPhone}
                  </h4>
                  <p className="text-xs text-[#6B645C] mt-1">
                    Tap to speak directly with the on-site warden.
                  </p>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={siteData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#25D366] hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
                    Official WhatsApp
                  </span>
                  <h4 className="text-xl font-bold text-[#1E1B18] mt-0.5">
                    +91 {siteData.contact.whatsapp}
                  </h4>
                  <p className="text-xs text-[#6B645C] mt-1">
                    Instant response for room photos, rent quotes & video tours.
                  </p>
                </div>
              </div>
            </a>

            {/* Address & Timings Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8DFD5] space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#832B4C] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
                    Physical Location
                  </h5>
                  <p className="text-xs sm:text-sm text-[#5A534B] mt-0.5 leading-relaxed">
                    {siteData.location.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#F3EDE6]">
                <Clock className="w-5 h-5 text-[#832B4C] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
                    Visiting Hours
                  </h5>
                  <p className="text-xs sm:text-sm text-[#5A534B] mt-0.5">
                    {siteData.contact.visitingHours} (All 7 Days)
                  </p>
                </div>
              </div>
            </div>

            {/* Zero Brokerage Badge */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-900 text-xs font-bold">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Strict 0% Brokerage • 100% Direct Owner Transparency</span>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E8DFD5] shadow-xl p-7 sm:p-9">
            <h3 className="text-xl font-extrabold text-[#1E1B18] mb-1">
              Send an Instant Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#6B645C] mb-6">
              Fill in your details to check real-time availability or book a walkthrough.
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
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sneha Roy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider mb-1.5">
                    Preferred Room Type
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] text-sm text-[#1E1B18] bg-white focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                  >
                    <option value="Single Private Suite">Single Private Suite</option>
                    <option value="Executive Double Sharing">Executive Double Sharing (Popular)</option>
                    <option value="Comfort Triple Sharing">Comfort Triple Sharing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider mb-1.5">
                    Approximate Move-In Date
                  </label>
                  <input
                    type="date"
                    value={formData.moveInDate}
                    onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] text-sm text-[#1E1B18] bg-white focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider mb-1.5">
                  Questions or Requirements (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Need AC room, early morning tiffin, or planning to visit this weekend..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
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

      </div>
    </section>
  );
};

export default Contact;

