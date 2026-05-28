import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedNumber, useOnScreen } from '../components/AnimatedNumber';
import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { FadeIn, AnimatedDivider, StaggerGrid, AnimatedCard } from '../components/animations/AnimationPrimitives';
import { ProductPageHero } from '../components/ProductPageHero';

export function EdibleSalt() {
  const statsRef = useRef<HTMLElement>(null);
  useOnScreen(statsRef, '-50px');

  const benefits = [
    { title: 'Strategic Location', desc: 'Based in Gandhidham, strategically near Mundra Port (70 km) and Kandla Port (20 km), ensuring efficient, cost-effective export logistics.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>) },
    { title: 'Export-Grade Quality', desc: 'FSSAI & ISO certified products, trusted globally for purity and consistency across all international markets.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>) },
    { title: 'Direct Manufacturer', desc: 'We eliminate middlemen to deliver the most competitive rates directly to clients — maximum value, zero compromise.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>) },
  ];

  const products = [
    { pdf: '/Refined iodised free flow salt.pdf', img: '/FreeFlowSalt.jpeg', title: 'Free Flow Salt', features: 'Anti-caking properties for smooth flow.', uses: 'Ideal for home cooking, restaurants, and food services.', brands: 'Vito Fresh Free Flow Salt, Kesri Fresh Free Flow Salt, Tala Free Flow Salt' },
    { pdf: '', img: '/Crystal Salt.jpeg', title: 'Crystal Salt', features: 'Minimally processed, natural minerals.', uses: 'Suitable for culinary & rustic seasoning needs.', brands: 'Sargam Crystal Salt, Pure Crystal Salt' },
    { pdf: '', img: '/premium_crystal_macro.png', title: 'Refined Iodised Salt', features: 'Iodine-fortified for health benefits.', uses: 'Essential for daily cooking.', brands: '' },
    { pdf: '', img: '/salt_assortment.png', title: 'Common Iodised Salt', features: 'Balanced iodine content for general use.', uses: 'All-purpose cooking salt.', brands: '' },
  ];

  return (
    <div className="product-page">

      
      <ProductPageHero
        eyebrow="Edible Salt Range"
        titleLine1="Premium"
        titleLine2="Edible"
        titleLine3="Salt."
        description="60 years of crafting the finest edible salt — FSSAI & ISO certified, directly from our Kutch, Gujarat manufacturing units to kitchens and food industries worldwide."
        imageSrc="/raw_salt_bowl.png"
        imageAlt="Premium edible salt"
        stats={[
          { val: '60+', label: 'Years Legacy' },
          { val: '15+', label: 'States Supply' },
          { val: '4', label: 'Salt Grades' },
        ]}
        ctaLabel="View Collection"
        ctaHref="#collection"
      />

      {/* Collection */}
      <section className="products-section bg-off-white" id="collection">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn delay={0.1}><div className="subtitle-label">EDIBLE GRADE SALT</div></FadeIn>
            <SplitTextReveal text="Premium Quality for Your Culinary Needs" as="h2" className="section-title" delay={0.05} />
            <AnimatedDivider center delay={0.4} />
          </div>
          <StaggerGrid className="products-grid">
            {products.map((p, i) => (
              <AnimatedCard key={i} className="product-card">
                <div className="product-img-wrapper">
                  <img src={p.img} alt={p.title} className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{p.title}</h3>
                  <ul className="elegant-list" style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    <li><strong>Features:</strong> {p.features}</li>
                    <li><strong>Uses:</strong> {p.uses}</li>
                    {p.brands && <li><strong>Our Brands:</strong> {p.brands}</li>}
                  </ul>
                  
                  <div className="product-actions">
                    {p.pdf ? (
                      <a href={p.pdf} download className="btn-product btn-product-outline">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Specification
                      </a>
                    ) : (
                      <a href="/contact" className="btn-product btn-product-outline">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Ask Specification
                      </a>
                    )}
                    <a href={`https://wa.me/917990933686?text=${encodeURIComponent('Hello, I am interested in custom specifications for ' + p.title + '.')}`} target="_blank" rel="noopener noreferrer" className="btn-product btn-product-solid">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      Customize
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Stats strip */}
      <section className="capabilities-section bg-off-white" ref={statsRef}>
        <div className="container">
          <motion.div
            className="elegant-counters horizontal-counters"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}
          >
            {[
              { v: 15, l: 'States\nDomestic Supply' },
              { v: 60, l: 'Years\nExperience' },
              { v: 25, l: 'Professional\nTeam' },
              { v: 20, l: 'Countries\nExported' },
            ].map((s, i) => (
              <motion.div key={i} className="counter-item"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } } }}>
                <span className="counter-num"><AnimatedNumber value={s.v} suffix="+" /></span>
                <span className="counter-label">{s.l.split('\n').map((line, j) => <span key={j}>{line}{j === 0 && <br />}</span>)}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="about-content-section">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn delay={0.1}><div className="subtitle-label">WHY CHOOSE US</div></FadeIn>
            <SplitTextReveal text="Experience the Perfect Taste" as="h2" className="section-title" delay={0.05} />
            <AnimatedDivider center delay={0.4} />
          </div>
          <StaggerGrid className="benefits-grid">
            {benefits.map((b, i) => (
              <AnimatedCard key={i} className="benefit-card">
                <div className="benefit-icon">{b.icon}</div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </AnimatedCard>
            ))}
          </StaggerGrid>
        </div>
      </section>

      
    </div>
  );
}
