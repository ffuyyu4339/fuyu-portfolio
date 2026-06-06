# Cloudflare Pages 部署记录

## 项目信息

- 项目名称：fuyu-portfolio
- 源网页：https://fu-yu-portfolio-open-design.vercel.app/
- 站点类型：静态 HTML
- 部署平台：Cloudflare Pages
- 部署目录：public/
- 生产分支：production

## 本地目录

```bash
/Users/fuyu/Documents/CodexChat/fu-yu-cloudflare-pages-site
```

## 部署命令

```bash
npm run deploy
```

等价于：

```bash
wrangler pages deploy public --project-name fuyu-portfolio
```

## Cloudflare Pages 地址

- 生产地址：https://fuyu-portfolio.pages.dev
- 本次部署地址：https://3bb65811.fuyu-portfolio.pages.dev
- 部署 ID：3bb65811-4aa6-4dcd-ac2d-1c7f8a47caf8

## 已完成验收

- Cloudflare Pages 项目已创建
- 首页可访问
- 本地图片资源可访问
- 样式内联在首页 HTML 中
- 无 Vercel 或 `/_next` 核心资源残留
- HTTPS 正常
- 安全响应头已生效
- 静态资源缓存头已生效

## 自定义域名

Cloudflare Dashboard 路径：

```text
Workers & Pages
-> fuyu-portfolio
-> Custom domains
-> Set up a custom domain
```

建议优先绑定：

```text
www.你的域名.com
```

然后再考虑绑定根域名：

```text
你的域名.com
```
