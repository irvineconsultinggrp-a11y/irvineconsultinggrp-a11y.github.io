import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FAQItem from '../components/FaqItem';
import { ArrowUpRight } from 'lucide-react';

const clientLogos = [
  { src: '/clientlogo/bereal.png', alt: 'BeReal', small: true },
  { src: '/clientlogo/sandisk.png', alt: 'SanDisk' },
  { src: '/clientlogo/abd.png', alt: 'Artificial By Design' },
  { src: '/clientlogo/aura.png', alt: 'Aura' },
  { src: '/clientlogo/adgreetz.png', alt: 'AdGreetz' },
  { src: '/clientlogo/kura-sushi.png', alt: 'Kura Sushi' },
  { src: '/clientlogo/knowt.png', alt: 'Knowt' },
  { src: '/clientlogo/toughcutie.png', alt: 'ToughCutie' },
  { src: '/clientlogo/datedrop.png', alt: 'DateDrop' },
  { src: '/clientlogo/7leaves.png', alt: '7 Leaves', small: true },
];

const testimonials = [
  {
    quote:
      "The ICG team explored these domains with technical rigor by developing insights around model portability, edge to cloud tradeoffs and the architecture of AI-native data centers.",
    author: "Alex Veytsman",
    role: "CEO, Artificial By Design",
    logo: "/clientlogo/abd.png",
    headshot: "/clientheadshot/Alex Veytsman.jfif",
  },
  {
    quote:
      "ICG's approach to problem-solving was refreshing. They delivered insights that helped us reshape our market strategy.",
    author: "Brittany Coleman",
    role: "Founder and CEO, ToughCutie",
    logo: "/clientlogo/toughcutie.png",
    headshot: "/clientheadshot/Brittany Coleman.jpeg",
  },
  {
    quote:
      "It was a real pleasure working with the Irvine Consulting student team. They tackled a complex and demanding assignment and helped shape AdGreetz's expansion strategy with remarkable professionalism, clarity, and dedication.",
    author: "Amit Seth",
    role: "CEO, AdGreetz",
    logo: "/clientlogo/adgreetz.png",
    headshot: "/clientheadshot/Amit Seth.jpg",
  },
  {
    quote:
      "Everyone on the team was very sharp and engaged. They executed as a team very well, were always prepared and when feedback was provided, they acted upon it timely.",
    author: "Brittany Coleman",
    role: "CEO, ToughCutie",
    logo: "/clientlogo/toughcutie.png",
    headshot: "/clientheadshot/Brittany Coleman.jpeg",
  },
];

