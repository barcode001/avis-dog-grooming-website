import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
export default function HowItWorks() {
  useScrollReveal();
  return (
    <section id="about">
      <div className="how-it-works backdrop wrapper fade-up">
        <h2 className="fade-up">How It Works</h2>
        <ol>
          <li className="fade-up">
            <strong>1.</strong> Book an appointment online or by phone.
          </li>
          <li className="fade-up">
            <strong>2.</strong> House Call – I come to you fully equipped, just
            provide a space with an outlet. I’ll groom your pup and clean up
            everything before I leave.
          </li>
          <li className="fade-up">
            <strong> 3.</strong> Your dog gets pampered without you ever leaving
            home.
          </li>
        </ol>
      </div>
    </section>
  );
}
