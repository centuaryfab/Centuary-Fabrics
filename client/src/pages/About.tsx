import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-craft.png";
import { Calendar, Factory, Globe, Award, TrendingUp, Briefcase, MapPin, Users } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "1966",
      title: "The Foundation",
      description: "Founded by Shree Ghewarchand Kesarimal Jain as a textile trading business in Hariyar, laying the groundwork for a legacy of integrity.",
      icon: Briefcase
    },
    {
      year: "1990s",
      title: "Strategic Expansion",
      description: "Operations moved to Erode (near Coimbatore), a major textile hub, with the establishment of Dilip Kumar Mills.",
      icon: MapPin
    },
    {
      year: "1995",
      title: "Centuary Processing Mills",
      description: "Established under the leadership of Mr. Ghevarchand Dalchand Jain (Mahaveer Chopra), marking a significant shift into processing.",
      icon: Factory
    },
    {
      year: "2004",
      title: "Corporate Evolution",
      description: "Centuary Processing Mill (India) Pvt. Ltd. was formed, structuring the business for scalable growth and modernization.",
      icon: TrendingUp
    },
    {
      year: "2021",
      title: "Centuary Fab India",
      description: "Established in July as the group's newest venture, dedicated exclusively to producing premium-quality fabrics for the modern market.",
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="container space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">G.K. Jain Group</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Story</h1>
          <p className="text-xl text-muted-foreground">
            A legacy of textile excellence spanning over five decades.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="font-heading text-3xl font-bold">A Heritage of Trust</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Centuary Fab India Private Limited is a distinguished name in textile manufacturing, operating under the 
                esteemed G.K. Jain Group. Our roots trace back to 1966, when our founder, Shree Ghewarchand Kesarimal Jain, 
                established a modest textile trading business in Hariyar.
              </p>
              <p>
                Over the decades, guided by generational values of integrity and quality, we expanded from trading to 
                manufacturing. From Hariyar to Ichalkaranji, Hubli, and eventually Erode, our journey has been one of 
                continuous evolution. Today, we stand as a symbol of trust, known for our commitment to producing 
                premium shirting and suiting fabrics.
              </p>
              <p>
                With over 200 skilled professionals and a network of 250+ dealers across India, we continue to weave 
                tradition with modernity, delivering excellence in every meter of fabric.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <span className="block text-2xl font-bold text-primary">₹300M+</span>
                <span className="text-sm text-muted-foreground">Annual Turnover</span>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <span className="block text-2xl font-bold text-primary">200+</span>
                <span className="text-sm text-muted-foreground">Premium Qualities</span>
              </div>
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
            <h2 className="font-heading text-3xl font-bold mb-4">Timeline of Our Journey</h2>
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

        {/* Vision, Mission & Values */}
        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-primary text-primary-foreground border-none">
              <CardContent className="p-8 space-y-4">
                <div className="p-3 bg-white/10 w-fit rounded-full mb-2">
                   <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Our Vision</h3>
                <p className="opacity-90 leading-relaxed text-lg">
                  To be a global leader in the textile industry, recognized for our commitment to quality, innovation, 
                  and sustainable practices that enrich lives and communities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary text-secondary-foreground border-none">
              <CardContent className="p-8 space-y-4">
                <div className="p-3 bg-black/5 w-fit rounded-full mb-2">
                   <Award className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Our Mission</h3>
                <p className="opacity-90 leading-relaxed text-lg">
                  To consistently manufacture premium quality fabrics that exceed customer expectations, while fostering 
                  a culture of integrity, growth, and environmental responsibility.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/20 p-8 md:p-12 rounded-xl border border-border/50">
             <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-heading text-3xl font-bold mb-4">Core Values</h2>
              <p className="text-muted-foreground">
                The principles that have guided the G.K. Jain Group for over 50 years.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Quality", desc: "Uncompromising standards in every thread." },
                { title: "Integrity", desc: "Honesty and transparency in all dealings." },
                { title: "Innovation", desc: "Embracing modern technology for better products." },
                { title: "Customer Focus", desc: "Building lasting relationships through service." },
                { title: "Sustainability", desc: "Responsible manufacturing for a greener future." },
                { title: "Legacy", desc: "Honoring our roots while looking ahead." }
              ].map((val) => (
                <div key={val.title} className="bg-background p-6 rounded-lg shadow-sm border border-border/50 text-center hover:scale-105 transition-transform duration-300">
                  <h3 className="font-bold text-lg text-primary mb-2">{val.title}</h3>
                  <p className="text-sm text-muted-foreground">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
