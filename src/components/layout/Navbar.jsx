"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#080A10]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#F3F5FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B8DFF] rounded-lg"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8B8DFF] to-[#69E4F3] text-[#080A10] flex items-center justify-center font-black text-sm shadow-[0_0_12px_rgba(139,141,255,0.4)] group-hover:scale-105 transition-transform">
              KS
            </span>
            <span className="group-hover:text-white transition-colors">
              kamruzzaman<span className="text-[#8B8DFF]">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#111521]/80 border border-white/[0.08] shadow-inner backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-[#F3F5FF] bg-gradient-to-r from-[#8B8DFF]/20 to-[#69E4F3]/20 border border-[#8B8DFF]/40 shadow-sm"
                      : "text-[#9BA3B8] hover:text-[#F3F5FF] hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="sr-only">(current page)</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact"
              variant="secondary"
              size="sm"
              icon={Sparkles}
              className="border-white/10 hover:border-[#8B8DFF]/50"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl text-[#9BA3B8] hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8B8DFF]"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={pathname}
      />
    </header>
  );
}
