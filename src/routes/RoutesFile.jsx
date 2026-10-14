
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import About from "../components/About";
import Contact from "../components/Contact";

function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blogs" element={<Home />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RoutesFile;

