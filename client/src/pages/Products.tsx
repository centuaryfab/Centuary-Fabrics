import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productCategories = [
  {
    id: "shirting",
    title: "Premium Shirting",
    image: "/images/shirting.jpg",
    description:
      "Impeccably tailored comfort in every thread. Crafted from fine cotton for a luxurious feel.",
    features: ["High Thread Count", "Silky Finish", "Wrinkle Resistant"],
  },
  {
    id: "white-suiting",
    title: "White Shirting & Suiting",
    image: "/images/white-suiting.jpg",
    description:
      "Pure elegance with high-density weaves and premium softness.",
    features: ["Pristine White", "Soft Structure", "Durable"],
  },
  {
    id: "linen",
    title: "Linen (Dyed & White)",
    image: "/images/linen.jpg",
    description:
      "Breathable fabrics crafted from premium flax for timeless style.",
    features: ["Breathable", "Natural Texture", "Lightweight"],
  },
  {
    id: "dhotis",
    title: "Traditional Dhotis",
    image: "/images/dhotis.jpg",
    description:
      "Elegant traditional wear crafted with soft and lightweight cotton.",
    features: ["Feather-light", "Traditional Borders", "Pure Cotton"],
  },
  {
    id: "ritual",
    title: "Ritual Fabrics",
    image: "/images/ritual.jpg",
    description:
      "Sacred fabrics designed for Hindu, Muslim, and Christian traditions.",
    features: ["Pure Fabric", "Spiritual Use", "Premium Quality"],
  },
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="products-section">
      <h1 className="title">Our Products</h1>

      <div className="grid">
        {productCategories.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.title} />

            <div className="overlay">
              <h3>{product.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="modal" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            <img src={selectedProduct.image} alt="" />

            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>

            <ul>
              {selectedProduct.features.map((f: string, i: number) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <button className="btn">Inquire Now</button>
          </div>
        </div>
      )}
    </div>
  );
}