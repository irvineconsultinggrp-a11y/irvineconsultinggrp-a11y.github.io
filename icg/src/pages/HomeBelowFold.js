import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FAQItem from '../components/FaqItem';
import ScrollReveal from '../components/ScrollReveal';
import ProofSections from '../components/ProofSections';
import CountUp from '../components/CountUp';
import { Reveal, Stagger, StaggerItem, ImageReveal } from '../components/Motion';
import { EASE } from '../lib/motion';
import { ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "The ICG team explored these domains with technical rigor by developing insights around model portability, edge to cloud tradeoffs and the architecture of AI-native data centers.",
    author: "Alex Veytsman",
    role: "CTO, Artificial By Design",
    logo: "/clientlogo/artificial-by-design-v2.png",
    headshot: "/clientheadshot/Alex Veytsman.webp",
  },
  {
    quote:
      "ICG's approach to problem-solving was refreshing. They delivered insights that helped us reshape our market strategy.",
    author: "Brittany Coleman",
    role: "Founder and CEO, ToughCutie",
    logo: "/clientlogo/toughcutie.webp",
    headshot: "/clientheadshot/Brittany Coleman.webp",
  },
  {
    quote:
      "It was a real pleasure working with the Irvine Consulting student team. They tackled a complex and demanding assignment and helped shape AdGreetz's expansion strategy with remarkable professionalism, clarity, and dedication.",
    author: "Eric Frankel",
    role: "CEO, AdGreetz",
    logo: "/clientlogo/adgreetz.webp",
    headshot: "/clientheadshot/Amit Seth.webp",
  },
  {
    quote:
      "Our interaction with the Irvine Consulting Group was nothing short of meaningful and provocative. The activities and findings that were commensurate through their research was validating and insightful in by which it will definitively shape our company's marketing strategies and tactics. The Irvine Consulting Group are consummate professionals and they are a dynamic group to work with. I highly recommend enlisting the services of these marketing mercenaries to disrupt your current thinking.",
    author: "Newton Hoang",
    role: "Vice President of Marketing, Kura Sushi",
    logo: "/clientlogo/kura-sushi.webp",
    headshot: "/clientheadshot/Newton Hoang.webp",
  },
];

const faqs = [
  {
    question: "When is the next recruitment cycle for ICG?",
    answer:
      "For recruitment information, check out the Join page. All information will be updated on a quarterly basis.",
  },
  {
    question: "How long does a typical consulting project take?",
    answer:
      "The duration of our consulting projects varies depending on the scope and complexity of the engagement, we typically aim to complete them in 10 weeks. However, depending on the scope and demand of the project, this can fluctuate to ensure quality.",
  },
  {
    question: "What makes your consulting approach different?",
    answer:
      "Our approach is distinguished by three key factors: First, we focus on practical, implementable solutions rather than theoretical frameworks. Second, we emphasize knowledge transfer to ensure your team can sustain the improvements after our engagement ends. Third, we measure our success by the tangible results and return on investment (ROI) we deliver to your business.",
  },
  {
    question: "How do you measure the success of your consulting engagements?",
    answer:
      "We define and track key performance indicators (KPIs) that align with your business objectives. These might include financial metrics like revenue growth or cost savings, operational metrics like efficiency improvements, or strategic metrics like market share gains.",
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '120%' : '-120%',
    scale: 0.7,
    opacity: 0,
    zIndex: 0,
  }),
  left: { x: '-70%', scale: 0.85, opacity: 0.5, zIndex: 5 },
  center: { x: 0, scale: 1, opacity: 1, zIndex: 10 },
  right: { x: '70%', scale: 0.85, opacity: 0.5, zIndex: 5 },
  exit: (direction) => ({
    x: direction > 0 ? '-120%' : '120%',
    scale: 0.7,
    opacity: 0,
    zIndex: 0,
  }),
};

