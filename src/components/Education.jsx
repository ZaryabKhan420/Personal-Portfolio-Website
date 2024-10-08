import React from "react";
import { EDUCATION } from "../assets/index";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <section id="education" className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-2xl lg:text-3xl font-bold"
      >
        Education
      </motion.h2>
      {EDUCATION.map((edu, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            className="mb-6 p-3 sm:p-10"
            key={index}
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-sm text-stone-300">{edu.duration}</p>
            <p className="mt-2 text-stone-400">{edu.description}</p>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Education;
