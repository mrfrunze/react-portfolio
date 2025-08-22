export type Skill = { name: string; value: number };

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export const leftColumn: SkillGroup[] = [
  {
    title: "Web Skills",
    items: [
      { name: "HTML", value: 95 },
      { name: "CSS3", value: 95 },
      { name: "SCSS", value: 90 },
      { name: "Tailwind", value: 60 },
      { name: "Typescript", value: 60 },
      { name: "JavaScript", value: 90 },
      { name: "React", value: 80 },
      { name: "NextJs", value: 75 },
      { name: "API", value: 65 },
      { name: "React Query", value: 60 },
      { name: "Redux Toolkit", value: 60 },
    ],
  },
];

export const rightColumn: SkillGroup[] = [
  {
    title: "Web Skills",
    items: [
      { name: "Axios", value: 50 },
      { name: "Git Hub", value: 60 },
      { name: "Figma", value: 60 },
      { name: "Photoshop", value: 60 },
    ],
  },
  {
    title: "SEO Skills",
    items: [
      { name: "On Page SEO", value: 95 },
      { name: "Google Analytics", value: 80 },
      { name: "Off Page SEO", value: 60 },
      { name: "SMM", value: 75 },
    ],
  },
];
