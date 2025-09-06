import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSection } from "../_context/activeSectionContext";

import { ActiveSectionName } from "./types";

export const useActiveSectionInView = (
  activeSectionName: ActiveSectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({ threshold: threshold });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection(activeSectionName);
  }, [inView, setActiveSection, activeSectionName]);

  return {
    ref,
  };
};
