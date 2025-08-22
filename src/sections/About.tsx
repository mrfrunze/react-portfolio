import { motion } from "motion/react";
import SkillGroup from "../components/SkillGroup"
import { leftColumn, rightColumn } from "../data/skills"
import { baseMotion, slideUp } from "../utils/motionPresets";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06),0_2px_5px_rgba(0,0,0,0.2)] p-6 md:p-12">
          {/* top: photo + text */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              {...baseMotion}
              variants={slideUp}
              transition={{ease: "easeOut" }}
            >
              <div className="flex justify-center">
                <div className="w-4/5 sm:w-3/4">
                  <div className="mb-8">
                    <img
                      src="/img/frontend.jpg"
                      alt="About me"
                      className="w-full rounded shadow"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...baseMotion}
              variants={slideUp}
              transition={{ease: "easeOut" }}
            >
              <div className="pt-4 md:pt-0">
                <div className="mb-6 relative">
                  <h5 className="text-2xl font-semibold relative inline-block text-[#1e1e1e]">
                    About me
                    <span className="block h-[3px] w-[100px] bg-[#0078ff] absolute -bottom-3 left-0" />
                  </h5>
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  Hi, I'm a Frontend developer, Html and Css Teacher, JavaScript and React Mentor
                </p>
                <p className="text-zinc-700 leading-relaxed mt-3">
                  My goal is to do difficult tasks more simply
                </p>
                <p className="text-zinc-700 leading-relaxed mt-3">
                  I love my job and all that it encompasses
                </p>
              </div>
            </motion.div>
          </div>

          {/* bottom: skills columns */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-8">
              {leftColumn.map((g) => (
                <SkillGroup key={g.title} {...g} />
              ))}
            </div>
            <div className="space-y-8">
              {rightColumn.map((g) => (
                <SkillGroup key={g.title} {...g} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}