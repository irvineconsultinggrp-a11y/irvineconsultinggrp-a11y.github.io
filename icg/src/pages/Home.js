import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HomeBelowFold from './HomeBelowFold';

const clientLogos = [
  { src: '/clientlogo/bereal.webp', alt: 'BeReal', small: true },
  { src: '/clientlogo/sandisk.webp', alt: 'SanDisk' },
  { src: '/clientlogo/abd.webp', alt: 'Artificial By Design' },
  { src: '/clientlogo/aura.webp', alt: 'Aura' },
  { src: '/clientlogo/adgreetz.webp', alt: 'AdGreetz' },
  { src: '/clientlogo/kura-sushi.webp', alt: 'Kura Sushi' },
  { src: '/clientlogo/knowt.webp', alt: 'Knowt' },
  { src: '/clientlogo/toughcutie.webp', alt: 'ToughCutie' },
  { src: '/clientlogo/datedrop.webp', alt: 'DateDrop' },
  { src: '/clientlogo/7leaves.webp', alt: '7 Leaves', small: true },
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
        <div className="absolute inset-0 bg-icgblue/75" />

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
              UCI&apos;s Premier Strategy Consulting Org
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
                  className={`${logo.small ? 'h-10 md:h-[90px] max-w-[220px] md:max-w-[350px]' : 'h-16 md:h-[144px] max-w-[350px] md:max-w-[550px]'} w-auto object-contain brightness-0 invert opacity-70 shrink-0`}
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
