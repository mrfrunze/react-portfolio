import { motion} from "motion/react";
import type { ServiceItem } from "../data/services";
import { baseMotion, slideUp } from "../utils/motionPresets";

type Props = ServiceItem & { index: number };


const ServiceCard = ({ title, descr, Icon}: Props) => {
  
  return (
    <motion.li
      {...baseMotion}
      variants={slideUp}
      transition={{ ease: "easeOut" }}
      className="group bg-white p-10 px-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 w-full sm:w-[280px] flex-shrink-0"
    >
      <div className="mb-4 flex justify-center">
        <div
          aria-hidden="true"
          className="h-28 w-28 rounded-full flex items-center justify-center text-[#0078ff] text-5xl ring-4 ring-[#0078ff]/30 transition-colors duration-500 group-hover:bg-[#0078ff] group-hover:text-white group-hover:ring-[#cde1f8]"
        >
          <Icon />
        </div>
      </div>
      <h3 className="text-center text-xl font-semibold uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-center text-[#4e4e4e] mt-2">{descr}</p>
    </motion.li>
  );
};

export default ServiceCard;
