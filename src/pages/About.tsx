
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Award,
  HeartHandshake,
  ArrowRight,
  MapPin
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We aim to provide dependable assistance for everyday printing, documentation and service needs."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We believe in understanding customer requirements and making services convenient."
  },
  {
    icon: HeartHandshake,
    title: "Helpful Service",
    description:
      "We strive to guide customers through their service enquiries with care and attention."
  },
  {
    icon: Award,
    title: "Quality & Care",
    description:
      "We value careful work, clear communication and continuous improvement."
  }
];

function About() {
  return (
    <main className="page-container">
      {/* PAGE HERO */}
      <section className="page-hero">
        <span className="eyebrow">ABOUT OUR BUSINESS</span>
        <h1>More Than a Service Centre</h1>
        <p>
          Your One-Stop Service Destination for printing,
          online assistance, documentation and business services.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section className="section about-intro">
        <div className="about-intro-visual">
          <div className="about-monogram">GS</div>
          <span>GURUKRUPA XEROX</span>
          <strong>AND SOHAM MULTISERVICES</strong>
          <small>Your One-Stop Service Destination</small>
        </div>

        <div className="about-intro-content">
          <span className="eyebrow">WHO WE ARE</span>
          <h2>Bringing Multiple Services Together</h2>

          <p>
            Gurukrupa Xerox And Soham Multiservices is a service
            destination based in Bhokardan, Maharashtra.
          </p>

          <p>
            Our business brings together Xerox and printing,
            online services, government-related documentation,
            tax-related assistance and business data services.
          </p>

          <p>
            Our aim is to make everyday tasks simpler by bringing
            multiple useful services together in one convenient place.
          </p>

          <Link to="/services" className="text-link">
            Explore Our Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="section mission-vision-section">
        <div className="mission-vision-card">
          <div className="mission-vision-icon">
            <Target size={30} />
          </div>
          <span className="eyebrow">OUR MISSION</span>
          <h2>Making Services Accessible</h2>
          <p>
            To provide convenient printing, documentation and
            support services while focusing on reliability,
            customer needs and helpful assistance.
          </p>
        </div>

        <div className="mission-vision-card">
          <div className="mission-vision-icon">
            <Eye size={30} />
          </div>
          <span className="eyebrow">OUR VISION</span>
          <h2>A Trusted Service Destination</h2>
          <p>
            To continuously improve our services and build a
            dependable destination for everyday personal and
            business requirements.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE STAND FOR</span>
          <h2>Our Core Values</h2>
          <p>
            The principles that guide the way we serve our customers.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article className="value-card" key={value.title}>
                <div className="value-icon">
                  <Icon size={27} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* LOCATION */}
      <section className="section about-location">
        <div>
          <span className="eyebrow">FIND US</span>
          <h2>Serving Customers in Bhokardan</h2>
          <p>
            Visit Gurukrupa Xerox And Soham Multiservices
            for enquiries about our services.
          </p>

          <div className="about-address">
            <MapPin size={21} />
            <span>
              Plot No. 48, Balaji Nagar, New Bhokardan,
              431114, Maharashtra
            </span>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Plot+No+48+Balaji+Nagar+New+Bhokardan+431114"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Get Directions <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="contact-cta">
        <span className="eyebrow">LET'S CONNECT</span>
        <h2>We're Ready to Help</h2>
        <p>
          Have a question about our services? Get in touch with us.
        </p>

        <Link to="/contact" className="primary-button">
          Contact Us <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default About;
