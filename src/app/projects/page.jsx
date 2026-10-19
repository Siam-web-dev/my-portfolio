import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getAllProjects } from "@/data/projects";

export const metadata = {
  title: "Projects | Kamruzzaman Siam",
  description:
    "Explore web development projects built by Kamruzzaman Siam, including Fit Log, Fresh Mart, and DevStack.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="flex-1 py-12 sm:py-16 relative bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute inset-0 radial-glow-top pointer-events-none -z-10" />

      <Container>
        {/* Page Hero */}
        <div className="max-w-3xl mb-12">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F5FF] mt-4 mb-4">
            Projects & Work
          </h1>
          <p className="text-base sm:text-lg text-[#9BA3B8] leading-relaxed">
            A curated collection of web applications, interfaces, and front-end tools.
            Each project reflects my focus on clean component structure, responsive design,
            and practical problem solving.
          </p>
        </div>

        {/* Interactive Filterable Project Grid */}
        <ProjectGrid projects={projects} />
      </Container>
    </main>
  );
}
