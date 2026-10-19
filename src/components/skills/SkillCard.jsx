import Badge from "@/components/ui/Badge";

export default function SkillCard({ skill }) {
  const isLearning = skill.status === "Learning";
  const isFamiliar = skill.status === "Familiar";

  return (
    <div className="p-5 rounded-2xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/40 transition-all duration-200 hover:-translate-y-0.5 group flex flex-col justify-between space-y-3">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="text-base font-bold text-[#F3F5FF] group-hover:text-white transition-colors">
            {skill.name}
          </h4>
          <span
            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md font-medium border ${
              isLearning
                ? "bg-purple-500/10 text-purple-300 border-purple-500/20"
                : isFamiliar
                ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
            }`}
          >
            {skill.status}
          </span>
        </div>

        <p className="text-xs text-[#9BA3B8] leading-relaxed">
          {skill.description}
        </p>
      </div>

      {skill.badge && (
        <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-[#9BA3B8]">
          <span className="font-mono text-white/40">Category:</span>
          <span className="text-[#8B8DFF] font-medium">{skill.badge}</span>
        </div>
      )}
    </div>
  );
}
