import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import { HashLink } from "react-router-hash-link";
import facebookLogo from "../assets/images/facebookLogo.png";
import instagramLogo from "../assets/images/instagramLogo.png";
import tiktokLogo from "../assets/images/tiktokLogo.png";

export default function Footer() {
  useScrollReveal();
  return (
    <footer className="footer fade-up">
      <div className="footer-container ">
        <div className="footer-social">
          <a
            href="https://www.instagram.com/avigailroman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img loading="lazy" src={instagramLogo} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/abigail.roman.998646"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img loading="lazy" src={facebookLogo} alt="Facebook" />
          </a>
          <a
            href="https://www.tiktok.com/@avis.little.groom.room"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img loading="lazy" src={tiktokLogo} alt="TikTok" />
          </a>
        </div>

        <p className="credits">
          © {new Date().getFullYear()} Avi's little Groom Room. All rights
          reserved.{" "}
          <span className="designer">
            Designed by{" "}
            <a
              href="https://theedenscode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-link"
            >
              EdensCode
            </a>
          </span>
        </p>
        <div className="footer-links">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Home
          </Link>
          <HashLink smooth to="/#services">
            Services
          </HashLink>
          <Link smooth to="/about">
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
