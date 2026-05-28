import Link from "next/link";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "AI Workflow", href: "/ai-workflow" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight text-text-main transition hover:text-primary">
          {profile.name} / {profile.chineseName}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-text-muted transition hover:text-primary focus-visible-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
