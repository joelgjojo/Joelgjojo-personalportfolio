import FadeIn from "./FadeIn";
import { Palette, Film, Sparkles, Layout, Code } from "lucide-react";

const skills = [
  {
    num: "01",
    name: "Graphic Design",
    icon: Palette,
    desc: "High-contrast YouTube thumbnails, key art, and promotional visuals built to capture feed attention.",
    dark: false,
  },
  {
    num: "02",
    name: "Video Editing",
    icon: Film,
    desc: "4K edits with tight pacing, sound design, transitions, and cinematic color grading for creators.",
    dark: false,
  },
  {
    num: "03",
    name: "Branding",
    icon: Sparkles,
    desc: "Cohesive visual identities — marks, typography systems, overlay kits, and brand guidelines.",
    dark: false,
  },
  {
    num: "04",
    name: "UI/UX Design",
    icon: Layout,
    desc: "User-centered interface wireframes and sleek layouts built around intuitive product interaction.",
    dark: false,
  },
  {
    num: "05",
    name: "Web Development",
    icon: Code,
    desc: "Building and shipping real web apps using modern React, TypeScript, and Tailwind CSS fundamentals.",
    dark: true,
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#EDEBE6] rounded-t-[48px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <FadeIn y={40}>
        <h2
          className="text-ink font-display font-black uppercase text-center mb-4"
          style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
        >
          Skills & Capabilities
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-center text-ink/50 max-w-lg mx-auto mb-16 sm:mb-20">
          Core design specializations built over years of creator & brand work.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <FadeIn
            key={skill.num}
            delay={i * 0.1}
            y={30}
            className={
              i === skills.length - 1
                ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none"
                : ""
            }
          >
            <div
              className={`relative rounded-2xl p-6 sm:p-8 h-full transition-transform duration-300 hover:-translate-y-1 ${
                skill.dark
                  ? "bg-ink text-white shadow-2xl"
                  : "bg-white text-ink shadow-md shadow-black/5"
              }`}
            >
              {/* In Training badge for dark card */}
              {skill.dark && (
                <span className="absolute top-6 right-6 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-accent text-accent font-mono">
                  In Training
                </span>
              )}

              {/* Icon badge */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  skill.dark ? "bg-white/10" : "bg-[#F0EEEA]"
                }`}
              >
                <skill.icon
                  className={`w-5 h-5 ${
                    skill.dark ? "text-accent" : "text-ink/60"
                  }`}
                />
              </div>

              {/* Number + Title */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`font-mono text-xs ${
                    skill.dark ? "text-white/30" : "text-ink/25"
                  }`}
                >
                  {skill.num}
                </span>
                <h3
                  className={`font-display font-bold uppercase tracking-wide text-sm sm:text-base ${
                    skill.dark ? "text-white" : "text-ink"
                  }`}
                >
                  {skill.name}
                </h3>
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed ${
                  skill.dark ? "text-white/60" : "text-ink/50"
                }`}
              >
                {skill.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
