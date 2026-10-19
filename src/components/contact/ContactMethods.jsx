import { Mail, Phone, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export default function ContactMethods() {
  const methods = [
    {
      name: "WhatsApp",
      value: profileData.whatsapp || "01761991079",
      href: profileData.whatsappUrl,
      icon: WhatsappIcon,
      accent: "#25D366",
      actionText: "Chat on WhatsApp",
    },
    {
      name: "Direct Phone",
      value: profileData.phone || "01761991079",
      href: `tel:${profileData.phoneTel || profileData.phone}`,
      icon: Phone,
      accent: "#69E4F3",
      actionText: "Call Now",
    },
    {
      name: "Direct Email",
      value: profileData.email || "ksiam9193@gmail.com",
      href: `mailto:${profileData.email}`,
      icon: Mail,
      accent: "#8B8DFF",
      actionText: "Send Email",
    },
    {
      name: "GitHub",
      value: "github.com/siam-web-dev",
      href: profileData.github,
      icon: GithubIcon,
      accent: "#A78BFA",
      actionText: "View GitHub",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/kamruzzaman-siam",
      href: profileData.linkedin,
      icon: LinkedinIcon,
      accent: "#38BDF8",
      actionText: "Connect on LinkedIn",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-[#F3F5FF] mb-4 flex items-center gap-2">
        <MessageSquareCode className="w-5 h-5 text-[#8B8DFF]" />
        <span>Direct Communication Channels</span>
      </h3>

      <div className="space-y-3">
        {methods.map((method) => {
          const Icon = method.icon;
          return (
            <div
              key={method.name}
              className="p-5 rounded-2xl bg-[#111521] border border-white/[0.08] hover:border-[#8B8DFF]/40 transition-colors flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                  style={{ color: method.accent }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#9BA3B8]">
                    {method.name}
                  </div>
                  <div className="text-sm font-medium text-[#F3F5FF] truncate mt-0.5">
                    {method.value}
                  </div>
                </div>
              </div>

              {method.href && (
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-xl text-[#9BA3B8] hover:text-white hover:bg-white/5 transition-colors flex-shrink-0"
                  aria-label={method.actionText}
                  title={method.actionText}
                >
                  <ArrowUpRight className="w-4 h-4 text-[#8B8DFF]" />
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct fast-action card */}
      <div className="p-4 rounded-xl bg-[#0D1019] border border-white/5 flex items-center justify-between text-xs text-[#9BA3B8]">
        <span>Quick response guaranteed via:</span>
        <div className="flex items-center gap-2">
          <a
            href={profileData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
          >
            <WhatsappIcon className="w-3.5 h-3.5" /> WhatsApp
          </a>
          <span>•</span>
          <a
            href={`mailto:${profileData.email}`}
            className="text-[#8B8DFF] hover:underline font-medium inline-flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" /> Email
          </a>
        </div>
      </div>
    </div>
  );
}
