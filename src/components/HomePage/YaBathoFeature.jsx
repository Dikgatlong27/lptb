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

const yabathoAppUrl = 'https://app.yabathoplatform.co.za/'

const YaBathoFeature = () => {
  return (
    <section className="yabatho-section">
      <div className="yabatho-container">
        <div className="yabatho-copy">
          <p className="yabatho-kicker">Live Platform</p>
          <h2>Explore YaBatho in action.</h2>
          <p>
            Open the app to discover the ordering experience, or speak to us about
            partnering with the platform. Developed with C-Digital, a division of
            The Chairman Group.
          </p>

          <div className="yabatho-actions">
            <a
              href={yabathoAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="yabatho-primary"
            >
              Open YaBatho App <FiExternalLink aria-hidden="true" />
            </a>
            <a href="/contact" className="yabatho-secondary">Partner with us</a>
          </div>

          <p className="yabatho-availability">Available on Android, iOS, and desktop through your browser.</p>
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
