import React, { useState } from "react";
import { GrLinkedin } from "react-icons/gr";
import {
  getAllMembers,
  getMembersByCategory,
} from "../data/teamMembers";

function MemberCard({ name, role, image, linkedin, objectPosition, imgStyle, coolOverlay }) {
  const style = { ...objectPosition && { objectPosition }, ...imgStyle };
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-3 rounded-full overflow-hidden shadow-md ring-0 ring-icgblue/15 transition-all duration-300 ease-out hover:scale-[1.07] hover:-translate-y-1.5 hover:shadow-xl hover:ring-4 hover:z-10 cursor-default"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-[center_70%]"
          style={Object.keys(style).length ? style : undefined}
        />
        {coolOverlay && (
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        )}
      </div>

      <div className="text-center">
        <h3 className="text-sm md:text-base font-bold text-gray-900">{name}</h3>
        {role && (
          <p className="text-xs text-gray-500">{role}</p>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center"
            aria-label={`${name} LinkedIn`}
          >
            <GrLinkedin className="text-xl text-gray-800 hover:text-icgblue transition-colors" />
          </a>
        )}
      </div>
    </div>
  );
}

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 text-sm md:text-base font-medium
        border transition-all duration-200
        ${
          isActive
            ? "border-gray-900 text-gray-900 font-bold"
            : "border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700"
        }
      `}
    >
      {label}
    </button>
  );
}

const TABS = [
  { key: "all", label: "All Members" },
  { key: "executives", label: "Executives" },
  { key: "directors", label: "Directors" },
  { key: "projectManagers", label: "Project Managers" },
];

/** Sort key for "All Members": President → VPs → Directors → others; stable by source order. */
function memberDisplayTier(member) {
  if (member.role === "President") return 0;
  if (member.role === "Vice President") return 1;
  if (member.categories.includes("directors")) return 2;
  return 3;
}

function sortMembersForAllView(members) {
  const indexById = new Map(members.map((m, i) => [m.id, i]));
  return [...members].sort(
    (a, b) =>
      memberDisplayTier(a) - memberDisplayTier(b) ||
      indexById.get(a.id) - indexById.get(b.id)
  );
}

export default function Team() {
  const [activeTab, setActiveTab] = useState("all");

  const getDisplayMembers = () => {
    switch (activeTab) {
      case "all": {
        const list = getAllMembers().filter(
          (m) => !m.categories.includes("advisors")
        );
        return sortMembersForAllView(list);
      }
      case "executives":
        return getMembersByCategory("executives");
      case "directors":
        return getMembersByCategory("directors");
      case "projectManagers":
        return getMembersByCategory("projectManagers");
      default:
        return getAllMembers();
    }
  };

  const advisors = getMembersByCategory("advisors");
  const members = getDisplayMembers();

  const photoAdjustments = {
    zach: { objectPosition: "40% center" },
    parav: { filter: "brightness(1.2)" },
    sathvik: { filter: "brightness(1.2)" },
    vasavi: { filter: "brightness(1.2)" },
    ethan: { filter: "brightness(1.2)" },
    lucia: { filter: "brightness(1.2)" },
    rohan: { filter: "brightness(1.2)" },
    joel: { filter: "brightness(1.2)" },
    brian: { filter: "brightness(1.2)" },
    akash: { filter: "brightness(1.2)" },
    eric: { transform: "scale(1.2)" },
    abby: { transform: "scale(1.2)" },
    aaron: { transform: "scale(1.2)" },
  };

  return (
    <div className="overflow-x-hidden">
      {/* ===== Hero ===== */}
      <div
        className="relative min-h-[80vh] md:min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/icg-team.png')` }}
      >
        <div className="absolute inset-0 bg-icgblue/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-extrabold leading-[0.85] tracking-tighter">
            A collaborate and intuitive
          </h1>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.85] tracking-tighter bg-clip-text text-transparent mt-0"
            style={{
              backgroundImage: "linear-gradient(to right, #a8d8ff, #ffffff, #a8d8ff)",
            }}
          >
            team you can count on
          </h1>
        </div>
      </div>

      {/* ===== Floating Content Panel ===== */}
      <div className="relative z-10 -mt-10 md:-mt-16 bg-white rounded-t-[28px] md:rounded-t-[40px] px-4 md:px-8 pt-8 md:pt-12 pb-16">

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {TABS.map((tab) => (
            <TabButton
              key={tab.key}
              label={tab.label}
              isActive={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            />
          ))}
        </div>

        {/* Member Grid */}
        <div className="container mx-auto max-w-6xl px-2 md:px-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-14 place-items-center">
            {members &&
              members.map((member) => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.headshotSrc}
                  linkedin={member.linkedinUrl}
                  objectPosition={photoAdjustments[member.id]?.objectPosition}
                  imgStyle={{
                    ...(photoAdjustments[member.id]?.filter && { filter: photoAdjustments[member.id].filter }),
                    ...(photoAdjustments[member.id]?.transform && { transform: photoAdjustments[member.id].transform }),
                  }}
                  coolOverlay={photoAdjustments[member.id]?.coolOverlay}
                />
              ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="container mx-auto max-w-6xl px-2 md:px-6 pt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Advisors
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {advisors.map((advisor) => (
              <MemberCard
                key={advisor.id}
                name={advisor.name}
                role={advisor.role}
                image={advisor.headshotSrc}
                linkedin={advisor.linkedinUrl}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
