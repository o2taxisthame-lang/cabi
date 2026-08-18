import { BUSINESS_CONFIG } from '../config/business';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
  noindex?: boolean;
  faqs?: { question: string; answer: string }[];
  areaServedName?: string;
}

export function updateSEO({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  noindex = false,
  faqs,
  areaServedName,
}: SEOProps) {
  if (typeof document === 'undefined') return;

  // Title
  document.title = title;

  // Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Canonical
  const fullCanonical = `${BUSINESS_CONFIG.websiteUrl}${
    canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`
  }`;
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', fullCanonical);

  // Open Graph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', title);

  // Open Graph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', description);

  // Open Graph URL
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', fullCanonical);

  // Open Graph Type
  let ogTypeTag = document.querySelector('meta[property="og:type"]');
  if (!ogTypeTag) {
    ogTypeTag = document.createElement('meta');
    ogTypeTag.setAttribute('property', 'og:type');
    document.head.appendChild(ogTypeTag);
  }
  ogTypeTag.setAttribute('content', ogType);

  // Robots
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (noindex) {
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');
  } else if (metaRobots) {
    metaRobots.setAttribute('content', 'index, follow');
  }

  // Inject / Update JSON-LD LocalBusiness Schema
  let schemaScript = document.getElementById('o2taxi-schema');
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'o2taxi-schema';
    schemaScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(schemaScript);
  }

  const structuredData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: BUSINESS_CONFIG.name,
    legalName: BUSINESS_CONFIG.name,
    description: description,
    url: fullCanonical,
    telephone: BUSINESS_CONFIG.internationalPhone,
    email: BUSINESS_CONFIG.email,
    areaServed: [
      { '@type': 'AdministrativeArea', name: areaServedName || 'Thame, Oxfordshire' },
      { '@type': 'AdministrativeArea', name: 'Haddenham' },
      { '@type': 'AdministrativeArea', name: 'Chinnor' },
      { '@type': 'AdministrativeArea', name: 'Long Crendon' },
      { '@type': 'AdministrativeArea', name: 'Oxfordshire' },
      { '@type': 'AdministrativeArea', name: 'Buckinghamshire' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Thame',
      addressRegion: 'Oxfordshire',
      addressCountry: 'GB',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '££',
    paymentAccepted: 'Cash, Card',
    currenciesAccepted: 'GBP',
    sameAs: [
      BUSINESS_CONFIG.facebookUrl,
      BUSINESS_CONFIG.googleMapsUrl,
      BUSINESS_CONFIG.googleReviewUrl,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_CONFIG.internationalPhone,
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  };

  schemaScript.textContent = JSON.stringify(structuredData);

  // FAQ Schema injection if faqs are provided
  let faqSchemaScript = document.getElementById('o2taxi-faq-schema');
  if (faqs && faqs.length > 0) {
    if (!faqSchemaScript) {
      faqSchemaScript = document.createElement('script');
      faqSchemaScript.id = 'o2taxi-faq-schema';
      faqSchemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(faqSchemaScript);
    }
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    };
    faqSchemaScript.textContent = JSON.stringify(faqSchema);
  } else if (faqSchemaScript) {
    faqSchemaScript.remove();
  }
}
