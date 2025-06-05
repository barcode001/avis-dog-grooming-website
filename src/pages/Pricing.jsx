import React from "react";

export default function Pricing() {
  return (
    <div className="pricing  ">
      <h2 className="fade-up">Pricing</h2>
      <div className="container">
        <section className="price-container ">
          <div className="pricing-service backdrop fade-up  ">
            <h3 className="fade-up">
              X-Small Babies <br /> (1–20 lbs)
            </h3>
            <ul>
              <li className="fade-up">Bath – $45 (40 mins)</li>
              <li className="fade-up">Mini Groom – $65 (60 mins)</li>
              <li className="fade-up">Full Groom – $80 (120 mins)</li>
            </ul>
          </div>
          <div className="pricing-service backdrop fade-up">
            <h3 className="fade-up">
              Small Babies <br /> (21–35 lbs)
            </h3>
            <ul>
              <li className="fade-up">Bath – $55 (40 mins)</li>
              <li className="fade-up">Mini Groom – $75 (60 mins)</li>
              <li className="fade-up">Full Groom – $90 (120 mins)</li>
            </ul>
          </div>

          <div className="pricing-service backdrop fade-up">
            <h3 className="fade-up">
              Medium Babies <br /> (36–50 lbs)
            </h3>
            <ul>
              <li className="fade-up">Bath – $65</li>
              <li className="fade-up">Mini Groom – $85</li>
              <li className="fade-up">Full Groom – $100</li>
            </ul>
          </div>

          <div className="pricing-service backdrop fade-up">
            <h3 className="fade-up">
              Large Babies <br /> (51–90 lbs)
            </h3>
            <ul>
              <li className="fade-up">Bath – $75</li>
              <li className="fade-up">Mini Groom – $95</li>
              <li className="fade-up">Full Groom – $110</li>
            </ul>
          </div>
          <div className="pricing-service backdrop fade-up">
            <h3 className="fade-up">
              X-Large Babies <br /> (91–115 lbs)
            </h3>
            <ul>
              <li className="fade-up">Bath – $85</li>
              <li className="fade-up">Mini Groom – $105</li>
              <li className="fade-up">Full Groom – $120</li>
            </ul>
          </div>
          <div className="pricing-service backdrop fade-up" id="addons">
            <h3 className="fade-up">Add-Ons</h3>
            <ul className="fade-up">
              <li>Matting – $20 (30 mins)</li>
              <li>De-Matting Services – $20 (30 mins)</li>
              <li>Flea & Tick Treatment – $15 (30 mins)</li>
              <li>Teeth Brush – $5 (10 mins)</li>
              <li>Nail Trim – $10 (15 mins)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
