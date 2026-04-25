import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  return (
    <div className="app-container premium-editorial">
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <nav className="mobile-nav-links">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          
          <div className="mobile-nav-accordion">
            <div className="mobile-accordion-header" onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}>
              <span>Our Products</span>
              <span className="mobile-accordion-icon">{isMobileProductsOpen ? '−' : '+'}</span>
            </div>
            <div className={`mobile-accordion-content ${isMobileProductsOpen ? 'open' : ''}`}>
              <Link to="/products/edible-salt" onClick={() => setIsMobileMenuOpen(false)}>Edible Salt</Link>
              <Link to="/products/industrial-salt" onClick={() => setIsMobileMenuOpen(false)}>Industrial Salt</Link>
              <a href="/#products" onClick={() => setIsMobileMenuOpen(false)}>Specialty Industrial Salt</a>
              <a href="/#products" onClick={() => setIsMobileMenuOpen(false)}>Salt Tablet</a>
            </div>
          </div>

          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </nav>
      </div>

      {/* Utility Top Bar */}
      <div className="utility-bar">
        <div className="container utility-content">
          <div className="contact-info">
            <span>+91 79909 33686</span>
            <span className="divider">|</span>
            <span>info@saltexporter.com</span>
          </div>
        </div>
      </div>

      {/* Minimalist Navbar */}
      <header className="minimal-nav">
        <div className="container nav-content">
          <Link to="/" className="logo" style={{textDecoration: 'none', color: 'inherit'}}>
            JAIN SALT
          </Link>
          
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <div className="nav-dropdown">
              <a href="/#products" className="nav-link">Our Products</a>
              <div className="dropdown-content">
                <Link to="/products/edible-salt" className="dropdown-item">Edible Salt</Link>
                <Link to="/products/industrial-salt" className="dropdown-item">Industrial Salt</Link>
                <a href="/#products" className="dropdown-item">Specialty Industrial Salt</a>
                <a href="/#products" className="dropdown-item">Salt Tablet</a>
              </div>
            </div>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </nav>
          
          <div className="nav-actions">
            <Link to="/contact"><button className="btn-solid">Inquire Now</button></Link>
            <div className="mobile-menu" onClick={() => setIsMobileMenuOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <Outlet />

      {/* Minimalist Footer */}
      <footer className="minimal-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">JAIN SALT</div>
            <p className="footer-desc">
              Jain Salt Traders delivers high-quality salt to clients worldwide from our base in Kutch, near Kandla & Mundra Port. Dedicated to premium export solutions globally.
            </p>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="#">Free Flow Iodised Salt</a></li>
              <li><a href="#">Refined Salt</a></li>
              <li><a href="#">Industrial Salt</a></li>
              <li><a href="#">Water Softening Tablets</a></li>
              <li><a href="#">Super Fine Salt</a></li>
            </ul>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-heading">Location</h4>
            <ul>
              <li>Kutch, Gujarat</li>
              <li>Near Kandla & Mundra Port</li>
              <li>India</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p>© 2024 JainSalt — Salt Manufacturer and Exporters</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
