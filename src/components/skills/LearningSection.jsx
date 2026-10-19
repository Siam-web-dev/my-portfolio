import { BookOpen, Lightbulb, Compass, Zap } from "lucide-react";
import { skillsData } from "@/data/skills";

export default function LearningSection() {
  return (
    <div className="space-y-16 pt-16 border-t border-white/[0.08]">
      {/* Currently Learning Section */}
      <div>
        <div className="pb-4 border-b border-white/[0.08] mb-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#69E4F3]">
            <BookOpen className="w-4 h-4" />
            <span>Active Exploration</span>
          </div>
          <h2 className="text-2xl font-bold text-[#F3F5FF] mt-2">
            Currently Learning & Expanding
          </h2>
          <p className="mt-2 text-sm text-[#9BA3B8] max-w-2xl">
            Technologies and concepts I am currently dedicating time to in order to become a
            versatile full-stack engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.currentlyLearning.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0D1019] border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-300 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                  {item.progress}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#F3F5FF] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#9BA3B8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Philosophy / Approach */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#111521] border border-white/[0.08]">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#8B8DFF] mb-2">
          <Lightbulb className="w-4 h-4" />
          <span>Principles</span>
        </div>
        <h2 className="text-2xl font-bold text-[#F3F5FF] mb-6">
          My Learning Approach & Technical Philosophy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.learningApproach.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-base font-bold text-[#F3F5FF] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B8DFF]" />
                <span>{item.title}</span>
              </h3>
              <p className="text-sm text-[#9BA3B8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
