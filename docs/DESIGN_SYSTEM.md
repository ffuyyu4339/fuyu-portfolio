# Design System

来源：
- `references/stitch/stitch_markdown_design_system/ai_engineering_portfolio_system/DESIGN.md`
- Stitch 导出的 4 个 HTML 页面

## 1. 色彩系统

- Background: `#0a0f12`
- Surface: `#111827`
- Surface Low: `#171c20`
- Surface Card: `#1b2024`
- Surface High: `#252b2e`
- Text Main: `#dee3e8`
- Text Muted: `#bdc8d1`
- Text Subtle: `#7c8a96`
- Border Muted: `#3e484f`
- Primary: `#8ed5ff`
- Primary Strong: `#38bdf8`
- Secondary: `#cebdff`
- Tertiary: `#ffc176`

## 2. 字体系统

- Headline: Geist
- Body: Inter
- Code/Label: JetBrains Mono
- 中文兼容：Noto Sans SC fallback

## 3. 卡片样式

- 透明暗色背景 + 边框 + 轻阴影
- 默认圆角 `rounded-2xl`
- Hover: 轻微上浮、边框高亮、蓝色发光

## 4. 按钮样式

- Primary: 主色描边与填充 hover
- Secondary: 中性色描边，hover 转主色
- Ghost: 轻量文本按钮
- 必须支持 `focus-visible` 外轮廓

## 5. 标签样式

- 圆角胶囊
- 小号 monospace 字体
- 支持 primary/muted/success 三种语义

## 6. Timeline 样式

- 左侧纵向线 + 节点圆点
- 节点 hover 放大
- 移动端保持纵向布局

## 7. 页面间距

- 主容器最大宽：`max-w-6xl`（接近 Stitch 容器）
- Section 间距：`space-y-20` / `py-14`
- 卡片内间距：`p-5` 到 `p-6`

## 8. 响应式断点

- Mobile: 360px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1440px+

实现策略：
- 栅格在 `md/lg/xl` 断点切换
- 项目卡片和标签自动换行
- 全站禁用横向滚动

## 9. 动效规范

允许：
- Section fade-in
- Card hover lift
- Button hover
- Timeline active dot
- Project card border glow

约束：
- 遵守 `prefers-reduced-motion`
- 不使用重型滚动监听
- 详情页以可读性为主，动效从简
