# Deployment Guide

## 1. Vercel 部署方式

推荐优先：GitHub + Vercel 自动部署。

## 2. GitHub 连接方式

1. 推送仓库到 GitHub。
2. 在 Vercel Dashboard 中选择 `Add New Project`。
3. 导入该 GitHub 仓库。
4. 使用默认 Next.js 预设并部署。

## 3. 本地 CLI 部署方式

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## 4. 构建命令

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Development Command: `npm run dev`

## 5. 环境变量说明

当前项目无需强制环境变量。

若后续接入 API：
- 在 Vercel 项目设置中配置，避免写入代码仓库。

## 6. 常见问题

- `vercel: command not found`：先安装 CLI。
- `not logged in`：执行 `vercel login`。
- 详情页刷新 404：确认 App Router 路由已提交并成功构建。
- 样式异常：确认 `app/globals.css` 与 `tailwind.config.ts` 已同步。

## 7. 本次执行结果

- 本地 `npm run build`: 成功
- 本地 `npm run lint`: 成功
- Vercel CLI: 已安装 (`vercel 54.5.1`)
- `vercel login`: 已完成 device 认证
- Production: `https://fy-repository.vercel.app`
- Deployment URL: `https://fy-repository-92s5m9r94-fuyus-projects-11d155d9.vercel.app`
- 状态：公开可访问（首页及关键路由 200）
