import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import HomeBelowFold from './HomeBelowFold';
import { DUR, EASE, fadeUp, maskUp, stagger } from '../lib/motion';

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
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Scroll-linked parallax: the plate drifts slower than the page while the
  // headline lifts away and dims. Ranges stay inside the 1.12 scale headroom
  // so no edge is ever exposed.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const plateY = useTransform(scrollYProgress, [0, 1], [0, 52]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -64]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const marqueeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
        variants: stagger(0.14, 0.15),
        initial: 'hidden',
        animate: 'visible',
      };

  const marqueeMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: DUR.slow, ease: EASE, delay: 0.75 },
      };

  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO (eager — first viewport) ===== */}
      <div ref={heroRef} className="relative min-h-screen flex flex-col overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <motion.img
            src="/skyline.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={reduceMotion ? undefined : { y: plateY, scale: 1.12 }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/75" />

        <motion.div
          className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6"
          style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
        >
          <motion.div className="w-full min-w-0 text-center" {...heroMotion}>
            <motion.h1
              variants={reduceMotion ? undefined : maskUp(34, 1.05)}
              className="font-extrabold text-white leading-none tracking-tight text-center text-[clamp(2.2rem,7vw,6.5rem)]"
            >
              Irvine Consulting Group
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Scrolling client logos */}
        <motion.div
          className="relative z-10 pb-14"
          style={reduceMotion ? undefined : { opacity: marqueeOpacity }}
        >
          <motion.div {...marqueeMotion}>
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
                    className={`${logo.size ? logo.size : logo.small ? 'w-[112px] md:w-[175px] h-auto max-h-[56px] md:max-h-[84px]' : 'w-[160px] md:w-[250px] h-auto max-h-[80px] md:max-h-[120px]'} object-contain brightness-0 invert opacity-70 shrink-0 marquee-logo`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <HomeBelowFold />
    </div>
  );
}

export default Home;
