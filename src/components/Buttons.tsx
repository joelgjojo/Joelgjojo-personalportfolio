export function ContactButton({ label = "Let's Talk" }: { label?: string }) {
  return (
    <a
      href="#contact"
      className="inline-flex items-center justify-center rounded-full text-ink font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-300 hover:scale-105"
      style={{
        background: "linear-gradient(90deg, #FF7A32 0%, #FFB347 100%)",
        boxShadow: "0px 4px 20px rgba(255, 122, 50, 0.35)",
      }}
    >
      {label}
    </a>
  );
}

export function GhostButton({
  label,
  href = "#",
}: {
  label: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border-2 border-bone/40 text-bone font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors duration-300 hover:bg-bone/10 whitespace-nowrap"
    >
      {label}
    </a>
  );
}
