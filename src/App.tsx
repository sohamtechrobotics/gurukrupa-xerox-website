
function App() {
  return (
    <div className="app">
      <header className="site-header">
        <a href="/" className="brand">
          <span className="brand-mark">GS</span>
          <span className="brand-name">
            <strong>Gurukrupa Xerox</strong>
            <small>And Soham Multiservices</small>
          </span>
        </a>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a href="#track" className="track-link">Track Order</a>
          <a href="#print" className="print-button">Print Online</a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              YOUR ONE-STOP SERVICE DESTINATION
            </span>

            <h1>
              Every Document.
              <br />
              Every Service.
              <br />
              <span>One Trusted Place.</span>
            </h1>

            <p>
              From professional printing and photocopying to
              online applications and business services,
              we make your everyday work simpler.
            </p>

            <div className="hero-actions">
              <a href="#print" className="print-button">
                Start Printing →
              </a>
              <a href="#services" className="secondary-button">
                Explore Services
              </a>
            </div>

            <div className="hero-location">
              <span>📍</span>
              Balaji Nagar, New Bhokardan, Maharashtra
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card visual-card-main">
              <span className="visual-icon">📄</span>
              <strong>Print. Submit. Done.</strong>
              <p>Your documents, handled with care.</p>
            </div>

            <div className="visual-card visual-card-small">
              <span>✓</span>
              Reliable Services
            </div>

            <div className="visual-decoration">
              GS
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div>
            <strong>Printing</strong>
            <span>Quality document solutions</span>
          </div>
          <div>
            <strong>Online Services</strong>
            <span>Convenient digital assistance</span>
          </div>
          <div>
            <strong>Business Support</strong>
            <span>Everyday work made easier</span>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>Services designed around you.</h2>
            <p>
              One destination for your printing, documentation
              and everyday service requirements.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span>🖨️</span>
              <h3>Xerox & Printing</h3>
              <p>
                Black and white printing, colour printing,
                photocopying and scanning.
              </p>
            </article>

            <article className="service-card">
              <span>💻</span>
              <h3>Online Services</h3>
              <p>
                Online form filling, applications,
                registrations and document uploads.
              </p>
            </article>

            <article className="service-card">
              <span>🏛️</span>
              <h3>Government Services</h3>
              <p>
                Assistance with government-related
                applications and documentation.
              </p>
            </article>

            <article className="service-card">
              <span>📊</span>
              <h3>Tax & Business Services</h3>
              <p>
                Income tax-related work, data entry
                and business documentation.
              </p>
            </article>
          </div>
        </section>

        <section className="print-promo" id="print">
          <div>
            <span className="eyebrow">PRINT FROM ANYWHERE</span>
            <h2>Your documents. Our printing. Easy pickup.</h2>
            <p>
              Upload your documents online, review your
              printing details and collect your order
              from our shop.
            </p>
          </div>
          <a href="#contact" className="print-button">
            Explore Print Online →
          </a>
        </section>

        <section className="section about-section" id="about">
          <span className="eyebrow">ABOUT OUR BUSINESS</span>
          <h2>Service you can count on.</h2>
          <p>
            Gurukrupa Xerox And Soham Multiservices is your
            local destination for printing, online services,
            government documentation and business support
            in New Bhokardan.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">VISIT OR CONTACT US</span>
          <h2>We're here to help.</h2>
          <p>
            Plot No. 48, Balaji Nagar, New Bhokardan,
            Maharashtra – 431114
          </p>
          <a href="tel:7745062299" className="print-button">
            Call 7745062299
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <strong>Gurukrupa Xerox And Soham Multiservices</strong>
        <p>Your One-Stop Service Destination.</p>
        <small>© {new Date().getFullYear()} All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
