import type { ReactNode } from "react";

type ProjectSectionProps = {
  title: string;
  children: ReactNode;
};

export function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-text-main">{title}</h2>
      {children}
    </section>
  );
}
