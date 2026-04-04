import CraftsmanshipJourney from "../components/CraftsmanshipJourney";
import ProductCategories from "../components/ProductCategories";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <section className="h-[80vh] flex items-center justify-center bg-black text-white">
        <div className="text-center space-y-6 px-4">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Premium Cotton & Linen Fabric Manufacturer in India
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto">
            Centuary Fab is a leading premium fabric manufacturer delivering quality, innovation, and excellence.
          </p>

          {/* ✅ BUTTON FIXED */}
          <Link href="/products">
            <a className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 hover:scale-105 transition duration-300">
              Explore Our Collection
            </a>
          </Link>

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

      {/* ✅ PRODUCT CATEGORIES (CORRECT POSITION) */}
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