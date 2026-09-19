import { useEffect, useRef, useState } from 'react';
import { siteData } from '../data/siteData';
import { gsap } from '../animations/gsapConfig';
import { ShieldCheck, ArrowRight, CheckCircle2, MapPin, Sparkles, BadgeCheck, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import heroImg from '../assets/images/hero_room.jpg';
import singleRoomImg from '../assets/images/single_room.jpg';
import studyLoungeImg from '../assets/images/study_lounge.jpg';

const trustItems = [
  {
    icon: BadgeCheck,
    title: 'Zero Brokerage',
    subtitle: 'Direct booking • ₹0 commission',
  },
  {
    icon: Sparkles,
    title: 'Attached Washrooms',
    subtitle: 'Private ensuite bath in every room',
  },
  {
    icon: Utensils,
    title: '4-Time Unlimited Meals',
    subtitle: 'Fresh, nutritious homestyle cooking',
  },
  {
    icon: ShieldCheck,
    title: '24/7 CCTV & Biometrics',
    subtitle: 'Multi-tier female guarded campus',
  },
];

const heroSlides = [
  {
    image: heroImg,
    tag: 'Ready to Move In',
    title: 'Executive Twin AC Suite',
    description: 'Attached washroom, spring mattresses & private balcony.',
  },
  {
    image: singleRoomImg,
    tag: 'Private Sanctuary',
    title: 'Executive Single Suite',
    description: 'Personal wooden wardrobe & ergonomic study station.',
  },
  {
    image: studyLoungeImg,
    tag: 'Academic & Work Focus',
    title: 'Peaceful Study & Living Lounge',
    description: 'Ultra-fast fiber Wi-Fi & quiet productivity atmosphere.',
  },
];

const Hero = () => {
  const heroRef = useRef(null);
  const imageCardRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 2 seconds (2000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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
      }, '-=0.7');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FDF9FB] to-[#FFFFFF]"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#832B4C]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B44A70]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
          
          {/* 1. Header Block: Mobile Order 1, Desktop Left Col Row 1 */}
          <div className="order-1 lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow / Security Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F5] border border-[#F0DEE7] text-[#832B4C] text-xs font-bold tracking-wide uppercase mb-3.5 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping"></span>
              <span>{siteData.hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#1D1518] leading-[1.15]">
              {siteData.hero.title}{' '}
              <span className="block luxury-gradient-text mt-1">
                {siteData.hero.titleHighlight}
              </span>
            </h1>
          </div>

          {/* 2. Visual Card Block: Mobile Order 2, Desktop Right Col Span 2 */}
          <div className="order-2 lg:col-span-5 lg:row-span-2 relative my-2 lg:my-0 lg:-mt-7 xl:-mt-9">
            <div
              ref={imageCardRef}
              className="relative rounded-3xl overflow-hidden crystal-glass-border border-4 border-white bg-[#1D1518] group"
            >
              {/* Active Image with Glossy Crystal Animation */}
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slide.image}
                    alt={slide.title}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </AnimatePresence>

                {/* Glossy Crystal Light Sweep on Every Slide Entrance */}
                <div
                  key={`crystal-${currentSlide}`}
                  className="absolute inset-0 pointer-events-none overflow-hidden z-20"
                >
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-crystal-sweep"></div>
                  {/* Prismatic subtle crystal flare */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-300/20 rounded-full blur-2xl animate-pulse"></div>
                </div>

                {/* Gradient for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10"></div>

                {/* Top Landmark Badge */}
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 text-xs font-extrabold text-[#832B4C]">
                  <MapPin className="w-3.5 h-3.5 text-[#832B4C]" />
                  <span>Beside Chowman • Biswa Bangla Gate</span>
                </div>

                {/* Top Rating Badge */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 text-xs font-bold text-[#1D1518]">
                  <span className="text-[#832B4C] font-extrabold">★ 4.9</span>
                  <span className="hidden sm:inline text-[11px] text-[#6B5B63]">Top Rated</span>
                </div>

                {/* Unobstructed Image Caption Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="p-3.5 rounded-2xl bg-black/55 backdrop-blur-md border border-white/20"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-200">
                          {slide.tag}
                        </span>
                        
                        {/* Slide Indicator Dots */}
                        <div className="flex items-center gap-1.5">
                          {heroSlides.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setCurrentSlide(idx)}
                              aria-label={`Show slide ${idx + 1}`}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentSlide
                                  ? 'w-5 bg-white'
                                  : 'w-1.5 bg-white/40 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {slide.title}
                      </h4>
                      <p className="text-xs text-white/85 mt-0.5 line-clamp-1">
                        {slide.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* 100% Female Campus Feature Badge - Placed below with zero overlap */}
            <div className="mt-3.5 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-md border border-[#F0E1E8] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#832B4C] to-[#4A1D2F] flex items-center justify-center text-white shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-rose-200" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-extrabold text-[#1D1518] truncate">
                    100% Female Only Campus
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#832B4C] shrink-0" />
                </div>
                <p className="text-[11px] text-[#6B5B63] font-medium leading-tight mt-0.5 truncate">
                  Bio-metric gate access, 24/7 CCTV surveillance & dedicated on-duty female warden.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Description, CTA & Badges Block: Mobile Order 3, Desktop Left Col Row 2 */}
          <div className="order-3 lg:col-span-7 flex flex-col items-start pt-2 lg:pt-0">
            {/* Description */}
            <p className="hero-desc text-base sm:text-lg text-[#5C4C55] leading-relaxed max-w-2xl mb-6 sm:mb-8">
              {siteData.hero.description}
            </p>

            {/* CTA Button: Primary Room Availability Button */}
            <div className="hero-ctas flex items-center gap-3.5 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                href="#facilities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#832B4C] via-[#9E355D] to-[#B44A70] hover:shadow-xl hover:shadow-[#832B4C]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{siteData.hero.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Assurances Grid */}
            <div className="pt-6 border-t border-[#F0E1E8] w-full">
              {/* Eyebrow Header */}
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#832B4C]">
                  <Sparkles className="w-3.5 h-3.5 text-[#832B4C]" />
                  Verified Resident Assurances
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold text-[#7D6B75]">
                  100% Direct • Zero Hidden Charges
                </span>
              </div>

              {/* 2-Column Spacious Cards - 100% Readable, No Truncate, No Blinding Hover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {trustItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="hero-trust-item flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-[#F0E1E8] shadow-xs hover:border-[#832B4C]/40 hover:bg-[#FDF9FB]/60 transition-colors duration-200"
                    >
                      {/* Fixed Crisp Brand Icon Badge */}
                      <div className="w-10 h-10 rounded-xl bg-[#FDF2F5] border border-[#F0DEE7] text-[#832B4C] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#832B4C]" />
                      </div>

                      {/* Full Visible Text - Zero Clipping */}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-extrabold text-[#1D1518] leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#6B5B63] font-medium leading-tight mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
