import { workflowSummary } from "@/data/workflow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WorkflowSection() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Workflow"
        title="AI Engineering Workflow"
        description="Research → PRD → Design → Codex Implementation → Acceptance → Deploy → Iterate"
      />
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border-soft bg-surface-low/85 p-5">
        {workflowSummary.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-full border border-border-muted px-3 py-1 font-mono text-xs text-text-muted">{step}</span>
            {index < workflowSummary.length - 1 ? <span className="text-primary/60">→</span> : null}
          </div>
        ))}
      </div>
      <ButtonLink href="/ai-workflow" variant="secondary">
        查看完整流程
      </ButtonLink>
    </section>
  );
}
