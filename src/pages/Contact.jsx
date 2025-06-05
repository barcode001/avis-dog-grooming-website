import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Get In Touch</h2>
        <p>We'd love to pamper your pup! Reach out anytime.</p>
        <ul>
          <li>📍 Houston, TX</li>
          <li>📞 (832) 962-9130</li>
          <li>✉️ contact@avisdogs.com</li>
        </ul>
      </div>

      <form className="contact-form">
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
          <select id="service" name="service">
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
