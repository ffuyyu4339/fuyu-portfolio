import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline } from "@/components/ui/Timeline";
import { toolResponsibilities, workflowStages } from "@/data/workflow";

export const metadata: Metadata = {
  title: "AI Engineering Workflow | Fu Yu",
  description: "AI-assisted Software Engineering Workflow for requirement-to-deployment governance.",
};

const reusableTemplates = [
  "PRD 模板：目标、范围、验收标准、非目标",
  "Task Card 模板：输入、约束、执行步骤、完成定义",
  "Acceptance Receipt 模板：页面、内容、工程、部署四类检查",
  "Operation Log 模板：操作、修改文件、验证、问题、下一步",
];

export default function AIWorkflowPage() {
  return (
    <PageShell className="space-y-14">
      <SectionTitle
        eyebrow="AI-assisted Software Engineering"
        title="AI-assisted Software Engineering Workflow"
        description="我使用 AI 不是简单让模型写代码，而是把 AI 纳入软件工程流程：需求分析 → PRD → 设计稿 → Codex 实现 → 验收 → 日志 → 部署 → 用户反馈 → 迭代。"
      />

      <Card>
        <h2 className="text-2xl font-semibold text-text-main">为什么不是简单 vibe coding</h2>
        <p className="mt-3 text-sm leading-7 text-text-muted">
          关键不是一次性生成代码，而是治理上下文、控制边界、定义可验收结果。这里强调 AI-assisted software engineering、Agentic Workflow、Harness Engineering 与 Context Governance。
        </p>
      </Card>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-text-main">我的 AI 开发治理流程</h2>
        <Timeline
          items={workflowStages.map((step) => ({
            id: step.id,
            title: step.title,
            description: step.detail,
          }))}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4">
          <h2 className="text-2xl font-semibold text-text-main">工具分工</h2>
          <ul className="space-y-3 text-sm text-text-muted">
            {toolResponsibilities.map((row) => (
              <li key={row.tool} className="rounded-lg border border-border-soft bg-surface-high/70 px-4 py-3">
                <span className="font-semibold text-text-main">{row.tool}:</span> {row.responsibility}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-4">
          <h2 className="text-2xl font-semibold text-text-main">文档体系</h2>
          <ul className="space-y-2 text-sm text-text-muted">
            <li>PRD / Task Card / Acceptance Criteria</li>
            <li>Operation Log / Deployment Notes / Iteration Backlog</li>
            <li>Design System / Route Map / Content Source of Truth</li>
          </ul>
          <h3 className="pt-2 text-lg font-semibold text-text-main">可复用模板</h3>
          <ul className="space-y-2 text-sm text-text-muted">
            {reusableTemplates.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-3">
          <h2 className="text-2xl font-semibold text-text-main">质量控制</h2>
          <p className="text-sm leading-7 text-text-muted">
            使用 Acceptance Criteria、Operation Log、Task Card 和 Deployment Feedback Loop 管理质量，避免只凭主观“看起来可用”判断完成。
          </p>
        </Card>
        <Card className="space-y-3">
          <h2 className="text-2xl font-semibold text-text-main">迭代闭环</h2>
          <p className="text-sm leading-7 text-text-muted">
            线上反馈进入下一轮问题定义，继续 PRD、设计、实现、验收和发布，形成持续演化的 Agentic Workflow。
          </p>
        </Card>
      </section>
    </PageShell>
  );
}
