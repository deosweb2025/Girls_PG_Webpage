import { siteData } from '../data/siteData';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1B18] text-[#C9BFB5] pt-16 pb-12 border-t border-[#3A332C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#832B4C] to-[#4A1D2F] flex items-center justify-center text-white font-serif text-xl font-bold shadow-md">
                A
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-sans">
                Ajanta <span className="text-[#D48B68]">Ladies PG</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A89F95] leading-relaxed max-w-sm">
              A premier, safe, and modern residential sanctuary in New Town Kolkata offering fully furnished AC rooms, attached washrooms, and 4-time wholesome homely food.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Female-Guarded • Zero Brokerage</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Rooms & Rent
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-white transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-white transition-colors">
                  Food & Dining
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Tour
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Common FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Room Suites */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Room Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex flex-col">
                <span className="text-white font-semibold">Executive Single Suite</span>
                <span className="text-[11px] text-[#A89F95]">Private AC room with attached washroom</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold">Executive Double Sharing</span>
                <span className="text-[11px] text-[#A89F95]">Twin occupancy, personal wardrobes</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold">Comfort Triple Sharing</span>
                <span className="text-[11px] text-[#A89F95]">Affordable student & intern living</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Visiting Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Reach Management
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D48B68] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {siteData.location.building}, {siteData.location.street}, {siteData.location.landmark}, {siteData.location.junction}, Kolkata 700156
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D48B68] shrink-0" />
                <a href={`tel:${siteData.contact.phone}`} className="text-white font-bold hover:text-[#D48B68] transition-colors">
                  {siteData.contact.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={siteData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +91 {siteData.contact.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#D48B68] shrink-0" />
                <span className="text-[11px] text-[#A89F95]">
                  Visits: {siteData.contact.visitingHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Attribution & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C8379]">
          <div>
            <p>
              © {new Date().getFullYear()} {siteData.company.name}. All rights reserved.
            </p>
          </div>

          {/* Mandatory Attribution Link */}
          <div className="text-center md:text-right">
            <span>Designed & Developed by</span>
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#D48B68] transition-colors p-1"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

