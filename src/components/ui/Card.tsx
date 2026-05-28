import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  glowOnHover?: boolean;
};

export function Card({ className, glowOnHover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-muted/70 bg-surface-card/90 p-6 shadow-[0_18px_40px_rgba(2,6,23,0.45)]",
        "backdrop-blur-sm transition-transform duration-300",
        glowOnHover &&
          "hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_22px_45px_rgba(56,189,248,0.18)]",
        className,
      )}
      {...props}
    />
  );
}
