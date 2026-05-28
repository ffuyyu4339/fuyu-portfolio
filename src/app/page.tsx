import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CareerDirectionSection } from "@/components/sections/CareerDirectionSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";

export const metadata: Metadata = {
  title: "Fu Yu | AI Engineering Portfolio",
  description:
    "Software engineering portfolio focused on AI application development, Android background, data analytics, and AI-assisted engineering workflow.",
};

export default function HomePage() {
  return (
    <PageShell className="space-y-20">
      <HeroSection />
      <section className="space-y-20">
        <ProjectGrid />
        <WorkflowSection />
        <SkillsSection />
        <CareerDirectionSection />
        <ContactSection />
      </section>
    </PageShell>
  );
}
