import { useState } from "react";

const categories = [
  {
    id: "01",
    name: "Shirting",
    desc: "Premium cotton & linen shirting fabrics",
    image:  "/images/products/shirting.jpg",
  },
  {
    id: "02",
    name: "Suiting",
    desc: "High quality suiting materials",
    image: "/images/products/suiting.jpg",
  },
  {
    id: "03",
    name: "Sheeting",
    desc: "Soft & breathable fabrics",
    image: "/images/products/sheeting.jpg",
  },
  {
    id: "04",
    name: "Dhoties",
    desc: "Traditional premium dhoties",
    image: "/images/products/dhoties.jpg",
  },
  {
    id: "05",
    name: "Ritual",
    desc: "Sacred ritual fabrics",
    image:"/images/products/ritual.jpg",
  },
];

export default function ProductCategories() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full">

      {/* MOBILE */}
      <div className="flex flex-col md:hidden">
        {categories.map((cat, i) => (
          <div key={i} className="relative h-[300px]">

            <img
              src={cat.image}
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-white p-6 flex flex-col justify-end h-full">
              <p>{cat.id}</p>
              <h2 className="text-2xl font-semibold">{cat.name}</h2>
              <p className="text-sm mt-2">{cat.desc}</p>

              <div className="mt-4 border border-white w-10 h-10 flex items-center justify-center">
                →
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex h-[70vh]">
        {categories.map((cat, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            className={`relative flex-1 cursor-pointer transition-all duration-700 ${
              active === i ? "flex-[3]" : "flex-[1]"
            }`}
          >

            <img
              src={cat.image}
              className={`absolute w-full h-full object-cover ${
                active === i ? "scale-100" : "grayscale"
              }`}
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-white p-6 flex flex-col justify-end h-full">
              <p>{cat.id}</p>
              <h2 className="text-xl">{cat.name}</h2>

              {active === i && (
                <p className="text-sm">{cat.desc}</p>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}