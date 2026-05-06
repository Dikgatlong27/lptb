import React from "react";
import { FiCpu, FiSettings, FiTrendingUp, FiUsers } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import "./WhyChooseUs.css";

const reasons = [
  {
    title: "Expert Developers",
    description: "Our team consists of experienced developers skilled in modern technologies.",
    icon: <FiCpu />,
  },
  {
    title: "Current Technologies",
    description: "We use proven frameworks and tools like React, Node.js, Flutter, and more.",
    icon: <FaRocket />,
  },
  {
    title: "Custom Solutions",
    description: "Tailored web and mobile solutions that align with your business needs.",
    icon: <FiSettings />,
  },
  {
    title: "Scalability & Performance",
    description: "We build scalable, high-performance applications for long-term growth.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize your vision and deliver solutions shaped around real outcomes.",
    icon: <FiUsers />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <h2 className="why-choose-title">Why Choose LPTB Solutions?</h2>
        <p className="why-choose-subtext">
          We combine delivery discipline, product thinking, and technical care to build work that lasts.
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
