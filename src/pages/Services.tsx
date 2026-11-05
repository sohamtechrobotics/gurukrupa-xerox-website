
import { Link } from "react-router-dom";
import {
  Printer,
  Laptop,
  Landmark,
  Calculator,
  BriefcaseBusiness,
  ScanLine,
  FileText,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const serviceCategories = [
  {
    icon: Printer,
    title: "Xerox & Printing",
    description:
      "Everyday printing and document reproduction services for students, individuals and businesses.",
    services: [
      "Black and white printing",
      "Colour printing",
      "Photocopying and Xerox",
      "Document printing",
      "Document scanning"
    ]
  },
  {
    icon: Laptop,
    title: "Online Services",
    description:
      "Assistance with online applications, digital forms and document-related processes.",
    services: [
      "Online form filling",
      "Application assistance",
      "Online registrations",
      "Document uploads",
      "Digital application support"
    ]
  },
  {
    icon: Landmark,
    title: "Government Services",
    description:
      "Assistance with government-related applications and documentation requirements.",
    services: [
      "Government form assistance",
      "Online application support",
      "Document preparation",
      "Application-related assistance"
    ]
  },
  {
    icon: Calculator,
    title: "Tax Services",
    description:
      "Income tax-related work and documentation assistance.",
    services: [
      "Income tax-related work",
      "Tax documentation assistance",
      "Online tax form assistance",
      "Related documentation support"
    ]
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Data Services",
    description:
      "Digital documentation and data-related assistance for businesses and individuals.",
    services: [
      "Data entry services",
      "Document preparation",
      "Digital data management",
      "Business documentation support"
    ]
  }
];

function Services() {
  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">OUR SERVICES</span>
        <h1>Everything You Need, Under One Roof</h1>
        <p>
          Explore our printing, online, government documentation,
          tax and business support services.
        </p>
      </section>

      <section className="section services-page-section">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Explore Our Service Categories</h2>
          <p>
            Choose a category to learn more about the assistance
            available at Gurukrupa Xerox And Soham Multiservices.
          </p>
        </div>

        <div className="service-category-grid">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <article
                className="service-category-card"
                key={category.title}
              >
                <div className="service-category-top">
                  <div className="service-icon">
                    <Icon size={29} />
                  </div>
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2>{category.title}</h2>
                <p>{category.description}</p>

                <ul className="service-detail-list">
                  {category.services.map((service) => (
                    <li key={service}>
                      <CheckCircle2 size={16} />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="text-link">
                  Enquire About This Service
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="service-highlight">
        <div>
          <span className="eyebrow">ONLINE PRINTING</span>
          <h2>Planning to Print Documents?</h2>
          <p>
            Explore our planned online printing service and its
            proposed pricing and order process.
          </p>
        </div>

        <Link to="/print-online" className="primary-button">
          Explore Print Online
          <ArrowRight size={17} />
        </Link>
      </section>

      <section className="contact-cta">
        <span className="eyebrow">NEED ASSISTANCE?</span>
        <h2>Let's Discuss Your Requirements</h2>
        <p>
          Contact us to enquire about a service or get help
          understanding the process.
        </p>

        <Link to="/contact" className="primary-button">
          Contact Our Team
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default Services;
