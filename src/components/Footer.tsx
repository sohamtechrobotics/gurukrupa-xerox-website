
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight
} from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-mark">GS</span>

            <span className="brand-name">
              <strong>Gurukrupa Xerox</strong>
              <small>And Soham Multiservices</small>
            </span>
          </a>

          <p>
            Your One-Stop Service Destination.
            Printing, online services and business
            support — all in one trusted place.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#print">Print Online</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <a href="#services">Xerox & Printing</a>
          <a href="#services">Online Services</a>
          <a href="#services">Government Services</a>
          <a href="#services">Tax & Business Services</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>

          <p>
            <MapPin size={17} />
            Plot No. 48, Balaji Nagar,
            New Bhokardan, Maharashtra – 431114
          </p>

          <a href="tel:7745062299">
            <Phone size={16} />
            7745062299
          </a>

          <a href="mailto:narayan.katore9@gmail.com">
            <Mail size={16} />
            Email Us
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Gurukrupa Xerox
          And Soham Multiservices. All rights reserved.
        </p>

        <p>Designed with care in Maharashtra.</p>
      </div>
    </footer>
  );
}

export default Footer;
