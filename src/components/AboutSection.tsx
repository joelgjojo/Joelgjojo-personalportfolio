import FadeIn from "./FadeIn";
import Terminal from "./Terminal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 gap-12 sm:gap-16"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-display font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(2.75rem, 11vw, 8rem)" }}
        >
          About
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl w-full items-center">
        <FadeIn delay={0.1} x={-40} y={0}>
          <div className="space-y-5">
            <p
              className="text-white/85 font-light leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              I'm Joel — a multidisciplinary designer and creator based in
              Kollam, Kerala. My work spans{" "}
              <span className="accent-gradient-text font-medium">
                graphic design, video editing, branding, UI/UX design
              </span>
              , and{" "}
              <span className="accent-gradient-text font-medium">
                web development
              </span>{" "}
              (currently in active training).
            </p>

            <p
              className="text-white/85 font-light leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              I run a small independent creative studio called{" "}
              <a
                href="https://vyqo-dsgn.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="accent-gradient-text font-medium hover:opacity-80 transition-opacity"
              >
                VYQO DSGN
              </a>
              , crafting high-impact visual identities, motion edits, and UI
              layouts for creators and tech brands.
            </p>

            <p className="text-[#A0A0A0] font-light leading-relaxed text-sm">
              Currently pursuing my Computer Science degree to bridge clean
              design with frontend code fundamentals. This site serves as a
              live playground for my work.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full text-ink font-semibold uppercase tracking-widest px-8 py-3.5 text-sm transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(135deg, #FFA53E 0%, #FF7A1A 100%)",
                  boxShadow: "0 4px 24px rgba(255, 122, 26, 0.3)",
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} x={40} y={0} className="flex justify-center">
          <Terminal />
        </FadeIn>
      </div>
    </section>
  );
}
