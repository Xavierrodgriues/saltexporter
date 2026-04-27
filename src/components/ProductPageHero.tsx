import { motion } from 'framer-motion';
import { SplitTextReveal } from './animations/SplitTextReveal';

interface Stat { val: string; label: string; }

interface ProductPageHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2?: string;
  titleLine3?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  stats: Stat[];
  ctaLabel?: string;
  ctaHref?: string;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProductPageHero({
  eyebrow, titleLine1, titleLine2, titleLine3,
  description, imageSrc, imageAlt, stats,
  ctaLabel = 'View Collection', ctaHref = '#collection',
}: ProductPageHeroProps) {
  return (
    <section className="prod-hero">
      <div className="prod-hero-inner">

        {/* LEFT */}
        <div className="prod-hero-left">
          <motion.span
            className="prod-hero-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            ◆ &nbsp;{eyebrow}&nbsp; ◆
          </motion.span>

          <div className="prod-hero-heading">
            <SplitTextReveal text={titleLine1} as="h1" className="prod-hero-h1" delay={0.05} />
            {titleLine2 && <SplitTextReveal text={titleLine2} as="h1" className="prod-hero-h1 prod-hero-h1--accent" delay={0.15} />}
            {titleLine3 && <SplitTextReveal text={titleLine3} as="h1" className="prod-hero-h1" delay={0.25} />}
          </div>

          <motion.p
            className="prod-hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: EASE }}
          >
            {description}
          </motion.p>

          <motion.div
            className="prod-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1, ease: EASE }}
          >
            <a href={ctaHref} style={{ textDecoration: 'none' }}>
              <button className="btn-hero-primary">{ctaLabel}</button>
            </a>
            <a href="/contact" className="btn-hero-ghost">Get a Quote →</a>
          </motion.div>

          <motion.div
            className="prod-hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.3, ease: EASE }}
          >
            {stats.map((s, i) => (
              <div key={i} className="prod-stat-item">
                <span className="prod-stat-val">{s.val}</span>
                <span className="prod-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          className="prod-hero-right"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
        >
          <div className="prod-hero-geo-circle" />
          <div className="prod-hero-geo-ring" />
          <div className="prod-hero-img-frame">
            <img src={imageSrc} alt={imageAlt} className="prod-hero-img" />
          </div>
          <div className="prod-hero-badge">
            <span className="prod-badge-num">✦</span>
            <span className="prod-badge-text">Export Grade Quality</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
