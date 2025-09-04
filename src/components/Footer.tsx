import { motion } from "motion/react";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { baseMotion, slideUp } from "../utils/motionPresets";
import ContactForm from "./ContactForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0078ff] text-white py-12">
      <motion.div
        {...baseMotion}
        variants={slideUp}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col items-center bg-white text-[#1e1e1e] rounded-lg shadow-lg p-4 md:p-8 mx-auto">
          <h5 className="text-2xl font-semibold mb-6 border-b-2 border-[#0078ff] inline-block">
            Get in Touch
          </h5>
          <div className="flex w-full gap-3 md:gap-0 flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-3">
              <ContactForm />
            </div>

            <div className="w-full md:w-1/2 p-3">
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-1.5">
                  <FaLocationDot className="text-[#0078ff] " /> Sweden Göteborg
                </li>
              </ul>

              <div className="flex flex-col gap-6 mt-6">
                <a
                  href="https://www.youtube.com/channel/UCStPiUDdMG-aJPziQyqVZVg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0078ff] hover:text-red-600 transition-colors flex gap-2 items-center"
                >
                  <FaYoutube className="text-2xl" /> Youtube
                </a>
                <a
                  href="https://www.linkedin.com/in/oleg-stoyanov-front-end/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0078ff]  hover:text-blue-600 transition-colors flex gap-2 items-center"
                >
                  <FaLinkedin className="text-2xl" /> Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="text-center text-white mt-8">
          <p>&copy; {currentYear} i-frontend.su All Rights Reserved</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
