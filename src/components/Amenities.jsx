import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';
import {
  Utensils,
  ShieldCheck,
  Wifi,
  Sparkles,
  Zap,
  ShowerHead,
  WashingMachine,
  Droplets,
  BookOpen,
} from 'lucide-react';

const iconMap = {
  Utensils,
  ShieldCheck,
  Wifi,
  Sparkles,
  Zap,
  ShowerHead,
  WashingMachine,
  Droplets,
  BookOpen,
};

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="PREMIUM RESIDENTIAL FACILITIES"
          title="Designed for Total Peace of Mind &"
          highlight="Uncompromised Comfort"
          description="Everything a modern independent woman requires to thrive in Kolkata — from high-speed connectivity and power backup to hygienic dining and robust multi-layer security."
          className="mb-14"
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.amenities.map((amenity, idx) => {
            const Icon = iconMap[amenity.icon] || Sparkles;
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={idx}
                className={`rounded-3xl p-7 transition-all duration-300 group relative border overflow-hidden card-luxury-shadow hover:-translate-y-1.5 cursor-pointer ${
                  isFeatured
                    ? 'bg-gradient-to-br from-white via-white to-[#FDF2F5] border-[#F0E1E8] shadow-lg md:col-span-2 lg:col-span-1'
                    : 'bg-white border-[#F0E1E8] hover:border-[#832B4C]/50'
                }`}
              >
                {/* Glossy Crystal Sheen Sweep on Card Hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent card-shimmer-sweep opacity-0"></div>
                </div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF2F5] text-[#832B4C] flex items-center justify-center group-hover:bg-[#832B4C] group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#FDF2F5] border border-[#F0DEE7] text-[#832B4C] tracking-wide">
                    {amenity.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1D1518] mb-2 group-hover:text-[#832B4C] transition-colors relative z-10">
                  {amenity.title}
                </h3>

                <p className="text-sm text-[#6B5B63] leading-relaxed relative z-10">
                  {amenity.desc}
                </p>

                <div className="mt-5 pt-3 border-t border-[#F0E1E8] flex items-center text-xs font-semibold text-[#832B4C] opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                  <span>Guaranteed Included &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner at the bottom */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#4A1D2F] via-[#832B4C] to-[#4A1D2F] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-200">
              Zero Compromise on Hygiene
            </span>
            <h4 className="text-xl sm:text-2xl font-bold mt-1">
              Have Specific Dietary or Work-From-Home Needs?
            </h4>
            <p className="text-sm text-rose-100 mt-1.5 leading-relaxed">
              We cater to tiffin packing for morning shifts, high-bandwidth dedicated IPs on request, and flexible visiting schedules.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={siteData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-[#832B4C] hover:bg-rose-50 transition-colors shadow-md"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Amenities;

