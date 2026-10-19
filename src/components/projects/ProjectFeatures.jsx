import { Sparkles } from "lucide-react";

export default function ProjectFeatures({ project }) {
  if (!project.features || project.features.length === 0) return null;

  return (
    <section className="py-12 border-b border-white/[0.08]">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#8B8DFF] mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Key Capabilities</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F5FF]">
          Key Features & Implementation
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[#9BA3B8]">
          Specific product features and interface modules built into {project.title}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {project.features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/30 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#8B8DFF]/10 text-[#8B8DFF] flex items-center justify-center font-bold text-xs mb-3">
              0{idx + 1}
            </div>
            <h4 className="text-base font-bold text-[#F3F5FF] mb-2">
              {feature.title}
            </h4>
            <p className="text-sm text-[#9BA3B8] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
