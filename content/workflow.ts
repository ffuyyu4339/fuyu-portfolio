export type WorkflowStage = {
  id: string;
  title: string;
  detail: string;
};

export const workflowStages: WorkflowStage[] = [
  { id: "01", title: "需求与目标定义", detail: "明确目标用户、使用场景、上线范围和验收口径。" },
  { id: "02", title: "PRD 与任务拆分", detail: "形成 PRD、约束清单、任务卡和页面清单。" },
  { id: "03", title: "视觉草案与结构稿", detail: "用 Open Design 产出视觉方向、网格、卡片与信息层级。" },
  { id: "04", title: "工程化实现", detail: "在 Next.js + TypeScript 中实现页面、组件和数据层。" },
  { id: "05", title: "浏览器实测", detail: "逐页检查路由、样式、交互、控制台错误与移动端表现。" },
  { id: "06", title: "构建与质量检查", detail: "执行 lint 与 build，修复类型、依赖与路径问题。" },
  { id: "07", title: "发布与复盘", detail: "完成部署后记录验收结果、已知问题与后续迭代。" },
];

export const workflowSummary = ["需求", "PRD", "视觉", "实现", "验证", "构建", "部署"];

export const toolResponsibilities = [
  {
    tool: "Open Design",
    responsibility: "提供视觉方向、版式、配色与页面草图。",
  },
  {
    tool: "Codex",
    responsibility: "负责代码实现、调试、测试、文档同步与发布准备。",
  },
  {
    tool: "GitHub",
    responsibility: "版本管理、评审协作与变更追踪。",
  },
  {
    tool: "Vercel",
    responsibility: "托管 Next.js 应用并提供线上访问链接。",
  },
];
