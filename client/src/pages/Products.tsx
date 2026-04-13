import { useEffect } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  :root {
    --ivory:  #F8F4EE;
    --ivory2: #EDE8DE;
    --gold:   #B8962E;
    --gold2:  #D4AF5A;
    --char:   #1A1614;
    --warm:   #5C4E42;
    --wl:     #8C7B6E;
  }

  .cfi { font-family: 'Jost', sans-serif; background: var(--ivory); color: var(--char); overflow-x: hidden; }
  .serif { font-family: 'Cormorant Garamond', serif !important; }

  /* ── Scroll reveal ── */
  .rv { opacity: 0; transform: translateY(52px); transition: opacity .95s cubic-bezier(.16,1,.3,1), transform .95s cubic-bezier(.16,1,.3,1); }
  .rv.vis { opacity: 1; transform: none; }
  .d1 { transition-delay: .1s; } .d2 { transition-delay: .2s; }
  .d3 { transition-delay: .3s; } .d4 { transition-delay: .4s; }
  .d5 { transition-delay: .5s; } .d6 { transition-delay: .6s; }

  /* ── Hero animations ── */
  @keyframes fup {
    from { opacity: 0; transform: translateY(64px); }
    to   { opacity: 1; transform: none; }
  }
  .ha1 { animation: fup 1.6s cubic-bezier(.16,1,.3,1) .25s both; }
  .ha2 { animation: fup 1.6s cubic-bezier(.16,1,.3,1) .55s both; }
  .ha3 { animation: fup 1.6s cubic-bezier(.16,1,.3,1) .85s both; }
  .ha4 { animation: fup 1.6s cubic-bezier(.16,1,.3,1) 1.15s both; }

  /* ── Nav ── */
  .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    padding: 28px 64px; display: flex; align-items: center; justify-content: space-between;
    transition: background .4s ease, padding .4s ease; }
  .nav.up { background: rgba(14,11,9,.96); backdrop-filter: blur(20px); padding: 16px 64px; }
  .nl { font-size: 10px; letter-spacing: .22em; text-transform: uppercase;
    color: rgba(255,255,255,.72); cursor: pointer; padding-bottom: 3px;
    position: relative; font-weight: 400; transition: color .3s; }
  .nl::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px;
    background: var(--gold2); transition: width .35s ease; }
  .nl:hover { color: white; }
  .nl:hover::after { width: 100%; }

  /* ── Category cards ── */
  .cc { position: relative; overflow: hidden; height: 70vh; min-height: 500px; cursor: pointer; }
  .cc img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
    transition: transform 1.3s cubic-bezier(.16,1,.3,1), filter .9s ease;
    filter: brightness(.72) saturate(.8); }
  .cc:hover img { transform: scale(1.09); filter: brightness(.55) saturate(1.05); }
  .cc-grad { position: absolute; inset: 0;
    background: linear-gradient(155deg, transparent 25%, rgba(14,11,9,.88) 100%); }
  .cc-body { position: absolute; bottom: 0; left: 0; right: 0; padding: 52px 64px; }
  .cc-desc { font-size: 13px; line-height: 1.95; color: rgba(255,255,255,.58); font-weight: 300;
    letter-spacing: .04em; max-width: 430px; margin-top: 14px;
    opacity: 0; transform: translateY(18px); transition: opacity .55s ease, transform .55s ease; }
  .cc:hover .cc-desc { opacity: 1; transform: none; }
  .cc-cta { display: inline-flex; align-items: center; gap: 16px; margin-top: 24px;
    color: var(--gold2); font-size: 10px; letter-spacing: .28em; text-transform: uppercase;
    opacity: 0; transform: translateX(-22px); transition: opacity .55s .1s ease, transform .55s .1s ease; }
  .cc:hover .cc-cta { opacity: 1; transform: none; }

  /* ── Ritual cards ── */
  .rc { background: white; padding: 44px 38px;
    transition: transform .65s cubic-bezier(.16,1,.3,1), box-shadow .65s ease; cursor: default; }
  .rc:hover { transform: translateY(-10px); box-shadow: 0 44px 88px rgba(0,0,0,.1); }

  /* ── Feature items ── */
  .fc { padding: 44px 38px; transition: background .35s ease, transform .35s ease; }
  .fc:hover { transform: translateY(-5px); }

  /* ── Gallery ── */
  .gi { overflow: hidden; }
  .gi img { width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 1s cubic-bezier(.16,1,.3,1), filter .8s ease;
    filter: brightness(.88) saturate(.85); }
  .gi:hover img { transform: scale(1.11); filter: brightness(1) saturate(1.05); }

  /* ── CTA button ── */
  .ctab { position: relative; overflow: hidden; border: 1px solid var(--gold);
    color: var(--gold); background: transparent; padding: 20px 64px;
    letter-spacing: .26em; font-size: 10.5px; text-transform: uppercase;
    cursor: pointer; transition: color .45s ease; font-family: 'Jost', sans-serif; font-weight: 400; }
  .ctab::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%;
    background: var(--gold); transition: left .5s cubic-bezier(.16,1,.3,1); }
  .ctab:hover::before { left: 0; }
  .ctab:hover { color: var(--char); }
  .ctab span { position: relative; z-index: 1; }

  /* ── Ghost btn ── */
  .ghostb { border: none; background: transparent; color: rgba(255,255,255,.5);
    padding: 20px 36px; font-size: 10.5px; letter-spacing: .22em; text-transform: uppercase;
    cursor: pointer; font-family: 'Jost', sans-serif; font-weight: 300;
    display: inline-flex; align-items: center; gap: 12px; transition: color .3s; }
  .ghostb:hover { color: rgba(255,255,255,.8); }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-thumb { background: var(--gold); }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .nav { padding: 18px 24px; }
    .nav.up { padding: 12px 24px; }
    .hide-d { display: none !important; }
    .cc { height: 56vh; min-height: 380px; }
    .cc-body { padding: 32px 28px; }
    .mob-stack { grid-template-columns: 1fr !important; }
    .mob-2col { grid-template-columns: repeat(2,1fr) !important; }
    .gal-grid { grid-template-columns: repeat(2,1fr) !important; grid-template-rows: auto !important; }
    .gal-span { grid-row: span 1 !important; }
    .brand-bar { justify-content: center !important; }
  }
  @media (max-width: 600px) {
    .cc { height: 50vh; min-height: 320px; }
    .mob-1col { grid-template-columns: 1fr !important; }
    .stat-row { flex-direction: column !important; gap: 24px !important; }
  }
