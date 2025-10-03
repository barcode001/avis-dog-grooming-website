import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import BottomSection from "./BottomSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Affordable Dog Grooming in Houston | Avi's Little Groom Room
        </title>
        <meta
          name="description"
          content="Affordable dog grooming in Houston – full grooms, baths, and nail trims in a safe, loving home environment. Pamper your pup today!"
        />
        <meta
          name="keywords"
          content="dog grooming Houston, affordable dog groomer, pet grooming services, dog nail trimming, full dog grooming, dog baths Houston"
        />
        <meta name="author" content="Avi's Little Groom Room" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avislittlegroomroom.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Avi's Little Groom Room" />
        <meta
          property="og:description"
          content="Affordable dog grooming in Houston with grooms, baths, and nail trims in a safe, stress-free environment."
        />
        <meta
          property="og:image"
          content="https://avislittlegroomroom.com/assets/images/hero-dogs.avif"
        />
        <meta property="og:url" content="https://avislittlegroomroom.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avi's Little Groom Room" />
        <meta
          name="twitter:description"
          content="Home-based dog grooming in Houston – baths, grooms & more. Gentle care your pup deserves."
        />
        <meta
          name="twitter:image"
          content="https://avislittlegroomroom.com/assets/images/hero-dogs.avif"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
        {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "PetGroomingService"],
            "name": "Avi's Little Groom Room",
            "description": "Affordable dog grooming in Houston. Full grooms, baths, and nail trims in a safe home environment.",
            "url": "https://avislittlegroomroom.com",
            "logo": "https://avislittlegroomroom.com/logo.png",
            "image": "https://avislittlegroomroom.com/assets/images/hero-dogs.avif",
            "telephone": "+1-832-962-9130",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7010 Shotwell St",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77028",
              "addressCountry": "US"
          },
            "areaServed": {
              "@type": "City",
              "name": "Houston"
      }
    }
    `}
        </script>
      </Helmet>

      <Hero />
      <BottomSection />
    </>
  );
}
