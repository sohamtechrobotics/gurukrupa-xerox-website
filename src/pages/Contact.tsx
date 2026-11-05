
import { useState, type FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = `
New Website Enquiry

Name: ${form.name}
Mobile: ${form.mobile}
Subject: ${form.subject}

Message:
${form.message}
    `;

    const whatsappURL =
      `https://wa.me/917745062299?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>We'd Love to Hear From You</h1>
        <p>
          Have a question or need assistance? Contact our team
          and we'll be happy to help.
        </p>
      </section>

      <section className="contact-layout section">
        <div className="contact-info">
          <span className="eyebrow">CONTACT INFORMATION</span>
          <h2>Let's Connect</h2>
          <p>
            Reach out to us for enquiries about printing, online
            services, documentation and business support.
          </p>

          <div className="contact-info-item">
            <MapPin size={22} />
            <div>
              <h3>Visit Our Shop</h3>
              <p>
                Plot No. 48, Balaji Nagar, New Bhokardan,
                431114, Maharashtra
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <Phone size={22} />
            <div>
              <h3>Call Us</h3>
              <a href="tel:+917745062299">+91 77450 62299</a>
            </div>
          </div>

          <div className="contact-info-item">
            <Mail size={22} />
            <div>
              <h3>Email Us</h3>
              <a href="mailto:narayan.katore9@gmail.com">
                narayan.katore9@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <Clock size={22} />
            <div>
              <h3>Business Hours</h3>
              <p>Please contact us for current working hours.</p>
            </div>
          </div>

          <a
            className="contact-map-link"
            href="https://www.google.com/maps/search/?api=1&query=Plot+No+48+Balaji+Nagar+New+Bhokardan+431114"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={17} /> Find Us on Google Maps
          </a>
        </div>

        <div className="contact-form-card">
          <span className="eyebrow">SEND AN ENQUIRY</span>
          <h2>How Can We Help?</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              required
            />

            <label htmlFor="contact-mobile">Mobile Number</label>
            <input
              id="contact-mobile"
              type="tel"
              placeholder="Enter your mobile number"
              value={form.mobile}
              onChange={(event) =>
                setForm({ ...form, mobile: event.target.value })
              }
              pattern="[0-9+\-\s]{10,15}"
              required
            />

            <label htmlFor="contact-subject">Subject</label>
            <select
              id="contact-subject"
              value={form.subject}
              onChange={(event) =>
                setForm({ ...form, subject: event.target.value })
              }
              required
            >
              <option value="">Select an enquiry type</option>
              <option value="Xerox and Printing">Xerox & Printing</option>
              <option value="Online Services">Online Services</option>
              <option value="Government Services">Government Services</option>
              <option value="Tax Services">Tax Services</option>
              <option value="Business and Data Services">
                Business & Data Services
              </option>
              <option value="Other">Other Enquiry</option>
            </select>

            <label htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell us how we can help..."
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              required
            />

            <button type="submit" className="primary-button">
              <MessageCircle size={17} />
              Send Enquiry on WhatsApp
              <Send size={16} />
            </button>
          </form>

          <p className="form-note">
            Your enquiry will open in WhatsApp. Review it and press
            Send in WhatsApp to contact us.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
