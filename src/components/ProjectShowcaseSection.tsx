import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

type Project = {
  title: string;
  category: "design" | "video" | "web";
  tag: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Neon eSports Branding",
    category: "design",
    tag: "Brand Identity",
    image: "/assets/brand1.jpg",
  },
  {
    title: "Creator Thumbnail Pack",
    category: "design",
    tag: "Graphic Design",
    image: "/assets/thumb1.jpg",
  },
  {
    title: "4K Cinematic B-Roll",
    category: "video",
    tag: "Video Editing",
    image: "/assets/video1.jpg",
  },
  {
    title: "VYQO Brand System",
    category: "design",
    tag: "Branding",
    image: "/assets/brand2.jpg",
  },
  {
    title: "Thumbnail Key Art",
    category: "design",
    tag: "Graphic Design",
    image: "/assets/thumb2.jpg",
  },
  {
    title: "Product Launch Edit",
    category: "video",
    tag: "Video Editing",
    image: "/assets/new_work1.jpg",
  },
  {
    title: "VYQO DSGN Studio",
    category: "web",
    tag: "Web Development",
    image: "/assets/vyqo_work.png",
  },
  {
    title: "Visual Identity Kit",
    category: "design",
    tag: "Branding",
    image: "/assets/thumb3.jpg",
  },
  {
    title: "Dashboard UI Concept",
    category: "web",
    tag: "Web Development",
    image: "/assets/new_work2.png",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Design", value: "design" },
  { label: "Video", value: "video" },
  { label: "Web", value: "web" },
];

export default function ProjectShowcaseSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className="bg-ink rounded-t-[48px] relative z-20 -mt-6 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <FadeIn y={30}>
            <h2
              className="hero-heading font-display font-black uppercase leading-none mb-3"
              style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
            >
              Project Showcase
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p className="text-[#A0A0A0] text-sm sm:text-base">
              Browse by creative discipline.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} y={20}>
          <div className="flex items-center gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                  activeFilter === f.value
                    ? "text-ink"
                    : "text-[#D7D7D7] border border-[#2A2A2A] hover:bg-white/5"
                }`}
                style={
                  activeFilter === f.value
                    ? {
                        background:
                          "linear-gradient(135deg, #FFA53E 0%, #FF7A1A 100%)",
                      }
                    : undefined
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover scrim overlay — always bottom-aligned with strong gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6">
        <span className="text-accent text-[10px] uppercase tracking-widest font-medium mb-1">
          {project.tag}
        </span>
        <h3 className="text-white font-bold text-base sm:text-lg mb-3">
          {project.title}
        </h3>
        <span className="text-white/70 text-xs uppercase tracking-wider font-medium group-hover:text-accent transition-colors">
          View Project →
        </span>
      </div>
    </div>
  );
}
