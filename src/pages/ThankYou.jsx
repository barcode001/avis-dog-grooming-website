import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="thank-you">
      <div className="container">
        <h1>Thank You!</h1>
        <p>
          Your appointment request has been sent. We'll be in touch soon. 🐾
        </p>
        <Link to="/" className="hero-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
