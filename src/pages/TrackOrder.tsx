
import { useState, type FormEvent } from "react";
import {
  PackageSearch,
  Search,
  ShieldCheck,
  MessageCircle,
  ClipboardList
} from "lucide-react";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const contactOnWhatsApp = () => {
    const message = `Hello! I would like to enquire about my order.

Order Reference: ${orderId}
Mobile Number: ${mobile}

Please help me with the order status.`;

    window.open(
      `https://wa.me/917745062299?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">ORDER MANAGEMENT</span>
        <h1>Track Your Order</h1>
        <p>
          Enter your order details to enquire about the status
          of your printing order.
        </p>
      </section>

      <section className="track-order-section section">
        <div className="track-order-card">
          <div className="track-icon">
            <PackageSearch size={38} />
          </div>

          <h2>Where Is Your Order?</h2>
          <p>
            Enter the order reference and mobile number associated
            with your order.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="order-id">Order Reference Number</label>
            <input
              id="order-id"
              type="text"
              placeholder="Example: GX-2026-0001"
              value={orderId}
              onChange={(event) => {
                setOrderId(event.target.value);
                setSubmitted(false);
              }}
              required
            />

            <label htmlFor="order-mobile">Registered Mobile Number</label>
            <input
              id="order-mobile"
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(event) => {
                setMobile(event.target.value);
                setSubmitted(false);
              }}
              pattern="[0-9+\-\s]{10,15}"
              required
            />

            <button type="submit" className="primary-button">
              <Search size={17} />
              Check Order Status
            </button>
          </form>

          {submitted && (
            <div className="tracking-message">
              <ClipboardList size={23} />
              <div>
                <strong>Live tracking is being prepared.</strong>
                <p>
                  Online order tracking is not connected yet.
                  You can contact our shop with your order details
                  for assistance.
                </p>
                <button
                  type="button"
                  className="text-link"
                  onClick={contactOnWhatsApp}
                >
                  <MessageCircle size={16} />
                  Enquire on WhatsApp
                </button>
              </div>
            </div>
          )}

          <div className="track-security-note">
            <ShieldCheck size={18} />
            <span>
              Your order details should only be shared through
              our official contact channels.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TrackOrder;
