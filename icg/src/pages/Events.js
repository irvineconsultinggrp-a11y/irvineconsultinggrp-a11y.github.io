import React, { useState } from "react";
import { motion } from "framer-motion";
import EventRsvpDialog from "../components/RSVP";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const pastEvents = [
  {
    id: 1,
    title: "Consulting 101: What is it?",
    description:
      "Learn how to tackle consulting case interviews with industry professionals and get the opportunity to listen to successful UCI alumni.",
    date: "May 8, 2025 • 6:00 PM",
    location: "Antrepreneur Center",
    image: "/speaker1.png",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSczYg0fm7ldwse1k6p09NfhfsZYUVNYtEsPr3a7il71Ins-cQ/viewform?embedded=true",
  },
  {
    id: 2,
    title: "Breaking in: Recruitment and Corporate Strategies",
    description:
      "Join us for a panel discussion with industry professionals and learn how to break into the consulting industry.",
    date: "May 15, 2025 • 6:00 PM",
    location: "Antrepreneur Center",
    image: "/workshop-2.png",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSe-zI6VLwxLySvm5SR7PjJru5Vy-kdIvyASxJjE3WcEga608w/viewform?embedded=true",
  },
  {
    id: 3,
    title: "Inside the Firm: MBB, Big 4, and Beyond",
    description:
      "Learn about what it is like to work at top consulting firms and how to prepare for the recruitment process.",
    date: "May 22, 2025 • 6:00 PM",
    location: "Antrepreneur Center",
    image: "/workshop-3.png",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfgfm3tp5zXqEcyVl0E02wbs80cbMLzoH3jLI4RXafw6U8fbg/viewform?embedded=true",
  },
];

function TabButton({ label, isActive, onClick, dark }) {
  if (dark) {
    return (
      <button
        onClick={onClick}
        className={`
          px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-200
          ${
            isActive
              ? "bg-icgblue text-white"
              : "border border-gray-300 text-gray-600 hover:border-gray-500 hover:text-gray-800"
          }
        `}
      >
        {label}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-200
        ${
          isActive
            ? "bg-white text-icgblue"
            : "border border-white/60 text-white hover:bg-white/10"
        }
      `}
    >
      {label}
    </button>
  );
}

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="overflow-x-hidden">
      {/* ===== Upcoming Events View ===== */}
      {activeTab === "upcoming" && (
        <>
          {/* Dark top bar for navbar visibility */}
          <div className="bg-icgblue h-20 md:h-24" />

          <div className="bg-white min-h-[75vh] flex flex-col items-center justify-center px-6 relative">
            {/* Tab Buttons */}
            <div className="flex gap-3 absolute top-8 md:top-10">
              <TabButton
                label="Upcoming Events"
                isActive={true}
                onClick={() => setActiveTab("upcoming")}
                dark
              />
              <TabButton
                label="Past Events"
                isActive={false}
                onClick={() => setActiveTab("past")}
                dark
              />
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key="upcoming"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.85] tracking-tighter text-icgblue mb-4">
                Stay Tuned
              </h1>
              <p className="text-gray-500 text-base md:text-lg">
                There are currently no upcoming events.
              </p>
            </motion.div>
          </div>

          {/* Dark blue ending bar */}
          <div className="bg-icgblue h-32 md:h-40" />
        </>
      )}

      {/* ===== Past Events View ===== */}
      {activeTab === "past" && (
        <>
          {/* Dark top bar for navbar visibility */}
          <div className="bg-icgblue h-20 md:h-24" />

          {/* Tab buttons + cards on white background */}
          <div className="bg-white px-4 md:px-8 pt-8 md:pt-10 pb-20">
            <div className="flex justify-center gap-3 mb-12">
              <TabButton
                label="Upcoming Events"
                isActive={false}
                onClick={() => setActiveTab("upcoming")}
                dark
              />
              <TabButton
                label="Past Events"
                isActive={true}
                onClick={() => setActiveTab("past")}
                dark
              />
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, i) => (
                  <EventCard key={event.id} event={event} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Dark blue ending bar */}
          <div className="bg-icgblue h-32 md:h-40" />
        </>
      )}
    </div>
  );
}

function EventCard({ event, index, showRsvp = false }) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={fadeUp}
    >
      <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{event.date}</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {event.description}
        </p>
        {showRsvp && (
          <div className="mt-4">
            <EventRsvpDialog event={event} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