const faqs = [
  {
    question: "When is the next recruitment cycle for ICG?",
    answer:
      "For recruitment information, check out the Join Us page. All information will be updated on a quarterly basis.",
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

function TestimonialCard({ testimonial, position, onClick }) {
  const variants = {
    center: { x: 0, scale: 1, opacity: 1, zIndex: 10, filter: 'blur(0px)' },
    left: { x: '-70%', scale: 0.85, opacity: 0.5, zIndex: 5, filter: 'blur(2px)' },
    right: { x: '70%', scale: 0.85, opacity: 0.5, zIndex: 5, filter: 'blur(2px)' },
    hidden: { x: 0, scale: 0.7, opacity: 0, zIndex: 0, filter: 'blur(4px)' },
  };

  const isClickable = position === 'left' || position === 'right';

  return (
    <motion.div
      className={`absolute w-full max-w-2xl px-4 ${isClickable ? 'cursor-pointer' : ''}`}
      animate={position}
      variants={variants}
      initial={false}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{ pointerEvents: position === 'hidden' ? 'none' : 'auto' }}
      onClick={isClickable ? onClick : undefined}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {testimonial.headshot && (
              <img
                src={testimonial.headshot}
                alt={testimonial.author}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shrink-0"
              />
            )}
            <div>
              <p className="font-bold text-icgblue">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <img
            src={testimonial.logo}
            alt="Company"
            className="h-20 md:h-24 w-auto max-w-[min(100%,280px)] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const getPosition = (index) => {
    const total = testimonials.length;
    const diff = (index - currentTestimonial + total) % total;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === total - 1) return 'left';
    return 'hidden';
  };

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO ===== */}
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('/skyline.jpg')` }}
      >
        <div className="absolute inset-0 bg-icgblue/75" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="font-extrabold text-white leading-none tracking-tight whitespace-nowrap text-[clamp(2.2rem,7vw,6.5rem)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Irvine Consulting Group
          </motion.h1>
          <motion.p
            className="mt-5 text-sm sm:text-[1.05rem] md:text-[1.3125rem] font-semibold tracking-wide bg-clip-text text-transparent leading-[1.45] pb-[0.2em] inline-block max-w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #a8d8ff, #ffffff, #a8d8ff)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            UCI&apos;s Premier Strategy Consulting Org
          </motion.p>
        </div>

        {/* Scrolling client logos */}
        <div className="relative z-10 pb-14">
          <div className="overflow-hidden py-4">
            <div className="logo-carousel-track-hero flex items-center gap-16 md:gap-24">
              {doubledLogos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.small ? 'h-10 md:h-[90px] max-w-[220px] md:max-w-[350px]' : 'h-16 md:h-[144px] max-w-[350px] md:max-w-[550px]'} w-auto object-contain brightness-0 invert opacity-70 shrink-0`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== WHAT IS ICG ===== */}
      <div className="bg-white py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="w-full md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-icgblue">
                What is ICG?
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                ICG is the premier strategy consulting organization at UC Irvine,
                dedicated to shaping the future leaders in consulting through
                experiential learning and development opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-icgblue text-white font-semibold px-7 py-3 rounded-lg hover:bg-icgblue/90 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="overflow-hidden rounded-xl shadow-md aspect-[4/3] w-full">
                <img
                  src="/W%2726%20Group.jpg"
                  alt="ICG team — Winter 2026 group"
                  className="h-full w-full object-cover object-[38%_center] scale-[1.22] origin-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== STATS (~1.75× vs previous text-4xl/md:text-5xl + labels) ===== */}
      <div className="bg-white pb-36 md:pb-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-[5.25rem] text-center">
            {[
              { number: '13+', label: 'Clients served' },
              { number: '$200 M+', label: 'Value Served', numberNowrap: true },
              { number: '600+', label: 'Hours of Service' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="min-w-0 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p
                  className={`inline-block text-[3.94rem] md:text-[5.25rem] font-bold text-icgblue tracking-tight leading-none transition-transform duration-300 hover:scale-110 cursor-default ${
                    stat.numberNowrap ? 'whitespace-nowrap' : ''
                  }`}
                >
                  {stat.number}
                </p>
                <p className="mt-4 text-black text-[1.75rem] font-light leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <div className="bg-[#f0f4f8] py-24 md:py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-icgblue text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <p className="text-center text-gray-400 mt-2 mb-16 font-light">
            Trusted by Professionals
          </p>

          {/* 3D Carousel */}
          <div
            className="relative flex items-center justify-center"
            style={{ height: '380px' }}
          >
            <AnimatePresence mode="popLayout">
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  testimonial={t}
                  position={getPosition(i)}
                  onClick={() => setCurrentTestimonial(i)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Nav arrows + dots */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prevTestimonial}
              className="text-gray-400 hover:text-icgblue transition-colors text-2xl"
              aria-label="Previous"
            >
              &larr;
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === i ? 'bg-icgblue w-7' : 'bg-gray-300'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="text-gray-400 hover:text-icgblue transition-colors text-2xl"
              aria-label="Next"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <div className="bg-white py-24 md:py-28 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-icgblue mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently asked Questions
          </motion.h2>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="bg-white pb-28 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-icgblue leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Enough about us.
            <br />
            <span className="font-light">What can we do for you?</span>
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/students"
              className="inline-flex items-center gap-2 bg-icgblue text-white font-bold px-7 py-3.5 rounded-full hover:bg-icgblue/90 transition-colors"
            >
              I am a STUDENT <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-icgblue text-white font-bold px-7 py-3.5 rounded-full hover:bg-icgblue/90 transition-colors"
            >
              I am a BUSINESS <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
