import Link from "next/link";
import { profile } from "@/data/profile";

const navItems = [
  { label: "首页", href: "/" },
  { label: "项目", href: "/projects" },
  { label: "开发流程", href: "/process" },
  { label: "简历", href: "/resume" },
  { label: "联系", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-amber-300/70 bg-amber-50/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-base font-bold tracking-tight text-slate-900">
          {profile.name} · {profile.siteName}
        </Link>
        <nav aria-label="主导航" className="flex flex-wrap items-center gap-2 md:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-amber-300 hover:bg-white hover:text-slate-900 focus-visible-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
