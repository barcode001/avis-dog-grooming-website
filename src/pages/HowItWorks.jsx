import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function HowItWorks() {
  useScrollReveal();
  return (
    <section id="how-it-works">
      <div className="how-it-works backdrop wrapper fade-up">
        <h2 className="fade-up">How It Works</h2>
        <ol>
          <li className="fade-up">
            <strong>1.</strong> Book an appointment online or by phone.
          </li>
          <li className="fade-up">
            <strong>2.</strong> Bring your pup to Avi’s Little Groom Room at the
            scheduled time.
          </li>
          <li className="fade-up">
            <strong>3.</strong> Your dog gets pampered in a safe and loving home
            environment, and you pick them up fresh and clean.
          </li>
        </ol>
      </div>
    </section>
  );
}
