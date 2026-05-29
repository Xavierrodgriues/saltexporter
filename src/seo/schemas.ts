import { SITE_CONFIG } from './config';

const D = SITE_CONFIG.domain;

// ─────────────────────────────────────────────────────────────────────────────
// Organisation + LocalBusiness schema (used on Home & Contact)
// ─────────────────────────────────────────────────────────────────────────────
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${D}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.alternateName,
    legalName: SITE_CONFIG.legalName,
    url: D,
    logo: {
      '@type': 'ImageObject',
      url: `${D}/avintraaa.jpeg`,
    },
    image: [
      `${D}/salt_ponds_aerial.png`,
      `${D}/industrial_salt_warehouse.png`,
      `${D}/premium_crystal_macro.png`,
    ],
    description:
      'FSSAI & ISO certified salt manufacturer and exporter from Kutch, Gujarat, India. Exporting edible salt, industrial salt, and water softening salt tablets to 20+ countries since 1963.',
    foundingDate: SITE_CONFIG.foundingYear,
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: SITE_CONFIG.numberOfEmployees.min,
      maxValue: SITE_CONFIG.numberOfEmployees.max,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.pincode,
      addressCountry: SITE_CONFIG.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.lat,
      longitude: SITE_CONFIG.geo.lng,
    },
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phone,
        contactType: 'sales',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Hindi'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.phoneAlt,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'Vietnam' },
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'Country', name: 'Mauritius' },
      { '@type': 'Country', name: 'Oman' },
      { '@type': 'Country', name: 'Tanzania' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Singapore' },
    ],
    hasCredential: SITE_CONFIG.certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: cert,
    })),
    sameAs: [],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Salt Products',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Edible Salt', url: `${D}/products/edible-salt` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Industrial Salt', url: `${D}/products/industrial-salt` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Specialty Industrial Salt', url: `${D}/products/specialty-industrial-salt` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Water Softening Salt Tablets', url: `${D}/products/salt-tablet` } },
      ],
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// WebSite schema (home page)
// ─────────────────────────────────────────────────────────────────────────────
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${D}/#website`,
    name: SITE_CONFIG.name,
    url: D,
    publisher: { '@id': `${D}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${D}/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Breadcrumb schema
// ─────────────────────────────────────────────────────────────────────────────
interface BreadcrumbItem {
  name: string;
  url: string;
}
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Product schema (per product page)
// ─────────────────────────────────────────────────────────────────────────────
interface ProductSchemaInput {
  name: string;
  description: string;
  image: string;
  url: string;
  category?: string;
  keywords?: string;
}
export function buildProductSchema(product: ProductSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${D}${product.image}`,
    url: `${D}${product.url}`,
    category: product.category ?? 'Salt Products',
    keywords: product.keywords,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    manufacturer: {
      '@id': `${D}/#organization`,
    },
    countryOfOrigin: {
      '@type': 'Country',
      name: 'India',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: { '@id': `${D}/#organization` },
      areaServed: 'Worldwide',
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ schema (About page)
// ─────────────────────────────────────────────────────────────────────────────
interface FaqItem { q: string; a: string; }
export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// WebPage schema (generic page wrapper)
// ─────────────────────────────────────────────────────────────────────────────
export function buildWebPageSchema(opts: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    description: opts.description,
    url: `${D}${opts.url}`,
    isPartOf: { '@id': `${D}/#website` },
    publisher: { '@id': `${D}/#organization` },
    inLanguage: 'en',
  };
}
