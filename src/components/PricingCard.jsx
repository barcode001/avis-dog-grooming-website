import React, { useState } from "react";

export default function PricingCard({ title, items, details = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="pricing-service backdrop fade-up">
      <h3 className="fade-up">{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="fade-up">
            {item}
          </li>
        ))}
      </ul>

      {details.length > 0 && (
        <>
          <button className="more-btn fade-up" onClick={() => setOpen(!open)}>
            {open ? "Hide Details" : "More Details"}
          </button>
          {open && (
            <ul className="extra-info ">
              {details.map((info, i) => (
                <li key={i}>{info} </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
