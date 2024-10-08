import React from "react";
import { SKILLS } from "../assets/index";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto">
      <h2 className="mb-12 mt-20 text-center text-2xl lg:text-3xl font-semibold">
        Skills
      </h2>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={containerVariant}
        viewport={{ once: true }}
        className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
      >
        {SKILLS.map((skill, index) => {
          return (
            <motion.div
              variant={itemVariant}
              key={index}
              className={`py-6 flex items-center justify-between ${
                index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""
              }`}
            >
              <div className="flex items-center">
                <div clas>{skill.icon}</div>
                <h3 className="px-6 text-md lg:text-lg">{skill.name}</h3>
              </div>
              <div className="text-sm font-semibold lg:text-md">
                <span>{skill.experience}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
