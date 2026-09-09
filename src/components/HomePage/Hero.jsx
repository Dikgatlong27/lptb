import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./Hero.css"

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Founder-led software solutions for growing businesses.</h1>
        <p>
          LPTB Solutions builds websites, apps, and digital platforms with a
          hands-on approach, practical planning, and room to grow.
        </p>
        <div className="hero-buttons">
          <button className='slide-bottom' onClick={() => navigate("/services")}>What We Build</button>
          <button className="btn-outline slide-bottom" onClick={() => navigate("/contact")}>Work With Us</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
