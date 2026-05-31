# 付钰的个人作品集

基于 Next.js + TypeScript + Tailwind CSS 的个人作品集网站，围绕真实项目实践展示 AI 应用开发、数据分析与工程化能力。

## 项目介绍

本项目用于将 Open Design 视觉稿落地为可运行、可测试、可部署的网站版本，主题聚焦：

- 软件工程背景
- AI 应用开发
- 数据分析学习
- 开源模型集成
- 作品集系统工程化

核心项目仅包含：

- Job Tracker + JD Analyzer
- 个人简约记账本 APP

## 技术栈

- 前端：React、Next.js（App Router）、TypeScript、Tailwind CSS
- 后端能力（项目描述内）：Python、FastAPI、PostgreSQL / MySQL、REST API
- AI：OpenAI-compatible API、Prompt 模板、JSON 结构化输出、RAG 基础流程
- 工程：Git、GitHub、Vercel、ESLint

## 页面结构

- `/` 首页
- `/projects` 项目列表
- `/projects/job-tracker` 项目一详情
- `/projects/budget-app` 项目二详情
- `/process` AI 辅助开发流程
- `/resume` 简历概览
- `/contact` 联系方式

兼容历史路由：

- `/workflow` → `/process`
- `/ai-workflow` → `/process`
- `/projects/simple-budget-app` → `/projects/budget-app`

## 本地运行方式

```bash
npm install
npm run dev
```

默认访问：`http://localhost:3000`

## 部署方式

1. 推送到 GitHub 仓库。
2. 在 Vercel 导入该仓库并选择 Next.js。
3. 使用默认构建配置（或 `npm run build`）。
4. 部署完成后验证关键路由。

## 后续计划

- 补充真实 GitHub 与邮箱链接。
- 增加项目过程截图与指标数据。
- 增加更多可验证项目案例并持续迭代。
