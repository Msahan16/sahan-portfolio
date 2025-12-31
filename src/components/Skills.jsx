import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPhp, FaDatabase,FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
  const categories = [
    {
      id: 1,
      title: 'Frontend & Mobile',
      items: ['React', 'HTML/CSS', 'Bootstrap', 'Android (Kotlin/Java/XML)', 'React Native', 'Next.js', 'Tailwind CSS', 'Figma']
    },
    {
      id: 2,
      title: 'Backend',
      items: ['PHP', 'C#', 'Java','C++', 'Node.js', 'Laravel', 'Spring Boot']
    },

    {
      id: 3,
      title: 'Tools & Databases',
      items: ['Firebase','MySQL', 'MongoDB','Git/GitHub', 'Postman','Android Studio', 'Power BI']
    }
  ];

  const [experiences] = useState([
    {
      id: 1,
      company: "Webxkey",
      role: "Software Engineer Intern",
      period: "Sept 2025 - Present",
      description:
  "Worked on developing and maintaining CRM-based web and mobile applications using Laravel, React, and MySQL. Built RESTful APIs, integrated mobile and web frontends, managed databases, and contributed to feature development, bug fixing, and performance optimization within an agile team environment.",
      logo: "/assets/we.png",
    },
    
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Categorized Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 lg:mt-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              className="bg-surface border-2 border-brand-700 rounded p-5 h-full"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="font-extrabold text-lg mb-3">{cat.title}</h3>
              <ul className="text-sm leading-relaxed space-y-1">
                {cat.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-brand-500 rounded-full flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-bg w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-surface p-5 border border-brand-600 rounded-md hover:bg-surface/70 transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                      <img
                        className="w-22 h-22 lg:w-28 lg:h-28 object-contain"
                    src={exp.logo}
                    alt={exp.company + " logo"}
                  />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
