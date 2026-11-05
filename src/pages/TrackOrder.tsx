
import { useState } from "react";
import {
  PackageSearch,
  Search,
  Clock,
  Printer,
  CheckCircle2,
  Info
} from "lucide-react";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">ORDER TRACKING</span>
        <h1>Track Your Printing Order.</h1>
        <p>
          Check the progress of your print order
          using your order reference and registered
          mobile number.
        </p>
      </section>

      <section className="track-order-section section">
        <div className="track-order-card">
          <div className="track-icon">
            <PackageSearch size={35} />
          </div>

          <h2>Where is your order?</h2>
          <p>
            Enter the details provided in your
            order confirmation.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="order-id">Order Reference *</label>
            <input
              id="order-id"
              value={orderId}
              onChange={(event) => {
                setOrderId(event.target.value);
                setSubmitted(false);
              }}
              placeholder="Example: GX-2026-0001"
              required
            />

            <label htmlFor="track-mobile">Mobile Number *</label>
            <input
              id="track-mobile"
              type="tel"
              value={mobile}
              onChange={(event) => {
                setMobile(event.target.value);
                setSubmitted(false);
              }}
              placeholder="Enter registered 10-digit mobile"
              pattern="[0-9]{10}"
              required
            />

            <button type="submit" className="print-button">
              <Search size={17} />
              Track My Order
            </button>
          </form>

          {submitted && (
            <div className="track-notice">
              <Info size={20} />
              <p>
                Order tracking will become available
                after the secure order management
                backend is connected. Your entered
                details have not been submitted or
                verified.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section track-help-section">
        <div className="section-heading">
          <span className="eyebrow">ORDER STATUS GUIDE</span>
          <h2>Understanding your order journey.</h2>
        </div>

        <div className="track-status-grid">
          <article className="track-status-card">
            <Clock size={26} />
            <h3>Order Received</h3>
            <p>Your order has been successfully placed.</p>
          </article>

          <article className="track-status-card">
            <Printer size={26} />
            <h3>Printing</h3>
            <p>Your documents are being prepared.</p>
          </article>

          <article className="track-status-card">
            <CheckCircle2 size={26} />
            <h3>Ready for Pickup</h3>
            <p>Your printed documents are ready at the shop.</p>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <span className="eyebrow">NEED HELP?</span>
        <h2>We're here to assist you.</h2>
        <p>
          Call us if you have questions about
          your printing order.
        </p>

        <a href="tel:7745062299" className="print-button">
          Call 7745062299
        </a>
      </section>
    </main>
  );
}

export default TrackOrder;
