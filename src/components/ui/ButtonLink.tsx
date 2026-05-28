import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border border-primary/40 bg-primary/15 text-primary hover:bg-primary hover:text-on-primary focus-visible:ring-primary",
  secondary:
    "border border-border-muted bg-surface-high text-text-main hover:border-primary/45 hover:text-primary focus-visible:ring-primary",
  ghost: "border border-transparent text-text-muted hover:text-primary focus-visible:ring-primary",
};

export function ButtonLink({ href, children, className, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
