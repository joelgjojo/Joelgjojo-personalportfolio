import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import { ContactButton } from "./Buttons";
import HeroBackgroundGlow from "./HeroBackgroundGlow";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-between relative overflow-hidden bg-[#0C0C0C]">
      {/* Ambient background glow */}
      <HeroBackgroundGlow />
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/assets/user.png"
              alt="Joel G Jojo"
              className="w-9 h-9 rounded-full object-cover border border-[#D7E2EA]/20 group-hover:border-[#B600A8] transition-colors"
            />
            <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] group-hover:text-white transition-colors">
              JOEL G JOJO
            </span>
          </a>
          <div className="flex items-center gap-4 sm:gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor="link"
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden px-6 md:px-10 relative z-0">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m joel
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait with Magnet effect */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
        data-cursor="image"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center"
        >
          <img
            src="/assets/portrait.png"
            alt="Joel G Jojo — Designer & Developer"
            className="w-full h-auto object-contain select-none"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[280px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a multidisciplinary designer & developer driven by crafting striking visual systems
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" href="mailto:joelgjojo008@gmail.com" />
        </FadeIn>
      </div>
    </section>
  );
}
