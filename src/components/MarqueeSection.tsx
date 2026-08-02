const row1 = [
  "/assets/new_work1.jpg",
  "/assets/brand1.jpg",
  "/assets/video1.jpg",
  "/assets/thumb3.jpg",
];
const row2 = [
  "/assets/new_work2.png",
  "/assets/brand2.jpg",
  "/assets/thumb1.jpg",
  "/assets/thumb2.jpg",
];

function Row({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) {
  const tripled = [...images, ...images, ...images];
  return (
    <div className="overflow-hidden">
      <div
        className={
          "flex gap-3 w-max pl-3 " +
          (direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right")
        }
        style={{ willChange: "transform" }}
      >
        {tripled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-xl object-cover shrink-0"
            style={{ width: "300px", height: "190px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="pt-4 pb-10 space-y-3">
      <Row images={row1} direction="right" />
      <Row images={row2} direction="left" />
    </section>
  );
}
