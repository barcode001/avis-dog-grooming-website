import { useEffect, useRef } from "react";
import dog1 from "../assets/images/dog1.webp";
import dog2 from "../assets/images/dog11.webp";
import dog3 from "../assets/images/dog10.webp";
import dog4 from "../assets/images/dog2.webp";
import dog5 from "../assets/images/dog22.webp";
import dog6 from "../assets/images/dog3.webp";
import dog7 from "../assets/images/dog13.webp";
import dog8 from "../assets/images/dog14.webp";
import dog9 from "../assets/images/dog4.webp";
import dog10 from "../assets/images/dog12.webp";
import dog11 from "../assets/images/dog5.webp";
import dog12 from "../assets/images/dog6.webp";
import dog13 from "../assets/images/dog7.webp";
import dog14 from "../assets/images/dog8.webp";
import dog15 from "../assets/images/dog9.webp";
import dog16 from "../assets/images/dog15.webp";
import dog17 from "../assets/images/dog16.webp";
import dog18 from "../assets/images/dog17.webp";
import dog19 from "../assets/images/dog18.webp";
import dog20 from "../assets/images/dog19.webp";
import dog21 from "../assets/images/dog20.webp";

export default function ClientDogs() {
  const imgRef = useRef();
  const dogImages = [
    dog1,
    dog2,
    dog3,
    dog4,
    dog5,
    dog6,
    dog7,
    dog8,
    dog9,
    dog10,
    dog11,
    dog12,
    dog13,
    dog14,
    dog15,
    dog16,
    dog17,
    dog18,
    dog19,
    dog20,
    dog21,
  ];

  useEffect(() => {
    const images = document.querySelectorAll(".slide-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    images.forEach((img) => observer.observe(img));
  }, []);

  useEffect(() => {
    const container = document.querySelector(".dog-scroll");

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section id="client-dogs" className="client-dogs wrapper">
      <h2 className="fade-up">Happy Clients</h2>
      <div className="dog-scroll fade-up">
        {dogImages.map((img, index) => (
          <div className="dog-card" key={index}>
            <img src={img} alt={`Groomed dog ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
