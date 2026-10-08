import { site } from '../data/site';

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function organizationJsonLd() {
  const orgId = `${site.url}/#organization`;
  const personId = `${site.url}/#ankit`;

  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    url: `${site.url}/`,
    image: `${site.url}/founder.png`,
    email: site.email,
    workLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
    },
    worksFor: { '@id': orgId },
    sameAs: [...site.founder.sameAs],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: site.name,
        url: `${site.url}/`,
        description: site.description,
        image: `${site.url}/og.png`,
        logo: `${site.url}/icon-512.png`,
        email: site.email,
        founder: { '@id': personId },
        areaServed: 'Worldwide',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        sameAs: [...site.founder.sameAs],
        knowsAbout: [
          'Research-led outbound',
          'Account research',
          'Sales-led vertical B2B SaaS',
        ],
      },
      person,
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
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
