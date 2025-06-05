import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="cta-footer ">
      <p className="fade-up">
        🐕 Ready to give your pup the spa day they deserve?
      </p>
      <Link to="/contact" className="hero-btn">
        Book Now
      </Link>
    </div>
  );
}
