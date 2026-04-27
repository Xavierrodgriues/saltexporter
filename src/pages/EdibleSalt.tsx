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
    { img: '/jain_edible_salt.png', title: 'Free Flow Salt', features: 'Anti-caking properties for smooth flow.', uses: 'Ideal for home cooking, restaurants, and food services.' },
    { img: '/about_crystal_macro_elegant.png', title: 'Crystal Salt', features: 'Minimally processed, natural minerals.', uses: 'Suitable for culinary & rustic seasoning needs.' },
    { img: '/premium_crystal_macro.png', title: 'Refined Iodised Salt', features: 'Iodine-fortified for health benefits.', uses: 'Essential for daily cooking.' },
    { img: '/salt_assortment.png', title: 'Common Iodised Salt', features: 'Balanced iodine content for general use.', uses: 'All-purpose cooking salt.' },
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
              { v: 25, l: 'Professional\nTeams' },
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
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </div>
  );
}
