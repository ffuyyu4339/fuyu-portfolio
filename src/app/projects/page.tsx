import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Fu Yu",
  description: "Core project case studies for Fu Yu portfolio.",
};

export default function ProjectsPage() {
  return (
    <PageShell className="space-y-6">
      <h1 className="text-3xl font-semibold text-text-main">Projects</h1>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="focus-visible-link text-text-muted hover:text-primary">
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
