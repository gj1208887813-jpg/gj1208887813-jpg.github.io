import { useRef } from "react";

export function SpotlightCard({ className = "", children, glow = "rgba(94, 106, 210, 0.15)" }) {
  const layerRef = useRef(null);

  function onMouseMove(event) {
    const layer = layerRef.current;
    if (!layer) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    layer.style.background = `radial-gradient(400px circle at ${x}px ${y}px, ${glow}, transparent 70%)`;
  }

  return (
    <div className={`group relative ${className}`} onMouseMove={onMouseMove}>
      <div
        ref={layerRef}
        className="spotlight-layer pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}
