import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import { ContactButton } from "./Buttons";

const contactLinks = [
  { label: "Email", href: "mailto:joelgjojo008@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/918943262406" },
  { label: "Instagram", href: "https://www.instagram.com/joelgjojo/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joelgjojo008/" },
  { label: "GitHub", href: "https://github.com/joelgjojo" },
  { label: "Studio (VYQO DSGN)", href: "https://vyqo-dsgn.vercel.app" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]"
    >
      {/* 4 Decorative 3D Images */}
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
        />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain"
        />
      </FadeIn>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-4xl text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <AnimatedText
            text="I'm Joel — a multidisciplinary designer and developer based in Kollam, Kerala. I run a small independent creative studio called VYQO DSGN, crafting high-impact visual identities, motion edits, and UI layouts for creators and tech brands. Currently pursuing my Computer Science degree to bridge design with clean code. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />

          <FadeIn delay={0.2} y={20} className="flex flex-col items-center gap-8">
            <ContactButton label="Get In Touch" href="mailto:joelgjojo008@gmail.com" />

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-[#D7E2EA]/70 font-mono pt-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors underline underline-offset-4 decoration-[#B600A8]/50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
