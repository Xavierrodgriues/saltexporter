import { useRef } from 'react';
import { AnimatedNumber, useOnScreen } from '../components/AnimatedNumber';

export function EdibleSalt() {
  const statsRef = useRef<HTMLElement>(null);
  useOnScreen(statsRef, "-50px");

  return (
    <div className="product-page">
      {/* Product Hero Section */}
      <section className="page-header product-hero">
        <div className="container about-grid">
          <div className="about-text-side">
            <div className="subtitle-label">JAIN SALT</div>
            <h1 className="hero-title">
              Salt Manufacturing <br/>
              <em>Company</em>
            </h1>
            <div className="divider-line"></div>
            <p className="section-desc">
              A well-established name in salt manufacturing with over 50 years of expertise. Our three manufacturing units in Kutch, Gujarat, allow us to meet an annual production capacity of 1.5 lakh metric tons across various salt grades, ensuring consistent supply and premium quality.
            </p>
          </div>
          <div className="about-image-side">
            <div className="elegant-image-box">
               <img src="/raw_salt_bowl.png" alt="Raw Salt Bowl" className="about-img grayscale-hover" />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Stats Section */}
      <section className="capabilities-section bg-off-white" ref={statsRef}>
        <div className="container">
          <div className="elegant-counters horizontal-counters">
            <div className="counter-item">
              <span className="counter-num"><AnimatedNumber value={15} suffix="+" /></span>
              <span className="counter-label">States Domestic<br/>Supply of Salt</span>
            </div>
            <div className="counter-item">
              <span className="counter-num"><AnimatedNumber value={60} suffix="+" /></span>
              <span className="counter-label">Years Professional<br/>Experience</span>
            </div>
            <div className="counter-item">
              <span className="counter-num"><AnimatedNumber value={25} suffix="+" /></span>
              <span className="counter-label">Teams Professional<br/>Experience</span>
            </div>
            <div className="counter-item">
              <span className="counter-num"><AnimatedNumber value={20} suffix="+" /></span>
              <span className="counter-label">Countries Internationally<br/>Export of Salt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-content-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="subtitle-label">WHY CHOOSE US</div>
            <h2 className="section-title">Experience the <br/><em>Perfect Taste</em></h2>
            <div className="divider-line center-line"></div>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 className="benefit-title">Strategic Location</h3>
              <p className="benefit-desc">
                Based in Gandhidham, we are strategically positioned near two major ports, with Mundra Port just 70 km away and Kandla Port only 20 km away, facilitating efficient and cost-effective export.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <h3 className="benefit-title">Export-Grade Quality</h3>
              <p className="benefit-desc">
                Our salt products are FSSAI & ISO certified, trusted globally for purity & consistency across all international markets.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="benefit-title">Direct Manufacturer Advantage</h3>
              <p className="benefit-desc">
                We provide the most competitive rates by eliminating middleman commissions, delivering exceptional value directly to our clients.
              </p>
            </div>
          </div>
          
          <div className="text-center" style={{marginTop: '40px'}}>
             <a href="#collection" style={{textDecoration: 'none'}}><button className="btn-outline-dark">Know More</button></a>
          </div>
        </div>
      </section>

      {/* The Collection Section */}
      <section className="products-section bg-off-white" id="collection">
        <div className="container">
          <div className="section-header text-center">
            <div className="subtitle-label">EDIBLE GRADE SALT</div>
            <h2 className="section-title">Premium Quality for <br/><em>Your Culinary Needs</em></h2>
            <div className="divider-line center-line"></div>
          </div>
          
          <div className="products-grid">
            
            {/* Free Flow Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/jain_edible_salt.png" alt="Free Flow Salt" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Free Flow Salt</h3>
                <ul className="elegant-list" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  <li><strong>Features:</strong> Anti-caking properties for smooth flow.</li>
                  <li><strong>Uses:</strong> Ideal for home cooking, restaurants, and food services.</li>
                </ul>
              </div>
            </div>

            {/* Crystal Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/about_crystal_macro_elegant.png" alt="Crystal Salt" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Crystal Salt</h3>
                <ul className="elegant-list" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  <li><strong>Features:</strong> Minimally processed, natural minerals.</li>
                  <li><strong>Uses:</strong> Suitable for culinary & rustic seasoning needs.</li>
                </ul>
              </div>
            </div>

            {/* Refined Iodised Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/premium_crystal_macro.png" alt="Refined Iodised Salt" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Refined Iodised Salt</h3>
                <ul className="elegant-list" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  <li><strong>Features:</strong> Iodine-fortified for health benefits.</li>
                  <li><strong>Uses:</strong> Essential for daily cooking.</li>
                </ul>
              </div>
            </div>

            {/* Common Iodised Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/salt_assortment.png" alt="Common Iodised Salt" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Common Iodised Salt</h3>
                <ul className="elegant-list" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  <li><strong>Features:</strong> Balanced iodine content for general use.</li>
                  <li><strong>Uses:</strong> All-purpose cooking salt.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
