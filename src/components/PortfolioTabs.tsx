import { motion } from "motion/react";
import { portfolioTabs, type TabValue } from "../data/projects";
import { baseMotion, fadeIn } from "../utils/motionPresets";

type Props = {
  value: TabValue;                       
  onChange: (next: TabValue) => void;  
  className?: string;
};

const baseBtn =
  "px-4 py-1.5 rounded-full border text-sm transition cursor-pointer " +
  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0078ff]";

const activeBtn = "bg-[#0078ff] text-white border-[#0078ff]";
const idleBtn   = "bg-white text-[#1e1e1e] border-zinc-200 hover:border-[#0078ff]";

const PortfolioTabs = ({ value, onChange, className = "" }: Props) => {
  return (
    <motion.div
      {...baseMotion}
      variants={fadeIn}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={["flex flex-wrap items-center justify-center gap-3", className].join(" ")}
      role="tablist"
      aria-label="Portfolio filters"
    >
      {portfolioTabs.map((tab) => {
        const isActive = value === tab.value;
        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`portfolio-panel-${tab.value}`}
            className={[baseBtn, isActive ? activeBtn : idleBtn].join(" ")}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </button>
        );
      })}
    </motion.div>
  );
};

export default PortfolioTabs;