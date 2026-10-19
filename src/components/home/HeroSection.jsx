import { ArrowRight, Mail, Sparkles, Terminal, FileCode2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/Icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { profileData } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 radial-glow-top pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#69E4F3]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#111521] border border-white/10 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[#9BA3B8] font-mono">
                {profileData.availability}
              </span>
            </div>

            {/* Greeting */}
            <p className="text-base sm:text-lg font-medium text-[#8B8DFF] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#69E4F3]" />
              <span>Hey, I&apos;m {profileData.shortName}</span>
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3F5FF] leading-[1.1]">
              I build{" "}
              <span className="bg-gradient-to-r from-[#8B8DFF] via-[#A5A6FF] to-[#69E4F3] bg-clip-text text-transparent">
                things for the web.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#9BA3B8] leading-relaxed max-w-xl">
              Frontend developer specializing in{" "}
              <strong className="text-[#F3F5FF] font-semibold">React</strong>,{" "}
              <strong className="text-[#F3F5FF] font-semibold">Next.js</strong>, and{" "}
              <strong className="text-[#F3F5FF] font-semibold">Tailwind CSS</strong>.
              I craft clean, component-driven interfaces with an emphasis on responsive design,
              accessibility, and intuitive user experiences.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                href="/projects"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Explore Projects
              </Button>
              <Button
                href="/about"
                variant="secondary"
                size="md"
              >
                About Me
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                size="md"
              >
                Contact Me
              </Button>
            </div>

            {/* Social links row */}
            <div className="pt-4 flex items-center gap-4 text-[#9BA3B8]">
              <span className="text-xs uppercase tracking-wider font-mono text-white/40">
                Connect:
              </span>
              {profileData.github && (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#111521] border border-white/5 hover:border-[#8B8DFF]/40 hover:text-white transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#111521] border border-white/5 hover:border-[#69E4F3]/40 hover:text-white transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {profileData.whatsappUrl && (
                <a
                  href={profileData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#111521] border border-white/5 hover:border-emerald-500/40 hover:text-emerald-400 transition-all shadow-sm"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>
              )}
              {profileData.email && (
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2 rounded-xl bg-[#111521] border border-white/5 hover:border-[#8B8DFF]/40 hover:text-white transition-all shadow-sm"
                  aria-label="Email Siam"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Code Editor Mockup Card */}
          <div className="lg:col-span-5 relative">
            {/* Ambient halo behind editor */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#8B8DFF]/30 to-[#69E4F3]/30 rounded-3xl blur-xl opacity-60 pointer-events-none" />

            {/* Main Code Editor Surface */}
            <div className="relative rounded-2xl bg-[#0D1019] border border-white/[0.12] shadow-[0_24px_48px_rgba(0,0,0,0.7)] overflow-hidden">
              {/* Window Header Bar */}
              <div className="px-4 py-3 bg-[#111521] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#9BA3B8] font-mono">
                  <FileCode2 className="w-3.5 h-3.5 text-[#8B8DFF]" />
                  <span>developer.config.js</span>
                </div>
                <div className="w-12 text-right">
                  <Terminal className="w-3.5 h-3.5 text-white/30 inline-block" />
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-[#9BA3B8] overflow-x-auto">
                <div className="text-white/40 italic mb-2">{"// kamruzzaman.dev profile"}</div>
                <div>
                  <span className="text-[#8B8DFF]">const</span>{" "}
                  <span className="text-[#69E4F3]">developer</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-[#9BA3B8]">name</span>:{" "}
                  <span className="text-emerald-300">&quot;{profileData.name}&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#9BA3B8]">role</span>:{" "}
                  <span className="text-emerald-300">&quot;Frontend Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#9BA3B8]">coreStack</span>: [
                </div>
                <div className="pl-8 text-amber-200">
                  &quot;React&quot;, &quot;Next.js&quot;, &quot;Tailwind CSS&quot;, &quot;JS (ES6+)&quot;
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-[#9BA3B8]">learning</span>: [
                </div>
                <div className="pl-8 text-purple-300">
                  &quot;Node.js&quot;, &quot;MongoDB&quot;, &quot;TypeScript&quot;
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-[#9BA3B8]">openForHire</span>:{" "}
                  <span className="text-emerald-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#9BA3B8]">buildPhilosophy</span>:{" "}
                  <span className="text-emerald-300">&quot;Clean, accessible & performant&quot;</span>
                </div>
                <div>{"};"}</div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#9BA3B8]/70">
                  <span>status: ready</span>
                  <span className="text-emerald-400">● 0 errors</span>
                </div>
              </div>
            </div>

            {/* Restrained floating technology badges */}
            <div className="hidden sm:flex absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-[#111521] border border-white/10 shadow-lg items-center gap-2 text-xs font-semibold text-[#8B8DFF] animate-pulse">
              <span>Next.js 16</span>
            </div>
            <div className="hidden sm:flex absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-[#111521] border border-white/10 shadow-lg items-center gap-2 text-xs font-semibold text-[#69E4F3]">
              <span>React 19</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
