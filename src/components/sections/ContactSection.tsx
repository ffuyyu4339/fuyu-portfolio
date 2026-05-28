import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const safeHref = (value: string) => (value.length > 0 ? value : "#");

export function ContactSection() {
  return (
    <section id="contact" className="space-y-8">
      <SectionTitle eyebrow="Contact" title="联系与资料" description="欢迎交流 AI 应用开发、数据分析和工程化交付相关机会。" />
      <Card className="space-y-4">
        <p className="text-sm text-text-muted">Fu Yu / 付钰 · Software Engineering Portfolio</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={safeHref(profile.links.github)} variant="secondary">
            GitHub
          </ButtonLink>
          <ButtonLink href={safeHref(profile.links.email)} variant="secondary">
            Email
          </ButtonLink>
          <ButtonLink href={safeHref(profile.links.resume)} variant="secondary">
            Resume
          </ButtonLink>
        </div>
      </Card>
    </section>
  );
}
