/**
 * CompanyTimeline.jsx
 * Premium vertical timeline — G.K. Jain Group / Centuary Fab India
 *
 * Dependencies: React (hooks), Tailwind CSS
 * Fonts loaded via <link> in your index.html or _document:
 *   https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@300;400;500&display=swap
 *
 * Usage: <CompanyTimeline />
 */

import { useEffect, useRef, useState } from "react";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const MILESTONES = [
  {
    year: "1966",
    title: "The Foundation",
    description:
      "Shree Ghewarchand Kesarimal Jain established a textile trading business in Hariyar — the first thread in a fabric of lasting legacy, built on integrity and craft.",
    tag: "Origin",
  },
  {
    year: "1990s",
    title: "Strategic Expansion",
    description:
      "Operations were relocated to Erode, one of India's foremost textile hubs near Coimbatore, with the establishment of Dilip Kumar Mills — widening our regional presence.",
    tag: "Growth",
  },
  {
    year: "1995",
    title: "Centuary Processing Mills",
    description:
      "Under the leadership of Mr. Ghevarchand Dalchand Jain (Mahaveer Chopra), our dedicated processing mill was born — a pivotal leap into modern textile manufacturing.",
    tag: "Milestone",
  },
  {
    year: "2004",
    title: "Corporate Evolution",
    description:
      "Centuary Processing Mill (India) Pvt. Ltd. was incorporated, formalising decades of expertise into a structure primed for scalable, sustainable growth.",
    tag: "Structure",
  },
  {
    year: "2021",
    title: "Centuary Fab India",
    description:
      "Established in July, Centuary Fab India Private Limited represents the group's newest chapter — dedicated exclusively to weaving premium fabrics for the modern era.",
    tag: "Present",
  },
];

/* ─── CSS injected once ────────────────────────────────────────────────────── */

const STYLES = `
  .cfi-timeline-section {
    background: #FAF8F5;
    font-family: 'Jost', sans-serif;
  }
  .cfi-serif {
    font-family: 'Cormorant Garamond', Georgia, serif;
  }

  /* Scroll reveal */
  .cfi-reveal {
    opacity: 0;
    transform: translateY(36px);
    transition:
      opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
  }
  .cfi-reveal.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  /* Alternating slide directions on desktop */
  @media (min-width: 768px) {
    .cfi-reveal-left  { transform: translateX(-28px) translateY(0); }
    .cfi-reveal-right { transform: translateX(28px)  translateY(0); }
    .cfi-reveal-left.in-view,
    .cfi-reveal-right.in-view { transform: translateX(0) translateY(0); }
  }

  /* Timeline dot */
  .cfi-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #B5924C;
    background: #FAF8F5;
    transition: background 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
    position: relative;
    z-index: 2;
  }
  .cfi-dot.is-active {
    background: #B5924C;
    transform: scale(1.55);
    box-shadow: 0 0 0 5px rgba(181, 146, 76, 0.18);
  }

  /* Year */
  .cfi-year {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 300;
    font-style: italic;
    letter-spacing: 0.04em;
    color: #A8956A;
    line-height: 1;
    transition: color 0.4s ease;
  }
  .cfi-year.is-active {
    color: #B5924C;
  }

  /* Card */
  .cfi-card {
    position: relative;
  }
  .cfi-card::after {
    content: '';
    display: block;
    margin-top: 1.25rem;
    width: 2.5rem;
    height: 1px;
    background: #B5924C;
    transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .cfi-card:hover::after { width: 4rem; }

  /* Right-aligned card (even) */
  .cfi-card-right::after { margin-left: auto; }

  /* Tag pill */
  .cfi-tag {
    display: inline-block;
    font-size: 0.6rem;
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #B5924C;
    border: 1px solid #D4C5A9;
    padding: 3px 10px;
    border-radius: 2px;
    margin-bottom: 0.75rem;
  }

  /* Connector line (desktop) */
  .cfi-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, transparent 0%, #D4C5A9 8%, #D4C5A9 92%, transparent 100%);
    transform: translateX(-50%);
  }

  /* Mobile connector line */
  .cfi-line-mobile {
    position: absolute;
    left: 1.25rem;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, transparent 0%, #D4C5A9 5%, #D4C5A9 95%, transparent 100%);
  }

  /* Section header ornament */
  .cfi-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
    color: #B5924C;
    letter-spacing: 0.3em;
    font-size: 0.55rem;
    font-family: 'Jost', sans-serif;
    text-transform: uppercase;
  }
  .cfi-ornament::before,
  .cfi-ornament::after {
    content: '';
    height: 1px;
    width: 3.5rem;
    background: #D4C5A9;
  }
`;

/* ─── Sub-components ────────────────────────────────────────────────────────── */

function Dot({ isActive }) {
  return <div className={`cfi-dot${isActive ? " is-active" : ""}`} />;
}

