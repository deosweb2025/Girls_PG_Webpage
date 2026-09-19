import { useState } from 'react';
import SectionHeading from './SectionHeading';
import MealPlan from './MealPlan';
import Amenities from './Amenities';
import { Utensils, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Facilities', icon: Sparkles },
    { id: 'amenities', label: 'Amenities & Security', icon: ShieldCheck },
    { id: 'dining', label: 'Food & Dining', icon: Utensils },
  ];

  return (
    <section id="facilities" className="relative bg-white pt-20 lg:pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Master Facilities Header */}
        <SectionHeading
          badge="PREMIUM LIVING FACILITIES"
          title="Everything You Need For A Safe &"
          highlight="Comfortable Stay"
          description="From 24/7 CCTV surveillance and biometric security to wholesome 4-time daily meals, high-speed fiber Wi-Fi, automatic laundry, and uninterrupted power backup."
          className="mb-10"
        />

        {/* Facilities Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#FDF9FB] border border-[#F0E1E8] shadow-xs max-w-full overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#832B4C] text-white shadow-md'
                      : 'text-[#6B5B63] hover:text-[#832B4C] hover:bg-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === 'all' && (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              <Amenities />
              <MealPlan />
            </motion.div>
          )}

          {activeTab === 'amenities' && (
            <motion.div
              key="amenities"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Amenities />
            </motion.div>
          )}

          {activeTab === 'dining' && (
            <motion.div
              key="dining"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <MealPlan />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Facilities;
