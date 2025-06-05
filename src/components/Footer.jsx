import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  useScrollReveal();
  return (
    <footer className="footer fade-up">
      <div className="footer-container ">
        <p className="credits">
          © {new Date().getFullYear()} Avi's little Groom Room. All rights
          reserved. <span className="designer">Designed by EdenCode</span>
        </p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <HashLink smooth to="/#services">
            Services
          </HashLink>
          <HashLink smooth to="/#about">
            About
          </HashLink>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
