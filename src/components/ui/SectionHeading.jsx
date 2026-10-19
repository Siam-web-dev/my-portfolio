import { cn } from "@/lib/utils";
import SectionLabel from "./SectionLabel";

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      {label && (
        <div className={cn("mb-3", isCenter && "flex justify-center")}>
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3F5FF]">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#9BA3B8] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
