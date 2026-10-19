import { Code2, AlertTriangle, Lightbulb } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function ProjectTechStack({ project }) {
  return (
    <section className="py-12 border-b border-white/[0.08]">
      <div className="space-y-12">
        {/* Technologies used */}
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#8B8DFF] mb-2">
            <Code2 className="w-4 h-4" />
            <span>Technologies & Libraries</span>
          </div>
          <h3 className="text-2xl font-bold text-[#F3F5FF] mb-4">
            Tech Stack Used
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-[#111521] text-[#F3F5FF] border border-white/[0.1] shadow-sm flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#8B8DFF]" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical challenges & Key learnings split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#0D1019] border border-amber-500/20">
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-400 mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>Technical Challenges Addressed</span>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-[#9BA3B8]"
                  >
                    <span className="text-amber-400 font-bold text-xs mt-0.5">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Learnings */}
          {project.learnings && project.learnings.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#0D1019] border border-[#69E4F3]/20">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#69E4F3] mb-3">
                <Lightbulb className="w-4 h-4" />
                <span>What I Learned & Refined</span>
              </div>
              <ul className="space-y-3">
                {project.learnings.map((learning, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-[#9BA3B8]"
                  >
                    <span className="text-[#69E4F3] font-bold text-xs mt-0.5">•</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
