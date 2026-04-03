import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-craft.png";
import { Calendar, Factory, Globe, Award, TrendingUp, Briefcase, MapPin } from "lucide-react";

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
                continuous evolution.
              </p>

              <p>
                With over 200 skilled professionals and a network of 250+ dealers across India, we continue to weave 
                tradition with modernity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-2xl font-bold text-primary">₹300M+</span>
                <span className="text-sm text-muted-foreground">Annual Turnover</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-2xl font-bold text-primary">200+</span>
                <span className="text-sm text-muted-foreground">Premium Qualities</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img src={aboutImage} alt="Our workshop" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-center text-3xl font-bold mb-12">Timeline of Our Journey</h2>

          <div className="space-y-8">
            {milestones.map((item) => (
              <div key={item.year} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">

                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">{item.year}</span>
                </div>

                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>

                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-8">

          <Card className="bg-black text-white border-none">
            <CardContent className="p-8">
              <Globe className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-300">
                To be a global leader in the textile industry, recognized for our commitment to quality, innovation, 
                and sustainable practices.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-none">
            <CardContent className="p-8">
              <Award className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To consistently manufacture premium quality fabrics that exceed customer expectations.
              </p>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}
