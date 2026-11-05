
import { Link } from "react-router-dom";
import {
  Upload,
  FileText,
  Printer,
  Calculator,
  CreditCard,
  PackageCheck,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Info
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Documents",
    description: "Select your documents and upload them securely."
  },
  {
    icon: FileText,
    number: "02",
    title: "Review Documents",
    description: "Check the converted print-ready document and page details."
  },
  {
    icon: Printer,
    number: "03",
    title: "Choose Printing",
    description: "Select colour, paper size, sides and number of copies."
  },
  {
    icon: Calculator,
    number: "04",
    title: "Review Price",
    description: "See the calculated printing cost before proceeding."
  },
  {
    icon: CreditCard,
    number: "05",
    title: "Make Payment",
    description: "Complete payment through the planned secure checkout."
  },
  {
    icon: PackageCheck,
    number: "06",
    title: "Collect Your Order",
    description: "Receive a ready notification and collect at our shop."
  }
];

const rates = [
  {
    type: "Black & White",
    description: "Single-sided printing",
    price: "₹3",
    unit: "per sheet"
  },
  {
    type: "Black & White",
    description: "Double-sided printing",
    price: "₹2",
    unit: "per sheet"
  },
  {
    type: "Colour Printing",
    description: "Colour document printing",
    price: "₹10",
    unit: "per sheet"
  }
];

function PrintOnline() {
  return (
    <main className="page-container">
      {/* HERO */}
      <section className="page-hero print-page-hero">
        <span className="eyebrow">GURUKRUPA ONLINE PRINTING</span>
        <h1>Print Documents. Collect at Our Shop.</h1>
        <p>
          A convenient way to submit your documents online,
          review printing details and arrange shop pickup.
        </p>

        <div className="coming-soon-label">
          <Info size={16} />
          Online ordering system coming soon
        </div>
      </section>

      {/* PROCESS */}
      <section className="section print-process-section">
        <div className="section-heading">
          <span className="eyebrow">SIMPLE & CONVENIENT</span>
          <h2>How Online Printing Will Work</h2>
          <p>
            The planned ordering process will guide you through
            every step, from upload to collection.
          </p>
        </div>

        <div className="print-steps-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="print-step-card" key={step.number}>
                <div className="print-step-top">
                  <div className="print-step-icon">
                    <Icon size={26} />
                  </div>
                  <span>{step.number}</span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* PRICING */}
      <section className="section print-pricing-section">
        <div className="section-heading">
          <span className="eyebrow">PROPOSED PRINTING RATES</span>
          <h2>Simple, Transparent Pricing</h2>
          <p>
            The following are the planned online printing rates.
            Final rates will be confirmed before the ordering
            system launches.
          </p>
        </div>

        <div className="print-pricing-grid">
          {rates.map((rate, index) => (
            <article className="print-price-card" key={index}>
              <div className="print-price-icon">
                <Printer size={25} />
              </div>

              <h3>{rate.type}</h3>
              <p>{rate.description}</p>

              <div className="print-price">
                <strong>{rate.price}</strong>
                <span>{rate.unit}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="print-extra-charge">
          <Info size={20} />
          <div>
            <strong>Online Order Handling Charge</strong>
            <p>
              Black & white orders: ₹3 once per order.
              Colour orders: ₹5 once per order instead of ₹3.
              These charges are not cumulative.
            </p>
          </div>
        </div>

        <div className="print-pricing-note">
          <CheckCircle2 size={18} />
          Duplex printing is charged per physical sheet,
          not per printed side.
        </div>
      </section>

      {/* SUPPORTED FILES */}
      <section className="section print-file-section">
        <div className="print-file-content">
          <span className="eyebrow">DOCUMENT COMPATIBILITY</span>
          <h2>Supported File Formats</h2>
          <p>
            The planned system is intended to support common
            document and image formats.
          </p>

          <div className="file-format-list">
            {["PDF", "JPG", "PNG", "DOCX", "XLSX", "PPTX"].map(
              (format) => (
                <span className="file-format" key={format}>
                  <FileText size={17} />
                  {format}
                </span>
              )
            )}
          </div>
        </div>

        <div className="print-security-card">
          <ShieldCheck size={36} />
          <h3>Document Privacy</h3>
          <p>
            The planned system will use private file storage
            and a limited retention period for customer documents.
          </p>
          <small>
            Planned retention: 7 days after collection or cancellation,
            subject to necessary holds.
          </small>
        </div>
      </section>

      {/* PICKUP */}
      <section className="print-pickup-section">
        <div>
          <span className="eyebrow">EASY COLLECTION</span>
          <h2>Collect Your Prints at Our Shop</h2>
          <p>
            The planned service uses shop pickup. Customers will
            receive an estimated collection time and a confirmation
            when their order is ready.
          </p>
        </div>

        <div className="pickup-address">
          <PackageCheck size={30} />
          <strong>Gurukrupa Xerox And Soham Multiservices</strong>
          <span>
            Plot No. 48, Balaji Nagar, New Bhokardan,
            431114, Maharashtra
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <span className="eyebrow">HAVE A PRINTING ENQUIRY?</span>
        <h2>Need Printing Assistance Right Now?</h2>
        <p>
          Contact our shop for information about currently available
          printing services.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="primary-button">
            Contact Us <ArrowRight size={17} />
          </Link>

          <Link to="/help" className="secondary-button">
            Visit Help Centre
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PrintOnline;
