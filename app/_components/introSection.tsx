"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { useActiveSectionInView } from "../_lib/hooks";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import nabeehImg from "@/public/mohamed_nabeeh.webp";

const IntroSection = () => {
  const { ref } = useActiveSectionInView("Home", 0.75);

  return (
    <section
      id="home"
      ref={ref}
      className="max-w-[50rem] mb-20 text-center sm:mb-28 scroll-mt-[100rem] min-h-[calc(100dvh-4.5rem)]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              className="size-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-gray-700"
              src={nabeehImg}
              alt="mohamed-nabeeh-portrait"
              width={192}
              height={192}
              quality={100}
              priority
            />
          </motion.div>

          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.3,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] md:text-4xl"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Mohamed Nabeeh.</span>{" "}
        I&apos;m a <span className="font-bold">Frontend Developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-3 text-lg font-medium"
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all "
        >
          Contact me here
          <BsArrowRight className="opacity-75 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/mohamed-nabeeh-resume.pdf"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10"
          download
        >
          Download CV
          <HiDownload className="opacity-75 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/mohamednabeeh94"
            className="bg-white p-4 text-gray-800 flex items-center  rounded-full hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Nabeeeh"
            className="bg-white p-4 text-gray-800 flex items-center  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
