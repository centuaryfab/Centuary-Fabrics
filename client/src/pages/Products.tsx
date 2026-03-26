import { Card } from "@/components/ui/card";

// Images
import cotton1 from "@/assets/product-stack.png";
import cotton2 from "@/assets/hero.png";
import cotton3 from "@/assets/about-craft.png";

const products = [
  {
    id: 1,
    category: "Premium Cotton",
    title: "Egyptian Cotton Sateen",
    description: "Soft, smooth premium cotton fabric.",
    image: cotton1
  },
  {
    id: 2,
    category: "Luxury Linen",
    title: "European Flax Linen",
    description: "Breathable, natural luxury linen.",
    image: cotton2
  },
  {
    id: 3,
    category: "Premium Cotton",
    title: "Organic Cotton Poplin",
    description: "Eco-friendly crisp cotton.",
    image: cotton3
  }
];

export default function Products() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-900">
          Our Premium Fabrics
        </h1>

        {/* Products */}
        <div className="space-y-8">

          {products.map((product) => {

            const isCotton = product.category === "Premium Cotton";

            return (
              <Card
                key={product.id}
                className={`group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition duration-300 ${
                  isCotton ? "flex flex-row h-64" : "flex flex-col h-96"
                }`}
              >

                {/* IMAGE */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                    <h2 className="text-white text-xl font-semibold">
                      {product.title}
                    </h2>
                    <p className="text-gray-200 text-sm mt-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* TEXT SIDE (ONLY FOR COTTON) */}
                {isCotton && (
                  <div className="w-1/2 p-6 flex flex-col justify-center bg-white">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {product.description}
                    </p>
                  </div>
                )}

              </Card>
            );
          })}

        </div>
      </div>
    </div>
  );
}