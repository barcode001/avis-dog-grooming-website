// import React from "react";

// export default function Services() {
//   return (
//     <section id="service">
//       <div className="services wrapper backdrop fade-up">
//         <h2 className="fade-up">Our Services</h2>
//         <ul>
//           <li className="fade-up">✂️ Full Haircuts</li>
//           <li className="fade-up">🧼 Baths & Blowouts</li>
//           <li className="fade-up">🐾 Nail Trims</li>
//           <li className="fade-up">🦷 Teeth Cleaning</li>
//           <li className="fade-up">🧽 De-shedding Treatments</li>
//         </ul>

//         <p className="fade-up seo-text">
//           At <span className="highlight">Avi’s Little Groom Room</span>, your
//           pup gets the best care in a calm, home-based environment. From gentle
//           baths and full haircuts to nail trims and teeth cleaning, we make sure
//           every dog leaves looking and feeling fresh. Our grooming services are
//           designed to keep your pet’s coat healthy, shiny, and tangle-free —
//           perfect for dogs of all sizes and breeds.
//         </p>
//       </div>

//       <div className="discount-service backdrop wrapper fade-up">
//         <h3 className="fade-up">Special Discounts</h3>
//         <ul className="fade-up">
//           <li>✨ First-time clients get a special discount!</li>
//           <li>🐶 Multi-dog households enjoy discounted rates.</li>
//         </ul>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="service">
      <div className="services wrapper backdrop fade-up">
        <h2 className="fade-up">Our Services</h2>
        <ul>
          <li className="fade-up">
            <Link to="/services">✂️ Full Haircuts</Link>
          </li>
          <li className="fade-up">
            <Link to="/services">🧼 Baths & Blowouts</Link>
          </li>
          <li className="fade-up">
            <Link to="/services">🐾 Nail Trims</Link>
          </li>
          <li className="fade-up">
            <Link to="/services">🦷 Teeth Cleaning</Link>
          </li>
          <li className="fade-up">
            <Link to="/services">🧽 De-shedding Treatments</Link>
          </li>
        </ul>

        <p className="fade-up seo-text">
          At <span className="highlight">Avi’s Little Groom Room</span>, your
          pup gets the best care in a calm, home-based environment. From gentle
          baths and full haircuts to nail trims and teeth cleaning, we make sure
          every dog leaves looking and feeling fresh. Our grooming services are
          designed to keep your pet’s coat healthy, shiny, and tangle-free —
          perfect for dogs of all sizes and breeds.
        </p>
      </div>

      <div className="discount-service backdrop wrapper fade-up">
        <h3 className="fade-up">Special Discounts</h3>
        <ul className="fade-up">
          <li>✨ First-time clients get a special discount!</li>
          <li>🐶 Multi-dog households enjoy discounted rates.</li>
        </ul>
      </div>
    </section>
  );
}
