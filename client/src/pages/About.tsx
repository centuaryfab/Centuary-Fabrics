import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-craft.png";

export default function About() {
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="container space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Story</h1>
          <p className="text-xl text-muted-foreground">
            From humble beginnings to a legacy of textile excellence.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="font-heading text-3xl font-bold">A Legacy of Weaving</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bring the finest quality textiles to the world, Centuary Fab has 
                grown from a small weaving unit to a renowned name in the fabric industry. Our journey is 
                stitched with dedication, hard work, and an unwavering commitment to quality.
              </p>
              <p>
                We believe that fabric is not just a material; it is an expression of culture, comfort, and character. 
                Whether it's the breathable comfort of pure cotton or the rugged elegance of khadi, our fabrics 
                tell a story of authentic craftsmanship.
              </p>
              <p>
                Today, we stand proud as a brand that bridges the gap between traditional Indian textile heritage 
                and modern fashion needs, serving clients across the globe.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img 
                src={aboutImage} 
                alt="Our workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-primary text-primary-foreground border-none">
            <CardContent className="p-8 space-y-4">
              <h3 className="font-heading text-2xl font-bold">Our Vision</h3>
              <p className="opacity-90 leading-relaxed">
                To be the global benchmark in sustainable textile manufacturing, recognized for 
                innovation, quality, and ethical practices that empower artisans and protect our planet.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-secondary-foreground border-none">
            <CardContent className="p-8 space-y-4">
              <h3 className="font-heading text-2xl font-bold">Our Mission</h3>
              <p className="opacity-90 leading-relaxed">
                To consistently deliver superior quality fabrics that meet evolving customer needs while 
                maintaining a minimal environmental footprint and fostering a culture of trust and transparency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
