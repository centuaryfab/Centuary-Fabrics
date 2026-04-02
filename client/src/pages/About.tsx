import SEOHead from "../components/SEOHead";

const milestones = [
  {
    year: "1966",
    title: "The Foundation",
    description:
      "Established as a textile trading venture by the G.K. Jain family.",
  },
  {
    year: "1990s",
    title: "Erode Expansion",
    description:
      "Expanded operations to Erode, India’s textile hub.",
  },
  {
    year: "1995",
    title: "Processing Mills",
    description:
      "Launched in-house fabric processing unit.",
  },
  {
    year: "2004",
    title: "Growth Phase",
    description:
      "Corporate expansion and modernization.",
  },
  {
    year: "2021",
    title: "Centuary Fab",
    description:
      "Premium fabric manufacturing division launched.",
  },
];

export default function About({ navigate }: any) {
  return (
    <>
      <SEOHead
        title="About Centuary Fab | Textile Company in Erode"
        description="Centuary Fab is a leading textile company in Erode manufacturing premium cotton and linen fabrics."
        keywords="textile company erode, cotton fabric india, linen fabrics"
        canonical="https://www.centuaryfab.com/about"
      />

      <main className="bg-[#F8F4EF] min-h-screen">

        {/* HERO */}
        <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            About Centuary Fab
          </h1>

          <p className="text-gray-600 text-lg">
            Centuary Fab is a premium textile manufacturer based in Erode, India,
            specializing in cotton and linen fabrics.
          </p>
        </section>

        {/* TIMELINE */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
            Our Journey
          </h2>

          <div className="space-y-8 border-l pl-6">
            {milestones.map((m) => (
              <div key={m.year}>
                <p className="text-sm text-gray-400">{m.year}</p>
                <h3 className="font-semibold">{m.title}</h3>
                <p className="text-gray-600 text-sm">{m.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 px-6">
          <h2 className="text-2xl md:text-3xl mb-6">
            Explore Our Fabrics
          </h2>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("cotton-fabrics-india")}
              className="bg-black text-white px-6 py-3"
            >
              Cotton Fabrics
            </button>

            <button
              onClick={() => navigate("linen-fabrics")}
              className="border px-6 py-3"
            >
              Linen Fabrics
            </button>
          </div>
        </section>

      </main>
    </>
  );
}