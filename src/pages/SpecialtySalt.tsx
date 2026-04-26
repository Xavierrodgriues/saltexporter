export function SpecialtySalt() {
  return (
    <div className="product-page">
      {/* Product Hero Section */}
      <section className="page-header product-hero">
        <div className="container about-grid">
          <div className="about-text-side">
            <div className="subtitle-label">YOUR NEED OF SALT IS HERE</div>
            <h1 className="hero-title">
              Specialized Industrial <br/>
              <em>Salt</em>
            </h1>
            <div className="divider-line"></div>
            <p className="section-desc">
              Specialized Industrial Salt is a high-purity, purpose-engineered salt used across a wide range of industries to meet critical operational, chemical, and safety standards. Unlike regular salt, it is processed to deliver consistent composition, controlled granulation, and minimal impurities—making it ideal for industrial applications. 
            </p>
            <p className="section-desc">
              From supporting dye fixation in the textile industry, stabilizing drilling fluids in oil & gas, ensuring formulation purity in pharmaceuticals, to enhancing nutrition in animal feeds and acting as a core raw material in the chemical sector—industrial salt plays a vital role. Its reliable performance and tailored quality make it an essential component in maintaining efficiency, product integrity, and process stability across sectors.
            </p>
          </div>
          <div className="about-image-side">
            <div className="elegant-image-box">
               <img src="/specialty_salt_lab.png" alt="Specialized Industrial Salt" className="about-img grayscale-hover" />
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
            <h2 className="section-title">Engineered For <br/><em>Your Industry</em></h2>
            <div className="divider-line center-line"></div>
          </div>
          
          <div className="products-grid">
            
            {/* Textile Grade Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/specialty_industrial_salt.png" alt="Textile Grade Salt" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Textile Grade Salt</h3>
                <p className="product-desc" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  Industrial salt is used in dyeing and finishing processes to fix colors, enhance dye penetration, and stabilize chemical reactions—ensuring consistent fabric quality and vibrant shades.
                </p>
              </div>
            </div>

            {/* Chemical Grade Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/industrial_salt_warehouse.png" alt="Chemical Grade Salt" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Chemical Grade Salt</h3>
                <p className="product-desc" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  Industrial salt acts as a raw material in manufacturing chlorine, caustic soda, soda ash, and other chemicals. It plays a critical role in chemical synthesis and pH balancing.
                </p>
              </div>
            </div>

            {/* Pharma Grade Salt */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/premium_crystal_macro.png" alt="Pharma Grade Salt" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Pharma Grade Salt</h3>
                <p className="product-desc" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  Used in saline solutions, formulations, and cleaning processes, pharmaceutical-grade salt ensures hygiene, chemical balance, and regulatory compliance in sensitive drug manufacturing.
                </p>
              </div>
            </div>

            {/* Oil & Gas Industries */}
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/about_crystal_macro_elegant.png" alt="Oil & Gas Salt" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Oil & Gas Industries</h3>
                <p className="product-desc" style={{fontSize: '0.9rem', marginBottom: '10px'}}>
                  High-purity salt is essential in drilling fluids, completion fluids, and refining processes. It improves wellbore stability, controls pressure, and supports efficient crude extraction.
                </p>
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="benefit-title">High Grade</h3>
              <p className="benefit-desc">
                Our specialized industrial salt is engineered to meet these exacting standards, supporting efficiency, safety, and productivity across sectors.
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
                Quality salt isn't just an ingredient—it's a critical industrial backbone trusted globally for purity and consistency.
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
                We provide the most competitive rates by eliminating middleman commissions, delivering exceptional value directly to our clients.
              </p>
            </div>
          </div>
          
          <div className="text-center" style={{marginTop: '60px', maxWidth: '800px', margin: '60px auto 0'}}>
             <p className="highlight-quote">
               "Jain Salt delivers high-purity, industry-grade salt tailored for precision, performance, and reliability. Trusted across sectors, our salt ensures process stability, safety, and consistent quality—every batch, every time."
             </p>
          </div>
        </div>
      </section>

    </div>
  );
}
