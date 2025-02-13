import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className="about-container">
      
    {/* Founder Section */}
    <section className="founder-section">
      <h2>Meet the Founder</h2>
      <p>
        <strong>Tebogo Patrick Dikgatlong</strong> is the visionary behind
        LPTB Solutions, a self-driven entrepreneur with a deep passion for
        technology and innovation. Born and raised in{" "}
        <strong>Bohlokong, Bethlehem, Free State, South Africa</strong>, he
        has built LPTB Solutions from the ground up, handling multiple aspects
        of the company. As the <strong>Founder and Team Leader</strong>, he
        has assembled a group of experienced developers to drive the company
        forward.
      </p>
    </section>

    {/* Vision & Mission Section */}
    <section className="vision-section">
      <h2>Our Vision & Mission</h2>
      <p>
        LPTB Solutions was founded with a clear vision:{" "}
        <strong>
          to empower businesses with cutting-edge web and mobile solutions
        </strong>{" "}
        that drive growth, efficiency, and success.
      </p>
      <ul>
        <li>
          <strong>Bridging the Digital Gap:</strong> Helping startups, SMEs,
          and enterprises embrace technology.
        </li>
        <li>
          <strong>Scalable & Impactful Solutions:</strong> Delivering
          high-quality, future-proof digital products.
        </li>
        <li>
          <strong>Expanding Across Africa:</strong> From{" "}
          <strong>Pretoria, South Africa</strong>, to the{" "}
          <strong>SADC region</strong>, LPTB Solutions aims to be a leader in
          digital transformation.
        </li>
      </ul>
    </section>

    {/* Team & Expertise Section */}
    <section className="team-section">
      <h2>Our Team & Expertise</h2>
      <p>
        While Tebogo leads the way, he has brought together a skilled team
        specializing in:
      </p>
      <ul>
        <li>
          <strong>Web & Mobile Development:</strong> Building scalable,
          high-performance applications.
        </li>
        <li>
          <strong>UI/UX Design:</strong> Crafting seamless user experiences.
        </li>
        <li>
          <strong>Cloud Solutions & System Integration:</strong> Helping
          businesses modernize and scale.
        </li>
        <li>
          <strong>Digital Branding & Consulting:</strong> Strengthening online
          presence.
        </li>
      </ul>
    </section>
  </div>
  )
}

export default About
