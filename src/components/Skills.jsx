import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
import AOS from "aos";
AOS.init();

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "bg-red-500" },
    { name: "CSS3", icon: SiCss3, color: "bg-blue-500" },
    { name: "Bootstrap", icon: SiBootstrap, color: "bg-purple-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "bg-cyan-500" },
    { name: "JavaScript", icon: SiJavascript, color: "bg-yellow-500" },
    { name: "React", icon: SiReact, color: "bg-blue-500" },
    { name: "Next JS", icon: SiNextdotjs, color: "bg-black" },
    { name: "Redux", icon: SiRedux, color: "bg-purple-600" },
    { name: "Express.js", icon: SiExpress, color: "bg-black" },
    { name: "Node.js", icon: SiNodedotjs, color: "bg-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "bg-green-500" },
    { name: "Firebase", icon: SiFirebase, color: "bg-yellow-500" },
    { name: "SQLite", icon: SiSqlite, color: "bg-sky-700" },
  ];

  return (
    <section className="py-16 dark:bg-[#1a1a29]" id="skills">
      <div className="container mx-auto px-4 font-poppins">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#7562e0] mb-8">
            Skills
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {skills.map((skill, index) => (
            <div key={index} data-aos="zoom-in-up">
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center rounded-lg p-4 ${skill.color}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center w-[200px]">
                  <div className="text-4xl text-white mr-4">
                    {React.createElement(skill.icon)}
                  </div>
                  <p className="text-white font-poppins font-medium">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
