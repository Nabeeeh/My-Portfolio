"use client";
import { Fragment } from "react";

import { PROJECTS_DATA } from "../_lib/data";

import { useActiveSectionInView } from "../_lib/hooks";

import SectionHeading from "./sectionHeading";
import Project from "./project";

const ProjectsSection = () => {
  const { ref } = useActiveSectionInView("Projects", 0.5);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>my projects</SectionHeading>

      <ul className="max-w-[42rem] space-y-3 sm:space-y-8">
        {PROJECTS_DATA.map((project) => (
          <Fragment key={project.title}>
            <Project project={project} />
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
