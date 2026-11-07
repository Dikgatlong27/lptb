const fs = require('fs');
const path = require('path');
const { getMetadata, publicPages, siteOrigin } = require('../src/seo/metadata');
const { privatePaths } = require('../src/seo/config.json');
const directory = path.resolve(__dirname, '../build');
const template = fs.readFileSync(path.join(directory, 'index.html'), 'utf8');
const escape = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
for (const route of [...Object.keys(publicPages), ...privatePaths, '/404']) {
  const data = getMetadata(route);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '');
  const tags = [
    ...(route === '/'
      ? [
          '<link rel="preload" as="image" href="/previews/lvsift-gallery-hero.jpg" fetchpriority="high">',
        ]
      : []),
    `<title>${escape(data.title)}</title>`,
    `<meta name="description" content="${escape(data.description)}">`,
    `<meta name="robots" content="${data.indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow'}">`,
    `<link rel="canonical" href="${escape(data.url)}">`,
    ...Object.entries({
      title: data.title,
      description: data.description,
      url: data.url,
      type: 'website',
      site_name: 'LPTB Solutions',
      locale: 'en_ZA',
      image: `${siteOrigin}/social-preview.png`,
      'image:alt': 'LPTB Solutions — websites, apps and custom software',
    }).map(([name, value]) => `<meta property="og:${name}" content="${escape(value)}">`),
    ...Object.entries({
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      image: `${siteOrigin}/social-preview.png`,
    }).map(([name, value]) => `<meta name="twitter:${name}" content="${escape(value)}">`),
    `<script id="lptb-schema" type="application/ld+json">${JSON.stringify(data.schema).replace(/</g, '\\u003c')}</script>`,
  ];
  html = html.replace('</head>', `${tags.join('\n')}</head>`);
  fs.writeFileSync(
    path.join(directory, route === '/' ? 'index.html' : `${route.slice(1)}.html`),
    html,
  );
}
fs.writeFileSync(
  path.join(directory, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(
    publicPages,
  )
    .map((route) => `<url><loc>${siteOrigin}${route}</loc></url>`)
    .join('')}</urlset>\n`,
);
console.log('Generated route-specific SEO HTML, structured data and sitemap.');
