import Image from "next/image";
import Link from "next/link";
import { type ProjectCase } from "@/content/projects";

type ProjectDetailProps = {
  project: ProjectCase;
  sibling: {
    href: string;
    label: string;
  };
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="rounded-xl border border-slate-200 bg-white/85 px-4 py-3 text-sm text-slate-700">
          {item}
        </li>
      ))}
    </ul>
  );
}

function TextSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <p className="text-base leading-7 text-slate-700">{body}</p>
    </section>
  );
}

export function ProjectDetail({ project, sibling }: ProjectDetailProps) {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <header className="grid gap-5 rounded-3xl border border-amber-300/80 bg-gradient-to-br from-white to-amber-50 p-6 lg:grid-cols-[1fr_260px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">项目案例</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{project.title}</h1>
          <p className="mt-3 text-lg font-semibold text-slate-800">{project.subtitle}</p>
          <p className="mt-3 text-base leading-7 text-slate-700">{project.oneLiner}</p>
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-white/85 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">状态</p>
          <p className="mt-2 text-lg font-bold text-slate-900">{project.status}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">技术关键词</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((item) => (
              <span key={item} className="rounded-full border border-sky-300 bg-sky-50 px-3 py-1 text-xs text-sky-800">
                {item}
              </span>
            ))}
          </div>
        </aside>
      </header>

      <TextSection title="项目概述" body={project.overview} />
      <TextSection title="问题背景" body={project.problem} />
      <TextSection title="解决方案" body={project.solution} />

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">目标用户</h2>
        <FeatureList items={project.targetUsers} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">核心功能</h2>
        <FeatureList items={project.coreFeatures} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">技术栈</h2>
        <FeatureList items={project.techStack} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">架构说明</h2>
        <FeatureList items={project.architecture} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">数据流</h2>
        <FeatureList items={project.dataFlow} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">AI 应用方式</h2>
        <FeatureList items={project.aiUsage} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">展示重点</h2>
        <FeatureList items={project.capabilities} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">页面截图</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90">
          <Image src={project.screenshot} alt={project.screenshotAlt} width={1200} height={675} className="h-auto w-full" />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white/90 p-5">
          <h3 className="text-lg font-bold text-slate-900">当前进展</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {project.currentStatus.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white/90 p-5">
          <h3 className="text-lg font-bold text-slate-900">后续迭代</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {project.nextIteration.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6">
        <Link href="/projects" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible-link">
          返回项目列表
        </Link>
        <Link
          href={sibling.href}
          className="rounded-lg border border-amber-300 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-50 focus-visible-link"
        >
          查看另一个项目：{sibling.label}
        </Link>
      </div>
    </div>
  );
}
