
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Printer,
  PackageSearch
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <a href="#home" className="brand" onClick={closeMenu}>
        <span className="brand-mark">GS</span>

        <span className="brand-name">
          <strong>Gurukrupa Xerox</strong>
          <small>And Soham Multiservices</small>
        </span>
      </a>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`main-nav ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About Us</a>

        <div className="nav-dropdown">
          <button
            type="button"
            className="nav-dropdown-trigger"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
          >
            Services <ChevronDown size={15} />
          </button>

          <div className={`nav-dropdown-menu ${servicesOpen ? "dropdown-open" : ""}`}>
            <a href="#services" onClick={closeMenu}>Xerox & Printing</a>
            <a href="#services" onClick={closeMenu}>Online Services</a>
            <a href="#services" onClick={closeMenu}>Government Services</a>
            <a href="#services" onClick={closeMenu}>Tax & Business Services</a>
          </div>
        </div>

        <a href="#print" onClick={closeMenu}>Print Online</a>
        <a href="#contact" onClick={closeMenu}>Contact Us</a>
      </nav>

      <div className="header-actions">
        <a href="#track" className="track-link">
          <PackageSearch size={16} />
          Track Order
        </a>

        <a href="#print" className="print-button">
          <Printer size={16} />
          Print Online
        </a>
      </div>
    </header>
  );
}

export default Navbar;
