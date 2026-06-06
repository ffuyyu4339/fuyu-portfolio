# Cloudflare Pages 部署记录

## 项目信息

- Git 自动部署项目名称：fy-portfolio
- 源网页：https://fu-yu-portfolio-open-design.vercel.app/
- 站点类型：静态 HTML
- 部署平台：Cloudflare Pages
- 部署目录：public/
- 生产分支：master

## 本地目录

```bash
/Users/fuyu/Documents/CodexChat/fu-yu-cloudflare-pages-site
```

## 部署命令

Git 自动部署不需要手动发布，直接推送到 `master` 即可。

```bash
npm run deploy
```

等价于：`wrangler pages deploy public --project-name fy-portfolio`

## Cloudflare Pages 地址

- 生产地址：https://fy-portfolio.pages.dev

## 已完成验收

- Cloudflare Pages Git 集成项目已创建
- 旧的直传项目已删除，避免入口混淆
- 首页可访问
- 本地图片资源可访问
- 样式内联在首页 HTML 中
- 无 Vercel 或 `/_next` 核心资源残留
- HTTPS 正常
- 安全响应头已生效
- 静态资源缓存头已生效
- 代码推送到 GitHub 的 `master` 后可自动部署

## 自定义域名

当前没有自有域名，所以这一步可以先不做，直接使用 `pages.dev` 地址即可。

如果以后有自己的域名，再到 Cloudflare Dashboard 里操作：

```text
Workers & Pages
-> fy-portfolio
-> Custom domains
-> Set up a custom domain
```

建议优先绑定：

```text
www.你的域名.com
```
