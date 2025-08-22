import { motion } from "motion/react";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { baseMotion, slideUp } from "../utils/motionPresets";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#0078ff] text-white py-12"
    >
      <motion.div 
        {...baseMotion}
        variants={slideUp}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="container mx-auto px-4">
        <div className="flex flex-col items-center bg-white text-[#1e1e1e] rounded-lg shadow-lg p-8 mx-auto">
          <h5 className="text-2xl font-semibold mb-6 border-b-2 border-[#0078ff] inline-block">
            Get in Touch
          </h5>

          <ul className="space-y-3 text-lg">
            <li>📍 Sweden Göteborg</li>
            <li>✉️ message@i-frontend.su</li>
          </ul>

          <div className="flex gap-6 mt-6">
            <a
              href="https://www.youtube.com/channel/UCStPiUDdMG-aJPziQyqVZVg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0078ff] text-2xl hover:text-red-600 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/oleg-stoyanov-front-end/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0078ff] text-2xl hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Копирайт */}
        <div className="text-center text-white mt-8">
          <p >&copy; {currentYear} i-frontend.su All Rights Reserved</p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer