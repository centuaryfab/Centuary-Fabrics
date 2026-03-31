import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-foreground">
        
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Premium cotton and linen fabric" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center space-y-6">

          {/* ✅ SEO H1 */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Premium Cotton & Linen Fabric Manufacturer in India
          </h1>

          {/* ✅ SEO Paragraph */}
          <p className="text-gray-300 max-w-2xl mx-auto">
            Centuary Fab is a leading manufacturer and supplier of premium cotton and linen fabrics in India. 
            We provide high-quality materials for shirts, uniforms, and fashion garments with durability and elegance.
          </p>

          <div className="pt-4">
            <Link href="/products">
              <Button size="lg" className="rounded-full px-8 h-12 bg-secondary text-secondary-foreground hover:scale-105 transition">
                Explore Our Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Fabric manufacturing process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Specialists in Premium Fabric Manufacturing
            </h2>

            <p className="text-muted-foreground">
              Centuary Fab India Pvt. Ltd. specializes in high-quality cotton and linen fabrics. 
              With over 50 years of experience, we provide premium fabrics for shirts, uniforms, and garments across India.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                "50+ Years Experience",
                "200+ Fabric Types",
                "250+ Dealers",
                "Trusted Quality"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button variant="outline" className="mt-4">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Centuary Fab
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Strict quality checks ensure premium fabric standards."
              },
              {
                icon: TrendingUp,
                title: "Business Integrity",
                desc: "Trusted fabric supplier with strong market reputation."
              },
              {
                icon: CheckCircle2,
                title: "Customer Trust",
                desc: "Reliable service with long-term relationships."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <item.icon className="mx-auto mb-4 text-primary w-6 h-6" />
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 space-y-6">

          <h2 className="text-3xl font-bold">
            Premium Fabric Supplier in India – Centuary Fab
          </h2>

          <p className="text-muted-foreground">
            Centuary Fab is a trusted premium fabric supplier in India specializing in cotton fabric and linen fabric. 
            We provide high-quality materials for shirts, uniforms, church garments, and fashion wear.
          </p>

          <h3 className="text-xl font-semibold">Cotton Fabric for Shirts</h3>
          <p className="text-muted-foreground">
            Our cotton fabrics are ideal for shirts and uniforms with smooth texture and durability.
          </p>

          <h3 className="text-xl font-semibold">Linen Fabric Collection</h3>
          <p className="text-muted-foreground">
            Our linen fabrics offer breathability and comfort, perfect for premium clothing.
          </p>

        </div>
      </section>

    </div>
  );
}