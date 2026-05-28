import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  intro?: string;
  children: ReactNode;
}

export function Section({ title, intro, children }: SectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
        {intro ? <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
