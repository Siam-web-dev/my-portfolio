import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectTechStack from "@/components/projects/ProjectTechStack";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import {
  getProjectBySlug,
  getProjectSlugs,
  getAdjacentProjects,
} from "@/data/projects";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Kamruzzaman Siam",
    };
  }

  return {
    title: `${project.title} — Case Study | Kamruzzaman Siam`,
    description: project.shortDescription || project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <main className="flex-1 py-8 relative bg-grid-pattern">
      <Container>
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectFeatures project={project} />
        <ProjectTechStack project={project} />
        <ProjectNavigation prev={prev} next={next} />
      </Container>
    </main>
  );
}
