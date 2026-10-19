import Container from "@/components/ui/Container";
import SkillsHero from "@/components/skills/SkillsHero";
import SkillsCategory from "@/components/skills/SkillsCategory";
import LearningSection from "@/components/skills/LearningSection";
import { skillsData } from "@/data/skills";

export const metadata = {
  title: "Skills & Technologies | Kamruzzaman Siam",
  description:
    "Explore the technical stack of Kamruzzaman Siam — Frontend skills (React, Next.js, Tailwind CSS), developer tools, and backend exploration.",
};

export default function SkillsPage() {
  return (
    <main className="flex-1 py-12 sm:py-16 relative bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute inset-0 radial-glow-top pointer-events-none -z-10" />

      <Container className="space-y-16">
        <SkillsHero />

        {/* Categories */}
        <div className="space-y-16">
          {skillsData.categories.map((category) => (
            <SkillsCategory key={category.id} category={category} />
          ))}
        </div>

        {/* Currently learning and learning approach */}
        <LearningSection />
      </Container>
    </main>
  );
}
