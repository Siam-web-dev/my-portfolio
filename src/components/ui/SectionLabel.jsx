import { cn } from "@/lib/utils";

export default function SectionLabel({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase",
        "border border-[#8B8DFF]/25 bg-[#8B8DFF]/10 text-[#8B8DFF]",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#69E4F3] animate-pulse" />
      {children}
    </span>
  );
}
