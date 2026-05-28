import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectArchitecture } from "@/components/projects/ProjectArchitecture";
import { ProjectFeatureList } from "@/components/projects/ProjectFeatureList";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { ProjectOutcome } from "@/components/projects/ProjectOutcome";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Job Tracker + JD Analyzer | Fu Yu",
  description: "Case study of Job Tracker + JD Analyzer focused on job process analytics and skill-gap insight.",
};

const project = getProjectBySlug("job-tracker");

export default function JobTrackerPage() {
  if (!project) return null;

  return (
    <PageShell className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <ProjectHero project={project} />
        <ProjectMeta project={project} />
      </div>

      <ProjectSection title="Project Overview">
        <p className="text-sm leading-7 text-text-muted">{project.overview}</p>
      </ProjectSection>

      <ProjectSection title="Problem / Motivation">
        <p className="text-sm leading-7 text-text-muted">{project.problem}</p>
      </ProjectSection>

      <ProjectSection title="Target Users">
        <ProjectFeatureList items={project.targetUsers} />
      </ProjectSection>

      <ProjectSection title="Core Features">
        <ProjectFeatureList items={project.coreFeatures} />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <ProjectFeatureList items={project.techStack} />
      </ProjectSection>

      <ProjectSection title="Architecture">
        <ProjectArchitecture items={project.architecture} />
      </ProjectSection>

      <ProjectSection title="Data Model / Flow">
        <ProjectArchitecture items={project.dataFlow} />
      </ProjectSection>

      <ProjectSection title="AI Usage / Engineering Process">
        <ProjectArchitecture items={project.aiUsage} />
      </ProjectSection>

      <ProjectSection title="Screenshots or Placeholder">
        <div className="overflow-hidden rounded-2xl border border-border-soft bg-surface-low">
          <Image src={project.screenshot} alt={project.screenshotAlt} width={1200} height={675} className="h-auto w-full" />
        </div>
      </ProjectSection>

      <ProjectSection title="Current Status">
        <ProjectOutcome currentStatus={project.currentStatus} nextIteration={project.nextIteration} />
      </ProjectSection>

      <ProjectSection title="Solution">
        <p className="text-sm leading-7 text-text-muted">{project.solution}</p>
      </ProjectSection>

      <ProjectSection title="展示能力">
        <ProjectFeatureList items={project.capabilities} />
      </ProjectSection>

      <ProjectSection title="Next Iteration">
        <ProjectFeatureList items={project.nextIteration} />
      </ProjectSection>

      <ProjectNavigation current="job-tracker" />
    </PageShell>
  );
}
