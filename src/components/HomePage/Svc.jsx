import React from 'react'
import "./Svc.css"

const servicesData = [
    {
      title: "Web Development",
      description:
        "We build modern, responsive, and high-performance websites tailored to your business needs.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Transform your ideas into scalable and user-friendly mobile applications for iOS and Android.",
      icon: "📱",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Developing seamless e-commerce platforms with secure payment gateways and intuitive UI/UX.",
      icon: "🛒",
    },
    {
      title: "Custom Software Development",
      description:
        "From SaaS platforms to internal enterprise solutions, we build robust custom applications.",
      icon: "⚙️",
    },
    {
      title: "UI/UX Design",
      description:
        "We create engaging and visually stunning designs that enhance user experiences.",
      icon: "🎨",
    },
  ];

const Svc = () => {
    return (
        <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtext">
          Empowering businesses with cutting-edge web and mobile solutions.
        </p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <span className="service-icon">{service.icon}</span>
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
