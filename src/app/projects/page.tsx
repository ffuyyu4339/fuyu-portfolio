import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "项目列表 | 付钰的个人作品集",
  description: "项目列表包含 Job Tracker + JD Analyzer 与个人简约记账本 APP。",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        label="项目"
        level="h1"
        title="项目列表"
        description="围绕真实实践展开，覆盖 AI 应用开发与 Android 移动端工程能力。"
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
