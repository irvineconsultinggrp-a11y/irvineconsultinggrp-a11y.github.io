import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HomeBelowFold from './HomeBelowFold';

const clientLogos = [
  { src: '/clientlogo/bereal-v2.png', alt: 'BeReal' },
  { src: '/clientlogo/sandisk-v2.png', alt: 'SanDisk' },
  { src: '/clientlogo/artificial-by-design-v2.png', alt: 'Artificial By Design' },
  { src: '/clientlogo/aura-v2.png', alt: 'Aura' },
  { src: '/clientlogo/adgreetz-v2.png', alt: 'AdGreetz' },
  { src: '/clientlogo/kura-sushi-v2.png', alt: 'Kura Sushi', size: 'w-[192px] md:w-[300px] h-auto max-h-[96px] md:max-h-[144px]' },
  { src: '/clientlogo/knowt-v2.png', alt: 'Knowt' },
  { src: '/clientlogo/toughcutie-v2.png', alt: 'ToughCutie' },
  { src: '/clientlogo/datedrop-v2.png', alt: 'DateDrop', size: 'w-[176px] md:w-[275px] h-auto max-h-[88px] md:max-h-[132px]' },
  { src: '/clientlogo/7leaves-v2.png', alt: '7 Leaves', size: 'w-[112px] md:w-[175px] h-auto max-h-[56px] md:max-h-[84px]' },
  { src: '/clientlogo/lokahi-therapeutics-v2.png', alt: 'Lokahi Therapeutics' },
  { src: '/clientlogo/riot-games-v2.png', alt: 'Riot Games' },
  { src: '/clientlogo/ditto-v2.png', alt: 'Ditto', size: 'w-[128px] md:w-[200px] h-auto max-h-[64px] md:max-h-[96px]' },
  { src: '/clientlogo/john-wayne-airport-v2.png', alt: 'John Wayne Airport', size: 'w-[80px] md:w-[125px] h-auto max-h-[40px] md:max-h-[60px]' },
  { src: '/clientlogo/operation-freedom-paws-v2.png', alt: 'Operation Freedom Paws', size: 'w-[192px] md:w-[300px] h-auto max-h-[96px] md:max-h-[144px] ml-3 md:ml-5' },
  { src: '/clientlogo/make-a-wish-v2.png', alt: 'Make-A-Wish', size: 'w-[192px] md:w-[300px] h-auto max-h-[96px] md:max-h-[144px] -ml-4 md:-ml-8' },
];

function Home() {
  const [marqueeVisible, setMarqueeVisible] = useState(true);
  const marqueeRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setMarqueeVisible(entry.isIntersecting),
      { rootMargin: '0px', threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const doubledLogos = [...clientLogos, ...clientLogos];

  const heroMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
      };

  const marqueeMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8 },
      };

  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO (eager — first viewport) ===== */}
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        <img
          src="/skyline.webp"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          <motion.div className="w-full min-w-0 text-center" {...heroMotion}>
            <h1 className="font-extrabold text-white leading-none tracking-tight whitespace-nowrap text-[clamp(2.2rem,7vw,6.5rem)]">
              Irvine Consulting Group
            </h1>
            <p
              className="mt-5 text-sm sm:text-[1.05rem] md:text-[1.3125rem] font-semibold tracking-wide bg-clip-text text-transparent leading-[1.45] pb-[0.2em] inline-block max-w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #a8d8ff, #ffffff, #a8d8ff)",
              }}
            >
              UCI&apos;s Premier Strategy Consulting Organization
            </p>
          </motion.div>
        </div>

        {/* Scrolling client logos */}
        <motion.div className="relative z-10 pb-14" {...marqueeMotion}>
          <div
            ref={marqueeRef}
            className={`overflow-hidden py-4 logo-carousel-viewport${marqueeVisible ? ' is-visible' : ''}`}
          >
            <div className={`logo-carousel-track-hero flex items-center gap-16 md:gap-24${marqueeVisible ? '' : ' is-paused'}`}>
              {doubledLogos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  loading={i < clientLogos.length ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`${logo.size ? logo.size : logo.small ? 'w-[112px] md:w-[175px] h-auto max-h-[56px] md:max-h-[84px]' : 'w-[160px] md:w-[250px] h-auto max-h-[80px] md:max-h-[120px]'} object-contain brightness-0 invert opacity-70 shrink-0`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <HomeBelowFold />
    </div>
  );
}

export default Home;
