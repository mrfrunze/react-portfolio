import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={handleClick}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed right-4 bottom-4 z-50 w-11 h-11 rounded-full
                     bg-[#afcef2] text-white shadow-md
                     flex items-center justify-center
                     hover:brightness-110 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <FaChevronUp className="text-[16px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;