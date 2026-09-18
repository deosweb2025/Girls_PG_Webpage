import { useState } from 'react';
import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';
import { Check, Sparkles, MessageCircle, Phone, Bed, Users, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RoomCategories = () => {
  const [selectedRoom, setSelectedRoom] = useState(siteData.roomCategories[1].id);

  const activeCategory = siteData.roomCategories.find(r => r.id === selectedRoom) || siteData.roomCategories[0];

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-[#F3EDE6]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="FURNISHED LIVING SUITES"
          title="Curated Living Spaces for Every"
          highlight="Budget & Lifestyle"
          description="Every room at Ajanta Ladies PG is thoughtfully designed with premium orthopedic beds, attached sanitized washrooms, geysers, air conditioning, and personal study workstations."
          className="mb-12"
        />

        {/* Room Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs max-w-full overflow-x-auto">
            {siteData.roomCategories.map((room) => {
              const isActive = selectedRoom === room.id;
              return (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoom(room.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#832B4C] text-white shadow-md'
                      : 'text-[#5A534B] hover:text-[#1E1B18] hover:bg-[#FAF7F4]'
                  }`}
                >
                  {room.id === 'single' && <UserCheck className="w-4 h-4" />}
                  {room.id === 'double' && <Users className="w-4 h-4" />}
                  {room.id === 'triple' && <Bed className="w-4 h-4" />}
                  <span>{room.name}</span>
                  {room.badge === 'Most Popular' && (
                    <span className="hidden md:inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 font-extrabold uppercase">
                      Popular
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Room Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-white rounded-3xl border border-[#E8DFD5] shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Room Photo with Badges */}
              <div className="lg:col-span-6 relative bg-[#1E1B18] min-h-[320px] lg:min-h-full">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#832B4C] text-white shadow-sm">
                    {activeCategory.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {activeCategory.foodStatus}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#D48B68]">
                    {activeCategory.idealFor}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-1">
                    {activeCategory.name}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1">
                    {activeCategory.tagline}
                  </p>
                </div>
              </div>

              {/* Right Column: Room Inclusions & Inquire Action */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 pb-6 border-b border-[#E8DFD5]">
                    <div>
                      <span className="text-xs font-semibold text-[#6B645C] uppercase tracking-wider block">
                        Transparent Monthly Rent
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#1E1B18]">
                        {activeCategory.priceRange}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">
                        Zero Brokerage Fee
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="py-6">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#832B4C] mb-4">
                      Everything Included in this Room:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeCategory.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E3935]">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Direct Inquiry Actions */}
                <div className="pt-6 border-t border-[#E8DFD5] flex flex-wrap sm:flex-nowrap items-center gap-3">
                  <a
                    href={`https://wa.me/919433359907?text=Hello%20Ajanta%20Ladies%20PG%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(activeCategory.name)}.%20Please%20let%20me%20know%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#832B4C] to-[#9E355D] hover:shadow-md transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire for {activeCategory.name.split(' ')[1] || 'Room'}</span>
                  </a>

                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm text-[#1E1B18] bg-[#FAF7F4] border border-[#E8DFD5] hover:border-[#832B4C] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#832B4C]" />
                    <span>Call Now</span>
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3 Quick Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {siteData.roomCategories.map((room) => (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedRoom === room.id
                  ? 'bg-white border-[#832B4C] shadow-lg ring-2 ring-[#832B4C]/20'
                  : 'bg-white/70 border-[#E8DFD5] hover:border-[#832B4C]/50 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-base text-[#1E1B18]">{room.name}</h4>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#832B4C]/10 text-[#832B4C]">
                  {room.badge}
                </span>
              </div>
              <p className="text-xs text-[#6B645C] line-clamp-1 mb-3">
                {room.tagline}
              </p>
              <div className="flex items-center justify-between text-xs font-bold pt-2 border-t border-[#E8DFD5]">
                <span className="text-[#832B4C]">{room.priceRange}</span>
                <span className="text-emerald-700">Food Included</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoomCategories;

