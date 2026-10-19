import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "right",
  target,
  rel,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B8DFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A10] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#8B8DFF] to-[#69E4F3] text-[#080A10] font-semibold hover:shadow-[0_0_24px_rgba(139,141,255,0.35)] hover:brightness-110",
    secondary:
      "bg-[#111521] text-[#F3F5FF] border border-white/10 hover:border-[#8B8DFF]/40 hover:bg-[#161C2C] hover:text-white shadow-sm",
    outline:
      "bg-transparent text-[#F3F5FF] border border-white/15 hover:border-[#8B8DFF] hover:bg-[#8B8DFF]/10",
    ghost:
      "bg-transparent text-[#9BA3B8] hover:text-[#F3F5FF] hover:bg-white/5",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
      )}
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={combinedClasses} {...props}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
