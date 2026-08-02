import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import FadeIn from "./FadeIn";

type Project = {
  num: string;
  name: string;
  category: string;
  status: "Shipped" | "In Progress";
  description: string;
  images: [string, string];
};

const projects: Project[] = [
  {
    num: "01",
    name: "Neon eSports",
    category: "Brand Identity",
    status: "Shipped",
    description:
      "Complete visual identity for a competitive eSports org — logo, color system, overlay kits, and social media templates designed to dominate feed presence.",
    images: ["/assets/brand1.jpg", "/assets/thumb3.jpg"],
  },
  {
    num: "02",
    name: "Creator Kit UI",
    category: "UI/UX & Branding",
    status: "Shipped",
    description:
      "A modular UI kit and brand system for content creators — thumbnail templates, stream overlays, and a cohesive identity built for scale across platforms.",
    images: ["/assets/new_work2.png", "/assets/brand2.jpg"],
  },
  {
    num: "03",
    name: "4K Cinematic B-Roll",
    category: "Video Editing",
    status: "Shipped",
    description:
      "High-end cinematic edits with tight pacing, custom transitions, sound design, and color grading for tech reviewers and lifestyle creators.",
    images: ["/assets/video1.jpg", "/assets/new_work1.jpg"],
  },
  {
    num: "04",
    name: "VYQO DSGN",
    category: "Web Development",
    status: "In Progress",
    description:
      "Studio portfolio for VYQO DSGN — built with React and Tailwind CSS as a live training project, showcasing brand work and creative services.",
    images: ["/assets/vyqo_work.png", "/assets/photo1.jpg"],
  },
];

function Card({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const rangeStart = index / total;
  const rangeEnd = (index + 1) / total;
  const targetScale = 1 - (total - 1 - index) * 0.025;
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);

  return (
    <div
      className="sticky flex items-start"
      style={{ top: `${100 + index * 12}px`, height: "auto" }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full rounded-[32px] sm:rounded-[40px] md:rounded-[48px] border-2 border-[#2A2A2A] bg-ink p-5 sm:p-6 md:p-8 origin-top"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-5 md:pb-6">
          <div className="flex items-center gap-4 md:gap-6">
            <span
              className="font-display font-black text-accent/20 select-none"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              {project.num}
            </span>
            <div>
              <p className="text-accent text-[10px] sm:text-xs uppercase tracking-widest font-medium mb-1">
                {project.category}
              </p>
              <h3
                className="text-white font-display font-bold uppercase"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <span
            className={`text-[10px] sm:text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border font-medium whitespace-nowrap ${
              project.status === "Shipped"
                ? "border-[#2A2A2A] text-[#A0A0A0]"
                : "border-accent text-accent"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed max-w-2xl mb-5 md:mb-6">
          {project.description}
        </p>

        {/* Images */}
        <div className="flex gap-3 sm:gap-4">
          <div className="w-1/2">
            <img
              src={project.images[0]}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-2xl sm:rounded-3xl"
              style={{ height: "clamp(160px, 22vw, 320px)" }}
            />
          </div>
          <div className="w-1/2">
            <img
              src={project.images[1]}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-2xl sm:rounded-3xl"
              style={{ height: "clamp(160px, 22vw, 320px)" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StackedProjectCardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="bg-ink px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative"
    >
      <FadeIn y={30}>
        <h2
          className="hero-heading font-display font-black uppercase text-center mb-16 sm:mb-20"
          style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
        >
          Selected Work
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto relative">
        {/* Progress rail — desktop only */}
        <div className="hidden lg:flex flex-col items-center gap-3 fixed right-8 xl:right-12 top-1/2 -translate-y-1/2 z-30">
          {projects.map((p) => (
            <ProgressDot
              key={p.num}
              num={p.num}
              index={projects.indexOf(p)}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <Card
              key={project.num}
              project={project}
              index={i}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressDot({
  num,
  index,
  total,
  progress,
}: {
  num: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const rangeStart = index / total;
  const rangeEnd = (index + 1) / total;
  const r0 = Math.max(0, rangeStart - 0.05);
  const r1 = rangeStart;
  const r2 = rangeEnd;
  const r3 = Math.min(1, rangeEnd + 0.05);

  const opacity = useTransform(
    progress,
    [r0, r1, r2, r3],
    [0.3, 1, 1, 0.3]
  );
  const scale = useTransform(
    progress,
    [r0, r1, r2, r3],
    [0.8, 1.2, 1.2, 0.8]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="flex items-center gap-2"
    >
      <div className="w-2.5 h-2.5 rounded-full bg-accent" />
      <span className="text-accent text-xs font-mono font-medium">{num}</span>
    </motion.div>
  );
}
