import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedNumber, useOnScreen } from '../components/AnimatedNumber';
import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { ImageMaskReveal } from '../components/animations/ImageMaskReveal';
import { FadeIn, AnimatedDivider, StaggerGrid, AnimatedCard } from '../components/animations/AnimationPrimitives';

const benefits = [
  { title: 'Strategic Location', desc: 'Based in Gandhidham, strategically near Mundra Port (70 km) and Kandla Port (20 km), facilitating efficient and cost-effective export.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>) },
  { title: 'Export-Grade Quality', desc: 'Our salt products are FSSAI & ISO certified, trusted globally for purity & consistency across all international markets.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>) },
  { title: 'Direct Manufacturer', desc: 'We provide the most competitive rates by eliminating middleman commissions, delivering exceptional value directly to our clients.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>) },
];

const products = [
  { img: '/premium_crystal_macro.png', title: 'Refined Salt', features: 'High-purity, finely milled for multipurpose industrial use.', uses: 'Key ingredient in food processing, textile finishing, & water purification.' },
  { img: '/about_crystal_macro_elegant.png', title: 'Crystal Salt', features: 'Large, dense crystals with high purity.', uses: 'Effective in water softening, de-icing, and various chemical processes.' },
  { img: '/raw_salt_bowl.png', title: 'Raw Industrial Salt', features: 'Naturally coarse and minimally processed.', uses: 'Suitable for bulk applications in non-food industries.' },
  { img: '/salt_assortment.png', title: 'Dust Powder', features: 'Extra-fine powder for precise industrial applications.', uses: 'Widely used in chemical formulations and specialized manufacturing.' },
];

export function IndustrialSalt() {
  const statsRef = useRef<HTMLElement>(null);
  useOnScreen(statsRef, "-50px");

  return (
    <div className="product-page">
      <section className="page-header product-hero">
        <div className="container about-grid">
          <div className="about-text-side">
            <FadeIn delay={0.1}><div className="subtitle-label">JAIN SALT</div></FadeIn>
            <SplitTextReveal text="Recognized Company" as="h1" className="hero-title" delay={0.08} />
            <AnimatedDivider delay={0.5} />
            <FadeIn delay={0.4}>
              <p className="section-desc">A well-established name in salt manufacturing with over 50 years of expertise. Our three manufacturing units in Kutch, Gujarat, allow us to meet an annual production capacity of 1.5 lakh metric tons across various salt grades, ensuring consistent supply and premium quality.</p>
            </FadeIn>
          </div>
          <div className="about-image-side">
            <div className="elegant-image-box" style={{ overflow: 'hidden' }}>
              <ImageMaskReveal src="/industrial_salt_warehouse.png" alt="Industrial Salt Manufacturing" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities-section bg-off-white" ref={statsRef}>
        <div className="container">
          <motion.div className="elegant-counters horizontal-counters" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            {[{ v: 15, l: 'States Domestic\nSupply of Salt' }, { v: 60, l: 'Years Professional\nExperience' }, { v: 25, l: 'Teams Professional\nExperience' }, { v: 20, l: 'Countries Internationally\nExport of Salt' }].map((s, i) => (
              <motion.div key={i} className="counter-item" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] } } }}>
                <span className="counter-num"><AnimatedNumber value={s.v} suffix="+" /></span>
                <span className="counter-label">{s.l.split('\n').map((line, j) => <span key={j}>{line}{j === 0 && <br />}</span>)}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn delay={0.1}><div className="subtitle-label">WHY CHOOSE US</div></FadeIn>
            <SplitTextReveal text="Experience the Perfect Taste" as="h2" className="section-title" delay={0.05} />
            <AnimatedDivider center delay={0.4} />
          </div>
          <StaggerGrid className="benefits-grid">
            {benefits.map((b, i) => (<AnimatedCard key={i} className="benefit-card"><div className="benefit-icon">{b.icon}</div><h3 className="benefit-title">{b.title}</h3><p className="benefit-desc">{b.desc}</p></AnimatedCard>))}
          </StaggerGrid>
          <FadeIn delay={0.3}><div className="text-center" style={{ marginTop: '40px' }}><a href="#collection" style={{ textDecoration: 'none' }}><button className="btn-outline-dark">Know More</button></a></div></FadeIn>
        </div>
      </section>

      <section className="products-section bg-off-white" id="collection">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn delay={0.1}><div className="subtitle-label">INDUSTRIAL GRADE SALT</div></FadeIn>
            <SplitTextReveal text="Precision Solutions for Industrial Applications" as="h2" className="section-title" delay={0.05} />
            <AnimatedDivider center delay={0.4} />
          </div>
          <StaggerGrid className="products-grid">
            {products.map((p, i) => (
              <AnimatedCard key={i} className="product-card">
                <div className="product-img-wrapper"><img src={p.img} alt={p.title} className="product-img" /></div>
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
