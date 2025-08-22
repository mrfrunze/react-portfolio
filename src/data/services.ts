import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaNpm,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiNextdotjs,
  SiPostman,  
  SiAxios,
  SiVitest,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export type ServiceItem = {
  title: string;
  descr: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

export const SERVICES: ServiceItem[] = [
  { title: "HTML5",        descr: "Semantic Layout",                Icon: FaHtml5 },
  { title: "CSS3",         descr: "Transition, Animation",         Icon: FaCss3Alt },
  { title: "SASS",         descr: "Powerful professional grade CSS", Icon: FaSass },
  { title: "Tailwind",     descr: "CSS library",                    Icon: SiTailwindcss },
  { title: "TypeScript",   descr: "Typed JavaScript",               Icon: SiTypescript }, // ← вместо Bootstrap
  { title: "JavaScript",   descr: "Complex features on web pages",  Icon: FaJsSquare },
  { title: "React",        descr: "JavaScript Library",             Icon: FaReact },
  { title: "Redux Toolkit",descr: "Tuning tools",                   Icon: SiRedux },
  { title: "React Query",  descr: "Tuning tools",                   Icon: SiReactquery },
  { title: "NextJS",       descr: "Building modern web apps with Next.js", Icon: SiNextdotjs },
  { title: "API",          descr: "Designing and testing APIs",     Icon: SiPostman },
  { title: "Axios",        descr: "Axios library",                  Icon: SiAxios },
  { title: "npm",          descr: "Packages manager",               Icon: FaNpm },
  { title: "Python",       descr: "Scripting & tooling",            Icon: FaPython },
  { title: "Vitest",       descr: "Fast unit testing",              Icon: SiVitest },
  { title: "Vite",         descr: "Next‑gen build tool",            Icon: SiVite },      // ← вместо Webpack
];