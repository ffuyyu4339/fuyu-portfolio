import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { Timeline } from "@/components/Timeline";
import { processTools } from "@/data/process";

export const metadata: Metadata = {
  title: "AI 辅助开发流程 | 付钰的个人作品集",
  description: "从需求到部署的 AI 辅助工程执行流程。",
};

export default function ProcessPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        label="流程"
        level="h1"
        title="AI 辅助开发流程"
        description="目标是把设计稿与需求快速转化为可运行、可测试、可部署的真实网站。"
      />

      <Timeline />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">工具分工</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {processTools.map((item) => (
            <article key={item.tool} className="rounded-2xl border border-slate-200 bg-white/90 p-5">
              <h3 className="text-lg font-bold text-slate-900">{item.tool}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.responsibility}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
