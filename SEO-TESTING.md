# LPTB Solutions SEO checks

## Before deployment

Run `npm run build`, then `npm run test:seo`. The build generates separate HTML metadata for each route, JSON-LD, social previews and a public sitemap. Upload the entire build including its hidden `.htaccess` file. cPanel deployment copies that file explicitly.

The public pages are `/`, `/about`, `/services`, `/our-work`, `/dev`, `/contact`, `/privacy`, `/cookies` and `/terms`. Account pages and the quote builder are noindex and excluded from the sitemap. They remain crawlable so crawlers can read the noindex instruction. No robots.txt rule should block them.

## After deployment

1. Open https://pagespeed.web.dev/ and test `https://lptbsolutions.co.za/`, then `/dev`, `/services` and `/our-work`. Review mobile and desktop results. Record SEO, performance, accessibility and Core Web Vitals separately. A good Lighthouse SEO score does not establish rankings or indexing.
2. In https://search.google.com/search-console verify the domain property using the DNS TXT value Google supplies. Under **Sitemaps**, submit `https://lptbsolutions.co.za/sitemap.xml`.
3. Use **URL Inspection** on each public page, choose **Test live URL**, and review **View tested page → HTML / Screenshot**. Confirm the correct title, canonical, page content and indexing permission. Request indexing for changed public pages. Inspect `/dashboard` separately: it should be excluded by noindex, not submitted for indexing.
4. In https://search.google.com/test/rich-results test the homepage and an inner page. Inner pages include breadcrumb markup; the organization graph describes the real business. Passing markup does not guarantee enhanced results. There are no fabricated ratings or reviews.
5. In https://validator.schema.org/ validate the full Organization, WebSite and WebPage graph. This checks schema types that Google's rich results tool may not display.
6. Open the deployed page using **View page source**. Check its unique title, description, canonical, Open Graph tags and JSON-LD. These must be in the initial HTML, not just in the browser Elements panel. Share a page to check its social image; platforms may cache old previews.
7. Check `http://lptbsolutions.co.za/dev` and `https://www.lptbsolutions.co.za/dev` redirect to the HTTPS non-www URL. Test a random nonexistent URL: the network response must be **404**, not 200. Verify real pages return **200**, and direct visits and refreshes still work. Apache rewrite rules cannot be verified with CRA's development server.

## Ongoing checks

Monitor Search Console indexing, search queries, clicks and impressions over time. Compare periods after Google has recrawled the pages. Keep the portfolio, contact details and service descriptions accurate. Add useful project case studies with genuine results as they become available, rather than repeating keywords.

## Current limitation

The homepage includes prerendered body content and React hydrates it for interaction. Other routes include initial metadata but still render their body content with JavaScript. Google can render JavaScript; simpler crawlers and some preview tools may not. No local test can guarantee a Google ranking or indexing date. Use `npm run preview` to check the production build at `http://127.0.0.1:3002`; the development server does not run prerendering.

References: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics and https://support.google.com/webmasters/answer/9012289
