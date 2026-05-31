# fuyu-portfolio

付钰的个人作品集静态网站，由 Open Design 生成并部署到 Vercel。

## 线上地址

- 作品集网址：<https://fu-yu-portfolio-open-design.vercel.app/>
- GitHub 仓库：<https://github.com/ffuyyu4339/fuyu-portfolio>

## 仓库内容

本仓库只保存 Open Design 当前作品集页面的静态站点文件：

- `index.html`
- 项目展示所需的 PNG 图片资产

这里不包含旧的 Next.js 作品集代码，也不包含 Job Tracker、个人记账本 APP 等其他项目源码。

## 本地预览

不需要安装依赖，直接打开 `index.html` 即可。

也可以启动本地静态服务器：

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://localhost:4173
```

## 部署

当前线上站点部署在 Vercel：

```text
https://fu-yu-portfolio-open-design.vercel.app/
```

这是一个纯静态站点，可直接将仓库导入 Vercel，或使用 Vercel CLI 从仓库根目录部署。
