"use client";
import { motion } from "framer-motion";

import { useActiveSectionInView } from "../_lib/hooks";

import SectionHeading from "./sectionHeading";

const AboutSection = () => {
  const { ref } = useActiveSectionInView("About", 0.6);

  return (
    <motion.section
      className="mb-28 max-w-[45rem] leading-8 text-center sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>about me</SectionHeading>

      <p className="mb-2">
        I&apos;m a passionate <strong>Front-End Developer</strong> dedicated to
        creating engaging, intuitive, and user-friendly web experiences. With a
        strong foundation in{" "}
        <strong>HTML, CSS, JavaScript, and TypeScript</strong> I specialize in
        building responsive websites and interactive applications using modern
        frameworks like <strong>React and Next.js.</strong>
      </p>

      <p className="mb-2">
        I&apos;m passionate about transforming complex concepts into clean,
        elegant code that results in visually appealing, responsive, and
        high-performing applications. I focus on writing maintainable code,
        optimizing for speed, and delivering user-friendly experiences that
        balance functionality with design. Constantly exploring the latest
        front-end trends and experimenting with new technologies, I aim to
        enhance interactivity, performance, and collaborating closely with
        designers, backend developers, and project managers to deliver
        high-quality results on time.
      </p>

      <p className="mb-2">
        Outside of coding, I enjoy staying current with industry innovations,
        playing video games, and playing football.
      </p>

      <p className="mb-2">
        If you&apos;re looking for a <strong>Front-End Developer</strong> who is
        passionate about creating beautiful, functional websites, feel free to{" "}
        <strong>reach out</strong>!{" "}
      </p>
    </motion.section>
  );
};

export default AboutSection;
