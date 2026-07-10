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
      "A connected food delivery platform comprising customer, restaurant, rider, and administration applications. LPTB Solutions leads front-end development, product implementation, integrations, and ongoing platform improvement in partnership with C-Digital, a division of The Chairman Group.",
    features: [
      "Customer ordering app",
      "Restaurant management app",
      "Rider delivery app",
      "Administration dashboard",
      "Online payments",
      "Real-time order tracking",
    ],
    icon: <FiLayers />,
    website: "https://yabathoplatform.co.za/coming-soon",
  },
  {
    name: "LVSIFT Digital Platform",
    category: "Education and Future Technologies",
    description:
      "A modern digital platform developed for the Lourens Van Staden Institute for Future Technologies. The platform establishes a professional digital presence and prepares the institute for programme access, authentication, registrations, and future integrations.",
    features: [
      "Modern institutional website",
      "Responsive user experience",
      "User authentication foundation",
      "Programme access preparation",
      "Scalable integration architecture",
      "Digital registration readiness",
    ],
    icon: <FiCode />,
  },
  {
    name: "The Chairman Group",
    category: "Hospitality and Business Technology",
    description:
      "LPTB Solutions supports The Chairman Group with websites, digital platforms, operational systems, and ongoing technical services across its growing business portfolio.",
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
            Digital platforms built for real businesses and growing communities.
          </h2>

          <p>
            Our work extends beyond basic websites. We develop connected
            platforms, business systems, mobile applications, and digital
            infrastructure designed around real operational needs.
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