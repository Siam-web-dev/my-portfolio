import Image from "next/image";
import { ArrowRight, Download, Mail, Sparkles, MapPin, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/Icons";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { profileData } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 radial-glow-top pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#69E4F3]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#8B8DFF]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio, and CTAs */}
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
              Junior Frontend Developer specializing in{" "}
              <strong className="text-[#F3F5FF] font-semibold">React.js</strong>,{" "}
              <strong className="text-[#F3F5FF] font-semibold">Next.js</strong>,{" "}
              <strong className="text-[#F3F5FF] font-semibold">TypeScript</strong>, and{" "}
              <strong className="text-[#F3F5FF] font-semibold">Tailwind CSS</strong>.
              Computer Science & Technology diploma student building responsive, user-friendly, and accessible web experiences.
            </p>

            {/* CTAs including Download Resume */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                href={profileData.resumeUrl}
                download={profileData.resumeFileName}
                variant="primary"
                size="md"
                icon={Download}
                iconPosition="left"
              >
                Download Resume
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                size="md"
                icon={ArrowRight}
              >
                Explore Projects
              </Button>
              <Button
                href="/about"
                variant="ghost"
                size="md"
              >
                About Me
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
                  title="GitHub"
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
                  title="LinkedIn"
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
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Premium Developer Showcase Card with Siam's Image */}
          <div className="lg:col-span-5 relative">
            {/* Ambient halo behind portrait card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#8B8DFF]/25 via-[#A5A6FF]/20 to-[#69E4F3]/25 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

            {/* Main Showcase Surface */}
            <div className="relative rounded-3xl bg-[#0D1019] border border-white/[0.12] p-4 sm:p-5 shadow-[0_24px_50px_rgba(0,0,0,0.7)] group">
              {/* Card Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#9BA3B8] font-mono">
                  <span className="text-[#8B8DFF]">siam</span>
                  <span className="text-white/30">/</span>
                  <span>developer-profile</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>

              {/* Portrait Image Frame */}
              <div className="relative w-full aspect-[4/4.6] rounded-2xl overflow-hidden border border-white/10 bg-[#111521]">
                <Image
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay at the base for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080A10] via-[#080A10]/70 to-transparent pointer-events-none" />

                {/* Overlaid pill: Status */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#080A10]/85 backdrop-blur-md border border-emerald-500/30 text-emerald-300 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Work
                  </span>
                </div>

                {/* Overlaid pill: Next.js + React */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#080A10]/85 backdrop-blur-md border border-[#8B8DFF]/40 text-[#8B8DFF] shadow-md">
                    Next.js • React
                  </span>
                </div>

                {/* Overlaid info on bottom of image */}
                <div className="absolute bottom-3.5 inset-x-3.5 z-10 flex items-end justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-md">
                      {profileData.name}
                    </h3>
                    <p className="text-xs text-[#69E4F3] font-medium flex items-center gap-1 drop-shadow-sm">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Diploma in CST (Final Sem)
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-[#9BA3B8] px-2 py-0.5 rounded-md bg-[#111521]/90 backdrop-blur-md border border-white/10 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#8B8DFF]" />
                    Feni, BD
                  </span>
                </div>
              </div>

              {/* Bottom Card Summary & Download Button */}
              <div className="pt-4 flex items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[#F3F5FF] font-mono text-[11px]">
                    React.js
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[#F3F5FF] font-mono text-[11px]">
                    Next.js
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[#F3F5FF] font-mono text-[11px]">
                    TypeScript
                  </span>
                </div>

                <Button
                  href={profileData.resumeUrl}
                  download={profileData.resumeFileName}
                  variant="outline"
                  size="sm"
                  icon={Download}
                  iconPosition="left"
                  className="text-xs border-[#8B8DFF]/30 hover:border-[#8B8DFF] hover:bg-[#8B8DFF]/10 text-[#F3F5FF]"
                >
                  Resume
                </Button>
              </div>
            </div>

            {/* Restrained floating technology badges */}
            <div className="hidden sm:flex absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-[#111521]/90 backdrop-blur-md border border-[#8B8DFF]/40 shadow-xl items-center gap-2 text-xs font-semibold text-[#8B8DFF]">
              <span>Next.js 16</span>
            </div>
            <div className="hidden sm:flex absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#111521]/90 backdrop-blur-md border border-[#69E4F3]/40 shadow-xl items-center gap-2 text-xs font-semibold text-[#69E4F3]">
              <span>React 19</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
