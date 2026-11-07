import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero home-hero">
      <div className="hero-content home-hero-layout">
        <div className="home-hero-copy">
          <div className="hero-kicker">
            <span aria-hidden="true" />
            <Link to="/">LPTB SOLUTIONS</Link>
            <span className="hero-kicker-divider" aria-hidden="true">
              ·
            </span>
            <Link to="/" aria-current="page">
              HOME
            </Link>
          </div>
          <h1>Founder-led software solutions for growing businesses.</h1>
          <p>
            LPTB Solutions builds websites, apps, and digital platforms with a hands-on
            approach, practical planning, and room to grow.
          </p>
          <div className="hero-buttons">
            <button className="slide-bottom" onClick={() => navigate('/services')}>
              What We Build
            </button>
            <button
              className="btn-outline slide-bottom"
              onClick={() => navigate('/contact')}
            >
              Work With Us
            </button>
          </div>
          <div className="hero-capabilities" aria-label="Our expertise">
            <span>Websites</span>
            <span>Mobile apps</span>
            <span>Digital platforms</span>
          </div>
        </div>
        <div className="hero-project-gallery" aria-label="Selected project previews">
          <div className="hero-gallery-glow" aria-hidden="true" />
          {[
            {
              name: 'LVSIFT',
              image: 'lvsift-gallery-hero.jpg',
              logo: 'lvsift-full.png',
              category: 'Learning & technology',
              className: 'gallery-lvsift',
            },
            {
              name: 'GazaTech',
              image: 'gazatech-hero.jpg',
              logo: 'gaza-tech.png',
              category: 'Cloud & DevOps',
              className: 'gallery-gazatech',
            },
            {
              name: 'Fortress',
              image: 'fortress-hero.jpg',
              logo: 'fortress.png',
              category: 'Dining & hospitality',
              className: 'gallery-fortress',
            },
          ].map((project, index) => (
            <Link
              to="/our-work"
              className={`hero-gallery-card ${project.className}`}
              key={project.name}
              aria-label={`Explore ${project.name} in Our Work`}
            >
              <img
                className="hero-gallery-screen"
                src={`/previews/${project.image}`}
                alt={`${project.name} website preview`}
                width="768"
                height="432"
                fetchpriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
              />
              <div className="hero-gallery-details">
                <div className="hero-gallery-brand">
                  <img
                    src={`/clients/${project.logo}`}
                    alt=""
                    width="28"
                    height="28"
                    decoding="async"
                  />
                  <div>
                    <strong>{project.name}</strong>
                    <small>{project.category}</small>
                  </div>
                </div>
                <span className="hero-gallery-action">View project</span>
              </div>
            </Link>
          ))}
          <Link className="hero-gallery-caption" to="/our-work">
            A few ideas we brought to life. <span>Explore our work</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
