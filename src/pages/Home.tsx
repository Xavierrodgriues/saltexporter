import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedNumber, useOnScreen } from '../components/AnimatedNumber';
import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { ImageMaskReveal } from '../components/animations/ImageMaskReveal';
import { MagneticButton } from '../components/animations/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

// --- Horizontal marquee for a premium ticker feel ---
const products = ['Edible Salt', 'Industrial Salt', 'Crystal Salt', 'Specialty Salt', 'Tablet Salt', 'Export Grade'];

export function Home() {
  const statsRef = useRef<HTMLElement>(null);
  const areStatsVisible = useOnScreen(statsRef, "-50px");
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const productCardsRef = useRef<HTMLDivElement>(null);

  // Parallax for hero image
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // GSAP: Marquee infinite scroll
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const tl = gsap.to(marquee, {
      x: '-50%',
      duration: 18,
      ease: 'none',
      repeat: -1,
    });
    return () => { tl.kill(); };
  }, []);

  // GSAP: Staggered product cards with scrub
  useEffect(() => {
    const cards = productCardsRef.current?.querySelectorAll('.product-card');
    if (!cards) return;
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  // GSAP: Progress bars
  useEffect(() => {
    const bars = document.querySelectorAll('.progress-fill');
    bars.forEach((bar, i) => {
      const target = bar.getAttribute('data-width') || '0%';
      gsap.fromTo(bar, { width: '0%' }, {
        width: target,
        duration: 1.4,
        ease: 'power2.out',
        delay: i * 0.15,
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      {/* Hero Section with Parallax */}
      <main className="hero-section" id="home" ref={heroRef}>
        <div className="container hero-grid">
          <motion.div className="hero-text-side" style={{ y: heroTextY }}>
            <motion.div
              className="subtitle-label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              EST. 1963
            </motion.div>

            <div className="hero-title" style={{ overflow: 'hidden' }}>
              <SplitTextReveal
                text="60 Years of Excellence."
                as="h1"
                className="hero-title"
                delay={0.1}
              />
            </div>

            <motion.p
              className="hero-paragraph"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
            >
              Jain Salt Traders is a distinguished name in salt manufacturing. We provide premium Edible, Industrial, and Tablet salt for discerning international markets.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <MagneticButton>
                <a href="#about" style={{ textDecoration: 'none' }}>
                  <button className="btn-outline-dark">Discover Our Heritage</button>
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div className="hero-image-side" style={{ y: heroImgY }}>
            <div className="image-frame">
              <ImageMaskReveal
                src="/premium_crystal_macro.png"
                alt="Premium salt crystals on marble"
                className="hero-image"
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Infinite Marquee Ticker */}
      <div className="marquee-wrapper" aria-hidden="true">
        <div className="marquee-track" ref={marqueeRef}>
          {[...products, ...products].map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot">◆</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container about-grid">
          <div className="about-image-side">
            <div className="elegant-image-box" style={{ overflow: 'hidden' }}>
              <ImageMaskReveal
                src="/salt_ponds_aerial.png"
                alt="Salt Manufacturing Heritage"
                className="about-img"
              />
            </div>
          </div>
          <div className="about-text-side">
            <SplitTextReveal
              text="A Legacy of Uncompromising Quality"
              as="h2"
              className="section-title"
              delay={0.05}
            />
            <motion.div
              className="divider-line"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              viewport={{ once: true, margin: '-10%' }}
            />
            <motion.p
              className="section-desc"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              With a legacy spanning over five decades, Jain Salt Traders is a name synonymous with trust, quality, and reliability in the salt industry. Established in 1963 as Kesri Salt Works, we evolved into Jain Salt Traders in 1990, expanding our reach and refining our expertise.
            </motion.p>
            <motion.p
              className="section-desc"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our state-of-the-art manufacturing facilities in Jawaharnagar (Padana), Chirai, and Kharagoda produce a diverse range of salt products, catering to both domestic and international markets.
            </motion.p>
            <div className="about-stats">
              <div className="stat-elegant">
                <span className="stat-num"><AnimatedNumber value={60} suffix="+" /></span>
                <span className="stat-label">Years of<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with GSAP stagger */}
      <section className="products-section" id="products">
        <div className="container">
          <div className="section-header">
            <SplitTextReveal
              text="Our Collection"
              as="h2"
              className="section-title text-center"
              delay={0.05}
            />
            <motion.div
              className="divider-line center-line"
              initial={{ scaleX: 0, transformOrigin: 'center' }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
          </div>

          <div className="products-grid" ref={productCardsRef}>
            {[
              { src: '/jain_edible_salt.png', num: '01.', title: 'Edible Salt', desc: 'Free Flow Salt, Refined Salt, and Crystal Salt. Processed to the highest culinary standards.', href: '/products/edible-salt' },
              { src: '/premium_crystal_macro.png', num: '02.', title: 'Industrial Salt', desc: 'Crystal Raw, Refined, and Fine Powder Salt. Engineered for specific industrial applications.', href: '/products/industrial-salt' },
              { src: '/specialty_industrial_salt.png', num: '03.', title: 'Specialty Industrial Salt', desc: 'Highly specialized salt grades engineered for specific industrial and chemical applications.', href: '/products/specialty-industrial-salt' },
              { src: '/jain_tablet_salt.png', num: '04.', title: 'Salt Tablet', desc: 'High Purity Water Softener Salt Tablets, meticulously compressed for optimal performance.', href: '/products/salt-tablet' },
            ].map((product, i) => (
              <motion.div
                key={i}
                className="product-card"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <div className="product-img-wrapper">
                  <img src={product.src} alt={product.title} className="product-img" />
                  <div className="product-number">{product.num}</div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <a href={product.href} className="read-more">View Details</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section" ref={statsRef}>
        <div className="container capabilities-grid">
          <div className="capabilities-text">
            <SplitTextReveal text="Global Standards" as="h2" className="section-title" delay={0.05} />
            <motion.div
              className="divider-line"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
            <motion.p
              className="section-desc"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our three manufacturing units in Kutch, Gujarat, allow us to meet an annual production capacity of 1.5 lakh metric tons. We ensure consistent supply and premium quality across our entire portfolio.
            </motion.p>

            <div className="elegant-progress">
              {[
                { label: 'Edible Grade Focus', value: 95 },
                { label: 'Industrial Grade Focus', value: 80 },
                { label: 'Specialty Grade Focus', value: 75 },
                { label: 'Tablet Salt Focus', value: 85 },
              ].map((item, i) => (
                <div className="progress-item" key={i}>
                  <div className="progress-header">
                    <span>{item.label}</span>
                    <span><AnimatedNumber value={item.value} suffix="%" /></span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" data-width={`${item.value}%`} style={{ width: areStatsVisible ? `${item.value}%` : '0%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="elegant-counters">
            {[
              { value: 15, label: 'States Domestic Supply' },
              { value: 20, label: 'Countries Exported' },
              { value: 60, label: 'Years of Expertise' },
              { value: 25, label: 'Professional Teams' },
            ].map((counter, i) => (
              <motion.div
                key={i}
                className="counter-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 100 }}
                viewport={{ once: true, margin: '-10%' }}
              >
                <span className="counter-num"><AnimatedNumber value={counter.value} suffix="+" /></span>
                <span className="counter-label">{counter.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
