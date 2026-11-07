import React from 'react';
import { Link } from 'react-router-dom';
import { openCookieSettings } from './consent';
import './Privacy.css';

export const POLICY_VERSION = '2026-11-07';
const email = <a href="mailto:info@lptbsolutions.co.za">info@lptbsolutions.co.za</a>;

const notices = {
  privacy: {
    title: 'Privacy notice',
    introduction:
      'This notice explains how LPTB Solution (Pty) Ltd, trading as LPTB Solutions, handles personal information when you visit our website, create an account, request a quotation or contact us.',
    sections: [
      [
        'Who is responsible',
        <p>
          LPTB Solutions is responsible for the personal information we process for our
          own website and business enquiries in South Africa. For privacy questions,
          access requests or concerns, contact {email} or call{' '}
          <a href="tel:+27676228529">+27 67 622 8529</a>.
        </p>,
      ],
      [
        'Information we collect',
        <ul>
          <li>
            <strong>Accounts:</strong> your name, email address, authentication
            identifiers and account/session information. Password authentication is
            handled by Firebase Authentication; our application does not store a
            plain-text copy of your password in quotation or profile documents.
          </li>
          <li>
            <strong>Profiles:</strong> name and contact details you provide.
          </li>
          <li>
            <strong>Quotation requests:</strong> business and contact names, contact
            details, website address, selected package/features, estimates, requirements,
            budget, timeline and submission timestamps. Account-linked requests also
            contain your account ID and email address.
          </li>
          <li>
            <strong>Enquiries:</strong> information you enter into our contact form or
            send to us through email, phone or WhatsApp.
          </li>
          <li>
            <strong>Technical information:</strong> hosting and service providers may
            process connection, device, security and diagnostic information. If you opt
            into analytics, Google Analytics processes visit and device information using
            identifiers such as analytics cookies.
          </li>
        </ul>,
      ],
      [
        'Why we use it',
        <p>
          We use information to create and secure accounts, remember requested quote
          drafts, prepare and respond to quotations, communicate with you, deliver agreed
          services, maintain records, resolve disputes and meet applicable legal duties.
          Optional analytics helps us understand use of public website pages. We do not
          sell your personal information.
        </p>,
      ],
      [
        'The basis for processing',
        <p>
          We process information where needed to take steps you request before a contract,
          perform an agreement, meet a legal obligation or pursue a legitimate business
          interest that respects your rights. Optional analytics is based on your choice.
          Creating an account does not automatically subscribe you to marketing or permit
          optional analytics.
        </p>,
      ],
      [
        'What you need to provide',
        <p>
          Information marked as required on an account or enquiry form is needed to
          provide that feature or respond meaningfully. Without it, we may be unable to
          create an account or process the request. Do not include passwords, payment-card
          details, identity documents or other sensitive information in a quotation
          description or general enquiry.
        </p>,
      ],
      [
        'Service providers and external links',
        <ul>
          <li>
            <strong>Google Firebase:</strong> account authentication and Firestore storage
            for profiles and quotations.
          </li>
          <li>
            <strong>Formspree:</strong> receives and processes contact-form submissions.
          </li>
          <li>
            <strong>Hosting and communications providers:</strong> support website
            delivery, email and security.
          </li>
          <li>
            <strong>Google Analytics:</strong> loads on public pages only after you allow
            optional analytics.
          </li>
          <li>
            <strong>WhatsApp and linked websites:</strong> opening an external link takes
            you to a separate service with its own privacy terms.
          </li>
        </ul>,
      ],
      [
        'International processing',
        <p>
          Some providers may process information outside South Africa. When arranging
          international processing, we must consider the safeguards required by applicable
          data-protection law, including POPIA. Provider locations, contractual terms and
          the configuration of the services affect where processing occurs. Contact us for
          information about the arrangements relevant to your request.
        </p>,
      ],
      [
        'Cookies and browser storage',
        <p>
          Essential storage supports accounts, quote drafts and your privacy preference.
          Optional analytics stays off until you choose to allow it. Read our{' '}
          <Link to="/cookies">cookie policy</Link> for details and use Cookie settings in
          the footer to change your choice. Browser storage is not a substitute for
          keeping a shared device secure.
        </p>,
      ],
      [
        'Retention and deletion',
        <p>
          We keep personal information only as long as reasonably needed for the purpose
          described, our relationship with you, applicable record-keeping requirements or
          a dispute. Retention depends on the type of record; we do not promise immediate
          deletion from backups or records we must retain by law. Unsubmitted quote drafts
          stay in your browser until submitted or cleared. You can ask us to close your
          account or assess deletion of your information by emailing {email}.
        </p>,
      ],
      [
        'Your choices and rights',
        <p>
          Subject to applicable law, you may ask whether we hold your information, request
          access or correction, object to relevant processing, withdraw consent where
          processing relies on consent, or request deletion. We may need proportionate
          proof of identity to protect your account. Withdrawing optional analytics
          consent does not prevent account access. Withdrawal does not invalidate
          processing that was lawful before withdrawal.
        </p>,
      ],
      [
        'Security and account access',
        <p>
          We use authentication and technical measures intended to protect information,
          but no internet service is risk-free. Keep your password private, sign out on
          shared devices and tell us promptly if you suspect unauthorized access. Website
          notices do not replace database access rules, staff controls or security
          procedures.
        </p>,
      ],
      [
        'Concerns and complaints',
        <p>
          Please contact {email} so we can investigate. You may also lodge a complaint
          with South Africa’s{' '}
          <a
            href="https://inforegulator.org.za/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Information Regulator
          </a>
          . This does not limit any rights or remedies available under applicable law.
        </p>,
      ],
      [
        'Updates',
        <p>
          We may update this notice when our services or processing change. The date above
          identifies this version. Material changes will be brought to your attention
          through an appropriate website or account notice.
        </p>,
      ],
    ],
  },
  cookies: {
    title: 'Cookies & browser storage',
    introduction:
      'Cookies are small pieces of information stored by a browser. This site also uses technologies such as localStorage and IndexedDB. These choices explain both cookies and similar storage.',
    sections: [
      [
        'Essential storage',
        <ul>
          <li>
            <strong>Account sessions:</strong> Firebase Authentication uses browser
            persistence to maintain and secure sign-in. Storage may include IndexedDB or
            localStorage, depending on the browser and Firebase configuration. It is
            maintained by the authentication service and cleared or updated when you sign
            out or clear site data.
          </li>
          <li>
            <strong>Quotation drafts:</strong> <code>pendingQuote</code> in localStorage
            remembers the quote information you choose to save. It is removed after
            successful submission or when you clear site storage. It is not automatically
            erased merely by signing out.
          </li>
          <li>
            <strong>Your privacy choice:</strong> <code>lptb-cookie-preferences</code>{' '}
            stores whether you allowed analytics, the preference version and the time you
            chose. We ask again after 180 days or when the preference version changes. If
            storage is unavailable, your choice may last only for the current visit.
          </li>
        </ul>,
      ],
      [
        'Optional analytics',
        <p>
          Google Analytics is off by default. If you allow it, the Google tag may set
          cookies such as <code>_ga</code> and <code>_ga_*</code> to distinguish visits
          and measure use. Google controls the tag and cookie implementation; lifetimes
          depend on Google’s settings and your browser. Our page-view integration uses
          public page paths and excludes URL query strings and fragments. It does not
          intentionally send account identifiers or quotation-form values, and tracking is
          disabled on account and quote-builder routes.
        </p>,
      ],
      [
        'Your controls',
        <>
          <p>
            You can reject optional analytics and still use the website and your account.
            You can reopen preferences at any time:
          </p>
          <button onClick={openCookieSettings}>Open cookie settings</button>
          <p>
            When you withdraw consent, our integration disables further analytics
            collection and attempts to remove accessible Google Analytics cookies for this
            website. Information already sent to a provider is not automatically erased by
            changing a browser preference; contact us about a separate privacy request.
          </p>
        </>,
      ],
      [
        'Third-party services',
        <p>
          Firebase, Formspree and our hosting providers process information necessary for
          their services. If you follow a WhatsApp, social or project link, that external
          website controls its own cookies and privacy choices. Our preference panel does
          not manage storage on other websites.
        </p>,
      ],
      [
        'Clearing browser data',
        <p>
          Your browser can remove or block site cookies and storage. Doing so may sign you
          out, remove unsent quote drafts or cause the privacy banner to appear again. On
          a shared device, sign out and clear saved drafts if they contain information you
          do not want the next person to see.
        </p>,
      ],
      [
        'Questions',
        <p>
          Contact {email}. Our <Link to="/privacy">privacy notice</Link> explains
          personal-information requests and complaints.
        </p>,
      ],
    ],
  },
  terms: {
    title: 'Website terms',
    introduction:
      'These terms cover use of the LPTB Solutions website, accounts and quotation tools. A separately agreed project proposal or service agreement sets the scope and commercial terms of work we undertake.',
    sections: [
      [
        'Using the website',
        <p>
          Provide accurate information and use the website lawfully. If you act for a
          business or another person, you must have authority to provide their details and
          make the request. Do not attempt unauthorized access, interfere with the
          service, upload malicious content or use another person’s account.
        </p>,
      ],
      [
        'Your account',
        <p>
          You are responsible for protecting your login details and for information you
          submit through your account. Tell us about suspected unauthorized access. We may
          restrict access where reasonably necessary to protect the service, comply with
          law or investigate misuse. To request account closure, contact {email}.
          Applicable record-retention duties may continue after closure.
        </p>,
      ],
      [
        'Quotations and pricing',
        <p>
          Package prices are starting estimates, not a binding final offer. The quote
          builder helps communicate your requirements; submission does not create a paid
          order or commit either party to a project. Final scope, fees, payment schedule,
          delivery dates and acceptance criteria require a separate agreement. Hosting,
          domains, third-party subscriptions and ongoing services are quoted separately
          unless expressly included in that agreement.
        </p>,
      ],
      [
        'Project content and intellectual property',
        <p>
          Submit only material you are entitled to share. Ownership and licensing of
          deliverables are determined by the relevant project agreement. Website branding
          and content belong to their respective owners. Client logos and portfolio
          previews identify project work or relationships and do not transfer any
          ownership rights to visitors.
        </p>,
      ],
      [
        'Availability and external services',
        <p>
          We aim to keep the website accurate and available, but it may be interrupted,
          updated or contain errors. External websites and service providers operate under
          their own terms. An external link does not mean LPTB controls that service.
        </p>,
      ],
      [
        'Privacy and cookies',
        <p>
          Our <Link to="/privacy">privacy notice</Link> explains personal-information
          handling. Our <Link to="/cookies">cookie policy</Link> explains browser storage
          and optional analytics. Agreeing to website terms does not authorize optional
          analytics or marketing.
        </p>,
      ],
      [
        'Responsibility and legal rights',
        <p>
          Use reasonable judgment before relying on general website information for a
          business decision. Nothing in these terms excludes liability, consumer
          protections, data-protection rights or other obligations that cannot lawfully be
          excluded. Any project-specific limits of responsibility must be considered under
          the applicable agreement and law.
        </p>,
      ],
      [
        'Applicable law and contact',
        <p>
          These website terms are governed by the laws of South Africa, subject to any
          mandatory protections that apply to you. Questions or concerns may be sent to{' '}
          {email}. We encourage you to contact us to resolve a concern before taking
          further steps; this does not restrict your legal remedies.
        </p>,
      ],
      [
        'Changes to these terms',
        <p>
          We may revise these terms when the website changes. The updated date identifies
          the current version. Changes do not automatically rewrite an existing signed
          project agreement.
        </p>,
      ],
    ],
  },
};

export default function LegalPage({ kind }) {
  const notice = notices[kind];
  return (
    <main className="legal-page-shell">
      <article className="legal-page">
        <p className="section-eyebrow">LPTB SOLUTIONS · YOUR TRUST</p>
        <h1>{notice.title}</h1>
        <p>Last updated: 7 November 2026</p>
        <p>{notice.introduction}</p>
        {notice.sections.map(([heading, content]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            {content}
          </section>
        ))}
        <nav className="legal-nav" aria-label="Legal information">
          <Link to="/privacy">Privacy notice</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/terms">Website terms</Link>
          <Link to="/contact">Contact us</Link>
        </nav>
      </article>
    </main>
  );
}
