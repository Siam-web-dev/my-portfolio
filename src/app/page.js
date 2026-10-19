import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutPreview from "@/components/home/AboutPreview";
import SkillsPreview from "@/components/home/SkillsPreview";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Kamruzzaman Siam | Frontend & Web Developer",
  description:
    "Portfolio of Kamruzzaman Siam — Frontend Developer crafting responsive, performant, and accessible web applications using React, Next.js, and Tailwind CSS.",
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <SkillsPreview />
      <ContactCTA />
    </main>
  );
}
