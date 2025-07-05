import React, { useState, useEffect } from "react";
import heroDesktop from "../assets/images/hero-dogs.png";
import heroMobile from "../assets/images/hero-dogs.avif";
import vanDesktop from "../assets/images/van.webp";
import vanMobile from "../assets/images/van.webp";
import { Link } from "react-router-dom";

export default function Hero() {
  const [dogsReady, setDogsReady] = useState(false);
  useEffect(() => {
    document.body.classList.add("no-scroll");
    const timeout = setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 5000); // match animation duration
    return () => clearTimeout(timeout);
  }, []);
  return (
    <section className="hero">
      <div className="hero-content">
        <picture className="van-image">
          <source
            srcSet={vanMobile}
            media="(max-width: 600px)"
            type="image/webp"
          />
          <img
            className="van-img" // ✅ This is key!
            src={vanDesktop}
            alt="Grooming van"
            loading="eager"
            width="1200"
            height="6n00"
          />
        </picture>
        {/* <picture className="dogs-wrapper">
          <source
            srcSet={heroMobile}
            media="(max-width: 600px)"
            type="image/webp"
          />
          <img
            className="dogs-image"
            src={heroDesktop}
            alt="Dogs after getting groomed"
            loading="eager"
            width="1200"
            height="600"
          />
        </picture> */}
        <picture className="dogs-wrapper">
          <source srcSet={heroMobile} media="(max-width: 600px)" />
          <img
            className={`dogs-image ${dogsReady ? "animate" : ""}`}
            src={heroDesktop}
            alt="Dogs"
            width="1200"
            height="600"
            onLoad={() => setDogsReady(true)} // 🔥 Trigger animation after image loads
            loading="eager"
          />
        </picture>

        <h1 className="fade-up">
          Avi’s Little <span id="title-color">Groom Room</span>
        </h1>
        <p>
          Professional dog grooming services in Houston — gentle, loving care
          for your furry friends.
        </p>
        <Link to="/contact" className="hero-btn">
          Book Now
        </Link>
      </div>
    </section>
  );
}
