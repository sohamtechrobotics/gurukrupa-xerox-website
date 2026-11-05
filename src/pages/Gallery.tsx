
import {
  Image,
  Printer,
  FileText,
  Building2,
  Camera
} from "lucide-react";

const galleryCategories = [
  {
    icon: Building2,
    title: "Our Shop",
    description:
      "A look inside Gurukrupa Xerox And Soham Multiservices.",
    label: "SHOP PHOTOS",
    className: "gallery-shop"
  },
  {
    icon: Printer,
    title: "Printing Facilities",
    description:
      "Our printing and photocopying facilities.",
    label: "PRINTING",
    className: "gallery-printing"
  },
  {
    icon: FileText,
    title: "Our Services",
    description:
      "A glimpse of the documentation and services we provide.",
    label: "OUR WORK",
    className: "gallery-services"
  },
  {
    icon: Camera,
    title: "Customer Moments",
    description:
      "Special moments and experiences from our business.",
    label: "MOMENTS",
    className: "gallery-moments"
  }
];

function Gallery() {
  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">OUR WORK & ENVIRONMENT</span>
        <h1>A Closer Look at Our World.</h1>
        <p>
          Explore our workplace, printing facilities
          and the services we provide.
        </p>
      </section>

      <section className="section gallery-section">
        <div className="section-heading">
          <span className="eyebrow">OUR GALLERY</span>
          <h2>Stories through pictures.</h2>
          <p>
            This gallery will feature photographs of
            our shop, equipment, services and business
            activities.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryCategories.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className={`gallery-card ${item.className}`}
                key={item.title}
              >
                <div className="gallery-placeholder">
                  <Icon size={42} strokeWidth={1.4} />
                  <span>
                    <Image size={15} />
                    Photo Coming Soon
                  </span>
                </div>

                <div className="gallery-card-content">
                  <span className="eyebrow">
                    {item.label}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-section">
        <span className="eyebrow">COME VISIT US</span>
        <h2>See our services in person.</h2>
        <p>
          Visit our shop at Plot No. 48, Balaji Nagar,
          New Bhokardan, Maharashtra – 431114.
        </p>
        <a href="tel:7745062299" className="print-button">
          Contact Us
        </a>
      </section>
    </main>
  );
}

export default Gallery;
