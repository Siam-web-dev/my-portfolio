import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-20 bg-[#080A10] border-t border-white/[0.06] relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            label="Selected Work"
            title="Featured Projects"
            subtitle="Web applications crafted with modern tools, structured components, and focused user experiences."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button
              href="/projects"
              variant="secondary"
              size="md"
              icon={ArrowRight}
            >
              View All Projects
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id || project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
