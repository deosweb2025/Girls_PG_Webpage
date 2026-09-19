import { useState } from 'react';
import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';
import { Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ['All', 'Bedrooms', 'Hygiene', 'Dining', 'Common Spaces'];

  const filteredItems = activeFilter === 'All'
    ? siteData.gallery
    : siteData.gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="VISUAL TOUR"
          title="Take a Glimpse Inside Your"
          highlight="Next Sanctuary"
          description="Explore our well-ventilated rooms, immaculate attached washrooms, comfortable study corners, and vibrant dining spaces."
          className="mb-10"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-[#832B4C] text-white shadow-md'
                  : 'bg-[#FDF9FB] text-[#6B5B63] border border-[#F0E1E8] hover:border-[#832B4C] hover:text-[#832B4C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-3xl overflow-hidden shadow-md cursor-pointer border border-[#F0E1E8] bg-white ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Category Pill on Top */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-white/90 backdrop-blur-md text-[#832B4C] shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h4 className="text-base sm:text-lg font-bold">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-200 mt-0.5 line-clamp-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#832B4C] uppercase tracking-wider">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#1D1518]">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5B63] mt-1">
                    {selectedPhoto.desc}
                  </p>
                </div>

                <a
                  href={`https://wa.me/919433359907?text=Hello%2C%20I%20saw%20the%20photo%20of%20${encodeURIComponent(selectedPhoto.title)}%20on%20your%20website%20and%20want%20to%20know%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#832B4C] hover:bg-[#6D233E] transition-colors shrink-0"
                >
                  Book This Room Style
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

