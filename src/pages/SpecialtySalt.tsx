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

const products = [
  { img: '/specialty_industrial_salt.png', title: 'Textile Grade Salt', desc: 'Used in dyeing and finishing processes to fix colors, enhance dye penetration, and stabilize chemical reactions.' },
  { img: '/industrial_salt_warehouse.png', title: 'Chemical Grade Salt', desc: 'Raw material for manufacturing chlorine, caustic soda, and soda ash. Critical for chemical synthesis and pH balancing.' },
  { img: '/premium_crystal_macro.png', title: 'Pharma Grade Salt', desc: 'Used in saline solutions and formulations. Ensures hygiene, chemical balance, and regulatory compliance.' },
  { img: '/about_crystal_macro_elegant.png', title: 'Oil & Gas Industries', desc: 'Essential in drilling fluids and completion fluids. Improves wellbore stability and supports efficient extraction.' },
];

const whyBenefits = [
  { title: 'High Grade', desc: 'Engineered to meet exacting standards, supporting efficiency, safety, and productivity across sectors.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>) },
  { title: 'Export-Grade Quality', desc: "Quality salt isn't just an ingredient—it's a critical industrial backbone trusted globally for purity and consistency.", icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>) },
  { title: 'Direct Manufacturer', desc: 'We eliminate middlemen to deliver the most competitive rates and exceptional value directly to our clients.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>) },
];

export function SpecialtySalt() {
  return (
    <div className="product-page">
      <ProductPageHero
        eyebrow="Specialty Industrial Salt"
        titleLine1="Specialized"
        titleLine2="for Industry"
        titleLine3="Salt."
        description="High-purity, purpose-engineered salt for textiles, chemicals, pharma, and oil & gas. Consistent composition, controlled granulation, minimal impurities."
        imageSrc="/specialty_salt_lab.png"
        imageAlt="Specialized industrial salt"
        stats={[
          { val: '4+', label: 'Industry Sectors' },
          { val: 'ISO', label: 'Certified' },
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
            <SplitTextReveal text="Engineered For Your Industry" as="h2" className="section-title" delay={0.05} />
            <AnimatedDivider center delay={0.4} />
          </div>
          <StaggerGrid className="products-grid">
            {products.map((p, i) => (
              <AnimatedCard key={i} className="product-card">
                <div className="product-img-wrapper"><img src={p.img} alt={p.title} className="product-img" /></div>
                <div className="product-info"><h3 className="product-title">{p.title}</h3><p className="product-desc" style={{ fontSize: '0.9rem' }}>{p.desc}</p></div>
              </AnimatedCard>
            ))}
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
          <FadeIn delay={0.4}>
            <div className="text-center" style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
              <p className="highlight-quote">"Jain Salt delivers high-purity, industry-grade salt tailored for precision, performance, and reliability — trusted across sectors, every batch, every time."</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
