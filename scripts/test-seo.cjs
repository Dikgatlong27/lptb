const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { getMetadata, publicPages, siteOrigin } = require('../src/seo/metadata');
const { privatePaths } = require('../src/seo/config.json');
const directory = path.resolve(__dirname, '../build');
const titles = new Set();
let checks = 0;
const check = (value, message) => {
  assert.ok(value, message);
  checks++;
};
for (const route of [...Object.keys(publicPages), ...privatePaths, '/404']) {
  const data = getMetadata(route);
  const file = path.join(
    directory,
    route === '/' ? 'index.html' : `${route.slice(1)}.html`,
  );
  const html = fs.readFileSync(file, 'utf8');
  check((html.match(/<title>/g) || []).length === 1, `${route}: exactly one title`);
  check(
    (html.match(/name="description"/g) || []).length === 1,
    `${route}: exactly one description`,
  );
  check(
    (html.match(/rel="canonical"/g) || []).length === 1 &&
      html.includes(`href="${data.url}"`),
    `${route}: correct canonical`,
  );
  check(
    html.includes(`property="og:url" content="${data.url}"`),
    `${route}: matching social URL`,
  );
  check(
    html.includes('name="twitter:card" content="summary_large_image"'),
    `${route}: social card`,
  );
  check(
    html.includes(
      data.indexable
        ? 'content="index, follow, max-image-preview:large"'
        : 'content="noindex, follow"',
    ),
    `${route}: indexing rules`,
  );
  const schema = JSON.parse(
    html.match(
      /<script id="lptb-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/,
    )[1],
  );
  check(
    schema['@context'] === 'https://schema.org' && schema['@graph'].length >= 2,
    `${route}: valid JSON-LD graph`,
  );
  if (data.indexable) {
    check(!titles.has(data.title), `${route}: unique public title`);
    titles.add(data.title);
    check(
      data.description.length >= 100 && data.description.length <= 190,
      `${route}: useful description`,
    );
    if (route !== '/')
      check(
        schema['@graph'].some((item) => item['@type'] === 'BreadcrumbList'),
        `${route}: breadcrumbs`,
      );
  }
}
const sitemap = fs.readFileSync(path.join(directory, 'sitemap.xml'), 'utf8');
const homepage = fs.readFileSync(path.join(directory, 'index.html'), 'utf8');
check(
  homepage.includes('rel="preload" as="image" href="/previews/lvsift-gallery-hero.jpg"'),
  'Homepage preloads its largest hero image',
);
check(
  !fs
    .readFileSync(path.join(directory, 'about.html'), 'utf8')
    .includes('rel="preload" as="image"'),
  'Other pages do not preload an unused homepage image',
);
check(
  (sitemap.match(/<loc>/g) || []).length === Object.keys(publicPages).length,
  'Sitemap: only public routes',
);
for (const route of Object.keys(publicPages))
  check(
    sitemap.includes(`<loc>${siteOrigin}${route}</loc>`),
    `Sitemap contains ${route}`,
  );
for (const route of privatePaths)
  check(
    !sitemap.includes(`<loc>${siteOrigin}${route}</loc>`),
    `Sitemap excludes ${route}`,
  );
check(
  fs
    .readFileSync(path.join(directory, 'robots.txt'), 'utf8')
    .includes(`Sitemap: ${siteOrigin}/sitemap.xml`),
  'Robots advertises sitemap',
);
check(
  fs.existsSync(path.join(directory, '.htaccess')),
  'Apache routing included in build',
);
const image = fs.readFileSync(path.join(directory, 'social-preview.png'));
check(
  image.readUInt32BE(16) === 1200 && image.readUInt32BE(20) === 630,
  'Social preview is 1200 × 630',
);
check(getMetadata('/not-a-real-page').indexable === false, 'Unknown URLs are noindex');
check(
  getMetadata('/dev/').url === `${siteOrigin}/dev`,
  'Trailing-slash canonical normalization',
);
console.log(
  `PASS: ${checks} SEO assertions across ${Object.keys(publicPages).length} public pages, ${privatePaths.length} account/utility routes and the 404 page.`,
);
console.log(
  'These checks validate generated files, not Google indexing, rankings, live HTTP status codes or Core Web Vitals.',
);
