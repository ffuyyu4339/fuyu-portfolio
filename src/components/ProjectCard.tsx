import Link from "next/link";
import { type ProjectCase } from "@/content/projects";

type ProjectCardProps = {
  project: ProjectCase;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
        <span className="rounded-full border border-sky-300 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">{project.status}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{project.oneLiner}</p>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">展示重点</p>
        <p className="mt-2 text-sm text-slate-700">{project.capabilities.slice(0, 4).join(" · ")}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((item) => (
          <span key={item} className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs text-amber-900">
            {item}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-5 inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-sky-700 focus-visible-link"
      >
        查看项目详情
      </Link>
    </article>
  );
}
