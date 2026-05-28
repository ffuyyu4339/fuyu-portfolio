import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "primary" | "muted" | "success";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  primary: "border border-primary/35 bg-primary/10 text-primary",
  muted: "border border-border-muted bg-surface-high text-text-muted",
  success: "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
};

export function Badge({ children, className, tone = "muted" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-xs tracking-wide",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
