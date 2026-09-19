import { siteData } from '../data/siteData';
import { ShieldCheck, Utensils, BedDouble, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = {
  security: ShieldCheck,
  food: Utensils,
  comfort: BedDouble,
  connectivity: MapPin,
};

const QuickHighlights = () => {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {siteData.highlights.map((item, idx) => {
          const Icon = icons[item.id] || ShieldCheck;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.28, ease: 'easeOut' } }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-7 border border-[#F0E1E8] card-luxury-shadow hover:border-[#832B4C]/50 flex flex-col justify-between cursor-pointer"
            >
              {/* Glossy Crystal Sheen Sweep on Card Hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/70 to-transparent card-shimmer-sweep opacity-0"></div>
              </div>

              {/* Ambient Rose Light Flare on Hover */}
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#832B4C]/5 rounded-full blur-2xl group-hover:bg-[#832B4C]/14 group-hover:scale-125 transition-all duration-500 pointer-events-none"></div>

              {/* Top Row: Animated Icon Badge + Status Pill */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#FDF2F5] via-white to-[#FCE7ED] border border-[#F0DEE7] text-[#832B4C] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#832B4C] group-hover:to-[#B44A70] group-hover:text-white group-hover:border-transparent group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#832B4C]/25 transition-all duration-300">
                    <Icon className="w-6 h-6 group-hover:rotate-6 transition-transform duration-300" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF2F5] border border-[#F0DEE7] text-[#832B4C] group-hover:border-[#832B4C]/35 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#832B4C] group-hover:animate-ping"></span>
                    <span className="text-[11px] font-mono font-bold">{item.number}</span>
                    <span className="text-[#832B4C]/30 text-xs">|</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{item.badge}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-[19px] font-extrabold text-[#1D1518] mb-2.5 group-hover:text-[#832B4C] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6B5B63] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="relative z-10 pt-5 mt-3 flex items-center justify-between border-t border-[#F0E1E8]/80">
                <span className="text-[11px] font-bold text-[#832B4C] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 -translate-x-1 group-hover:translate-x-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#832B4C]" />
                  <span>Resident Benefit</span>
                </span>
                <div className="w-10 h-1 rounded-full bg-[#F0E1E8] group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-[#832B4C] group-hover:to-[#B44A70] transition-all duration-500"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickHighlights;
