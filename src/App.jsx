// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BottomSection from "./pages/BottomSection";

export default function App() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
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
        </Routes>
      </main>
    </div>
  );
}
