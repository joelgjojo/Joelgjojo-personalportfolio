import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Skill = { name: string; status: "installed" | "learning"; pct: number };

const skills: Skill[] = [
  { name: "graphic_design", status: "installed", pct: 100 },
  { name: "video_editing", status: "installed", pct: 100 },
  { name: "brand_strategy", status: "installed", pct: 100 },
  { name: "ui_ux_design", status: "installed", pct: 100 },
  { name: "web_development", status: "learning", pct: 40 },
];

function SkillLine({ skill, show }: { skill: Skill; show: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setWidth(skill.pct), 150);
    return () => clearTimeout(t);
  }, [show, skill.pct]);

  const barLen = 24;
  const filled = Math.round((width / 100) * barLen);
  const bar = "█".repeat(filled) + "░".repeat(barLen - filled);

  return (
    <div className="flex items-center gap-3 text-[11px] sm:text-xs md:text-sm">
      <span className="text-white/40 w-5 text-right shrink-0">$</span>
      <span className="text-white/70 shrink-0">install</span>
      <span className="text-accent-light shrink-0 w-[110px] sm:w-[150px]">
        {skill.name}
      </span>
      <span className="text-white/30 hidden sm:inline">[{bar}]</span>
      <span
        className={
          skill.status === "installed"
            ? "text-emerald-400 shrink-0"
            : "text-accent shrink-0"
        }
      >
        {skill.status === "installed" ? "done" : `${width}%`}
      </span>
    </div>
  );
}

export default function Terminal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="w-full max-w-xl rounded-2xl border border-[#2A2A2A] bg-black/40 backdrop-blur-sm overflow-hidden font-mono"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="text-white/40 text-xs ml-2">joel@kollam:~</span>
      </div>
      <div className="p-4 sm:p-5 space-y-2">
        <p className="text-white/70 text-[11px] sm:text-xs md:text-sm">
          <span className="text-white/40">$</span> whoami
        </p>
        <p className="text-accent-light text-[11px] sm:text-xs md:text-sm pl-5">
          joel_g_jojo — designer, currently compiling web_dev
        </p>
        <div className="pt-2 space-y-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.3 }}
            >
              <SkillLine skill={s} show={inView} />
            </motion.div>
          ))}
        </div>
        <p className="text-white/50 text-[11px] sm:text-xs md:text-sm pt-3 terminal-cursor">
          <span className="text-white/40">$</span> _
        </p>
      </div>
    </div>
  );
}
