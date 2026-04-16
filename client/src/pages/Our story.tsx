import aboutImage from "@/assets/about-craft.png";
import CompanyTimeline from "@/components/CompanyTimeline";
import { Globe, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-10 pb-20">

      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-gray-500 tracking-widest uppercase text-sm">
            G.K. Jain Group
          </span>

          <h1 className="text-4xl md:text-5xl font-bold">
            Our Story
          </h1>

          <p className="text-lg text-gray-600">
            A legacy of textile excellence spanning over five decades.
          </p>
        </div>

        {/* 🔥 INTRO SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              A Heritage of Trust
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Centuary Fab India Private Limited is a distinguished name in textile manufacturing,
              operating under the esteemed G.K. Jain Group.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our roots trace back to 1966, evolving across major textile hubs including
              Ichalkaranji, Hubli, and Erode.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Today, we stand as a symbol of quality, innovation, and craftsmanship in premium fabrics.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-2xl font-bold">₹300M+</p>
                <p className="text-sm text-gray-500">Turnover</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-2xl font-bold">200+</p>
                <p className="text-sm text-gray-500">Fabric Qualities</p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src={aboutImage}
              alt="Centuary Fab"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

        </div>

        {/* 🔥 TIMELINE (YOUR NEW COMPONENT) */}
        <CompanyTimeline />

        {/* 🔥 VISION + MISSION */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-black text-white p-8 rounded-2xl">
            <Globe className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-300">
              To be a global leader in the textile industry, recognized for excellence,
              innovation, and quality.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <Award className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To manufacture premium fabrics that exceed customer expectations
              with integrity and precision.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}