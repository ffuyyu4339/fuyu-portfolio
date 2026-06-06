# Fu Yu Cloudflare Pages Site

这是从 `https://fu-yu-portfolio-open-design.vercel.app/` 整理出来的纯静态站点，可直接部署到 Cloudflare Pages。

当前这份仓库已经接入 Cloudflare Pages 的 Git 自动部署，生产地址是：

- [https://fy-portfolio.pages.dev](https://fy-portfolio.pages.dev)
- 旧的直传版地址作为备用：`https://fuyu-portfolio.pages.dev`

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

推荐使用 Git 集成后的 Cloudflare Pages 项目 `fy-portfolio`。

只要把改动推送到 GitHub 的 `master` 分支，Cloudflare 就会自动重新部署。

如果你要更新旧的直传备份项目，也可以继续用 Wrangler CLI：

```bash
cd /Users/fuyu/Documents/CodexChat/fu-yu-cloudflare-pages-site
npm run deploy
```

如果你更习惯 Dashboard，手动上传的话可以继续沿用旧的直传项目流程；但长期建议使用 Git 自动部署版本。

1. 新建 Cloudflare Pages 项目。
2. 选择 `Import an existing Git repository`。
3. 选择仓库 `ffuyyu4339/fuyu-portfolio`。
4. 生产分支选 `master`。
5. 构建命令留空，输出目录填 `public`。
6. 没有自己的域名时，直接使用 `*.pages.dev` 即可。
