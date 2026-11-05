
import {
  Printer,
  Laptop,
  Landmark,
  Calculator,
  BriefcaseBusiness,
  ScanLine,
  FileText,
  ClipboardList,
  Database
} from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Xerox & Printing",
    description:
      "Document printing and photocopying solutions for everyday needs.",
    items: [
      "Black & White Printing",
      "Colour Printing",
      "Photocopying",
      "Document Scanning",
      "Document Printing"
    ]
  },
  {
    icon: Laptop,
    title: "Online Services",
    description:
      "Convenient assistance with online applications and digital processes.",
    items: [
      "Online Form Filling",
      "Application Assistance",
      "Online Registrations",
      "Document Uploads",
      "Digital Service Assistance"
    ]
  },
  {
    icon: Landmark,
    title: "Government Services",
    description:
      "Assistance with government-related applications and documentation.",
    items: [
      "Government Applications",
      "Online Government Forms",
      "Documentation Assistance",
      "Application Support"
    ]
  },
  {
    icon: Calculator,
    title: "Tax Services",
    description:
      "Assistance with income tax-related work and documentation.",
    items: [
      "Income Tax-related Work",
      "Tax Documentation",
      "Application Assistance"
    ]
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Data Services",
    description:
      "Practical document and data support for businesses and individuals.",
    items: [
      "Data Entry Services",
      "Document Preparation",
      "Business Documentation",
      "Digital Data Services"
    ]
  }
];

function Services() {
  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">OUR EXPERTISE</span>
        <h1>Services That Make Life Easier.</h1>
        <p>
          From a single photocopy to online documentation
          and business support, discover our range of
          everyday services.
        </p>
      </section>

      <section className="section services-page-section">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE OFFER</span>
          <h2>Everything you need, in one place.</h2>
          <p>
            Explore our service categories and contact
            us for assistance.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className="service-detail-card" key={service.title}>
                <div className="service-detail-icon">
                  <Icon size={30} />
                </div>

                <div className="service-detail-content">
                  <span className="service-number">
                    SERVICE 0{index + 1}
                  </span>

                  <h2>{service.title}</h2>
                  <p>{service.description}</p>

                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        <ScanLine size={15} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-section">
        <FileText size={34} />
        <h2>Need help with a service?</h2>
        <p>
          Get in touch with us to discuss your
          requirements.
        </p>

        <a href="tel:7745062299" className="print-button">
          Contact Our Team
        </a>
      </section>
    </main>
  );
}

export default Services;
