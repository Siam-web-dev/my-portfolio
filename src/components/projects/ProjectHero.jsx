import Link from "next/link";
import { ExternalLink, ChevronRight, ArrowLeft, Globe, Monitor } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function ProjectHero({ project }) {
  return (
    <div className="relative pt-6 pb-12 sm:pb-16 border-b border-white/[0.08]">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8B8DFF]/10 blur-3xl pointer-events-none -z-10" />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#9BA3B8]">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          </li>
          <li>
            <Link href="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          </li>
          <li className="text-[#8B8DFF] font-medium truncate max-w-[200px] sm:max-w-none">
            {project.title}
          </li>
        </ol>
      </nav>

      {/* Header Info */}
      <div className="max-w-4xl space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="primary" size="sm">
            {project.category}
          </Badge>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status} Project
            </span>
          )}
          {project.featured && (
            <Badge variant="cyan" size="sm">
              Featured Case Study
            </Badge>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F5FF]">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-[#9BA3B8] leading-relaxed">
          {project.shortDescription || project.description}
        </p>

        {/* Action buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3.5">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="primary"
              size="md"
              icon={ExternalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Website
            </Button>
          )}

          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              variant="secondary"
              size="md"
              icon={GithubIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Button>
          ) : (
            <span
              className="inline-flex items-center gap-2 text-xs text-[#9BA3B8] px-3 py-2 rounded-xl bg-white/[0.04] border border-white/5"
              title="Repository is private or available upon request"
            >
              <GithubIcon className="w-4 h-4 text-white/40" />
              <span>Private Repository</span>
            </span>
          )}

          <Button
            href="/projects"
            variant="ghost"
            size="md"
            icon={ArrowLeft}
            iconPosition="left"
          >
            All Projects
          </Button>
        </div>
      </div>

      {/* Large CSS-based browser preview */}
      <div className="mt-10 rounded-2xl bg-[#0D1019] border border-white/[0.12] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {/* Browser window top bar */}
        <div className="px-4 py-3 bg-[#111521] border-b border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          </div>

          <div className="flex-1 max-w-lg mx-auto flex items-center justify-center gap-2 px-3 py-1 rounded-lg bg-[#080A10] border border-white/5 text-xs text-[#9BA3B8] font-mono truncate">
            <Globe className="w-3.5 h-3.5 text-[#8B8DFF] flex-shrink-0" />
            <span className="truncate">
              {project.liveUrl || `https://${project.slug}.example.com`}
            </span>
          </div>

          <div className="text-xs text-[#9BA3B8]/60 font-mono hidden sm:block">
            Preview
          </div>
        </div>

        {/* Mockup screen interior */}
        <div className="p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#0D1019] via-[#111521] to-[#161C2C] flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#8B8DFF]/15 to-[#69E4F3]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#8B8DFF] to-[#69E4F3] text-[#080A10] flex items-center justify-center shadow-[0_0_30px_rgba(139,141,255,0.4)]">
              <Monitor className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F5FF] tracking-tight">
              {project.title}
            </h2>

            <p className="text-sm sm:text-base text-[#9BA3B8] leading-relaxed">
              {project.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#111521]/90 text-[#F3F5FF] border border-white/10 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
