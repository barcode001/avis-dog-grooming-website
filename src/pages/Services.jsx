import React from "react";

export default function Services() {
  return (
    <section id="services">
      <div className="services wrapper backdrop fade-up ">
        <h2 className="fade-up">Our Services</h2>
        <ul>
          <li className="fade-up">✂️ Full Haircuts</li>
          <li className="fade-up">🧼 Baths & Blowouts</li>
          <li className="fade-up">🐾 Nail Trims</li>
          <li className="fade-up">🦷 Teeth Cleaning</li>
          <li className="fade-up">🧽 De-shedding Treatments</li>
        </ul>
      </div>
      <div className="discount-service backdrop  wrapper fade-up">
        <h3 className="fade-up">Special Discounts</h3>
        <ul className="fade-up">
          <li>✨ First-time clients get a special discount!</li>
          <li>🐶 Multi-dog households enjoy discounted rates.</li>
        </ul>
      </div>
    </section>
  );
}
