import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./Hero.css"

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
      <div className="hero-content">
        <h1>Your Partner in Web & Mobile Development Excellence</h1>
        <p>Custom software solutions tailored to your business needs.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/services")}>Our Services</button>
          <button className="btn-outline" onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </div>
    </section>
    )
}

export default Hero
