import { GraduationCap, Code2, Sparkles, Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutData } from "@/data/experience";
import { profileData } from "@/data/profile";

export default function AboutIntro() {
  return (
    <section className="pt-8 pb-16 relative">
      <Container>
        <div className="max-w-4xl space-y-6">
          <SectionLabel>{aboutData.intro.badge}</SectionLabel>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F5FF] leading-tight">
            {aboutData.intro.title}
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#9BA3B8] leading-relaxed">
            {aboutData.intro.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
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
