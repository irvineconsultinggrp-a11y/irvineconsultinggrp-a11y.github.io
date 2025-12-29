import React from "react";
import { GrLinkedin } from "react-icons/gr";

/** Reusable card */
function MemberCard({ name, role, image, hoverImage, linkedin }) {
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
        {role && (
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

export default function Team() {
  /** Source-of-truth people map so we can place folks in multiple sections */
  const people = {
    khang: {
      name: "Khang Nguyen",
      image: "/khang.png",
      hoverImage: "/khang_silly.png",
      linkedin: "https://www.linkedin.com/in/khangtoannguyen/",
    },
    mohan: {
      name: "Mohan Krishnan",
      image: "/mohan.png",
      hoverImage: "/mohan_silly.jpg",
      linkedin: "https://www.linkedin.com/in/mohan-krishnan1/",
    },
    kim: {
      name: "Kim Vuong",
      image: "/kim.png",
      hoverImage: "/kimmy_silly.jpg",
      linkedin: "https://www.linkedin.com/in/kimvuong-vntk/",
    },
    michelle: {
      name: "Michelle Choy",
      image: "/michelle.png",
      hoverImage: "/IMG_4479.jpg",
      linkedin: "https://www.linkedin.com/in/michelle-choy0/",
    },
    patrick: {
      name: "Patrick Lee",
      image: "/patrick.png",
      hoverImage: "/IMG_8758.jpg",
      linkedin: "https://www.linkedin.com/in/leepatricks/",
    },
    zach: {
      name: "Zach Bosa",
      image: "/zach.png",
      hoverImage: "/IMG_7408.JPG",
      linkedin: "https://www.linkedin.com/in/zachbosa/",
    },
    justin: {
      name: "Justin Park",
      image: "/justin.png",
      hoverImage: "/IMG_8757.jpg",
      linkedin: "https://www.linkedin.com/in/justin-park-bba724334/",
    },
    nishant: {
      name: "Nishant Nuthalapati",
      image: "/nishant.png",
      hoverImage: "/IMG_6177.jpeg",
      linkedin: "https://www.linkedin.com/in/nishant-nuthalapati/",
    },
    tiffany: {
      name: "Tiffany Bian",
      image: "/tiffany.png",
      hoverImage: "/Tiffany_Silly.PNG",
      linkedin: "https://www.linkedin.com/in/tiffany-bian/",
    },
    brian: {
      name: "Brian Lee",
      image: "/brian_pfp.png",
      hoverImage: "/brian_silly.jpg",
      linkedin: "https://www.linkedin.com/in/brianhanlee/",
    },
    andrew: {
      name: "Andrew Wagner",
      image: "/andrew.png",
      hoverImage: "/andrew_silly.jpeg",
      linkedin: "https://www.linkedin.com/in/andrew-wagner-31370329b/",
    },
    advisorEdward: {
      name: "Edward Li",
      image: "/edward.png",
      hoverImage: null,
      linkedin: "https://www.linkedin.com/in/edwardhanli/",
    },
  };

  /** Section definitions (order matches your screenshot) */
  const sections = [
    {
      title: "Executive Board",
      cols: "grid-cols-2 md:grid-cols-4",
      members: [
        { ...people.khang, role: "President" },
        { ...people.mohan, role: "Strategy Vice President" },
        { ...people.kim, role: "Internal Vice President" },
        { ...people.michelle, role: "External Vice President" },
      ],
    },
    {
      title: "Directors",
      cols: "grid-cols-2 md:grid-cols-4",
      members: [
        { ...people.patrick, role: "Director of Social Activities" },
        { ...people.zach, role: "Director of Finance" },
        { ...people.justin, role: "Director of Operations" },
        { ...people.nishant, role: "Director of Technology" },
      ],
    },
    {
      title: "Project Managers",
      cols: "grid-cols-2 md:grid-cols-4",
      members: [
        { ...people.michelle, role: "Co-Project Manager" },
        { ...people.tiffany, role: "Co-Project Manager" },
        { ...people.mohan, role: "Co-Project Manager" },
        { ...people.patrick, role: "Co-Project Manager" },
      ],
    },
    {
      title: "Consultants",
      cols: "grid-cols-2 md:grid-cols-4",
      members: [
        { ...people.tiffany, role: "Business Administration" },
        { ...people.nishant, role: "Computer Science & Applied Mathematics" },
        { ...people.zach, role: "Business Administration" },
        { ...people.michelle, role: "Business Administration" },
        { ...people.khang, role: "Business Administration" },
        { ...people.kim, role: "Business Administration" },
        { ...people.justin, role: "Business Economics" },
        { ...people.mohan, role: "Business Administration & Economics" },
        { ...people.brian, role: "Environmental Science & Policy" },
        { ...people.andrew, role: "Computational & Applied Mathematics" },
        { ...people.patrick, role: "Business Economics" },
      ],
    },
  ];

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

      {/* ===== Cityscape + Sections ===== */}
      <div
        className="bg-fixed bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url('/cityscape.jpeg')` }}
      >
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-icgblue to-transparent" />
        <div className="absolute inset-0 bg-icgblue/70" />

        <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 pb-24">
          {sections.map((section, idx) => (
            <div key={section.title} className={idx === 0 ? "pt-16" : "pt-14"}>
              <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
                {section.title}
              </h2>

              <div
                className={`grid ${section.cols} gap-x-10 gap-y-10 md:gap-y-14 place-items-center`}
              >
                {section.members.map((m) => (
                  <MemberCard key={`${section.title}-${m.name}`} {...m} />
                ))}
              </div>
            </div>
          ))}

          {/* ===== Advisors ===== */}
          <div className="pt-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
              Advisors
            </h2>
            <div className="flex items-center justify-center">
              <MemberCard
                name={people.advisorEdward.name}
                role="External Advisor"
                image={people.advisorEdward.image}
                hoverImage={people.advisorEdward.hoverImage}
                linkedin={people.advisorEdward.linkedin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
