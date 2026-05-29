import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../seo/config';

interface SeoHeadProps {
  /** Browser tab title — keep under 60 chars */
  title: string;
  /** Meta description — keep 150–160 chars */
  description: string;
  /** Absolute canonical path, e.g. "/about" */
  canonical?: string;
  /** OG image path (relative to public dir), e.g. "/avintraa.jpeg" */
  ogImage?: string;
  /** open graph type — defaults to "website" */
  ogType?: string;
  /** Comma-separated keywords */
  keywords?: string;
  /** One or more JSON-LD schema objects to inject */
  schema?: Record<string, unknown> | Record<string, unknown>[];
  /** Set true to block indexing (e.g. thank-you pages) */
  noIndex?: boolean;
}

/**
 * SeoHead — drop this into any page component to set:
 *   • title tag
 *   • meta description, keywords, robots
 *   • canonical URL
 *   • Open Graph (Facebook / LinkedIn)
 *   • Twitter Card
 *   • JSON-LD structured data (any schema)
 *
 * @example
 * <SeoHead
 *   title="Industrial Salt Manufacturer India | Jain Salt"
 *   description="..."
 *   canonical="/products/industrial-salt"
 *   schema={buildProductSchema({ ... })}
 * />
 */
export function SeoHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  keywords,
  schema,
  noIndex = false,
}: SeoHeadProps) {
  const { domain, defaultKeywords } = SITE_CONFIG;
  const canonicalUrl = canonical ? `${domain}${canonical}` : domain;
  const ogImageUrl = `${domain}${ogImage ?? SITE_CONFIG.ogImage}`;
  const resolvedKeywords = keywords ?? defaultKeywords;

  // Normalise schema to array for multi-schema support
  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={resolvedKeywords} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <meta name="author" content={SITE_CONFIG.name} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_CONFIG.name} — Salt Manufacturer & Exporter India`} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD structured data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
