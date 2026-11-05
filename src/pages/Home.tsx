
import { Link } from "react-router-dom";
import {
  Printer,
  FileText,
  Landmark,
  Calculator,
  Database,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Xerox & Printing",
    description: "Black and white printing, colour printing, photocopying and document scanning."
  },
  {
    icon: FileText,
    title: "Online Services",
    description: "Online applications, form filling, registrations and document uploads."
  },
  {
    icon: Landmark,
    title: "Government Services",
    description: "Assistance with government-related applications and documentation."
  },
  {
    icon: Calculator,
    title: "Tax Services",
    description: "Income tax-related work and documentation assistance."
  },
  {
    icon: Database,
    title: "Business & Data Services",
    description: "Data entry, document preparation and business support services."
  }
];

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO GURUKRUPA XEROX</span>

          <h1>
            Every Service.
            <br />
            <span>One Destination.</span>
          </h1>

          <p>
            From everyday printing and photocopying to online applications,
            government documentation and business services — we're here to
            make your work simpler.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="primary-button">
              Explore Our Services <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="secondary-button">
              Contact Us
            </Link>
          </div>

          <div className="hero-trust">
            <span><CheckCircle2 size={16} /> Convenient Services</span>
            <span><CheckCircle2 size={16} /> Helpful Support</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-card">
            <div className="hero-icon">
              <Printer size={48} />
            </div>
            <span className="hero-card-label">YOUR ONE-STOP</span>
            <h2>Service Destination</h2>
            <p>Printing · Online Work · Documentation</p>
            <div className="hero-card-line" />
            <span className="hero-card-location">
              <MapPin size={15} /> Bhokardan, Maharashtra
            </span>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div>
          <ShieldCheck size={23} />
          <span>Reliable Assistance</span>
        </div>
        <div>
          <Clock size={23} />
          <span>Convenient Services</span>
        </div>
        <div>
          <MapPin size={23} />
          <span>Located in Bhokardan</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE OFFER</span>
          <h2>Services Designed Around Your Needs</h2>
          <p>
            Multiple everyday services, brought together under one roof.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={27} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="text-link">
                  Explore service <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="section-action">
          <Link to="/services" className="primary-button">
            View All Services <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* PRINT ONLINE PROMOTION */}
      <section className="print-promo" id="print">
        <div className="print-promo-content">
          <span className="eyebrow">PRINTING MADE CONVENIENT</span>
          <h2>Send Your Documents. Collect Them at Our Shop.</h2>
          <p>
            Our planned online printing service will let you upload documents,
            review printing details and place an order for shop pickup.
          </p>

          <Link to="/print-online" className="primary-button">
            Explore Print Online <ArrowRight size={17} />
          </Link>
        </div>

        <div className="print-promo-icon">
          <Printer size={100} strokeWidth={1.2} />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section about-preview">
        <div className="about-preview-visual">
          <div className="about-monogram">GS</div>
          <span>GURUKRUPA XEROX</span>
          <strong>AND SOHAM MULTISERVICES</strong>
        </div>

        <div className="about-preview-content">
          <span className="eyebrow">GET TO KNOW US</span>
          <h2>Making Everyday Work Simpler</h2>
          <p>
            Gurukrupa Xerox And Soham Multiservices brings printing,
            documentation, online assistance and business support services
            together in one convenient destination.
          </p>
          <p>
            We aim to make everyday tasks easier through accessible services
            and helpful customer support.
          </p>

          <Link to="/about" className="text-link">
            Learn More About Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-section">
        <div className="section-heading">
          <span className="eyebrow">WHY CHOOSE US</span>
          <h2>A Convenient Place for Multiple Needs</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <ShieldCheck size={30} />
            <h3>One Destination</h3>
            <p>Access a range of everyday services in one place.</p>
          </div>

          <div className="why-card">
            <Clock size={30} />
            <h3>Convenience</h3>
            <p>Save effort by getting multiple tasks handled together.</p>
          </div>

          <div className="why-card">
            <Phone size={30} />
            <h3>Customer Support</h3>
            <p>Reach out to us for service enquiries and assistance.</p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta" id="contact">
        <span className="eyebrow">WE'RE HERE TO HELP</span>
        <h2>Have a Service Enquiry?</h2>
        <p>
          Get in touch with Gurukrupa Xerox And Soham Multiservices.
          We'd be happy to assist you.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="primary-button">
            Contact Us <ArrowRight size={17} />
          </Link>

          <a href="tel:+917745062299" className="secondary-button">
            <Phone size={16} /> Call Us
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
