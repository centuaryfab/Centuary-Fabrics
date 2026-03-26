import cotton1 from "@/assets/product-stack.png";
import cotton2 from "@/assets/hero.png";
import cotton3 from "@/assets/about-craft.png";

const products = [
  {
    id: 1,
    title: "Lamp of Asia",
    description: "Premium cotton fabric",
    image: cotton1,
  },
  {
    id: 2,
    title: "European Flax Linen",
    description: "Luxury linen fabric",
    image: cotton2,
  },
  {
    id: 3,
    title: "Organic Cotton Poplin",
    description: "Eco-friendly cotton",
    image: cotton3,
  },
];

export default function Products() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Products Page ✅
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "300px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "10px" }}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}