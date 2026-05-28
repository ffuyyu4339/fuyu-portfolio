import Link from "next/link";
import { siteNav } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold tracking-tight text-slate-100">
          FuYu<span className="text-sky-300">.dev</span>
        </Link>
        <nav className="order-3 flex w-full gap-4 overflow-x-auto pb-1 text-sm text-slate-400 md:order-none md:w-auto md:items-center md:gap-5 md:overflow-visible md:pb-0">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 transition hover:text-sky-200">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-300 hover:text-sky-200"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
