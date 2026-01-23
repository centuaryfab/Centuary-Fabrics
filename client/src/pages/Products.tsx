import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productImage from "@/assets/products-stack.png";

const products = [
  {
    id: 1,
    category: "Pure Cotton",
    title: "Premium Shirting Cotton",
    description: "Breathable, lightweight, and durable 100% cotton fabrics perfect for formal and casual wear.",
    tags: ["Organic", "Breathable", "Soft Finish"]
  },
  {
    id: 2,
    category: "Khadi / Handloom",
    title: "Authentic Khadi Weave",
    description: "Hand-spun and hand-woven fabric that keeps you cool in summer and warm in winter.",
    tags: ["Handwoven", "Sustainable", "Textured"]
  },
  {
    id: 3,
    category: "Blended Fabrics",
    title: "Poly-Viscose Blend",
    description: "Wrinkle-resistant and easy-care fabrics designed for daily corporate and uniform wear.",
    tags: ["Durable", "Easy Care", "Wrinkle Free"]
  },
  {
    id: 4,
    category: "Polyester",
    title: "High-Grade Polyester",
    description: "Strong, resilient, and color-fast fabrics suitable for sportswear and active use.",
    tags: ["Strong", "Color Fast", "Quick Dry"]
  },
  {
    id: 5,
    category: "Pure Cotton",
    title: "Printed Cotton Voile",
    description: "Sheer, lightweight cotton with vibrant, eco-friendly prints.",
    tags: ["Printed", "Sheer", "Eco Dyes"]
  },
  {
    id: 6,
    category: "Khadi / Handloom",
    title: "Raw Silk Blend",
    description: "Luxurious texture combining the sheen of silk with the comfort of cotton.",
    tags: ["Luxury", "Textured", "Festive"]
  }
];

export default function Products() {
  return (
    <div className="min-h-screen pt-10 pb-20 bg-muted/20">
      <div className="container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Collection</h1>
          <p className="text-xl text-muted-foreground">
            Explore our diverse range of high-quality fabrics crafted for every need.
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden h-[400px] shadow-md relative">
           <img 
            src={productImage} 
            alt="Fabric Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-white font-heading text-4xl font-bold drop-shadow-lg">Exquisite Textures & Colors</h2>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border/60 bg-background overflow-hidden">
              <div className="h-48 bg-muted overflow-hidden relative">
                {/* Placeholder for individual product images - using the main one zoomed for effect if needed, or a colored block */}
                <div className="w-full h-full bg-gradient-to-br from-muted to-secondary/30 group-hover:scale-105 transition-transform duration-500" />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {product.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl">{product.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
