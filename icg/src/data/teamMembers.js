/**
 * Centralized team member data source
 * Categories: executives, directors, associates, projectManagers, advisors
 * Committees: Recruitment, Marketing, Operations, Finance, Sourcing, ProDev, Socials, Technology
 */

export const teamMembers = [
  // ==================== EXECUTIVES ====================
  {
    id: "khang",
    name: "Khang Nguyen",
    role: "President",
    categories: ["executives", "projectManagers"],
    committees: [],
    headshotSrc: "/headshots/Khang.png",
    hoverSrc: "/khang_silly.png",
    linkedinUrl: "https://www.linkedin.com/in/khangtoannguyen/",
  },
  {
    id: "mohan",
    name: "Mohan Krishnan",
    role: "Strategy Vice President",
    categories: ["executives", "projectManagers"],
    committees: [],
    headshotSrc: "/headshots/Mohan.png",
    hoverSrc: "/mohan_silly.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mohan-krishnan1/",
  },
  {
    id: "michelle",
    name: "Michelle Choy",
    role: "External Vice President",
    categories: ["executives", "projectManagers"],
    committees: [],
    headshotSrc: "/headshots/Michelle.png",
    hoverSrc: "/IMG_4479.jpg",
    linkedinUrl: "https://www.linkedin.com/in/michelle-choy0/",
  },
  {
    id: "kim",
    name: "Kim Vuong",
    role: "Internal Vice President",
    categories: ["executives", "projectManagers"],
    committees: [],
    headshotSrc: "/headshots/Kim.png",
    hoverSrc: "/kimmy_silly.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kimvuong-vntk/",
  },

  // ==================== DIRECTORS ====================
  {
    id: "zach",
    name: "Zach Bosa",
    role: "Director of Finance",
    categories: ["directors"],
    committees: ["Finance"],
    headshotSrc: "/headshots/Zach.png",
    hoverSrc: "/IMG_7408.JPG",
    linkedinUrl: "https://www.linkedin.com/in/zachbosa/",
  },
  {
    id: "brian",
    name: "Brian Lee",
    role: "Director of Marketing",
    categories: ["directors", "projectManagers"],
    committees: ["Marketing"],
    headshotSrc: "/headshots/Brian.png",
    hoverSrc: "/brian_silly.jpg",
    linkedinUrl: "https://www.linkedin.com/in/brianhanlee/",
  },
  {
    id: "justin",
    name: "Justin Park",
    role: "Director of Operations",
    categories: ["directors", "projectManagers"],
    committees: ["Operations"],
    headshotSrc: "/headshots/Justin.png",
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
    linkedinUrl: "https://www.linkedin.com/in/hunterkoth/"
    ,
  },

  // ==================== ASSOCIATE CONSULTANTS ====================
  {
    id: "nishant",
    name: "Nishant Nuthalapati",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["Technology"],
    headshotSrc: "/headshots/Nishant.png",
    hoverSrc: "/IMG_6177.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/nishant-nuthalapati/",
  },
  {
    id: "patrick",
    name: "Patrick Lee",
    role: "Associate Consultant",
    categories: ["associates", "projectManagers"],
    committees: ["Finance"],
    headshotSrc: "/headshots/Patrick.png",
    hoverSrc: "/IMG_8758.jpg",
    linkedinUrl: "https://www.linkedin.com/in/leepatricks/",
  },
  {
    id: "andrew",
    name: "Andrew Wagner",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["Marketing", "Socials"],
    headshotSrc: "/headshots/Andrew.png",
    hoverSrc: "/andrew_silly.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/andrew-wagner-31370329b/",
  },
  {
    id: "rohan",
    name: "Rohan Bharti",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["Technology"],
    headshotSrc: "/headshots/Rohan.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/rohan-bharti-3148a2292/",
  },
  {
    id: "sahana",
    name: "Sahana Chockalingam",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["ProDev"],
    headshotSrc: "/headshots/Sahana.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/sahanachockalingam/",
  },
  {
    id: "joel",
    name: "Joel Leong",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["Finance", "ProDev"],
    headshotSrc: "/headshots/Joel.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/joelleong-/",
  },
  {
    id: "sonia",
    name: "Sonia Wang",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["Operations"],
    headshotSrc: "/headshots/Sonia.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/soniaqwang/",
  },
  {
    id: "madison",
    name: "Madison Lee",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["Marketing", "Sourcing"],
    headshotSrc: "/headshots/Madison.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/madison-lee-19029436b/",
  },
  {
    id: "trinity",
    name: "Trinity Nguyen",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["Finance", "Recruitment"],
    headshotSrc: "/headshots/Trinity.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/trinity-nguyen-789a4634b/",
  },
  {
    id: "aaron",
    name: "Aaron Johnson",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["ProDev", "Recruitment"],
    headshotSrc: "/headshots/Aaron.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/aaronjohnsonbusiness/",
  },
  {
    id: "zaid",
    name: "Zaid Baghdadi",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["Marketing", "Socials"],
    headshotSrc: "/headshots/Zaid.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/zaid-baghdadi-479a5027a/",
  },
  {
    id: "krish",
    name: "Krish Marwah",
    role: "Associate Consultant",
    categories: ["associates"],
    committees: ["Sourcing"],
    headshotSrc: "/headshots/Krish.png",
    hoverSrc: null,
    linkedinUrl: "https://www.linkedin.com/in/krishmarwah/",
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

/**
 * Get all team members
 * @returns {Array} All team members
 */
export function getAllMembers() {
  return teamMembers;
}

/**
 * Get team members by category
 * @param {string} category - One of: "executives", "directors", "associates", "projectManagers", "advisors"
 * @returns {Array} Members in that category
 */
export function getMembersByCategory(category) {
  return teamMembers.filter((member) => member.categories.includes(category));
}

/**
 * Get team members by committee
 * @param {string} committee - One of: "Recruitment", "Marketing", "Operations", "Finance", "Sourcing", "ProDev", "Socials", "Technology"
 * @returns {Array} Members in that committee
 */
export function getMembersByCommittee(committee) {
  return teamMembers.filter((member) => member.committees.includes(committee));
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
  projectManagers: "Project Managers",
  advisors: "Advisors",
};

