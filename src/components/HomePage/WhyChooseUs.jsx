import React from "react";
import "./WhyChooseUs.css";

const reasons = [
  {
    title: "Expert Developers",
    description: "Our team consists of experienced developers skilled in modern technologies.",
    icon: "💡",
  },
  {
    title: "Cutting-Edge Technologies",
    description: "We use the latest frameworks and tools like React, Node.js, Flutter, and more.",
    icon: "🚀",
  },
  {
    title: "Custom Solutions",
    description: "Tailored web & mobile solutions that align perfectly with your business needs.",
    icon: "⚙️",
  },
  {
    title: "Scalability & Performance",
    description: "We build scalable, high-performance applications for long-term growth.",
    icon: "📈",
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize your vision and deliver solutions that exceed expectations.",
    icon: "🤝",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <h2 className="why-choose-title">Why Choose LPTB Solutions?</h2>
        <p className="why-choose-subtext">
          We combine innovation, expertise, and dedication to deliver the best web & mobile solutions.
        </p>
        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
            <div className="why-choose-card" key={index}>
              <span className="why-choose-icon">{reason.icon}</span>
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
