export function TabletSalt() {
  return (
    <div className="product-page">
      {/* Product Hero Section */}
      <section className="page-header product-hero">
        <div className="container about-grid">
          <div className="about-text-side">
            <div className="subtitle-label">WATER SOFTENING SALT</div>
            <h1 className="hero-title">
              Purity That Powers <br/>
              <em>Soft Water</em>
            </h1>
            <div className="divider-line"></div>
            <p className="section-desc">
              <strong>Tablet Salt – High Purity Water Softener Salt Tablets</strong><br/><br/>
              At Jain Salt, we specialize in manufacturing premium-grade water softening salt, with a strong focus on high-purity salt tablets designed for efficient water treatment systems. With years of experience in the salt industry, we deliver solutions that ensure smooth operations across residential, commercial, and industrial sectors. Our commitment to quality, consistency, and purity has made us a trusted name in the water softening market.
            </p>
            <p className="section-desc">
              Our salt products are manufactured using refined processes that ensure low residue, fast dissolving properties, and optimal performance in softeners and water treatment units. Whether you’re an industrial plant or a domestic user, our salt tablets deliver clean, soft water that protects your equipment and enhances efficiency.
            </p>
          </div>
          <div className="about-image-side">
            <div className="elegant-image-box">
               <img src="/salt_tablets_hero.png" alt="High Purity Salt Tablets" className="about-img grayscale-hover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us List */}
      <section className="about-content-section bg-off-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose <em>Us?</em></h2>
            <div className="divider-line center-line"></div>
          </div>
          <div className="features-list-grid">
            <div className="feature-list-item">
               <svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
               <span className="feature-list-text"><strong>ISO-Certified</strong> Manufacturing</span>
            </div>
            <div className="feature-list-item">
               <svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
               <span className="feature-list-text"><strong>Consistent Quality</strong> & Delivery</span>
            </div>
            <div className="feature-list-item">
               <svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
               <span className="feature-list-text"><strong>Customized Orders</strong> Available</span>
            </div>
            <div className="feature-list-item">
               <svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
               <span className="feature-list-text"><strong>Competitive Pricing</strong></span>
            </div>
            <div className="feature-list-item">
               <svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
               <span className="feature-list-text"><strong>25kg / 50kg</strong> HDPE bags</span>
            </div>
            <div className="feature-list-item">
               <svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
               <span className="feature-list-text"><strong>Bulk Packaging</strong> on request</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Collection Section */}
      <section className="products-section" id="collection">
        <div className="container">
          <div className="section-header text-center">
            <div className="subtitle-label">OUR EXPERTISE</div>
            <h2 className="section-title">High-Performance <br/><em>Water Softening Salt</em></h2>
            <div className="divider-line center-line"></div>
          </div>
          
          <div className="products-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 450px))', justifyContent: 'center'}}>
            
            {/* Water Softening Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/about_crystal_macro_elegant.png" alt="Water Softening Crystal Salt" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Water Softening Salt (Crystal)</h3>
                <ul className="elegant-list" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  <li><strong>Features:</strong> Prevents mineral buildup in water systems.</li>
                  <li><strong>Uses:</strong> Residential & commercial water softening.</li>
                </ul>
              </div>
            </div>

            {/* Salt Tablet */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/jain_tablet_salt.png" alt="Salt Tablet >99.5% Purity" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Salt Tablet &gt;99.5% Purity Grade</h3>
                <ul className="elegant-list" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  <li><strong>Features:</strong> Compressed tablets dissolve quickly.</li>
                  <li><strong>Uses:</strong> Large-scale water softening, purification systems.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Jain Salt Benefits Grid */}
      <section className="about-content-section bg-off-white">
        <div className="container">
          <div className="section-header text-center">
            <div className="subtitle-label">WHY JAIN SALT?</div>
            <h2 className="section-title">The Critical <br/><em>Industrial Backbone</em></h2>
            <div className="divider-line center-line"></div>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="benefit-title">Purity</h3>
              <p className="benefit-desc">
                99.5% purity - High-density, slow-dissolving formula ensuring optimal efficiency in all systems.
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
                Our Salt Tablets are specially formulated for use in all types of water softeners and ion exchange systems.
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
              <h3 className="benefit-title">Direct Manufacturer</h3>
              <p className="benefit-desc">
                We provide the most competitive rates by eliminating middleman commissions, delivering exceptional value directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="about-content-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Industries We <em>Serve</em></h2>
            <div className="divider-line center-line"></div>
            <p className="section-desc text-center" style={{maxWidth: '800px', margin: '0 auto 40px'}}>
              Our salt tablets are widely used across various industries for water treatment and softening applications.
            </p>
          </div>
          
          <div className="industries-grid">
             <div className="industry-item">
               <h4>Textile Industry</h4>
               <p>Soft water improves dye absorption and machinery efficiency.</p>
             </div>
             <div className="industry-item">
               <h4>Pharmaceuticals</h4>
               <p>Ensures purified water for sensitive formulations and equipment.</p>
             </div>
             <div className="industry-item">
               <h4>Food & Beverage</h4>
               <p>Enhances water quality for processing, cleaning, and consistency.</p>
             </div>
             <div className="industry-item">
               <h4>Hotels & Hospitality</h4>
               <p>Protects boilers, plumbing, and laundry systems from scale.</p>
             </div>
             <div className="industry-item">
               <h4>Hospitals & Labs</h4>
               <p>Maintains sterile environments and supports medical-grade water use.</p>
             </div>
             <div className="industry-item">
               <h4>Bottled Water Plants</h4>
               <p>Ensures consistent TDS and taste profiles in purified water.</p>
             </div>
             <div className="industry-item">
               <h4>Automotive Industry</h4>
               <p>Supports painting, coating, and cooling systems.</p>
             </div>
             <div className="industry-item">
               <h4>Power Plants & Boilers</h4>
               <p>Prevents mineral deposits in heating systems.</p>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
