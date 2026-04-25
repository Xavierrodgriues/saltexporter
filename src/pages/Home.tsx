import { useRef } from 'react';
import { AnimatedNumber, useOnScreen } from '../components/AnimatedNumber';

export function Home() {
  const statsRef = useRef<HTMLElement>(null);
  const areStatsVisible = useOnScreen(statsRef, "-50px");

  return (
    <>
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
              <a href="#about" style={{textDecoration: 'none'}}><button className="btn-outline-dark">Discover Our Heritage</button></a>
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
                <img src="/salt_ponds_aerial.png" alt="Salt Manufacturing Heritage" className="about-img grayscale-hover" />
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
                <span className="stat-num"><AnimatedNumber value={60} suffix="+" /></span>
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
      <section className="capabilities-section" ref={statsRef}>
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
                  <span><AnimatedNumber value={95} suffix="%" /></span>
                </div>
                <div className="progress-track"><div className="progress-fill" style={{width: areStatsVisible ? '95%' : '0%'}}></div></div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span>Industrial Grade Focus</span>
                  <span><AnimatedNumber value={80} suffix="%" /></span>
                </div>
                <div className="progress-track"><div className="progress-fill" style={{width: areStatsVisible ? '80%' : '0%'}}></div></div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span>Specialty Grade Focus</span>
                  <span><AnimatedNumber value={75} suffix="%" /></span>
                </div>
                <div className="progress-track"><div className="progress-fill" style={{width: areStatsVisible ? '75%' : '0%'}}></div></div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span>Tablet Salt Focus</span>
                  <span><AnimatedNumber value={85} suffix="%" /></span>
                </div>
                <div className="progress-track"><div className="progress-fill" style={{width: areStatsVisible ? '85%' : '0%'}}></div></div>
              </div>
            </div>
          </div>
          
          <div className="elegant-counters">
            <div className="counter-item">
              <span className="counter-num"><AnimatedNumber value={15} suffix="+" /></span>
              <span className="counter-label">States Domestic Supply</span>
            </div>
            <div className="counter-item">
              <span className="counter-num"><AnimatedNumber value={20} suffix="+" /></span>
              <span className="counter-label">Countries Exported</span>
            </div>
            <div className="counter-item">
              <span className="counter-num"><AnimatedNumber value={60} suffix="+" /></span>
              <span className="counter-label">Years of Expertise</span>
            </div>
            <div className="counter-item">
              <span className="counter-num"><AnimatedNumber value={25} suffix="+" /></span>
              <span className="counter-label">Professional Teams</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
