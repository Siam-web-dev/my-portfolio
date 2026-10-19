import { CheckCircle2, Target, Info } from "lucide-react";

export default function ProjectOverview({ project }) {
  return (
    <section className="py-12 border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left column: Overview & Problem */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#8B8DFF] mb-2">
              <Info className="w-4 h-4" />
              <span>Project Overview</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F3F5FF] mb-4">
              Context & Background
            </h3>
            <p className="text-base text-[#9BA3B8] leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.purpose && (
            <div className="p-6 rounded-2xl bg-[#111521] border border-white/[0.08]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#69E4F3] mb-2">
                <Target className="w-4 h-4" />
                <span>Problem & Purpose</span>
              </div>
              <h4 className="text-lg font-bold text-[#F3F5FF] mb-2">
                Why this project was built
              </h4>
              <p className="text-sm text-[#9BA3B8] leading-relaxed">
                {project.purpose}
              </p>
            </div>
          )}
        </div>

        {/* Right column: Highlights list */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0D1019] border border-white/[0.08]">
            <h3 className="text-base font-bold text-[#F3F5FF] mb-4">
              Core Highlights
            </h3>
            <ul className="space-y-3.5">
              {project.highlights?.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-[#9BA3B8]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#8B8DFF] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick metadata summary */}
          <div className="p-6 rounded-2xl bg-[#111521] border border-white/[0.08] space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
              <span className="text-[#9BA3B8]">Category</span>
              <span className="text-[#F3F5FF] font-medium">{project.category}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
              <span className="text-[#9BA3B8]">Status</span>
              <span className="text-emerald-400 font-medium">{project.status || "Active"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#9BA3B8]">Primary Stack</span>
              <span className="text-[#8B8DFF] font-medium">
                {project.technologies?.slice(0, 2).join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
