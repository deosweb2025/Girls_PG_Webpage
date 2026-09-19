import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';
import { Clock, CheckCircle2, UtensilsCrossed, Sparkles } from 'lucide-react';

const MealPlan = () => {
  const { mealPlan } = siteData;

  return (
    <section id="dining" className="py-20 lg:py-28 bg-[#FDF9FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge={mealPlan.badge}
          title="Delicious, Wholesome & Hygienic Food"
          highlight="Cooked Like Home"
          description={mealPlan.description}
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Dining Photo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden">
                <img
                  src={mealPlan.image}
                  alt="Ladies PG community dining hall and fresh buffet setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="p-6 bg-white border-t border-[#F0E1E8]">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#832B4C] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-[#832B4C]" />
                  <span>Unlimited Daily Food Inclusions</span>
                </div>
                <h4 className="text-base font-bold text-[#1D1518] mb-3">
                  Nutritious Bengali & North Indian Cuisine
                </h4>
                
                <div className="space-y-2">
                  {mealPlan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#5C4C55]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Time Meal Schedule */}
          <div className="lg:col-span-7 space-y-4">
            {mealPlan.schedule.map((slot, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-white border border-[#F0E1E8] card-luxury-shadow hover:-translate-y-1 hover:border-[#832B4C]/50 transition-all group cursor-pointer"
              >
                {/* Glossy Crystal Sheen Sweep on Card Hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent card-shimmer-sweep opacity-0"></div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FDF2F5] text-[#832B4C] flex items-center justify-center font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#1D1518] group-hover:text-[#832B4C] transition-colors">
                      {slot.meal}
                    </h4>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#FDF2F5] text-[#832B4C] border border-[#F0E1E8]">
                    <Clock className="w-3 h-3" />
                    {slot.time}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5C4C55] leading-relaxed pl-10">
                  {slot.items}
                </p>
              </div>
            ))}

            <div className="pt-2 pl-2 text-xs text-[#6B5B63] flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-[#832B4C]" />
              <span>Special feasts prepared on Sundays and festive occasions.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MealPlan;

