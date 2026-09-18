import { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rooms & Rates', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Food & Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD5]/80 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#832B4C] rounded-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#832B4C] to-[#4A1D2F] flex items-center justify-center text-white font-serif text-xl font-bold shadow-md group-hover:scale-105 transition-transform duration-200">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#1E1B18] font-sans flex items-center gap-1.5">
                  Ajanta <span className="text-[#832B4C]">Ladies PG</span>
                </span>
                <span className="text-[11px] font-semibold text-[#6B645C] flex items-center gap-1 tracking-wide">
                  <MapPin className="w-3 h-3 text-[#D48B68]" />
                  Biswa Bangla Gate, New Town
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-[#4A443E] hover:text-[#832B4C] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#832B4C] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-[#1E1B18] bg-[#FAF7F4] border border-[#E8DFD5] hover:border-[#832B4C] hover:text-[#832B4C] transition-all"
                title="Call Warden Directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#832B4C]" />
                <span>{siteData.contact.displayPhone}</span>
              </a>

              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#832B4C] to-[#B44A70] hover:shadow-md hover:shadow-[#832B4C]/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="p-2 text-[#832B4C] bg-[#832B4C]/10 rounded-lg sm:hidden"
                aria-label="Call directly"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#1E1B18] hover:bg-[#F3EDE6] focus:outline-none focus:ring-2 focus:ring-[#832B4C]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#832B4C] flex items-center justify-center text-white font-serif font-bold text-sm">
                      A
                    </div>
                    <span className="font-bold text-base text-[#1E1B18]">
                      Ajanta Ladies PG
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#6B645C] hover:text-[#1E1B18] rounded-lg"
                    aria-label="Close Navigation"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-2 text-[11px] text-[#059669] font-bold flex items-center gap-1.5 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Female-Guarded • 0% Brokerage
                </div>

                {/* Mobile Links */}
                <nav className="mt-4 flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#1E1B18] hover:bg-[#FAF7F4] hover:text-[#832B4C] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer Bottom CTAs */}
              <div className="pt-6 border-t border-[#E8DFD5] space-y-3">
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-[#FAF7F4] border border-[#E8DFD5] text-[#1E1B18]"
                >
                  <Phone className="w-4 h-4 text-[#832B4C]" />
                  <span>Call {siteData.contact.displayPhone}</span>
                </a>

                <a
                  href={siteData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#832B4C] to-[#B44A70] shadow-md shadow-[#832B4C]/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <p className="text-center text-xs text-[#6B645C] pt-2">
                  📍 Ajanta Building, Biswa Bangla Gate
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

