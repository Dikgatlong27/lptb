import React from 'react'

import "./AbtLPTB.css" 

const AbtLPTB = () => {
    return (
        <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About LPTB Solutions</h2>
        <p className="about-text">
          LPTB Solutions is a cutting-edge software development company specializing in  
          <span className="highlight"> web and mobile app development. </span>  
          We help businesses bring their digital visions to life with modern, scalable, and user-friendly solutions.
        </p>
        <p className="about-subtext">
          Our expertise spans <span className="highlight">custom software development, UI/UX design, 
          e-commerce solutions, and enterprise applications.</span> Whether you're a startup or an 
          enterprise, we're here to drive innovation.
        </p>
        <div className="about-btn-container">
          <a href="/contact" className="about-btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
    )
}

export default AbtLPTB
