import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaintBrush, FaRobot } from 'react-icons/fa';
import { FiBarChart2, FiCloud, FiDatabase, FiGlobe, FiLayers, FiLock } from 'react-icons/fi';

import './Services.css';

const coreServices = [
  {
    icon: <FiGlobe />,
    title: 'Custom Software Development',
    description: 'Build modern, scalable web apps and cross-platform mobile apps tailored to your needs.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Branding & UI/UX Design',
    description: 'Craft strong brand systems, polished interfaces, and prototypes that feel easy to use.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'SEO & Digital Marketing',
    description: 'Improve visibility with practical SEO, analytics setup, and conversion-focused content.',
  },
  {
    icon: <FiCloud />,
    title: 'Cloud Solutions',
    description: 'Deploy secure cloud infrastructure that scales with your applications and data.',
  },
  {
    icon: <FaRobot />,
    title: 'AI & Automation',
    description: 'Use automation and AI-assisted workflows to reduce manual work and improve operations.',
  },
];

const enterpriseServices = [
  {
    icon: <FiDatabase />,
    title: 'ERP',
    description: 'Enterprise Resource Planning solutions for finance, HR, inventory, and operations.',
  },
  {
    icon: <FiLayers />,
    title: 'CRM',
    description: 'Custom CRM solutions to improve sales, customer relationships, and support management.',
  },
  {
    icon: <FiLock />,
    title: 'Management Systems',
    description: 'Custom systems for project management, logistics, bookings, and internal operations.',
  },
];

const Services = () => {
  const navigate = useNavigate()

  return (
    <div className="service-container">
      <section className="services-section service-hero">
        <div className="services-container">
          <h2 className="services-title service-tittle-top">Our Services</h2>
          <p className="services-subtext">Custom web, mobile, product design, and business technology solutions built for growth.</p>

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
          <h2 className='services-title'>Enterprise & Advanced Tech</h2>
          <p className="services-subtext">Streamline business operations with systems that connect teams, data, and customers.</p>

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
