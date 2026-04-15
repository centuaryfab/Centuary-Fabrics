import CraftsmanshipJourney from "../components/CraftsmanshipJourney";
import ProductCategories from "../components/ProductCategories";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async"; // ✅ ADD THIS IMPORT

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ✅ SEO */}
      <Helmet>
        <title>
          Centuary Fab | Premium Cotton & Linen Fabric Manufacturer in Erode
        </title>

        <meta
          name="description"
          content="Centuary Fab is a premium fabric manufacturer in Erode specializing in cotton and linen fabrics. Trusted textile partner for quality and innovation."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">

          {/* Eyebrow Label */}
          <span className="uppercase tracking-[0.3em] text-xs text-gray-300 font-light border border-gray-400/50 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Est. 1974 · Made in India
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light leading-tight tracking-wide">
            Premium Cotton
             <br />
             <span className="italic text-gray-200">& Linen</span> Fabrics
            </h1>
          {/* Divider */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-gray-400/50" />
            <span className="text-gray-400 text-lg">✦</span>
            <div className="flex-1 h-px bg-gray-400/50" />
          </div>

          {/* Subheading */}
          <p
            className="text-base md:text-lg text-gray-300 tracking-widest uppercase font-light"
            style={{ letterSpacing: "0.2em" }}
          >
            Crafted with precision. Designed for elegance.
          </p>

          {/* CTA Button */}
          <Link href="/products">
            <a className="mt-4 inline-block px-10 py-4 bg-white text-black text-sm font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white hover:border-white border border-transparent hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              Explore Our Collection
            </a>
          </Link>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Specialists in Premium Fabric Manufacturing
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          With 50+ years of textile excellence, we deliver high-quality fabrics across India with trust and innovation.
        </p>
      </section>

      {/* CRAFT */}
      <CraftsmanshipJourney />

      {/* PRODUCT CATEGORIES */}
      <ProductCategories />

      {/* WHY */}
      <section className="py-20 bg-gray-100 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why Choose Centuary Fab
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold">Quality Assurance</h3>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold">Business Integrity</h3>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-semibold">Customer Trust</h3>
          </div>
        </div>
      </section>

    </div>
  );
}