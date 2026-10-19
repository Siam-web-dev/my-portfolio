import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/Icons";
import Container from "@/components/ui/Container";
import CurrentYear from "@/components/ui/CurrentYear";
import { profileData } from "@/data/profile";

export default function Footer() {
  const footerNav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="w-full bg-[#080A10] border-t border-white/[0.08] mt-auto">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-[#F3F5FF]"
            >
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#8B8DFF] to-[#69E4F3] text-[#080A10] flex items-center justify-center font-black text-xs">
                KS
              </span>
              <span>
                {profileData.name}
              </span>
            </Link>
            <p className="text-sm text-[#9BA3B8] leading-relaxed max-w-sm">
              Frontend developer crafting modern, responsive, and performant web applications using React, Next.js, and clean architecture.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.availability}</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F3F5FF]/90">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#9BA3B8]">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F3F5FF] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all text-[#8B8DFF]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F3F5FF]/90">
              Connect
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-[#9BA3B8]">
              {profileData.github && (
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#8B8DFF]" />
                  <span>GitHub</span>
                </a>
              )}
              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#69E4F3]" />
                  <span>LinkedIn</span>
                </a>
              )}
              {profileData.whatsappUrl && (
                <a
                  href={profileData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              )}
              {profileData.email && (
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#8B8DFF]" />
                  <span>Email</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9BA3B8]">
          <p>
            &copy; <CurrentYear /> {profileData.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <span className="text-[#8B8DFF] font-medium">Next.js</span> &{" "}
            <span className="text-[#69E4F3] font-medium">Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
