import { notFound, redirect } from "next/navigation";

type DynamicProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DynamicProjectPage({ params }: DynamicProjectPageProps) {
  const { slug } = await params;

  if (slug === "job-tracker" || slug === "job-tracker-jd-analyzer") {
    redirect("/projects/job-tracker");
  }

  if (slug === "budget-app" || slug === "simple-budget" || slug === "simple-budget-app" || slug === "app") {
    redirect("/projects/budget-app");
  }

  notFound();
}
