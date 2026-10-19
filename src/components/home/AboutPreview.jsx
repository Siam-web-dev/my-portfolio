import { ArrowRight, Code, Cpu, Smartphone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const pillars = [
  {
    icon: Code,
    title: "Component-First Thinking",
    description:
      "Crafting modular, reusable React components with predictable state and clean boundaries.",
  },
  {
    icon: Smartphone,
    title: "Responsive by Default",
    description:
      "Designing fluid layouts with Tailwind CSS that adapt flawlessly from mobile screens to desktop viewports.",
  },
  {
    icon: Cpu,
    title: "Computer Science Foundation",
    description:
      "Grounded in core computing principles, data structures, and web standards to solve technical challenges logically.",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-[#0D1019] border-t border-white/[0.06] relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: About Summary */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              label="Background"
              title="Driven by curiosity, grounded in fundamentals."
              subtitle="I approach web development as both an engineering discipline and a craft."
              className="mb-6"
            />
            <p className="text-base text-[#9BA3B8] leading-relaxed">
              With a formal background in Computer Science and Technology, I bridge theoretical
              principles with modern web engineering. Whether it&apos;s architecting workout planners
              like Fit Log or crafting responsive e-commerce storefronts like Fresh Mart, I prioritize
              simplicity, readability, and performance.
            </p>
            <div className="pt-2">
              <Button href="/about" variant="secondary" size="md" icon={ArrowRight}>
                Read My Story & Background
              </Button>
            </div>
          </div>

          {/* Right: Pillars Cards */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#111521] border border-white/[0.08] flex items-start gap-4 hover:border-[#8B8DFF]/30 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-[#8B8DFF]/10 text-[#8B8DFF] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#F3F5FF]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#9BA3B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
