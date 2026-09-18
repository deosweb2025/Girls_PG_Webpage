import { siteData } from '../data/siteData';
import { ShieldCheck, Utensils, BedDouble, MapPin } from 'lucide-react';

const icons = {
  security: ShieldCheck,
  food: Utensils,
  comfort: BedDouble,
  connectivity: MapPin,
};

const QuickHighlights = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#832B4C]/5 border border-[#E8DFD5]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFD5]/70">
          {siteData.highlights.map((item, idx) => {
            const Icon = icons[item.id] || ShieldCheck;
            return (
              <div
                key={item.id}
                className={`pt-5 sm:pt-0 ${idx > 0 ? 'sm:pl-6 lg:pl-8' : ''} flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#832B4C]/10 text-[#832B4C] flex items-center justify-center group-hover:bg-[#832B4C] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#A89F91]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E1B18] mb-1.5 group-hover:text-[#832B4C] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;

