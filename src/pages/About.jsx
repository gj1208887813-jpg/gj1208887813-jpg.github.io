import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { EMAIL, GITHUB, TWITTER, WECHAT_ID, images } from "../data/site";

const skills = [
  {
    title: "Design Systems",
    icon: "palette",
    tone: "text-primary",
    bar: "bg-primary",
    items: [
      ["Figma / Tokens Studio", "96%"],
      ["3D Scene & Cinema 4D", "88%"],
      ["Motion & Micro-UX", "92%"],
    ],
  },
  {
    title: "Web Architecture",
    icon: "code",
    tone: "text-tertiary",
    bar: "bg-tertiary",
    items: [
      ["TypeScript / React", "95%"],
      ["Next.js / Tailwind CSS", "98%"],
      ["Node.js / GraphQL APIs", "85%"],
    ],
  },
  {
    title: "Creative Coding",
    icon: "view_in_ar",
    tone: "text-secondary",
    bar: "bg-secondary",
    items: [
      ["Three.js / WebGL", "90%"],
      ["GLSL Custom Shaders", "82%"],
      ["GSAP / Canvas API", "94%"],
    ],
  },
];

const timeline = [
  {
    range: "2023 — PRESENT",
    rangeClass: "text-primary bg-primary-container/20",
    mode: "FULL-TIME & CONSULT",
    role: "Principal Technologist",
    org: "GGGGJ Studio / Stealth Lab",
    orgClass: "text-primary",
    body: "聚焦于下一代 AI Native 生产力交互界面的研发。主导打造了多个兼具 WebGPU 动态光影与高吞吐量数据可视化的企业级 SaaS 原型系统。",
    deliverable: "Generative Canvas v2.4",
  },
  {
    range: "2021 — 2023",
    rangeClass: "text-tertiary bg-tertiary-container/20",
    mode: "LEAD ROLE",
    role: "Senior Design Systems Engineer",
    org: "HyperScale Tech",
    orgClass: "text-tertiary",
    body: "带领 8 人团队重构底层全端设计系统。建立从 Figma Tokens 至 React/Web Component 自动化同步流水线，覆盖 12 款活跃产品，组件交付速度提升 45%。",
    deliverable: "Nexus Design Tokens Engine",
  },
  {
    range: "2019 — 2021",
    rangeClass: "text-secondary bg-secondary-container/20",
    mode: "FRONTEND CORE",
    role: "Interactive Creative Engineer",
    org: "Kinetic Digital Works",
    orgClass: "text-secondary",
    body: "主导商业品牌数字化发布会微站的 3D 沉浸式场景搭建。深耕 Three.js 自定义 Shader、音视频同步和物理碰撞特效，荣获两项国际 Web 设计大奖。",
    deliverable: "AWAWDS Site of the Day",
  },
];

const previews = [
  {
    code: "PROJECT // 01",
    tone: "text-primary",
    title: "Neural Flux Visualizer",
    detail: "Realtime WebGPU generative vector field",
    image: images.neural,
  },
  {
    code: "PROJECT // 02",
    tone: "text-tertiary",
    title: "Aura Design Architecture",
    detail: "Multimodal token framework for Figma & Code",
    image: images.aura,
  },
  {
    code: "PROJECT // 03",
    tone: "text-secondary",
    title: "Prism Specular Shaders",
    detail: "Custom multi-pass GLSL refraction materials",
    image: images.prism,
  },
];

const scopes = [
  ["design-system", "全端设计系统构建 (Design Systems)"],
  ["creative-3d", "3D 网页 / WebGL 视觉定制 (Creative Dev)"],
  ["saas-frontend", "AI SaaS / 核心前端架构 (Full-stack UI)"],
  ["consulting", "技术顾问 / 团队讲座 (Consultancy)"],
];

