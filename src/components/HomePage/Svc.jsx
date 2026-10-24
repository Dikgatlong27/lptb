import React from 'react'
import { Link } from 'react-router-dom'
import { FaMobileAlt, FaPaintBrush, FaShoppingCart } from 'react-icons/fa'
import { FiGlobe, FiSettings } from 'react-icons/fi'
import "./Svc.css"

const servicesData = [
  {
    title: "Web Development",
    description:
      "Practical, responsive websites for small businesses, founders, and organisations that need a credible online home.",
    icon: <FiGlobe />,
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile and PWA experiences planned carefully, built in phases, and improved as the product proves itself.",
    icon: <FaMobileAlt />,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Online stores, booking flows, payment integrations, and customer journeys for businesses starting to sell online.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Custom Software Development",
    description:
      "Custom dashboards, portals, delivery tools, and internal systems built around the way your business actually works.",
    icon: <FiSettings />,
  },
  {
    title: "UI/UX Design",
    description:
      "Clear interfaces, page structures, and product flows that help businesses look organised and easy to trust.",
    icon: <FaPaintBrush />,
  },
];

const Svc = () => {
  return (
    <section className="services-section home-services">
      <div className="services-container">
        <p className="section-eyebrow">02 / WHAT WE BUILD</p>
        <h2 className="services-title">Built for the way you do business.</h2>
        <p className="services-subtext">
          Practical web, mobile, and product design support with clear communication from start to launch.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <span className="service-index">0{index + 1}</span>
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to="/services" className="studio-text-link" aria-label={`Explore ${service.title}`}>Explore service ↗</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Svc
