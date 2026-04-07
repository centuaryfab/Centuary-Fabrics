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

  // ✅ SAFE FETCH (NO CRASH)
  const post = posts.find((p) => p.slug === slug);
  const postIndex = posts.findIndex((p) => p.slug === slug);

  return (
    <div className="bd-root">
      <div className="bd-inner">

        {/* ✅ Back Button FIXED */}
        <Link href="/blog" className="bd-back">
          ← Back to Journal
        </Link>

        {/* ❌ NOT FOUND */}
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
            <div className="bd-meta">
              <span className="bd-date">{post.date}</span>
              <div className="bd-meta-dot" />
              <span className="bd-tag-label">{post.tag}</span>
            </div>

            {/* Title */}
            <h1 className="bd-title">{post.title}</h1>
            <div className="bd-rule" />
            <p className="bd-description">{post.description}</p>

            {/* Content */}
            <div className="bd-body">
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