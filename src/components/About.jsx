
import React from "react";
import "./About.scss";
import laptop from "../assets/laptop.jpg"
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img
          src={laptop}
          alt="Journal and notebook on a desk"
        />
      </div>

      <div className="about-content">
        <span className="about-tag">A LITTLE ABOUT US</span>

        <h2>
          A space to write,
          <span> dream & grow.</span>
        </h2>

        <p>
          Welcome to Bloom & Beyond, a cozy corner of the internet
          where stories, creativity, and everyday inspiration come together.
        </p>

        <p>
          From little life lessons to creative ideas, our goal is to
          inspire you to slow down, explore your thoughts, and keep growing.
        </p>

        <button
          className="about-button"
          onClick={() =>
            document.getElementById("blogs")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Explore Our Stories →
        </button>
      </div>
    </section>
  );
}

export default About;
