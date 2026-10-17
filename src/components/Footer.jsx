import { EMAIL, GITHUB } from "../data/site";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-space-md">
        <span className="font-label-code text-label-code text-on-surface-variant text-center">
          © 2025 GGGGJ. Engineered with Precision.
        </span>
        <div className="flex flex-wrap items-center justify-center gap-space-lg">
          <a
            className="font-label-nav text-label-nav text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            href={GITHUB}
            rel="noreferrer"
            target="_blank"
          >
            <Icon name="terminal" className="text-[16px]" />
            GitHub
          </a>
          <a
            className="font-label-nav text-label-nav text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            href={`mailto:${EMAIL}`}
          >
            <Icon name="alternate_email" className="text-[16px]" />
            Contact
          </a>
          <div className="flex items-center gap-1.5 font-label-code text-label-code text-on-surface-variant px-2.5 py-1 rounded-full bg-surface-container-low border border-white/[0.06]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>AVAILABLE FOR PROJECTS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
