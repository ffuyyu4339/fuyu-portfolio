import { cn } from "@/lib/utils";

type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  level?: "h1" | "h2";
};

export function SectionTitle({ label, title, description, className, level = "h2" }: SectionTitleProps) {
  const Heading = level;

  return (
    <header className={cn("space-y-3", className)}>
      {label ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">{label}</p> : null}
      <Heading className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</Heading>
      {description ? <p className="max-w-3xl text-base leading-7 text-slate-700">{description}</p> : null}
    </header>
  );
}
