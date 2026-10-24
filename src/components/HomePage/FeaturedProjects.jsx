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
    name: "YaBatho",
    category: "Local Delivery",
    description: "A people-first delivery ecosystem connecting local customers, restaurants, riders, and administrators through one digital platform.",
    features: ["Customer ordering", "Restaurant preparation", "Delivery coordination"],
    icon: <FiLayers />,
    website: "https://yabathoplatform.co.za/",
  },
  {
    name: "LVSIFT",
    category: "Short Learning Programmes",
    description: "A marketplace connecting learning institutions and learners through future-focused short learning programmes, supported by technology, marketing, and payment infrastructure.",
    features: ["Programme discovery", "Learning delivery", "E-commerce infrastructure"],
    icon: <FiCode />,
    website: "https://lvsift.africa/",
  },
  {
    name: "The Chairman Group",
    category: "Corporate Group",
    description: "A governance-led corporate group focused on structured growth, leadership, hospitality, technology, and strategic partnerships.",
    features: ["Hospitality", "Technology", "Strategic partnerships"],
    icon: <FiBriefcase />,
    website: "https://www.thechairmangroup.co.za/",
  },
  {
    name: "Axe Projects Consultants",
    category: "Accounting, Taxation & Compliance",
    description: "A Polokwane-based accounting, taxation, and business compliance firm helping SMEs manage financial obligations and support sustainable growth.",
    features: ["Accounting", "Tax advisory", "Business compliance"],
    icon: <FiBriefcase />,
    website: "https://axeprojectsconsultants.co.za/",
  },
  {
    name: "GazaTech",
    category: "Cloud & DevOps",
    description: "Cloud infrastructure and DevOps services helping businesses build secure, scalable environments and automate software delivery.",
    features: ["Cloud infrastructure", "DevOps engineering", "Data platforms"],
    icon: <FiCode />,
    website: "https://gazatech.co.za/",
  },
  {
    name: "Fortress Restaurant",
    category: "Dining & Hospitality",
    description: "Founded by Mr. and Mrs. Maphanga, Fortress combines modern dining with the heritage of The Chairman Fortaleza de Sol.",
    features: ["Modern dining", "Culinary artistry", "Hospitality"],
    icon: <FiBriefcase />,
    website: "https://fortressmenlynmaine.co.za/",
  },
];

const FeaturedProjects = () => {
  const logos = { 'YaBatho': 'yabatho-official.png', 'LVSIFT': 'lvsift-full.png', 'The Chairman Group': 'chairman.png', 'Axe Projects Consultants': 'axe-projects.png', 'GazaTech': 'gaza-tech.png', 'Fortress Restaurant': 'fortress.png' };
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
                <img src={`/clients/${logos[project.name]}`} alt="" />
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
                  aria-label={`View Project: ${project.name} (opens in a new tab)`}
                >
                  View Project
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
