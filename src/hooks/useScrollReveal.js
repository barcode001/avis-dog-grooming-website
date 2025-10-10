import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Wait for DOM to paint before observing
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll(".fade-up");
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target); // stop observing once visible
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));

      // Cleanup
      return () => observer.disconnect();
    }, 150); // <-- short delay fixes early execution on first load

    return () => clearTimeout(timeout);
  }, [location.pathname]); // 👈 re-run every time you navigate
}