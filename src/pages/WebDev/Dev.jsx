import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiCheckCircle,
  FiCode,
  FiMessageCircle,
  FiSmartphone,
  FiTrendingUp,
} from 'react-icons/fi';

import './WebDev.css';

const packages = [
  {
    id: 'bronze',
    className: 'bronze',
    name: 'Startup Website',
    price: 'From R2,500',
    fit: 'A practical starting point for founders and small businesses.',
    features: [
      'Up to 5 essential website pages',
      'Mobile-responsive design',
      'Contact or enquiry form',
      'Social media integration',
      'Basic search-engine setup',
    ],
  },
  {
    id: 'silver',
    className: 'silver',
    name: 'Business Website',
    price: 'From R6,500',
    fit: 'For growing businesses that need a stronger online presence.',
    features: [
      'Multi-page website with custom UI/UX',
      'Google Analytics and SEO foundations',
      'Blog or news section',
      'WhatsApp and social integration',
      'Responsive layouts across devices',
    ],
  },
  {
    id: 'gold',
    className: 'gold',
    name: 'E-Commerce Solution',
    price: 'From R12,500',
    fit: 'For businesses selling products, bookings, or services online.',
    features: [
      'Online store or booking functionality',
      'Secure payments and customer accounts',
      'Product and service management',
      'Business management dashboard',
      'Performance optimisation',
    ],
  },
  {
    id: 'platinum',
    className: 'platinum',
    name: 'Custom Business Platform',
    price: 'From R28,000',
    fit: 'For businesses requiring custom operational software.',
    features: [
      'Custom web app with mobile option',
      'Role-based access and cloud database',
      'Custom APIs and integrations',
      'Automated workflows and reporting',
      'Deployment planning and handover',
    ],
  },
  {
    id: 'premium',
    className: 'premium',
    name: 'Advanced Platform',
    price: 'From R55,000',
    fit: 'For connected business systems planned and built in phases.',
    features: [
      'Product strategy and scalable architecture',
      'Connected web and mobile applications',
      'Advanced workflows and integrations',
      'Reporting, analytics and security',
      'Deployment documentation and handover',
    ],
  },
];

const developmentSteps = [
  {
    icon: <FiMessageCircle />,
    title: 'Tell us about your business',
    description:
      'Share your idea, business information, preferred features, and available budget.',
  },
  {
    icon: <FiCode />,
    title: 'We design the solution',
    description:
      'We recommend the right package, development approach, timeline, and technical requirements.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Launch and grow',
    description:
      'Your solution is tested, deployed, supported, and prepared for future improvements.',
  },
];

const Dev = () => {
  return (
    <main className="webdev-container">
      <section className="webdev-start-strip" aria-labelledby="website-start-heading">
        <div className="webdev-start-copy">
          <p className="webdev-start-label">
            <FiSmartphone aria-hidden="true" /> A PRACTICAL STARTING POINT
          </p>
          <h2 id="website-start-heading">Your business website, from R2,500.</h2>
          <p>
            Bring your business details and branding. We’ll build a clear, mobile-friendly
            website with a defined scope and a straightforward handover.
          </p>
          <div className="webdev-hero-actions">
            <Link className="contact-button links" to="/quotation">
              Build Your Quote
            </Link>
            <Link className="webdev-secondary-button links" to="/contact">
              Talk to Tebogo
            </Link>
          </div>
        </div>
        <div className="webdev-start-inclusions">
          <span>THE ESSENTIALS, COVERED</span>
          <ul>
            {[
              'Up to 5 essential pages',
              'Mobile-responsive design',
              'Contact and social integration',
              'Launch preparation and handover',
            ].map((feature) => (
              <li key={feature}>
                <FiCheckCircle aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <p>Hosting, domains, and ongoing services are quoted separately.</p>
        </div>
      </section>

      <section className="webdev-process-section">
        <div className="webdev-section-heading">
          <p className="webdev-kicker">How it works</p>

          <h2>A simple path from business idea to digital solution.</h2>
        </div>

        <div className="webdev-process">
          {developmentSteps.map((step) => (
            <article className="webdev-process-card" key={step.title}>
              <span className="webdev-process-icon" aria-hidden="true">
                {step.icon}
              </span>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="webdev-packages-section">
        <div className="webdev-section-heading">
          <p className="webdev-kicker">Development packages</p>

          <h2>Choose a starting point that matches your business.</h2>

          <p>
            Package prices provide a realistic starting point. Your final quotation will
            depend on the required features, integrations, content, design, and overall
            system complexity. Package prices cover the agreed development scope. Domains,
            hosting, cloud usage, paid third-party services, maintenance, and ongoing
            support are quoted separately.
          </p>
        </div>

        <div className="packages-container">
          {packages.map((plan) => (
            <article className={`package ${plan.className}`} key={plan.id}>
              <div className="package-head">
                <div>
                  <p className="package-label">Development package</p>
                  <h2>{plan.name}</h2>
                </div>

                <span>{plan.price}</span>
              </div>

              <p className="package-fit">
                <strong>{plan.fit}</strong>
              </p>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <p className="package-cost-note">
                Development only. Hosting and ongoing services are quoted separately.
              </p>
              <Link className="package-link" to={`/quotation?package=${plan.id}`}>
                Choose This Package
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <p className="webdev-kicker">Not sure where to begin?</p>

        <h2>Build a quotation based on your actual business needs.</h2>

        <p>
          Select your preferred package, add the features you require, and submit your
          project request. We will review the details and recommend the best first phase.
        </p>

        <Link className="contact-button links" to="/quotation">
          Build a Free Quote
        </Link>
      </section>
    </main>
  );
};

export default Dev;
