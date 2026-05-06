import React from 'react'
import { FaMotorcycle, FaStore } from 'react-icons/fa'
import { FiExternalLink, FiMonitor, FiUsers } from 'react-icons/fi'

import './YaBathoFeature.css'

const platformPoints = [
  {
    icon: <FiUsers />,
    title: 'Customers',
    text: 'A simple ordering experience for people buying from local restaurants and outlets.',
  },
  {
    icon: <FaStore />,
    title: 'Restaurants',
    text: 'Restaurant-side tools for receiving orders, managing menus, and preparing deliveries.',
  },
  {
    icon: <FaMotorcycle />,
    title: 'Riders',
    text: 'Delivery coordination for moving orders from restaurants to customers with status updates.',
  },
  {
    icon: <FiMonitor />,
    title: 'Admin',
    text: 'Oversight for managing outlets, platform activity, and growth as the rollout expands.',
  },
]

const YaBathoFeature = () => {
  return (
    <section className="yabatho-section">
      <div className="yabatho-container">
        <div className="yabatho-copy">
          <p className="yabatho-kicker">New Development</p>
          <h2>YaBatho Delivery Platform is launching soon.</h2>
          <p>
            LPTB Solutions is helping build YaBatho, a people-first delivery ecosystem made for
            local customers, restaurants, riders, and administrators. The platform is being
            developed in partnership with C-Digital, a division of The Chairman Group.
          </p>
          <p>
            YaBatho is shaped around local growth: helping restaurants go digital, improving order
            handling, and giving communities a clearer delivery experience.
          </p>

          <div className="yabatho-actions">
            <a
              href="https://yabathoplatform.co.za/coming-soon"
              target="_blank"
              rel="noopener noreferrer"
              className="yabatho-primary"
            >
              Visit YaBatho <FiExternalLink aria-hidden="true" />
            </a>
            <a href="/contact" className="yabatho-secondary">Partner with us</a>
          </div>
        </div>

        <div className="yabatho-panel" aria-label="YaBatho platform areas">
          <div className="yabatho-panel-header">
            <span>YaBatho</span>
            <strong>Delivery Ecosystem</strong>
          </div>

          <div className="yabatho-grid">
            {platformPoints.map((point) => (
              <div className="yabatho-card" key={point.title}>
                <span className="yabatho-icon" aria-hidden="true">{point.icon}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default YaBathoFeature
