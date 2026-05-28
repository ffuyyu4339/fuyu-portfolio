---
name: AI Engineering Portfolio System
colors:
  surface: '#111827'
  surface-dim: '#0f1418'
  surface-bright: '#343a3e'
  surface-container-lowest: '#0a0f12'
  surface-container-low: '#171c20'
  surface-container: '#1b2024'
  surface-container-high: '#252b2e'
  surface-container-highest: '#303539'
  on-surface: '#dee3e8'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dee3e8'
  inverse-on-surface: '#2c3135'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#cebdff'
  on-secondary: '#381385'
  secondary-container: '#4f319c'
  on-secondary-container: '#bea8ff'
  tertiary: '#ffc176'
  on-tertiary: '#472a00'
  tertiary-container: '#f1a02b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#e8ddff'
  secondary-fixed-dim: '#cebdff'
  on-secondary-fixed: '#21005e'
  on-secondary-fixed-variant: '#4f319c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb960'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0F172A'
  on-background: '#dee3e8'
  surface-variant: '#303539'
  border: '#1E293B'
  text-primary: '#E5E7EB'
  text-secondary: '#94A3B8'
  success: '#34D399'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
  stack-gap: 12px
---

# Stitch / Gemini 前端设计指令：个人作品集网站视觉设计
请为一个个人作品集网站设计高质量前端页面。
## 1. 网站定位
这是付钰的个人作品集网站，用于展示：
- 软件工程背景
- Android 应用开发基础
- AI 应用开发能力
- 数据分析学习进度
- 项目实践能力
- AI 驱动的软件工程流程
- 求职方向：上海，AI 应用开发 / 数据分析 / 互联网产品开发 / 开源模型应用集成
这个网站不是普通个人主页，而是一个「AI 工程能力展示系统」。
## 2. 设计目标
设计要让招聘方和技术面试官在 30 秒内理解：
- 他是谁
- 他正在找什么方向
- 他做过哪些项目
- 他掌握哪些技术
- 他如何用 AI 做软件工程
- 他是否值得进入面试
## 3. 视觉参考
参考但不要抄袭：
1. Brittany Chiang 个人网站
   - 借鉴项目展示结构
   - 借鉴精致小组件
   - 借鉴 hover 细节
   - 借鉴简洁技术感
2. Cassie Codes 个人网站
   - 借鉴鲜明配色
   - 借鉴轻松但专业的气质
   - 借鉴个性化视觉表达
## 4. 风格关键词
- 理性
- 工程化
- 清晰
- 轻微未来感
- 专业但不沉闷
- 有个人记忆点
- 适合长期扩展
## 5. 色彩建议
使用深色技术风：
- Background: #0F172A
- Card: #111827
- Border: #1E293B
- Primary Text: #E5E7EB
- Secondary Text: #94A3B8
- Primary Accent: #38BDF8
- Secondary Accent: #A78BFA
- Success Accent: #34D399
可以适当加入轻微渐变，但不要使用廉价大面积渐变。
## 6. 字体建议
- English: Inter / Geist Sans
- Chinese: Noto Sans SC
- Code: JetBrains Mono
## 7. 首页结构
请设计以下区域：
### Section 1: Hero
内容：
- 付钰 / Fu Yu
- AI Application Developer
- Software Engineering Portfolio
- 简介：
  软件工程专业背景，Android 应用开发方向，正在从服务行业回归技术行业，目标方向为 AI 应用开发、数据分析、互联网产品开发和开源模型应用集成。
- CTA:
  - View Projects
  - View AI Workflow
  - Download Resume
视觉要求：
- 首屏有记忆点
- 左侧文字，右侧可放状态面板或小组件
- 小组件可以展示：
  - Target City: Shanghai
  - Current Focus: AI App / Data Analysis
  - Status: Open to opportunities
### Section 2: Current Focus
展示 4 个方向卡片：
- AI Application Development
- Data Analysis Learning
- Product Engineering
- Open-source Model Integration
### Section 3: Featured Projects
展示 3 个精选项目卡片：
1. AI Health Education MVP
2. Job Tracker & JD Analyzer
3. AI Engineering Workflow System
每个项目卡片包含：
- 项目名称
- 一句话描述
- 状态
- 技术栈标签
- View Case Study 按钮
### Section 4: AI Engineering Workflow
展示流程：
Research → PRD → Architecture → Task Cards → Codex Execution → Testing → Acceptance → Iteration
要求：
- 使用横向流程图或时间线
- 每一步有简短说明
- 体现工程化，而不是普通流程图
### Section 5: Skill Matrix
分组展示：
- Frontend
- Backend
- AI Engineering
- Data Analysis
- DevOps & Workflow
每个技能用标签或矩阵展示，不要做传统进度条。
### Section 6: Learning Progress
展示：
- Google Data Analytics
- AI API Integration
- RAG / Agentic Workflow
- Portfolio System Iteration
### Section 7: Contact CTA
引导访问：
- GitHub
- Resume
- Email
- Projects
## 8. 项目详情页设计
项目详情页需要像 case study，不要像普通博客。
结构：
- Project Header
- Problem
- Goal
- MVP Scope
- Tech Stack
- My Role
- Architecture
- Core Features
- AI Workflow Usage
- Challenges & Solutions
- Testing & Acceptance
- Reflection
- Next Steps
设计要求：
- 左侧正文，右侧 sticky project meta panel
- 技术栈标签清晰
- 小标题层级明显
- 适合长文阅读
- 移动端右侧面板变为顶部信息卡
## 9. AI Workflow 页面设计
设计一个完整流程页：
- 顶部说明为什么需要 AI 工程流程
- 中间是流程时间线
- 每个阶段使用卡片：
  - Goal
  - Input
  - Output
  - Tools
  - Artifacts
- 底部展示实践案例入口
## 10. 交互要求
必须包含：
- Hover 状态
- Active 导航
- 卡片轻微上浮
- 技术标签高亮
- 页面滚动节奏
- 移动端适配
- 暗色模式对比度合理
- CTA 清晰
## 11. 禁止事项
- 不要抄袭参考站源码或具体布局
- 不要做成普通模板站
- 不要所有区域都是普通卡片
- 不要使用过多炫酷动画
- 不要牺牲可读性
- 不要用无意义图标填充
- 不要使用廉价科技蓝大渐变
## 12. 输出要求
请输出：
1. 首页设计
2. 项目列表页设计
3. 项目详情页设计
4. AI Workflow 页面设计
5. 移动端布局建议
6. 组件拆分建议
7. Tailwind CSS 风格建议
8. 可直接交给 Next.js 前端实现的组件结构