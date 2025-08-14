import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonials from "../config/testimonials"; // adjust path if needed

const GOOGLE_REVIEW_LINK = "https://g.page/r/CTUO6eFSevrVEAE/review"; // replace with real link

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Customers Say</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <blockquote className="testimonial-block">
              “{t.text}”
              <footer className="testimonial-footer">&mdash; {t.author}</footer>
              {t.link && (
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonial-link"
                >
                  Read Full Review
                </a>
              )}
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="testimonial-cta">
        <a
          href={GOOGLE_REVIEW_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="leave-review-button"
        >
          Leave a Google Review
        </a>
      </div>
    </section>
  );
}
