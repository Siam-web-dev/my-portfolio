import { ArrowRight, Layers, FileCode, Palette, GitBranch, Globe2, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const coreSkills = [
  {
    name: "React",
    category: "Frontend",
    description: "Component architecture, hooks, and reactive UI patterns.",
    icon: Layers,
    accent: "#69E4F3",
  },
  {
    name: "Next.js",
    category: "Full Stack",
    description: "App Router, Server Components, and optimized routing.",
    icon: Sparkles,
    accent: "#8B8DFF",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Language",
    description: "Async/await, DOM APIs, event loop, and modular JS.",
    icon: FileCode,
    accent: "#FCD34D",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility systems, responsive grids, and clean design tokens.",
    icon: Palette,
    accent: "#38BDF8",
  },
  {
    name: "REST APIs",
    category: "Integration",
    description: "Asynchronous data fetching, payloads, and error boundaries.",
    icon: Globe2,
    accent: "#A78BFA",
  },
  {
    name: "Git & GitHub",
    category: "Workflow",
    description: "Clean branching, commits, and collaborative workflows.",
    icon: GitBranch,
    accent: "#F87171",
  },
];

export default function SkillsPreview() {
  return (
    <section className="py-20 bg-[#080A10] border-t border-white/[0.06] relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            label="Ecosystem"
            title="Core Technical Skills"
            subtitle="The modern tools and technologies I use daily to build production-grade web applications."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button href="/skills" variant="secondary" size="md" icon={ArrowRight}>
              View All Skills & Roadmap
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/40 transition-all duration-200 group flex items-start gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                  style={{ color: skill.accent }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#F3F5FF] group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#9BA3B8] px-2 py-0.5 rounded bg-white/[0.04]">
                      {skill.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#9BA3B8] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
