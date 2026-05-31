import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="grid gap-8 rounded-3xl border border-amber-300/80 bg-gradient-to-br from-amber-100 via-orange-50 to-sky-100 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.15)] md:p-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-5">
        <p className="inline-flex rounded-full border border-amber-400 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
          付钰的个人作品集
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">{profile.name}</h1>
        <p className="text-xl font-semibold text-amber-900 md:text-2xl">{profile.headline}</p>
        <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg">{profile.positioning}</p>
        <p className="max-w-2xl text-base leading-7 text-slate-700">{profile.summary}</p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-sky-300 bg-white/70 p-5">
        <div className="pointer-events-none absolute -right-10 -top-8 h-32 w-32 rounded-full bg-sky-300/40 blur-2xl" />
        <h2 className="text-lg font-bold text-slate-900">目标方向</h2>
        <ul className="mt-4 space-y-2">
          {profile.directions.map((item) => (
            <li key={item} className="rounded-xl border border-amber-200 bg-amber-50/80 px-3 py-2 text-sm text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
