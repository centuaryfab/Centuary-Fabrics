import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productCategories = [
  {
    id: "shirting",
    title: "Premium Shirting",
    image: "/src/assets/images/shirting.jpg",
    description: "Impeccably tailored comfort in every thread. Our shirting fabrics are woven from the finest extra-long staple cotton for a crisp, luxurious feel.",
    features: ["Extra-long staple cotton", "High Thread Count", "Silky Finish", "Wrinkle Resistant"]
  },
  {
    id: "white-suiting",
    title: "White Shirting & Suiting",
    image: "/src/assets/images/white-suiting.jpg",
    description: "The epitome of sophistication and pure elegance. Specialized high-density weaves that offer a pristine white appearance with a soft, durable structure.",
    features: ["Pristine White", "High-Density Weave", "Soft Structure", "Opaque"]
  },
  {
    id: "linen",
    title: "Linen (Dyed & White)",
    image: "/src/assets/images/linen.jpg",
    description: "Breathable, timeless pieces for the modern wardrobe. Sourced from the finest European flax, offering natural texture and effortless drape.",
    features: ["100% Pure Flax", "Breathable", "Natural Texture", "Garment Washed"]
  },
  {
    id: "dhotis",
    title: "Traditional Dhotis",
    image: "/src/assets/images/dhotis.jpg",
    description: "Honoring heritage with flawless pristine white fabrics. Crafted with devotion, featuring elegant borders and a feather-light feel for utmost comfort.",
    features: ["Feather-light", "Traditional Borders", "Pure Cotton", "Ceremonial Grade"]
  },
  {
    id: "ritual",
    title: "Ritual Fabrics",
    image: "/src/assets/images/ritual.jpg",
    description: "Sacred textiles crafted with devotion for all traditions—Hindu, Muslim, and Christian. Pure, untainted fabrics designed for spiritual reverence.",
    features: ["Untainted Pure Weave", "Subtle Embroidery", "Multi-faith Designs", "Spiritual Significance"]
  }
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<typeof productCategories[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        ".product-header",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".product-header",
            start: "top 85%"
          }
        }
      );

      // Cards Scroll Animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.95
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              // Stagger effect manually via ScrollTrigger based on index
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-24 bg-[#FAFAFA] text-foreground">
      <div className="container px-4 md:px-8 max-w-[1400px] mx-auto space-y-16">
        
        <div className="product-header text-center max-w-3xl mx-auto space-y-6">
          <span className="text-secondary-foreground font-medium tracking-[0.2em] uppercase text-sm">Collections</span>
          <h1 className="font-heading text-5xl md:text-6xl font-medium text-primary">
            Masterpieces in Fabric
          </h1>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Discover our meticulously curated range of premium textiles, designed for elegance, durability, and absolute luxury.
          </p>
        </div>

        {/* Premium Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {productCategories.map((product, index) => (
            <div 
              key={product.id}
              ref={(el: HTMLDivElement | null) => { cardsRef.current[index] = el; }}
              className={`group relative cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 ease-in-out
                ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square md:aspect-[4/5]'}
              `}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image Container with Zoom effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
              </div>

              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5 opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl font-heading text-white mb-3 drop-shadow-md">
                    {product.title}
                  </h3>
                  
                  <div className="overflow-hidden">
                    <p className="text-white/90 font-light text-sm line-clamp-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-out flex items-center text-white text-sm font-medium tracking-widest uppercase">
                    <span className="border-b border-white/50 pb-1">Discover</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-none shadow-2xl rounded-none">
          {selectedProduct && (
            <div className="grid md:grid-cols-2 h-full">
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedProduct.title} Details</DialogTitle>
              </DialogHeader>
              <div className="h-64 md:h-[600px] w-full relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-8 bg-[#FAFAFA]">
                <div>
                  <h2 className="text-3xl font-heading text-primary mb-4">{selectedProduct.title}</h2>
                  <div className="w-12 h-[2px] bg-accent mb-6" />
                  <DialogDescription className="text-base text-muted-foreground font-light leading-relaxed mb-8">
                    {selectedProduct.description}
                  </DialogDescription>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium tracking-widest uppercase text-secondary-foreground">Key Features</h4>
                  <ul className="space-y-3">
                    {selectedProduct.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm font-light text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Button className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 uppercase tracking-widest text-xs transition-colors">
                    Inquire Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}