import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { ImageMaskReveal } from '../components/animations/ImageMaskReveal';
import { FadeIn, AnimatedDivider, StaggerGrid, AnimatedCard } from '../components/animations/AnimationPrimitives';

const featureItems = [
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>), label: <><strong>ISO-Certified</strong> Manufacturing</> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>), label: <><strong>Consistent Quality</strong> &amp; Delivery</> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>), label: <><strong>Customized Orders</strong> Available</> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>), label: <><strong>Competitive Pricing</strong></> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>), label: <><strong>25kg / 50kg</strong> HDPE bags</> },
  { icon: (<svg className="feature-list-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>), label: <><strong>Bulk Packaging</strong> on request</> },
];

const products = [
  { img: '/specialty_industrial_salt.png', title: 'Textile Grade Salt', desc: 'Industrial salt is used in dyeing and finishing processes to fix colors, enhance dye penetration, and stabilize chemical reactions—ensuring consistent fabric quality.' },
  { img: '/industrial_salt_warehouse.png', title: 'Chemical Grade Salt', desc: 'Industrial salt acts as a raw material in manufacturing chlorine, caustic soda, soda ash, and other chemicals. Critical for chemical synthesis and pH balancing.' },
  { img: '/premium_crystal_macro.png', title: 'Pharma Grade Salt', desc: 'Used in saline solutions, formulations, and cleaning processes, pharmaceutical-grade salt ensures hygiene, chemical balance, and regulatory compliance.' },
  { img: '/about_crystal_macro_elegant.png', title: 'Oil & Gas Industries', desc: 'High-purity salt is essential in drilling fluids, completion fluids, and refining processes. Improves wellbore stability, controls pressure, and supports efficient extraction.' },
];

const whyBenefits = [
  { title: 'High Grade', desc: 'Our specialized industrial salt is engineered to meet exacting standards, supporting efficiency, safety, and productivity across sectors.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>) },
  { title: 'Export-Grade Quality', desc: "Quality salt isn't just an ingredient—it's a critical industrial backbone trusted globally for purity and consistency.", icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>) },
  { title: 'Direct Manufacturer', desc: 'We provide the most competitive rates by eliminating middleman commissions, delivering exceptional value directly to our clients.', icon: (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>) },
];

export function SpecialtySalt() {
  return (
    <div className="product-page">
      <section className="page-header product-hero">
        <div className="container about-grid">
          <div className="about-text-side">
            <FadeIn delay={0.1}><div className="subtitle-label">YOUR NEED OF SALT IS HERE</div></FadeIn>
            <SplitTextReveal text="Specialized Industrial Salt" as="h1" className="hero-title" delay={0.08} />
            <AnimatedDivider delay={0.5} />
            <FadeIn delay={0.4}><p className="section-desc">Specialized Industrial Salt is a high-purity, purpose-engineered salt used across a wide range of industries to meet critical operational, chemical, and safety standards. Unlike regular salt, it is processed to deliver consistent composition, controlled granulation, and minimal impurities.</p></FadeIn>
            <FadeIn delay={0.55}><p className="section-desc">From supporting dye fixation in the textile industry, stabilizing drilling fluids in oil &amp; gas, ensuring formulation purity in pharmaceuticals—industrial salt plays a vital role across sectors.</p></FadeIn>
          </div>
          <div className="about-image-side">
            <div className="elegant-image-box" style={{ overflow: 'hidden' }}>
              <ImageMaskReveal src="/specialty_salt_lab.png" alt="Specialized Industrial Salt" className="about-img" />
            </div>
          </div>
        </div>
      </section>

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
              <p className="highlight-quote">"Jain Salt delivers high-purity, industry-grade salt tailored for precision, performance, and reliability. Trusted across sectors, our salt ensures process stability, safety, and consistent quality—every batch, every time."</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
