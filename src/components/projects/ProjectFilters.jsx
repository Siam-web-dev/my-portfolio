"use client";

export default function ProjectFilters({
  categories,
  activeCategory,
  onSelectCategory,
  totalCount,
  filteredCount,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
      {/* Category tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B8DFF] ${
                isActive
                  ? "bg-[#8B8DFF] text-[#080A10] shadow-[0_0_16px_rgba(139,141,255,0.4)]"
                  : "bg-[#111521] text-[#9BA3B8] border border-white/[0.08] hover:text-[#F3F5FF] hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Counter metadata */}
      <div className="text-xs text-[#9BA3B8] font-mono">
        Showing{" "}
        <span className="text-[#F3F5FF] font-semibold">{filteredCount}</span> of{" "}
        <span className="text-[#F3F5FF] font-semibold">{totalCount}</span> projects
      </div>
    </div>
  );
}
