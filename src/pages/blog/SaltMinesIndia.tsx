import { motion } from 'framer-motion';
import { SeoHead } from '../../components/SeoHead';
import { SplitTextReveal } from '../../components/animations/SplitTextReveal';
import { Link } from 'react-router-dom';
import { buildWebPageSchema, buildBreadcrumbSchema, buildArticleSchema } from '../../seo/schemas';

export function SaltMinesIndia() {
  const articleSchema = buildArticleSchema({
    headline: 'Does India Have Salt Mines? Discovering India’s Rock Salt',
    description: 'While famous for sea salt, does India have salt mines? Learn about the Mandi rock salt mines in Himachal Pradesh and India’s unique salt sources.',
    image: '/specialty_industrial_salt.png',
    datePublished: '2024-06-10T08:00:00+05:30',
    dateModified: '2024-06-10T08:00:00+05:30',
    url: '/blog/does-india-have-salt-mines'
  });

  return (
    <>
      <SeoHead
        title="Does India Have Salt Mines? | Indian Rock Salt | Jain Salt"
        description="While famous for sea salt, does India have salt mines? Learn about the Mandi rock salt mines in Himachal Pradesh and India’s unique salt sources."
        canonical="/blog/does-india-have-salt-mines"
        keywords="does india have salt mines, rock salt india, mandi salt mines, himachal pradesh rock salt, indian salt mines, underground salt india"
        schema={[
          buildWebPageSchema({
            name: 'Does India Have Salt Mines?',
            description: 'While famous for sea salt, does India have salt mines? Learn about the Mandi rock salt mines in Himachal Pradesh and India’s unique salt sources.',
            url: '/blog/does-india-have-salt-mines'
          }),
          buildBreadcrumbSchema([
            { name: 'Home', url: 'https://www.saltexporter.com/' },
            { name: 'Blog', url: 'https://www.saltexporter.com/blog' },
            { name: 'Does India Have Salt Mines?', url: 'https://www.saltexporter.com/blog/does-india-have-salt-mines' }
          ]),
          articleSchema
        ]}
      />

      <main className="blog-article-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-pure-white)', color: 'var(--text-dark)', minHeight: '100vh' }}>
        <article className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ marginBottom: '40px' }}>
            <Link to="/blog" style={{ color: '#c9a84c', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>&larr; Back to Blog</Link>
            <SplitTextReveal text="Does India Have Salt Mines? Discovering India’s Rock Salt" as="h1" className="section-title" delay={0.1} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', color: 'var(--text-muted)' }}>
              <span>Published on June 10, 2024</span>
              <span>•</span>
              <span>3 min read</span>
            </div>
          </header>

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/specialty_industrial_salt.png"
            alt="Specialty salt crystals"
            style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '40px' }}
          />

          <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <p>When people think of salt production in India, they usually picture the brilliant white salt pans stretching across the coastal landscapes of Gujarat. Because over 90% of India's salt is produced through solar evaporation of seawater or sub-soil brine, a common question arises: <strong>does India have salt mines?</strong></p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>The Short Answer: Yes</h2>
            <p>While nowhere near as prominent as sea salt production, India does possess underground rock salt mines. However, they are highly localized and contribute a very small fraction to the nation's total salt output.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>The Mandi Rock Salt Mines</h2>
            <p>The only commercially viable rock salt mines in India are located in the Mandi district of Himachal Pradesh. These mines, primarily situated in Drang and Guma, are nestled in the Himalayan foothills.</p>
            <p>Key facts about Mandi salt:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Geological History:</strong> The deposits are remnants of ancient, dried-up seas that existed millions of years ago before the Himalayas were formed.</li>
              <li style={{ marginBottom: '10px' }}><strong>Color and Composition:</strong> The rock salt found here often has a reddish-brown or dark hue due to the presence of various minerals and trace elements.</li>
              <li style={{ marginBottom: '10px' }}><strong>Usage:</strong> Because of its unique mineral profile, this salt is highly valued in Ayurveda and is often preferred for fasting periods and traditional medicine. It is also processed for use as animal lick salt.</li>
            </ul>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Why Sea Salt Dominates</h2>
            <p>Despite the presence of the Mandi mines, the vast majority of rock salt consumed in India (often sold as Himalayan Pink Salt) is imported, primarily from the Khewra Salt Mine in neighboring Pakistan.</p>
            <p>The reason India relies so heavily on sea salt is simple economics and geography. The extensive coastline and ideal climate in states like Gujarat make solar evaporation incredibly efficient and cost-effective compared to the heavy machinery and labor required for underground mining.</p>

            <h2 style={{ color: '#fff', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Conclusion</h2>
            <p>So, does India have salt mines? Yes, the Mandi mines stand as a unique geological treasure. However, the true powerhouse of India's salt industry remains its coastal regions, where manufacturers refine the ocean's bounty into the salt that seasons the world's food and powers its industries.</p>
          </div>

          <div style={{ marginTop: '60px', padding: '40px', backgroundColor: 'var(--bg-off-white)', borderRadius: '12px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-dark)', fontSize: '1.5rem', marginBottom: '16px' }}>Premium Edible Salt Exporters</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>We export highly refined, free-flowing edible salt to global markets, ensuring purity and quality.</p>
            <Link to="/products/edible-salt" style={{ display: 'inline-block', backgroundColor: '#c9a84c', color: '#fff', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}>Explore Edible Salt</Link>
          </div>
        </article>
      </main>
    </>
  );
}
