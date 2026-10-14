
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {
    if (location.pathname !== "/blogs") {
      navigate("/blogs", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <button
        className="navbar-logo"
        onClick={() => navigate("/")}
      >
        Bloom <span>& Beyond.</span>
      </button>

      <ul className="nav-links">
        <li>
          <button onClick={() => navigate("/")}>
            Home
          </button>
        </li>

        <li>
          <button onClick={() => goToSection("blogs")}>
            Blogs
          </button>
        </li>

        <li>
          <button onClick={() => navigate("/about")}>
            About
          </button>
        </li>

        <li>
          <button onClick={() => navigate("/contact")}>
            Contact
          </button>
        </li>
      </ul>

      <button
        className="nav-button"
        onClick={() => goToSection("blogs")}
      >
        Explore Blogs <span className="button-arrow">→</span>
      </button>
    </nav>
  );
}

export default Navbar;
