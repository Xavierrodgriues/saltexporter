import { motion } from 'framer-motion';
import { SeoHead } from '../../components/SeoHead';
import { SplitTextReveal } from '../../components/animations/SplitTextReveal';
import { Link } from 'react-router-dom';
import { buildWebPageSchema, buildBreadcrumbSchema, buildArticleSchema } from '../../seo/schemas';

export function TaxOnSalt() {
  const articleSchema = buildArticleSchema({
    headline: 'Is There Tax on Salt in India? A Complete Guide',
    description: 'Understand the taxation of salt in India, covering the historical context, current GST exemptions for edible salt, and rates for industrial salt.',
    image: '/jain_edible_salt.png',
    datePublished: '2024-05-20T08:00:00+05:30',
    dateModified: '2024-05-20T08:00:00+05:30',
    url: '/blog/is-there-tax-on-salt-in-india'
  });

  return (
    <>
      <SeoHead
        title="Is There Tax on Salt in India? | GST on Salt | Jain Salt Traders"
        description="Understand the taxation of salt in India, covering the historical context, current GST exemptions for edible salt, and rates for industrial salt."
        canonical="/blog/is-there-tax-on-salt-in-india"
        keywords="is there tax on salt in india, gst on salt, tax on salt, edible salt gst exemption, industrial salt gst rate, salt tax history india"
        schema={[
          buildWebPageSchema({
            name: 'Is There Tax on Salt in India?',
            description: 'Understand the taxation of salt in India, covering the historical context, current GST exemptions for edible salt, and rates for industrial salt.',
            url: '/blog/is-there-tax-on-salt-in-india'
          }),
          buildBreadcrumbSchema([
            { name: 'Home', url: 'https://www.saltexporter.com/' },
            { name: 'Blog', url: 'https://www.saltexporter.com/blog' },
            { name: 'Is There Tax on Salt in India?', url: 'https://www.saltexporter.com/blog/is-there-tax-on-salt-in-india' }
          ]),
          articleSchema
        ]}
      />

      <main className="blog-article-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-pure-white)', color: 'var(--text-dark)', minHeight: '100vh' }}>
        <article className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ marginBottom: '40px' }}>
            <Link to="/blog" style={{ color: '#c9a84c', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>&larr; Back to Blog</Link>
            <SplitTextReveal text="Is There Tax on Salt in India? A Complete Guide" as="h1" className="section-title" delay={0.1} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', color: 'var(--text-muted)' }}>
              <span>Published on May 20, 2024</span>
              <span>•</span>
              <span>3 min read</span>
            </div>
          </header>

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/jain_edible_salt.png"
            alt="Edible salt produced in India"
            style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '40px' }}
          />

          <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <p>The question "<strong>is there tax on salt in India?</strong>" carries significant historical weight. Salt taxation was a major flashpoint during the Indian independence movement, culminating in Mahatma Gandhi's famous Salt March in 1930. But what is the situation today under the modern Goods and Services Tax (GST) regime?</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Tax on Edible Salt (Common Salt)</h2>
            <p>In modern India, common salt used for human consumption is considered an essential commodity. Consequently, under the GST framework introduced in 2017, <strong>edible salt is fully exempt from tax</strong>.</p>
            <p>This exemption applies to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}>Common salt (including iodized salt)</li>
              <li style={{ marginBottom: '10px' }}>Rock salt (Sendha Namak)</li>
              <li style={{ marginBottom: '10px' }}>Black salt (Kala Namak)</li>
            </ul>
            <p>This zero-tax policy ensures that this vital dietary requirement remains affordable for all citizens.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Tax on Industrial Salt</h2>
            <p>The scenario is different for salt intended for industrial use. While edible salt enjoys an exemption, <strong>industrial salt is subject to GST</strong>.</p>
            <p>Salt sold for industrial purposes, such as in chemical manufacturing, water softening, or dyeing processes, is generally taxed at a GST rate of 5%. This distinction is important for businesses involved in the procurement and supply of industrial-grade salt.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Exporting Salt</h2>
            <p>For manufacturers and exporters like <strong>Jain Salt Traders</strong>, exports of goods from India are considered "zero-rated supplies" under GST. This means that exporting salt—whether edible or industrial—does not attract tax, keeping Indian salt competitive in the global market.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Conclusion</h2>
            <p>So, is there tax on salt in India? The answer depends on its use. Edible salt remains proudly tax-free, honoring historical sentiments and modern necessities, while industrial salt is taxed reasonably to support the national economy.</p>
          </div>

          <div style={{ marginTop: '60px', padding: '40px', backgroundColor: 'var(--bg-off-white)', borderRadius: '12px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-dark)', fontSize: '1.5rem', marginBottom: '16px' }}>Need Industrial Salt for Your Business?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>We supply premium industrial salt and water softening salt tablets worldwide.</p>
            <Link to="/products/industrial-salt" style={{ display: 'inline-block', backgroundColor: '#c9a84c', color: '#fff', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}>View Industrial Salt</Link>
          </div>
        </article>
      </main>
    </>
  );
}
