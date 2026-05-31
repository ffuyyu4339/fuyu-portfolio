import { skills } from "@/data/skills";
import { SectionTitle } from "@/components/SectionTitle";

export function TechStack() {
  return (
    <section className="space-y-6">
      <SectionTitle label="技术栈" title="技术栈" description="围绕前端、后端、AI、数据与工程化的实践能力。" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => (
          <article key={group.category} className="rounded-2xl border border-slate-200 bg-white/85 p-5">
            <h3 className="text-lg font-bold text-slate-900">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
