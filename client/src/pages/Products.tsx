import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productImage from "@/assets/products-stack.png";

const products = [
  {
    id: 1,
    category: "Premium Cotton",
    title: "Giza Cotton Shirting",
    description: "Extra-long staple cotton with a silky smooth finish, perfect for luxury formal wear.",
    tags: ["Egyptian Cotton", "High Thread Count", "Silky Finish"]
  },
  {
    id: 2,
    category: "Luxury Linen",
    title: "European Flax Linen",
    description: "100% pure European linen, known for its breathability and natural elegance.",
    tags: ["Imported Flax", "Breathable", "Natural Texture"]
  },
  {
    id: 3,
    category: "Premium Cotton",
    title: "Organic Cotton Poplin",
    description: "Crisp, lightweight, and eco-friendly cotton fabric ideal for shirts and dresses.",
    tags: ["GOTS Certified", "Crisp Hand", "Eco-friendly"]
  },
  {
    id: 4,
    category: "Luxury Linen",
    title: "Washed Linen Blend",
    description: "Softened linen with a relaxed look, perfect for casual luxury apparel.",
    tags: ["Softened", "Drapey", "Casual Luxury"]
  },
  {
    id: 5,
    category: "Premium Cotton",
    title: "Fine Cotton Voile",
    description: "Sheer, lightweight cotton with a delicate drape, perfect for summer layers.",
    tags: ["Sheer", "Lightweight", "Summer Essential"]
  },
  {
    id: 6,
    category: "Luxury Linen",
    title: "Heavyweight Linen Canvas",
    description: "Durable and textured linen suitable for structured garments and premium home textiles.",
    tags: ["Heavyweight", "Durable", "Textured"]
  }
];

export default function Products() {
  return (
    <div className="min-h-screen pt-10 pb-20 bg-muted/20">
      <div className="container space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Collection</h1>
          <p className="text-xl text-muted-foreground">
            Explore our exclusive range of premium cotton and luxury linen fabrics.
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
