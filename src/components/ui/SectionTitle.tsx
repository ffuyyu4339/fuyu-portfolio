import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <header className={cn("space-y-3", className)}>
      {eyebrow ? <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-text-main md:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-base leading-7 text-text-muted">{description}</p> : null}
    </header>
  );
}
