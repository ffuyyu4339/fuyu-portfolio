export type ProjectCase = {
  slug: "job-tracker" | "budget-app";
  title: string;
  subtitle: string;
  oneLiner: string;
  status: string;
  techStack: string[];
  capabilities: string[];
  overview: string;
  problem: string;
  solution: string;
  targetUsers: string[];
  coreFeatures: string[];
  architecture: string[];
  dataFlow: string[];
  aiUsage: string[];
  screenshot: string;
  screenshotAlt: string;
  currentStatus: string[];
  nextIteration: string[];
};

export const projects: ProjectCase[] = [
  {
    slug: "job-tracker",
    title: "Job Tracker + JD Analyzer",
    subtitle: "面向求职过程的岗位管理与 JD 分析工具",
    oneLiner:
      "帮助用户记录岗位、拆解岗位要求、分析技能匹配度，并辅助制定学习与投递策略。",
    status: "持续迭代",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL / MySQL",
      "OpenAI-compatible API",
      "REST API",
      "数据分析",
    ],
    capabilities: [
      "岗位信息管理",
      "JD 文本分析",
      "技能关键词提取",
      "岗位状态追踪",
      "求职数据统计",
      "AI 辅助分析",
      "表格化管理",
      "项目工程化文档",
    ],
    overview:
      "项目围绕真实求职流程构建，把分散的岗位信息和 JD 文本变成可管理、可分析、可复盘的结构化数据。",
    problem: "岗位信息散落在多个平台，JD 难以横向比较，技能缺口和投递策略不清晰。",
    solution:
      "通过岗位管理、JD 拆解和技能关键词分析，建立从信息收集、对齐岗位、制定学习计划到投递复盘的闭环。",
    targetUsers: ["校招/社招求职者", "需要同时跟进多岗位的候选人", "希望系统化提升匹配度的学习者"],
    coreFeatures: [
      "岗位卡片化管理",
      "JD 文本拆解与结构化",
      "关键词提取与标签归类",
      "岗位进度看板",
      "技能差距分析",
      "投递与复盘记录",
    ],
    architecture: [
      "前端：Next.js + TypeScript + Tailwind CSS 构建管理与分析界面",
      "后端：Python + FastAPI 提供 JD 分析与结构化接口",
      "数据：PostgreSQL / MySQL 管理岗位、标签、进度和统计结果",
      "AI：OpenAI-compatible API 负责关键词抽取、总结与建议生成",
    ],
    dataFlow: [
      "录入岗位信息与 JD 原文",
      "清洗文本并提取结构化字段",
      "写入岗位标签与技能关键词",
      "生成匹配分析与学习建议",
      "同步到看板做投递追踪和复盘",
    ],
    aiUsage: [
      "JD 结构化抽取",
      "技能关键词识别",
      "岗位匹配说明生成",
      "学习优先级建议",
    ],
    screenshot: "/images/job-tracker-screen.png",
    screenshotAlt: "Job Tracker + JD Analyzer 项目截图",
    currentStatus: ["核心页面已完成", "数据模型已形成", "流程文档与验收文档已完善"],
    nextIteration: ["岗位抓取自动化", "更细粒度技能图谱", "简历与 JD 匹配评分", "学习任务提醒"],
  },
  {
    slug: "budget-app",
    title: "个人简约记账本 APP",
    subtitle: "轻量级个人收支记录应用",
    oneLiner:
      "面向个人日常收支记录，强调低操作成本、清晰分类、月度统计与移动端使用体验。",
    status: "MVP 完成",
    techStack: [
      "Android",
      "Java",
      "XML",
      "SQLite",
      "xUtils",
      "MPAndroidChart",
      "本地数据管理",
    ],
    capabilities: [
      "Android 应用开发背景",
      "收支记录",
      "分类管理",
      "月度统计",
      "本地数据管理",
      "移动端交互设计",
      "产品手册整理",
      "从需求到功能实现",
    ],
    overview:
      "项目聚焦日常记账的高频场景，优先保证录入效率和统计可读性，突出移动端基础工程能力。",
    problem: "多数记账工具功能复杂、学习成本高，不适合快速记录和长期坚持。",
    solution: "以极简交互组织记录、分类、统计三条核心链路，让用户低负担完成每日记账与月度复盘。",
    targetUsers: ["个人日常记账用户", "偏好本地数据管理的用户", "重视简洁交互体验的人群"],
    coreFeatures: ["收支录入", "分类管理", "月度统计", "趋势展示", "本地存储", "移动端交互优化"],
    architecture: [
      "表现层：Android 原生页面 + XML 布局",
      "业务层：围绕账目录入、分类、统计的模块化逻辑",
      "存储层：SQLite 本地持久化",
      "可视化：MPAndroidChart 呈现月度统计趋势",
    ],
    dataFlow: ["用户录入收支", "写入本地 SQLite", "按分类与月份聚合", "生成统计图与汇总", "支持月度复盘查看"],
    aiUsage: ["后续计划引入消费习惯总结", "后续计划引入预算提醒建议", "复盘文案辅助生成"],
    screenshot: "/images/simple-budget-screen.png",
    screenshotAlt: "个人简约记账本 APP 项目截图",
    currentStatus: ["MVP 功能闭环完成", "核心交互流程稳定", "基础统计模块可用"],
    nextIteration: ["预算阈值提醒", "分类对比分析", "数据导出", "智能复盘建议"],
  },
];

export function getProjectBySlug(slug: ProjectCase["slug"]) {
  return projects.find((project) => project.slug === slug);
}
