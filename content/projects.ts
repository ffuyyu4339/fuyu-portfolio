export type ProjectCase = {
  slug: "job-tracker" | "simple-budget-app";
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
    subtitle: "求职数据分析与决策辅助工具",
    oneLiner: "面向求职过程的岗位追踪与 JD 分析工具，用于收集岗位信息、结构化分析 JD、辅助求职决策和技能差距识别。",
    status: "In Progress",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL / SQLite",
      "OpenAI-compatible API",
      "Data Cleaning",
      "Text Analysis",
      "Dashboard",
    ],
    capabilities: [
      "岗位信息管理",
      "JD 文本结构化",
      "技能关键词提取",
      "岗位标签归类",
      "求职进度追踪",
      "AI 辅助分析",
      "数据分析思维",
      "产品化思维",
    ],
    overview:
      "这是一个面向求职过程的数据分析与决策辅助工具。它不只是记录岗位，而是把 JD 转换成可分析的数据。",
    problem: "求职过程中岗位信息分散，JD 内容难以比较，技能要求难以量化。",
    solution:
      "通过岗位追踪、JD 结构化和关键词分析，把求职过程变成可观察、可复盘、可优化的数据流程。",
    targetUsers: ["正在转岗或校招求职的候选人", "需要追踪多岗位进展的投递者", "希望量化技能差距的学习者"],
    coreFeatures: [
      "岗位信息管理",
      "JD 文本录入",
      "技能关键词提取",
      "岗位分类标签",
      "求职状态追踪",
      "技能差距分析",
      "数据看板",
    ],
    architecture: [
      "前端：Next.js + React 展示岗位列表、分析结果和流程状态",
      "分析层：Python/FastAPI 执行 JD 清洗、关键词提取和结构化输出",
      "数据层：SQLite/PostgreSQL 存储岗位记录、标签、状态与统计快照",
      "AI 层：OpenAI-compatible API 用于辅助分类、总结和建议生成",
    ],
    dataFlow: [
      "输入岗位和 JD 文本",
      "清洗文本并抽取结构化字段",
      "生成技能关键词与岗位标签",
      "回写到岗位记录并更新状态",
      "在看板中展示趋势与差距",
    ],
    aiUsage: [
      "辅助抽取岗位核心技能",
      "输出结构化 JSON 字段",
      "生成岗位匹配分析说明",
      "给出技能提升优先级建议",
    ],
    screenshot: "/images/job-tracker-screen.png",
    screenshotAlt: "Job Tracker + JD Analyzer Stitch reference screen",
    currentStatus: [
      "已完成核心页面结构",
      "已完成岗位字段模型初版",
      "已建立基础流程与文档验收机制",
    ],
    nextIteration: [
      "自动抓取岗位信息",
      "AI 生成岗位匹配建议",
      "技能学习路线推荐",
      "简历与 JD 匹配度分析",
    ],
  },
  {
    slug: "simple-budget-app",
    title: "个人简约记账本 APP",
    subtitle: "Android 原生工程能力与产品化思维展示",
    oneLiner:
      "面向个人日常收支记录的轻量级记账 App，用于展示 Android 开发、产品设计、数据建模和本地数据管理能力。",
    status: "MVP",
    techStack: [
      "Android",
      "Kotlin / Java",
      "SQLite / Room",
      "MVVM",
      "Material Design",
      "Data Visualization",
      "Local Persistence",
    ],
    capabilities: [
      "Android App 开发",
      "移动端 UI/UX",
      "本地数据存储",
      "收支分类",
      "月度统计",
      "极简交互",
      "用户场景建模",
    ],
    overview: "这是一个用于展示 Android 基础工程能力和产品化思维的移动端项目。",
    problem: "个人日常记账工具容易复杂化，用户只需要快速记录、清晰分类和月度复盘。",
    solution: "构建一个轻量、低干扰、可长期使用的简约记账 App。",
    targetUsers: ["需要快速记账的个人用户", "偏好离线与本地数据管理的用户", "追求低学习成本的记账场景"],
    coreFeatures: [
      "收入/支出记录",
      "分类管理",
      "月度统计",
      "本地数据存储",
      "极简输入流程",
      "消费趋势展示",
    ],
    architecture: [
      "表现层：Material Design + 响应式布局",
      "状态管理：MVVM 分层，ViewModel 组织页面状态",
      "存储层：SQLite/Room 维护账目、分类、月度汇总",
      "可视化：基础图表组件展示收支趋势",
    ],
    dataFlow: [
      "输入收支记录",
      "写入本地数据库",
      "按分类与月份聚合",
      "生成统计视图",
      "在首页展示月度复盘",
    ],
    aiUsage: [
      "用于后续生成消费习惯总结",
      "用于分类建议与预算提醒策略",
      "用于复盘文本模板生成",
    ],
    screenshot: "/images/simple-budget-screen.png",
    screenshotAlt: "Simple Budget App Stitch reference screen",
    currentStatus: ["已完成 MVP 功能边界定义", "已实现核心数据模型与本地记录流程", "已完成基础统计视图"],
    nextIteration: ["预算提醒", "分类消费分析", "AI 消费习惯总结", "数据导出"],
  },
];

export function getProjectBySlug(slug: ProjectCase["slug"]) {
  return projects.find((project) => project.slug === slug);
}
