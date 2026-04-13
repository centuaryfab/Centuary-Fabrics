import { Link } from "wouter";
import { posts } from "@/data/blogData";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] pt-24 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-[#b89a5e] mb-4">
            Journal
          </p>

          <h1 className="text-5xl md:text-6xl font-heading font-light">
            Stories in <em className="italic">Fabric</em>
          </h1>

          <div className="w-12 h-[1px] bg-[#b89a5e] mx-auto mt-5 mb-5"></div>

          <p className="text-gray-500 max-w-xl mx-auto">
            Insights, craftsmanship, and textile excellence from Centuary Fab.
          </p>
        </div>

        {/* 🔥 BLOG GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <a className="group block">

                {/* 🔥 IMAGE SECTION */}
                <div className="relative h-[220px] overflow-hidden rounded-lg">

                  {/* ✅ REAL IMAGE */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

                  {/* Tag */}
                  <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-white border border-white px-2 py-1 backdrop-blur-sm">
                    {post.tag}
                  </span>

                  {/* Number */}
                  <span className="absolute bottom-4 right-4 text-white text-sm opacity-70">
                    0{post.id}
                  </span>

                </div>

                {/* 🔥 CONTENT */}
                <div className="pt-5">

                  <p className="text-xs text-gray-400 mb-2">
                    {post.date}
                  </p>

                  <h2 className="text-xl font-heading font-medium leading-snug group-hover:text-[#b89a5e] transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm mt-2 mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#b89a5e]">
                    Read Article →
                  </span>

                </div>

              </a>
            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}