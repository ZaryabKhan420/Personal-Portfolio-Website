import React from "react";
import { PROJECTS } from "../assets/index";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section id="projects" className="pt-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-2xl lg:text-3xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 min-h-[80rem] sm:min-h-fit">
        {PROJECTS.map((project) => {
          return (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-2 text-xl">{project.name}</h3>
                <p className="mb-12 p-4">{project.description}</p>
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreffer"
                    className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                  >
                    <div className="flex items-center">
                      <span> Github Code</span>
                      <MdArrowOutward />
                    </div>
                  </a>
                  <a
                    href={project.LiveLink}
                    target="_blank"
                    rel="noopener noreffer"
                    className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                  >
                    <div className="flex items-center">
                      <span> Live View</span>
                      <MdArrowOutward />
                    </div>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
