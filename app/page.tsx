import Header from "./_components/header";
import IntroSection from "./_components/introSection";
import AboutSection from "./_components/aboutSection";
import ProjectsSection from "./_components/projectsSection";
import SkillsSection from "./_components/skillsSection";
import ExperienceSection from "./_components/experienceSection";
import ContactSection from "./_components/contactSection";
import FooterSection from "./_components/footerSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center px-4">
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
