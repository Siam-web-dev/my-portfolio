import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}) {
  const variants = {
    default:
      "bg-white/[0.05] text-[#9BA3B8] border border-white/10 hover:border-white/20",
    primary:
      "bg-[#8B8DFF]/10 text-[#8B8DFF] border border-[#8B8DFF]/25",
    cyan:
      "bg-[#69E4F3]/10 text-[#69E4F3] border border-[#69E4F3]/25",
    success:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    warning:
      "bg-amber-500/10 text-amber-300 border border-amber-500/20",
  };

  const sizes = {
    xs: "text-[11px] px-2 py-0.5 rounded-md",
    sm: "text-xs px-2.5 py-1 rounded-lg",
    md: "text-sm px-3 py-1.5 rounded-lg",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium transition-colors",
        variants[variant] || variants.default,
        sizes[size] || sizes.sm,
        className
      )}
    >
      {children}
    </span>
  );
}
