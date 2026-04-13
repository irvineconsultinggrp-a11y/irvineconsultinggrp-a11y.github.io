import React from 'react';
import { motion } from 'framer-motion';
import DevelopmentCarousel from "../components/DevelopmentCarousel";

const APPLY_URL = "https://apply.irvineconsultinggroup.com";
const COFFEE_CHAT_URL = "https://apply.irvineconsultinggroup.com/coffee-chat";

const testimonials = [
  {
    name: "Khang Nguyen",
    role: "President, ICG",
    quote: "Joining Irvine Consulting Group has been one of the most valuable experiences of my college career. I've grown so much in terms of problem-solving, communication, and leadership, all while being surrounded by an ambitious and supportive team. ICG truly feels like a launchpad.",
    image: "/headshots/Khang.png",
  },
  {
    name: "Trinity Nguyen",
    role: "Consultant, ICG",
    quote: "Joining Irvine Consulting Group has been one of the most valuable experiences of my college career. I've grown so much in terms of problem-solving, communication, and leadership, all while being surrounded by an ambitious and supportive team. ICG truly feels like a launchpad.",
    image: "/headshots/Trinity.png",
  },
];

const timelineData = [
  {
    date: "Oct 1, 2026",
    heading: "Applications Open",
    content: "Apply to join ICG and take the first step toward a hands-on consulting experience. Stay connected on LinkedIn, Instagram, and our website for updates.",
    button: { label: "Apply", href: APPLY_URL },
  },
  {
    date: "Oct 7–10, 2026",
    heading: "Coffee Chats",
    content: "Schedule a coffee chat with someone from the ICG team to learn more about the application process and get your questions answered.",
    button: { label: "Sign Up", href: COFFEE_CHAT_URL },
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function Students() {
  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO ===== */}
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-extrabold leading-[0.85] tracking-tighter">
              Join UCI&apos;s
            </h1>
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.85] tracking-tighter bg-clip-text text-transparent mt-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #a8d8ff, #ffffff, #a8d8ff)",
              }}
            >
              Premier Strategy Consulting Org
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 border-2 border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:text-icgblue transition-all duration-300"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* ===== FLOATING CONTENT PANEL ===== */}
      <div className="relative z-10 -mt-10 md:-mt-16 bg-white rounded-t-[28px] md:rounded-t-[40px] px-4 md:px-8 pt-8 md:pt-12 pb-16">

        {/* ===== YOUR ICG EXPERIENCE ===== */}
        <div className="pt-16 pb-10 px-2 md:px-6">
          <div className="container mx-auto">
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold text-icgblue mb-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Your ICG Experience
            </motion.h2>
          </div>
          <div className="text-icgblue">
            <DevelopmentCarousel />
          </div>
        </div>

        {/* ===== TESTIMONIALS ===== */}
        <div className="pt-8 pb-24 px-2 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                >
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-icgblue">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== RECRUITMENT TIMELINE ===== */}
        <div className="py-24 px-2 md:px-6">
          <div className="container mx-auto max-w-3xl">
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold text-icgblue mb-40 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Recruitment Timeline
            </motion.h2>

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
                        {item.button && (
                          <a
                            href={item.button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 bg-icgblue text-white text-sm font-bold px-5 py-2 rounded-md hover:bg-icgblue/90 hover:scale-105 transition-all duration-200"
                          >
                            {item.button.label}
                          </a>
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

      </div>
    </div>
  );
}

export default Students;
