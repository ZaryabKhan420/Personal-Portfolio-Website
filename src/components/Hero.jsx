import React from "react";
import { HERO as heroData } from "../assets/index";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      className="flex min-h-screen justify-center items-center"
      id="hero"
    >
      <motion.div
        className="w-full lg:mx-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="my-8 text-2xl font-bold md:text-3xl lg:text-5xl">
          {heroData.name}
        </h2>
        <p className="text-xl tracking-tighter lg:text-2xl w-[100%] md:w-[70%] my-5">
          {heroData.greet}
        </p>
        <p className="text-lg tracking-tighter lg:text-xl w-[100%] md:w-[70%]">
          {heroData.description}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
