export const SECTION_IDS = {
  home: "home",
  about: "about",
  experience: "experience",
  skills: "skills",
  projects: "projects",
  education: "education",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_LINKS = [
  { id: SECTION_IDS.home, labelKey: "nav.home" },
  { id: SECTION_IDS.experience, labelKey: "nav.experience" },
  { id: SECTION_IDS.skills, labelKey: "nav.skills" },
  { id: SECTION_IDS.projects, labelKey: "nav.projects" },
  { id: SECTION_IDS.education, labelKey: "nav.education" },
  { id: SECTION_IDS.contact, labelKey: "nav.contact" },
] as const;
