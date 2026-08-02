import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import FadeIn from "./FadeIn";

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "work", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
        style={{
          scaleX,
          background: "linear-gradient(135deg, #FFA53E 0%, #FF7A1A 100%)",
        }}
      />

      <FadeIn delay={0} y={-20}>
        <nav className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-10 py-4 md:py-5 bg-ink/90 backdrop-blur-md">
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src="/assets/user.png"
              alt="Joel G Jojo"
              className="w-9 h-9 rounded-full object-cover border border-white/10 group-hover:border-accent transition-colors duration-300"
            />
            <span className="text-[#D7D7D7] font-display font-semibold tracking-wide text-sm md:text-base uppercase group-hover:text-accent transition-colors duration-200">
              JOEL G JOJO
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-6 md:gap-10">
            {links.map((l) => {
              const isActive = activeSection === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`relative py-1 text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-200 ${
                    isActive ? "text-accent font-semibold" : "text-[#D7D7D7] hover:opacity-70"
                  }`}
                >
                  {l.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #FFA53E 0%, #FF7A1A 100%)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="sm:hidden text-[#D7D7D7] uppercase text-sm tracking-wider hover:text-accent transition-colors"
          >
            Menu
          </a>
        </nav>
      </FadeIn>
    </>
  );
}
