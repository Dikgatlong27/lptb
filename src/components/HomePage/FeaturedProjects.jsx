import React from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiLayers,
} from "react-icons/fi";

import "./FeaturedProjects.css";

const projects = [
  {
    name: "YaBatho Delivery Platform",
    category: "Multi-App Delivery Ecosystem",
    description:
      "A live food delivery platform with customer, restaurant, rider, and administration applications. LPTB Solutions supports product implementation, front-end delivery, integrations, and ongoing improvements in partnership with C-Digital, a division of The Chairman Group.",
    features: [
      "Customer ordering app",
      "Restaurant management app",
      "Rider delivery app",
      "Administration dashboard",
      "Online payments",
      "Real-time order tracking",
    ],
    icon: <FiLayers />,
    website: "https://yabathoplatform.co.za/",
  },
  {
    name: "LVSIFT Digital Platform",
    category: "Education and Future Technologies",
    description:
      "A growing education technology platform for the Lourens Van Staden Institute for Future Technologies. LVSIFT is moving beyond a public website into a structured digital system for programme discovery, learner registrations, secure access, and future administration tools.",
    features: [
      "Institutional website and platform foundation",
      "Programme discovery and access flow",
      "Learner registration journey",
      "Secure authentication structure",
      "Administration tools roadmap",
      "Future integration readiness",
    ],
    icon: <FiCode />,
  },
  {
    name: "The Chairman Group",
    category: "Hospitality and Business Technology",
    description:
      "LPTB Solutions works with The Chairman Group on websites, digital platforms, operational systems, and technical services across its growing business portfolio.",
    features: [
      "The Chairman Fortaleza de Sol website",
      "Fortress Restaurant website",
      "Hospitality digital solutions",
      "Operational system development",
      "Technical maintenance and support",
      "Digital growth strategy",
    ],
    icon: <FiBriefcase />,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section">
      <div className="featured-projects-container">
        <div className="featured-projects-heading">
          <p className="featured-projects-kicker">Selected Projects</p>

          <h2>
            Real projects for businesses, partners, and growing communities.
          </h2>

          <p>
            Our work ranges from business websites to connected platforms like
            YaBatho and digital systems for growing business groups.
          </p>
        </div>

        <div className="featured-projects-grid">
          {projects.map((project) => (
            <article className="featured-project-card" key={project.name}>
              <span className="featured-project-icon" aria-hidden="true">
                {project.icon}
              </span>

              <p className="featured-project-category">
                {project.category}
              </p>

              <h3>{project.name}</h3>

              <p className="featured-project-description">
                {project.description}
              </p>

              <div className="featured-project-features">
                {project.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-project-link"
                >
                  Visit Project
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
