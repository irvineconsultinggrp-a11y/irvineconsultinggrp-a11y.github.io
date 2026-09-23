import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import DevelopmentCarousel from "../components/DevelopmentCarousel";
import ScrollReveal from "../components/ScrollReveal";
import { Reveal, Stagger, StaggerItem } from "../components/Motion";
import { DUR, EASE, maskUp, stagger } from "../lib/motion";
import { headshotV2 } from "../data/teamMembers";

const APPLY_URL = "https://apply.irvineconsultinggroup.com";
const COFFEE_CHAT_URL = "https://apply.irvineconsultinggroup.com/coffee-chat";

const testimonials = [
  {
    name: "Khang Nguyen",
    role: "President",
    quote:
      "Leading ICG has meant building a team that delivers for clients and pushes each other to think sharper every day. The ownership is real, the pace is fast, and the people around you will make you better. If you want responsibility and growth, this is a special place to be.",
    image: headshotV2("Khang Nguyen.png"),
  },
  {
    name: "Trinity Nguyen",
    role: "Director of Corp Relations",
    quote: "Joining Irvine Consulting Group has been one of the most valuable experiences of my college career. I've grown so much in terms of problem-solving, communication, and leadership, all while being surrounded by an ambitious and supportive team. ICG truly feels like a launchpad.",
    image: headshotV2("Trinity Nguyen.png"),
  },
  {
    name: "Eric Zheng",
    role: "Consultant",
    quote: "Being part of ICG has really changed the way I view life as a whole. Being surrounded by people who know what they're doing gives you the push forward into your career. It's about surrounding yourself with capable people who drive you to be better every single day.",
    image: headshotV2("Eric Zheng.png"),
  },
];

const timelineData = [
  {
    date: "Sep 22, 2026",
    heading: "Applications Open",
    content: "Apply to join ICG and take the first step toward a hands-on consulting experience. Stay connected on LinkedIn, Instagram, and our website for updates.",
    button: { label: "Apply Now", href: APPLY_URL, disabled: false },
  },
  {
    date: "Sep 24 - Sep 30, 2026",
    heading: "Coffee Chats",
    content: "Schedule a 1-on-1 conversation with an ICG member to learn more about the organization and ask any questions you have.",
    button: { label: "Schedule Now", href: COFFEE_CHAT_URL, disabled: false },
  },
  {
    date: "Sep 25, 2026",
    time: "11:00 AM",
    heading: "ICG x ITG Social",
    content: "Join us for a social event to meet the ICG and Irvine Investment & Trading Group (ITG) teams, network with peers, and learn more about our organizations.",
    button: { label: "RSVP", href: APPLY_URL, disabled: true },
  },
  {
    date: "Sep 27, 2026",
    time: "3:00 PM",
    heading: "Cha For Tea Social",
    content: "Connect with the ICG team at our Cha For Tea social event. Great opportunity to ask questions and get to know us in a casual setting.",
    button: { label: "RSVP", href: APPLY_URL, disabled: true },
  },
  {
    date: "Sep 28, 2026",
    time: "6:00 PM",
    heading: "Info Session #1",
    content: "Meet the ICG team, learn more about ICG, and gain insights on the recruitment process.",
    button: { label: "RSVP", href: APPLY_URL, disabled: true },
  },
  {
    date: "Sep 30, 2026",
    time: "5:00 PM",
    heading: "Info Session #2",
    content: "Join our interactive case and panel session on careers and internships in different industries.",
    button: { label: "RSVP", href: APPLY_URL, disabled: true },
  },
  {
    date: "Sep 30, 2026",
    time: "11:59 PM",
    heading: "Application Deadline",
    content: "Applications must be submitted by 11:59 PM on September 30th!",
  },
  {
    date: "Oct 3, 2026",
    time: "6:00 PM",
    heading: "Round 1 Interview",
    content: "Invite only. First round interviews will be held on October 3rd.",
    inviteOnly: true,
  },
  {
    date: "Oct 4, 2026",
    time: "6:00 PM",
    heading: "Round 2 Interview",
    content: "Invite only. Second round interviews will be held on October 4th.",
    inviteOnly: true,
  },
  {
    date: "Oct 4, 2026",
    time: "6:00 PM",
    heading: "Round 3 Interview",
    content: "Invite only. Third round interviews will be held on October 4th.",
    inviteOnly: true,
  },
];

