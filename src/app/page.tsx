import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TechStack } from "@/components/TechStack";
import { processSummary } from "@/data/process";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "付钰的个人作品集",
  description: "展示 AI 应用开发、数据分析、开源模型集成与工程化实践的个人作品集网站。",
};

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-20 px-4 py-10 sm:px-6 lg:px-8">
      <div className="page-reveal">
        <Hero />
      </div>

      <section id="projects" className="page-reveal space-y-6">
        <SectionTitle label="项目" title="项目展示" description="围绕真实项目经验，仅展示两个可验证的核心项目。" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="page-reveal space-y-6">
        <SectionTitle
          label="流程"
          title="AI 辅助开发流程"
          description="从需求到发布，强调可验收、可复盘、可迭代，而不是一次性生成。"
        />
        <div className="rounded-2xl border border-slate-200 bg-white/85 p-6">
          <div className="flex flex-wrap items-center gap-2">
            {processSummary.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-sky-300 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">{step}</span>
                {index < processSummary.length - 1 ? <span className="text-slate-400">→</span> : null}
              </div>
            ))}
          </div>
          <Link
            href="/process"
            className="mt-5 inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-sky-400 hover:text-sky-700 focus-visible-link"
          >
            查看完整流程
          </Link>
        </div>
      </section>

      <div className="page-reveal">
        <TechStack />
      </div>

      <section className="page-reveal space-y-6" id="about">
        <SectionTitle label="关于" title="关于我" description="软件工程背景，持续用真实项目积累 AI 应用开发与工程化能力。" />
        <div className="rounded-2xl border border-slate-200 bg-white/85 p-6">
          <p className="text-base leading-7 text-slate-700">{profile.positioning}</p>
          <p className="mt-3 text-base leading-7 text-slate-700">{profile.summary}</p>
          <p className="mt-3 text-sm text-slate-500">当前地点：{profile.location}</p>
        </div>
      </section>

      <section className="page-reveal space-y-6" id="contact">
        <SectionTitle label="联系" title="联系方式" description="欢迎交流 AI 应用开发、数据分析和工程化相关机会。" />
        <div className="rounded-2xl border border-slate-200 bg-white/85 p-6">
          <p className="text-sm text-slate-700">邮箱与 GitHub 可在联系页补充后统一展示。</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg border border-amber-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-amber-50 focus-visible-link">
              打开联系页
            </Link>
            <Link href="/resume" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible-link">
              查看简历页
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
