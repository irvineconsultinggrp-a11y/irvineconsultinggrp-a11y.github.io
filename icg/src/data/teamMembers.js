/**
 * Centralized team member data source
 * Categories: executives, directors, associates, projectManagers, advisors
 * Committees: Recruitment, Marketing, Operations, Finance, Sourcing, ProDev, Socials, Technology
 *
 * Set `inactive: true` to hide someone from the site while keeping their record in this file.
 * Use the exported `teamMembers` array or `getAllMembersIncludingInactive()` for the full roster.
 */

export const teamMembers = [
  // ==================== EXECUTIVES ====================
  {
    id: "khang",
    name: "Khang Nguyen",
    role: "President",
    categories: ["executives", "projectManagers"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Khang Nguyen.png",
    hoverSrc: "/khang-silly.png",
    linkedinUrl: "https://www.linkedin.com/in/khangtoannguyen/",
  },
  {
    id: "mohan",
    name: "Mohan Krishnan",
    role: "Vice President",
    categories: ["executives", "projectManagers"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Mohan Krishnan.jpg",
    hoverSrc: "/mohan-silly.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mohan-krishnan1/",
  },
  {
    id: "michelle",
    name: "Michelle Choy",
    role: "Vice President",
    categories: ["executives"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Michelle Choy.jpg",
    hoverSrc: "/IMG_4479.jpg",
    linkedinUrl: "https://www.linkedin.com/in/michelle-choy0/",
  },
  {
    id: "kim",
    name: "Kim Vuong",
    role: "Vice President",
    categories: ["executives", "projectManagers"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Kim Vuong.jpg",
    hoverSrc: "/kimmy-silly.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kimvuong-vntk/",
  },

  // ==================== DIRECTORS ====================
  {
    id: "zach",
    name: "Zach Bosa",
    role: "Consultant",
    categories: ["associates"],
    committees: ["Finance"],
    headshotSrc: "/standardizedheadshots/Zach Bosa.jpg",
    hoverSrc: "/IMG_7408.JPG",
    linkedinUrl: "https://www.linkedin.com/in/zachbosa/",
  },
  {
    id: "brian",
    name: "Brian Lee",
    role: "Director of Marketing",
    categories: ["directors", "projectManagers"],
    committees: ["Marketing"],
    headshotSrc: "/standardizedheadshots/Brian Lee.jpg",
    hoverSrc: "/brian-silly.jpg",
    linkedinUrl: "https://www.linkedin.com/in/brianhanlee/",
  },
  {
    id: "justin",
    name: "Justin Park",
    role: "Director of Operations",
    categories: ["directors", "projectManagers"],
    committees: ["Operations"],
    headshotSrc: "/standardizedheadshots/Justin Park.jpg",
    hoverSrc: "/IMG_8757.jpg",
    linkedinUrl: "https://www.linkedin.com/in/justin-park-bba724334/",
  },
  {
    id: "hunter",
    name: "Hunter Koth",
    role: "Director of Technology",
    categories: ["directors"],
    committees: ["Technology"],
    headshotSrc: "/headshots/Hunter.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/hunterkoth/",
    inactive: true,
  },

  // ==================== ASSOCIATE CONSULTANTS ====================
  {
    id: "nishant",
    name: "Nishant Nuthalapati",
    role: "Consultant",
    categories: ["associates"],
    committees: ["Technology"],
    headshotSrc: "/headshots/Nishant.png",
    hoverSrc: "/IMG_6177.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/nishant-nuthalapati/",
    inactive: true,
  },
  {
    id: "patrick",
    name: "Patrick Lee",
    role: "Consultant",
    categories: ["associates", "projectManagers"],
    committees: ["Finance"],
    headshotSrc: "/headshots/Patrick.png",
    hoverSrc: "/IMG_8758.jpg",
    linkedinUrl: "https://www.linkedin.com/in/leepatricks/",
    inactive: true,
  },
  {
    id: "andrew",
    name: "Andrew Wagner",
    role: "Consultant",
    categories: ["associates"],
    committees: ["Marketing", "Socials"],
    headshotSrc: "/standardizedheadshots/Andrew Wagner.jpg",
    hoverSrc: "/andrew-silly.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/andrew-wagner-31370329b/",
  },
  {
    id: "rohan",
    name: "Rohan Bharti",
    role: "Consultant",
    categories: ["associates"],
    committees: ["Technology"],
    headshotSrc: "/standardizedheadshots/Rohan Bharti.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/rohan-bharti-3148a2292/",
  },
  {
    id: "sahana",
    name: "Sahana Chockalingam",
    role: "Director of Technology",
    categories: ["directors"],
    committees: ["ProDev"],
    headshotSrc: "/standardizedheadshots/Sahana Chockalingam.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/sahanachockalingam/",
  },
  {
    id: "joel",
    name: "Joel Leong",
    role: "Director of Finance",
    categories: ["directors"],
    committees: ["Finance", "ProDev"],
    headshotSrc: "/standardizedheadshots/Joel Leong.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/joelleong-/",
  },
  {
    id: "sonia",
    name: "Sonia Wang",
    role: "Consultant",
    categories: ["associates"],
    committees: ["Operations"],
    headshotSrc: "/standardizedheadshots/Sonia Wang.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/soniaqwang/",
  },
  {
    id: "madison",
    name: "Madison Lee",
    role: "Consultant",
    categories: ["associates"],
    committees: ["Marketing", "Sourcing"],
    headshotSrc: "/standardizedheadshots/Madison Lee.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/madison-lee-19029436b/",
  },
  {
    id: "trinity",
    name: "Trinity Nguyen",
    role: "Director of Corp Relations",
    categories: ["directors"],
    committees: ["Finance", "Recruitment"],
    headshotSrc: "/standardizedheadshots/Trinity Nguyen.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/trinity-nguyen-789a4634b/",
  },
  {
    id: "aaron",
    name: "Aaron Johnson",
    role: "Vice President",
    categories: ["executives"],
    committees: ["ProDev", "Recruitment"],
    headshotSrc: "/standardizedheadshots/Aaron Johnson.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/aaronjohnsonbusiness/",
  },
  {
    id: "zaid",
    name: "Zaid Baghdadi",
    role: "Consultant",
    categories: ["associates"],
    committees: ["Marketing", "Socials"],
    headshotSrc: "/headshots/Zaid.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/zaid-baghdadi-479a5027a/",
    inactive: true,
  },
  {
    id: "krish",
    name: "Krish Marwah",
    role: "Director of Sourcing",
    categories: ["directors"],
    committees: ["Sourcing"],
    headshotSrc: "/standardizedheadshots/Krish Marwah.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/krishmarwah/",
  },

  // ==================== ASSOCIATE CONSULTANTS (continued) ====================
  {
    id: "abby",
    name: "Abby Luong",
    role: "Consultant",
    categories: ["associates"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Abby Luong.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/abby--luong/",
  },
  {
    id: "akash",
    name: "Akash Kalita",
    role: "Consultant",
    categories: ["associates"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Akash Kalita.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/akash-kalita-374194296",
  },
  {
    id: "eric",
    name: "Eric Zheng",
    role: "Consultant",
    categories: ["associates"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Eric Zheng.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/eric-zheng1/",
  },
  {
    id: "ethan",
    name: "Ethan Huang",
    role: "Consultant",
    categories: ["associates"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Ethan Huang.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/ethankhuang",
  },
  {
    id: "lucia",
    name: "Lucia Morales",
    role: "Director of Social",
    categories: ["directors"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Lucia Morales.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/lucia-a-moraless",
  },
  {
    id: "megan",
    name: "Megan Sinaga",
    role: "Consultant",
    categories: ["associates"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Megan Sinaga.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/megan-sinaga-827b19272",
  },
  {
    id: "parav",
    name: "Parav Salaniwal",
    role: "Consultant",
    categories: ["associates"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Parav Salaniwal.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/paravsalaniwal/",
  },
  {
    id: "sathvik",
    name: "Sathvik Lagadapati",
    role: "Consultant",
    categories: ["associates"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Sathvik Lagadapati.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/sathvik-lagadapati1",
  },
  {
    id: "vasavi",
    name: "Vasavi Suresh",
    role: "Consultant",
    categories: ["associates"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Vasavi Suresh.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/vasavi-suresh",
  },
  {
    id: "ian",
    name: "Ian Su",
    role: "Consultant",
    categories: ["associates"],
    committees: [],
    headshotSrc: "/standardizedheadshots/Ian Su.jpg",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/iansu04/",
  },

  // ==================== ADVISORS ====================
  {
    id: "edward",
    name: "Edward Li",
    role: "External Advisor",
    categories: ["advisors"],
    committees: [],
    headshotSrc: "/edward.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/edwardhanli/",
  },
];

// ==================== HELPER FUNCTIONS ====================

export function isActiveMember(member) {
  return member.inactive !== true;
}

/**
 * Full roster including inactive members (same reference as exported `teamMembers`).
 * @returns {Array} Every team member object
 */
export function getAllMembersIncludingInactive() {
  return teamMembers;
}

/**
 * Active members only (excludes `inactive: true`).
 * @returns {Array} Team members shown on the site
 */
export function getAllMembers() {
  return teamMembers.filter(isActiveMember);
}

/**
 * Get team members by category
 * @param {string} category - One of: "executives", "directors", "associates", "projectManagers", "advisors"
 * @returns {Array} Members in that category
 */
export function getMembersByCategory(category) {
  return teamMembers.filter(
    (member) =>
      isActiveMember(member) && member.categories.includes(category)
  );
}

/**
 * Get team members by committee
 * @param {string} committee - One of: "Recruitment", "Marketing", "Operations", "Finance", "Sourcing", "ProDev", "Socials", "Technology"
 * @returns {Array} Members in that committee
 */
export function getMembersByCommittee(committee) {
  return teamMembers.filter(
    (member) =>
      isActiveMember(member) && member.committees.includes(committee)
  );
}

/**
 * Get all members grouped by committee
 * @returns {Object} Object with committee names as keys and member arrays as values
 */
export function getMembersGroupedByCommittee() {
  const committees = [
    "Recruitment",
    "Marketing",
    "Operations",
    "Finance",
    "Sourcing",
    "ProDev",
    "Socials",
    "Technology",
  ];

  const grouped = {};
  committees.forEach((committee) => {
    grouped[committee] = getMembersByCommittee(committee);
  });

  return grouped;
}

/**
 * Get a single member by ID
 * @param {string} id - Member ID
 * @returns {Object|undefined} The member object or undefined
 */
export function getMemberById(id) {
  return teamMembers.find((member) => member.id === id);
}

/**
 * List of all committee names in display order
 */
export const COMMITTEES = [
  "Recruitment",
  "Marketing",
  "Operations",
  "Finance",
  "Sourcing",
  "ProDev",
  "Socials",
  "Technology",
];

/**
 * List of all category keys
 */
export const CATEGORIES = [
  "executives",
  "directors",
  "associates",
  "projectManagers",
  "advisors",
];

/**
 * Category display names for UI
 */
export const CATEGORY_LABELS = {
  all: "All Members",
  executives: "Executives",
  directors: "Directors",
  associates: "Committee",
  projectManagers: "Project Team",
  advisors: "Advisors",
};

