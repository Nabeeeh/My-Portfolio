import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";

import { ActiveSectionContextProvider } from "./_context/activeSectionContext";
import { ThemeProvider } from "./_context/themeContext";

import ThemeToggle from "./_components/themeToggle";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Nabeeh | Portfolio",
  description:
    "Mohamed Nabeeh is a passionate Front-End Developer dedicated to creating engaging, intuitive, and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, specialized in building responsive websites and interactive applications using modern frameworks like React and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-gray-50 text-gray-950 relative pt-28 sm:pt36 dark:bg-gray-900 dark:text-gray-50/90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-right" />
            <ThemeToggle />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
