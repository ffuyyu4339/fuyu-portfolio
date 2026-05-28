import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 px-5 py-10 text-sm text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.siteName}. Built as an AI engineering portfolio system.</p>
        <p>{profile.location} · AI App Dev · Data Analysis</p>
      </div>
    </footer>
  );
}
