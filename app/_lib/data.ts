import React from "react";
import freshCartImg from "@/public/fresh-cart.webp";
import theWildOasisDashboardImg from "@/public/the-wild-oasis.webp";
import wildOasisCustomerImg from "@/public/the-wild-oasis-customer.webp";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const NAV_LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const EXPERIENCES_DATA = [
  {
    title: "Graduated ",
    location: "Faculty of Sciences, Tanta University",
    description: "I graduated from Faculty of Sciences, Tanta University.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2023",
  },
  {
    title: "Frontend Diploma",
    location: "Cairo, Egypt",
    description:
      "Completed a 6-month diploma in Frontend Development at Route Academy, gaining hands-on experience in modern web technologies and building responsive, user-friendly applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Mar 2024",
  },
  {
    title: "Frontend Developer intern",
    location: "Remote",
    description:
      "Completed a 3-month remote internship at Web Masters, gaining practical experience and collaborating on real-world projects in a virtual work environment.",
    icon: React.createElement(FaReact),
    date: "May 2025 - Aug 2025",
  },
] as const;

export const PROJECTS_DATA = [
  {
    title: "Wild Oasis Customer",
    description:
      "A customer-facing web application for a travel agency. It allows users to browse and book travel packages, view their bookings.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Supabase"],
    imageUrl: wildOasisCustomerImg,
    githubUrl: "https://github.com/Nabeeeh/wild-oasis-customer",
    liveUrl: "https://wild-oasis-customer-delta.vercel.app",
  },
  {
    title: "Wild Oasis Dashboard",
    description:
      "An admin dashboard for a travel agency. It allows admins to manage travel packages, view bookings, and generate reports.",
    tags: ["React", "styled-components", "TypeScript", "React-Query"],
    imageUrl: theWildOasisDashboardImg,
    githubUrl: "https://github.com/Nabeeeh/the-wild-oasis",
    liveUrl: "https://the-wild-oasis-nabeeh.netlify.app",
  },
  {
    title: "Fresh Cart",
    description:
      "A simple e-commerce web application that allows users to browse products, add them to their cart, and checkout.",
    tags: ["React", "Bootstrap", "Axios", "React-Query", "REST API"],
    imageUrl: freshCartImg,
    githubUrl: "https://github.com/Nabeeeh/fresh-cart",
    liveUrl: "https://fresh-cart-nabeeh.netlify.app",
  },
] as const;

export const SKILLS_DATA = [
  "Algorithms",
  "Data Structures",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Problem Solving",
  "React",
  "Redux Toolkit",
  "Next.js",
  "Framer Motion",
  "Git",
  "GitHub",
] as const;
