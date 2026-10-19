"use client";

import Link from "next/link";
import { X, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import Button from "@/components/ui/Button";

export default function MobileMenu({ isOpen, onClose, navLinks, currentPath }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#080A10]/95 backdrop-blur-xl border-b border-white/10 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top bar with close button */}
      <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
        <Link
          href="/"
          onClick={onClose}
          className="text-lg font-bold tracking-tight text-[#F3F5FF] flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8B8DFF] to-[#69E4F3] text-[#080A10] flex items-center justify-center font-black text-sm">
            KS
          </span>
          <span>
            kamruzzaman<span className="text-[#8B8DFF]">.dev</span>
          </span>
        </Link>
        <button
          onClick={onClose}
          className="p-2 rounded-xl text-[#9BA3B8] hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#8B8DFF]"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-6 py-8 flex flex-col gap-2 overflow-y-auto">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? currentPath === "/"
              : currentPath.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                isActive
                  ? "bg-[#8B8DFF]/15 text-[#8B8DFF] border border-[#8B8DFF]/30"
                  : "text-[#9BA3B8] hover:text-[#F3F5FF] hover:bg-white/5"
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform ${
                  isActive ? "text-[#8B8DFF] translate-x-1" : "text-white/20"
                }`}
              />
            </Link>
          );
        })}

        <div className="pt-6 mt-4 border-t border-white/10">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={onClose}
          >
            Let&apos;s Talk
          </Button>
        </div>
      </nav>

      {/* Social links in mobile menu footer */}
      <div className="px-6 py-6 border-t border-white/10 flex items-center justify-between text-sm text-[#9BA3B8]">
        <span>Connect:</span>
        <div className="flex items-center gap-3">
          {profileData.github && (
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {profileData.linkedin && (
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}
          {profileData.whatsappUrl && (
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-5 h-5 text-emerald-400" />
            </a>
          )}
          {profileData.email && (
            <a
              href={`mailto:${profileData.email}`}
              className="p-2 rounded-lg bg-white/5 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
