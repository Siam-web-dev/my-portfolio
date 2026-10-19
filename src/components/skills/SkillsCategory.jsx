import SkillCard from "./SkillCard";

export default function SkillsCategory({ category }) {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8B8DFF]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#F3F5FF]">
            {category.title}
          </h2>
        </div>
        <p className="mt-2 text-sm text-[#9BA3B8] max-w-2xl">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
