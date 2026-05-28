import { notFound, redirect } from "next/navigation";

type DynamicProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DynamicProjectPage({ params }: DynamicProjectPageProps) {
  const { slug } = await params;

  if (slug === "job-tracker-jd-analyzer") {
    redirect("/projects/job-tracker");
  }

  if (slug === "app" || slug === "simple-budget") {
    redirect("/projects/simple-budget-app");
  }

  notFound();
}
