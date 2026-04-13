import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Types ──────────────────────────────────────────────────────────────────
type SectionType = {
  num: string;
  title: string[];
  caption: string;
  desc: string;
  image: string;
  alt: string;
  layout: "normal" | "reverse";
};

// ─── Data ───────────────────────────────────────────────────────────────────
const SECTIONS: SectionType[] = [
  {
    num: "01",
    title: ["Selection", "of Yarn"],
    caption: "The Foundation of Excellence",
    desc: "Only the finest natural fibres are hand-selected from the world's most renowned textile regions, where generations of tradition meet uncompromising purity.",
    image:  "/images/craft/yarn.jpg",
    alt: "Fine yarn bundles",
    layout: "normal",
  },
  {
    num: "02",
    title: ["Spinning &", "Preparation"],
    caption: "Precision at Every Turn",
    desc: "Masterfully spun at controlled tensions, each thread is prepared with meticulous care to ensure consistent strength, uniform texture, and lasting lustre.",
    image: "/images/craft/spinning.jpg",
    alt: "Thread spools on spinning machine",
    layout: "reverse",
  },
  {
    num: "03",
    title: ["Master", "Weaving"],
    caption: "The Art of Interlacing",
    desc: "Skilled artisans at century-old looms interweave every strand with practised precision, creating patterns of timeless beauty that carry the weight of craft.",
    image:"/images/craft/weaving.jpg",
    alt: "Traditional loom weaving",
    layout: "normal",
  },
  {
    num: "04",
    title: ["Processing &", "Finishing"],
    caption: "Refinement Beyond Compare",
    desc: "Each fabric undergoes meticulous finishing — from natural dyeing to precise pressing — elevating texture and ensuring softness that endures across seasons.",
    image:"/images/craft/finishing.jpg",
    alt: "Fabric dyeing and finishing process",
    layout: "reverse",
  },
  {
    num: "05",
    title: ["Quality", "Packaging"],
    caption: "A Promise, Delivered",
    desc: "Every fold, every wrap is an act of reverence — presenting our finest fabric as the gift it truly is, sealed with our heritage mark and a promise of excellence.",
    image:"/images/craft/packaging.jpg",
    alt: "Premium fabric packaging",
    layout: "normal",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function CraftsmanshipJourney() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRefs    = useRef<HTMLDivElement[]>([]);
  const imageRefs    = useRef<HTMLImageElement[]>([]);
  const dotRefs      = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const panels = panelRefs.current;
    if (!panels.length || !containerRef.current) return;

    const SEG  = 3;    // timeline units per section
    const FADE = 0.7;  // fade duration

    // ── Set initial states ──────────────────────────────────────────────────
    panels.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 40 });
    });
    imageRefs.current.forEach((img) => {
      if (img) gsap.set(img, { scale: 1 });
    });

    // ── Single scrub timeline ───────────────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        onUpdate: (self) => {
          const active = Math.min(
            SECTIONS.length - 1,
            Math.floor(self.progress * SECTIONS.length)
          );
          dotRefs.current.forEach((d, i) => {
            if (d) d.style.opacity = i === active ? "1" : "0.3";
          });
        },
      },
    });

    panels.forEach((panel, i) => {
      const img  = imageRefs.current[i];
      const start = i * SEG;

      // Fade in panel
      tl.fromTo(
        panel,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: FADE, ease: "power2.out" },
        start
      );

      // Image enter + hold scale
      if (img) {
        tl.fromTo(
          img,
          { scale: 1, opacity: 0.6 },
          { scale: 1.07, opacity: 1, duration: SEG, ease: "none" },
          start
        );
      }

      // Fade out (not last)
      if (i < SECTIONS.length - 1) {
        tl.to(
          panel,
          { opacity: 0, y: -28, duration: FADE, ease: "power2.in" },
          start + SEG - FADE
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* ── Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Outfit:wght@300;400;500&display=swap');
      `}</style>

      {/* ── Hero ── */}
      <div
        className="relative text-center bg-[#f5f0ea] px-6 pt-16 pb-20
                   sm:pt-20 sm:pb-24"
      >
        <p
          className="font-['Outfit'] text-[10px] font-medium tracking-[.34em]
                     text-[#b09878] uppercase mb-4 sm:mb-5"
        >
          Our Heritage &nbsp;·&nbsp; Est. 1947
        </p>

        <h2
          className="font-['Cormorant_Garamond'] font-light text-[#1c1510]
                     text-[40px] leading-[1.08] tracking-[-0.01em] mb-4
                     sm:text-[56px] md:text-[72px]"
        >
          The Art of<br />
          <em className="italic text-[#8b6b45]">Craftsmanship</em>
        </h2>

        <div className="w-12 h-px bg-[#c9b08a] mx-auto mb-4" />

        <p
          className="font-['Outfit'] text-[11px] font-light tracking-[.14em]
                     text-[#8b7a6a] sm:text-[13px]"
        >
          Five stages of perfection — one timeless fabric
        </p>

        {/* Vertical rule leading into scroll section */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-14
                     bg-gradient-to-b from-[#c9b08a] to-transparent"
        />
      </div>

      {/* ── Scroll + Sticky wrapper ── */}
      {/*
        Height breakdown:
          5 sections × 120vh = 600vh on mobile (shorter viewport travel per section)
          5 sections × 120vh = 600vh on desktop
        Kept uniform; adjust if you want more/less dwell time per section.
      */}
      <div
        ref={containerRef}
        className="relative bg-[#f5f0ea]"
        style={{ height: "600vh" }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* ── Progress dots ── */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20
                       flex gap-[7px] sm:bottom-7"
          >
            {SECTIONS.map((_, i) => (
              <span
                key={i}
                ref={(el) => { if (el) dotRefs.current[i] = el; }}
                className="block w-[5px] h-[5px] rounded-full bg-[#c9b08a]
                           transition-opacity duration-300"
                style={{ opacity: i === 0 ? 1 : 0.3 }}
              />
            ))}
          </div>

          {/* ── Panels ── */}
          {SECTIONS.map((sec, i) => (
            <div
              key={i}
              ref={(el) => { if (el) panelRefs.current[i] = el; }}
              className="absolute inset-0 flex items-center justify-center
                         px-5 py-6
                         sm:px-10 sm:py-8
                         md:px-16 md:py-10
                         lg:px-20"
            >
              {/*
                Layout grid:
                  Mobile  → single column, image on top
                  ≥ md    → two columns, alternating image/text side
              */}
              <div
                className={`
                  w-full max-w-5xl
                  grid grid-cols-1 gap-5
                  sm:gap-7
                  md:grid-cols-2 md:gap-12
                  lg:gap-20
                  items-center
                  ${sec.layout === "reverse" ? "md:[direction:rtl]" : ""}
                `}
              >
                {/* ── Image ── */}
                <div
                  className={`
                    relative overflow-hidden rounded-[1px]
                    [direction:ltr]
                    w-full
                    /* Mobile: landscape crop so image doesn't dominate */
                    aspect-[4/3]
                    /* Tablet: taller */
                    sm:aspect-[3/2]
                    /* Desktop: portrait */
                    md:aspect-[3/4]
                  `}
                >
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-[rgba(28,21,16,0.04)] z-10 pointer-events-none" />
                  <img
                    ref={(el) => { if (el) imageRefs.current[i] = el; }}
                    src={sec.image}
                    alt={sec.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover origin-center block"
                  />
                </div>

                {/* ── Text ── */}
                <div className="[direction:ltr] flex flex-col justify-center">

                  <p
                    className="font-['Outfit'] text-[10px] font-medium
                               tracking-[.32em] text-[#c4a87a] uppercase
                               mb-3 sm:mb-4 md:mb-6"
                  >
                    {sec.num} / 05
                  </p>

                  <h3
                    className="font-['Cormorant_Garamond'] font-light
                               text-[#1c1510] leading-[1.1] tracking-[-0.01em]
                               mb-2
                               text-[28px]
                               sm:text-[34px]
                               md:text-[38px]
                               lg:text-[48px]"
                  >
                    {sec.title[0]}<br />{sec.title[1]}
                  </h3>

                  <p
                    className="font-['Cormorant_Garamond'] italic font-light
                               text-[#8b6b45]
                               text-[14px] sm:text-[15px] md:text-[16px]
                               mb-4 sm:mb-5"
                  >
                    {sec.caption}
                  </p>

                  <div className="w-9 h-px bg-[#c9b08a] mb-4 sm:mb-5" />

                  <p
                    className="font-['Outfit'] font-light text-[#6e5f4f]
                               leading-[1.85]
                               text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px]
                               tracking-[.02em]
                               max-w-[340px]"
                  >
                    {sec.desc}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ── Footer ── */}
      <div className="bg-[#1c1510] px-6 py-16 text-center sm:py-20">
        <p
          className="font-['Outfit'] text-[10px] font-light tracking-[.36em]
                     text-[#c9b08a] uppercase mb-3"
        >
          Five centuries of mastery
        </p>
        <span
          className="font-['Cormorant_Garamond'] font-light italic
                     text-[#f5f0ea] text-[20px] sm:text-[24px]"
        >
          One thread at a time
        </span>
      </div>
    </>
  );
}
