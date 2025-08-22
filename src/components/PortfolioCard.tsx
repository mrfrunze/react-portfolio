import { motion } from "motion/react";
import type { Project } from "../data/projects";
import { baseMotion, slideUp } from "../utils/motionPresets";

type Props = {
  project: Project;
  className?: string; 
};

const PortfolioCard = ({ project, className = "" }: Props) => {
  const { title, image, alt, siteUrl, tech } = project;

  return (
    <motion.li
      {...baseMotion}       
      variants={slideUp}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={[
        "group bg-white rounded-xl shadow-md hover:shadow-xl",
        "transition-shadow duration-300 overflow-hidden cursor-pointer",
        className,
      ].join(" ")}
    >
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Open project ${title} in a new tab`}
      >
        {/* image */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={alt ?? title}
            className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* content */}
        <div className="pt-6 px-6 pb-4">
          <h3 className="text-[1.2rem] font-semibold">{title}</h3>
          <div className="mt-2 text-[0.8rem] text-[#4e4e4e] flex flex-wrap gap-x-2">
            {tech.map((element) => (
              <span key={element} className="text-[#0078ff]">{element}</span>
            ))}
          </div>
        </div>
      </a>
    </motion.li>
  );
};

export default PortfolioCard;
