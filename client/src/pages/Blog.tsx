import { Link } from "wouter";
import { posts } from "@/data/blogData";

const gradients = [
  "linear-gradient(135deg, #e8e0d2 0%, #d4c9b4 100%)",
  "linear-gradient(135deg, #dde4db 0%, #c5cebc 100%)",
  "linear-gradient(135deg, #e2dbd5 0%, #cbbfb3 100%)",
  "linear-gradient(135deg, #e4ddd2 0%, #d0c4af 100%)",
  "linear-gradient(135deg, #dfe3e8 0%, #c4cdd6 100%)",
];

export default function Blog() {
  return (
    <div className="blog-root">
      <div className="blog-inner">

        {/* Header */}
        <header className="blog-header">
          <span className="blog-eyebrow">Journal</span>
          <h1 className="blog-title">
            Stories in <em>Fabric</em>
          </h1>
          <div className="blog-rule" />
          <p className="blog-subtitle">
            Insights, knowledge, and stories from the world of textiles.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="blog-grid">
          {posts.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="blog-card"
            >
              {/* Image */}
              <div className="blog-card-image">
                <div
                  className="blog-card-image-bg"
                  style={{ background: gradients[i % gradients.length] }}
                />
                <div className="blog-card-image-stripe" />
                <span className="blog-card-num">0{post.id}</span>
                <span className="blog-card-tag-pill">{post.tag}</span>
              </div>

              {/* Content */}
              <div className="blog-card-body">
                <p className="blog-card-date">{post.date}</p>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-desc">{post.description}</p>
                <span className="blog-card-link">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}