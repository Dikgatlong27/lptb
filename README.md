# LPTB Solutions

The LPTB Solutions website introduces the studio, services, development packages and client work. Visitors can contact the studio and build a quotation request. Registered users can submit quotes and view their saved requests.

- **Website:** [lptbsolutions.co.za](https://lptbsolutions.co.za/)
- **Repository:** [Dikgatlong27/lptb](https://github.com/Dikgatlong27/lptb)
- **SEO testing guide:** [SEO-TESTING.md](SEO-TESTING.md)

## Contents

1. [Technology](#technology)
2. [Local setup](#local-setup)
3. [Configuration](#configuration)
4. [Commands](#commands)
5. [Project structure](#project-structure)
6. [Routes](#routes)
7. [Authentication and data](#authentication-and-data)
8. [Quotations and packages](#quotations-and-packages)
9. [Content and design](#content-and-design)
10. [SEO](#seo)
11. [Testing](#testing)
12. [Deployment](#deployment)
13. [Troubleshooting](#troubleshooting)
14. [Known limitations](#known-limitations)

## Technology

| Area         | Implementation                                                             |
| ------------ | -------------------------------------------------------------------------- |
| Interface    | React 18, JavaScript and CSS                                               |
| Routing      | React Router 6 with `BrowserRouter`                                        |
| Build        | Create React App / `react-scripts` 5                                       |
| Accounts     | Firebase Authentication, email/password                                    |
| Database     | Cloud Firestore                                                            |
| Contact form | Formspree through `@formspree/react`                                       |
| Icons        | React Icons and the LPTB logo mark                                         |
| Analytics    | Google tag in `public/index.html`                                          |
| Formatting   | Prettier                                                                   |
| Hosting      | Static files, Apache/cPanel configuration and compatible-host `_redirects` |

This repository contains a browser application and build scripts, without a separate application server. The Stripe dependency does not mean a payment checkout is implemented.

## Local setup

Install Git, Node.js and npm. This checkout has been used with Node **18.18.0** and npm **9.8.1**. These are observed versions, not a recommendation to use an unsupported runtime in production. Validate compatibility when upgrading.

```powershell
git clone https://github.com/Dikgatlong27/lptb.git
cd lptb
npm ci
```

Create `.env.local` with the Firebase values described below, then run:

```powershell
npm start
```

The default address is `http://localhost:3000`. To use port 3001 explicitly in PowerShell:

```powershell
$env:HOST = '127.0.0.1'
$env:PORT = '3001'
$env:BROWSER = 'none'
npm start
```

Open [http://127.0.0.1:3001](http://127.0.0.1:3001). Keep the terminal running; `Ctrl+C` stops the server. Restart after changing environment variables.

## Configuration

### Firebase

`src/Firebase.js` reads these build-time variables:

```dotenv
REACT_APP_FIREBASE_API_KEY=your-firebase-web-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-web-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

Use values from the intended Firebase web app. Environment files are ignored by Git. CRA embeds `REACT_APP_*` values in the browser bundle: never put service-account credentials or server secrets in them.

In the Firebase console, enable email/password authentication, configure authorized domains for production and local development, and provision Firestore. Database rules are managed outside this repository. Access must be enforced there, independently of route guards and browser queries.

### External services

- **Formspree:** The form ID is in `src/pages/Contact/Contact.jsx`. Configure the intended recipient and form settings in Formspree.
- **Analytics:** The Google tag is in `public/index.html`, separately from Firebase's optional measurement ID.
- **Production domain:** `src/seo/config.json` holds the canonical origin. Domain changes also require updating robots.txt, hosting redirects and external integration settings.

## Commands

| Command                         | Purpose                                                            |
| ------------------------------- | ------------------------------------------------------------------ |
| `npm start`                     | Development server with live reload                                |
| `npm run build`                 | Optimized production build followed by SEO generation              |
| `npm run test:seo`              | Validate generated SEO files; build first                          |
| `npm run format`                | Format maintained source, scripts and supported configuration/docs |
| `npm run format:check`          | Check formatting without writing changes                           |
| `npx eslint src --ext .js,.jsx` | Check source lint rules                                            |
| `npm test`                      | CRA test runner in watch mode                                      |

The `postbuild` script runs automatically after `npm run build`. Running `react-scripts build` directly skips route metadata and sitemap generation.

## Project structure

```text
lptb/
├── public/
│   ├── .htaccess                 Apache routing, redirects and indexing headers
│   ├── _redirects                Routing for compatible static hosts
│   ├── index.html                HTML template, analytics and icons
│   ├── robots.txt                Crawler instructions and sitemap URL
│   ├── social-preview.png        Shared social image
│   ├── clients/                  Client logos
│   └── previews/                 Project preview images
├── scripts/
│   ├── build-seo.cjs             Route HTML metadata and sitemap generation
│   └── test-seo.cjs              Generated SEO validation
├── src/
│   ├── components/
│   │   ├── Authentication/       Login, signup and profile forms
│   │   ├── HomePage/             Home and reusable project sections
│   │   ├── Navbar/               Desktop/mobile navigation
│   │   ├── PageHeader/           Shared page heading and breadcrumb content
│   │   └── Footer/               Footer and contact/social links
│   ├── pages/                    Public, quotation and protected pages
│   ├── seo/                      SEO configuration and shared metadata helpers
│   ├── App.js                    Routes, layout and metadata updates
│   ├── App.css                   Theme variables and base styling
│   ├── SectionMakeover.css       Shared section refinements
│   ├── LptbButtons.css           Branded buttons and logo animation
│   ├── AuthContext.js            Authentication state/actions
│   ├── Firestore.js              Database initialized with account/quotation pages
│   └── Firebase.js               Firebase initialization
├── .cpanel.yml                   cPanel deployment tasks
├── .prettierrc.json               Shared formatting conventions
├── SEO-TESTING.md                Live SEO verification guide
├── package.json                  Commands and dependencies
└── package-lock.json             Locked dependency tree
```

`build/` is generated release output; `node_modules/` contains dependencies. Edit their source inputs instead. `tmp/` holds local working artifacts. Company profiles and email signatures are supporting business materials.

## Routes

| Path         | Purpose                                    | Access                        | Indexing |
| ------------ | ------------------------------------------ | ----------------------------- | -------- |
| `/`          | Home, studio introduction and client logos | Public                        | Index    |
| `/about`     | Founder and studio information             | Public                        | Index    |
| `/services`  | Services                                   | Public                        | Index    |
| `/dev`       | Development packages                       | Public                        | Index    |
| `/our-work`  | Portfolio and project website links        | Public                        | Index    |
| `/contact`   | Enquiry form and contact details           | Public                        | Index    |
| `/quotation` | Quote builder                              | Public draft; login to submit | Noindex  |
| `/login`     | Sign in                                    | Public                        | Noindex  |
| `/signup`    | Register                                   | Public                        | Noindex  |
| `/dashboard` | Account overview                           | Login required                | Noindex  |
| `/projects`  | Project area placeholder                   | Login required                | Noindex  |
| `/invoices`  | Saved quote requests; legacy route name    | Login required                | Noindex  |
| `/profile`   | Name/contact profile form                  | Login required                | Noindex  |

Unknown paths display a not-found page. Apache configuration returns an HTTP 404 for unknown URLs; the CRA development fallback does not reproduce production response codes.

## Authentication and data

`AuthProvider` listens for Firebase authentication changes and exposes `currentUser`, `signup`, `login` and `logout`. `PrivateRoute` redirects signed-out visitors to `/login`.

Public pages render while authentication resolves. Protected pages wait for the `loading` state before showing account content or redirecting. Secondary routes use `React.lazy` and a shared loading fallback; database code loads with the routes that need it. Client logos are sized for display and lazy-loaded below the fold.

Signup saves the entered name as the Firebase authentication `displayName`. The dashboard prefers `users/{uid}.name`, then `displayName`, then “Welcome back”. It does not greet users with their email address. Older accounts may have no saved name.

| Firestore collection   | Usage                                                       |
| ---------------------- | ----------------------------------------------------------- |
| `users/{uid}`          | Profile fields such as `name` and `contact`                 |
| `quotes/{generatedId}` | Package/features, estimate, brief, owner UID and timestamps |

Quote listing filters by the signed-in user's `userId`. Deletion requires confirmation and updates the visible list after success. Database rules must enforce ownership; browser filters alone do not secure documents.

The profile form uses `updateDoc`, so `users/{uid}` must already exist. Signup currently saves the authentication name without creating that Firestore document. Account provisioning or a future profile update must address this distinction.

## Quotations and packages

1. Choose a package and review included features.
2. Select optional features and enter business/contact details, requirements, budget and timeline.
3. Save a browser draft under the localStorage key `pendingQuote`.
4. Sign in if required. Login returns a visitor with a pending quote to `/quotation?resume=true`.
5. Submit the request to Firestore. Success clears the local draft and opens `/invoices`.

New quote documents include package ID/name/base price, included and optional feature details, estimated totals, business and contact information, project requirements, `userId`, `userEmail`, status `Submitted`, a server timestamp and an ISO timestamp. The list also supports legacy feature strings and date fields.

These are requests for estimates, not paid orders or final accounting invoices. Hosting and ongoing services are quoted separately; the packages do not include twelve months of free hosting.

Package cards are defined in `src/pages/WebDev/Dev.jsx`. Quote packages and feature IDs are separately defined in `src/pages/Quotation/Quotation.jsx`. Keep both definitions aligned when changing prices, names or included features.

## Content and design

The theme uses dark navy, teal and cyan. Base tokens are in `src/App.css`; branded button rules are in `src/LptbButtons.css`. The LPTB mark rotates on hover and respects reduced-motion preferences. Client logos remain static.

| Update                       | Location                                                           |
| ---------------------------- | ------------------------------------------------------------------ |
| Navbar links/account actions | `src/components/Navbar/`                                           |
| Page headings and highlights | `src/components/PageHeader/PageHeader.jsx`                         |
| Search titles/descriptions   | `src/seo/config.json`                                              |
| Home hero                    | `src/components/HomePage/Hero.jsx` and `Hero.css`                  |
| Client list/artwork          | `src/components/HomePage/Clients.jsx`, `public/clients/`           |
| Portfolio descriptions/URLs  | `src/components/HomePage/FeaturedProjects.jsx`                     |
| Founder profile              | `src/pages/About/`, home studio section and portraits in `public/` |
| Footer details/social links  | `src/components/Footer/Footer.jsx`                                 |

Use verified artwork and accurate client descriptions. Preserve descriptive alt text, form labels, keyboard focus and readable contrast.

### Code conventions

Use two-space indentation, single quotes in JavaScript and the shared Prettier configuration. Keep objects, JSX and CSS readable across multiple lines. Prefer descriptive names and comments that explain decisions. Remove obsolete commented-out code. Run `npm run format` before reviewing changes.

## SEO

`src/seo/metadata.js` supplies titles, descriptions, canonical URLs, Open Graph/Twitter tags and JSON-LD. `App.js` applies them during client navigation. Structured data describes the organization, website, public pages and breadcrumbs without invented ratings or reviews.

After bundling, `scripts/build-seo.cjs` generates route HTML files such as `about.html` and `dev.html`. Hosting rules serve these at their route URLs. It also generates `build/sitemap.xml` containing the six public pages. Account/utility pages are `noindex, follow` and excluded from the sitemap. Robots.txt leaves them crawlable so search engines can read the noindex instruction.

The preview image is `public/social-preview.png` at 1200 × 630. Canonicals use HTTPS and the non-www production domain.

When adding a page, update the React route, shared header if applicable, SEO configuration and hosting rules. Add private routes to `privatePaths` and the noindex hosting rules. Rebuild and test afterwards.

For the complete procedure, see [SEO-TESTING.md](SEO-TESTING.md). After deployment:

1. Submit the sitemap in [Google Search Console](https://search.google.com/search-console).
2. Run URL Inspection → Test live URL for public pages and inspect the rendered HTML/screenshot.
3. Check mobile and desktop results in [PageSpeed Insights](https://pagespeed.web.dev/).
4. Use [Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org/).
5. Verify canonical redirects, 200 responses for real pages and a genuine 404 for an unknown URL.

Local checks validate implementation, not search rankings. Main body content still requires JavaScript: generated HTML includes metadata, not a fully prerendered React page.

## Testing

```powershell
npm run format:check
npx eslint src --ext .js,.jsx
npm run build
npm run test:seo
```

The SEO checks cover unique public titles, descriptions, canonicals, social tags, indexing rules, JSON-LD, breadcrumbs, sitemap entries, image dimensions and Apache configuration presence. They read `build/`: rebuild after source changes.

The CRA test runner includes focused protected-route tests for loading, signed-out and signed-in states, but there is no comprehensive automated end-to-end suite. Run them with `npm test -- --watch=false --runInBand src/pages/PrivateRoute/PrivateRoute.test.js`. A successful build does not prove database rules or deployed integrations work.

Before release, manually check desktop/mobile navigation, keyboard focus, contact success/errors, signup/login/logout, quote drafts and resumption, submission/listing/deletion and profile editing. Use a suitable test account. Verify two quote cards per row on wider screens and one on narrow screens.

## Deployment

```powershell
npm ci
npm run build
npm run test:seo
```

Firebase environment values must be present before building. Deploy the resulting `build/` contents, including hidden hosting configuration.

### cPanel / Apache

The existing `.cpanel.yml` targets `/home/lptbsoj8j7a8/public_html/`. Review it before deploying to another account. The tasks install locked dependencies, build, validate SEO and then copy the release. They do not clear the live directory before building. Keep a known-good release outside that target for rollback; old hashed assets may remain after deployment.

`.htaccess` is copied explicitly because a shell wildcard does not include hidden files. For manual uploads, include `build/.htaccess` along with the rest of the build. `public/.htaccess` is the build source; keep the root copy aligned when changing server rules. Apache needs rewrite support and permission to apply these directives.

After deployment, test HTTPS/non-www redirects, direct route visits and refreshes, assets, sitemap, unknown-page status codes, authentication and quote submission. The CRA development server cannot validate Apache rules.

### Other static hosts

`public/_redirects` supports hosts that understand that format. Other hosts need equivalent route mappings and a true 404 fallback. Rewriting every path to `index.html` loses route-specific initial metadata.

Building does not publish the site. A Git commit or push does not establish that hosting deployment succeeded; verify the live release separately.

## Troubleshooting

| Problem                          | Check                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------- |
| Local site unreachable           | Keep `npm start` running; use the printed address/port and check port conflicts |
| Firebase configuration error     | Verify environment variable names/project values, then restart or rebuild       |
| Login failure                    | Check provider settings, authorized domains, network and the displayed error    |
| Quotes cannot load/save          | Check authentication, Firestore rules, project selection and console errors     |
| Profile document missing         | `updateDoc` requires an existing `users/{uid}` document                         |
| Contact form failure             | Check Formspree configuration and network response                              |
| Missing SEO output               | Run the full `npm run build`, including postbuild                               |
| Live routes share the home title | Confirm route HTML files and `.htaccess` were uploaded and rules are active     |
| Refresh gives server error       | Check rewrite support and route file deployment                                 |
| Old social preview               | Check deployed tags/image and the sharing platform's cache                      |
| Browser-data/Babel warnings      | Review CRA maintenance warnings separately from actual compilation failures     |

## Known limitations

- The account projects page is a placeholder.
- `/invoices` lists quote requests, not accounting invoices.
- Signup does not create Firestore profile documents; deployed database rules are outside this repository.
- Public body content is client-rendered; full prerendering/server rendering remains a future improvement.
- Package definitions are duplicated between presentation and quote configuration.
- The existing CRA toolchain emits dependency maintenance warnings.
- Live indexing, Core Web Vitals and external integration permissions require production checks.
