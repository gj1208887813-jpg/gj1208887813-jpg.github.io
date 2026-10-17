import { useEffect, useMemo, useState } from "react";
import { Icon } from "../components/Icon";
import { SpotlightCard } from "../components/SpotlightCard";
import { images, projectDetails } from "../data/site";

const categories = [
  { id: "all", label: "全部卷宗 (All)", icon: "folder_open" },
  { id: "design", label: "01_设计系统", icon: "auto_awesome_motion" },
  { id: "webgl", label: "02_WebGL与3D", icon: "view_in_ar" },
  { id: "ai", label: "03_AI工程工具", icon: "neurology" },
  { id: "fintech", label: "04_量化与金融", icon: "query_stats" },
];

const cards = [
  { id: "neura", category: "design", search: "neura system token design engineering react glsl figma 设计系统" },
  { id: "chiral", category: "webgl", search: "chiral webgl 3d threejs shader glsl physics compute" },
  { id: "cortex", category: "ai", search: "cortex ai llm prompt agent developer tools python rust" },
  { id: "apex", category: "fintech", search: "apex quantitative finance orderbook chart candlestick high-frequency trading 量化" },
];

export function Projects() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(null);
  const active = activeId ? projectDetails[activeId] : null;

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        document.getElementById("projectSearch")?.focus();
      }
      if (event.key === "Escape") setActiveId(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const visibleIds = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return new Set(
      cards
        .filter((card) => category === "all" || card.category === category)
        .filter((card) => {
          if (!needle) return true;
          const detail = projectDetails[card.id];
          const haystack = `${card.search} ${detail.title} ${detail.tags.join(" ")} ${detail.description}`.toLowerCase();
          return haystack.includes(needle);
        })
        .map((card) => card.id),
    );
  }, [category, query]);

  function resetFilters() {
    setQuery("");
    setCategory("all");
  }

  return (
    <div className="flex flex-col w-full relative pb-28 overflow-hidden">
      <div className="pointer-events-none absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-primary-container/15 rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-[40%] -right-40 w-[550px] h-[550px] bg-tertiary-container/10 rounded-full blur-[160px] -z-10" />

      <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-code text-label-code tracking-wider uppercase">
                ARCHIVE // FS_2024-2025
              </span>
              <span className="font-label-code text-label-code text-on-surface-variant">· 14 WORKS ARCHIVED</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">作品索引 & 研发实践</h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              以文件夹架构组织的数字设计系统、WebGL 三维交互原型与生产级 AI 赋能应用套件。
            </p>
          </div>
          <div className="bg-surface-container-low/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg flex items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <div className="flex flex-col font-label-code text-label-code">
              <span className="text-on-surface font-medium">SYS.STATUS: DEPLOYED</span>
              <span className="text-on-surface-variant">RENDER_ENGINE: WEBGL2.0 / METAL</span>
            </div>
            <div className="h-6 w-px bg-outline-variant/40" />
            <div className="font-label-code text-label-code text-primary font-semibold">REV 04.9b</div>
          </div>
        </div>

        <div className="mt-8 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-surface-container-lowest shadow-inner border border-white/[0.04]">
            {categories.map((item) => {
              const selected = category === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  className={`px-4 py-2 rounded-lg font-label-nav text-label-nav transition-all flex items-center gap-2 ${
                    selected
                      ? "text-on-surface bg-surface-container-high shadow"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60"
                  }`}
                >
                  <Icon name={item.icon} className="text-[16px]" />
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="relative flex items-center">
            <Icon name="search" className="absolute left-3.5 text-[18px] text-on-surface-variant" />
            <input
              id="projectSearch"
              className="pl-10 pr-12 py-2 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary shadow-sm w-full md:w-72 transition-all"
              placeholder="检索标签、技术栈或卷号..."
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <span className="absolute right-3 font-label-code text-label-code text-on-surface-variant/60 bg-surface-container-highest px-1.5 py-0.5 rounded">
              ⌘K
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 mt-2">
        {visibleIds.size > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {visibleIds.has("neura") && (
              <ProjectShell span="lg:col-span-8" onOpen={() => setActiveId("neura")}>
                <FolderBar
                  label="DIR // 01_DESIGN_SYSTEMS"
                  tone="text-primary"
                  meta="VOL_01·REV_2025"
                  status="PRODUCTION"
                  statusClass="text-on-surface-variant"
                  dotClass="bg-emerald-400"
                />
                <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Tag className="bg-primary-container/20 text-primary">React 19</Tag>
                      <Tag>Tailwind v4</Tag>
                      <Tag>Figma Token Studio</Tag>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                      Neura Design System 4.0
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl line-clamp-2">
                      为高频量化终端与跨端多核工作站量身打造的企业级设计工程中枢，支持毫秒级变量实时同步与无障碍无缝校验。
                    </p>
                  </div>
                  <Preview src={images.neura} alt="Neura 设计系统界面" tall>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/90 backdrop-blur-md shadow-md">
                      <span className="font-label-code text-label-code text-on-surface font-medium">查看架构文档</span>
                      <Icon name="arrow_forward" className="text-primary text-[16px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Preview>
                  <CardFooter
                    meta={["COMPONENT_COUNT: 148+", "TEST_COVERAGE: 99.4%"]}
                    tone="text-primary hover:text-on-primary-container bg-primary/10 hover:bg-primary-container"
                    onOpen={() => setActiveId("neura")}
                  />
                </div>
              </ProjectShell>
            )}

            {visibleIds.has("chiral") && (
              <ProjectShell span="lg:col-span-4" onOpen={() => setActiveId("chiral")}>
                <FolderBar label="DIR // 02_WEBGL" tone="text-secondary" meta="VOL_02" compact />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="bg-secondary-container/30 text-secondary">Three.js</Tag>
                      <Tag>GLSL Shaders</Tag>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">
                      Chiral 3D Physics Mesh
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-3">
                      纯着色器驱动的高性能粒子流体与刚体碰撞引擎，利用 WebGL GPGPU 实现十万量级粒子 60FPS 实时物理交互。
                    </p>
                  </div>
                  <Preview src={images.chiral} alt="Chiral 粒子物理模拟">
                    <div className="absolute top-3 right-3 font-label-code text-label-code px-2 py-0.5 rounded bg-black/60 text-secondary backdrop-blur-md">
                      GPGPU: 120K PTS
                    </div>
                  </Preview>
                  <CardFooter
                    meta={["FPS: 60 (STABLE)"]}
                    tone="text-secondary hover:text-on-secondary bg-secondary/10 hover:bg-secondary"
                    onOpen={() => setActiveId("chiral")}
                  />
                </div>
              </ProjectShell>
            )}

            {visibleIds.has("cortex") && (
              <ProjectShell span="lg:col-span-4" onOpen={() => setActiveId("cortex")}>
                <FolderBar label="DIR // 03_AI_TOOLS" tone="text-tertiary" meta="VOL_03" compact />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="bg-tertiary-container/30 text-tertiary">Rust + WASM</Tag>
                      <Tag>Local LLM</Tag>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors">
                      Cortex Agentic IDE
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-3">
                      深度整合工程上下文的无摩擦协同编码套件，支持自动拆解复杂重构任务并在沙盒中完成验证。
                    </p>
                  </div>
                  <Preview src={images.cortex} alt="Cortex 智能编码界面" />
                  <CardFooter
                    meta={["LATENCY: <14ms"]}
                    tone="text-tertiary hover:text-on-tertiary bg-tertiary/10 hover:bg-tertiary"
                    onOpen={() => setActiveId("cortex")}
                  />
                </div>
              </ProjectShell>
            )}

            {visibleIds.has("apex") && (
              <ProjectShell span="lg:col-span-8" onOpen={() => setActiveId("apex")}>
                <FolderBar
                  label="DIR // 04_FINTECH_PLATFORM"
                  tone="text-primary"
                  meta="VOL_04·LIVE"
                  status="ACTIVE L2 STREAM"
                  statusClass="text-primary font-semibold"
                  dotClass="bg-primary animate-ping"
                />
                <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Tag className="bg-primary-container/20 text-primary">WebSockets</Tag>
                      <Tag>Canvas L2 Orderbook</Tag>
                      <Tag>Zero-Allocation Buffers</Tag>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                      Apex Quant Market Terminal
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl line-clamp-2">
                      极低延迟的二级市场逐笔深度撮合监控界面，单屏渲染超过五万级档位挂单变动，专为高频自营量化基金设计。
                    </p>
                  </div>
                  <Preview src={images.apex} alt="Apex 量化交易终端" tall>
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg">
                      <Icon name="query_stats" className="text-primary text-[18px]" />
                      <span className="font-label-code text-label-code text-on-surface">MKT_FEED: 140,000 TICKS/SEC</span>
                    </div>
                  </Preview>
                  <CardFooter
                    meta={["ZERO MEMORY DRIFT", "CANVAS HARDWARE ACCEL"]}
                    tone="text-primary hover:text-on-primary-container bg-primary/10 hover:bg-primary-container"
                    onOpen={() => setActiveId("apex")}
                  />
                </div>
              </ProjectShell>
            )}
          </div>
        ) : (
          <div className="max-w-md mx-auto text-center py-20 px-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-4">
              <Icon name="folder_off" className="text-[24px]" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">未匹配到文件夹卷宗</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
              尝试使用更通用的技术栈关键词（如 React, WebGL, LLM）或点击重置筛选器。
            </p>
            <button
              type="button"
              className="mt-4 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-nav text-label-nav shadow-md"
              onClick={resetFilters}
            >
              重置筛选条件
            </button>
          </div>
        )}
      </section>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveId(null);
          }}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container-low rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 bg-surface-container-high border-b border-white/[0.06]">
              <div className="flex items-center gap-3 min-w-0">
                <Icon name="folder_open" className="text-primary text-[20px]" />
                <span className="font-label-code text-label-code text-on-surface font-semibold tracking-wide truncate">
                  {active.path}
                </span>
              </div>
              <button
                type="button"
                className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors"
                onClick={() => setActiveId(null)}
                aria-label="关闭"
              >
                <Icon name="close" className="text-[18px]" />
              </button>
            </div>
            <div className="p-6 md:p-10 overflow-y-auto space-y-8 flex-grow">
              <div className="space-y-3">
                <span className="font-label-code text-label-code text-primary uppercase font-medium">{active.category}</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">{active.title}</h2>
                <div className="flex flex-wrap gap-2 pt-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label-code text-label-code px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg bg-surface-container-lowest">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-60" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {active.highlights.map((item) => (
                  <div key={item.label} className="bg-surface-container/60 p-4 rounded-xl flex flex-col justify-between">
                    <span className="font-label-code text-label-code text-on-surface-variant">{item.label}</span>
                    <span className="font-headline-lg text-headline-lg text-primary my-1">{item.value}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{item.detail}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-2">
                <h4 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                  <Icon name="terminal" className="text-primary text-[20px]" />
                  项目背景与工程概述
                </h4>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{active.description}</p>
              </div>
              <div className="space-y-4 pt-2">
                <h4 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                  <Icon name="architecture" className="text-primary text-[20px]" />
                  核心架构设计与工程亮点
                </h4>
                <div className="bg-surface-container p-6 rounded-xl font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {active.architectureText}
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/[0.06]">
              <div className="font-label-code text-label-code text-on-surface-variant flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>DOCUMENTATION_VERIFIED · GGGGJ ENGINEERING</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-nav text-label-nav transition-all"
                  onClick={() => setActiveId(null)}
                >
                  关闭窗口
                </button>
                <a
                  className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-nav text-label-nav shadow-lg flex items-center gap-1.5 transition-all"
                  href={active.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>访问现场演示</span>
                  <Icon name="open_in_new" className="text-[16px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Tag({ children, className = "bg-surface-container-high text-on-surface-variant" }) {
  return <span className={`font-label-code text-label-code px-2 py-0.5 rounded ${className}`}>{children}</span>;
}

function FolderBar({ label, tone, meta, status, statusClass, dotClass, compact = false }) {
  return (
    <div className="flex items-center justify-between px-6 py-3.5 bg-surface-container/80 backdrop-blur-md">
      <div className="flex items-center gap-3 min-w-0">
        {compact ? (
          <>
            <Icon name="folder" className={`${tone} text-[16px]`} />
            <span className={`font-label-code text-label-code ${tone} font-semibold`}>{label}</span>
          </>
        ) : (
          <>
            <div className="px-2.5 py-1 rounded-md bg-surface-container-high flex items-center gap-1.5">
              <Icon name="folder" className={`${tone} text-[15px]`} />
              <span className={`font-label-code text-label-code ${tone} font-semibold`}>{label}</span>
            </div>
            <span className="font-label-code text-label-code text-on-surface-variant hidden sm:inline">{meta}</span>
          </>
        )}
      </div>
      {status ? (
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${dotClass}`} />
          <span className={`font-label-code text-label-code ${statusClass}`}>{status}</span>
        </div>
      ) : (
        <span className="font-label-code text-label-code text-on-surface-variant">{meta}</span>
      )}
    </div>
  );
}

function Preview({ src, alt, tall = false, children }) {
  return (
    <div
      className={`relative w-full mt-6 rounded-xl overflow-hidden shadow-lg bg-surface-container-lowest ${
        tall ? "h-56 lg:h-64" : "h-44"
      }`}
    >
      <img className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out" src={src} alt={alt} />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />
      {children}
    </div>
  );
}

function CardFooter({ meta, tone, onOpen }) {
  return (
    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.05] gap-3">
      <div className="flex flex-wrap items-center gap-4 font-label-code text-label-code text-on-surface-variant">
        {meta.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <button
        type="button"
        className={`font-label-nav text-label-nav px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${tone}`}
        onClick={(event) => {
          event.stopPropagation();
          onOpen();
        }}
      >
        <span>查看详情</span>
        <Icon name="visibility" className="text-[16px]" />
      </button>
    </div>
  );
}

function ProjectShell({ span, onOpen, children }) {
  return (
    <SpotlightCard
      className={`project-card ${span} flex flex-col bg-surface-container-low/80 hover:bg-surface-container-low rounded-2xl shadow-xl transition-all duration-300 overflow-hidden cursor-pointer`}
      glow="rgba(94, 106, 210, 0.16)"
    >
      <div className="relative z-10 flex flex-col flex-grow" onClick={onOpen} onKeyDown={() => {}} role="presentation">
        {children}
      </div>
    </SpotlightCard>
  );
}