function Card({ item, align = "left", isActive }) {
  const isRight = align === "right";
  return (
    <div className={`cfi-card${isRight ? " cfi-card-right" : ""}`}>
      <span className="cfi-tag">{item.tag}</span>
      <p className={`cfi-year text-5xl md:text-6xl${isActive ? " is-active" : ""}`}>
        {item.year}
      </p>
      <h3
        className="cfi-serif mt-3 mb-3"
        style={{
          fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
          fontWeight: 400,
          letterSpacing: "0.04em",
          color: "#1C1917",
          lineHeight: 1.25,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: "0.82rem",
          fontWeight: 300,
          lineHeight: 1.85,
          color: "#7C7166",
          maxWidth: "30ch",
        }}
        className={isRight ? "ml-auto" : ""}
      >
        {item.description}
      </p>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────────── */

export default function CompanyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(new Set());
  const rowRefs = useRef([]);

  /* Inject styles once */
  useEffect(() => {
    if (document.getElementById("cfi-timeline-styles")) return;
    const tag = document.createElement("style");
    tag.id = "cfi-timeline-styles";
    tag.textContent = STYLES;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);

  /* IntersectionObserver for reveal + active tracking */
  useEffect(() => {
    const observers = [];

    rowRefs.current.forEach((el, i) => {
      if (!el) return;

      const revealObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            /* Staggered delay via transitionDelay applied inline */
            setVisible((prev) => new Set([...prev, i]));
          }
        },
        { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
      );

      const activeObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.55 }
      );

      revealObs.observe(el);
      activeObs.observe(el);
      observers.push(revealObs, activeObs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="cfi-timeline-section py-24 px-5 sm:px-8 overflow-hidden">
      {/* ── Header ── */}
      <div className="text-center mb-24">
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#B5924C",
            marginBottom: "1.1rem",
          }}
        >
          G.K. Jain Group · Est. 1966
        </p>

        <h2
          className="cfi-serif"
          style={{
            fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
            fontWeight: 300,
            letterSpacing: "0.06em",
            color: "#1C1917",
            lineHeight: 1.15,
          }}
        >
          A Legacy Woven in Time
        </h2>

        <p
          style={{
            marginTop: "1rem",
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "0.85rem",
            color: "#7C7166",
            letterSpacing: "0.06em",
          }}
        >
          Five decades. Five defining chapters.
        </p>

        <div className="cfi-ornament">◆</div>
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-5xl mx-auto">
        {/* ── DESKTOP (md+) ── */}
        <div className="hidden md:block relative">
          <div className="cfi-line" aria-hidden="true" />

          <div className="flex flex-col gap-20">
            {MILESTONES.map((item, i) => {
              const isLeft = i % 2 === 0;
              const isActive = activeIndex === i;
              const isVisible = visible.has(i);
              const delay = `${i * 130}ms`;

              return (
                <div
                  key={item.year}
                  ref={(el) => (rowRefs.current[i] = el)}
                  className="relative grid grid-cols-2"
                  style={{ minHeight: "120px" }}
                >
                  {/* Left column */}
                  <div className="flex items-center justify-end pr-14">
                    {isLeft && (
                      <div
                        className={`cfi-reveal cfi-reveal-left text-right${isVisible ? " in-view" : ""}`}
                        style={{ transitionDelay: delay }}
                      >
                        <Card item={item} align="right" isActive={isActive} />
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ zIndex: 2 }}
                  >
                    <Dot isActive={isActive} />
                  </div>

                  {/* Right column */}
                  <div className="flex items-center justify-start pl-14">
                    {!isLeft && (
                      <div
                        className={`cfi-reveal cfi-reveal-right${isVisible ? " in-view" : ""}`}
                        style={{ transitionDelay: delay }}
                      >
                        <Card item={item} align="left" isActive={isActive} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE (< md) ── */}
        <div className="md:hidden relative pl-10">
          <div className="cfi-line-mobile" aria-hidden="true" />

          <div className="flex flex-col gap-14">
            {MILESTONES.map((item, i) => {
              const isActive = activeIndex === i;
              const isVisible = visible.has(i);
              const delay = `${i * 130}ms`;

              return (
                <div
                  key={item.year}
                  ref={(el) => {
                    /* Share refs with desktop — only set if not already set */
                    if (!rowRefs.current[i]) rowRefs.current[i] = el;
                  }}
                  className="relative"
                >
                  {/* Dot aligned to left line */}
                  <div
                    className="absolute -left-10 top-7"
                    style={{ transform: "translateX(calc(1.25rem - 6px))" }}
                  >
                    <Dot isActive={isActive} />
                  </div>

                  <div
                    className={`cfi-reveal${isVisible ? " in-view" : ""}`}
                    style={{ transitionDelay: delay }}
                  >
                    <Card item={item} align="left" isActive={isActive} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Footer ornament ── */}
      <div
        className="flex items-center justify-center gap-4 mt-24"
        style={{ opacity: 0.45 }}
      >
        <div style={{ height: "1px", width: "3rem", background: "#B5924C" }} />
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.8rem",
            color: "#A8956A",
            letterSpacing: "0.08em",
          }}
        >
          Threads of a timeless tradition
        </p>
        <div style={{ height: "1px", width: "3rem", background: "#B5924C" }} />
      </div>
    </section>
  );
}