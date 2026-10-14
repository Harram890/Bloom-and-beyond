
import React from "react";
import Navbar from "./components/Navbar";
import RoutesFile from "./routes/RoutesFile";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <RoutesFile />
      <Footer/>
    </>
  );
}

export default App;

