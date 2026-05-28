import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card-shell group block rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/60">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">{project.status}</p>
          <h3 className="mt-3 text-xl font-semibold text-slate-100">{project.title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-sky-300" />
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-400">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-700/80 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
