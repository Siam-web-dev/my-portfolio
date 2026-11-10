import Image from "next/image";
import { Download, GraduationCap, MapPin, Sparkles, FolderGit2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { aboutData } from "@/data/experience";
import { profileData } from "@/data/profile";

export default function AboutIntro() {
  return (
    <section className="pt-8 pb-16 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Bio & Story */}
          <div className="lg:col-span-7 space-y-6">
            <SectionLabel>{aboutData.intro.badge}</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F5FF] leading-tight">
              {aboutData.intro.title}
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-[#9BA3B8] leading-relaxed">
              {aboutData.intro.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                href={profileData.resumeUrl}
                download={profileData.resumeFileName}
                variant="primary"
                size="md"
                icon={Download}
                iconPosition="left"
              >
                Download Resume (PDF)
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                size="md"
                icon={FolderGit2}
              >
                View Projects
              </Button>
            </div>

            {/* Quick highlights grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profileData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#111521] border border-white/[0.08] text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-[#8B8DFF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#9BA3B8] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Siam's Portrait & Credentials Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#0D1019] border border-white/[0.12] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden border border-white/10 bg-[#111521]">
                <Image
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient dark gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080A10] via-[#080A10]/70 to-transparent pointer-events-none" />

                {/* Overlaid Location Badge */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#080A10]/85 backdrop-blur-md border border-white/15 text-[#F3F5FF] shadow-md">
                    <MapPin className="w-3 h-3 text-[#69E4F3]" />
                    {profileData.location}
                  </span>
                </div>

                {/* Name & Role overlay */}
                <div className="absolute bottom-3.5 inset-x-3.5 z-10">
                  <h3 className="text-lg font-bold text-white drop-shadow-md">
                    {profileData.name}
                  </h3>
                  <p className="text-xs text-[#8B8DFF] font-medium">
                    {profileData.role}
                  </p>
                </div>
              </div>

              {/* Education details */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#111521] border border-white/[0.08] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#69E4F3]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Background</span>
                </div>
                <p className="text-xs font-medium text-[#F3F5FF]">
                  {profileData.education}
                </p>
                <p className="text-[11px] text-[#9BA3B8]">
                  {profileData.institute} (Final Semester)
                </p>
              </div>

              {/* Download Resume Button in Card */}
              <div className="mt-3.5">
                <Button
                  href={profileData.resumeUrl}
                  download={profileData.resumeFileName}
                  variant="secondary"
                  size="sm"
                  icon={Download}
                  className="w-full justify-center border-white/10 hover:border-[#8B8DFF]/40 text-xs"
                >
                  Download Complete CV / Resume
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Approach / Problem Solving Section */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#69E4F3] font-mono">
              Engineering Mindset
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F5FF] mt-2">
              How I Approach Building & Problem Solving
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9BA3B8] max-w-2xl">
              Writing scalable web code requires discipline, empathy for the end user,
              and structured systems thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutData.approach.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/40 transition-colors relative group"
              >
                <span className="text-3xl font-black text-white/[0.07] group-hover:text-[#8B8DFF]/20 transition-colors absolute top-4 right-4 font-mono">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-[#F3F5FF] mb-2 pr-8">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9BA3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
