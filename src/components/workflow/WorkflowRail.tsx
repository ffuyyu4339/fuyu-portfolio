import { workflowSteps } from "@/data/workflow";

export function WorkflowRail() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {workflowSteps.map((step, index) => (
        <div key={step.title} className="card-shell relative rounded-3xl p-5">
          <span className="text-xs font-semibold text-sky-300">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 font-semibold text-slate-100">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p>
          <p className="mt-4 text-xs text-emerald-300">Output: {step.output}</p>
        </div>
      ))}
    </div>
  );
}
