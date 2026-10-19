import Link from "next/link";
import { ExternalLink, ArrowRight, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Badge from "@/components/ui/Badge";

export default function ProjectCard({ project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_24px_rgba(139,141,255,0.12)] overflow-hidden">
      {/* Top visual preview mockup */}
      <div className="relative h-48 sm:h-52 w-full bg-gradient-to-br from-[#0D1019] via-[#111521] to-[#161C2C] border-b border-white/[0.06] flex flex-col justify-between p-4 overflow-hidden">
        {/* Subtle grid background inside preview */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Ambient colored glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#8B8DFF]/15 blur-2xl group-hover:bg-[#69E4F3]/20 transition-all duration-500 pointer-events-none" />

        {/* Mockup browser window header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="text-[11px] font-mono tracking-wide text-[#9BA3B8]/70 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5">
            {project.category}
          </span>
        </div>

        {/* Center preview element */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#8B8DFF]/20 to-[#69E4F3]/20 border border-white/10 flex items-center justify-center text-[#8B8DFF] group-hover:scale-110 group-hover:text-[#69E4F3] transition-all duration-300 shadow-md">
            <Layers className="w-6 h-6" />
          </div>
          <p className="mt-2 text-xs font-mono text-[#9BA3B8]/80 tracking-wider">
            {project.slug}.app
          </p>
        </div>

        {/* Bottom tags in preview */}
        <div className="relative z-10 flex items-center justify-between text-xs">
          {project.status && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </span>
          )}
          {project.featured && (
            <span className="text-[11px] font-medium text-[#8B8DFF] bg-[#8B8DFF]/10 px-2 py-0.5 rounded-full border border-[#8B8DFF]/20">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content body */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-xl font-bold tracking-tight text-[#F3F5FF] group-hover:text-white transition-colors">
            <Link
              href={`/projects/${project.slug}`}
              className="focus:outline-none focus-visible:underline"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-sm text-[#9BA3B8] leading-relaxed line-clamp-3">
            {project.shortDescription || project.description}
          </p>
        </div>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies?.map((tech) => (
            <Badge key={tech} size="xs" variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Card actions */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B8DFF] hover:text-[#69E4F3] transition-colors group/link"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-[#9BA3B8] hover:text-white hover:bg-white/5 transition-colors"
                title="View Live Site"
                aria-label={`View live site for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-[#9BA3B8] hover:text-white hover:bg-white/5 transition-colors"
                title="View GitHub Repository"
                aria-label={`View source code for ${project.title}`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