function TestimonialCard({ testimonial, position, direction, onClick }) {
  const isClickable = position === 'left' || position === 'right';

  return (
    <motion.div
      className={`absolute w-full max-w-2xl px-4 ${isClickable ? 'cursor-pointer' : ''}`}
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate={position}
      exit="exit"
      transition={{ duration: 0.72, ease: EASE }}
      whileHover={isClickable ? { scale: 0.89, opacity: 0.72 } : undefined}
      style={{ pointerEvents: isClickable || position === 'center' ? 'auto' : 'none' }}
      onClick={isClickable ? onClick : undefined}
    >
      <div className="bg-white rounded-2xl shadow-lg px-5 py-5 md:px-6 md:py-6 flex flex-col h-[29rem] sm:h-[28rem] md:h-[27rem] lg:h-[26rem]">
        <div className="min-h-0 flex-1 flex items-center justify-center mb-3 px-0.5">
          <p className="text-gray-700 text-[0.9375rem] sm:text-base md:text-lg leading-snug sm:leading-normal text-center">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>
        <div className="flex items-center justify-between shrink-0 gap-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2.5 min-w-0">
            {testimonial.headshot && (
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full md:h-10 md:w-10">
                <img
                  src={testimonial.headshot}
                  alt={testimonial.author}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full origin-center scale-[1.08] object-cover object-center"
                />
              </div>
            )}
            <div className="min-w-0">
              <p className="font-bold text-icgblue text-sm md:text-base">{testimonial.author}</p>
              <p className="text-xs md:text-sm text-gray-500 leading-tight line-clamp-2">{testimonial.role}</p>
            </div>
          </div>
          <img
            src={testimonial.logo}
            alt="Company"
            loading="lazy"
            decoding="async"
            className="h-12 sm:h-14 md:h-16 w-auto max-w-[min(100%,220px)] sm:max-w-[min(100%,260px)] object-contain shrink-0"
          />
        </div>
      </div>
    </motion.div>
  );
}

