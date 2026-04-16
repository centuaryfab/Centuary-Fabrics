import { Helmet } from "react-helmet-async";
import { Link, useParams } from "wouter";
import { posts } from "@/data/blogData";

const gradients = [
  "linear-gradient(135deg, #e8e0d2 0%, #d4c9b4 100%)",
  "linear-gradient(135deg, #dde4db 0%, #c5cebc 100%)",
  "linear-gradient(135deg, #e2dbd5 0%, #cbbfb3 100%)",
  "linear-gradient(135deg, #e4ddd2 0%, #d0c4af 100%)",
  "linear-gradient(135deg, #dfe3e8 0%, #c4cdd6 100%)",
];

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  const post = posts.find((p) => p.slug === slug);
  const postIndex = posts.findIndex((p) => p.slug === slug);

  return (
    <div className="bd-root">
      <div className="bd-inner">

        {/* ✅ SEO FIXED */}
        <Helmet>
          <title>
            {post ? `${post.title} | Centuary Fab` : "Centuary Fab Blog"}
          </title>

          <meta
            name="description"
            content={
              post
                ? post.description
                : "Explore textile insights, cotton, linen, and fabric knowledge from Centuary Fab."
            }
          />

          {/* ✅ IMPORTANT */}
          <link
            rel="canonical"
            href={`https://www.centuaryfab.com/blog/${slug}`}
          />
        </Helmet>

        {/* BACK */}
        <Link href="/blog" className="bd-back">
          ← Back to Journal
        </Link>

        {!post ? (
          <div className="bd-notfound">
            <h2 className="bd-notfound-title">Article Not Found</h2>
            <p className="bd-notfound-sub">
              The article you are looking for does not exist.
            </p>

            <Link href="/blog" className="bd-back">
              ← Return to Journal
            </Link>
          </div>
        ) : (
          <>
            {/* Hero */}
            <div className="bd-hero">
              <div
                className="bd-hero-bg"
                style={{
                  background:
                    gradients[postIndex % gradients.length],
                }}
              />
              <div className="bd-hero-stripe" />
              <span className="bd-hero-tag">{post.tag}</span>
              <span className="bd-hero-num">0{post.id}</span>
            </div>

            {/* Meta */}
            <p className="text-sm text-gray-400 mb-4">
  {post.date} • {post.tag}
</p>

           <div className="mb-8">
            <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg"
               />
            </div>

             {/* Title */}
            <h1 className="text-3xl md:text-4xl font-heading font-light mb-6">{post.title}</h1>
            <div className="bd-rule" />
            <p className="bd-description">{post.description}</p>

            {/* Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              {post.content.map((para, i) => (
                <p key={i} className="bd-paragraph">
                  {para}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="bd-footer">
              <span className="bd-footer-label">
                Centuary Fab — Journal
              </span>

              <Link href="/blog" className="bd-back">
                ← All Articles
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}