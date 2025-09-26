// src/pages/Home.jsx
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
        <link rel="canonical" href="https://avislittlegroomroom.com/" />
      </Helmet>

      <Hero />
      <BottomSection />
    </>
  );
}
