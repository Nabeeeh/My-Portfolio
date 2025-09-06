"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

import Image from "next/image";

import { PROJECTS_DATA } from "../_lib/data";

import { FaCode } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = {
  project: (typeof PROJECTS_DATA)[number];
};

const Project = ({ project }: ProjectProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.li
      className="group flex bg-gray-100 sm:h-[20rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition-all dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className="flex flex-col gap-y-2 px-3 pt-4 pb-4 sm:pl-10 sm:pr-8 sm:pt-10 sm:pb-10 sm:max-w-[55%] sm:group-even:ml-[19.5rem]">
        <h2 className="text-2xl font-semibold">{project?.title}</h2>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {project?.description}
        </p>

        <div className="flex items-center gap-5 ml-auto sm:group-even:mr-auto sm:group-even:ml-0">
          <a
            className="text-xl size-9 bg-gray-800 text-white flex justify-center items-center rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 transition-all cursor-pointer dark:text-gray-800 dark:bg-gray-50 dark:hover:text-white"
            href={project?.githubUrl}
            target="_blank"
            title="Code"
          >
            <FaCode />
          </a>

          <a
            className="text-lg size-9 bg-gray-800 text-white flex justify-center items-center rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 transition-all cursor-pointer dark:text-gray-800 dark:bg-gray-50 dark:hover:text-white"
            href={project?.liveUrl}
            target="_blank"
            title="Live Demo"
          >
            <FaExternalLinkAlt />
          </a>
        </div>

        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {project?.tags.map((tag) => (
            <li
              key={tag}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={project?.imageUrl}
        alt={project?.title}
        loading="lazy"
        quality={100}
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2 
        
        group-even:right-[initial] 
        group-even:-left-40
        
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2"
      />
    </motion.li>
  );
};

export default Project;
