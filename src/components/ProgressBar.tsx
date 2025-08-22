import { motion } from "framer-motion";
import { useEffect, useRef, useState  } from "react";

type ProgressBarProps = {
  label: string;
  value: number;
};

const ProgressBar = ({ label, value }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const targetElement  = ref.current;
    if (!targetElement ) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(targetElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-[#4e4e4e] text-[16px] mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full bg-[#cde1f8] h-3 overflow-hidden">
        <motion.div
          className="h-3 bg-[#0078ff]"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          role="progressbar"
          aria-valuenow={inView ? value : 0}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default ProgressBar;