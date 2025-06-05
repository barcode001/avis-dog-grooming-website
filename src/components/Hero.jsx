import React, { lazy } from "react";
import heroDesktop from "../assets/images/hero-dogs.png";
import heroMobile from "../assets/images/hero-dogs.avif";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <picture>
          <source
            srcSet={heroMobile}
            media="(max-width: 600px)"
            type="image/webp"
          />
          <img
            className="hero-image"
            src={heroDesktop}
            alt="Dogs after getting groomed"
            loading="lazy"
            width="1200"
            height="600"
          />
        </picture>
        <h1>Avi’s Little Groom Room</h1>
        <p>
          Professional dog grooming services in Houston — gentle, loving care
          for your furry friends.
        </p>
        <a href="/booking" className="hero-btn">
          Book Now
        </a>
      </div>
    </section>
  );
}
