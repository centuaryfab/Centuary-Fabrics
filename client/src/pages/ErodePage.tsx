import { Helmet } from "react-helmet-async";

export default function ErodePage() {
  return (
    <div className="p-10">

      {/* ✅ SEO */}
      <Helmet>
        <title>Fabric Manufacturer in Erode | Centuary Fab</title>
        <meta
          name="description"
          content="Centuary Fab is a leading fabric manufacturer in Erode offering premium cotton and linen fabrics across India."
        />
      </Helmet>

      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">
        Fabric Manufacturer in Erode
      </h1>

      <p>
        Centuary Fab is a leading fabric manufacturer in Erode, Tamil Nadu,
        specializing in premium cotton and linen fabrics.
      </p>

      <p className="mt-4">
        We provide high-quality textile solutions for brands, wholesalers,
        and businesses across India.
      </p>

      {/* EXTRA SEO CONTENT */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Why Choose Centuary Fab in Erode?
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Premium cotton and linen fabric manufacturing</li>
        <li>Modern processing with traditional weaving expertise</li>
        <li>Trusted by textile businesses across India</li>
        <li>Located in Erode – India’s textile hub</li>
      </ul>

    </div>
  );
}