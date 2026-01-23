import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-fabric.png";
import aboutImage from "@/assets/about-craft.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Close up of premium fabric" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center space-y-6 max-w-3xl px-4">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Premium Cotton & <br/>
            <span className="text-secondary italic">Luxury Linen</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Blending tradition with innovation to create sustainable, premium textiles that stand the test of time.
          </p>
          <div className="pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link href="/products">
              <Button size="lg" className="rounded-full text-base px-8 h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all duration-300">
                Explore Our Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={aboutImage} 
                  alt="Artisan at work" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary p-6 rounded-lg text-primary-foreground flex flex-col justify-center items-center text-center shadow-xl hidden md:flex">
                <span className="text-5xl font-bold font-heading">25+</span>
                <span className="text-sm mt-2 font-medium">Years of Excellence</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Who We Are</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Masters of Pure Natural Fabrics
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Centuary Fab is a premier manufacturer specializing exclusively in high-count cotton and pure linen fabrics. 
                Rooted in the rich heritage of Indian textiles, we combine traditional craftsmanship 
                with modern technology to produce fabrics that represent the pinnacle of natural luxury.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "100% Premium Cotton",
                  "Pure European Linen",
                  "Eco-friendly Processes",
                  "Global Export Standards"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/about">
                  <Button variant="outline" className="gap-2 group">
                    Read Our Story 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Core Values That Define Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Every meter of fabric undergoes rigorous quality checks to ensure perfection."
              },
              {
                icon: Leaf,
                title: "Sustainability",
                desc: "Committed to eco-friendly practices, organic materials, and responsible manufacturing."
              },
              {
                icon: CheckCircle2,
                title: "Customer Trust",
                desc: "Building lasting relationships through transparency, reliability, and excellence."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border/50">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
