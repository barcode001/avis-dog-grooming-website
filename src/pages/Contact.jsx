// import { Link } from "react-router-dom";
// import { useRef } from "react";
// import emailjs from "emailjs-com";
// import { useNavigate } from "react-router-dom";

// export default function Contact() {
//   const form = useRef();

//   const navigate = useNavigate();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_4389on6", // EmailJS service ID
//         "template_lt284ml", // EmailJS template ID
//         form.current,
//         "5Iw8X7_zC7WKMY8iX" // EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           navigate("/thank-you");
//           form.current.reset(); // optional: clears form
//         },
//         (error) => {
//           console.log(error.text);
//           alert("Failed to send message.");
//         }
//       );
//   };

//   return (
//     <section className="contact">
//       <div className="contact-info">
//         <h2>Get In Touch</h2>
//         <p>We'd love to pamper your pup! Reach out anytime.</p>
//         <ul>
//           <li>📍 7010 Shotwell St, Houston, TX 77028</li>
//           <li>
//             📞 <a href="tel:8329629130">(832) 962-9130</a>
//           </li>
//           <li>✉️ Avislittlegroomroom@gmail.com</li>
//         </ul>
//       </div>

//       <form ref={form} className="contact-form" onSubmit={sendEmail}>
//         <h2>Book an Appointment</h2>

//         <div className="form-group">
//           <label htmlFor="name">Name*</label>
//           <input type="text" id="name" name="name" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email*</label>
//           <input type="email" id="email" name="email" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phone">Phone*</label>
//           <input type="tel" id="phone" name="phone" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="service">Service</label>
//           <select id="service" name="service" required defaultValue="">
//             <option value="" disabled hidden>
//               Select a service
//             </option>
//             <option value="Bath">Bath</option>
//             <option value="Mini Groom">Mini Groom</option>
//             <option value="Full Groom">Full Groom</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea id="message" name="message" rows="4" />
//         </div>

//         <button type="submit" className="hero-btn">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// }

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          navigate("/thank-you");
        },
        (error) => {
          setLoading(false);
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };
  return (
    <main className="wrapper contact-page">
      {/* ✅ SEO */}
      <Helmet>
        <title>Contact Avi's Little Groom Room | Houston Dog Grooming</title>
        <meta
          name="description"
          content="Get in touch with Avi's Little Groom Room in Houston. Book appointments for full dog grooms, baths, or nail trims. Call, email, or fill out the form today!"
        />
        <link rel="canonical" href="https://avislittlegroomroom.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Avi's Little Groom Room" />
        <meta
          property="og:description"
          content="Reach out to Avi's Little Groom Room in Houston to pamper your pup with caring, affordable grooming services. Schedule your visit today!"
        />
        <meta
          property="og:url"
          content="https://avislittlegroomroom.com/contact"
        />
        <meta
          property="og:image"
          content="https://avislittlegroomroom.com/assets/images/hero-dogs.avif"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Avi's Little Groom Room" />
        <meta
          name="twitter:description"
          content="Contact Avi's Little Groom Room in Houston to book your dog's grooming appointment today."
        />
        <meta
          name="twitter:image"
          content="https://avislittlegroomroom.com/assets/images/hero-dogs.avif"
        />
      </Helmet>

      <section className="contact">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>We'd love to pamper your pup! Reach out anytime.</p>
          <address>
            <ul>
              📍{" "}
              <a
                href="https://www.google.com/maps?q=7010+Shotwell+St,+Houston,+TX+77028"
                target="_blank"
                rel="noopener noreferrer"
              >
                7010 Shotwell St, Houston, TX 77028
              </a>
              <li>
                📞 <a href="tel:8329629130">(832) 962-9130</a>
              </li>
              <li>
                ✉️{" "}
                <a href="mailto:Avislittlegroomroom@gmail.com">
                  Avislittlegroomroom@gmail.com
                </a>
              </li>
            </ul>
          </address>
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
            ;<label htmlFor="phone">Phone*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service*</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled hidden>
                Select a service
              </option>
              <option value="Bath">Bath</option>
              <option value="Mini Groom">Mini Groom</option>
              <option value="Full Groom">Full Groom</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" />
          </div>

          <button type="submit" className="hero-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>
    </main>
  );
}
