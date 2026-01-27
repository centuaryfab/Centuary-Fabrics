import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Factory, Zap, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import millsImage from "@/assets/company-centuary-mills.png";
import powerImage from "@/assets/company-sun-gracee.png";
import associatedImage from "@/assets/company-lalitha.png";

export default function GroupCompanies() {
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="container space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">G.K. Jain Group</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Associated Companies</h1>
          <p className="text-xl text-muted-foreground">
            A diversified portfolio of companies delivering excellence across textiles, engineering, and business solutions.
          </p>
        </div>

        {/* Companies List */}
        <div className="space-y-20">
          
          {/* Company 1: Centuary Processing Mills */}
          <div id="centuary-processing" className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
              <img src={millsImage} alt="Centuary Processing Mills" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold">Centuary Processing Mills</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Established in 1995, Centuary Processing Mills is the backbone of our textile operations. 
                We specialize in high-quality dyeing, printing, and finishing of cotton and blended fabrics.
                Our state-of-the-art facility ensures vibrant colors and premium textures that meet global standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Fabric Dyeing & Bleaching", "Rotary & Screen Printing", "Specialized Finishing", "Eco-friendly Processing"].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <Badge variant="outline" className="mt-4 text-primary border-primary">Textile Manufacturing</Badge>
            </div>
          </div>

          <div className="border-t border-border/50" />

          {/* Company 2: Sun Gracee Power Engineers */}
          <div id="sun-gracee" className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
              <img src={powerImage} alt="Sun Gracee Power Engineers" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="order-2 md:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="font-heading text-3xl font-bold">Sun Gracee Power Engineers</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sun Gracee Power Engineers provides comprehensive electrical engineering solutions. 
                From industrial power infrastructure setup to renewable energy installations, we power 
                progress with safety and efficiency at the core of our operations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Industrial Electrification", "Substation Installation", "Solar Power Solutions", "Energy Auditing & Safety"].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <Badge variant="outline" className="mt-4 text-blue-600 border-blue-600">Engineering & Power</Badge>
            </div>
          </div>

          <div className="border-t border-border/50" />

          {/* Company 3: Lalitha and Associateds */}
          <div id="lalitha-associates" className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
              <img src={associatedImage} alt="Lalitha and Associateds" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Building2 className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="font-heading text-3xl font-bold">Lalitha and Associateds</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Lalitha and Associateds serves as the strategic arm for business consulting, 
                infrastructure development, and general trading. We facilitate smooth operations 
                and diverse business ventures under the group's umbrella.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Business Consultancy", "Infrastructure Development", "General Trading", "Logistic Support"].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <Badge variant="outline" className="mt-4 text-amber-600 border-amber-600">Business Solutions</Badge>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-16 text-center space-y-6 mt-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Partner With Us</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
            Whether you need premium textiles, engineering expertise, or business solutions, 
            the G.K. Jain Group is your trusted partner for excellence.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
