import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="credits">
          © {new Date().getFullYear()} Avi's little Groom Room. All rights
          reserved. <span className="designer">Designed by EdenCode</span>
        </p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
