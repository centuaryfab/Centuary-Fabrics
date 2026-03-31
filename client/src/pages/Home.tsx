import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black text-white">
        
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold">
            Premium Cotton & Linen Fabric Manufacturer in India
          </h1>

          <p className="text-gray-300">
            Centuary Fab is a leading manufacturer of premium cotton and linen fabrics in India.
          </p>

          <Link href="/products">
            <a className="inline-block px-6 py-3 bg-white text-black rounded">
              Explore Our Collection
            </a>
          </Link>

        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">

          <h2 className="text-3xl font-bold">
            Specialists in Premium Fabric Manufacturing
          </h2>

          <p>
            With 50+ years of experience, we provide high-quality fabrics across India.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>✅ 50+ Years</div>
            <div>✅ 200+ Fabrics</div>
            <div>✅ 250+ Dealers</div>
            <div>✅ Trusted Quality</div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Centuary Fab
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded shadow">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-bold">Quality Assurance</h3>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-bold">Business Integrity</h3>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-bold">Customer Trust</h3>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
