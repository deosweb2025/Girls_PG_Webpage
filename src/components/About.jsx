import { useEffect, useRef } from 'react';
import { siteData } from '../data/siteData';
import { gsap } from '../animations/gsapConfig';
import SectionHeading from './SectionHeading';
import { CheckCircle2, Shield, HeartHandshake, PhoneCall } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#FDF9FB] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Storytelling Narrative */}
          <div ref={contentRef} className="lg:col-span-7">
            <SectionHeading
              align="left"
              badge={siteData.about.badge}
              title="More Than Just A PG —"
              highlight="Your Secured Second Home in Kolkata"
              description={siteData.about.lead}
              className="mb-6"
            />

            <div className="space-y-4 text-sm sm:text-base text-[#5C4C55] leading-relaxed mb-8">
              {siteData.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {siteData.about.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#F0E1E8] card-luxury-shadow hover:border-[#832B4C]/40 text-xs sm:text-sm font-medium text-[#1D1518] transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-md bg-[#FDF2F5] border border-[#F0DEE7] text-[#832B4C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#832B4C]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Quick Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#832B4C] hover:bg-[#6D233E] transition-colors shadow-sm"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Schedule a Free Visit</span>
              </a>

              <a
                href={`tel:${siteData.contact.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-[#1D1518] bg-white border border-[#F0E1E8] hover:border-[#832B4C] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#832B4C]" />
                <span>Speak with Warden</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div ref={imageRef} className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Floating Metric Card - Moved to Top-Left with Zero Caption Overlap */}
            <div className="absolute -top-6 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#F0E1E8] max-w-[200px]">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-extrabold text-[#832B4C]">100%</span>
                <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
              </div>
              <p className="text-xs font-bold text-[#1D1518] mt-1 leading-snug">
                Safety & Peace of Mind
              </p>
              <p className="text-[11px] text-[#6B5B63] mt-0.5 leading-tight">
                Verified female residency with zero unauthorized entry.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={siteData.about.image}
                  alt="Ladies PG peaceful study lounge and reading area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1518]/80 via-[#1D1518]/20 to-transparent pointer-events-none"></div>

              {/* Bottom Image Caption - 100% Unobstructed Frosted Glass Bar */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 text-white z-10">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold mb-1.5 text-rose-200">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Security & Academic Focus</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    Quiet study & work lounge for late night productivity.
                  </h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

