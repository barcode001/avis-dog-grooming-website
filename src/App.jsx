// src/App.jsx
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButtom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BottomSection from "./pages/BottomSection";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import ReactGA from "react-ga4";

export default function App() {
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

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
          <Route path="*" element={<NotFound />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
