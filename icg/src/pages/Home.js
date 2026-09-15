import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';

const HomeBelowFold = lazy(() => import('./HomeBelowFold'));

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
        </div>

        {/* Scrolling client logos */}
        <div className="relative z-10 pb-14">
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
                  loading="lazy"
                  decoding="async"
                  className={`${logo.small ? 'h-10 md:h-[90px] max-w-[220px] md:max-w-[350px]' : 'h-16 md:h-[144px] max-w-[350px] md:max-w-[550px]'} w-auto object-contain brightness-0 invert opacity-70 shrink-0`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Below-the-fold content loads after first paint */}
      <Suspense fallback={null}>
        <HomeBelowFold />
      </Suspense>
    </div>
  );
}

export default Home;
