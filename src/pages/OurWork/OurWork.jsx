import React from 'react';
import FeaturedProjects from '../../components/HomePage/FeaturedProjects';
import YaBathoFeature from '../../components/HomePage/YaBathoFeature';
import CTA from '../../components/HomePage/CTA';
import './OurWork.css';

const OurWork = () => (
  <main className="our-work-page">
    <header className="our-work-intro">
      <div>
        <h1>Our Work</h1>
        <p>Websites, applications, and connected platforms built for real businesses.</p>
      </div>
    </header>
    <FeaturedProjects />
    <YaBathoFeature />
    <CTA />
  </main>
);

export default OurWork;
