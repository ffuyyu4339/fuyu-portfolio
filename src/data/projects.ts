import { getProjectBySlug, projects } from "@/content/projects";

export { projects, getProjectBySlug };

export function getFeaturedProjects() {
  return projects;
}
