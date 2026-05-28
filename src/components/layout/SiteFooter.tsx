import Link from "next/link";

const links = [
  { label: "GitHub", href: "#" },
  { label: "Email", href: "#" },
  { label: "Resume", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-surface-low/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-text-main">Fu Yu / 付钰</p>
          <p className="mt-1 text-sm text-text-muted">Software Engineering Portfolio</p>
        </div>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="focus-visible-link text-sm text-text-muted transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
