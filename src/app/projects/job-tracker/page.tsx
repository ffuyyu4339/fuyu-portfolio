import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Job Tracker + JD Analyzer | 付钰的个人作品集",
  description: "求职岗位管理与 JD 分析项目案例。",
};

const project = getProjectBySlug("job-tracker");

export default function JobTrackerPage() {
  if (!project) return null;

  return <ProjectDetail project={project} sibling={{ href: "/projects/budget-app", label: "个人简约记账本 APP" }} />;
}
