import { Link } from "wouter";
import { Factory, Zap, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";


import millsImage from "@/assets/company-centuary-mills.png";
import powerImage from "@/assets/company-sun-gracee.png";
import associatedImage from "@/assets/company-lalitha.png";



function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".gc-reveal, .gc-reveal-img");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const companies = [
  {
    id: "centuary-processing",
    image: millsImage,
    alt: "Centuary Processing Mills",
    icon: Factory,
    iconBg: "#f0ebe2",
    iconColor: "#8a6d3b",
    name: "Centuary Processing Mills",
    number: "01",
    description:
      "Established in 1995, Centuary Processing Mills is the backbone of our textile operations. Specializing in dyeing, printing, and finishing, we deliver premium quality fabrics with precision and consistency.",
    services: ["Fabric Dyeing", "Rotary Printing", "Premium Finishing", "Eco Processing"],
    serviceColor: "#8a6d3b",
    badge: "Textile Manufacturing",
    badgeColor: "#8a6d3b",
    reverse: false,
  },
  {
    id: "sun-gracee",
    image: powerImage,
    alt: "Sun Gracee Power Engineers",
    icon: Zap,
    iconBg: "#e8f0f8",
    iconColor: "#3a6fa8",
    name: "Sun Gracee Power Engineers",
    number: "02",
    description:
      "Sun Gracee Power Engineers plays a vital role in supporting advanced textile operations, contributing to linen fabric development, precision weaving, and refined dyeing processes — ensuring consistent quality across all stages of manufacturing.",
    services: ["Linen Fabric Engineering", "Advanced Dyeing & Color Development", "Textile Processing Systems", "Production Optimization"],
    serviceColor: "#3a6fa8",
    badge: "Textile Engineering Division",
    badgeColor: "#3a6fa8",
    reverse: true,
  },
  {
    id: "lalitha-associates",
    image: associatedImage,
    alt: "Lalitha and Associateds",
    icon: Building2,
    iconBg: "#f8f2e4",
    iconColor: "#a07830",
    name: "Lalitha and Associateds",
    number: "03",
    description:
      "Lalitha and Associateds serves as the strategic arm for business consulting, infrastructure development, and general trading — facilitating smooth operations across diverse ventures under the group's umbrella.",
    services: ["Consulting", "Infrastructure", "Trading", "Logistics"],
    serviceColor: "#a07830",
    badge: "Business Solutions",
    badgeColor: "#a07830",
    reverse: false,
  },
];

export default function GroupCompanies() {
  useReveal();

  return (
    <>
    

      <div className="gc-root min-h-screen pt-16 pb-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* ── Header ── */}
          <div className="text-center mb-24 gc-reveal">
            <p className="gc-label mb-5">G.K. Jain Group</p>
            <h1 className="gc-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              Associated <em style={{ color: "#555" }}>Companies</em>
            </h1>
            <div className="gc-gold-rule mb-6" />
            <p
              className="text-lg text-gray-500 mx-auto"
              style={{ maxWidth: 520, lineHeight: 1.8, fontWeight: 300, letterSpacing: "0.02em" }}
            >
              A diversified portfolio delivering excellence across textiles and business solutions.
            </p>
          </div>

          {/* ── Companies ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "140px" }}>
            {companies.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={c.id} id={c.id}>
                  <div
                    className={`grid md:grid-cols-2 gap-14 md:gap-20 items-center`}
                    style={{ direction: c.reverse ? "rtl" : "ltr" }}
                  >
                    {/* Image */}
                    <div
                      className="gc-image-wrap gc-reveal-img delay-img"
                      style={{
                        height: "420px",
                        direction: "ltr",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                      }}
                    >
                      <img
                        src={c.image}
                        alt={c.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div
                      className="gc-company-card"
                      style={{ direction: "ltr", position: "relative", paddingLeft: "28px" }}
                    >
                      <span className="gc-company-number">{c.number}</span>

                      <div className="gc-reveal delay-1" style={{ marginBottom: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <div
                            className="gc-icon-box"
                           style={{ background: c.iconBg }}
                          >
                            <Icon size={20} style={{ color: c.iconColor }} />
                          </div>
                          <p className="gc-label" style={{ color: c.iconColor }}>
                            {c.badge}
                          </p>
                        </div>
                      </div>

                      <h2
                        className="gc-heading gc-reveal delay-2"
                        style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "18px", color: "#111" }}
                      >
                        {c.name}
                      </h2>

                      <p
                        className="gc-reveal delay-3"
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.85",
                          color: "#666",
                          fontWeight: 300,
                          letterSpacing: "0.02em",
                          marginBottom: "28px",
                        }}
                      >
                        {c.description}
                      </p>

                      <div className="gc-reveal delay-4" style={{ marginBottom: "28px" }}>
                        {c.services.map((s) => (
                          <div key={s} className="gc-service-item">
                            <CheckCircle2 size={14} style={{ color: c.serviceColor, flexShrink: 0 }} />
                            <span className="gc-service-text">{s}</span>
                          </div>
                        ))}
                      </div>

                      <div className="gc-reveal delay-4">
                        <span className="gc-badge" style={{ color: c.badgeColor }}>
                          {c.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divider (not after last) */}
                  {i < companies.length - 1 && (
                    <div className="gc-divider" style={{ marginTop: "80px" }}>
                      <div className="gc-divider-line" />
                      <div className="gc-divider-dot" />
                      <div className="gc-divider-line" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <div
            className="gc-cta gc-reveal"
            style={{ marginTop: "120px", padding: "80px 60px", textAlign: "center" }}
          >
            <p className="gc-label" style={{ color: "#b89a5e", marginBottom: "18px" }}>
              Collaborate With Us
            </p>
            <h2
              className="gc-heading"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", marginBottom: "18px" }}
            >
              Partner With the <em>G.K. Jain Group</em>
            </h2>
            <div
              style={{
                width: "48px",
                height: "1px",
                background: "linear-gradient(90deg,transparent,#b89a5e,transparent)",
                margin: "0 auto 24px",
              }}
            />
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "15px",
                fontWeight: 300,
                letterSpacing: "0.04em",
                lineHeight: 1.8,
                maxWidth: "480px",
                margin: "0 auto 40px",
              }}
            >
              Whether you need premium textiles, engineering expertise, or business solutions — we are your trusted partner for excellence.
            </p>
            <Link href="/contact">
              <a className="gc-cta-btn">
                Contact Us <ArrowRight size={14} />
              </a>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}