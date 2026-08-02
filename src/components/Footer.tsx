import FadeIn from "./FadeIn";

const links = [
  { label: "Email", href: "mailto:joelgjojo008@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/918943262406" },
  { label: "Instagram", href: "https://www.instagram.com/joelgjojo/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joelgjojo008/" },
  { label: "GitHub", href: "https://github.com/joelgjojo" },
  { label: "Studio (VYQO DSGN)", href: "https://vyqo-dsgn.vercel.app" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 text-center border-t border-[#D7E2EA]/10">
      <FadeIn y={20}>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h3 className="hero-heading font-black uppercase text-2xl sm:text-4xl">
            Let&apos;s Build Something Together
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-[#D7E2EA]/80 font-mono">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-[#B600A8]/50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-[#D7E2EA]/30 text-xs font-mono pt-4">
            © {new Date().getFullYear()} Joel G Jojo. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
