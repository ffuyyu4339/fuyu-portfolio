type ProjectFeatureListProps = {
  items: string[];
};

export function ProjectFeatureList({ items }: ProjectFeatureListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((feature) => (
        <li key={feature} className="rounded-lg border border-border-soft bg-surface-high/70 px-4 py-3 text-sm text-text-muted">
          {feature}
        </li>
      ))}
    </ul>
  );
}
