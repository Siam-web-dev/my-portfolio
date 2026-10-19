import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute inset-0 radial-glow-top pointer-events-none" />

      <Container className="text-center relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-red-500/10 text-red-400 border border-red-500/25 mb-6">
          <span>Error 404</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F3F5FF] mb-4">
          Page Not Found
        </h1>

        <p className="text-base sm:text-lg text-[#9BA3B8] leading-relaxed mb-8">
          The page or project you are looking for might have been moved, renamed,
          or does not exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md" icon={Home} iconPosition="left">
            Back to Home
          </Button>
          <Button href="/projects" variant="secondary" size="md" icon={Compass} iconPosition="left">
            Explore Projects
          </Button>
        </div>
      </Container>
    </div>
  );
}
