
import {
  ShieldCheck,
  Users,
  Target,
  Award
} from "lucide-react";

function About() {
  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">GET TO KNOW US</span>
        <h1>About Our Business</h1>
        <p>
          Your One-Stop Service Destination.
          Trusted local assistance for printing,
          documentation and everyday business needs.
        </p>
      </section>

      <section className="about-intro section">
        <div>
          <span className="eyebrow">WHO WE ARE</span>
          <h2>Making everyday services simpler.</h2>
          <p>
            Gurukrupa Xerox And Soham Multiservices is
            based in New Bhokardan, Maharashtra. We bring
            together printing, photocopying, online
            assistance, government-related documentation
            and business support under one roof.
          </p>
          <p>
            Our aim is to make essential services more
            convenient and accessible for students,
            individuals, farmers and businesses.
          </p>
        </div>
      </section>

      <section className="section about-values">
        <div className="section-heading">
          <span className="eyebrow">WHAT MATTERS TO US</span>
          <h2>Our values</h2>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <ShieldCheck size={30} />
            <h3>Trust</h3>
            <p>
              We value responsible service and
              transparent communication.
            </p>
          </article>

          <article className="service-card">
            <Users size={30} />
            <h3>Customer Focus</h3>
            <p>
              We aim to make every customer interaction
              helpful and convenient.
            </p>
          </article>

          <article className="service-card">
            <Target size={30} />
            <h3>Convenience</h3>
            <p>
              Multiple everyday services in one
              accessible destination.
            </p>
          </article>

          <article className="service-card">
            <Award size={30} />
            <h3>Quality</h3>
            <p>
              We strive for careful work and
              consistent service.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <span className="eyebrow">VISIT OUR SHOP</span>
        <h2>We look forward to serving you.</h2>
        <p>
          Plot No. 48, Balaji Nagar, New Bhokardan,
          Maharashtra – 431114
        </p>
        <a href="tel:7745062299" className="print-button">
          Contact Us
        </a>
      </section>
    </main>
  );
}

export default About;
