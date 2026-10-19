import { ArrowRight, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#080A10] to-[#0D1019] border-t border-white/[0.06] relative overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8B8DFF]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <Container className="text-center max-w-3xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#69E4F3] bg-[#69E4F3]/10 border border-[#69E4F3]/25 mb-6">
          <span>Let&apos;s Connect</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F5FF] mb-6">
          Ready to build something{" "}
          <span className="bg-gradient-to-r from-[#8B8DFF] to-[#69E4F3] bg-clip-text text-transparent">
            meaningful together?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#9BA3B8] leading-relaxed mb-10 max-w-xl mx-auto">
          Whether you have an upcoming project, an engineering role, or just want to chat
          about web architecture and modern React patterns, my inbox is open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={Mail}
            iconPosition="left"
          >
            Get In Touch
          </Button>
          <Button
            href="/projects"
            variant="secondary"
            size="lg"
            icon={ArrowRight}
          >
            Browse My Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
