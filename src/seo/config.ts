/**
 * Central SEO configuration.
 * ⚠️  UPDATE `DOMAIN` to your real production domain before deploying.
 */
export const SITE_CONFIG = {
  domain: 'https://www.saltexporter.com',
  name: 'Jain Salt Traders',
  alternateName: 'Avintra International',
  legalName: 'Jain Salt Traders',
  phone: '+917990933686',
  phoneAlt: '+919426203410',
  email: 'info@saltexporter.com',
  emailAlt: 'info@avintra.in',
  whatsapp: 'https://wa.me/917990933686',
  address: {
    street: 'Plot No 6-7, Survey No-6, Village Chudva, Taluka Gandhidham',
    city: 'Gandhidham',
    state: 'Gujarat',
    district: 'Kutch',
    pincode: '370240',
    country: 'India',
    countryCode: 'IN',
  },
  // Approx lat/lng for Gandhidham, Kutch, Gujarat
  geo: {
    lat: 23.0753,
    lng: 70.1337,
  },
  certifications: [
    'FSSAI Certified — License No. 10017021002882',
    'ISO Certified — Certificate No. 3708001575',
  ],
  foundingYear: '1963',
  numberOfEmployees: { min: 20, max: 50 },
  exportMarkets: [
    'Vietnam', 'Malaysia', 'Mauritius', 'Oman',
    'Tanzania', 'Dubai', 'Singapore', 'Africa',
  ],
  // Primary og:image — should be 1200×630 ideally
  ogImage: '/avintraa.jpeg',
  defaultTitle: 'Jain Salt Traders | Salt Manufacturer & Exporter India | Avintra',
  defaultDescription:
    'FSSAI & ISO certified salt manufacturer and exporter from Kutch, Gujarat, India. Premium edible salt, industrial salt, and water softening salt tablets exported to 20+ countries worldwide since 1963.',
  defaultKeywords:
    'salt manufacturer India, industrial salt manufacturer, salt exporter India, sea salt exporter, bulk salt supplier, salt supplier India, industrial salt exporter, edible salt manufacturer, Kutch salt, Gujarat salt exporter, Jain Salt, Avintra, salt export from india, salt exporter, salt exporter in gandhidham, salt exporters in gujarat, salt export company, salt manufacturers in gandhidham, salt manufacturer in gujarat, salt manufacturers, salt manufacturers in kutch, salt manufacturers in india, industrial salt supplier, industrial salt suppliers near me, industrial salt near me, industrial salt manufacturers in india, industrial salt uses, industrial salt for earthing, raw salt near me, raw salt suppliers near me, raw salt hsn code, raw salt price per ton, sea salt from india, salt import from india',
} as const;
