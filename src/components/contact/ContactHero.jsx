import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactHero() {
  return (
    <div className="max-w-3xl mb-12 sm:mb-16">
      <SectionLabel>Get In Touch</SectionLabel>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F5FF] mt-4 mb-4">
        Let&apos;s build something{" "}
        <span className="bg-gradient-to-r from-[#8B8DFF] to-[#69E4F3] bg-clip-text text-transparent">
          useful.
        </span>
      </h1>
      <p className="text-base sm:text-lg text-[#9BA3B8] leading-relaxed">
        Whether you have an inquiry regarding engineering roles, front-end freelance work,
        or simply want to discuss React and Next.js architectures, feel free to reach out.
      </p>
    </div>
  );
}
