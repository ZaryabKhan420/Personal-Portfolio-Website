import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdAnimation } from "react-icons/md";
import { IoLogoFirebase } from "react-icons/io5";
import { SiDrizzle } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Zaryab Zubair",
  greet: "Hello there! 👋🏻",
  description:
    "I'm a passionate frontend developer skilled in modern web technologies like HTML, CSS, JavaScript, React, and animation libraries. I love building full-stack projects that deliver smooth and responsive user experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Fullstack Car Marketplace",
    description:
      "A full-stack car marketplace built with React, TailwindCSS, Drizzle ORM, and Clerk for authentication. Features include car search, category-based browsing, car listing, and messaging via SendBird.",
    image: projectImage1,
    githubLink: "https://github.com/ZaryabKhan420/car-marketplace",
    LiveLink: "https://zaryab-car-marketplace.netlify.app/",
  },
  {
    id: 2,
    name: "AI Resume Builder",
    description:
      "An AI-powered resume builder that allows users to create, edit, and share resumes. Built with React, TailwindCSS, and Strapi backend with PostgreSQL, utilizing the Gemini API for resume content generation.",
    image: projectImage2,
    githubLink: "https://github.com/ZaryabKhan420/ai-resume-builder",
    LiveLink: "https://github.com/ZaryabKhan420/ai-resume-builder-strapi-admin",
  },
  {
    id: 3,
    name: "AI Personal Expense Tracker",
    description:
      "A full-stack expense tracker with AI capabilities. Features include income management, budget creation, and expense tracking, using React for the frontend and Neon/PostgreSQL for the backend.",
    image: projectImage3,
    githubLink: "https://github.com/ZaryabKhan420/AI-Expense-Tracker",
    LiveLink: "https://zaryab-ai-expense-tracker.netlify.app/",
  },
];

export const BIO = [
  `I am a passionate frontend developer from Gujrat, Punjab, Pakistan, with a Bachelor’s degree in Information Technology from the University of Gujrat. I specialize in creating engaging, dynamic, and visually appealing web applications using a wide range of web technologies. With expertise in HTML, CSS, JavaScript, React, GSAP, AOS animation, and Redux, I am able to bring innovative ideas to life, focusing on creating seamless and interactive user experiences.

Throughout my career, I have worked on several full-stack projects, showcasing my ability to handle both frontend and backend development. Some of my notable projects include a car marketplace that allows users to buy and sell cars with features like login authentication, car search, and chat messaging; an AI-powered resume builder that enables users to generate, update, and share resumes; and a personal expense tracker with budget management and expense tracking features.

I am driven by a passion for transforming ideas into functional and user-friendly web experiences, constantly seeking new challenges and opportunities to expand my skills.`,
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-3xl text-cyan-400 lg:text-5xl" />,
    name: "HTML",
    experience: "Expert",
  },
  {
    icon: <IoLogoCss3 className="text-3xl text-cyan-400 lg:text-5xl" />,
    name: "CSS",
    experience: "Expert",
  },
  {
    icon: <IoLogoJavascript className="text-3xl text-cyan-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "Expert",
  },
  {
    icon: <RiReactjsLine className="text-3xl text-cyan-400 lg:text-5xl" />,
    name: "React Js",
    experience: "Expert",
  },
  {
    icon: <TbBrandFramerMotion className="text-3xl text-sky-700 lg:text-5xl" />,
    name: "Framer Motion",
    experience: "Expert",
  },

  {
    icon: <MdAnimation className="text-3xl text-green-600 lg:text-5xl" />,
    name: "GSAP, ScrollTrigger, AOS",
    experience: "Expert",
  },
  {
    icon: <SiDrizzle className="text-3xl text-sky-700 lg:text-5xl" />,
    name: "Drizzle-orm",
    experience: "Expert",
  },

  {
    icon: <IoLogoFirebase className="text-3xl text-green-600 lg:text-5xl" />,
    name: "Firebase",
    experience: "Expert",
  },
];

export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    duration: "2020 - Present",
    description:
      "Worked on various freelance projects, delivering full-stack web solutions, including a car marketplace, AI resume builder, and personal expense tracker. Focused on clean design, user experience, and responsive frontends.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Gujrat",
    duration: "2020 - 2024",
    description:
      "Specialized in web development, databases, and software engineering. Gained hands-on experience in frontend development and backend integration. Developed a passion for building web applications, with a focus on creating user-friendly interfaces. Currently working as a frontend web developer, specializing in modern web technologies.",
  },
  {
    degree: "Intermediate in Computer Science",
    institution: "Govt Zamindar College",
    duration: "2018 - 2020",
    description:
      "Developed a strong interest in both computer science and physics. Learned the fundamentals of programming, particularly in C language, which sparked an early interest in coding.",
  },
  {
    degree: "Matriculation",
    institution: "Workers Welfare School Boys Gujrat",
    duration: "2016 - 2018",
    description:
      "Discovered a love for physics, which enhanced problem-solving skills and analytical thinking. Excelled in science subjects, laying a strong foundation for future studies in technology.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/ZaryabKhan420",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/zaryab-zubair/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
