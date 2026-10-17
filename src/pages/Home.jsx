import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import SplashCursor from "../components/Splash_Cursor";
import { SpotlightCard } from "../components/SpotlightCard";
import { EMAIL, images } from "../data/site";

const tabs = [
  { id: "all", label: "全部架构" },
  { id: "creative", label: "图形系统" },
  { id: "web", label: "生产力工具" },
];

const disciplines = ["React 19", "Three.js", "WebGL / GLSL", "Tailwind Engine", "Design Systems", "Rust / WASM"];

export function Home() {
  const [tab, setTab] = useState("all");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key === "1") {
        event.preventDefault();
        document.getElementById("featured-work")?.scrollIntoView({ behavior: "smooth" });
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function visible(category) {
    return tab === "all" || category === tab;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <SplashCursor
        rainbow={false}
        colors={["#ffafd5"]}
        size={1}
        force={1}
        swirl={3}
        trail={1}
        clickSplash
        colorSpeed={0}
        intensity={1}
        momentum={1}
        shading={1}
        glow={0}
        quality="high"
        intro
        contained={false}
      />
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="linear-grid-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#bdc2ff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect fill="url(#linear-grid-pattern)" width="100%" height="100%" />
        </svg>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-tr from-primary-container/25 via-tertiary-container/15 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[42rem] -left-48 w-[500px] h-[500px] bg-secondary-container/15 blur-[160px] rounded-full" />
        <div className="absolute top-[70rem] -right-32 w-[600px] h-[600px] bg-primary-container/10 blur-[180px] rounded-full" />
      </div>

      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-24 lg:pt-24 lg:pb-32 flex flex-col items-start">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/70 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
            </span>
            <span className="font-label-code text-label-code text-on-surface">LOCATED IN TOKYO & SHANGHAI</span>
          </div>
          <div className="px-2.5 py-1 rounded bg-surface-container-lowest/80 text-on-surface-variant font-label-code text-label-code tracking-wider shadow-sm">
            SYS.VER 4.2.0 // STABLE
          </div>
        </div>

        <div className="max-w-4xl">
          <h1 className="font-display-hero text-display-hero tracking-tight text-on-surface mb-6">
            <span className="bg-gradient-to-b from-white via-on-surface to-outline bg-clip-text text-transparent">
              Hi, nice to meet you,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(94,106,210,0.35)]">
              I&apos;m GGGGJ.
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Senior Creative Developer & UI/UX Specialist crafting high-precision digital instruments, modern web
            systems, and kinetic interfaces.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm transition-all duration-300 shadow-[0_0_30px_rgba(94,106,210,0.45),0_10px_20px_-5px_rgba(0,0,0,0.8)] hover:shadow-[0_0_45px_rgba(94,106,210,0.7),0_12px_24px_-4px_rgba(0,0,0,0.9)] hover:scale-[1.02] active:scale-[0.98]"
            href={`mailto:${EMAIL}`}
          >
            <span className="relative z-10 font-semibold tracking-tight">联系我</span>
            <Icon name="arrow_forward" className="text-[18px] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-container-high/60 backdrop-blur-xl text-on-surface font-headline-sm text-headline-sm shadow-sm transition-all duration-200 hover:bg-surface-container-highest hover:text-white"
            href="#featured-work"
          >
            <Icon name="view_quilt" className="text-[20px] text-primary" />
            <span>探索作品</span>
            <span className="font-label-code text-label-code px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant">
              ⌘1
            </span>
          </a>
        </div>

        <div className="mt-16 w-full pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="terminal" className="text-[16px] text-primary" />
            <span className="font-label-code text-label-code text-on-surface-variant tracking-wider uppercase">
              Engine & Core Disciplines
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {disciplines.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-24" id="featured-work">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 font-label-code text-label-code text-primary uppercase tracking-widest mb-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">精选工程与数字仪器</h2>
          </div>
          <div className="inline-flex flex-wrap p-1 rounded-xl bg-surface-container-lowest shadow-inner" role="tablist">
            {tabs.map((item) => {
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(item.id)}
                  className={`px-4 py-1.5 rounded-lg font-label-nav text-label-nav font-medium transition-all ${
                    active
                      ? "bg-surface-container-high text-on-surface shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {visible("creative") && (
            <SpotlightCard className="lg:col-span-8 rounded-2xl bg-surface-container-low p-8 shadow-xl overflow-hidden transition-all duration-300 hover:bg-surface-container">
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                      <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                      <span className="w-3 h-3 rounded-full bg-surface-container-highest" />
                      <span className="ml-2 font-label-code text-label-code text-on-surface-variant">
                        workspace/aurora-compiler.v2
                      </span>
                    </div>
                    <span className="font-label-code text-label-code px-2.5 py-1 rounded bg-primary-container/20 text-primary">
                      FEATURED BENCHMARK
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary transition-colors duration-200">
                    Aurora: 极光神经渲染管线
                  </h3>
                  <p className="mt-2 font-body-md text-body-md text-on-surface-variant max-w-xl">
                    针对跨终端 WebGL 粒子系统的端侧着色引擎，利用微型张量运算实现百万级微粒实时流体模拟与 60FPS 渲染管线。
                  </p>
                </div>
                <div className="mt-8 relative rounded-xl overflow-hidden bg-surface-container-lowest h-64 shadow-2xl flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
                    alt="WebGL 粒子流体模拟界面"
                    src={images.aurora}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-surface/85 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-3">
                      <Icon name="speed" className="text-primary text-[20px]" />
                      <div>
                        <div className="font-label-code text-label-code text-on-surface">1,048,576 PARTICLES</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">Buffer Latency: 0.84ms</div>
                      </div>
                    </div>
                    <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container-high text-secondary">
                      VULKAN / WEBGL2
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 font-label-code text-label-code text-on-surface-variant">
                    <span>TypeScript</span>
                    <span>•</span>
                    <span>GLSL</span>
                    <span>•</span>
                    <span>Web Workers</span>
                  </div>
                  <Link
                    className="inline-flex items-center gap-1.5 font-label-nav text-label-nav text-primary hover:text-white transition-colors"
                    to="/projects"
                  >
                    <span>查阅架构白皮书</span>
                    <Icon name="chevron_right" className="text-[16px]" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          )}

          {visible("web") && (
            <SpotlightCard className="lg:col-span-4 rounded-2xl bg-surface-container-low p-8 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-surface-container">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-label-code text-label-code text-on-surface-variant uppercase">Runtime Status</span>
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  Chronos Design System
                </h3>
                <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                  基于 Linear 与 Vercel 架构规范的高性能企业级设计系统与可访问性组件基建。
                </p>
                <div className="mt-8 p-4 rounded-xl bg-surface-container-lowest/80 shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-code text-label-code text-on-surface-variant">ACCESSIBILITY SCORE</span>
                    <span className="font-headline-sm text-headline-sm text-primary font-semibold">99.8%</span>
                  </div>
                  <svg className="w-full h-8" fill="none" viewBox="0 0 200 40">
                    <path
                      className="text-primary-container"
                      d="M0 32 L30 28 L60 22 L90 26 L120 14 L150 18 L180 8 L200 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M0 32 L30 28 L60 22 L90 26 L120 14 L150 18 L180 8 L200 6 L200 40 L0 40 Z"
                      fill="url(#gradient-chart)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="gradient-chart" x1="0" x2="0" y1="0" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#bdc2ff" />
                        <stop offset="1" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="mt-3 flex items-center justify-between font-label-code text-label-code text-outline">
                    <span>ZERO DEPENDENCIES</span>
                    <span>WCAG 2.1 AAA</span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-8 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code text-on-surface-variant">64+ COMPONENTS</span>
                  <Link
                    className="inline-flex items-center gap-1 font-label-nav text-label-nav text-on-surface hover:text-primary transition-colors"
                    to="/projects"
                  >
                    <span>探索文档</span>
                    <Icon name="north_east" className="text-[16px]" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          )}

          {visible("web") && (
            <SpotlightCard className="lg:col-span-4 rounded-2xl bg-surface-container-low p-8 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-surface-container">
              <div className="relative z-10">
                <div className="h-44 w-full rounded-xl overflow-hidden bg-surface-container-lowest mb-6 relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="深色代码编辑器与快捷键面板"
                    src={images.synapse}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
                </div>
                <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container-high text-secondary">
                  DEV TOOL
                </span>
                <h3 className="mt-3 font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  Synapse CLI & Hub
                </h3>
                <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                  为工程师团队打造的微前端热插拔与状态同步中间件，让跨应用通信延迟降低 70%。
                </p>
              </div>
              <div className="relative z-10 mt-6 pt-4 flex items-center justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant">Node.js • Rust • Tauri</span>
                <Icon name="arrow_right_alt" className="text-outline group-hover:text-primary transition-colors" />
              </div>
            </SpotlightCard>
          )}

          {visible("creative") && (
            <SpotlightCard className="lg:col-span-4 rounded-2xl bg-surface-container-low p-8 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-surface-container">
              <div className="relative z-10">
                <div className="h-44 w-full rounded-xl overflow-hidden bg-surface-container-lowest mb-6 relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="空间音频波形界面"
                    src={images.spatial}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
                </div>
                <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container-high text-tertiary">
                  AUDIO / WEB AUDIO API
                </span>
                <h3 className="mt-3 font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  Spatial Wave Matrix
                </h3>
                <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                  浏览器端无损空间音频定位合成器，支持立体声场实时光线追踪反射模拟。
                </p>
              </div>
              <div className="relative z-10 mt-6 pt-4 flex items-center justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant">AudioWorklet • WebAssembly</span>
                <Icon name="arrow_right_alt" className="text-outline group-hover:text-primary transition-colors" />
              </div>
            </SpotlightCard>
          )}

          <SpotlightCard className="lg:col-span-4 rounded-2xl bg-gradient-to-br from-surface-container-low to-surface-container-lowest p-8 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-surface-container">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center mb-6 shadow-sm">
                <Icon name="precision_manufacturing" className="text-primary text-[24px]" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                极致打磨与工程美学
              </h3>
              <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                “软件不仅是解决问题的代码堆栈，更应如同精密仪器般具备手感与灵韵。界面即物理世界在屏幕之上的投影。”
              </p>
            </div>
            <div className="relative z-10 mt-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-label-code text-label-code text-primary font-bold">
                  G
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">GGGGJ</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Design Technologist</div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="relative rounded-3xl bg-surface-container-low p-8 lg:p-14 shadow-2xl overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-primary font-label-code text-label-code mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                COLLABORATION PROTOCOL
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                准备好将您的下一个突破性构想变为现实了吗？
              </h2>
              <p className="mt-3 font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                无论是打造具有划时代美感的先锋产品界面，还是攻克高难度 WebGL 视觉管线，随时欢迎探讨与协作。
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-medium shadow-[0_0_24px_rgba(94,106,210,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  href={`mailto:${EMAIL}`}
                >
                  <Icon name="mail" className="text-[18px]" />
                  <span>发送合作意向邮件</span>
                </a>
                <button
                  type="button"
                  className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-label-nav text-label-nav transition-all hover:bg-surface-container-highest ${
                    copied ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high text-on-surface"
                  }`}
                  onClick={copyEmail}
                >
                  <Icon name="content_copy" className="text-[18px] text-primary" />
                  <span>{copied ? "已复制到剪贴板！" : `复制 ${EMAIL}`}</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl bg-surface-container-lowest p-6 shadow-xl font-label-code text-label-code">
              <div className="flex items-center justify-between pb-4 mb-4">
                <span className="text-outline">bash — 80x24</span>
                <span className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-error" />
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
              </div>
              <div className="space-y-2 text-on-surface-variant">
                <p>
                  <span className="text-primary font-bold">~</span> $ curl https://api.ggggj.dev/v1/availability
                </p>
                <p className="text-primary-fixed">{"{"}</p>
                <p className="pl-4 text-on-surface">
                  &quot;status&quot;: <span className="text-secondary">&quot;open_for_selected_contracts&quot;</span>,
                </p>
                <p className="pl-4 text-on-surface">
                  &quot;focus&quot;: [<span className="text-secondary">&quot;Interactive 3D&quot;</span>,{" "}
                  <span className="text-secondary">&quot;Fintech Systems&quot;</span>],
                </p>
                <p className="pl-4 text-on-surface">
                  &quot;timezone&quot;: <span className="text-secondary">&quot;UTC+8 / UTC+9&quot;</span>,
                </p>
                <p className="pl-4 text-on-surface">
                  &quot;response_time&quot;: <span className="text-tertiary">&quot;&lt; 12 hours&quot;</span>
                </p>
                <p className="text-primary-fixed">{"}"}</p>
                <p className="flex items-center gap-1 pt-2">
                  <span className="text-primary font-bold">~</span> ${" "}
                  <span className="w-2 h-4 bg-primary inline-block animate-pulse" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
