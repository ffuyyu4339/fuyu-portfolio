import { processStages } from "@/data/process";

export function Timeline() {
  return (
    <ol className="space-y-4">
      {processStages.map((stage) => (
        <li key={stage.id} className="rounded-2xl border border-slate-200 bg-white/90 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">阶段 {stage.id}</p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">{stage.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">{stage.detail}</p>
        </li>
      ))}
    </ol>
  );
}
