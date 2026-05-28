export type WorkflowStage = {
  id: string;
  title: string;
  detail: string;
};

export const workflowStages: WorkflowStage[] = [
  { id: "01", title: "Market / Problem Research", detail: "定位问题、目标用户、竞品与约束边界。" },
  { id: "02", title: "PRD-lite", detail: "快速整理目标、页面范围、MVP 核心价值。" },
  { id: "03", title: "Formal PRD", detail: "固化需求、验收标准与任务拆分依据。" },
  { id: "04", title: "Design Prompt for Stitch / Gemini", detail: "通过设计提示词生成首版 UI/UX 与布局方案。" },
  { id: "05", title: "Codex Implementation Task", detail: "按任务卡和约束进行工程化实现与重构。" },
  { id: "06", title: "Acceptance Criteria", detail: "基于可勾选清单、命令结果与页面行为验收。" },
  { id: "07", title: "Operation Log", detail: "记录过程、问题、修复、决策依据与风险。" },
  { id: "08", title: "Deployment", detail: "打包、发布、验证线上路径与访问稳定性。" },
  { id: "09", title: "User Feedback", detail: "收集真实反馈，发现体验与内容问题。" },
  { id: "10", title: "Iteration", detail: "进入下轮需求优化与工程迭代。" },
];

export const workflowSummary = [
  "Research",
  "PRD",
  "Design",
  "Codex Implementation",
  "Acceptance",
  "Deploy",
  "Iterate",
];

export const toolResponsibilities = [
  {
    tool: "ChatGPT",
    responsibility: "产品规划、架构设计、PRD、Codex 指令、验收标准",
  },
  {
    tool: "Stitch / Gemini",
    responsibility: "UI/UX 初稿、视觉系统、页面布局",
  },
  {
    tool: "Codex",
    responsibility: "代码实现、重构、测试、文档同步、部署准备",
  },
  {
    tool: "GitHub",
    responsibility: "版本管理、变更追踪、代码托管",
  },
  {
    tool: "Vercel",
    responsibility: "前端部署与公开访问",
  },
  {
    tool: "Obsidian / Markdown",
    responsibility: "长期知识库、流程沉淀、项目复盘",
  },
];
