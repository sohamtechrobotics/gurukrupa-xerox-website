
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight
} from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="brand footer-logo">
            <span className="brand-mark">GS</span>
            <span className="brand-name">
              <strong>Gurukrupa Xerox</strong>
              <small>And Soham Multiservices</small>
            </span>
          </Link>

          <p>
            Your One-Stop Service Destination. Reliable printing,
            documentation, online and business services in Bhokardan.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <Link to="/services">Xerox & Printing</Link>
          <Link to="/services">Online Services</Link>
          <Link to="/services">Government Services</Link>
          <Link to="/services">Tax Services</Link>
          <Link to="/services">Business & Data Services</Link>
          <Link to="/print-online">Print Online</Link>
          <Link to="/track-order">Track Order</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Plot+No+48+Balaji+Nagar+New+Bhokardan+431114"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={17} />
            <span>Plot No. 48, Balaji Nagar, New Bhokardan, 431114, Maharashtra</span>
          </a>

          <a href="tel:+917745062299">
            <Phone size={17} />
            <span>+91 77450 62299</span>
          </a>

          <a href="mailto:narayan.katore9@gmail.com">
            <Mail size={17} />
            <span>narayan.katore9@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Gurukrupa Xerox And Soham Multiservices.
          All rights reserved.
        </p>

        <Link to="/help" className="footer-help-link">
          Help Centre <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
