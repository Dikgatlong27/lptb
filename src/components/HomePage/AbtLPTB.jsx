import React from 'react'

import "./AbtLPTB.css" 

const AbtLPTB = () => {
    return (
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">About LPTB Solutions</h2>
          <p className="about-text">
            LPTB Solutions is a founder-led software studio directed by
            <span className="highlight"> Tebogo Patrick Dikgatlong. </span>
            We work closely with clients to build practical websites, applications,
            and platforms that support real business growth.
          </p>
          <p className="about-subtext">
            Tebogo stays closely involved in strategy, client communication, and
            delivery, supported by trusted development collaborators on larger
            platform builds like
            <span className="highlight"> YaBatho </span>
            and other growing digital products.
          </p>
          <div className="about-btn-container">
            <a href="/contact" className="about-btn btn-outline slide-bottom">Start a Conversation</a>
          </div>
        </div>
      </section>
    )
}

export default AbtLPTB