export function About() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle");

  async function copyWechat() {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function submitInquiry(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 900);
  }

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-primary-container/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-[38rem] -left-48 w-[500px] h-[500px] bg-secondary-container/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-[75rem] -right-36 w-[450px] h-[450px] bg-tertiary-container/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20 w-full flex flex-col gap-16 md:gap-24 relative z-10">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-3xl bg-surface-container-low p-8 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-primary-container/20">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="relative flex justify-center items-center py-6">
                <div className="absolute w-52 h-52 rounded-full bg-gradient-to-tr from-primary-container via-tertiary-container to-secondary opacity-30 blur-xl animate-pulse" />
                <div className="relative w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-primary via-tertiary to-secondary shadow-xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-lowest flex items-center justify-center relative">
                    <img
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      alt="GGGGJ 头像"
                      src={images.avatar}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col text-center items-center mt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-code text-label-code mb-3">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
                  <span>CREATIVE TECH // LAB 01</span>
                </div>
                <h1 className="font-display-hero text-headline-lg font-semibold tracking-tight text-on-surface">GGGGJ</h1>
                <p className="font-headline-sm text-headline-sm text-primary font-medium mt-1">
                  Design Technologist & Creative Developer
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 max-w-xs">
                  Bridging the chasm between pure generative aesthetics and performant web architecture.
                </p>
              </div>
              <div className="relative mt-8 bg-surface-container-lowest/70 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <Icon name="terminal" className="text-[18px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-code text-label-code text-on-surface-variant">BASE CAMP</span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">Shenzhen • Remote</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-label-code text-label-code text-on-surface-variant">EXPERIENCE</span>
                  <p className="font-body-sm text-body-sm text-primary font-semibold">6+ Years Craft</p>
                </div>
              </div>
              <div className="relative flex flex-wrap gap-2 mt-5 justify-center">
                {["WebGL / Three.js", "Design Systems", "Next.js / Rust", "GLSL Shaders"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-surface-container-highest/60 text-on-surface-variant font-label-code text-label-code"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Metric icon="hub" iconClass="text-primary" label="OPEN SOURCE" value="3.4k+" detail="GitHub Stars across repos" />
              <Metric icon="verified" iconClass="text-secondary" label="COMMERCIAL" value="28+" detail="High-impact launches" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="rounded-3xl bg-surface-container-low p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-label-code text-label-code text-primary uppercase tracking-widest">
                    // Philosophy & Vision
                  </span>
                  <span className="h-px flex-1 bg-surface-container-highest" />
                </div>
                <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface tracking-tight leading-snug">
                  Building at the intersection of mathematical precision and kinetic emotion.
                </h2>
                <div className="space-y-4 mt-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  <p>
                    你好，我是 <span className="text-on-surface font-medium">GGGGJ</span>
                    。作为一名设计技术专家（Design Technologist）和独立创意开发者，过去六年里我专注于探索人机交互界面中那种近乎触手可及的细腻物理质感。
                  </p>
                  <p>
                    我相信优秀的数字产品不仅需要工程级的严谨架构与毫秒级的性能表现，更需要富有呼吸感的微动效、克制而深邃的色彩层次，以及能激发感官共鸣的空间纵深。
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant/80">
                    无论是构建百万级用户的生产工具设计系统，还是编写实验性质的 GLSL 渲染管线与 3D 互动页面，我都在持续打破“设计”与“工程”之间的固有壁垒。
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 bg-surface-container-lowest/50 rounded-2xl p-5">
                <Principle icon="tune" tone="text-primary" title="01. SUBPIXEL FIT" body="像素级对齐，毫秒级响应，拒绝冗余渲染。" />
                <Principle icon="all_inclusive" tone="text-secondary" title="02. FLUID KINETICS" body="符合惯性物理规律的动效，赋冷酷芯片以生命。" />
                <Principle icon="layers" tone="text-tertiary" title="03. SCALABLE CORE" body="从 Tokens 到组件工程，极具扩展力与健壮度。" />
              </div>
            </div>

            <div className="rounded-3xl bg-surface-container-low p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="font-label-code text-label-code text-primary uppercase tracking-widest">// Technical Matrix</span>
                <span className="font-label-code text-label-code text-on-surface-variant">PROFICIENCY LEVEL</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((group) => (
                  <div key={group.title} className="bg-surface-container rounded-2xl p-5 flex flex-col gap-4">
                    <div className={`flex items-center gap-2 ${group.tone} font-headline-sm text-headline-sm font-semibold`}>
                      <Icon name={group.icon} className="text-[20px]" />
                      <h3>{group.title}</h3>
                    </div>
                    <div className="space-y-3 font-body-sm text-body-sm">
                      {group.items.map(([name, value]) => (
                        <div key={name}>
                          <div className="flex justify-between text-on-surface-variant mb-1">
                            <span>{name}</span>
                            <span className={`font-label-code text-label-code ${group.tone}`}>{value}</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                            <div className={`h-full rounded-full ${group.bar}`} style={{ width: value }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-label-code text-label-code text-primary uppercase tracking-widest">// Track Record</span>
              <h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface mt-1">
                Career & Engineering Timeline
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 font-label-code text-label-code text-on-surface-variant bg-surface-container-low px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>CHRONOLOGICAL AUDIT</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((item) => (
              <article
                key={item.role}
                className="rounded-3xl bg-surface-container-low p-6 md:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:bg-surface-container"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`font-label-code text-label-code px-2.5 py-1 rounded-md ${item.rangeClass}`}>
                      {item.range}
                    </span>
                    <span className="font-label-code text-label-code text-on-surface-variant">{item.mode}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mt-2">{item.role}</h3>
                  <span className={`font-body-md text-body-md font-medium ${item.orgClass}`}>{item.org}</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">{item.body}</p>
                </div>
                <div className="mt-6 bg-surface-container-lowest/50 rounded-xl p-3 flex items-center justify-between gap-3">
                  <span className="font-label-code text-label-code text-on-surface-variant">KEY DELIVERABLE</span>
                  <span className="font-label-code text-label-code text-on-surface font-semibold text-right">
                    {item.deliverable}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-surface-container-low p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-label-code text-label-code text-primary uppercase tracking-widest">
                // Selected Craft Preview
              </span>
              <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                Creative Coding & Visual Explorations
              </h3>
            </div>
            <Link
              className="inline-flex items-center gap-1.5 font-label-nav text-label-nav text-primary hover:text-primary-fixed transition-colors"
              to="/projects"
            >
              <span>查看全部作品库</span>
              <Icon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previews.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl overflow-hidden bg-surface-container-lowest aspect-[16/10] flex flex-col justify-end p-5 shadow-lg"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={item.title}
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent" />
                <div className="relative z-10">
                  <span className={`font-label-code text-label-code ${item.tone}`}>{item.code}</span>
                  <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5">{item.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-3xl bg-surface-container-low p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-44 h-44 bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-secondary/15 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-between bg-surface-container-lowest/60 rounded-2xl px-4 py-3 mb-6">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-3 h-3 rounded-full bg-error/70 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-primary/70 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-secondary/70 shrink-0" />
                  <span className="font-label-code text-label-code text-on-surface-variant ml-2 truncate">
                    WECHAT_NODE // COMM_V2
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-label-code text-label-code text-primary shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  <span>DIRECT LINK</span>
                </div>
              </div>
              <div className="text-center flex flex-col items-center">
                <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">微信直连沟通</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-xs">
                  支持商业项目合作、技术顾问咨询或数字创意探讨，微信扫一扫添加好友
                </p>
              </div>
              <div className="relative mx-auto mt-8 w-60 h-60 rounded-2xl bg-surface-container-lowest p-3 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-90 shadow-[0_0_12px_rgba(94,106,210,0.8)] animate-[scan_3s_ease-in-out_infinite] z-20 pointer-events-none" />
                <div className="relative w-full h-full rounded-xl bg-white p-2.5 flex items-center justify-center overflow-hidden">
                  <img className="w-full h-full object-contain contrast-125" alt="微信二维码" src={images.wechat} />
                </div>
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary pointer-events-none" />
              </div>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-surface-container flex items-center gap-2">
                  <span className="font-label-code text-label-code text-on-surface-variant">微信号:</span>
                  <span className="font-label-code text-label-code text-on-surface font-semibold tracking-wider">{WECHAT_ID}</span>
                </div>
                <button
                  className="px-3.5 py-2 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all shadow-md flex items-center gap-1 font-label-nav text-label-nav"
                  type="button"
                  onClick={copyWechat}
                >
                  <Icon name="content_copy" className="text-[16px]" />
                  <span>{copied ? "已复制!" : "复制"}</span>
                </button>
              </div>
            </div>
            <p className="relative mt-8 pt-5 text-center font-label-code text-label-code text-on-surface-variant/70">
              通常在 2 小时内响应 • 欢迎注明来意与项目需求
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Channel href={`mailto:${EMAIL}`} icon="alternate_email" iconClass="text-primary" label="EMAIL ENQUIRY" value={EMAIL} />
              <Channel href={GITHUB} icon="terminal" iconClass="text-on-surface" label="CODE REPOSITORIES" value="github.com/ggggj" external />
              <Channel href={TWITTER} icon="public" iconClass="text-secondary" label="THOUGHTS // X" value="@ggggj_dev" external />
            </div>

            <div className="rounded-3xl bg-surface-container-low p-8 shadow-2xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 gap-3">
                  <div>
                    <span className="font-label-code text-label-code text-primary uppercase tracking-widest">
                      // Quick Transmission
                    </span>
                    <h3 className="font-headline-md text-headline-md font-semibold text-on-surface mt-1">发送项目合作意向</h3>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-surface-container-highest text-on-surface-variant font-label-code text-label-code">
                    ENCRYPTED SSL
                  </div>
                </div>
                <form className="space-y-4" onSubmit={submitInquiry}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="称呼 / NAME" id="contact-name">
                      <input
                        className={fieldClass}
                        id="contact-name"
                        placeholder="例如: 张先生 / Alice"
                        required
                        type="text"
                        name="name"
                      />
                    </Field>
                    <Field label="联系邮箱 / EMAIL" id="contact-email">
                      <input
                        className={fieldClass}
                        id="contact-email"
                        placeholder="name@company.com"
                        required
                        type="email"
                        name="email"
                      />
                    </Field>
                  </div>
                  <Field label="项目类型 / PROJECT SCOPE" id="contact-type">
                    <select className={fieldClass} id="contact-type" name="type" defaultValue="design-system">
                      {scopes.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="项目简述与预算周期 / MESSAGE BRIEF" id="contact-message">
                    <textarea
                      className={`${fieldClass} resize-none`}
                      id="contact-message"
                      name="message"
                      placeholder="简要说明您的项目背景、交付期望时间或特别技术需求..."
                      required
                      rows="3"
                    />
                  </Field>
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-on-surface-variant font-label-code text-label-code">
                      <Icon name="bolt" className="text-primary text-[18px]" />
                      <span>即刻同步至工作流</span>
                    </div>
                    <button
                      className="px-6 py-3 rounded-xl bg-primary text-on-primary font-headline-sm text-headline-sm font-semibold hover:bg-primary-fixed transition-all flex items-center gap-2 shadow-lg shadow-primary-container/30 disabled:opacity-70"
                      type="submit"
                      disabled={status === "sending"}
                    >
                      <span>{status === "sending" ? "处理中..." : status === "sent" ? "已发送" : "发射信息"}</span>
                      <Icon
                        name={status === "sending" ? "refresh" : status === "sent" ? "check" : "send"}
                        className={`text-[18px] ${status === "sending" ? "animate-spin" : ""}`}
                      />
                    </button>
                  </div>
                </form>
              </div>
              {status === "sent" && (
                <div className="mt-4 p-4 rounded-xl bg-surface-container-high text-primary flex items-center gap-3">
                  <Icon name="check_circle" className="text-primary" />
                  <div className="flex flex-col">
                    <span className="font-label-code text-label-code font-bold">TRANSMISSION RECEIVED</span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      信息已投递，我将尽快通过邮件或微信与您取得联系！
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const fieldClass =
  "w-full bg-surface-container px-4 py-3 rounded-xl text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

function Field({ label, id, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-label-code text-label-code text-on-surface-variant" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Metric({ icon, iconClass, label, value, detail }) {
  return (
    <div className="rounded-2xl bg-surface-container p-5 flex flex-col justify-between shadow-lg">
      <div className="flex items-center justify-between text-on-surface-variant">
        <span className="font-label-code text-label-code">{label}</span>
        <Icon name={icon} className={`${iconClass} text-[18px]`} />
      </div>
      <div className="mt-4">
        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">{value}</span>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{detail}</p>
      </div>
    </div>
  );
}

function Principle({ icon, tone, title, body }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className={`flex items-center gap-2 ${tone} font-label-code text-label-code font-semibold`}>
        <Icon name={icon} className="text-[16px]" />
        <span>{title}</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{body}</p>
    </div>
  );
}

function Channel({ href, icon, iconClass, label, value, external = false }) {
  return (
    <a
      className="p-5 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-2 group shadow-lg"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <div
        className={`w-9 h-9 rounded-xl bg-surface-container-high ${iconClass} flex items-center justify-center group-hover:scale-110 transition-transform`}
      >
        <Icon name={icon} className="text-[20px]" />
      </div>
      <div className="flex flex-col mt-1">
        <span className="font-label-code text-label-code text-on-surface-variant">{label}</span>
        <span className="font-body-sm text-body-sm text-on-surface font-medium truncate">{value}</span>
      </div>
    </a>
  );
}
