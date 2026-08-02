import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectShowcaseSection from "./components/ProjectShowcaseSection";
import StackedProjectCardsSection from "./components/StackedProjectCardsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="bg-ink" style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectShowcaseSection />
      <StackedProjectCardsSection />
      <ContactSection />
    </div>
  );
}
