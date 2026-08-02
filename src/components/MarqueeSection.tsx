import { useState, useEffect, useRef } from "react";

const realWorkImages = [
  "/assets/vyqo_work.png",
  "/assets/brand1.jpg",
  "/assets/new_work1.jpg",
  "/assets/thumb1.jpg",
  "/assets/video1.jpg",
  "/assets/brand2.jpg",
  "/assets/new_work2.png",
  "/assets/thumb2.jpg",
  "/assets/thumb3.jpg",
  "/assets/photo1.jpg",
  "/assets/photo2.jpg",
  "/assets/photo3.jpg",
];

const row1Images = [...realWorkImages.slice(0, 6), ...realWorkImages.slice(0, 6), ...realWorkImages.slice(0, 6)];
const row2Images = [...realWorkImages.slice(6), ...realWorkImages.slice(6), ...realWorkImages.slice(6)];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      {/* Row 1 */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-3 w-max"
          style={{ transform: row1Transform, willChange: "transform" }}
        >
          {row1Images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Joel G Jojo Work"
              loading="lazy"
              className="rounded-2xl object-cover shrink-0 w-[420px] h-[270px]"
            />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-3 w-max"
          style={{ transform: row2Transform, willChange: "transform" }}
        >
          {row2Images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Joel G Jojo Portfolio"
              loading="lazy"
              className="rounded-2xl object-cover shrink-0 w-[420px] h-[270px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
