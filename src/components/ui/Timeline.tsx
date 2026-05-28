import { cn } from "@/lib/utils";

type TimelineItem = {
  id: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-6 border-l border-border-muted pl-6", className)}>
      {items.map((item) => (
        <li key={`${item.id}-${item.title}`} className="group relative">
          <span className="absolute -left-[29px] mt-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-primary/40 bg-surface-low">
            <span className="h-2 w-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
          </span>
          <p className="font-mono text-xs tracking-wide text-primary">{item.id}</p>
          <h3 className="mt-1 text-lg font-semibold text-text-main">{item.title}</h3>
          <p className="mt-1 text-sm leading-6 text-text-muted">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
