import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smoothly scroll to the top when route changes
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null; // no visible output
}
