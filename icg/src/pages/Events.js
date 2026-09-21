import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import EventRsvpDialog from "../components/RSVP";

const upcomingEvents = [
  {
    id: 0,
    title: "Speaker Panel",
    description:
      "Join us for a panel discussing careers in consulting, industry insights, and advice from professionals in the field.",
    date: "Coming Soon",
    image: "/icg-logo.webp",
  },
  {
    id: 1,
    title: "Case Competition Fall 2026",
    description:
      "ICG's upcoming case competition to tackle a real-world business challenge, present your ideas to industry professionals, and compete alongside fellow students.",
    date: "Coming Soon",
    image: "/icg-logo.webp",
  },
];

const pastEvents = [
  {
    id: 0,
    title: "EY-Parthenon Case Competition | ICG x AKPsi",
    description:
      "ICG's Spring 2026 case competition brought together 100+ participants from 10+ schools to solve a real-world business challenge and compete alongside other ambitious students. Teams presented their recommendations to a judging panel that included professionals from EY-Parthenon, gaining hands-on experience in problem-solving, teamwork, and case presentation.",
    date: "Spring 2026",
    location: "Antrepreneur Center",
    images: [
      "/case-competition-1.webp",
      "/case-competition-2.jpg",
      "/case-competition-3.jpg",
      "/case-competition-4.jpg",
    ],
  },
  {
    id: 1,
    title: "Consulting 101: What is it?",
    description:
      "Learn how to tackle consulting case interviews with industry professionals and get the opportunity to listen to successful UCI alumni.",
    date: "May 8, 2025",
    location: "Antrepreneur Center",
    image: "/speaker1.webp",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSczYg0fm7ldwse1k6p09NfhfsZYUVNYtEsPr3a7il71Ins-cQ/viewform?embedded=true",
  },
  {
    id: 2,
    title: "Breaking in: Recruitment and Corporate Strategies",
    description:
      "Join us for a panel discussion with industry professionals and learn how to break into the consulting industry.",
    date: "May 15, 2025",
    location: "Antrepreneur Center",
    image: "/workshop-2.webp",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSe-zI6VLwxLySvm5SR7PjJru5Vy-kdIvyASxJjE3WcEga608w/viewform?embedded=true",
  },
  {
    id: 3,
    title: "Inside the Firm: MBB, Big 4, and Beyond",
    description:
      "Learn about what it is like to work at top consulting firms and how to prepare for the recruitment process.",
    date: "May 22, 2025",
    location: "Antrepreneur Center",
    image: "/workshop-3.webp",
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

          <div>
          {/* Tab buttons + cards on white background */}
          <div className="bg-white px-4 md:px-8 pt-8 md:pt-10 pb-48">
            <div className="flex justify-center gap-3 mb-12">
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
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, i) => (
                  <EventCard key={event.id} event={event} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Spacer before footer (white; footer is dark blue) */}
          <div className="bg-white h-8" />
          </div>
        </>
      )}

      {/* ===== Past Events View ===== */}
      {activeTab === "past" && (
        <>
          {/* Dark top bar for navbar visibility */}
          <div className="bg-icgblue h-20 md:h-24" />

          <div>
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
              <div className="flex justify-center mb-12">
                <div className="w-full max-w-sm">
                  <EventCard key={pastEvents[0].id} event={pastEvents[0]} index={0} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.slice(1).map((event, i) => (
                  <EventCard key={event.id} event={event} index={i + 1} />
                ))}
              </div>
            </div>
          </div>

          {/* Spacer before footer (white; footer is dark blue) */}
          <div className="bg-white h-8" />
          </div>
        </>
      )}
    </div>
  );
}

function EventCard({ event, index, showRsvp = false }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const images = event.images || [event.image];
  const hasMultipleImages = images.length > 1;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative group">
        <img
          src={images[currentImageIndex]}
          alt={event.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentImageIndex
                      ? "bg-white w-6"
                      : "bg-white/50 w-2 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{event.date}</p>
        <div>
          <p className={`text-gray-600 text-sm leading-relaxed ${!expandedDescription && event.description.length > 200 ? "line-clamp-3" : ""}`}>
            {event.description}
          </p>
          {event.description.length > 200 && (
            <button
              onClick={() => setExpandedDescription(!expandedDescription)}
              className="text-icgblue text-sm font-semibold hover:underline mt-2"
            >
              {expandedDescription ? "...see less" : "...see more"}
            </button>
          )}
        </div>
        {showRsvp && (
          <div className="mt-4">
            <EventRsvpDialog event={event} />
          </div>
        )}
      </div>
    </div>
  );
}
