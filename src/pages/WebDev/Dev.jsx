import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiMessageCircle,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";

import "./WebDev.css";

const packages = [
  {
    id: "bronze",
    className: "bronze",
    name: "Startup Website",
    price: "From R2,500",
    fit: "A practical and affordable starting point for new businesses.",
    features: [
      "Up to 5 essential website pages",
      "Mobile-responsive design",
      "Contact or enquiry form",
      "Social media integration",
      "Basic search-engine setup",
      "12 months hosting included",
    ],
  },
  {
    id: "silver",
    className: "silver",
    name: "Business Website",
    price: "From R8,500",
    fit: "For growing businesses requiring a stronger online presence.",
    features: [
      "Professional multi-page website",
      "Custom UI and UX design",
      "Google Analytics setup",
      "Search-engine optimisation foundations",
      "Blog or news section",
      "WhatsApp and social media integration",
      "12 months hosting included",
    ],
  },
  {
    id: "gold",
    className: "gold",
    name: "E-Commerce Solution",
    price: "From R15,500",
    fit: "For businesses selling products, bookings, or services online.",
    features: [
      "Online store or booking functionality",
      "Secure payment gateway integration",
      "Customer accounts and authentication",
      "Business management dashboard",
      "Product or service management",
      "Performance optimisation",
      "12 months hosting and support",
    ],
  },
  {
    id: "platinum",
    className: "platinum",
    name: "Custom Business Platform",
    price: "From R50,000",
    fit: "For businesses requiring custom operational software.",
    features: [
      "Custom web application development",
      "Mobile application option",
      "Role-based user access",
      "Cloud database setup",
      "Custom APIs and integrations",
      "Workflow automation",
      "Dashboards and business reporting",
      "Structured maintenance support",
    ],
  },
  {
    id: "premium",
    className: "premium",
    name: "Enterprise Platform",
    price: "From R100,000",
    fit: "For complex, scalable, and multi-application business systems.",
    features: [
      "Complete product planning and strategy",
      "Connected web and mobile applications",
      "Advanced workflow automation",
      "Scalable enterprise architecture",
      "Advanced reporting and analytics",
      "Security and deployment planning",
      "Third-party system integrations",
      "Ongoing development and technical support",
    ],
  },
];

const developmentSteps = [
  {
    icon: <FiMessageCircle />,
    title: "Tell us about your business",
    description:
      "Share your idea, business information, preferred features, and available budget.",
  },
  {
    icon: <FiCode />,
    title: "We design the solution",
    description:
      "We recommend the right package, development approach, timeline, and technical requirements.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Launch and grow",
    description:
      "Your solution is tested, deployed, supported, and prepared for future improvements.",
  },
];

const Dev = () => {
  return (
    <main className="webdev-container">
      <section className="webdev-hero">
        <div className="webdev-hero-content">
          <p className="webdev-kicker">
            Affordable. Professional. Scalable.
          </p>

          <h1 className="webdev-title">
            Websites and applications built around your business.
          </h1>

          <p className="webdev-intro">
            LPTB Solutions develops modern websites, web applications, and
            mobile applications for startups, growing businesses, and
            established organisations.
          </p>

          <p className="webdev-intro">
            Whether you need your first professional website or a complete
            digital platform, we help you start at the right level and scale as
            your business grows.
          </p>

          <div className="webdev-hero-actions">
            <Link
              className="contact-button links"
              to="/quotation"
            >
              Build Your Quote
              <FiArrowRight aria-hidden="true" />
            </Link>

            <Link
              className="webdev-secondary-button links"
              to="/contact"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>

        <div className="webdev-hero-panel">
          <span className="webdev-panel-icon" aria-hidden="true">
            <FiSmartphone />
          </span>

          <h2>Start your business website from R2,500</h2>

          <p>
            Provide your company information, services, contact details, and
            branding material. We will prepare and launch your professional
            website.
          </p>

          <ul>
            <li>
              <FiCheckCircle aria-hidden="true" />
              Up to 5 essential pages
            </li>

            <li>
              <FiCheckCircle aria-hidden="true" />
              Mobile-responsive design
            </li>

            <li>
              <FiCheckCircle aria-hidden="true" />
              12 months hosting included
            </li>

            <li>
              <FiCheckCircle aria-hidden="true" />
              Contact and social media integration
            </li>
          </ul>
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
            Package prices provide a realistic starting point. Your final
            quotation will depend on the required features, integrations,
            content, design, and overall system complexity.
          </p>
        </div>

        <div className="packages-container">
          {packages.map((plan) => (
            <article
              className={`package ${plan.className}`}
              key={plan.id}
            >
              <div className="package-head">
                <div>
                  <p className="package-label">{plan.name}</p>
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

              <Link
                className="package-link"
                to={`/quotation?package=${plan.id}`}
              >
                Choose This Package
                <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <p className="webdev-kicker">Not sure where to begin?</p>

        <h2>Build a quotation based on your actual business needs.</h2>

        <p>
          Select your preferred package, add the features you require, and
          submit your project request through your LPTB Solutions account.
        </p>

        <Link className="contact-button links" to="/quotation">
          Build a Free Quote
          <FiArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
};

export default Dev;