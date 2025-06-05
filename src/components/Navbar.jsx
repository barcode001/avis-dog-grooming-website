import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar backdrop">
      <div className="navbar-container wrapper">
        <Link to="/" className="logo">
          <img loading="eager" src={logo} alt="Logo" />
        </Link>

        {/* Hamburger icon */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✖️" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
