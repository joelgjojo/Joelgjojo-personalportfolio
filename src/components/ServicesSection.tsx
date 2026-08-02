import FadeIn from "./FadeIn";

const services = [
  {
    num: "01",
    name: "Graphic Design",
    desc: "High-contrast YouTube thumbnails, key art, and promotional visuals built to capture feed attention.",
  },
  {
    num: "02",
    name: "Video Editing",
    desc: "4K edits with tight pacing, sound design, transitions, and cinematic color grading for creators and brands.",
  },
  {
    num: "03",
    name: "Branding",
    desc: "Crafting cohesive visual identities -- from marks and typography systems to overlay kits and guidelines.",
  },
  {
    num: "04",
    name: "UI/UX Design",
    desc: "User-centered interface wireframes and sleek layouts built around intuitive digital product interaction.",
  },
  {
    num: "05",
    name: "Web Development",
    desc: "Building and shipping real web applications using modern React, TypeScript, and Tailwind CSS fundamentals.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[#0C0C0C]"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto divide-y divide-[#0C0C0C]/15">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-10 py-8 sm:py-10 md:py-12">
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.num}
              </span>

              {/* Name & Description */}
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C]/60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
