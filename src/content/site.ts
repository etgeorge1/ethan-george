export const site = {
  name: "Ethan George",
  role: "Frontend Engineer",
  tagline: "I build fast, accessible, and delightful interfaces for the web.",
  location: "Earth",
  email: "etgeorge1@outlook.com",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Design Systems",
  "Accessibility",
  "Motion",
  "Performance",
] as const;

export const projects = [
  {
    title: "Project One",
    description: "Placeholder for a flagship project. Describe the problem, your approach, and the outcome.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "Placeholder for an interaction-heavy UI showcasing motion and micro-interactions.",
    tags: ["React", "Motion", "Canvas"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "Placeholder for a design system or component library you've built or contributed to.",
    tags: ["Design Systems", "Storybook", "a11y"],
    href: "#",
  },
  {
    title: "Project Four",
    description: "Placeholder for a performance-focused build with measurable Core Web Vitals wins.",
    tags: ["Performance", "Edge", "Analytics"],
    href: "#",
  },
] as const;

export const experience = [
  {
    period: "20XX — Present",
    role: "Frontend Engineer",
    company: "Company Name",
    summary: "Placeholder summary of impact, ownership, and the stack you worked with.",
  },
  {
    period: "20XX — 20XX",
    role: "Software Engineer",
    company: "Company Name",
    summary: "Placeholder summary of impact, ownership, and the stack you worked with.",
  },
] as const;
