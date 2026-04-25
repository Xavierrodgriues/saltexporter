import { useState } from 'react';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Our Products</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
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
          <div className="logo">
            JAIN SALT
          </div>
          
          <nav className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#products" className="nav-link">Our Products</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact Us</a>
          </nav>
          
          <div className="nav-actions">
            <button className="btn-solid">Inquire Now</button>
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

      {/* Professional Hero Section */}
      <main className="hero-section" id="home">
        <div className="container hero-grid">
          <div className="hero-text-side">
            <div className="subtitle-label">EST. 1963</div>
            <h1 className="hero-title">
              60 Years of <br/>
              <em>Excellence.</em>
            </h1>
            <p className="hero-paragraph">
              Jain Salt Traders is a distinguished name in salt manufacturing. We provide premium Edible, Industrial, and Tablet salt for discerning international markets.
            </p>
            <div className="hero-cta">
              <button className="btn-outline-dark">Discover Our Heritage</button>
            </div>
          </div>
          
          <div className="hero-image-side">
            <div className="image-frame">
              <img src="/premium_crystal_macro.png" alt="Premium salt crystals on marble" className="hero-image" />
            </div>
          </div>
        </div>
      </main>

      {/* About Us Editorial Section */}
      <section className="about-section" id="about">
        <div className="container about-grid">
          <div className="about-image-side">
             <div className="elegant-image-box">
                <img src="/premium_crystal_macro.png" alt="Salt Manufacturing Heritage" className="about-img grayscale-hover" />
             </div>
          </div>
          <div className="about-text-side">
            <h2 className="section-title">A Legacy of <br/><em>Uncompromising Quality</em></h2>
            <div className="divider-line"></div>
            <p className="section-desc">
              With a legacy spanning over five decades, Jain Salt Traders is a name synonymous with trust, quality, and reliability in the salt industry. Established in 1963 as Kesri Salt Works, we evolved into Jain Salt Traders in 1990, expanding our reach and refining our expertise.
            </p>
            <p className="section-desc">
              Our state-of-the-art manufacturing facilities in Jawaharnagar (Padana), Chirai, and Kharagoda produce a diverse range of salt products, catering to both domestic and international markets. We pride ourselves on our commitment to customer satisfaction and ensuring a seamless and trustworthy partnership.
            </p>
            <div className="about-stats">
              <div className="stat-elegant">
                <span className="stat-num">60+</span>
                <span className="stat-label">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="products-section" id="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-center">Our <em>Collection</em></h2>
            <div className="divider-line center-line"></div>
          </div>
          
          <div className="products-grid">
            
            {/* Edible Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/jain_edible_salt.png" alt="Edible Grade Salt" className="product-img" />
                <div className="product-number">01.</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Edible Salt</h3>
                <p className="product-desc">Free Flow Salt, Refined Salt, and Crystal Salt. Processed to the highest culinary standards.</p>
                <a href="#" className="read-more">View Details</a>
              </div>
            </div>

            {/* Industrial Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/premium_crystal_macro.png" alt="Industrial Grade Salt" className="product-img" />
                <div className="product-number">02.</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Industrial Salt</h3>
                <p className="product-desc">Crystal Raw, Refined, and Fine Powder Salt. Engineered for specific industrial applications.</p>
                <a href="#" className="read-more">View Details</a>
              </div>
            </div>

            {/* Specialty Industrial Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/specialty_industrial_salt.png" alt="Specialty Industrial Salt" className="product-img" />
                <div className="product-number">03.</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Specialty Industrial Salt</h3>
                <p className="product-desc">Highly specialized salt grades engineered for specific industrial and chemical applications.</p>
                <a href="#" className="read-more">View Details</a>
              </div>
            </div>

            {/* Salt Tablet */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/jain_tablet_salt.png" alt="Salt Tablet" className="product-img" />
                <div className="product-number">04.</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Salt Tablet</h3>
                <p className="product-desc">High Purity Water Softener Salt Tablets, meticulously compressed for optimal performance.</p>
                <a href="#" className="read-more">View Details</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recognition & Capabilities Section */}
      <section className="capabilities-section">
        <div className="container capabilities-grid">
          
          <div className="capabilities-text">
            <h2 className="section-title">Global <em>Standards</em></h2>
            <div className="divider-line"></div>
            <p className="section-desc">
              Our three manufacturing units in Kutch, Gujarat, allow us to meet an annual production capacity of 1.5 lakh metric tons. We ensure consistent supply and premium quality across our entire portfolio.
            </p>
            
            <div className="elegant-progress">
              <div className="progress-item">
                <div className="progress-header">
                  <span>Edible Grade Focus</span>
                  <span>95%</span>
                </div>
                <div className="progress-track"><div className="progress-fill" style={{width: '95%'}}></div></div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span>Industrial Grade Focus</span>
                  <span>80%</span>
                </div>
                <div className="progress-track"><div className="progress-fill" style={{width: '80%'}}></div></div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span>Specialty Grade Focus</span>
                  <span>75%</span>
                </div>
                <div className="progress-track"><div className="progress-fill" style={{width: '75%'}}></div></div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span>Tablet Salt Focus</span>
                  <span>85%</span>
                </div>
                <div className="progress-track"><div className="progress-fill" style={{width: '85%'}}></div></div>
              </div>
            </div>
          </div>
          
          <div className="elegant-counters">
            <div className="counter-item">
              <span className="counter-num">15+</span>
              <span className="counter-label">States Domestic Supply</span>
            </div>
            <div className="counter-item">
              <span className="counter-num">20+</span>
              <span className="counter-label">Countries Exported</span>
            </div>
            <div className="counter-item">
              <span className="counter-num">60+</span>
              <span className="counter-label">Years of Expertise</span>
            </div>
            <div className="counter-item">
              <span className="counter-num">25+</span>
              <span className="counter-label">Professional Teams</span>
            </div>
          </div>

        </div>
      </section>

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

export default App;
