import { profile } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CareerDirectionSection() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Career Direction"
        title="求职定位"
        description="软件工程与 Android 背景出发，面向上海的 AI 应用开发、数据分析与工程化岗位。"
      />
      <Card>
        <p className="text-base leading-7 text-text-muted">{profile.location}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {profile.directions.map((direction) => (
            <li key={direction} className="rounded-lg border border-border-soft bg-surface-high/70 px-4 py-3 text-sm text-text-muted">
              {direction}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
