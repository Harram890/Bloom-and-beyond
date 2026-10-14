
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            Bloom <span>& Beyond.</span>
          </h2>
          <p>
            A little corner of the internet for stories,
            creativity, travel, and everyday inspiration.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/blogs")}>Blogs</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>

        <div className="footer-note">
          <h3>A Little Reminder ♡</h3>
          <p>
            Take your time, enjoy the little things,
            and let your story bloom.
          </p>
          <span>Made with love & creativity.</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bloom & Beyond.
          All rights reserved.
        </p>
        <span>Keep blooming ♡</span>
      </div>
    </footer>
  );
}

export default Footer;
