import React, { useEffect, useState } from "react";
import { PROJECTS } from "../assets/index";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const Projects = () => {
  const [ismobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobileView(true);
    }
  }, [window.innerWidth]);

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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                className="py-2 h-[30rem] sm:h-[22rem] w-[25rem] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-2 text-xl text-center">{project.name}</h3>
                <p className="mb-12 p-4">{project.description}</p>
                <div className="flex gap-3 flex-wrap justify-center items-center">
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
