import FadeIn from "./FadeIn";
import { Palette, Film, Sparkles, Code } from "lucide-react";
import Navbar from "./Navbar";

const skills = [
  {
    icon: Palette,
    name: "Graphic Design",
    desc: "Thumbnails & Identity",
    accent: false,
  },
  {
    icon: Film,
    name: "Video Editing",
    desc: "4K Motion & Edits",
    accent: false,
  },
  {
    icon: Sparkles,
    name: "Branding",
    desc: "Visual Systems",
    accent: false,
  },
  {
    icon: Code,
    name: "Web Dev",
    desc: "In Active Training",
    accent: true,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col hero-grid-bg relative"
    >
      <Navbar />

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 lg:px-16 gap-10 lg:gap-16 py-10 lg:py-0">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs uppercase tracking-widest font-medium">
                Available for Work & Projects
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="hero-heading font-display font-black uppercase tracking-tight leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              Joel G Jojo
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              className="text-[#D7D7D7] uppercase leading-snug max-w-xl mb-10 font-light"
              style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)" }}
            >
              Design, motion & brand work — with web development now in active
              training.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full text-ink font-semibold uppercase tracking-widest px-8 py-3.5 text-sm transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(135deg, #FFA53E 0%, #FF7A1A 100%)",
                  boxShadow: "0 4px 24px rgba(255, 122, 26, 0.3)",
                }}
              >
                Let's Talk
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-[#D7D7D7] text-[#D7D7D7] font-medium uppercase tracking-widest px-8 py-3.5 text-sm transition-all duration-300 hover:bg-white/5"
              >
                Explore Work
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column — Desktop Only */}
        <FadeIn delay={0.5} className="hidden lg:block flex-shrink-0">
          <div className="w-[420px] rounded-2xl border border-[#2A2A2A] bg-ink/60 backdrop-blur-sm overflow-hidden">
            {/* Top row */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A]">
              <span className="text-[#D7D7D7] text-xs uppercase tracking-wider font-medium">
                ✨ Multidisciplinary Visuals
              </span>
              <span className="text-xs text-[#A0A0A0] px-3 py-1 rounded-full border border-[#2A2A2A]">
                Kerala, IN
              </span>
            </div>

            {/* 2x2 Skill Grid */}
            <div className="grid grid-cols-2 gap-px bg-[#2A2A2A]">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-ink/90 px-5 py-5 flex flex-col gap-2"
                >
                  <skill.icon className="w-5 h-5 text-[#A0A0A0]" />
                  <span className="text-white font-semibold text-sm uppercase tracking-wide">
                    {skill.name}
                  </span>
                  <span
                    className={`text-xs ${
                      skill.accent ? "text-accent" : "text-[#A0A0A0]"
                    }`}
                  >
                    {skill.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#2A2A2A]">
              <span className="text-[#A0A0A0] text-xs uppercase tracking-wider">
                VYQO DSGN Studio
              </span>
              <span className="text-[#A0A0A0] text-xs uppercase tracking-wider">
                CS Undergrad
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between px-6 md:px-10 pb-6 md:pb-8">
        <span className="text-[#A0A0A0]/50 text-xs uppercase tracking-[0.25em] font-light">
          Scroll to Explore
        </span>
        <span className="text-[#A0A0A0]/50 text-xs uppercase tracking-[0.25em] font-light">
          2026 Edition
        </span>
      </div>
    </section>
  );
}
