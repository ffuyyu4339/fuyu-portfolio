import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="grid gap-8 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="animate-fade-in-up space-y-6">
        <Badge tone="primary">AI Engineering Portfolio</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-text-main md:text-6xl">
          {profile.name} / {profile.chineseName}
        </h1>
        <p className="text-xl text-primary md:text-2xl">Software Engineering → AI Application Development</p>
        <p className="text-base leading-7 text-text-muted md:text-lg">{profile.summary}</p>
        <p className="text-sm text-text-subtle">Android Background / Data Analytics / AI-assisted Engineering</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/#projects">查看项目</ButtonLink>
          <ButtonLink href="/ai-workflow" variant="secondary">
            查看 AI 开发流程
          </ButtonLink>
          <ButtonLink href="#" variant="ghost">
            GitHub
          </ButtonLink>
          <ButtonLink href="/#contact" variant="ghost">
            联系我
          </ButtonLink>
        </div>
      </div>
      <Card glowOnHover className="animate-fade-in-up delay-100 space-y-4">
        <h2 className="text-lg font-semibold text-text-main">Current Direction</h2>
        <ul className="space-y-3">
          {profile.directions.map((direction) => (
            <li key={direction} className="rounded-lg border border-border-soft bg-surface-high/80 px-4 py-3 text-sm text-text-muted">
              {direction}
            </li>
          ))}
        </ul>
        <div className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-text-muted">
          <p>Target City: Shanghai</p>
          <p className="mt-1">Status: Open to opportunities</p>
        </div>
      </Card>
    </section>
  );
}
