import { Badge } from "@/components/ui/Badge";
import { type ProjectCase } from "@/content/projects";

type ProjectHeroProps = {
  project: ProjectCase;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="space-y-4">
      <Badge tone="primary">CASE STUDY</Badge>
      <h1 className="text-4xl font-bold tracking-tight text-text-main md:text-5xl">{project.title}</h1>
      <p className="text-lg text-primary">{project.subtitle}</p>
      <p className="max-w-4xl text-base leading-7 text-text-muted">{project.oneLiner}</p>
    </header>
  );
}
