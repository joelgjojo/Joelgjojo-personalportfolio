import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import FadeIn from "./FadeIn";
import { LiveProjectButton } from "./Buttons";

type Project = {
  num: string;
  category: string;
  name: string;
  link: string;
  col1: [string, string];
  col2: string;
};

const projects: Project[] = [
  {
    num: "01",
    category: "Web & Brand Identity",
    name: "VYQO DSGN Studio",
    link: "https://vyqo-dsgn.vercel.app",
    col1: ["/assets/vyqo_work.png", "/assets/brand1.jpg"],
    col2: "/assets/brand2.jpg",
  },
  {
    num: "02",
    category: "Graphics & Motion",
    name: "Creator Key Art & Edits",
    link: "https://www.instagram.com/joelgjojo/",
    col1: ["/assets/new_work1.jpg", "/assets/thumb1.jpg"],
    col2: "/assets/video1.jpg",
  },
  {
    num: "03",
    category: "UI/UX & Web Dev",
    name: "Bro Barber & Digital Tools",
    link: "https://github.com/joelgjojo",
    col1: ["/assets/bro_barber_hero.png", "/assets/vyqo_logo_card.png"],
    col2: "/assets/vyqo_web_solutions.png",
  },
];

function Card({
  project,
  index,
  totalCards,
  progress,
}: {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const rangeStart = index / totalCards;
  const rangeEnd = (index + 1) / totalCards;
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);

  return (
    <div
      className="sticky top-24 md:top-32 h-[85vh] flex items-start"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 md:pb-8">
          <div className="flex items-center gap-4 md:gap-6">
            <span
              className="font-black text-[#0C0C0C] bg-[#D7E2EA] px-4 py-1 rounded-2xl leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 60px)" }}
            >
              {project.num}
            </span>
            <div>
              <p className="text-[#D7E2EA]/60 uppercase text-xs sm:text-sm tracking-widest font-light mb-1">
                {project.category}
              </p>
              <h3 className="text-[#D7E2EA] font-bold uppercase text-xl sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.link} />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4 w-[40%]">
            <img
              src={project.col1[0]}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1[1]}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%] flex">
            <img
              src={project.col2}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ minHeight: "280px" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-10"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto space-y-6">
        {projects.map((project, index) => (
          <Card
            key={project.num}
            project={project}
            index={index}
            totalCards={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
