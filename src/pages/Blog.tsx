import { motion } from 'framer-motion';
import { SeoHead } from '../components/SeoHead';
import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { Link } from 'react-router-dom';
import { buildWebPageSchema, buildBreadcrumbSchema } from '../seo/schemas';

const blogPosts = [
  {
    id: 'how-to-make-salt-in-india',
    title: 'How to Make Salt in India',
    excerpt: 'Discover the traditional and modern methods of salt production in India, one of the world\'s largest salt producers. Learn about solar evaporation and refining processes.',
    date: '2024-05-15',
    image: '/salt_ponds_aerial.png',
  },
  {
    id: 'is-there-tax-on-salt-in-india',
    title: 'Is There Tax on Salt in India?',
    excerpt: 'Explore the history of salt taxation in India, from the British colonial era and Gandhi\'s Salt March to modern GST implications on edible and industrial salt.',
    date: '2024-05-20',
    image: '/jain_edible_salt.png',
  },
  {
    id: 'where-is-salt-found-in-india',
    title: 'Where is Salt Found in India?',
    excerpt: 'A comprehensive guide to the major salt-producing states and regions in India, including the vast salt pans of Kutch, Gujarat, and Sambhar Lake in Rajasthan.',
    date: '2024-06-02',
    image: '/premium_crystal_macro.png',
  },
  {
    id: 'does-india-have-salt-mines',
    title: 'Does India Have Salt Mines?',
    excerpt: 'While India is famous for its sea salt, does it have underground rock salt mines? Learn about the Mandi rock salt mines and India\'s diverse salt sources.',
    date: '2024-06-10',
    image: '/specialty_industrial_salt.png',
  },
  {
    id: 'salt-export-from-india-to-which-country',
    title: 'Salt Export from India: Which Countries Buy Indian Salt?',
    excerpt: 'An in-depth look at India\'s salt export market. Discover the top countries importing Indian salt and why Gujarat is the hub of global salt exports.',
    date: '2024-06-18',
    image: '/avintraaa.jpeg',
  }
];

export function Blog() {
  return (
    <>
      <SeoHead
        title="Blog & Insights | Jain Salt Traders"
        description="Read our latest articles on salt manufacturing, exports, industry trends, and the rich history of salt production in India."
        canonical="/blog"
        schema={[
          buildWebPageSchema({
            name: 'Blog & Insights',
            description: 'Read our latest articles on salt manufacturing, exports, industry trends, and the rich history of salt production in India.',
            url: '/blog'
          }),
          buildBreadcrumbSchema([
            { name: 'Home', url: 'https://www.saltexporter.com/' },
            { name: 'Blog', url: 'https://www.saltexporter.com/blog' }
          ])
        ]}
      />

      <main className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-off-white)', minHeight: '100vh', color: 'var(--text-dark)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '60px' }}>
            <SplitTextReveal text="Blog & Insights" as="h1" className="section-title" delay={0.1} />
            <motion.div
              className="divider-line"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{ margin: '20px 0', backgroundColor: '#c9a84c' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px' }}
            >
              Explore our latest articles covering the salt industry, manufacturing processes, global exports, and more.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  backgroundColor: 'var(--bg-pure-white)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Link to={`/blog/${post.id}`} style={{ display: 'block', overflow: 'hidden' }}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                  />
                </Link>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <p style={{ color: '#c9a84c', fontSize: '0.9rem', marginBottom: '12px', fontWeight: 600 }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', lineHeight: 1.3, transition: 'color 0.3s' }} className="blog-title-hover">{post.title}</h2>
                  </Link>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    style={{
                      display: 'inline-block',
                      color: '#c9a84c',
                      textDecoration: 'none',
                      fontWeight: 600,
                      marginTop: 'auto',
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#c9a84c'}
                    onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <style>{`
        .blog-title-hover:hover { color: #c9a84c !important; }
      `}</style>
    </>
  );
}
