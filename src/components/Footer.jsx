import { siteData } from '../data/siteData';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D1518] text-[#D8CAD2] pt-16 pb-12 border-t border-[#36232B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#832B4C] to-[#4A1D2F] flex items-center justify-center text-white font-serif text-xl font-bold shadow-md">
                L
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-sans">
                Ladies <span className="text-[#B44A70]">PG</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#B49EAA] leading-relaxed max-w-sm">
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
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Facilities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Core Facilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B44A70]"></span>
                <span className="text-white">4-Time Homely Fresh Meals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B44A70]"></span>
                <span className="text-white">24/7 CCTV & Female Warden</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B44A70]"></span>
                <span className="text-white">High-Speed Wi-Fi & Power Backup</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B44A70]"></span>
                <span className="text-white">Attached Washrooms with Geyser</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B44A70]"></span>
                <span className="text-white">Automatic Laundry & Housekeeping</span>
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
                <MapPin className="w-4 h-4 text-[#B44A70] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {siteData.location.building}, {siteData.location.street}, {siteData.location.landmark}, {siteData.location.junction}, Kolkata 700156
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B44A70] shrink-0" />
                <a href={`tel:${siteData.contact.phone}`} className="text-white font-bold hover:text-[#B44A70] transition-colors">
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
                <Clock className="w-4 h-4 text-[#B44A70] shrink-0" />
                <span className="text-[11px] text-[#B49EAA]">
                  Visits: {siteData.contact.visitingHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Attribution & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9B8892]">
          <div>
            <p>
              © {new Date().getFullYear()} {siteData.company.name}. 
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
              className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#B44A70] transition-colors p-1"
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

