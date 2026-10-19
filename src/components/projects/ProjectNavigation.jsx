import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";

export default function ProjectNavigation({ prev, next }) {
  return (
    <nav
      aria-label="Project Navigation"
      className="py-12 flex flex-col sm:flex-row items-center justify-between gap-6"
    >
      {/* Previous project */}
      <div className="w-full sm:w-auto">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex items-center gap-3 p-4 rounded-xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/40 transition-all text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#9BA3B8] group-hover:text-white group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs text-[#9BA3B8]">Previous Project</span>
              <span className="block text-sm font-bold text-[#F3F5FF] group-hover:text-[#8B8DFF] transition-colors truncate max-w-[160px]">
                {prev.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>

      {/* Center: Back to all projects */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#9BA3B8] hover:text-[#F3F5FF] hover:bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
      >
        <Grid className="w-3.5 h-3.5 text-[#8B8DFF]" />
        <span>View All Projects</span>
      </Link>

      {/* Next project */}
      <div className="w-full sm:w-auto flex justify-end">
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center gap-3 p-4 rounded-xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/40 transition-all text-right"
          >
            <div>
              <span className="block text-xs text-[#9BA3B8]">Next Project</span>
              <span className="block text-sm font-bold text-[#F3F5FF] group-hover:text-[#8B8DFF] transition-colors truncate max-w-[160px]">
                {next.title}
              </span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#9BA3B8] group-hover:text-white group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </nav>
  );
}
