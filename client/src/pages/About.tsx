import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-craft.png";
import { Calendar, Factory, Globe, Award, TrendingUp } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "1995",
      title: "The Beginning",
      description: "Centuary Fab was founded in a small workshop with just 10 handlooms and a passion for pure cotton.",
      icon: Factory
    },
    {
      year: "2005",
      title: "Expansion Phase",
      description: "Transitioned to semi-automated looms while retaining hand-finishing techniques to increase production capacity.",
      icon: TrendingUp
    },
    {
      year: "2012",
      title: "Going Global",
      description: "Secured our first major international partnership, exporting fine Indian textiles to European fashion houses.",
      icon: Globe
    },
    {
      year: "2018",
      title: "Sustainability Pledge",
      description: "Achieved GOTS (Global Organic Textile Standard) certification and shifted to 100% eco-friendly dyes.",
      icon: Award
    },
    {
      year: "2024",
      title: "Luxury Linen Launch",
      description: "Inaugurated a dedicated facility for processing premium European flax, establishing our Luxury Linen line.",
      icon: Calendar
    }
  ];

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
                We specialization in pure natural fibers is what sets us apart. We believe that true luxury lies in nature's 
                finest offerings. From the crisp breathability of our premium cottons to the sophisticated 
                drape of our pure linens, every fabric we produce is a testament to authentic craftsmanship.
              </p>
              <p>
                Today, we stand proud as a brand that bridges the gap between traditional Indian textile heritage 
                and modern fashion needs, serving clients across the globe who appreciate the value of uncompromising quality.
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

        {/* Timeline Section */}
        <div className="py-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4">Milestones in Our Journey</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div key={item.year} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Icon Marker */}
                  <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10 border-4 border-background shadow-sm">
                    <item.icon className="w-3 h-3" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                    <div className="bg-muted/30 p-6 rounded-lg border border-border/50 hover:shadow-md transition-shadow">
                      <span className="text-primary font-bold text-lg block mb-1">{item.year}</span>
                      <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Empty Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
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
