import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "联系我 | 付钰的个人作品集",
  description: "付钰的联系信息与交流方向。",
};

function formatLink(value: string, type: "url" | "email") {
  if (!value) return "#";
  if (type === "email") return `mailto:${value}`;
  return value;
}

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle label="联系" level="h1" title="联系方式" description="欢迎交流 AI 应用开发、数据分析与工程化相关机会。" />

      <section className="rounded-2xl border border-slate-200 bg-white/90 p-6">
        <h2 className="text-2xl font-bold text-slate-900">联系信息</h2>
        <p className="mt-3 text-sm text-slate-700">姓名：{profile.name}</p>
        <p className="mt-1 text-sm text-slate-700">城市：{profile.contact.city}</p>
        <p className="mt-1 text-sm text-slate-700">邮箱：{profile.contact.email || "待补充"}</p>
        <p className="mt-1 text-sm text-slate-700">GitHub：{profile.contact.github || "待补充"}</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white/90 p-6">
        <h2 className="text-2xl font-bold text-slate-900">快速入口</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={formatLink(profile.links.github, "url")}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible-link"
          >
            GitHub
          </Link>
          <Link
            href={formatLink(profile.links.email, "email")}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible-link"
          >
            邮箱
          </Link>
          <Link href="/resume" className="rounded-lg border border-amber-300 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-50 focus-visible-link">
            查看简历概览
          </Link>
        </div>
      </section>
    </div>
  );
}
