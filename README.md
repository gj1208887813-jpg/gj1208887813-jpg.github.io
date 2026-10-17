# GGGGJ Portfolio

个人网站 / Design Technologist & Creative Developer 作品集。

技术栈：React 19 · Vite 8 · React Router 7 · Tailwind CSS 4 · WebGL 流体光标特效。

线上地址：<https://gj1208887813-jpg.github.io/>

## 本地开发

```bash
npm install
npm run dev        # 开发服务器
npm run build      # 构建产物输出到 docs/（即 GitHub Pages 发布源）
npm run preview    # 本地预览构建结果
npm run lint
```

## GitHub Pages 托管方式

本项目使用 **分支 + `/docs` 目录** 的发布源（Deploy from a branch）。

- 发布仓库：`gj1208887813-jpg/gj1208887813-jpg.github.io`（用户站点仓库，发布在域名根路径）
- 发布分支：`main`
- 发布目录：`/docs`
- 构建命令：`npm run build`，Vite 的 `build.outDir` 已设为 `docs`，`npm run build` 会直接覆盖该目录。

`vite.config.js` 里做了三件 Pages 必需的适配：

1. `base: '/'`
   本项目托管在用户站点仓库 `<user>.github.io`，站点位于**域名根路径**，因此资源 URL 不需要仓库名前缀（若改回普通项目仓库，必须改成 `'/<repo-name>/'`，否则资源会 404、白屏）。
2. 生成 `404.html`（内容与 `index.html` 相同）
   站点使用 `BrowserRouter`，直接访问 `/about`、`/projects` 这类深层链接时，Pages 会用 `404.html` 兜底，从而交给前端路由接管。
3. 生成 `.nojekyll`
   避免 Pages 默认的 Jekyll 构建流程处理 `docs/` 内的文件（以 `_` 开头的目录/文件会被忽略）。

### 首次启用（在 GitHub 网页端操作一次）

仓库 **Settings → Pages → Build and deployment**：

| 选项 | 取值 |
| --- | --- |
| Source | `Deploy from a branch` |
| Branch | `main` |
| Folder | `/docs` |

保存后等待 1～2 分钟，站点会在 Actions 标签页出现 `pages build and deployment` 任务，完成后即可访问。

> 如果 `docs` 目录在分支上被删除，Pages 构建会直接报 missing `/docs` folder 错误，所以务必每次发布都提交 `docs`。

### 更新线上内容

```bash
npm run deploy:pages
```

等价于「构建 → 提交 `docs` → 推送」。推送后 Pages 会自动重新发布。

## 目录结构

```
src/
  App.jsx            # 路由配置
  components/        # Header / Footer / Icon / SpotlightCard / Splash_Cursor(WebGL 流体)
  data/site.js       # 站点文案与项目数据
  pages/             # Home / Projects / About
  index.css          # Tailwind 入口
public/              # favicon、icons
docs/                # 构建产物（已提交，作为 Pages 发布源）
stitch_linear_design_system_integrator/  # 设计稿参考（screen.png / code.html）
```