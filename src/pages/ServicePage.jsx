import React from "react";
import { Helmet } from "react-helmet-async";
import useScrollReveal from "../hooks/useScrollReveal";

// --- Image Imports ---
import heroImg from "../assets/images/grooming/services-hero.jpg";
import fullHaircutImg from "../assets/images/grooming/full-haircut.png";
import bathBlowoutImg from "../assets/images/grooming/bath-blowout.jpg";
import nailTrimImg from "../assets/images/grooming/nail-trim.png";
import teethCleaningImg from "../assets/images/grooming/teeth-cleaning.png";
import desheddingImg from "../assets/images/grooming/deshedding.jpg";

export default function ServicesPage() {
  useScrollReveal();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dog Grooming Services",
    serviceType: [
      "Dog Haircuts",
      "Baths and Blowouts",
      "Nail Trims",
      "Teeth Cleaning",
      "De-shedding Treatments",
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Avi’s Little Groom Room",
      image: "https://avislittlegroomroom.com/logo.png",
      telephone: "+1-832-962-9130",
      email: "avislittlegroomroom@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7010 Shotwell St",
        addressLocality: "Houston",
        addressRegion: "TX",
        postalCode: "77028",
        addressCountry: "US",
      },
      areaServed: "Houston, Texas",
      priceRange: "$$",
      sameAs: [
        "https://www.facebook.com/avislittlegroomroom",
        "https://www.instagram.com/avislittlegroomroom",
      ],
      url: "https://avislittlegroomroom.com",
    },
    description:
      "Professional dog grooming services in Houston including full haircuts, baths and blowouts, nail trims, teeth cleaning, and de-shedding treatments in a calm home-based environment.",
  };

  return (
    <section className="services-page wrapper ">
      {/* --- SEO META TAGS --- */}
      <Helmet>
        <title>
          Dog Grooming Services in Houston | Avi’s Little Groom Room
        </title>
        <meta
          name="description"
          content="Trusted dog grooming in Houston, TX — full haircuts, baths, nail trims & teeth cleaning in a safe, calm home-based salon."
        />
        <link rel="canonical" href="https://avislittlegroomroom.com/services" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* --- HERO --- */}
      <div className="services-hero">
        <h1>Dog Grooming Services in Houston</h1>
        <p>
          At <span className="highlight">Avi’s Little Groom Room</span>, your
          pup gets pampered in a calm, home-based space designed for comfort and
          care. From fresh haircuts to gentle teeth cleaning, we make every dog
          look, feel, and smell amazing.
        </p>
        <img
          src={heroImg}
          alt="Dog grooming services in Houston"
          className="hero-img"
        />
      </div>

      {/* --- SERVICES LIST --- */}
      <div className="service-list">
        <div className="service-item fade-up">
          <img src={fullHaircutImg} alt="Dog haircut grooming Houston" />
          <div>
            <h2>✂️ Full Haircuts</h2>
            <p>
              Keep your dog stylish and comfortable with breed-specific
              haircuts. Each trim is done with care to make your pup feel light,
              clean, and happy.
            </p>
          </div>
        </div>

        <div className="service-item fade-up">
          <img src={bathBlowoutImg} alt="Dog bath and blowout Houston" />
          <div>
            <h2>🧼 Baths & Blowouts</h2>
            <p>
              Gentle, hypoallergenic shampoos and fluff-dry blowouts that leave
              your pet’s coat soft, shiny, and smelling fresh.
            </p>
          </div>
        </div>

        <div className="service-item fade-up">
          <img src={nailTrimImg} alt="Dog nail trim service" />
          <div>
            <h2>🐾 Nail Trims</h2>
            <p>
              Regular nail trims prevent overgrowth and discomfort, helping your
              dog maintain healthy paws and posture.
            </p>
          </div>
        </div>

        <div className="service-item fade-up">
          <img src={teethCleaningImg} alt="Dog teeth cleaning Houston" />
          <div>
            <h2>🦷 Teeth Cleaning</h2>
            <p>
              Reduce plaque and bad breath with safe, gentle teeth cleaning for
              dogs. A bright smile and fresh breath make all the difference!
            </p>
          </div>
        </div>

        <div className="service-item fade-up">
          <img src={desheddingImg} alt="Dog deshedding treatment Houston" />
          <div>
            <h2>🧽 De-shedding Treatments</h2>
            <p>
              Specialized tools and conditioners reduce shedding, keeping your
              dog’s coat healthy and your home fur-free.
            </p>
          </div>
        </div>
      </div>

      {/* --- BENEFITS --- */}
      <section className="benefits fade-up">
        <h2>Why Regular Grooming Matters</h2>
        <p>
          Grooming is more than just appearance — it’s essential for your dog’s
          comfort and health. Clean coats prevent matting, trimmed nails support
          healthy movement, and fresh teeth keep smiles bright. At{" "}
          <span className="highlight">Avi’s Little Groom Room</span>, we make
          every visit stress-free and enjoyable for your pet.
        </p>
      </section>

      {/* --- FAQ --- */}
      <section className="faq fade-up">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>How often should my dog be groomed?</summary>
          <p>
            Most dogs benefit from grooming every 4–8 weeks depending on their
            coat type and lifestyle.
          </p>
        </details>

        <details>
          <summary>Do you use special shampoos for sensitive skin?</summary>
          <p>
            Yes, we use gentle, hypoallergenic shampoos safe for all breeds and
            skin types.
          </p>
        </details>

        <details>
          <summary>What if my dog gets nervous?</summary>
          <p>
            Avi takes extra time and care with anxious pets, creating a calm,
            loving experience so they can relax during their groom.
          </p>
        </details>
      </section>

      {/* --- CTA --- */}
      <section className="cta fade-up">
        <h2>Book Your Dog’s Spa Day Today 🐶</h2>
        <p>
          Give your furry friend the care they deserve. Appointments fill up
          fast, so call or book online today!
        </p>
        <a href="/contact" className="hero-button primary">
          Book Appointment
        </a>
      </section>
    </section>
  );
}