`;

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */
const CATS = [
  {
    num: "01",
    title: "Shirting",
    tagline: "Everyday Refinement",
    desc: "Precision-woven cottons and poly-cotton blends delivering breathable comfort and crisp drape.",
    img: "/images/categories/shirting.jpg",
  },
  {
    num: "02",
    title: "Suiting",
    tagline: "Commanding Presence",
    desc: "Sophisticated suiting fabrics for the modern professional.",
    img: "/images/categories/suiting.jpg",
  },
  {
    num: "03",
    title: "Sheeting",
    tagline: "Restful Luxury",
    desc: "Soft and breathable fabrics for comfort and elegance.",
    img: "/images/categories/sheeting.jpg",
  },
  {
    num: "04",
    title: "Dhoties",
    tagline: "Timeless Tradition",
    desc: "Pure cotton dhoties rooted in Indian culture.",
    img: "/images/categories/dhoties.jpg",
  },
  {
    num: "05",
    title: "Ritual Fabrics",
    tagline: "Woven with Intention",
    desc: "Sacred textiles crafted for ceremonies and traditions.",
    img: "/images/categories/ritual.jpg",
  },
];

const RITUALS = [
  { faith: "Hindu", sub: "Sacred & Ceremonial", col: "#D4621A",
    desc: "From pristine dhotis to vibrant puja cloths — our Hindu ritual fabrics embody sanctity and generational tradition, crafted in sacred saffron, turmeric gold, and vermillion.",
    items: ["Dhoti", "Puja Cloth", "Angavastram", "Temple Saree"] },
  { faith: "Muslim", sub: "Pure & Pristine", col: "#2D6A4F",
    desc: "Immaculate white cottons and refined kurta fabrics reflecting purity and devotion. Our collection is crafted for Eid, Jumuah prayers, and every day of spiritual living.",
    items: ["Kurta Fabric", "Lungi", "Prayer White", "Janamaz"] },
  { faith: "Christian", sub: "Formal & Ceremonial", col: "#2C3E7A",
    desc: "Refined fabrics for baptisms, weddings, and sacred ceremonies. Our Christian collection balances quiet solemnity with dignified elegance in fine whites and formal tones.",
    items: ["Surplice Cloth", "Cassock Fabric", "Altar Linen", "Choir Fabric"] },
  { faith: "Buddhist", sub: "Tranquil & Traditional", col: "#B8740A",
    desc: "Warm saffron and meditative ochre textiles crafted for monastic traditions and lay practitioners — pure, natural, and imbued with the quiet dignity of the dharma.",
    items: ["Monk Robe Fabric", "Ochre Cotton", "Temple Cloth", "Meditation Wrap"] },
];

const FEATS = [
  { title: "Extraordinary Softness",
    text: "Ultra-fine yarn count delivers a feather-light touch against skin — every single wear.",
    icon: "M24 6 Q40 24 24 44 Q8 24 24 6Z M24 14 Q36 24 24 36 Q12 24 24 14Z" },
  { title: "Enduring Durability",
    text: "Multi-twist weaving techniques preserve fabric integrity through hundreds of washes.",
    icon: "M24 8 L40 12 L40 28 Q40 38 24 44 Q8 38 8 28 L8 12 Z M17 26 L22 31 L33 19" },
  { title: "Natural Breathability",
    text: "Open-weave architecture allows uninterrupted airflow for effortless all-day comfort.",
    icon: "M8 22 Q20 14 32 22 Q44 30 44 22 M8 30 Q20 22 32 30 Q44 38 44 30" },
  { title: "Colourfast Weaves",
    text: "Advanced dye processes lock in rich hues that resist fading, wash after wash.",
    icon: "M18 20 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0-16 0 M30 20 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0-16 0 M24 30 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0-16 0" },
  { title: "Premium Yarn Origin",
    text: "Sourced from the finest cotton belts and wool farms across India and the world.",
    icon: "M12 38 L24 10 L36 38 M16 30 L32 30" },
  { title: "Eco Conscious",
    text: "Sustainable sourcing and low-impact dye processes — fabric you can feel good wearing.",
    icon: "M24 40 Q10 28 10 18 A14 14 0 0 1 38 18 Q38 28 24 40Z M24 40 L24 26 M18 30 Q21 26 24 28" },
];
const GAL = [
  { src: "/images/gallery/fabric1.jpg", tall: true },
  { src: "/images/gallery/fabric2.jpg" },
  { src: "/images/gallery/fabric3.jpg" },
  { src: "/images/gallery/fabric4.jpg" },
  { src: "/images/gallery/fabric5.jpg" },
  { src: "/images/gallery/fabric6.jpg" },
];
/* ─────────────────────────────────────────────────────────────────────────────
   SMALL ATOMS
───────────────────────────────────────────────────────────────────────────── */
const G = "#B8962E";
const G2 = "#D4AF5A";
const C = "#1A1614";
const I = "#F8F4EE";
const W = "#5C4E42";
const WL = "#8C7B6E";

function GoldBar({ center }) {
  return <div style={{ width: 52, height: 1, background: G, margin: center ? "0 auto" : 0 }} />;
}

function SectionTag({ text, center }) {
  return (
    <div className="rv" style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: center ? "center" : "flex-start", marginBottom: 24 }}>
      <GoldBar />
      <span style={{ fontSize: 10, letterSpacing: ".4em", textTransform: "uppercase", color: G, fontWeight: 400 }}>{text}</span>
      {center && <GoldBar />}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="40" height="10" viewBox="0 0 40 10" fill="none">
      <line x1="0" y1="5" x2="36" y2="5" stroke="currentColor" strokeWidth="1"/>
      <polyline points="31,1 36,5 31,9" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  );
}

function FeatIcon({ d }) {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke={G} strokeWidth="1.2"
      style={{ display: "block", marginBottom: 28 }}>
      <path d={d}/>
    </svg>
  );
}



/* ─────────────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=90"
        alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.42) saturate(.75)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(14,11,9,.65) 0%, rgba(14,11,9,.15) 55%, rgba(184,150,46,.06) 100%)" }} />

      {/* Side accent lines */}
      <div className="hide-d" style={{ position: "absolute", top: "50%", left: 60, width: 1, height: 90, background: G, transform: "translateY(-50%)", opacity: .45 }} />
      <div className="hide-d" style={{ position: "absolute", top: "50%", right: 60, width: 1, height: 90, background: G, transform: "translateY(-50%)", opacity: .45 }} />

      <div style={{
  position: "relative",
  textAlign: "center",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px"
}}>
        <div className="ha1" style={{ fontSize: 10, letterSpacing: ".55em", textTransform: "uppercase", color: G2, marginBottom: 36, fontWeight: 300 }}>
          ✦ &nbsp; Centuary Fab  &nbsp; ✦
        </div>
        <h1 className="serif ha2" style={{ fontSize: "clamp(48px, 9vw, 118px)", fontWeight: 300, color: "white", lineHeight: 1.04, letterSpacing: "-.01em", marginBottom: 0 }}>
          Premium Shirting<br/>
          <em style={{ fontStyle: "italic", fontWeight: 300 }}>&amp; Suiting Fabrics</em>
        </h1>
        <div className="ha3" style={{ width: 64, height: 1, background: G, margin: "36px auto" }} />
        <p className="ha3" style={{ fontSize: 14.5, letterSpacing: ".09em", color: "rgba(255,255,255,.6)", fontWeight: 300, maxWidth: 520, margin: "0 auto 52px", lineHeight: 2 }}>
          Woven with mastery since 1985. Fabrics that drape beautifully,<br className="hide-d" /> endure gracefully, and honour every occasion.
        </p>
        <div className="ha4" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
          <button className="ctab"><span>Explore Collections</span></button>
          <button className="ghostb">
            <div style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(255,255,255,.28)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9" fill="white"/></svg>
            </div>
            <span>Our Story</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 44, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 9, letterSpacing: ".4em", textTransform: "uppercase", color: "rgba(255,255,255,.38)", fontWeight: 300 }}>Scroll</div>
        <div style={{ width: 1, height: 52, background: "linear-gradient(to bottom, rgba(255,255,255,.38), transparent)" }} />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   BRAND BAR
───────────────────────────────────────────────────────────────────────────── */
function BrandBar() {
  const items = ["35+ Years of Mastery", "ISO Certified Quality", "Pan India Distribution", "Wholesale & Retail"];
  return (
    <div className="brand-bar" style={{ background: C, padding: "26px 60px", display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
      {items.map((t, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 4, height: 4, background: G, borderRadius: "50%", flexShrink: 0 }} />
          <span style={{ fontSize: 10.5, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", fontWeight: 300 }}>{t}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ABOUT / INTRO
───────────────────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,6vw,80px)" }}>
      <div className="mob-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        {/* Text */}
        <div>
          <SectionTag text="Our Heritage" />
          <h2 className="serif rv d1" style={{ fontSize: "clamp(34px,4vw,56px)", fontWeight: 400, lineHeight: 1.14, marginBottom: 28, color: C }}>
            Fabric Born From<br/><em style={{ fontStyle: "italic" }}>Passion &amp; Precision</em>
          </h2>
          <p className="rv d2" style={{ fontSize: 14, lineHeight: 2.05, color: W, fontWeight: 300, marginBottom: 20, maxWidth: 480 }}>
            For over three decades, Centuary Fab India has stood at the forefront of India's textile tradition — weaving together heritage craftsmanship with modern innovation.
          </p>
          <p className="rv d3" style={{ fontSize: 14, lineHeight: 2.05, color: W, fontWeight: 300, maxWidth: 480 }}>
            Every thread tells a story. Every weave carries intention. From loom to wardrobe, we ensure excellence is stitched into every centimetre of every cloth we produce.
          </p>
          <div className="rv d4 stat-row" style={{ marginTop: 48, display: "flex", gap: 48 }}>
            {[["35+", "Years Active"], ["500+", "Fabric Variants"], ["10K+", "Happy Clients"]].map(([n, l]) => (
              <div key={l}>
                <div className="serif" style={{ fontSize: 44, fontWeight: 400, color: G, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 9.5, letterSpacing: ".28em", textTransform: "uppercase", color: WL, fontWeight: 300, marginTop: 10 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="rv d2" style={{ position: "relative" }}>
          <div style={{ overflow: "hidden", height: 520 }}>
            <img
  src="/images/about-fabric.jpg"
  alt="Fine fabric"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  }}
/>
          </div>
          <div style={{ position: "absolute", top: -18, right: -18, width: "55%", height: "55%", border: `1px solid ${G}`, zIndex: -1, opacity: .35 }} />
          <div style={{ position: "absolute", bottom: -18, left: -18, width: "40%", height: "40%", border: `1px solid ${G}`, zIndex: -1, opacity: .22 }} />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CATEGORIES
───────────────────────────────────────────────────────────────────────────── */
function Categories() {
  return (
    <section style={{ paddingBottom: "clamp(60px,8vw,100px)" }}>
      <div style={{ padding: "0 clamp(24px,8vw,120px)", marginBottom: 56 }}>
        <SectionTag text="Our Collections" />
        <h2 className="serif rv d1" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, color: C, lineHeight: 1.15, maxWidth: 540 }}>
          Crafted for Every<br/><em style={{ fontStyle: "italic" }}>Occasion &amp; Identity</em>
        </h2>
      </div>

      {CATS.map((cat, i) => (
        <div key={cat.num} className="cc rv" style={{ marginBottom: 4 }}>
          <img src={cat.img} alt={cat.title} loading="lazy" />
          <div className="cc-grad" />
          <div className="cc-body">
            <div style={{ fontSize: 10, letterSpacing: ".35em", color: G2, textTransform: "uppercase", marginBottom: 12, fontWeight: 300 }}>{cat.num}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
              <h3 className="serif" style={{ fontSize: "clamp(40px,5.5vw,74px)", fontWeight: 300, color: "white", lineHeight: 1 }}>
                {cat.title}
              </h3>
              <span style={{ fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: G2, fontWeight: 300 }}>{cat.tagline}</span>
            </div>
            <p className="cc-desc">{cat.desc}</p>
            <div className="cc-cta">
              <span>Explore</span>
              <Arrow />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   RITUAL FABRICS
───────────────────────────────────────────────────────────────────────────── */
function RitualFabrics() {
  return (
    <section style={{ background: C, padding: "clamp(80px,10vw,140px) clamp(24px,8vw,120px)" }}>
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <SectionTag text="Sacred Collections" center />
        <h2 className="serif rv d1" style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 400, color: "white", lineHeight: 1.18, marginBottom: 24 }}>
          Ritual Fabrics
        </h2>
        <p className="rv d2" style={{ fontSize: 14, color: "rgba(255,255,255,.46)", fontWeight: 300, maxWidth: 580, margin: "0 auto", lineHeight: 2, letterSpacing: ".04em" }}>
          Every faith has its fabric. Every ceremony, its cloth. We honour the diversity of India's spiritual traditions with textiles crafted for sacred moments.
        </p>
      </div>

      <div className="mob-2col mob-1col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>
        {RITUALS.map((r, i) => (
          <div key={r.faith} className={`rc rv d${i + 1}`}>
            <div style={{ width: 40, height: 2, background: r.col, marginBottom: 30 }} />
            <div style={{ fontSize: 9.5, letterSpacing: ".38em", textTransform: "uppercase", color: r.col, marginBottom: 10, fontWeight: 300 }}>{r.sub}</div>
            <h3 className="serif" style={{ fontSize: 30, fontWeight: 500, color: C, marginBottom: 18 }}>{r.faith}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.92, color: W, fontWeight: 300, marginBottom: 28 }}>{r.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {r.items.map(item => (
                <span key={item} style={{ fontSize: 9.5, letterSpacing: ".16em", padding: "5px 12px", border: `1px solid ${r.col}`, color: r.col, textTransform: "uppercase", fontWeight: 300 }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FABRIC DETAILS / FEATURES
───────────────────────────────────────────────────────────────────────────── */
function FabricDetails() {
  return (
    <section style={{ padding: "clamp(80px,10vw,140px) clamp(24px,8vw,120px)" }}>
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <SectionTag text="Why Choose Us" center />
        <h2 className="serif rv d1" style={{ fontSize: "clamp(34px,4vw,54px)", fontWeight: 400, color: C, lineHeight: 1.18 }}>
          The Centuary Difference
        </h2>
      </div>

      <div className="mob-2col mob-1col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
        {FEATS.map((f, i) => (
          <div key={f.title} className={`fc rv d${(i % 3) + 1}`}
            style={{ background: i % 2 === 0 ? I : "white" }}
            onMouseEnter={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.transform = "translateY(-5px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? I : "white"; e.currentTarget.style.transform = ""; }}>
            <FeatIcon d={f.icon} />
            <h4 className="serif" style={{ fontSize: 21, fontWeight: 500, color: C, marginBottom: 10 }}>{f.title}</h4>
            <p style={{ fontSize: 13, color: W, lineHeight: 1.88, fontWeight: 300 }}>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────────────────────────────────────── */
function Gallery() {
  return (
    <section style={{ padding: "0 clamp(24px,8vw,120px) clamp(80px,10vw,140px)" }}>
      <div style={{ marginBottom: 56 }}>
        <SectionTag text="Fabric Gallery" />
        <h2 className="serif rv d1" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, color: C }}>
          In Close Detail
        </h2>
      </div>

      <div className="gal-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(2,300px)", gap: 4 }}>
        {GAL.map((g, i) => (
          <div key={i} className={`gi rv d${(i % 3) + 1} ${g.tall ? "gal-span" : ""}`}
            style={{ gridRow: g.tall ? "span 2" : "span 1" }}>
            <img src={g.src} alt={`Fabric ${i + 1}`} loading="lazy"
              style={{ height: "100%" }} />
          </div>
        ))}
      </div>
    </section>
  );
}





/* ─────────────────────────────────────────────────────────────────────────────
   DIVIDER
───────────────────────────────────────────────────────────────────────────── */
function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "0 clamp(24px,8vw,120px)", opacity: .55 }}>
      <div style={{ flex: 1, height: 1, background: "#E0D8CC" }} />
      <div className="serif" style={{ fontSize: 16, color: G }}>✦</div>
      <div style={{ flex: 1, height: 1, background: "#E0D8CC" }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────────────────────────── */
export default function CentuaryFab() {
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = CSS;
    document.head.appendChild(styleEl);

    let observer;
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".rv");
      observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("vis");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);
      els.forEach(el => observer.observe(el));
    }, 200);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      try { document.head.removeChild(styleEl); } catch (_) {}
    };
  }, []);

 return (
  <div className="cfi">

    <Hero />
    <BrandBar />
    <About />
    <Divider />
    <Categories />
    <RitualFabrics />
    <FabricDetails />
    <Gallery />

  </div>
);
}