import { motion } from 'framer-motion';
import { SeoHead } from '../../components/SeoHead';
import { SplitTextReveal } from '../../components/animations/SplitTextReveal';
import { Link } from 'react-router-dom';
import { buildWebPageSchema, buildBreadcrumbSchema, buildArticleSchema } from '../../seo/schemas';

export function WhereSaltFound() {
  const articleSchema = buildArticleSchema({
    headline: 'Where is Salt Found in India? The Major Producing Regions',
    description: 'Explore the key salt-producing states in India. Discover why Gujarat leads the nation and where inland salt sources like Sambhar Lake are located.',
    image: '/premium_crystal_macro.png',
    datePublished: '2024-06-02T08:00:00+05:30',
    dateModified: '2024-06-02T08:00:00+05:30',
    url: '/blog/where-is-salt-found-in-india'
  });

  return (
    <>
      <SeoHead
        title="Where is Salt Found in India? | Major Salt Producing States"
        description="Explore the key salt-producing states in India. Discover why Gujarat leads the nation and where inland salt sources like Sambhar Lake are located."
        canonical="/blog/where-is-salt-found-in-india"
        keywords="where is salt found in india, salt producing states in india, gujarat salt production, kutch salt pans, sambhar lake salt, salt sources india"
        schema={[
          buildWebPageSchema({
            name: 'Where is Salt Found in India?',
            description: 'Explore the key salt-producing states in India. Discover why Gujarat leads the nation and where inland salt sources like Sambhar Lake are located.',
            url: '/blog/where-is-salt-found-in-india'
          }),
          buildBreadcrumbSchema([
            { name: 'Home', url: 'https://www.saltexporter.com/' },
            { name: 'Blog', url: 'https://www.saltexporter.com/blog' },
            { name: 'Where is Salt Found in India?', url: 'https://www.saltexporter.com/blog/where-is-salt-found-in-india' }
          ]),
          articleSchema
        ]}
      />

      <main className="blog-article-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-pure-white)', color: 'var(--text-dark)', minHeight: '100vh' }}>
        <article className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ marginBottom: '40px' }}>
            <Link to="/blog" style={{ color: '#c9a84c', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>&larr; Back to Blog</Link>
            <SplitTextReveal text="Where is Salt Found in India? The Major Producing Regions" as="h1" className="section-title" delay={0.1} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', color: 'var(--text-muted)' }}>
              <span>Published on June 2, 2024</span>
              <span>•</span>
              <span>4 min read</span>
            </div>
          </header>

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/premium_crystal_macro.png"
            alt="Premium salt crystals"
            style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '40px' }}
          />

          <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <p>India’s long coastline and diverse geographical features make it an ideal environment for salt production. If you've ever wondered <strong>where salt is found in India</strong>, the answer spans across coastal wetlands, inland lakes, and even underground mines. Let's explore the major regions that satisfy India's massive domestic demand and robust export market.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>1. Gujarat: The Salt Capital of India</h2>
            <p>Gujarat is the undisputed leader in Indian salt production, accounting for over 70% to 80% of the country's total output. The state's long coastline, arid climate, and high solar evaporation rates create perfect conditions.</p>
            <p><strong>The Kutch Region:</strong> The Kutch district, including the Little Rann of Kutch, is a massive salt-producing hub. It is here that companies like <strong>Jain Salt Traders</strong> operate major manufacturing units. The region produces salt both from seawater and sub-soil brine.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>2. Tamil Nadu</h2>
            <p>Tamil Nadu is the second-largest salt-producing state. The coastal district of Thoothukudi (Tuticorin) is particularly famous for its vast salt pans. The hot climate and extended dry season allow for continuous solar evaporation throughout much of the year.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>3. Rajasthan</h2>
            <p>While Gujarat and Tamil Nadu rely heavily on seawater, Rajasthan provides a unique source: inland salt lakes. The most prominent is the <strong>Sambhar Salt Lake</strong>, India's largest inland salt lake. Salt here is harvested from the lake brine, contributing significantly to the national supply, especially in northern India.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>4. Andhra Pradesh and Maharashtra</h2>
            <p>These coastal states also contribute to India's total salt production, though on a smaller scale compared to Gujarat and Tamil Nadu. They primarily utilize solar evaporation of seawater along their coastlines.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Conclusion</h2>
            <p>The geographical diversity of India allows for multiple methods of salt harvesting. However, the coastal regions, particularly the Kutch district of Gujarat, remain the undisputed heartland of India's salt industry, powering exports to over 20 countries worldwide.</p>
          </div>

          <div style={{ marginTop: '60px', padding: '40px', backgroundColor: 'var(--bg-off-white)', borderRadius: '12px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-dark)', fontSize: '1.5rem', marginBottom: '16px' }}>Direct from Kutch, Gujarat</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Jain Salt Traders operates state-of-the-art facilities in Gandhidham, Kutch, ensuring premium quality salt exports.</p>
            <Link to="/about" style={{ display: 'inline-block', backgroundColor: '#c9a84c', color: '#fff', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}>Learn About Our Facilities</Link>
          </div>
        </article>
      </main>
    </>
  );
}
