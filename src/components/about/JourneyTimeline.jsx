import { Calendar, GitCommit } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutData } from "@/data/experience";

export default function JourneyTimeline() {
  return (
    <section className="py-16 bg-[#0D1019] border-t border-white/[0.08]">
      <Container>
        <SectionHeading
          label="Progression"
          title="Learning & Development Journey"
          subtitle="A clear progression from computing fundamentals to modern front-end frameworks and full-stack exploration."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 max-w-3xl">
          {aboutData.timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0D1019] border-2 border-[#8B8DFF] group-hover:scale-125 group-hover:border-[#69E4F3] transition-all flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B8DFF]" />
              </div>

              {/* Timeline card */}
              <div className="p-6 rounded-2xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#69E4F3] bg-[#69E4F3]/10 px-2.5 py-0.5 rounded-md border border-[#69E4F3]/20">
                    {item.period}
                  </span>
                  <span className="text-xs text-[#9BA3B8] font-mono">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F3F5FF] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#9BA3B8] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[#9BA3B8] px-2 py-0.5 rounded bg-white/[0.04] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
