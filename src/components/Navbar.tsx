
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-mark">GS</span>

        <span className="brand-name">
          <strong>Gurukrupa Xerox</strong>
          <small>And Soham Multiservices</small>
        </span>
      </Link>

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
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>

        <div className="nav-dropdown">
          <button
            type="button"
            className="nav-dropdown-trigger"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
          >
            Services <ChevronDown size={15} />
          </button>

          <div
            className={`nav-dropdown-menu ${
              servicesOpen ? "dropdown-open" : ""
            }`}
          >
            <Link to="/services" onClick={closeMenu}>
              All Services
            </Link>

            <Link to="/services" onClick={closeMenu}>
              Xerox & Printing
            </Link>

            <Link to="/services" onClick={closeMenu}>
              Online Services
            </Link>

            <Link to="/services" onClick={closeMenu}>
              Government Services
            </Link>

            <Link to="/services" onClick={closeMenu}>
              Tax & Business Services
            </Link>
          </div>
        </div>

        <NavLink to="/print-online" onClick={closeMenu}>
          Print Online
        </NavLink>

        <NavLink to="/gallery" onClick={closeMenu}>
          Gallery
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>

        <NavLink
          to="/help"
          className="mobile-help-link"
          onClick={closeMenu}
        >
          Help Centre
        </NavLink>
      </nav>

      <div className="header-actions">
        <Link
          to="/track-order"
          className="track-link"
          onClick={closeMenu}
        >
          <PackageSearch size={16} />
          Track Order
        </Link>

        <Link
          to="/print-online"
          className="print-button"
          onClick={closeMenu}
        >
          <Printer size={16} />
          Print Online
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
