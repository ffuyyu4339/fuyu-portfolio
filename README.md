# fuyu-portfolio

付钰的个人作品集网站，用于集中展示软件工程背景、AI 应用开发能力、数据分析学习进度、项目实践能力和工程化交付流程。

本仓库只保存作品集网站本身的代码与文档，不包含 Job Tracker、个人记账本 APP 等其他项目的完整源码。

## 线上地址

- 作品集网址：<https://fuyu.dev>
- Vercel 备用地址：<https://fy-repository.vercel.app>
- GitHub 仓库：<https://github.com/ffuyyu4339/fuyu-portfolio>

## 展示内容

- 个人定位：软件工程背景的 AI 应用开发者
- 能力方向：前端工程、后端 API、AI 应用、数据分析、工程化交付
- 核心项目：Job Tracker + JD Analyzer
- 核心项目：个人简约记账本 APP
- 工程流程：PRD、任务卡、AI 辅助开发流程、验收回执、操作日志

## 技术栈

- Framework: Next.js App Router
- Language: TypeScript
- UI: React, Tailwind CSS, lucide-react, framer-motion
- Content: 本地 TypeScript 数据文件
- Quality: ESLint, TypeScript build
- Deploy: GitHub + Vercel

## 项目结构

```text
.
├── content/              # 作品集核心内容数据源
├── docs/                 # PRD、任务卡、流程、部署和验收文档
├── public/images/        # 作品集页面引用的图片资产
├── src/app/              # Next.js App Router 页面
├── src/components/       # 页面组件
├── src/data/             # 面向组件的内容适配层
├── src/lib/              # 通用工具函数
├── package.json
└── README.md
```

## 页面路由

- `/`：首页
- `/projects`：项目列表
- `/projects/job-tracker`：Job Tracker + JD Analyzer
- `/projects/budget-app`：个人简约记账本 APP
- `/process`：AI 辅助开发流程
- `/resume`：简历概览
- `/contact`：联系方式

兼容入口：

- `/workflow` -> `/process`
- `/ai-workflow` -> `/process`
- `/learning` -> `/process`
- `/about` -> `/`
- `/projects/simple-budget-app` -> `/projects/budget-app`

## 本地开发

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:3000
```

## 质量检查

```bash
npm run lint
npm run build
```

提交或部署前必须保证以上命令通过。

## Vercel 部署

推荐使用 GitHub 集成自动部署：

1. 将本仓库推送到 GitHub。
2. 在 Vercel 选择 `Add New Project`。
3. 导入 `fuyu-portfolio` 仓库。
4. Framework Preset 选择 `Next.js`。
5. 使用默认构建配置：
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. 部署后验证 `/`、`/projects`、`/projects/job-tracker`、`/projects/budget-app`、`/process`。

当前项目不需要必填环境变量。

## 仓库边界

应该提交：

- Next.js 作品集网站源码
- 作品集展示所需的图片资产
- 与作品集开发、验收、部署相关的文档

不应该提交：

- `node_modules/`
- `.next/`
- `.vercel/`
- `.env*`
- `.DS_Store`
- 外部项目完整源码
- Open Design、Stitch 等工具导出的临时参考文件

## 当前状态

- 仓库名：`fuyu-portfolio`
- 项目类型：个人作品集网站
- 部署目标：Vercel
- 线上地址：`https://fuyu.dev`
- 备用地址：`https://fy-repository.vercel.app`
- 代码范围：作品集网站本身
