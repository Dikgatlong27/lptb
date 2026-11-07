const config = require('./config.json');

const publicPages = config.pages;
const siteOrigin = config.origin;
function getMetadata(pathname) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const page = publicPages[path];
  const known = Boolean(page || config.privatePaths.includes(path));
  const url = `${siteOrigin}${path}`;
  const metadata = page || {
    title: known ? 'Your Account | LPTB Solutions' : 'Page Not Found | LPTB Solutions',
    description: known
      ? 'Manage your LPTB Solutions account and project requests.'
      : 'This page could not be found. Explore LPTB Solutions services and projects.',
  };
  const organization = {
    '@type': 'Organization',
    '@id': `${siteOrigin}/#organization`,
    name: 'LPTB Solutions',
    legalName: 'LPTB Solution (Pty) Ltd',
    url: `${siteOrigin}/`,
    logo: `${siteOrigin}/logo.png`,
    email: 'info@lptbsolutions.co.za',
    telephone: '+27676228529',
    areaServed: { '@type': 'Country', name: 'South Africa' },
    sameAs: [
      'https://www.facebook.com/lptbsolutions/',
      'https://www.linkedin.com/company/lptbsolutions/',
    ],
  };
  const graph = [
    organization,
    {
      '@type': 'WebSite',
      '@id': `${siteOrigin}/#website`,
      url: `${siteOrigin}/`,
      name: 'LPTB Solutions',
      publisher: { '@id': organization['@id'] },
      inLanguage: 'en-ZA',
    },
  ];
  if (page) {
    graph.push({
      '@type':
        path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${siteOrigin}/#website` },
      about: { '@id': organization['@id'] },
      inLanguage: 'en-ZA',
      ...(path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    });
    if (path !== '/')
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteOrigin}/` },
          { '@type': 'ListItem', position: 2, name: page.name, item: url },
        ],
      });
  }
  return {
    ...metadata,
    url,
    indexable: Boolean(page),
    schema: { '@context': 'https://schema.org', '@graph': graph },
  };
}

function applyMetadata(pathname) {
  const data = getMetadata(pathname);
  document.title = data.title;
  const meta = (attribute, name, content) => {
    let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.content = content;
  };
  meta('name', 'description', data.description);
  meta(
    'name',
    'robots',
    data.indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow',
  );
  for (const [name, content] of Object.entries({
    title: data.title,
    description: data.description,
    url: data.url,
    type: 'website',
    site_name: 'LPTB Solutions',
    locale: 'en_ZA',
    image: `${siteOrigin}/social-preview.png`,
    'image:alt': 'LPTB Solutions — websites, apps and custom software',
  }))
    meta('property', `og:${name}`, content);
  for (const [name, content] of Object.entries({
    card: 'summary_large_image',
    title: data.title,
    description: data.description,
    image: `${siteOrigin}/social-preview.png`,
  }))
    meta('name', `twitter:${name}`, content);
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = data.url;
  let schema = document.getElementById('lptb-schema');
  if (!schema) {
    schema = document.createElement('script');
    schema.id = 'lptb-schema';
    schema.type = 'application/ld+json';
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify(data.schema);
}

module.exports = { publicPages, siteOrigin, getMetadata, applyMetadata };
