import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionType = {
  num: string;
  title: string[];
  caption: string;
  desc: string;
  image: string;
  alt: string;
  layout: "normal" | "reverse";
};

const SECTIONS: SectionType[] = [
  {
    num: "01",
    title: ["Selection", "of Yarn"],
    caption: "The Foundation of Excellence",
    desc: "Only the finest natural fibres are hand-selected from the world's most renowned textile regions.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900",
    alt: "Yarn",
    layout: "normal",
  },
  {
    num: "02",
    title: ["Spinning &", "Preparation"],
    caption: "Precision at Every Turn",
    desc: "Threads are spun with controlled tension for strength and consistency.",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=900",
    alt: "Spinning",
    layout: "reverse",
  },
  {
    num: "03",
    title: ["Master", "Weaving"],
    caption: "The Art of Interlacing",
    desc: "Artisans weave every strand with precision and heritage craftsmanship.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900",
    alt: "Weaving",
    layout: "normal",
  },
  {
    num: "04",
    title: ["Processing &", "Finishing"],
    caption: "Refinement Beyond Compare",
    desc: "Fabric is dyed and finished for softness, durability, and elegance.",
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=900",
    alt: "Finishing",
    layout: "reverse",
  },
  {
    num: "05",
    title: ["Quality", "Packaging"],
    caption: "A Promise Delivered",
    desc: "Every fabric is carefully packed to preserve quality and presentation.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=900",
    alt: "Packaging",
    layout: "normal",
  },
];

export default function CraftsmanshipJourney() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const panels = panelRefs.current;

    // Initial state (with blur for depth)
    panels.forEach((el, i) => {
      gsap.set(el, {
        opacity: i === 0 ? 1 : 0,
        y: i === 0 ? 0 : 40,
        filter: i === 0 ? "blur(0px)" : "blur(6px)",
      });
    });

    imageRefs.current.forEach((img) => {
      gsap.set(img, { scale: 1 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000",
        scrub: 1.8,
      },
    });

    panels.forEach((panel, i) => {
      if (i === 0) return;

      // Fade out previous
      tl.to(
        panels[i - 1],
        {
          opacity: 0,
          y: -30,
          filter: "blur(6px)",
          duration: 1.2,
          ease: "power3.inOut",
        },
        i
      );

      // Fade in current
      tl.fromTo(
        panel,
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.inOut",
        },
        i
      );

      // Image parallax + zoom
      tl.to(
        imageRefs.current[i],
        {
          scale: 1.08,
          y: -20,
          duration: 2.5,
          ease: "none",
        },
        i
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[500vh] bg-[#f5f0ea]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {SECTIONS.map((sec, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) panelRefs.current[i] = el;
            }}
            className="absolute inset-0 flex items-center justify-center px-6 md:px-12"
          >
            <div className={`grid md:grid-cols-2 gap-10 max-w-6xl w-full ${sec.layout === "reverse" ? "md:flex-row-reverse" : ""}`}>

              <img
                ref={(el) => {
                  if (el) imageRefs.current[i] = el;
                }}
                src={sec.image}
                alt={sec.alt}
                className="w-full h-[400px] object-cover rounded"
              />

              <div className="flex flex-col justify-center space-y-4">
                <p className="text-xs tracking-widest text-gray-400">{sec.num} / 05</p>

                <h2 className="text-4xl font-semibold leading-tight">
                  {sec.title[0]} <br /> {sec.title[1]}
                </h2>

                <p className="italic text-gray-500">{sec.caption}</p>

                <p className="text-gray-600 leading-relaxed">
                  {sec.desc}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}