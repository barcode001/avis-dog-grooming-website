// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
                <Hero /> <Home />
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
