# OPS_LOG

## 2026-05-31 Open Design 作品集上线改造

### 读取与对齐

- 已按 `AGENTS.md` 要求先读取：
  - `docs/PRD_v1.md`
  - `docs/CONSTRAINTS.md`
  - `docs/TASKS.md`
- 确认当前仓库已是 Next.js 项目，无需重建。

### 代码改造

- 重写内容层：
  - `content/profile.ts`
  - `content/projects.ts`
  - `content/skills.ts`
  - `content/workflow.ts`
  - `content/process.ts`
- 新增数据出口：`src/data/process.ts`
- 新增核心组件：
  - `src/components/Navbar.tsx`
  - `src/components/Hero.tsx`
  - `src/components/ProjectCard.tsx`
  - `src/components/SectionTitle.tsx`
  - `src/components/TechStack.tsx`
  - `src/components/Timeline.tsx`
  - `src/components/Footer.tsx`
  - `src/components/ProjectDetail.tsx`
- 主要页面重构：
  - `src/app/page.tsx`
  - `src/app/projects/page.tsx`
  - `src/app/projects/job-tracker/page.tsx`
  - `src/app/projects/budget-app/page.tsx`
  - `src/app/process/page.tsx`
  - `src/app/resume/page.tsx`
  - `src/app/contact/page.tsx`
- 兼容路由处理：
  - `src/app/workflow/page.tsx` -> `/process`
  - `src/app/ai-workflow/page.tsx` -> `/process`
  - `src/app/projects/simple-budget-app/page.tsx` -> `/projects/budget-app`
  - `src/app/projects/[slug]/page.tsx` 新增旧 slug 兼容
- 视觉系统更新：
  - `src/app/globals.css`
  - `src/app/layout.tsx`
  - `tailwind.config.ts`
- 清理无用旧组件与旧类型文件，降低维护成本。

### 命令验证

- `npm install`：成功（依赖已最新）
- `npm run lint`：成功
- `npm run build`：成功
- `curl` 验证历史路由重定向：成功

### 浏览器验证（@chrome / @浏览器）

使用 `node_repl + playwright` 实测：

- 检查页面：
  - `/`
  - `/projects`
  - `/projects/job-tracker`
  - `/projects/budget-app`
  - `/process`
  - `/resume`
  - `/contact`
- 结果：
  - 全部 `200`
  - 无控制台 error
  - 无横向滚动
  - 宽度 `375/390/430/768/1440` 全部通过

### 文档同步

- 更新 `README.md`
- 新增 `ACCEPTANCE_REPORT.md`
- 更新 `docs/ACCEPTANCE.md`

## 2026-05-31 生产部署执行（Vercel CLI）

### 部署前检查

- 已读取并对齐文档：
  - `docs/PRD_v1.md`
  - `docs/CONSTRAINTS.md`
  - `docs/TASKS.md`
  - `docs/DEPLOYMENT.md`
- 执行：
  - `npm run lint`：通过
  - `npm run build`：通过

### 部署执行

- 命令：`vercel --prod --yes`
- 部署结果：成功（`READY`）
- Deployment URL：
  - `https://fy-repository-kdveoa4sg-fuyus-projects-11d155d9.vercel.app`
- Inspector：
  - `https://vercel.com/fuyus-projects-11d155d9/fy-repository/3YcuNC126icxzGjanbGtaJ3Wcy2Q`
- 生产别名：
  - `https://fuyu.dev`

### 访问验证

- `curl -I -L --max-time 20 https://fy-repository-kdveoa4sg-fuyus-projects-11d155d9.vercel.app`：`200`
- `curl -I -L --max-time 20 https://fy-repository-kdveoa4sg-fuyus-projects-11d155d9.vercel.app/projects`：`200`
- 备注：当前执行环境对 `https://fuyu.dev` 直连出现 SSL 握手错误，已通过 Vercel Deployment URL 验证线上可用性。

## 2026-05-31 GitHub 仓库整理与推送准备

### 仓库边界整理

- 将包名更新为 `fuyu-portfolio`
- 补齐 GitHub/Vercel 可读的 `README.md`
- 新增 `docs/DEPLOYMENT_CHECK_REPORT.md`
- 清理 `references/stitch/...` 外部设计导出文件
- 清理本地 `.DS_Store`
- 清理本地 `.next/` 构建产物
- 更新 `.gitignore`，覆盖依赖、构建产物、环境变量、Vercel 本地配置和外部参考导出

### 质量检查

- `npm run lint`：通过
- `npm run build`：通过

## 2026-05-31 GitHub 与作品集网址同步

### 线上信息

- 作品集网址：`https://fuyu.dev`
- Vercel 备用地址：`https://fy-repository.vercel.app`
- 最新生产部署：`https://fy-repository-kdveoa4sg-fuyus-projects-11d155d9.vercel.app`
- GitHub 仓库：`https://github.com/ffuyyu4339/fuyu-portfolio`

### 同步动作

- 更新 GitHub 仓库 Homepage URL
- 更新 `README.md`
- 更新 `docs/DEPLOYMENT.md`
- 更新 `docs/DEPLOYMENT_CHECK_REPORT.md`
- 更新 `docs/ACCEPTANCE.md`
- 更新 `docs/ACCEPTANCE_RECEIPT.md`

### 验证

- `vercel inspect https://fy-repository-kdveoa4sg-fuyus-projects-11d155d9.vercel.app`：Production `Ready`
- Vercel aliases 包含 `https://fuyu.dev`、`https://www.fuyu.dev`、`https://fy-repository.vercel.app`
- `https://fy-repository.vercel.app/`：200
- `https://fy-repository.vercel.app/projects`：200
- `https://fy-repository.vercel.app/projects/job-tracker`：200
- `https://fy-repository.vercel.app/projects/budget-app`：200
- `https://fy-repository.vercel.app/process`：200
- 备注：当前执行环境对 `https://fuyu.dev` 直连仍出现 SSL 握手错误，已通过 Vercel inspect 确认生产别名，并通过 Vercel 备用生产域名验证线上内容。
