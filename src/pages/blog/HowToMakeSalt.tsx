import { motion } from 'framer-motion';
import { SeoHead } from '../../components/SeoHead';
import { SplitTextReveal } from '../../components/animations/SplitTextReveal';
import { Link } from 'react-router-dom';
import { buildWebPageSchema, buildBreadcrumbSchema, buildArticleSchema } from '../../seo/schemas';

export function HowToMakeSalt() {
  const articleSchema = buildArticleSchema({
    headline: 'How to Make Salt in India: Traditional & Modern Methods',
    description: 'Discover the fascinating process of how salt is made in India, from vast solar evaporation ponds to modern refining techniques.',
    image: '/salt_ponds_aerial.png',
    datePublished: '2024-05-15T08:00:00+05:30',
    dateModified: '2024-05-15T08:00:00+05:30',
    url: '/blog/how-to-make-salt-in-india'
  });

  return (
    <>
      <SeoHead
        title="How to Make Salt in India | Jain Salt Traders Blog"
        description="Discover the fascinating process of how salt is made in India, from vast solar evaporation ponds to modern refining techniques. Learn about India's salt production."
        canonical="/blog/how-to-make-salt-in-india"
        keywords="how to make salt in india, salt manufacturing process, solar evaporation salt, salt production india, gujarat salt production, kutch salt pans"
        schema={[
          buildWebPageSchema({
            name: 'How to Make Salt in India',
            description: 'Discover the fascinating process of how salt is made in India, from vast solar evaporation ponds to modern refining techniques.',
            url: '/blog/how-to-make-salt-in-india'
          }),
          buildBreadcrumbSchema([
            { name: 'Home', url: 'https://www.saltexporter.com/' },
            { name: 'Blog', url: 'https://www.saltexporter.com/blog' },
            { name: 'How to Make Salt in India', url: 'https://www.saltexporter.com/blog/how-to-make-salt-in-india' }
          ]),
          articleSchema
        ]}
      />

      <main className="blog-article-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-pure-white)', color: 'var(--text-dark)', minHeight: '100vh' }}>
        <article className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ marginBottom: '40px' }}>
            <Link to="/blog" style={{ color: '#c9a84c', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>&larr; Back to Blog</Link>
            <SplitTextReveal text="How to Make Salt in India: Traditional & Modern Methods" as="h1" className="section-title" delay={0.1} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', color: 'var(--text-muted)' }}>
              <span>Published on May 15, 2024</span>
              <span>•</span>
              <span>4 min read</span>
            </div>
          </header>

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/salt_ponds_aerial.png"
            alt="Salt ponds aerial view in Gujarat"
            style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '40px' }}
          />

          <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <p>India is the third-largest salt-producing country in the world, with an average annual production of over 30 million tonnes. But <strong>how to make salt in India</strong> on such a massive scale? The secret lies in a combination of favorable geography, tropical climate, and a mix of traditional and modern harvesting techniques.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>1. The Power of Solar Evaporation</h2>
            <p>The vast majority (over 90%) of salt in India is produced through solar evaporation. This method is highly sustainable and relies on natural elements: the sun and the wind.</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Sea Water:</strong> Coastal states like Gujarat (the largest producer) and Tamil Nadu channel seawater into large, shallow artificial ponds called salt pans.</li>
              <li style={{ marginBottom: '10px' }}><strong>Sub-soil Brine:</strong> In places like the Little Rann of Kutch, underground highly saline water (brine) is pumped to the surface.</li>
              <li style={{ marginBottom: '10px' }}><strong>Lake Brine:</strong> Inland lakes like Sambhar Lake in Rajasthan provide natural brine for evaporation.</li>
            </ul>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>2. The Harvesting Process</h2>
            <p>Once the brine is in the condenser ponds, the intense Indian sun evaporates the water, increasing the salinity. When the brine reaches a specific density, it is moved to crystallizer ponds. Here, as further evaporation occurs, salt crystals begin to form and settle at the bottom.</p>
            <p>Skilled workers (often known as Agariyas in Gujarat) carefully monitor this process. Once a thick crust of salt has formed, it is manually or mechanically harvested and piled into large, iconic white mounds that dot the landscape of regions like Kutch.</p>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>3. Washing and Refining</h2>
            <p>The raw salt harvested from the pans contains impurities and varying levels of moisture. To make it suitable for industrial or edible use, it undergoes a rigorous refining process at state-of-the-art facilities like those operated by <strong>Jain Salt Traders</strong>.</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Washing:</strong> Raw salt is washed with saturated brine to remove dust, clay, and soluble impurities.</li>
              <li style={{ marginBottom: '10px' }}><strong>Drying & Crushing:</strong> The salt is dried and crushed to achieve the desired particle size.</li>
              <li style={{ marginBottom: '10px' }}><strong>Fortification:</strong> For edible salt, iodine (and sometimes iron) is added to meet health standards and combat deficiency diseases.</li>
            </ul>

            <h2 style={{ color: 'var(--text-dark)', marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem' }}>Conclusion</h2>
            <p>Understanding how salt is made in India reveals a process deeply connected to nature but refined by modern technology. From the vast salt pans of Gujarat to global dining tables, Indian salt represents purity and quality.</p>
          </div>

          <div style={{ marginTop: '60px', padding: '40px', backgroundColor: 'var(--bg-off-white)', borderRadius: '12px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-dark)', fontSize: '1.5rem', marginBottom: '16px' }}>Looking for Premium Bulk Salt?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Explore our range of high-quality edible and industrial salt products, exported globally from Gujarat.</p>
            <Link to="/#products" style={{ display: 'inline-block', backgroundColor: '#c9a84c', color: '#fff', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}>Explore Products</Link>
          </div>
        </article>
      </main>
    </>
  );
}
