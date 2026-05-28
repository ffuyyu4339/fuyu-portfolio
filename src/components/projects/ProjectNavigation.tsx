import Link from "next/link";

type ProjectNavigationProps = {
  current: "job-tracker" | "simple-budget-app";
};

export function ProjectNavigation({ current }: ProjectNavigationProps) {
  const otherPath = current === "job-tracker" ? "/projects/simple-budget-app" : "/projects/job-tracker";
  const otherLabel = current === "job-tracker" ? "个人简约记账本 APP" : "Job Tracker + JD Analyzer";

  return (
    <div className="flex flex-wrap items-center gap-4 border-t border-border-soft pt-8">
      <Link href="/#projects" className="focus-visible-link text-sm font-medium text-primary">
        ← Back to Projects
      </Link>
      <Link href={otherPath} className="focus-visible-link text-sm text-text-muted transition hover:text-primary">
        查看另一个项目：{otherLabel}
      </Link>
    </div>
  );
}
