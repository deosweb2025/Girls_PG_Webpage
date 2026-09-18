import { useEffect, useRef } from 'react';
import { siteData } from '../data/siteData';
import { gsap } from '../animations/gsapConfig';
import { ShieldCheck, MessageCircle, Phone, ArrowRight, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageCardRef = useRef(null);
  const floatingBadgeRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        opacity: 0,
        y: -20,
        duration: 0.6,
      })
      .from('.hero-headline', {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, '-=0.3')
      .from('.hero-desc', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-ctas', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.3')
      .from('.hero-trust-item', {
        opacity: 0,
        x: -15,
        stagger: 0.1,
        duration: 0.5,
      }, '-=0.3')
      .from(imageCardRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
      }, '-=0.7')
      .from(floatingBadgeRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.6,
      }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF7F4] via-[#F6F1EA] to-[#FAF7F4]"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#832B4C]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D48B68]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Content */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow / Security Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#832B4C]/10 border border-[#832B4C]/25 text-[#832B4C] text-xs font-bold tracking-wide uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping"></span>
              <span>{siteData.hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#1E1B18] leading-[1.15] mb-6">
              {siteData.hero.title}{' '}
              <span className="block luxury-gradient-text mt-1">
                {siteData.hero.titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-base sm:text-lg text-[#5A534B] leading-relaxed max-w-2xl mb-8">
              {siteData.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="#rooms"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#832B4C] via-[#9E355D] to-[#B44A70] hover:shadow-lg hover:shadow-[#832B4C]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{siteData.hero.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-[#1E1B18] bg-white border border-[#E8DFD5] hover:border-[#25D366] hover:bg-[#F0FDF4] hover:text-[#15803D] transition-all shadow-xs active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{siteData.hero.secondaryCTA}</span>
              </a>

              <a
                href={`tel:${siteData.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-[#832B4C] bg-[#832B4C]/5 hover:bg-[#832B4C]/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {siteData.contact.displayPhone}</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-[#E8DFD5]/90 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {siteData.hero.trustPills.map((pill, i) => (
                <div
                  key={i}
                  className="hero-trust-item flex items-center gap-2 text-xs font-semibold text-[#4A443E]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div
              ref={imageCardRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group"
            >
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={siteData.hero.image}
                  alt="Ajanta Luxury Ladies PG executive bedroom in New Town Kolkata"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none"></div>

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 text-xs font-extrabold text-[#832B4C]">
                <MapPin className="w-3.5 h-3.5 text-[#D48B68]" />
                <span>Beside Chowman • Biswa Bangla Gate</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-rose-200">
                  Ready to Move In
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  Fully Furnished AC Suites with Attached Washrooms
                </p>
              </div>
            </div>

            {/* Floating Glass Highlight Card */}
            <div
              ref={floatingBadgeRef}
              className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#E8DFD5] flex items-center gap-4 max-w-[280px] sm:max-w-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#832B4C] to-[#4A1D2F] flex items-center justify-center text-white shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6 text-rose-200" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-extrabold text-[#1E1B18]">100% Female Campus</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#D48B68]" />
                </div>
                <p className="text-[11px] text-[#6B645C] font-medium leading-tight mt-0.5">
                  Bio-metric access, 24/7 CCTV & dedicated on-duty warden.
                </p>
              </div>
            </div>

            {/* Rating pill on right */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-[#E8DFD5] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold text-sm">★ 4.9</span>
              <span className="text-[11px] font-bold text-[#4A443E]">Top Rated in New Town</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

