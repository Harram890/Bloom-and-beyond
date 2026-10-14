
import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <article className="blog-card">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />

        <span className="blog-category">
          {blog.category}
        </span>
      </div>

      <div className="blog-content">
        <p className="blog-read-time">
          {blog.readTime}
        </p>

        <h3>{blog.title}</h3>

        <p className="blog-description">
          {blog.description}
        </p>

        <button
          className="read-more-btn"
          onClick={() => navigate(`/blog/${blog.id}`)}
        >
          Read Article <span>→</span>
        </button>
      </div>
    </article>
  );
}

export default BlogCard;
