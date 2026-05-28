import { skills } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SkillsSection() {
  return (
    <section className="space-y-8">
      <SectionTitle eyebrow="Skill Matrix" title="技能矩阵" description="围绕 AI 应用开发、数据分析与工程化交付的能力结构。" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => (
          <Card key={group.category} className="space-y-4">
            <h3 className="text-lg font-semibold text-text-main">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-border-muted bg-surface-high px-3 py-1 text-xs text-text-muted">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
