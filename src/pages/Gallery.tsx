
import { useState } from "react";
import {
  Camera,
  Image as ImageIcon,
  Printer,
  Store,
  BriefcaseBusiness
} from "lucide-react";

const categories = [
  "All",
  "Shop Photos",
  "Printing",
  "Our Work",
  "Moments"
];

const galleryItems = [
  {
    id: 1,
    title: "Our Shop",
    category: "Shop Photos",
    description: "A look inside Gurukrupa Xerox."
  },
  {
    id: 2,
    title: "Printing Services",
    category: "Printing",
    description: "Everyday printing and photocopying."
  },
  {
    id: 3,
    title: "Document Services",
    category: "Our Work",
    description: "Documentation and online service assistance."
  },
  {
    id: 4,
    title: "Customer Service",
    category: "Moments",
    description: "Helping customers with their requirements."
  },
  {
    id: 5,
    title: "Colour Printing",
    category: "Printing",
    description: "Colour document printing services."
  },
  {
    id: 6,
    title: "Business Services",
    category: "Our Work",
    description: "Business and data-related assistance."
  }
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">OUR GALLERY</span>
        <h1>A Glimpse of What We Do</h1>
        <p>
          Explore our shop, printing services and the different
          ways we assist our customers.
        </p>
      </section>

      <section className="section gallery-section">
        <div className="gallery-intro">
          <div>
            <span className="eyebrow">EXPLORE OUR WORK</span>
            <h2>Our Work & Services</h2>
          </div>
          <p>
            Browse the categories to explore different aspects
            of our business.
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <article className="gallery-card" key={item.id}>
              <div className="gallery-placeholder">
                <div className="gallery-placeholder-icon">
                  {item.category === "Shop Photos" ? (
                    <Store size={38} />
                  ) : item.category === "Printing" ? (
                    <Printer size={38} />
                  ) : item.category === "Our Work" ? (
                    <BriefcaseBusiness size={38} />
                  ) : (
                    <Camera size={38} />
                  )}
                </div>

                <span>PHOTO COMING SOON</span>
              </div>

              <div className="gallery-card-content">
                <span className="gallery-category">
                  {item.category}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="gallery-empty">
            <ImageIcon size={30} />
            <p>No gallery items found.</p>
          </div>
        )}
      </section>

      <section className="contact-cta">
        <span className="eyebrow">STAY CONNECTED</span>
        <h2>Want to Know More About Our Services?</h2>
        <p>
          Contact us for information, enquiries and assistance.
        </p>

        <a href="/gurukrupa-xerox-website/#/contact" className="primary-button">
          Get in Touch
        </a>
      </section>
    </main>
  );
}

export default Gallery;
