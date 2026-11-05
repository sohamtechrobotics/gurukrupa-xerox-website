
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello! I have a business enquiry.",
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      `Email: ${form.email || "Not provided"}`,
      `Subject: ${form.subject}`,
      `Message: ${form.message}`
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/917745062299?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">LET'S CONNECT</span>
        <h1>We'd Love to Hear from You.</h1>
        <p>
          Have a question or need assistance?
          Get in touch with Gurukrupa Xerox
          And Soham Multiservices.
        </p>
      </section>

      <section className="section contact-page-section">
        <div className="contact-information">
          <span className="eyebrow">CONTACT INFORMATION</span>
          <h2>Let's start a conversation.</h2>
          <p>
            Reach out to us for printing enquiries,
            online services or business assistance.
          </p>

          <div className="contact-info-card">
            <MapPin size={23} />
            <div>
              <strong>Visit Our Shop</strong>
              <p>
                Plot No. 48, Balaji Nagar,
                New Bhokardan, Maharashtra – 431114
              </p>
            </div>
          </div>

          <div className="contact-info-card">
            <Phone size={23} />
            <div>
              <strong>Call Us</strong>
              <a href="tel:7745062299">7745062299</a>
            </div>
          </div>

          <div className="contact-info-card">
            <Mail size={23} />
            <div>
              <strong>Email Us</strong>
              <a href="mailto:narayan.katore9@gmail.com">
                narayan.katore9@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-info-card">
            <Clock size={23} />
            <div>
              <strong>Business Hours</strong>
              <p>Contact us to confirm shop timings.</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send an Enquiry</h2>
          <p>
            Fill in your details. You can review and
            send your enquiry through WhatsApp.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Your Name *</label>
            <input
              id="contact-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label htmlFor="contact-mobile">Mobile Number *</label>
            <input
              id="contact-mobile"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
              required
            />

            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />

            <label htmlFor="contact-subject">Enquiry Subject *</label>
            <input
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What do you need help with?"
              required
            />

            <label htmlFor="contact-message">Your Message *</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your enquiry here..."
              rows={5}
              required
            />

            <button type="submit" className="print-button">
              <Send size={17} />
              Continue on WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
