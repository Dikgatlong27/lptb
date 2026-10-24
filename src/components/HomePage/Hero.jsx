import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./Hero.css"

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero home-hero">
      <div className="hero-content home-hero-layout">
        <div className="home-hero-copy">
        <div className="hero-kicker"><span /> LPTB SOLUTIONS · HOME</div>
        <h1>Founder-led software solutions for growing businesses.</h1>
        <p>
          LPTB Solutions builds websites, apps, and digital platforms with a
          hands-on approach, practical planning, and room to grow.
        </p>
        <div className="hero-buttons">
          <button className='slide-bottom' onClick={() => navigate("/services")}>What We Build</button>
          <button className="btn-outline slide-bottom" onClick={() => navigate("/contact")}>Work With Us</button>
        </div>
        <div className="hero-capabilities" aria-label="Our expertise">
          <span>Websites</span><span>Mobile apps</span><span>Digital platforms</span>
        </div>
        </div>
        <div className="hero-project-gallery" aria-label="Selected project previews">
          <div className="hero-gallery-glow" aria-hidden="true" />
          {[
            {name:'LVSIFT', image:'lvsift-gallery.png', logo:'lvsift-full.png', category:'Learning & technology', className:'gallery-lvsift'},
            {name:'GazaTech', image:'gazatech.png', logo:'gaza-tech.png', category:'Cloud & DevOps', className:'gallery-gazatech'},
            {name:'Fortress', image:'fortress.png', logo:'fortress.png', category:'Dining & hospitality', className:'gallery-fortress'},
          ].map(project => (
            <Link to="/our-work" className={`hero-gallery-card ${project.className}`} key={project.name} aria-label={`Explore ${project.name} in Our Work`}>
              <img className="hero-gallery-screen" src={`/previews/${project.image}`} alt={`${project.name} website preview`} width="1143" height="649" />
              <div className="hero-gallery-details">
                <div className="hero-gallery-brand"><img src={`/clients/${project.logo}`} alt="" /><div><strong>{project.name}</strong><small>{project.category}</small></div></div>
                <span className="hero-gallery-action">View project ↗</span>
              </div>
            </Link>
          ))}
          <Link className="hero-gallery-caption" to="/our-work">A few ideas we brought to life. <span>Explore our work ↗</span></Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
