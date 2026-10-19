import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function SkillsHero() {
  return (
    <div className="max-w-3xl mb-16">
      <SectionLabel>Technical Stack</SectionLabel>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F5FF] mt-4 mb-4">
        Skills & Technical Competencies
      </h1>
      <p className="text-base sm:text-lg text-[#9BA3B8] leading-relaxed">
        A transparent overview of the technologies, libraries, and architectural paradigms
        I work with regularly, alongside skills currently being actively developed.
      </p>
    </div>
  );
}
