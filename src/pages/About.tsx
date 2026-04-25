import { useState } from 'react';

export function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Jain Salt?",
      a: "Jain Salt is a pure and natural salt specifically processed without any animal-based additives, preservatives, or chemical refining, making it suitable for those following Jain dietary principles."
    },
    {
      q: "Is Jain Salt completely vegetarian and vegan?",
      a: "Yes, Jain Salt is 100% vegetarian and vegan. It is free from any animal-derived ingredients and is processed in a cruelty-free manner."
    },
    {
      q: "How is Jain Salt different from regular table salt?",
      a: "Unlike regular table salt, Jain Salt is free from additives like iodine, anti-caking agents, and preservatives. It is minimally processed to retain its natural minerals and purity."
    },
    {
      q: "Does Jain Salt contain iodine?",
      a: "No, Jain Salt is typically non-iodized to comply with Jain dietary restrictions. If you require iodine for health reasons, consult your healthcare provider."
    },
    {
      q: "Is Jain Salt good for health?",
      a: "Yes, it is free from harmful chemicals and retains essential trace minerals, making it a healthier alternative to refined salt."
    }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header text-center">
        <div className="container">
          <div className="subtitle-label">ABOUT OUR COMPANY</div>
          <h1 className="hero-title">
            Salt Manufacturing & <br/>
            <em>Exporting In India</em>
          </h1>
          <div className="divider-line center-line"></div>
        </div>
      </div>

      {/* Section 1: Legacy & Location */}
      <section className="about-content-section">
        <div className="container about-grid">
          <div className="about-text-side">
            <h2 className="section-title">Established in <em>1985</em></h2>
            <p className="section-desc">
              Jain Salt Traders has grown into a trusted name in the salt industry, known for producing high-quality salt products for both food and industrial applications. With over three decades of expertise, we specialize in manufacturing a diverse range of salts, including edible varieties (free flow, refined, crystal salt), industrial salt, and water softening salt tablets.
            </p>
            <br/>
            <h3 className="sub-heading">From the Heart of Kutch</h3>
            <p className="section-desc">
              Located in the heart of the renowned salt-producing region of Kutch, Gujarat, India, we are dedicated to delivering the highest quality salt products to customers across the globe. Our strategic presence in this resource-rich region allows us to harness the natural advantages of Kutch while combining them with advanced technology and sustainable practices. Over the years, we have become a trusted name in the salt industry, known for our commitment to quality, reliability, and global standards of excellence.
            </p>
          </div>
          <div className="about-image-side">
            <div className="elegant-image-box">
               <img src="/about_salt_ponds_elegant.png" alt="Salt Evaporation Ponds in Kutch" className="about-img grayscale-hover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Certifications & Products */}
      <section className="about-content-section bg-off-white">
        <div className="container about-grid alternate-grid">
          <div className="about-image-side">
            <div className="elegant-image-box">
               <img src="/about_crystal_macro_elegant.png" alt="Pure Salt Crystals" className="about-img grayscale-hover" />
            </div>
          </div>
          <div className="about-text-side">
            <h2 className="section-title">Certified <em>Excellence</em></h2>
            <p className="section-desc">
              At our company, quality and compliance are at the core of our operations. We are proud holders of <strong>FSSAI certification (10017021002882)</strong> and <strong>ISO certification (3708001575)</strong>. These certifications reflect our unwavering commitment to meeting international food safety and quality standards, ensuring that every product we deliver is consistent, safe, and reliable.
            </p>
            <br/>
            <h3 className="sub-heading">Wide Range of Salt Products</h3>
            <ul className="elegant-list">
              <li><strong>Edible Salt</strong> – Hygienically processed and refined, suitable for everyday household and culinary use.</li>
              <li><strong>Industrial Salt</strong> – High-quality salt designed for applications in textiles, water treatment, chemicals, and other industrial uses.</li>
              <li><strong>Food-Grade Salt</strong> – Specifically manufactured for use in food processing industries, ensuring purity and compliance with international standards.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Global Presence */}
      <section className="about-content-section">
        <div className="container about-grid">
          <div className="about-text-side">
            <h2 className="section-title">Expanding <em>Global Presence</em></h2>
            <p className="section-desc">
              With a strong focus on expanding our direct export operations, Jain Salt is steadily strengthening its footprint in international markets. Our facilities are strategically located near Mundra and Kandla ports, two of the busiest export hubs in India, ensuring efficient logistics and seamless global distribution.
            </p>
            <br/>
            <h3 className="sub-heading">Why Choose Jain Salts?</h3>
            <ul className="elegant-list">
              <li><strong>Certified Quality</strong> – Backed by FSSAI and ISO certifications.</li>
              <li><strong>Trusted Reliability</strong> – Consistent performance and timely delivery.</li>
              <li><strong>Global Reach</strong> – Export-ready with access to world-class ports.</li>
              <li><strong>Competitive Pricing</strong> – Transparent pricing structures for long-term partnerships.</li>
            </ul>
            <br/>
            <p className="section-desc highlight-quote">
              "Partner with Jain Salts and experience superior quality, reliable service, and unmatched trust in every product we deliver."
            </p>
          </div>
          <div className="about-image-side">
            <div className="elegant-image-box">
               <img src="/port_export_aesthetic.png" alt="Mundra Kandla Port Export" className="about-img grayscale-hover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-off-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
            <div className="divider-line center-line"></div>
          </div>
          
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={index}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h4>{String(index + 1).padStart(2, '0')}. {faq.q}</h4>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
