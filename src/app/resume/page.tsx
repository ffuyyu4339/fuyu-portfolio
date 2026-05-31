import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "简历概览 | 付钰的个人作品集",
  description: "付钰的方向、技术栈与项目简历概览。",
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        label="简历"
        level="h1"
        title="简历概览"
        description="聚焦 AI 应用开发、数据分析与工程化能力的项目型简历视图。"
      />

      <section className="rounded-2xl border border-slate-200 bg-white/90 p-6">
        <h2 className="text-2xl font-bold text-slate-900">个人定位</h2>
        <p className="mt-3 text-base leading-7 text-slate-700">{profile.name}</p>
        <p className="mt-1 text-base leading-7 text-slate-700">{profile.headline}</p>
        <p className="mt-3 text-base leading-7 text-slate-700">{profile.positioning}</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white/90 p-6">
        <h2 className="text-2xl font-bold text-slate-900">目标方向</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.directions.map((item) => (
            <li key={item} className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white/90 p-6">
        <h2 className="text-2xl font-bold text-slate-900">项目入口</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Job Tracker + JD Analyzer：/projects/job-tracker</li>
          <li>个人简约记账本 APP：/projects/budget-app</li>
          <li>AI 辅助开发流程：/process</li>
        </ul>
      </section>
    </div>
  );
}
