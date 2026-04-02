import SEOHead from "../components/SEOHead";

const milestones = [
  {
    year: "1966",
    title: "The Foundation",
    description:
      "Established as a textile trading venture by the G.K. Jain family, building a legacy rooted in integrity and craftsmanship.",
  },
  {
    year: "1990s",
    title: "Erode Expansion",
    description:
      "Moved operations to Erode — India's foremost textile hub — scaling distribution and forging industry partnerships.",
  },
  {
    year: "1995",
    title: "Centuary Processing Mills",
    description:
      "Launched our in-house processing unit to achieve end-to-end fabric processing with uncompromising quality control.",
  },
  {
    year: "2004",
    title: "Corporate Restructuring",
    description:
      "Underwent structured corporate expansion, modernising infrastructure and systems for sustainable scalability.",
  },
  {
    year: "2021",
    title: "Centuary Fab Launch",
    description:
      "Inaugurated Centuary Fab India Private Limited — our premium manufacturing division for the modern textile era.",
  },
];

const values = [
  {
    title: "Quality",
    desc: "Every thread, every weave — held to a standard that exceeds expectation.",
  },
  {
    title: "Integrity",
    desc: "Five decades of relationships built on transparency and trust.",
  },
  {
    title: "Innovation",
    desc: "Blending heritage techniques with forward-looking textile science.",
  },
  {
    title: "Customer Focus",
    desc: "Fabric solutions tailored to the exact needs of each partner.",
  },
  {
    title: "Sustainability",
    desc: "Responsible sourcing and eco-conscious processing at every stage.",
  },
  {
    title: "Legacy",
    desc: "A family tradition of excellence, carried forward with pride.",
  },
];

