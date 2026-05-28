import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProjectGrid() {
  return (
    <section id="projects" className="space-y-8">
      <SectionTitle
        eyebrow="Featured Projects"
        title="核心项目"
        description="仅展示 Job Tracker + JD Analyzer 与 个人简约记账本 APP 两个核心项目。"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} glowOnHover className="space-y-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-text-main">{project.title}</h3>
              <Badge tone="success">{project.status}</Badge>
            </div>
            <p className="text-sm leading-6 text-text-muted">{project.oneLiner}</p>
            <div>
              <p className="mb-2 text-xs font-mono uppercase tracking-[0.16em] text-text-subtle">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 6).map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-mono uppercase tracking-[0.16em] text-text-subtle">展示能力</p>
              <p className="text-sm text-text-muted">{project.capabilities.slice(0, 4).join(" / ")}</p>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="focus-visible-link inline-flex text-sm font-medium text-primary transition hover:text-primary-strong"
            >
              查看详情 →
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
