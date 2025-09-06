"use client";
import { createContext, useContext, useState } from "react";

import type { ActiveSectionName } from "../_lib/types";

type ActiveSectionContextType = {
  activeSection: ActiveSectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<ActiveSectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
};
