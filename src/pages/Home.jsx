
import React from "react";
import "./Home.scss";
import BlogCard from "../components/BlogCard";
import blogs from "../data/Blog";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">

          <span className="hero-tag">
            ✿ YOUR LITTLE CORNER OF INSPIRATION
          </span>

          <h1>
            Stories that inspire,
            <span> ideas that bloom.</span>
          </h1>

          <p>
            Welcome to Bloom & Beyond, a cozy space for
            lifestyle, creativity, travel and little things
            that make everyday life beautiful.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                document.getElementById("blogs")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Explore Stories →
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Discover More
            </button>
          </div>

          <div className="hero-note">
            <span>♡</span> A little inspiration for your everyday
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900"
            alt="A cozy writing desk with a notebook and coffee"
          />
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="blogs-section" id="blogs">
        <div className="blogs-heading">
          <span className="section-tag">THE JOURNAL</span>

          <h2>
            Stories to make you <span>Bloom.</span>
          </h2>

          <p>
            A little inspiration, a little creativity,
            and stories worth sharing.
          </p>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* CONTACT SECTION */}
      <Contact />

    </main>
  );
}

export default Home;
