export type ProjectStatus = "MVP" | "In Progress" | "Documented";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  featured: boolean;
  tags: string[];
  overview: string;
  background: string;
  goals: string[];
  mvpScope: string[];
  stack: string[];
  roles: string[];
  features: string[];
  aiWorkflow: string[];
  challenges: Array<{ problem: string; solution: string }>;
  testing: string[];
  reflection: string;
  nextSteps: string[];
}
