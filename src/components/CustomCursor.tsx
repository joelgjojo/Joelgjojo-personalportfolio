import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type CursorMode = "default" | "link" | "image" | "text";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  // Raw position (dot — instant)
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  // Spring position (ring — lagging)
  const springConfig = prefersReduced
    ? { stiffness: 999, damping: 99 }
    : { stiffness: 150, damping: 15 };
  const ringX = useSpring(dotX, springConfig);
  const ringY = useSpring(dotY, springConfig);

  const resolveMode = useCallback((target: EventTarget | null): CursorMode => {
    let el = target as HTMLElement | null;
    while (el) {
      const attr = el.getAttribute("data-cursor");
      if (attr) return attr as CursorMode;
      // Auto-detect interactive elements
      const tag = el.tagName;
      if (tag === "A" || tag === "BUTTON" || el.getAttribute("role") === "button") return "link";
      if (tag === "IMG" && el.closest("[data-cursor='image']")) return "image";
      el = el.parentElement;
    }
    return "default";
  }, []);

  useEffect(() => {
    // Only activate on desktop
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    if (!mq.matches) return;

    setVisible(true);
    document.documentElement.style.cursor = "none";

    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setMode(resolveMode(e.target));
    };

    const handleOver = (e: MouseEvent) => setMode(resolveMode(e.target));
    const handleOut = () => setMode("default");

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mouseout", handleOut, { passive: true });

    const handleMqChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        setVisible(false);
        document.documentElement.style.cursor = "";
      } else {
        setVisible(true);
        document.documentElement.style.cursor = "none";
      }
    };
    mq.addEventListener("change", handleMqChange);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      mq.removeEventListener("change", handleMqChange);
    };
  }, [dotX, dotY, resolveMode]);

  if (!visible) return null;

  const ringSize =
    mode === "link"
      ? 60
      : mode === "image"
        ? 48
        : mode === "text"
          ? 24
          : 36;

  const ringBorderWidth =
    mode === "text" ? 1 : 1.5;

  const ringFill =
    mode === "link"
      ? "rgba(118, 33, 176, 0.12)"
      : "transparent";

  return (
    <>
      {/* Dot — instant tracking */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          zIndex: 9999,
          willChange: "transform",
        }}
      >
        <div
          className="rounded-full bg-white/90"
          style={{
            width: 8,
            height: 8,
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      {/* Ring — spring-lagged */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          zIndex: 9998,
          willChange: "transform",
        }}
      >
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            borderWidth: ringBorderWidth,
            backgroundColor: ringFill,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-full"
          style={{
            transform: "translate(-50%, -50%)",
            borderStyle: "solid",
            borderColor: "#FFA53E",
            boxShadow:
              mode === "link"
                ? "0 0 16px rgba(255, 165, 62, 0.25), 0 0 16px rgba(182, 0, 168, 0.15)"
                : mode === "image"
                  ? "0 0 12px rgba(118, 33, 176, 0.2)"
                  : "0 0 8px rgba(255, 122, 26, 0.12)",
            animation: prefersReduced
              ? "none"
              : "cursorHueShift 7s linear infinite",
          }}
        />
      </motion.div>

      {/* Hue-shift keyframes injected once */}
      <style>{`
        @keyframes cursorHueShift {
          0%   { border-color: #FFA53E; }
          33%  { border-color: #FF7A1A; }
          66%  { border-color: #B600A8; }
          100% { border-color: #FFA53E; }
        }
      `}</style>
    </>
  );
}
