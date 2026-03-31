export default function About() {
  const milestones = [
    {
      year: "1966",
      title: "The Foundation",
      description: "Founded by Shree Ghewarchand Kesarimal Jain...",
      icon: "💼"
    },
    {
      year: "1990s",
      title: "Strategic Expansion",
      description: "Operations moved to Erode...",
      icon: "🏭"
    },
    {
      year: "1995",
      title: "Centuary Processing Mills",
      description: "Established under leadership...",
      icon: "⚙️"
    },
    {
      year: "2004",
      title: "Corporate Evolution",
      description: "Centuary Processing Mill Pvt Ltd...",
      icon: "📈"
    },
    {
      year: "2021",
      title: "Centuary Fab India",
      description: "Established as newest venture...",
      icon: "🌟"
    }
  ];

  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold">Our Story</h1>
        </div>

        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="/images/about-craft.png" 
              alt="About"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {milestones.map((item) => (
            <div key={item.year} className="flex items-start gap-4">
              
              <div className="text-2xl">{item.icon}</div>

              <div>
                <h3 className="font-bold">{item.year} - {item.title}</h3>
                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}