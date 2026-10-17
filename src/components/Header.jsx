import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGO } from "../data/site";
import { Icon } from "./Icon";

const links = [
  { to: "/", label: "首页", end: true },
  { to: "/projects", label: "作品" },
  { to: "/about", label: "关于我" },
];

const activeClass =
  "px-3.5 py-1.5 rounded-lg transition-all bg-surface-container-high text-on-surface font-medium border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] font-label-nav text-label-nav";
const idleClass =
  "font-label-nav text-label-nav text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 px-3.5 py-1.5 rounded-lg transition-all border border-transparent";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/75 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link
          className="flex items-center gap-space-sm group transition-opacity hover:opacity-90"
          to="/"
          onClick={() => setOpen(false)}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-1 rounded-full bg-primary-container/30 blur-sm group-hover:bg-primary-container/50 transition-all" />
            <img alt="GGGGJ logo" className="relative h-8 w-auto object-contain" src={LOGO} />
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
              GGGGJ
            </span>
            <span className="font-label-code text-label-code px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant border border-white/[0.06]">
              LAB
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-space-md">
          <nav className="hidden md:flex items-center p-1 rounded-xl bg-surface-container-lowest/60 border border-white/[0.04]">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? activeClass : idleClass)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/about"
            aria-label="关于我"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(94,106,210,0.35)]"
          >
            <Icon name="person" className="text-on-primary text-[18px]" />
          </Link>
          <button
            type="button"
            className="md:hidden w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center"
            aria-expanded={open}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} className="text-[18px]" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? activeClass : idleClass)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
