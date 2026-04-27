import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { FadeIn, AnimatedDivider, StaggerGrid, AnimatedCard } from '../components/animations/AnimationPrimitives';
import { ProductPageHero } from '../components/ProductPageHero';

const featureItems = [
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>), label: <><strong>ISO-Certified</strong> Manufacturing</> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>), label: <><strong>Consistent Quality</strong> &amp; Delivery</> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>), label: <><strong>Customized Orders</strong> Available</> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>), label: <><strong>Competitive Pricing</strong></> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>), label: <><strong>25kg / 50kg</strong> HDPE bags</> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>), label: <><strong>Bulk Packaging</strong> on request</> },
];

const whyBenefits = [
  { title: 'Purity', desc: '99.5% purity — high-density, slow-dissolving formula ensuring optimal efficiency in all water systems.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>) },
  { title: 'Export-Grade Quality', desc: 'Specially formulated for all types of water softeners and ion exchange systems.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>) },
  { title: 'Direct Manufacturer', desc: 'We eliminate middlemen to deliver the most competitive rates and exceptional value directly to clients.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>) },
];

const industries = [
  { title: 'Textile Industry', desc: 'Soft water improves dye absorption and machinery efficiency.' },
  { title: 'Pharmaceuticals', desc: 'Ensures purified water for sensitive formulations and equipment.' },
  { title: 'Food & Beverage', desc: 'Enhances water quality for processing, cleaning, and consistency.' },
  { title: 'Hotels & Hospitality', desc: 'Protects boilers, plumbing, and laundry systems from scale.' },
  { title: 'Hospitals & Labs', desc: 'Maintains sterile environments and supports medical-grade water use.' },
  { title: 'Bottled Water Plants', desc: 'Ensures consistent TDS and taste profiles in purified water.' },
  { title: 'Automotive Industry', desc: 'Supports painting, coating, and cooling systems.' },
  { title: 'Power Plants & Boilers', desc: 'Prevents mineral deposits in heating systems.' },
];

export function TabletSalt() {
  return (
    <div className="product-page">
      <ProductPageHero
        eyebrow="Water Softening Salt"
        titleLine1="Purity"
        titleLine2="Powering"
        titleLine3="Soft Water."
        description="Premium-grade salt tablets engineered for water softening systems. 99.5%+ purity, fast-dissolving, low residue — trusted by industries worldwide."
        imageSrc="/salt_tablets_hero.png"
        imageAlt="High purity salt tablets"
        stats={[
          { val: '99.5%', label: 'Salt Purity' },
          { val: '8+', label: 'Industries' },
          { val: '20+', label: 'Countries' },
        ]}
        ctaLabel="View Products"
        ctaHref="#collection"
      />

      <section className="about-content-section bg-off-white">
        <div className="container">
          <div className="section-header text-center">
            <SplitTextReveal text="Why Choose Us?" as="h2" className="section-title" delay={0.05} />
            <AnimatedDivider center delay={0.4} />
          </div>
          <StaggerGrid className="features-list-grid">
            {featureItems.map((f, i) => (
              <AnimatedCard key={i} className="feature-list-item">
                {f.icon}
                <span className="feature-list-text">{f.label}</span>
              </AnimatedCard>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="products-section" id="collection">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn delay={0.1}><div className="subtitle-label">OUR EXPERTISE</div></FadeIn>
            <SplitTextReveal text="High-Performance Water Softening Salt" as="h2" className="section-title" delay={0.05} />
            <AnimatedDivider center delay={0.4} />
          </div>
          <StaggerGrid className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 450px))', justifyContent: 'center' }}>
            <AnimatedCard className="product-card">
              <div className="product-img-wrapper"><img src="/about_crystal_macro_elegant.png" alt="Water Softening Crystal Salt" className="product-img" /></div>
              <div className="product-info">
                <h3 className="product-title">Water Softening Salt (Crystal)</h3>
                <ul className="elegant-list" style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                  <li><strong>Features:</strong> Prevents mineral buildup in water systems.</li>
                  <li><strong>Uses:</strong> Residential &amp; commercial water softening.</li>
                </ul>
              </div>
            </AnimatedCard>
            <AnimatedCard className="product-card">
              <div className="product-img-wrapper"><img src="/jain_tablet_salt.png" alt="Salt Tablet >99.5% Purity" className="product-img" /></div>
              <div className="product-info">
                <h3 className="product-title">Salt Tablet &gt;99.5% Purity Grade</h3>
                <ul className="elegant-list" style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                  <li><strong>Features:</strong> Compressed tablets dissolve quickly.</li>
                  <li><strong>Uses:</strong> Large-scale water softening, purification systems.</li>
                </ul>
              </div>
            </AnimatedCard>
          </StaggerGrid>
        </div>
      </section>

      <section className="about-content-section bg-off-white">
        <div className="container">
          <div className="section-header text-center">
            <FadeIn delay={0.1}><div className="subtitle-label">WHY JAIN SALT?</div></FadeIn>
            <SplitTextReveal text="The Critical Industrial Backbone" as="h2" className="section-title" delay={0.05} />
            <AnimatedDivider center delay={0.4} />
          </div>
          <StaggerGrid className="benefits-grid">
            {whyBenefits.map((b, i) => (<AnimatedCard key={i} className="benefit-card"><div className="benefit-icon">{b.icon}</div><h3 className="benefit-title">{b.title}</h3><p className="benefit-desc">{b.desc}</p></AnimatedCard>))}
          </StaggerGrid>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="section-header text-center">
            <SplitTextReveal text="Industries We Serve" as="h2" className="section-title" delay={0.05} />
            <AnimatedDivider center delay={0.4} />
            <FadeIn delay={0.3}><p className="section-desc text-center" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>Our salt tablets are widely used across industries for water treatment and softening applications.</p></FadeIn>
          </div>
          <StaggerGrid className="industries-grid">
            {industries.map((ind, i) => (
              <AnimatedCard key={i} className="industry-item">
                <h4>{ind.title}</h4>
                <p>{ind.desc}</p>
              </AnimatedCard>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </div>
  );
}
