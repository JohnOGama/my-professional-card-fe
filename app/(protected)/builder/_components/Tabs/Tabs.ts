export const DEFAULT_TAB = "work-experience";

export type TabKey =
  | "work-experience"
  | "skills"
  | "projects"
  | "testimonials"
  | "certifications"
  | "educations";

export type Tab = {
  name: string;
  key: TabKey;
};

export const TABS: Tab[] = [
  {
    name: "Work Experience",
    key: "work-experience",
  },
  {
    name: "Skills",
    key: "skills",
  },
  {
    name: "Projects",
    key: "projects",
  },
  {
    name: "Testimonials",
    key: "testimonials",
  },
  {
    name: "Certifications",
    key: "certifications",
  },
  {
    name: "Educations",
    key: "educations",
  },
];
