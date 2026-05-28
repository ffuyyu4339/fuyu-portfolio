type ProjectOutcomeProps = {
  currentStatus: string[];
  nextIteration: string[];
};

export function ProjectOutcome({ currentStatus, nextIteration }: ProjectOutcomeProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-border-soft bg-surface-high/60 p-5">
        <h3 className="text-lg font-semibold text-text-main">Current Status</h3>
        <ul className="mt-3 space-y-2 text-sm text-text-muted">
          {currentStatus.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-border-soft bg-surface-high/60 p-5">
        <h3 className="text-lg font-semibold text-text-main">Next Iteration</h3>
        <ul className="mt-3 space-y-2 text-sm text-text-muted">
          {nextIteration.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
