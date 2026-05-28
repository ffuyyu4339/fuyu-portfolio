type ProjectArchitectureProps = {
  items: string[];
};

export function ProjectArchitecture({ items }: ProjectArchitectureProps) {
  return (
    <ul className="space-y-3">
      {items.map((line) => (
        <li key={line} className="rounded-lg border border-border-soft bg-surface-high/70 px-4 py-3 text-sm leading-6 text-text-muted">
          {line}
        </li>
      ))}
    </ul>
  );
}
