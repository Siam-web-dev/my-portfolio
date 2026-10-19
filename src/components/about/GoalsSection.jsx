import { Target, ArrowRight, Mail, FolderGit2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { aboutData } from "@/data/experience";

export default function GoalsSection() {
  return (
    <section className="py-20 bg-[#080A10] border-t border-white/[0.08]">
      <Container>
        <SectionHeading
          label="Next Milestones"
          title="Current Focus & Long-Term Goals"
          subtitle="Where I am directing my engineering effort and what technical goals I am pursuing next."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {aboutData.goals.map((goal, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#8B8DFF]/10 text-[#8B8DFF] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#F3F5FF] mb-2">
                {goal.title}
              </h3>
              <p className="text-sm text-[#9BA3B8] leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#111521] via-[#161C2C] to-[#111521] border border-white/[0.1] text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F5FF]">
            Interested in working together or exploring my code?
          </h3>
          <p className="text-sm sm:text-base text-[#9BA3B8] max-w-lg mx-auto">
            Take a look at the applications I have built or get in touch directly to discuss
            roles and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href="/projects"
              variant="primary"
              size="md"
              icon={FolderGit2}
              iconPosition="left"
            >
              Explore Projects
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              icon={Mail}
              iconPosition="left"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
