
import {
  UploadCloud,
  FileText,
  Settings2,
  CreditCard,
  PackageCheck,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const steps = [
  {
    icon: UploadCloud,
    number: "01",
    title: "Upload Documents",
    description:
      "Select your PDF, image or Office documents."
  },
  {
    icon: Settings2,
    number: "02",
    title: "Choose Print Settings",
    description:
      "Select colour, paper size, copies and printing sides."
  },
  {
    icon: FileText,
    number: "03",
    title: "Review Your Order",
    description:
      "Check your print-ready document and estimated price."
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Complete Payment",
    description:
      "Pay securely after reviewing your order."
  },
  {
    icon: PackageCheck,
    number: "05",
    title: "Collect Your Prints",
    description:
      "Track your order and collect it from our shop."
  }
];

function PrintOnline() {
  return (
    <main className="page-container">
      <section className="page-hero print-page-hero">
        <span className="eyebrow">SMARTER DOCUMENT PRINTING</span>

        <h1>
          Print Online.
          <br />
          <span>Collect with Ease.</span>
        </h1>

        <p>
          No need to visit the shop just to submit
          documents. Upload your files online, review
          your printing requirements and collect
          your order from our shop.
        </p>

        <a href="#how-it-works" className="print-button">
          How It Works <ArrowRight size={17} />
        </a>
      </section>

      <section className="section" id="how-it-works">
        <div className="section-heading">
          <span className="eyebrow">SIMPLE FIVE-STEP PROCESS</span>
          <h2>From your device to our printer.</h2>
          <p>
            A convenient printing experience designed
            around your time.
          </p>
        </div>

        <div className="print-steps-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="print-step-card" key={step.number}>
                <span className="print-step-number">
                  {step.number}
                </span>

                <div className="print-step-icon">
                  <Icon size={27} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="print-pricing-section section">
        <div className="section-heading">
          <span className="eyebrow">TRANSPARENT PRICING</span>
          <h2>Printing rates</h2>
          <p>
            Our planned per-sheet printing rates.
            Online order charges are shown separately.
          </p>
        </div>

        <div className="pricing-grid">
          <article className="pricing-card">
            <span className="pricing-label">BLACK & WHITE</span>
            <h3>Single-sided</h3>
            <strong>₹3 <small>/ sheet</small></strong>
          </article>

          <article className="pricing-card pricing-featured">
            <span className="pricing-label">BLACK & WHITE</span>
            <h3>Double-sided</h3>
            <strong>₹2 <small>/ sheet</small></strong>
          </article>

          <article className="pricing-card">
            <span className="pricing-label">COLOUR</span>
            <h3>Colour printing</h3>
            <strong>₹10 <small>/ sheet</small></strong>
          </article>
        </div>

        <div className="pricing-note">
          <ShieldCheck size={19} />
          <p>
            Planned online order handling charge:
            ₹3 for black & white orders or ₹5 for colour
            orders, charged once per order. The colour
            charge replaces the black & white charge.
            Double-sided printing is counted as one
            physical sheet.
          </p>
        </div>
      </section>

      <section className="print-upload-preview">
        <div className="upload-preview-icon">
          <UploadCloud size={38} />
        </div>

        <span className="eyebrow">ONLINE PRINTING PORTAL</span>

        <h2>Your printing journey starts here.</h2>

        <p>
          Our secure document upload, file preview,
          automatic pricing and online payment system
          will be available here in a later development
          stage.
        </p>

        <div className="supported-formats">
          <span>PDF</span>
          <span>JPG</span>
          <span>PNG</span>
          <span>DOCX</span>
          <span>XLSX</span>
          <span>PPTX</span>
        </div>

        <p className="upload-coming-soon">
          <FileText size={16} />
          Online ordering system — Coming Soon
        </p>
      </section>

      <section className="contact-section">
        <span className="eyebrow">NEED PRINTING ASSISTANCE?</span>
        <h2>We're happy to help.</h2>
        <p>
          Contact us for document printing enquiries
          and bulk printing requirements.
        </p>

        <a href="https://wa.me/917745062299" className="print-button" target="_blank" rel="noopener noreferrer">
          Enquire on WhatsApp
        </a>
      </section>
    </main>
  );
}

export default PrintOnline;
