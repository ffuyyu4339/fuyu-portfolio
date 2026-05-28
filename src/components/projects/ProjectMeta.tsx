import { type ProjectCase } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ProjectMetaProps = {
  project: ProjectCase;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <Card className="space-y-4">
      <h2 className="text-sm font-mono uppercase tracking-[0.16em] text-text-subtle">Project Meta</h2>
      <div className="space-y-2 text-sm text-text-muted">
        <p>
          <span className="text-text-subtle">Status:</span> {project.status}
        </p>
        <p>
          <span className="text-text-subtle">Type:</span> Portfolio Case Study
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </Card>
  );
}
