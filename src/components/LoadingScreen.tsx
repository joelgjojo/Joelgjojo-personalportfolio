import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATUS_WORDS = ["compiling...", "rendering...", "ready"];
const TOTAL_DURATION = 800;
const FADE_OUT_DURATION = 200;
const STATUS_INTERVAL = 150;

export default function LoadingScreen() {
  const [show, setShow] = useState(() => {
    if (typeof window !== "undefined") {
      return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return true;
  });
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => setShow(false), TOTAL_DURATION);
    return () => clearTimeout(timer);
  }, [show]);

  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setStatusIndex((prev) =>
        prev < STATUS_WORDS.length - 1 ? prev + 1 : prev
      );
    }, STATUS_INTERVAL);

    return () => clearInterval(interval);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: FADE_OUT_DURATION / 1000,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0B0B]"
        >
          {/* Wordmark */}
          <h1
            className="font-black uppercase tracking-tight leading-none text-2xl sm:text-3xl md:text-4xl mb-6 select-none"
            style={{
              background: "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Joel G Jojo
          </h1>

          {/* Progress bar */}
          <div className="w-48 sm:w-56 h-[3px] bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #FFA53E 0%, #FF7A1A 100%)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: TOTAL_DURATION / 1000,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </div>

          {/* Status text */}
          <p
            className="text-xs tracking-widest text-white/40"
            style={{ fontFamily: "'JetBrains Mono', 'Kanit', monospace" }}
          >
            {STATUS_WORDS[statusIndex]}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
