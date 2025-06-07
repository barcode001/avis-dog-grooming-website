import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const form = useRef();

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4389on6", // EmailJS service ID
        "template_lt284ml", // EmailJS template ID
        form.current,
        "5Iw8X7_zC7WKMY8iX" // EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/thank-you");
          form.current.reset(); // optional: clears form
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Get In Touch</h2>
        <p>We'd love to pamper your pup! Reach out anytime.</p>
        <ul>
          <li>📍 Houston, TX</li>
          <li>
            📞 <a href="tel:8329629130">(832) 962-9130</a>
          </li>
          <li>✉️ Avislittlegroomroom@gmail.com</li>
        </ul>
      </div>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <h2>Book an Appointment</h2>

        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone*</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" required>
            <option value="" disabled selected hidden>
              Select a service
            </option>
            <option>Bath</option>
            <option>Mini Groom</option>
            <option>Full Groom</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" />
        </div>

        <button type="submit" className="hero-btn">
          Submit
        </button>
      </form>
    </section>
  );
}
