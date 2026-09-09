import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaintBrush, FaRobot } from 'react-icons/fa';
import { FiBarChart2, FiCloud, FiDatabase, FiGlobe, FiLayers, FiLock } from 'react-icons/fi';

import './Services.css';

const coreServices = [
  {
    icon: <FiGlobe />,
    title: 'Custom Software Development',
    description: 'Plan and build web apps, portals, dashboards, and mobile-ready systems in realistic phases.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Branding & UI/UX Design',
    description: 'Shape brand basics, page layouts, product flows, and interfaces that make the business easier to understand.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'SEO & Digital Marketing',
    description: 'Set up practical visibility foundations: search basics, analytics, content structure, and conversion paths.',
  },
  {
    icon: <FiCloud />,
    title: 'Cloud Solutions',
    description: 'Prepare hosting, Firebase, databases, APIs, and cloud tools that match the current stage of the project.',
  },
  {
    icon: <FaRobot />,
    title: 'AI & Automation',
    description: 'Add useful automation carefully where it saves time, improves operations, or supports customer service.',
  },
];

const enterpriseServices = [
  {
    icon: <FiDatabase />,
    title: 'ERP',
    description: 'Early-stage ERP-style tools for businesses that need better finance, stock, HR, or operational tracking.',
  },
  {
    icon: <FiLayers />,
    title: 'CRM',
    description: 'Simple CRM systems that help growing teams manage leads, clients, follow-ups, and support activity.',
  },
  {
    icon: <FiLock />,
    title: 'Management Systems',
    description: 'Custom systems for project tracking, bookings, logistics, deliveries, and internal operations.',
  },
];

const Services = () => {
  const navigate = useNavigate()

  return (
    <div className="service-container">
      <section className="services-section service-hero">
        <div className="services-container">
          <h2 className="services-title service-tittle-top">Our Services</h2>
          <p className="services-subtext">Founder-led web, mobile, product design, and business technology support for teams that want to grow properly.</p>

          <div className="services-grid">
            {coreServices.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-lists services-section">
        <div className="services-container">
          <h2 className='services-title'>Business Systems & Advanced Tech</h2>
          <p className="services-subtext">We start with the system your business needs now, then build toward stronger operations over time.</p>

          <div className="services-grid">
            {enterpriseServices.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <button className="services-cta-btn" onClick={() => navigate('/dev')}>Explore packages</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
