export type Category = "commerce" | "react" | "seo";

export type TabValue = "all" | Category;

export interface Project {
  id: string;                 
  title: string;             
  image: string;              
  alt?: string;               
  siteUrl: string;           
  codeUrl?: string;           
  tech: string[];             
  categories: Category[];    
}

export const portfolioTabs = [
  { label: "All", value: "all" as TabValue },
  { label: "E-commerce", value: "commerce" as TabValue },
  { label: "React", value: "react" as TabValue },
  { label: "SEO", value: "seo" as TabValue },
]

export function filterProjects(projects: Project[], active: TabValue): Project[] {
  return active === "all" ? projects : projects.filter(p => p.categories.includes(active));
}

export const Projects: Project[] = [
  {
    id: "jobster-development",
    title: "Jobster Development",
    image: "/img/mini/Jobster-Development-mini.jpg",
    alt: "Jobster Development",
    siteUrl: "https://react-jobster-dev.netlify.app/landing",
    codeUrl: "https://github.com/mrfrunze/react-jobster",
    tech: ["React", "Vite", "Redux", "Axios"],
    categories: ["react"],
  },
  {
    id: "comfy-store",
    title: "Comfy Store",
    image: "/img/mini/Comfy-Store.png",
    alt: "Comfy Store",
    siteUrl: "https://react-daisyui-comfy-store.netlify.app/",
    codeUrl: "https://github.com/mrfrunze/comfy-store",
    tech: ["React", "React Query", "Axios"],
    categories: ["commerce", "react"],
  },
  {
    id: "ecommerce-cart",
    title: "E-commerce Cart",
    image: "/img/mini/Redux-Toolkit.png",
    alt: "E-commerce Cart",
    siteUrl: "https://redux-toolkit-cart-ax.netlify.app/",
    codeUrl: "https://github.com/mrfrunze/redux-toolkit-tutorial",
    tech: ["React", "Redux Toolkit"],
    categories: ["commerce", "react"],
  },
  {
    id: "mixmaster",
    title: "MixMaster",
    image: "/img/mini/MixMaster-Starter.png",
    alt: "MixMaster",
    siteUrl: "https://stalwart-react-mix-master.netlify.app/",
    codeUrl: "https://github.com/mrfrunze/react-mix-master",
    tech: ["React", "React Query", "API"],
    categories: ["react"],
  },
  {
    id: "webdev-portfolio",
    title: "WebDev Portfolio",
    image: "/img/mini/WebDev-Portfolio.png",
    alt: "WebDev Portfolio",
    siteUrl: "https://react-tiwling-portfolio.netlify.app/",
    codeUrl: "https://github.com/mrfrunze/tiwlind-portfolio",
    tech: ["React", "Tailwind"],
    categories: ["react"],
  },
  {
    id: "react-ice",
    title: "React Ice",
    image: "/img/mini/react-ice.png",
    alt: "React Ice",
    siteUrl: "https://react-ice-dev.netlify.app/",
    // codeUrl отсутствует в исходнике
    tech: ["React", "CSS"],
    categories: ["react"],
  },
  {
    id: "tour-company-app",
    title: "Tour Company App",
    image: "/img/mini/Backroads-Tour-Company-App.png",
    alt: "Tour Company App",
    siteUrl: "https://loq-react-backroads.netlify.app/",
    codeUrl: "https://github.com/mrfrunze/react-backroads",
    tech: ["React", "CSS"],
    categories: ["react"],
  },
  {
    id: "restaurant-jony-montana",
    title: "Restaurant",
    image: "/img/mini/Chef-Jony-Montana.png",
    alt: "Chef Jony Montana",
    siteUrl: "https://joni-montana.netlify.app/",
    // codeUrl отсутствует
    tech: ["React", "React Hooks", "CSS"],
    categories: ["react"],
  },
  {
    id: "react-portfolio",
    title: "React Portfolio",
    image: "/img/mini/React-Portfolio.png",
    alt: "React Portfolio",
    siteUrl: "https://micl-react-portfolio.netlify.app/",
    codeUrl: "https://github.com/mrfrunze/project_professional_portfolio",
    tech: ["React", "React Hooks", "CSS"],
    categories: ["react"],
  },
  {
    id: "unsplash-images",
    title: "Unsplash Images",
    image: "/img/mini/unsplash.png",
    alt: "Unsplash Images",
    siteUrl: "https://react-query-unsplash-images.netlify.app/",
    codeUrl: "https://github.com/mrfrunze/unsplash-images",
    tech: ["React", "React Query", "API"],
    categories: ["react"],
  },
  // --- SEO projects ---
  {
    id: "dina-hantverkare",
    title: "Dina-Hantverkare",
    image: "/img/mini/Dina-Hantverkare-mini.webp",
    alt: "Dina-Hantverkare",
    siteUrl: "https://dina-hantverkare.se/",
    tech: ["SEO"],
    categories: ["seo"],
  },
  {
    id: "charme-stad",
    title: "Charme-Städ",
    image: "/img/mini/Charme-Städ-mini.webp",
    alt: "Charme-Städ",
    siteUrl: "https://charme-stad.com/",
    tech: ["SEO"],
    categories: ["seo"],
  },
];