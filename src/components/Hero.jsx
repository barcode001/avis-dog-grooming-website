import React from "react";
import hero from "./images/hero-dogs.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img className="hero-image" src={hero} alt="image" />
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
