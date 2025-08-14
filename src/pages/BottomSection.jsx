// Add this under your Hero component
import React from "react";

import HowItWorks from "./HowItWorks";
import Services from "./Services";
import CallToAction from "./CallToAction";
import ClientDogs from "./ClientDogs";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

export default function BottomSection() {
  return (
    <section className="bottom-section ">
      <HowItWorks />
      <Services />
      <Pricing />
      <Testimonial />
      <ClientDogs />
      <CallToAction />
    </section>
  );
}
