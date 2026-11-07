# Privacy operations and release review

The website has privacy, cookie and terms pages and a basic analytics opt-in control. This implementation is not a legal opinion or certification of POPIA compliance.

## Business details to confirm

- Confirm the legal entity name against the registration record; the notices currently use the company name already shown in the footer.
- Supply the business/postal address intended for publication and confirm the privacy contact. The site currently directs requests to info@lptbsolutions.co.za and +27 67 622 8529.
- Confirm the designated Information Officer and applicable registration/publication requirements with the Information Regulator.
- Review the notices with a South African privacy/legal adviser before treating them as final legal documentation.

## Operational controls

- Verify deployed Firestore rules: each user may access only their own profile and quotations; browser filters are not access control. Rules are not managed in this repository.
- Confirm provider agreements, subprocessors, locations and cross-border transfer safeguards for Firebase, Formspree, hosting and communications.
- Establish actual retention periods for account records, enquiries, quotations, contracts, logs and backups, plus a deletion process. The notice deliberately does not invent periods the business has not adopted.
- Monitor the privacy inbox. Authenticate access/deletion requests proportionately, track response dates and outcomes, explain retained records and apply the request to relevant providers/backups where required.
- Maintain an incident-response and breach-notification process appropriate to POPIA.
- Review how children's information or special personal information would be handled before accepting such use; the site does not implement a specialist process for these categories.

## Consent and analytics

- The static HTML must not load Google Analytics. It is injected only after analytics opt-in on a public route.
- Reject and allow options are both available. Preferences can be reopened from every footer and expire after 180 days or a version change.
- Revocation disables future analytics collection by this integration and clears accessible `_ga`, `_ga_*`, `_gid` and `_gat*` cookies for this site. It cannot recall data already sent.
- Account/quotation routes are excluded. Public page-view URLs omit query strings and fragments; account IDs and form values must not be added to analytics.
- In the Google Analytics property, review enhanced measurement, linked advertising products, data sharing and retention settings. Keep advertising features and account/form tracking off. Frontend consent code does not automatically configure the Google account.
- A local preference is not a server-side consent audit log. Signup requires a terms checkbox, but the application does not currently persist a versioned acceptance record in a protected server collection. Add that with verified database rules if contractual evidence is required; do not describe the checkbox alone as an audited record.
- Essential Firebase account persistence and the `pendingQuote` draft are separate from analytics consent. Signing out does not automatically clear an unsent quote draft; the cookie notice explains this.

## Release checks

Run format/lint, `npm test -- --watch=false --runInBand --cacheDirectory=./tmp/jest-cache` and the full build, then `npm run test:seo`. Test the production preview, not only the CRA development page:

1. With no saved preference, verify no Google Analytics script or requests before choosing.
2. Reject optional analytics and navigate: no analytics tag should load.
3. In a test environment, allow analytics and verify the expected tag and public page view; do not include personal information in test URLs.
4. Reopen Cookie settings, withdraw consent and verify collection is disabled.
5. Check that login and quote functions work when analytics is rejected.
6. Check keyboard focus, Escape and tab containment in the preferences dialog on mobile and desktop.
7. Confirm direct loading of `/privacy`, `/cookies` and `/terms`, links around account/contact forms, and the updated sitemap.

Keep the website's stated practices aligned with the business's actual operations. Updating a notice alone does not create those operational safeguards.