function Students() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  // Plate sits in an over-sized frame so the drift never exposes an edge.
  const plateY = useTransform(scrollYProgress, [0, 1], [0, 44]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -58]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO ===== */}
      <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-x-0 -top-14 h-[calc(100%+7rem)]"
          style={reduceMotion ? undefined : { y: plateY }}
        >
          <img
            src="/W27-girls-stairs.jpg"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full origin-center object-cover object-[center_30%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-icgblue/70" />
        <motion.div
          className="relative z-10 text-center px-6"
          style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
        >
          <motion.div
            variants={reduceMotion ? undefined : stagger(0.13, 0.15)}
            initial={reduceMotion ? undefined : 'hidden'}
            animate={reduceMotion ? undefined : 'visible'}
          >
            <motion.h1
              variants={reduceMotion ? undefined : maskUp(30, 1)}
              className="text-4xl sm:text-5xl md:text-7xl text-white font-extrabold leading-[1.08] tracking-tighter pb-1"
            >
              Join UCI&apos;s
            </motion.h1>
            <motion.h1
              variants={reduceMotion ? undefined : maskUp(30, 1)}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tighter bg-clip-text text-transparent mt-0 pb-1"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #a8d8ff, #ffffff, #a8d8ff)",
              }}
            >
              Premier Strategy Consulting Organization
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== FLOATING CONTENT PANEL ===== */}
      <div className="relative z-10 -mt-10 md:-mt-16 bg-white rounded-t-[28px] md:rounded-t-[40px] px-4 md:px-8 pt-8 md:pt-12 pb-16">

        {/* ===== YOUR ICG EXPERIENCE ===== */}
        <ScrollReveal>
        <div className="pt-16 pb-10 px-2 md:px-6">
          <div className="container mx-auto">
            <Reveal
              as="h2"
              preset="mask"
              className="text-5xl md:text-7xl font-extrabold text-icgblue mb-4 text-center"
            >
              Your ICG Experience
            </Reveal>
          </div>
          <div className="text-icgblue">
            <DevelopmentCarousel />
          </div>
        </div>
        </ScrollReveal>

        {/* ===== TESTIMONIALS ===== */}
        <div className="pt-8 pb-24 px-2 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <Stagger
              step={0.12}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-stretch"
            >
              {testimonials.map((t, i) => (
                <StaggerItem
                  key={i}
                  y={26}
                  className="card-lift bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg flex flex-col h-full"
                >
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mt-auto shrink-0">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <img
                        src={t.image}
                        alt={t.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full origin-center scale-[1.08] object-cover object-center"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-icgblue">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        {/* ===== RECRUITMENT TIMELINE ===== */}
        <ScrollReveal>
        <div className="py-24 px-2 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <Reveal
              as="h2"
              preset="mask"
              className="text-5xl md:text-7xl font-extrabold text-icgblue mb-14 md:mb-16 text-center"
            >
              Recruitment Timeline
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-0">
              {[0, 1].map((col) => {
                const half = Math.ceil(timelineData.length / 2);
                const colItems = col === 0
                  ? timelineData.slice(0, half)
                  : timelineData.slice(half);
                return (
                <div key={col} className="relative ml-3 md:ml-5">
                  {colItems
                    .map((item, idx, arr) => {
                      const i = col === 0 ? idx : half + idx;
                      return (
                        <div key={i} className="relative flex items-stretch">
                          <div className="flex flex-col items-center shrink-0 w-6">
                            <div className={`w-px flex-1 ${idx === 0 ? 'bg-transparent' : 'bg-gray-300'}`} />
                            <motion.div
                              className="w-3 h-3 rounded-full bg-icgblue shrink-0"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true, amount: 0.6 }}
                              transition={{ type: 'spring', stiffness: 460, damping: 26, mass: 0.6 }}
                            />
                            <motion.div
                              className={`w-px flex-1 origin-top ${idx === arr.length - 1 ? 'bg-transparent' : 'bg-gray-300'}`}
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
                            />
                          </div>

                          <motion.div
                            className="flex-1 ml-6 md:ml-8 mb-8"
                            initial={{ opacity: 0, x: 22 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3, margin: '0px 0px -6% 0px' }}
                            transition={{ duration: DUR.base, ease: EASE, delay: 0.06 }}
                          >
                            <div className="card-lift bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <div>
                                  <h3 className="text-lg md:text-xl font-bold text-icgblue">
                                    {item.heading}
                                  </h3>
                                  <p className="text-sm font-medium text-[#005d97]">
                                    {item.date}
                                  </p>
                                </div>
                                {item.time && (
                                  <span className="shrink-0 bg-gradient-to-r from-icgblue to-[#0a2e42] text-white text-sm font-bold px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                                    {item.inviteOnly ? "Invite Only" : item.time}
                                  </span>
                                )}
                                {item.button && !item.button.disabled && (
                                  <a
                                    href={item.button.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 bg-icgblue text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-icgblue/90 hover:scale-105 transition-all duration-200"
                                  >
                                    {item.button.label}
                                  </a>
                                )}
                                {item.button?.disabled && !item.time && (
                                  <span className="shrink-0 bg-gray-200 text-gray-500 text-sm font-bold px-5 py-2 rounded-md cursor-not-allowed select-none">
                                    Coming soon
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2">
                                {item.content}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                </div>
                );
              })}
            </div>
          </div>
        </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

export default Students;
