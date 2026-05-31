import Link from "next/link";
import { profile } from "@/data/profile";

const toSafeHref = (value: string, type: "url" | "email") => {
  if (!value) return "#";
  if (type === "email") return `mailto:${value}`;
  return value;
};

export function Footer() {
  return (
    <footer className="border-t border-amber-200 bg-amber-50/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 text-sm sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">{profile.name} · {profile.englishName}</p>
          <p className="mt-1 text-slate-600">软件工程背景 · AI 应用开发 · 数据分析</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact" className="rounded-md border border-amber-300 px-3 py-1.5 text-slate-700 hover:bg-white focus-visible-link">
            联系页
          </Link>
          <Link
            href={toSafeHref(profile.links.github, "url")}
            className="rounded-md border border-amber-300 px-3 py-1.5 text-slate-700 hover:bg-white focus-visible-link"
          >
            GitHub
          </Link>
          <Link
            href={toSafeHref(profile.links.email, "email")}
            className="rounded-md border border-amber-300 px-3 py-1.5 text-slate-700 hover:bg-white focus-visible-link"
          >
            邮箱
          </Link>
        </div>
      </div>
    </footer>
  );
}
