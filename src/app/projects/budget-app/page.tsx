import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "个人简约记账本 APP | 付钰的个人作品集",
  description: "轻量级个人收支记录应用项目案例。",
};

const project = getProjectBySlug("budget-app");

export default function BudgetAppPage() {
  if (!project) return null;

  return <ProjectDetail project={project} sibling={{ href: "/projects/job-tracker", label: "Job Tracker + JD Analyzer" }} />;
}
