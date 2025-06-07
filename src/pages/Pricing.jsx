// import React from "react";

// export default function Pricing() {
//   return (
//     <div className="pricing  ">
//       <h2 className="fade-up">Pricing</h2>
//       <div className="container">
//         <section className="price-container ">
//           <div className="pricing-service backdrop fade-up  ">
//             <h3 className="fade-up">
//               X-Small Babies <br /> (1–20 lbs)
//             </h3>
//             <ul>
//               <li className="fade-up">Bath – $45 </li>
//               <li className="fade-up">Mini Groom – $65 </li>
//               <li className="fade-up">Full Groom – $80 </li>
//             </ul>
//           </div>
//           <div className="pricing-service backdrop fade-up">
//             <h3 className="fade-up">
//               Small Babies <br /> (21–35 lbs)
//             </h3>
//             <ul>
//               <li className="fade-up">Bath – $55 </li>
//               <li className="fade-up">Mini Groom – $75 </li>
//               <li className="fade-up">Full Groom – $90 </li>
//             </ul>
//           </div>

//           <div className="pricing-service backdrop fade-up">
//             <h3 className="fade-up">
//               Medium Babies <br /> (36–50 lbs)
//             </h3>
//             <ul>
//               <li className="fade-up">Bath – $65</li>
//               <li className="fade-up">Mini Groom – $85</li>
//               <li className="fade-up">Full Groom – $100</li>
//             </ul>
//           </div>

//           <div className="pricing-service backdrop fade-up">
//             <h3 className="fade-up">
//               Large Babies <br /> (51–90 lbs)
//             </h3>
//             <ul>
//               <li className="fade-up">Bath – $75</li>
//               <li className="fade-up">Mini Groom – $95</li>
//               <li className="fade-up">Full Groom – $110</li>
//             </ul>
//           </div>
//           <div className="pricing-service backdrop fade-up">
//             <h3 className="fade-up">
//               X-Large Babies <br /> (91–115 lbs)
//             </h3>
//             <ul>
//               <li className="fade-up">Bath – $85</li>
//               <li className="fade-up">Mini Groom – $105</li>
//               <li className="fade-up">Full Groom – $120</li>
//             </ul>
//           </div>
//           <div className="pricing-service backdrop fade-up" id="addons">
//             <h3 className="fade-up">Add-Ons</h3>
//             <ul className="fade-up">
//               <li>Matting – $20</li>
//               <li>De-Matting Services – $20 </li>
//               <li>Flea & Tick Treatment – $15 </li>
//               <li>Teeth Brush – $5 </li>
//               <li>Nail Trim – $10 </li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

import React from "react";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <div className="pricing  ">
      <h2 className="fade-up">Pricing</h2>
      <div className="container">
        <section className="price-container ">
          <PricingCard
            title="X-Small Babies (1–20 lbs)"
            items={["Bath – $45", "Mini Groom – $65", "Full Groom – $80"]}
            details={[
              "Bath: Nail Trimming, Anal Glands, Ear Cleaning, Brush & Blowout",
              "Mini Groom: + Clean Paw Pads, Sanitary Cleanup",
              "Full Groom: + Clean Paw Pads, Sanitary Cleanup, ",
              "Face Cleanup, Full Body Haircut",
            ]}
          />

          <PricingCard
            title="Small Babies (21–35 lbs)"
            items={["Bath – $55", "Mini Groom – $75", "Full Groom – $90"]}
            details={[
              "Bath: Nail Trimming, Anal Glands, Ear Cleaning, Brush & Blowout",
              "Mini Groom: + Clean Paw Pads, Sanitary Cleanup",
              "Full Groom: + Clean Paw Pads, Sanitary Cleanup, ",
              "Face Cleanup, Full Body Haircut",
            ]}
          />

          <PricingCard
            title="Medium Babies (36–50 lbs)"
            items={["Bath – $65", "Mini Groom – $85", "Full Groom – $100"]}
            details={[
              "Bath: Nail Trimming, Anal Glands, Ear Cleaning, Brush & Blowout",
              "Mini Groom: + Clean Paw Pads, Sanitary Cleanup",
              "Full Groom: + Clean Paw Pads, Sanitary Cleanup, ",
              "Face Cleanup, Full Body Haircut",
            ]}
          />

          <PricingCard
            title="Large Babies (51–90 lbs)"
            items={["Bath – $75", "Mini Groom – $95", "Full Groom – $110"]}
            details={[
              "Bath: Nail Trimming, Anal Glands, Ear Cleaning, Brush & Blowout",
              "Mini Groom: + Clean Paw Pads, Sanitary Cleanup",
              "Full Groom: + Clean Paw Pads, Sanitary Cleanup, ",
              "Face Cleanup, Full Body Haircut",
            ]}
          />

          <PricingCard
            title="X-Large Babies (91–115 lbs)"
            items={["Bath – $85", "Mini Groom – $105", "Full Groom – $120"]}
            details={[
              "Bath: Nail Trimming, Anal Glands, Ear Cleaning, Brush & Blowout",
              "Mini Groom: + Clean Paw Pads, Sanitary Cleanup",
              "Full Groom: + Clean Paw Pads, Sanitary Cleanup, ",
              "Face Cleanup, Full Body Haircut",
            ]}
          />
        </section>
      </div>
    </div>
  );
}
