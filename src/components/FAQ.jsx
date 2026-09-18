import { useState } from 'react';
import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF7F4] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Clear Answers for"
          highlight="Residents & Parents"
          description="Have questions about admissions, food, security, or lease terms? Review common answers below or chat with our warden."
          className="mb-12"
        />

        <div className="space-y-3.5">
          {siteData.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DFD5] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#832B4C]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#1E1B18] flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#832B4C] shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#832B4C] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#5A534B] leading-relaxed border-t border-[#F3EDE6] pt-4 pl-12">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-[#6B645C] mb-3">
            Still have a question not listed here?
          </p>
          <a
            href={siteData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#15803D] bg-[#F0FDF4] border border-[#DCFCE7] hover:border-[#25D366] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat Directly with Management on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

