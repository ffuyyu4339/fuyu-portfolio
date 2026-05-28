import { toolResponsibilities, workflowStages, workflowSummary } from "@/content/workflow";

export { workflowStages, workflowSummary, toolResponsibilities };

export const workflowSteps = workflowStages.map((stage) => ({
  title: stage.title,
  description: stage.detail,
  output: stage.id,
}));