export default function About({ navigate }) {
  return (
    <>
      <SEOHead
        title="About Centuary Fab – Textile Company in Erode Since 1966 | G.K. Jain Group"
        description="Centuary Fab India Private Limited is a leading textile company in Erode under the G.K. Jain Group. Since 1966, we manufacture premium cotton fabrics and linen fabrics across India."
        keywords="textile company in Erode, cotton fabric manufacturer India, linen fabrics, G.K. Jain Group, Centuary Fab, fabric manufacturer Erode Tamil Nadu"
        canonical="https://www.centuaryfab.com/about"
      />

      <main className="bg-[#F8F4EF] min-h-screen">

        {/* ── HERO ── */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 59px, #1C1C1C 59px, #1C1C1C 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, #1C1C1C 59px, #1C1C1C 60px)",
            }}
          />
          <div className="max-w-5xl mx-auto relative">
            <p className="text-[#B8935A] text-[10px] tracking-[0.4em] uppercase mb-6">
              G.K. Jain Group · Est. 1966
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-[#1C1C1C] leading-[1.05] mb-8 max-w-3xl">
              A Heritage of<br />
              <em className="not-italic text-[#B8935A]">Textile</em> Excellence
            </h1>
            <p className="text-[#6A6260] text-lg max-w-xl leading-relaxed">
              Over five decades of craftsmanship, trust, and innovation —
              woven into every fabric we produce from Erode, India's textile capital.
            </p>
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <section className="bg-[#1C1C1C] py-12">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["₹300M+", "Annual Turnover"],
              ["200+", "Fabric Variants"],
              ["58+", "Years of Legacy"],
              ["Pan India", "Distribution"],
            ].map(([val, label]) => (
              <div key={label}>
                <p className="font-serif text-3xl md:text-4xl text-white mb-1">{val}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8935A]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#B8935A] text-[10px] tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] mb-6 leading-snug">
              From Trading House to<br />Premium Manufacturer
            </h2>
            <div className="space-y-4 text-[#6A6260] leading-relaxed">
              <p>
                Centuary Fab India Private Limited traces its roots to 1966, when the
                G.K. Jain family established a modest textile trading business. What began
                as a local enterprise grew steadily through dedication to quality and
                an unwavering commitment to customer relationships.
              </p>
              <p>
                By the 1990s, operations had expanded to <strong className="text-[#1C1C1C] font-medium">Erode, Tamil Nadu</strong> —
                one of India's most significant textile manufacturing corridors. The
                establishment of Centuary Processing Mills in 1995 marked our transition
                from trader to manufacturer.
              </p>
              <p>
                Today, Centuary Fab delivers premium <strong className="text-[#1C1C1C] font-medium">cotton fabrics</strong>,{" "}
                <strong className="text-[#1C1C1C] font-medium">linen fabrics</strong>, and blended textiles to retailers,
                exporters, and garment manufacturers across India.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => navigate("cotton-fabrics-india")}
                className="text-[10px] tracking-[0.2em] uppercase bg-[#1C1C1C] text-white px-6 py-3 hover:bg-[#B8935A] transition-colors duration-300"
              >
                Our Fabrics
              </button>
              <button
                onClick={() => navigate("textile-company-erode")}
                className="text-[10px] tracking-[0.2em] uppercase border border-[#1C1C1C] text-[#1C1C1C] px-6 py-3 hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
              >
                Our Location
              </button>
            </div>
          </div>

          {/* Visual block */}
          <div className="relative">
            <div className="bg-[#E8DFD2] aspect-[4/5] rounded-sm overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Textile manufacturing at Centuary Fab's Erode facility — cotton fabric weaving"
                loading="lazy"
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-[200px]">
              <p className="font-serif text-4xl text-[#B8935A]">1966</p>
              <p className="text-[10px] tracking-widest uppercase text-[#9A9088] mt-1">
                Year Founded
              </p>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="bg-[#1C1C1C] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#B8935A] text-[10px] tracking-[0.3em] uppercase mb-4 text-center">
              Milestones
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16">
              Our Journey Through Time
            </h2>

            <div className="relative">
              {/* Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#333] md:-translate-x-px" />

              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <div
                    key={m.year}
                    className={`relative flex gap-8 md:gap-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#B8935A] -translate-x-1/2 mt-1.5 z-10" />

                    {/* Content */}
                    <div
                      className={`pl-12 md:pl-0 md:w-1/2 ${
                        i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                      }`}
                    >
                      <span className="text-[#B8935A] text-xs tracking-widest font-mono">
                        {m.year}
                      </span>
                      <h3 className="text-white font-serif text-xl mt-1 mb-2">
                        {m.title}
                      </h3>
                      <p className="text-[#7A7270] text-sm leading-relaxed">
                        {m.description}
                      </p>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION / MISSION ── */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
          <div className="bg-[#1C1C1C] p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#B8935A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative z-10">
              <p className="text-[#B8935A] group-hover:text-white text-[10px] tracking-[0.3em] uppercase mb-6 transition-colors duration-300">
                Vision
              </p>
              <h2 className="font-serif text-3xl text-white mb-4">
                Global Textile Leadership
              </h2>
              <p className="text-[#9A9088] group-hover:text-white leading-relaxed transition-colors duration-300">
                To be recognised as a global leader in premium textile manufacturing —
                setting benchmarks for quality, sustainable production, and innovation
                from the heart of India.
              </p>
            </div>
          </div>

          <div className="bg-[#EDE6DC] p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#1C1C1C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative z-10">
              <p className="text-[#B8935A] text-[10px] tracking-[0.3em] uppercase mb-6 group-hover:text-[#B8935A] transition-colors duration-300">
                Mission
              </p>
              <h2 className="font-serif text-3xl text-[#1C1C1C] group-hover:text-white mb-4 transition-colors duration-300">
                Excellence in Every Thread
              </h2>
              <p className="text-[#6A6260] group-hover:text-[#C8C0B6] leading-relaxed transition-colors duration-300">
                To deliver premium cotton fabrics, linen fabrics, and blended textiles
                with consistent quality — empowering our clients to build great
                products that stand the test of time.
              </p>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="bg-[#F0EAE1] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#B8935A] text-[10px] tracking-[0.3em] uppercase mb-4 text-center">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] text-center mb-14">
              Core Values
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#DDD5C8]">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-[#F0EAE1] hover:bg-[#1C1C1C] group p-10 transition-colors duration-300"
                >
                  <h3 className="font-serif text-xl text-[#1C1C1C] group-hover:text-[#B8935A] mb-3 transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-[#8A8279] group-hover:text-[#C8C0B6] text-sm leading-relaxed transition-colors duration-300">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 text-center bg-[#F8F4EF]">
          <p className="text-[#B8935A] text-[10px] tracking-[0.3em] uppercase mb-4">
            Ready to Partner?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] mb-6 max-w-xl mx-auto leading-snug">
            Discover India's Finest Fabric Collections
          </h2>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <button
              onClick={() => navigate("cotton-fabrics-india")}
              className="text-[10px] tracking-[0.2em] uppercase bg-[#1C1C1C] text-white px-8 py-4 hover:bg-[#B8935A] transition-colors duration-300"
            >
              Cotton Fabrics
            </button>
            <button
              onClick={() => navigate("linen-fabrics")}
              className="text-[10px] tracking-[0.2em] uppercase border border-[#1C1C1C] text-[#1C1C1C] px-8 py-4 hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
            >
              Linen Fabrics
            </button>
          </div>
        </section>

      </main>
    </>
  );
}
