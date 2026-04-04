import { useState } from "react";

const categories = [
  {
    id: "01",
    name: "Shirting",
    desc: "Premium cotton & linen shirting fabrics",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
  },
  {
    id: "02",
    name: "Suiting",
    desc: "High quality suiting materials",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200",
  },
  {
    id: "03",
    name: "Sheeting",
    desc: "Soft & breathable fabrics",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
  },
  {
    id: "04",
    name: "Dhoties",
    desc: "Traditional premium dhoties",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=1200",
  },
  {
    id: "05",
    name: "Ritual",
    desc: "Sacred ritual fabrics",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200",
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