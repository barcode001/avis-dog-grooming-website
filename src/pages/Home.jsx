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
          content="Pamper your pup at Avi's Little Groom Room – affordable dog grooming in Houston with full grooms, baths, and nail trims in a safe home environment."
        />
        <meta
          name="keywords"
          content="dog grooming Houston, home dog groomer, pet grooming services, dog nail trimming, full dog grooming, dog baths Houston, Avi's Little Groom Room"
        />
        <link rel="canonical" href="https://avislittlegroomroom.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Avi's Little Groom Room" />
        <meta
          property="og:description"
          content="Houston’s trusted home-based dog grooming service. Clean, caring, and stress-free for your pup."
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
          content="Home-based dog grooming in Houston with love and care. Book your pup’s appointment today!"
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
              "@type": "Organization",
              "name": "Avi's Little Groom Room",
              "url": "https://avislittlegroomroom.com",
              "logo": "https://avislittlegroomroom.com/logo.png",
              "sameAs": []
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <BottomSection />
    </>
  );
}
