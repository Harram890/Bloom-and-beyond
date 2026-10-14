
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Blog from "../data/Blog.jsx";
import "./BlogDetails.scss";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = Blog.find(
    (item) => String(item.id) === id
  );

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog not found!</h2>
        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <article className="blog-details">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <header className="article-header">
        <span>{blog.category}</span>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
      </header>

      <img
        src={blog.image}
        alt={blog.title}
        className="detail-image"
      />

      <div className="article-body">
        <p>{blog.description}</p>

        <p>
          Welcome to Bloom & Beyond! Every story gives us
          a chance to learn something new and find inspiration
          in everyday life. Take a moment to explore new ideas,
          discover creativity, and enjoy the little things.
        </p>

        <h2>Finding inspiration in everyday life</h2>

        <p>
          Sometimes the smallest moments bring the biggest
          inspiration. Keep exploring, keep learning, and
          remember that every day is a new opportunity to grow.
        </p>

        <blockquote>
          Every new day is another page in your story.
        </blockquote>

        <button
          className="article-home-button"
          onClick={() => navigate("/")}
        >
          Explore More Stories
        </button>
      </div>
    </article>
  );
}

export default BlogDetails;

