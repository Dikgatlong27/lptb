import React from "react";
import { FiCpu, FiSettings, FiTrendingUp, FiUsers } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import "./WhyChooseUs.css";

const reasons = [
  {
    title: "Founder-Led Delivery",
    description: "Projects are guided directly by Tebogo, keeping communication, planning, and delivery clear.",
    icon: <FiCpu />,
  },
  {
    title: "Trusted Development Support",
    description: "Backend and full-stack collaborators support larger or more technical builds when needed.",
    icon: <FaRocket />,
  },
  {
    title: "Clear Scope",
    description: "We help clients choose the right first phase, timeline, and technical approach for their budget.",
    icon: <FiSettings />,
  },
  {
    title: "Real Project Experience",
    description: "Our experience is growing through live platforms like YaBatho, client websites, and business systems.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Partnership Mindset",
    description: "Partnerships with groups like The Chairman Group help us grow responsibly while serving real business needs.",
    icon: <FiUsers />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <h2 className="why-choose-title">Why Work With LPTB Solutions?</h2>
        <p className="why-choose-subtext">
          We stay close to the work, communicate clearly, and build practical solutions that can grow over time.
        </p>
        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
            <div className="why-choose-card" key={index}>
              <span className="why-choose-icon" aria-hidden="true">{reason.icon}</span>
              <h3 className="why-choose-heading">{reason.title}</h3>
              <p className="why-choose-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
