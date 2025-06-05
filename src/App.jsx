// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButtom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BottomSection from "./pages/BottomSection";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero /> <BottomSection />
              </>
            }
          />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
