"use client";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "../_context/themeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 text-white bg-gray-950/80 size-10 sm:size-12 backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all cursor-pointer dark:bg-white dark:text-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsMoon className="text-xl" />
      ) : (
        <BsSun className="text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
