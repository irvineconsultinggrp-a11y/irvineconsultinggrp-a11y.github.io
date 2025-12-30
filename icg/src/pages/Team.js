import React, { useState } from "react";
import { GrLinkedin } from "react-icons/gr";
import {
  getAllMembers,
  getMembersByCategory,
  getMembersGroupedByCommittee,
  COMMITTEES,
} from "../data/teamMembers";

/** Reusable member card */
function MemberCard({ name, role, image, hoverImage, linkedin, showRole = true }) {
  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 rounded-full overflow-hidden hover:cursor-pointer shadow-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {hoverImage && (
          <img
            src={hoverImage}
            alt={`${name} hover`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </div>

      <div className="text-center">
        <h3 className="text-lg md:text-xl font-semibold text-white">{name}</h3>
        {showRole && role && (
          <p className="text-xs md:text-sm text-gray-300 max-w-[220px] mx-auto">
            {role}
          </p>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center"
            aria-label={`${name} LinkedIn`}
          >
            <GrLinkedin className="text-2xl md:text-3xl text-white/90 hover:text-white transition-colors" />
          </a>
        )}
      </div>
    </div>
  );
}

/** Tab button component */
function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 md:px-6 md:py-3 
        text-sm md:text-base font-medium
        rounded-full transition-all duration-200
        ${
          isActive
            ? "bg-white text-icgblue shadow-lg"
            : "bg-icgblue text-white border border-white/30 hover:bg-white/10 hover:border-white/50"
        }
      `}
    >
      {label}
    </button>
  );
}

/** Tab definitions */
const TABS = [
  { key: "all", label: "All Members" },
  { key: "executives", label: "Executives" },
  { key: "directors", label: "Directors" },
  { key: "committee", label: "Committee" },
  { key: "projectManagers", label: "Project Managers" },
];

export default function Team() {
  const [activeTab, setActiveTab] = useState("all");

  /** Get members for current tab */
  const getDisplayMembers = () => {
    switch (activeTab) {
      case "all":
        // Exclude advisors from "All Members" view
        return getAllMembers().filter(
          (m) => !m.categories.includes("advisors")
        );
      case "executives":
        return getMembersByCategory("executives");
      case "directors":
        return getMembersByCategory("directors");
      case "projectManagers":
        return getMembersByCategory("projectManagers");
      case "committee":
        // Committee view is handled separately with grouped display
        return null;
      default:
        return getAllMembers();
    }
  };

  /** Render committee grouped view */
  const renderCommitteeView = () => {
    const grouped = getMembersGroupedByCommittee();

    return (
      <div className="space-y-12">
        {COMMITTEES.map((committeeName) => {
          const members = grouped[committeeName];
          if (!members || members.length === 0) return null;

          return (
            <div key={committeeName}>
              <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
                {committeeName === "ProDev" ? "Professional Development" : committeeName}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10 md:gap-y-14 place-items-center">
                {members.map((member) => (
                  <MemberCard
                    key={`${committeeName}-${member.id}`}
                    name={member.name}
                    role={member.role}
                    image={member.headshotSrc}
                    hoverImage={member.hoverSrc}
                    linkedin={member.linkedinUrl}
                    showRole={false} // No role subtitle in Committee view per spec
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  /** Render standard grid view */
  const renderGridView = () => {
    const members = getDisplayMembers();
    if (!members) return null;

    // Get section title based on active tab
    const getSectionTitle = () => {
      switch (activeTab) {
        case "executives":
          return "Executive Board";
        case "directors":
          return "Directors";
        case "projectManagers":
          return "Project Managers";
        default:
          return null;
      }
    };

    const title = getSectionTitle();

    return (
      <div>
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10 md:gap-y-14 place-items-center">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.headshotSrc}
              hoverImage={member.hoverSrc}
              linkedin={member.linkedinUrl}
            />
          ))}
        </div>
      </div>
    );
  };

  /** Get advisors for the Advisors section */
  const advisors = getMembersByCategory("advisors");

  return (
    <div>
      {/* ===== Hero ===== */}
      <div
        className="h-[70vh] md:h-[80vh] bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url('/ICG Team pic.png')` }}
      >
        <div className="absolute inset-0 bg-icgblue/30" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-icgblue to-transparent" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center -mt-20 md:mt-0">
            Meet Our Team
          </h1>
        </div>
      </div>

      {/* ===== Cityscape + Content ===== */}
      <div
        className="bg-fixed bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url('/cityscape.jpeg')` }}
      >
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-icgblue to-transparent" />
        <div className="absolute inset-0 bg-icgblue/70" />

        <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 pb-24">
          {/* ===== Tab Buttons ===== */}
          <div className="pt-12 pb-10">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {TABS.map((tab) => (
                <TabButton
                  key={tab.key}
                  label={tab.label}
                  isActive={activeTab === tab.key}
                  onClick={() => setActiveTab(tab.key)}
                />
              ))}
            </div>
          </div>

          {/* ===== Dynamic Content ===== */}
          <div className="pt-4">
            {activeTab === "committee" ? renderCommitteeView() : renderGridView()}
          </div>

          {/* ===== Advisors (always shown) ===== */}
          <div className="pt-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
              Advisors
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {advisors.map((advisor) => (
                <MemberCard
                  key={advisor.id}
                  name={advisor.name}
                  role={advisor.role}
                  image={advisor.headshotSrc}
                  hoverImage={advisor.hoverSrc}
                  linkedin={advisor.linkedinUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
