import React from 'react'
import { FaMobileAlt, FaPaintBrush, FaShoppingCart } from 'react-icons/fa'
import { FiGlobe, FiSettings } from 'react-icons/fi'
import "./Svc.css"

const servicesData = [
  {
    title: "Web Development",
    description:
      "We build modern, responsive, and high-performance websites tailored to your business needs.",
    icon: <FiGlobe />,
  },
  {
    title: "Mobile App Development",
    description:
      "Transform your ideas into scalable and user-friendly mobile applications for iOS and Android.",
    icon: <FaMobileAlt />,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Developing seamless e-commerce platforms with secure payment gateways and intuitive UI/UX.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Custom Software Development",
    description:
      "From SaaS platforms to internal enterprise solutions, we build robust custom applications.",
    icon: <FiSettings />,
  },
  {
    title: "UI/UX Design",
    description:
      "We create engaging and visually stunning designs that enhance user experiences.",
    icon: <FaPaintBrush />,
  },
];

const Svc = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtext">
          Empowering businesses with practical web, mobile, and product design solutions.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Svc
