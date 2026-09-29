import { useState } from 'react';
import SectionHeading from './SectionHeading';
import RoomCategories from './RoomCategories';
import MealPlan from './MealPlan';
import Amenities from './Amenities';
import CostEstimator from './CostEstimator';
import { BedDouble, Utensils, Sparkles, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Facilities', icon: Sparkles },
    { id: 'rooms', label: 'Rooms & Rates', icon: BedDouble },
    { id: 'dining', label: 'Food & Dining', icon: Utensils },
    { id: 'amenities', label: 'Amenities & Security', icon: Sparkles },
    { id: 'estimator', label: 'Rent Calculator', icon: Calculator },
  ];

  return (
    <section id="facilities" className="relative bg-[#FAF7F4] pt-20 lg:pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Master Facilities Header */}
        <SectionHeading
          badge="WORLD-CLASS LIVING FACILITIES"
          title="Everything You Need For A Safe &"
          highlight="Comfortable Stay"
          description="From furnished AC suites and transparent monthly rates to wholesome 4-time daily meals, 24/7 CCTV surveillance, high-speed Wi-Fi, and power backup."
          className="mb-10"
        />

        {/* Facilities Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs max-w-full overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#832B4C] text-white shadow-md'
                      : 'text-[#5A534B] hover:text-[#1E1B18] hover:bg-[#FAF7F4]'
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
              <RoomCategories />
              <MealPlan />
              <Amenities />
              <CostEstimator />
            </motion.div>
          )}

          {activeTab === 'rooms' && (
            <motion.div
              key="rooms"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <RoomCategories />
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

          {activeTab === 'estimator' && (
            <motion.div
              key="estimator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <CostEstimator />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Facilities;

