"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";

export default function ProjectGrid({ projects }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(["All"]);
    projects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div>
      <ProjectFilters
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        totalCount={projects.length}
        filteredCount={filteredProjects.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id || project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 px-4 rounded-2xl bg-[#111521] border border-white/[0.08]">
          <p className="text-[#9BA3B8]">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
