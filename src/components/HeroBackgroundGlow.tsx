import { motion } from "framer-motion";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Orb = {
  color: string;
  size: number;
  blur: number;
  opacity: number;
  x: string;
  y: string;
  drift: { x: number[]; y: number[] };
  driftDuration: number;
  scaleDuration: number;
};

const orbs: Orb[] = [
  {
    // Top-right warm orange — halo behind portrait head
    color: "#FFA53E",
    size: 550,
    blur: 110,
    opacity: 0.15,
    x: "60%",
    y: "10%",
    drift: { x: [0, 40, -20, 0], y: [0, -30, 20, 0] },
    driftDuration: 20,
    scaleDuration: 22,
  },
  {
    // Bottom-left purple — near the tagline
    color: "#7621B0",
    size: 420,
    blur: 100,
    opacity: 0.14,
    x: "5%",
    y: "65%",
    drift: { x: [0, 30, -15, 0], y: [0, 25, -20, 0] },
    driftDuration: 18,
    scaleDuration: 24,
  },
  {
    // Center-back faint magenta glow
    color: "#B600A8",
    size: 480,
    blur: 120,
    opacity: 0.12,
    x: "35%",
    y: "40%",
    drift: { x: [0, -25, 35, 0], y: [0, 20, -30, 0] },
    driftDuration: 24,
    scaleDuration: 20,
  },
];

export default function HeroBackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            opacity: orb.opacity,
            filter: `blur(${orb.blur}px)`,
            willChange: "transform",
          }}
          animate={
            prefersReduced
              ? {}
              : {
                  x: orb.drift.x,
                  y: orb.drift.y,
                  scale: [0.95, 1.05, 0.95],
                }
          }
          transition={
            prefersReduced
              ? undefined
              : {
                  x: {
                    duration: orb.driftDuration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  y: {
                    duration: orb.driftDuration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: orb.scaleDuration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }
          }
        />
      ))}
    </div>
  );
}
