import React from "react";
import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../assets/index";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="mb-8 mt-12">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="Logo"
          width={120}
          className="my-12"
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => {
          return (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
              href={link.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </motion.a>
          );
        })}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;zaryab zubair. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
