# Agent Instructions

## Role

AI 工程执行代理负责按 PRD、约束、任务卡和验收标准实现本项目。

## Rules

- 先读文档，再改代码。
- 页面内容尽量来自 `src/data`。
- MVP 不引入数据库、复杂后端或重型 CMS。
- 不删除已有功能，不大规模重构无关代码。
- 不提交敏感信息。
- 完成后更新 `docs/OPS_LOG.md` 与 `docs/ACCEPTANCE.md`。
- 修改完成后运行 `npm run lint` 与 `npm run build`。
