import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

import dog22 from "../assets/images/dogs22.JPG";
import dog23 from "../assets/images/dogs23.JPG";
import dog24 from "../assets/images/dogs24.JPG";
import dog25 from "../assets/images/dogs25.JPG";
import dog26 from "../assets/images/dogs26.JPG";
import dog27 from "../assets/images/dogs27.JPG";
import dog28 from "../assets/images/dogs28.JPG";
import dog29 from "../assets/images/dogs29.JPG";
import dog30 from "../assets/images/dogs30.JPG";
import dog31 from "../assets/images/dogs31.JPG";
import dog32 from "../assets/images/dogs32.JPG";
import dog33 from "../assets/images/dogs33.JPG";
import dog34 from "../assets/images/dogs34.JPG";
import dog35 from "../assets/images/dogs35.JPG";
import dog36 from "../assets/images/dogs36.JPG";
import dog37 from "../assets/images/dogs37.JPG";
import dog38 from "../assets/images/dogs38.JPG";
import dog39 from "../assets/images/dogs39.JPG";
import dog40 from "../assets/images/dogs40.JPG";

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
  dog22,
  dog23,
  dog24,
  dog25,
  dog26,
  dog27,
  dog28,
  dog29,
  dog30,
  dog31,
  dog32,
  dog33,
  dog34,
  dog35,
  dog36,
  dog37,
  dog38,
  dog39,
  dog40,
];

export default function ClientDogs() {
  return (
    <section id="client-dogs" className="client-dogs wrapper">
      <h2 className="fade-up">Happy Clients</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {dogImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="dog-card">
              <img src={img} alt={`Groomed dog ${index + 1}`} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