function HomeBelowFold() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const visibleCards = [
    {
      testimonial: testimonials[(currentTestimonial - 1 + total) % total],
      position: 'left',
    },
    {
      testimonial: testimonials[currentTestimonial],
      position: 'center',
    },
    {
      testimonial: testimonials[(currentTestimonial + 1) % total],
      position: 'right',
    },
  ];

  const goTo = (index) => {
    const next = (index + total) % total;
    if (next === currentTestimonial) return;
    const forward = (next - currentTestimonial + total) % total;
    const backward = (currentTestimonial - next + total) % total;
    setDirection(forward <= backward ? 1 : -1);
    setCurrentTestimonial(next);
  };

  const nextTestimonial = () => goTo(currentTestimonial + 1);
  const prevTestimonial = () => goTo(currentTestimonial - 1);

  return (
    <>
      {/* ===== WHAT IS ICG ===== */}
      <div className="bg-white py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-16 md:gap-20 md:justify-between">
              <Stagger step={0.1} className="w-full md:w-5/12 space-y-6">
                <StaggerItem as="h2" preset="mask" className="text-3xl md:text-5xl font-bold text-icgblue">
                  What is ICG?
                </StaggerItem>
                <StaggerItem as="p" y={16} className="text-gray-500 text-base md:text-lg leading-relaxed">
                  <strong className="text-icgblue">ICG is the premier strategy consulting organization at UC Irvine.</strong>{' '}
                  We partner with real clients on meaningful engagements, giving our
                  members hands-on experience in research, strategy, and execution.
                  Through experiential learning and mentorship, we shape the next
                  generation of leaders.
                </StaggerItem>
                <StaggerItem y={16} className="flex flex-col sm:flex-row gap-4 w-full sm:w-3/4">
                  <a
                    href="https://apply.irvineconsultinggroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lift block text-center w-full sm:flex-1 bg-icgblue text-white font-semibold px-7 py-3 rounded-lg hover:bg-icgblue/90"
                  >
                    Apply Now
                  </a>
                  <Link
                    to="/students"
                    className="btn-lift block text-center w-full sm:flex-1 bg-white text-icgblue font-semibold px-7 py-3 rounded-lg border border-icgblue hover:bg-icgblue/5"
                  >
                    Join Us
                  </Link>
                </StaggerItem>
              </Stagger>
              <div className="w-full md:w-1/2">
                <ImageReveal
                  className="overflow-hidden rounded-xl shadow-md aspect-[4/3] w-full bg-gray-200"
                  innerClassName="h-full w-full"
                >
                  <img
                    src="/W%2726%20Group.webp"
                    alt="ICG team — Winter 2026 group"
                    decoding="async"
                    className="h-full w-full object-cover object-[38%_center] scale-[1.22] origin-center"
                  />
                </ImageReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div className="bg-white pb-4 md:pb-6 px-6">
        <div className="container mx-auto max-w-6xl">
          <Stagger
            step={0.12}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-[5.25rem] text-center"
          >
            {[
              { number: '20+', label: 'Clients Served' },
              { number: '$300M+', label: 'Value Served', numberNowrap: true },
              { number: '1000+', label: 'Hours of Service' },
            ].map((stat) => (
              <StaggerItem key={stat.label} y={24} className="min-w-0 text-center">
                <p
                  className={`inline-block text-[3.94rem] md:text-[5.25rem] font-bold text-icgblue tracking-tight leading-none transition-transform duration-300 hover:scale-110 cursor-default ${
                    stat.numberNowrap ? 'whitespace-nowrap' : ''
                  }`}
                >
                  <CountUp value={stat.number} />
                </p>
                <p className="mt-4 text-black text-[1.75rem] font-light leading-snug">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      <ProofSections />

      {/* ===== TESTIMONIALS ===== */}
      <div className="bg-[#f0f4f8] py-24 md:py-28 px-6">
        <ScrollReveal>
        <div className="container mx-auto max-w-5xl">
          <Reveal
            as="h2"
            preset="mask"
            className="text-3xl md:text-5xl font-bold text-icgblue text-center"
          >
            What Our Clients Say
          </Reveal>
          <Reveal
            as="p"
            y={12}
            delay={0.12}
            className="text-center text-gray-600 mt-2 mb-16 font-light"
          >
            Trusted by Professionals
          </Reveal>

          <div
            className="relative flex items-center justify-center min-h-[29rem] sm:min-h-[28rem] md:min-h-[27rem] lg:min-h-[26rem]"
          >
            <AnimatePresence initial={false} custom={direction}>
              {visibleCards.map(({ testimonial, position }) => (
                <TestimonialCard
                  key={testimonial.author}
                  testimonial={testimonial}
                  position={position}
                  direction={direction}
                  onClick={() =>
                    goTo(
                      position === 'left'
                        ? currentTestimonial - 1
                        : currentTestimonial + 1
                    )
                  }
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <motion.button
              onClick={prevTestimonial}
              className="text-gray-400 hover:text-icgblue transition-colors text-2xl"
              aria-label="Previous"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.88 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              &larr;
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="group relative h-2.5 rounded-full"
                  aria-label={`Testimonial ${i + 1}`}
                  aria-current={currentTestimonial === i}
                >
                  <motion.span
                    className={`block h-2.5 rounded-full ${
                      currentTestimonial === i
                        ? 'bg-icgblue'
                        : 'bg-gray-300 group-hover:bg-gray-400'
                    }`}
                    animate={{ width: currentTestimonial === i ? 28 : 10 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                </button>
              ))}
            </div>
            <motion.button
              onClick={nextTestimonial}
              className="text-gray-400 hover:text-icgblue transition-colors text-2xl"
              aria-label="Next"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.88 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              &rarr;
            </motion.button>
          </div>
        </div>
        </ScrollReveal>
      </div>

      {/* ===== FAQ ===== */}
      <div className="bg-white py-24 md:py-28 px-6">
        <div className="container mx-auto max-w-3xl">
          <Reveal
            as="h2"
            preset="mask"
            className="text-3xl md:text-5xl font-bold text-icgblue mb-12"
          >
            Frequently asked Questions
          </Reveal>
          <Stagger step={0.08}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index} y={18}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isLast={index === faqs.length - 1}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="bg-white pb-28 px-6">
        <Stagger step={0.1} className="container mx-auto max-w-3xl">
          <StaggerItem
            as="h2"
            preset="mask"
            className="text-3xl md:text-5xl font-bold text-icgblue leading-tight"
          >
            Enough about us.
            <br />
            <span className="font-light">What can we do for you?</span>
          </StaggerItem>
          <StaggerItem y={18} className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/students"
              className="btn-lift group inline-flex items-center gap-2 bg-icgblue text-white font-bold px-7 py-3.5 rounded-full hover:bg-icgblue/90"
            >
              I am a STUDENT <ArrowUpRight className="w-4 h-4 arrow-nudge" />
            </Link>
            <Link
              to="/contact"
              className="btn-lift group inline-flex items-center gap-2 bg-icgblue text-white font-bold px-7 py-3.5 rounded-full hover:bg-icgblue/90"
            >
              I am a BUSINESS <ArrowUpRight className="w-4 h-4 arrow-nudge" />
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </>
  );
}

export default HomeBelowFold;
