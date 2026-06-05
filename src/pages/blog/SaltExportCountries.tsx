import { motion } from 'framer-motion';
import { SeoHead } from '../../components/SeoHead';
import { SplitTextReveal } from '../../components/animations/SplitTextReveal';
import { Link } from 'react-router-dom';
import { buildWebPageSchema, buildBreadcrumbSchema, buildArticleSchema } from '../../seo/schemas';

export function SaltExportCountries() {
  const articleSchema = buildArticleSchema({
    headline: 'Salt Export from India: Which Countries Buy Indian Salt?',
    description: 'An overview of India\'s thriving salt export market. Discover the top countries importing Indian salt and why Indian manufacturers are preferred globally.',
    image: '/avintraaa.jpeg',
    datePublished: '2024-06-18T08:00:00+05:30',
    dateModified: '2024-06-18T08:00:00+05:30',
    url: '/blog/salt-export-from-india-to-which-country'
  });

  return (
    <>
      <SeoHead
        title="Salt Export from India: Which Countries Buy Indian Salt?"
        description="An overview of India's thriving salt export market. Discover the top countries importing Indian salt and why Indian manufacturers are preferred globally."
        canonical="/blog/salt-export-from-india-to-which-country"
        keywords="salt export from india to which country, salt exporter india, indian salt export market, importing indian salt, bulk salt export india, gujarat salt export"
        schema={[
          buildWebPageSchema({
            name: 'Salt Export from India: Which Countries Buy Indian Salt?',
            description: 'An overview of India\'s thriving salt export market. Discover the top countries importing Indian salt and why Indian manufacturers are preferred globally.',
            url: '/blog/salt-export-from-india-to-which-country'
          }),
          buildBreadcrumbSchema([
            { name: 'Home', url: 'https://www.saltexporter.com/' },
            { name: 'Blog', url: 'https://www.saltexporter.com/blog' },
            { name: 'Salt Export from India: Which Countries Buy Indian Salt?', url: 'https://www.saltexporter.com/blog/salt-export-from-india-to-which-country' }
          ]),
          articleSchema
        ]}
      />

      <main className="blog-article-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-pure-white)', color: 'var(--text-dark)', minHeight: '100vh' }}>
        <article className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ marginBottom: '40px' }}>
            <Link to="/blog" style={{ color: '#c9a84c', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>&larr; Back to Blog</Link>
            <SplitTextReveal text="Salt Export from India: Which Countries Buy Indian Salt?" as="h1" className="section-title" delay={0.1} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', color: 'var(--text-muted)' }}>
              <span>Published on June 18, 2024</span>
              <span>•</span>
              <span>4 min read</span>
            </div>
          </header>

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/avintraaa.jpeg"
            alt="Avintra export logistics"
            style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '40px' }}
          />

          <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <p>India is a powerhouse in the global salt industry. As the world's third-largest producer, India generates far more salt than it consumes domestically. This massive surplus drives a robust export market. If you're looking to understand the global supply chain, you might ask: <strong>salt export from India to which country?</strong> Let's explore the major destinations for Indian salt.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Major Markets for Indian Salt</h2>
            <p>Indian salt, particularly from the major ports of Gujarat like Kandla and Mundra, reaches over 50 countries worldwide. The primary importing regions include:</p>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '20px', marginBottom: '10px', fontSize: '1.4rem' }}>1. East Asia and Southeast Asia</h3>
            <p>This is arguably the largest market segment for Indian salt. Rapid industrialization in these regions drives a massive demand for industrial-grade salt.</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Vietnam & Malaysia:</strong> Major importers of Indian industrial salt used for chemical manufacturing, chlor-alkali industries, and textiles.</li>
              <li style={{ marginBottom: '10px' }}><strong>South Korea & Japan:</strong> These countries frequently import high-grade Indian salt for their advanced manufacturing sectors.</li>
            </ul>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '20px', marginBottom: '10px', fontSize: '1.4rem' }}>2. The Middle East (GCC Countries)</h3>
            <p>The Middle East imports significant quantities of both edible and industrial salt from India. The geographical proximity makes shipping highly cost-effective.</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Oman & UAE (Dubai):</strong> Frequent destinations for premium edible salt and water softening salt tablets used in large-scale desalination and hospitality industries.</li>
            </ul>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '20px', marginBottom: '10px', fontSize: '1.4rem' }}>3. Africa</h3>
            <p>Various African nations rely on Indian exports to meet their domestic edible salt needs, especially iodized salt, to combat health deficiencies.</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Tanzania & Mauritius:</strong> Regular importers of Indian edible and specialized salts.</li>
            </ul>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Why the World Chooses Indian Salt</h2>
            <p>Why is Indian salt, exported by companies like <strong>Jain Salt Traders (Avintra)</strong>, so highly sought after?</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Unmatched Purity:</strong> Advanced refining facilities in Gujarat produce salt with exceptionally high NaCl content (up to 99.5%+).</li>
              <li style={{ marginBottom: '10px' }}><strong>Cost-Effectiveness:</strong> Large-scale solar evaporation keeps production costs competitive.</li>
              <li style={{ marginBottom: '10px' }}><strong>Logistics:</strong> Proximity to major international ports ensures quick and efficient global shipping.</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Conclusion</h2>
            <p>The answer to "salt export from India to which country?" is truly global. From the chemical plants of Southeast Asia to the dining tables of the Middle East and Africa, Indian salt plays a vital role in the global economy.</p>
          </div>

          <div style={{ marginTop: '60px', padding: '40px', backgroundColor: 'var(--bg-off-white)', borderRadius: '12px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-dark)', fontSize: '1.5rem', marginBottom: '16px' }}>Your Trusted Export Partner</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Avintra, the export arm of Jain Salt Traders, currently exports to over 20 countries. Contact us for bulk export inquiries.</p>
            <Link to="/contact" style={{ display: 'inline-block', backgroundColor: '#c9a84c', color: '#fff', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}>Contact Avintra</Link>
          </div>
        </article>
      </main>
    </>
  );
}
