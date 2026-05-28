# Fu Yu Portfolio

基于 Stitch 导出稿工程化实现的个人作品集网站，面向求职展示与长期迭代。

## 项目介绍

网站定位：展示付钰（Fu Yu）的软件工程与 Android 背景，以及向 AI 应用开发、数据分析与工程化交付转型的能力。

核心项目仅包含：
- Job Tracker + JD Analyzer
- 个人简约记账本 APP

另包含：
- AI-assisted Software Engineering Workflow 页面

## 页面路由

- `/` 首页
- `/projects/job-tracker` Job Tracker + JD Analyzer
- `/projects/simple-budget-app` 个人简约记账本 APP
- `/ai-workflow` AI Engineering Workflow

兼容历史路由：
- `/workflow` -> `/ai-workflow`
- `/projects/[slug]` 对旧 slug 做跳转

## 技术栈

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Vercel
- lucide-react
- clsx
- tailwind-merge

## 本地运行

```bash
npm install
npm run dev
```

## 构建检查

```bash
npm run build
npm run lint
```

## 部署方式

- GitHub + Vercel 自动部署
- Vercel CLI 手动部署（见 `docs/DEPLOYMENT.md`）

## 项目结构

```txt
src/
  app/
  components/
  data/
content/
docs/
references/stitch/
public/images/
```

## 当前状态

- Stitch 设计稿已整理到 `references/stitch/stitch_markdown_design_system/`
- 四个目标页面已实现并通过本地 `build/lint`
- 文档、设计系统、操作日志、验收回执已更新
- 部署需在本机完成 Vercel 登录后执行
