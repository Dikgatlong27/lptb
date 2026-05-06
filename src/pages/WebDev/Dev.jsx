import React from 'react';
import { Link } from 'react-router-dom';

import './WebDev.css';

const packages = [
  {
    className: 'bronze',
    name: 'Bronze Package',
    price: 'R2,500',
    fit: 'Perfect for startups',
    features: [
      '3-5 page website',
      'Mobile responsive design',
      'Basic branding',
      'Contact form',
      'Social media links',
      'Basic hosting for 12 months',
    ],
  },
  {
    className: 'silver',
    name: 'Silver Package',
    price: 'R8,500 - R15,500',
    fit: 'Ideal for small businesses',
    features: [
      '3-5 page website',
      'Custom UI/UX design',
      'Basic SEO optimization',
      'Mobile-friendly design',
      'Optional blog setup',
      'Google Analytics setup',
      '12 months hosting included',
    ],
  },
  {
    className: 'gold',
    name: 'Gold Package',
    price: 'R15,500+',
    fit: 'For established businesses',
    features: [
      '5+ pages or custom web app',
      'Advanced SEO and performance optimization',
      'E-commerce with payment gateway',
      'Admin dashboard',
      'User authentication',
      'Google Business and social integrations',
      'Chat support',
      '12 months hosting and maintenance',
    ],
  },
  {
    className: 'platinum',
    name: 'Platinum Package',
    price: 'R50,000+',
    fit: 'The complete business solution',
    features: [
      'Everything in Gold',
      'Web and mobile app development',
      'AI-powered automation',
      'Cloud hosting and scalable database',
      'Custom API development',
      'Speed and performance improvements',
      'Monthly security updates',
      'Priority support',
    ],
  },
  {
    className: 'premium',
    name: 'Premium Package',
    price: 'R100,000+',
    fit: 'Enterprise-level custom solutions',
    features: [
      'Everything in Platinum',
      'AI and machine learning integration',
      'Blockchain security features',
      'Custom SaaS development',
      'Multi-vendor marketplace development',
      'High-traffic optimization',
      'Business intelligence and analytics',
      'Enterprise-grade cloud infrastructure',
      'Ongoing development and support',
      'VIP consultation and strategy planning',
    ],
  },
];

const Dev = () => {
  return (
    <div className="webdev-container">
      <h1 className="webdev-title">Web & Mobile Development</h1>
      <p className="webdev-intro">
        Practical packages for launching, upgrading, or scaling your digital product.
      </p>

      <div className="packages-container">
        {packages.map((plan) => (
          <div className={`package ${plan.className}`} key={plan.name}>
            <div className="package-head">
              <h2>{plan.name}</h2>
              <span>{plan.price}</span>
            </div>
            <p><strong>{plan.fit}</strong></p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h2>Ready to Build Your Dream Project?</h2>
        <p>Sign up or log in to build a quote and start shaping the project.</p>
        <Link className="contact-button links" to='/login'>Get a Free Quote</Link>
      </div>
    </div>
  );
};

export default Dev;
