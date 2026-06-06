# Fu Yu Cloudflare Pages Site

这是从 `https://fu-yu-portfolio-open-design.vercel.app/` 整理出来的纯静态站点，可直接部署到 Cloudflare Pages。

## 目录

- `public/index.html`
- `public/assets/`
- `docs/DEPLOYMENT.md`

## 本地预览

```bash
cd /Users/fuyu/Documents/CodexChat/fu-yu-cloudflare-pages-site/public
python3 -m http.server 4173
```

然后打开 `http://127.0.0.1:4173/`

## 部署到 Cloudflare Pages

推荐使用 Wrangler CLI：

```bash
cd /Users/fuyu/Documents/CodexChat/fu-yu-cloudflare-pages-site
wrangler pages deploy public --project-name fu-yu-cloudflare-pages-site
```

如果你更习惯 Dashboard：

1. 新建 Cloudflare Pages 项目。
2. 选择 `Direct Upload`。
3. 上传 `public/` 目录内容。
4. 发布后到 Pages 项目设置里绑定自定义域名。

