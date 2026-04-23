import React from 'react';
import { motion } from 'framer-motion';
import DevelopmentCarousel from "../components/DevelopmentCarousel";
import ScrollReveal from "../components/ScrollReveal";
import { headshotV2 } from "../data/teamMembers";

const APPLY_URL = "https://apply.irvineconsultinggroup.com";
const COFFEE_CHAT_URL = "https://apply.irvineconsultinggroup.com/coffee-chat";

const testimonials = [
  {
    name: "Khang Nguyen",
    role: "President, ICG",
    quote:
      "Leading ICG has meant building a team that delivers for clients and pushes each other to think sharper every day. The ownership is real, the pace is fast, and the people around you will make you better. If you want responsibility and growth, this is a special place to be.",
    image: headshotV2("Khang Nguyen.png"),
  },
  {
    name: "Trinity Nguyen",
    role: "Consultant, ICG",
    quote: "Joining Irvine Consulting Group has been one of the most valuable experiences of my college career. I've grown so much in terms of problem-solving, communication, and leadership, all while being surrounded by an ambitious and supportive team. ICG truly feels like a launchpad.",
    image: headshotV2("Trinity Nguyen.png"),
  },
];

const timelineData = [
  {
    date: "Oct 1, 2026",
    heading: "Applications Open",
    content: "Apply to join ICG and take the first step toward a hands-on consulting experience. Stay connected on LinkedIn, Instagram, and our website for updates.",
    button: { label: "Apply", href: APPLY_URL, disabled: true },
  },
  {
    date: "Oct 7–10, 2026",
    heading: "Coffee Chats",
    content: "Schedule a coffee chat with someone from the ICG team to learn more about the application process and get your questions answered.",
    button: { label: "Sign Up", href: COFFEE_CHAT_URL, disabled: true },
  },
  {
    date: "Oct 15, 2026",
    heading: "In-Person Info Session",
    content: "Meet the ICG team, learn more about ICG, gain insights on the recruitment process",
  },
  {
    date: "Oct 24, 2026",
    heading: "Application Deadline",
    content: "Applications must be submitted by 11:59 PM on October 24th!",
  },
  {
    date: "Oct 27, 2026",
    heading: "First Round Group Interviews",
    content: "Group interviews will be held on October 27th. You will be paired with other candidates and will have a chance to share your skills in a group setting.",
  },
  {
    date: "Oct 30, 2026",
    heading: "Second Round Individual Interviews",
    content: "Individual interviews will be held on October 30th. You will have a chance to share your skills and learn more about the ICG team in a one-on-one setting.",
  },
];

function Students() {
  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO ===== */}
      <ScrollReveal>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url("/W%2726%20Girls.jpg")` }}
      >
        <div className="absolute inset-0 bg-icgblue/70" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-extrabold leading-[1.08] tracking-tighter pb-1">
              Join UCI&apos;s
            </h1>
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tighter bg-clip-text text-transparent mt-0 pb-1"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #a8d8ff, #ffffff, #a8d8ff)",
              }}
            >
              Premier Strategy Consulting Org
            </h1>
          </motion.div>
        </div>
      </div>
      </ScrollReveal>

      {/* ===== FLOATING CONTENT PANEL ===== */}
      <div className="relative z-10 -mt-10 md:-mt-16 bg-white rounded-t-[28px] md:rounded-t-[40px] px-4 md:px-8 pt-8 md:pt-12 pb-16">

        {/* ===== YOUR ICG EXPERIENCE ===== */}
        <ScrollReveal>
        <div className="pt-16 pb-10 px-2 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold text-icgblue mb-4 text-center">
              Your ICG Experience
            </h2>
          </div>
          <div className="text-icgblue">
            <DevelopmentCarousel />
          </div>
        </div>
        </ScrollReveal>

        {/* ===== TESTIMONIALS ===== */}
        <ScrollReveal>
        <div className="pt-8 pb-24 px-2 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-stretch">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mt-auto shrink-0">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full origin-center scale-[1.08] object-cover object-center"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-icgblue">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* ===== RECRUITMENT TIMELINE ===== */}
        <ScrollReveal>
        <div className="py-24 px-2 md:px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-extrabold text-icgblue mb-40 text-center">
              Recruitment Timeline
            </h2>

            <div className="relative ml-3 md:ml-5">
              {timelineData.map((item, i) => (
                <div key={i} className="relative flex items-stretch">
                  {/* Left column: dot + connector line */}
                  <div className="flex flex-col items-center shrink-0 w-6">
                    <div className={`w-px flex-1 ${i === 0 ? 'bg-transparent' : 'bg-gray-300'}`} />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-icgblue shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15, type: 'spring', stiffness: 300 }}
                    />
                    <motion.div
                      className={`w-px flex-1 origin-top ${i === timelineData.length - 1 ? 'bg-transparent' : 'bg-gray-300'}`}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="flex-1 ml-6 md:ml-10 mb-8"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-icgblue">
                            {item.heading}
                          </h3>
                          <p className="text-sm font-medium text-[#005d97] italic">
                            {item.date}
                          </p>
                        </div>
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
                        {item.button?.disabled && (
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
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

export default Students;
