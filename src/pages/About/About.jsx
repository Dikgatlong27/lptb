import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className='about-page'>
      <div className="about-container">
        {/* Founder Section */}
        <section className="founder-section">
          <h2>Meet the Director</h2>
          <p>
            <strong>Tebogo Patrick Dikgatlong</strong> is the Director and
            founder of LPTB Solutions. Born and raised in{" "}
            <strong>Bohlokong, Bethlehem, Free State, South Africa</strong>, he leads
            the company's client relationships, planning, product direction, and
            delivery approach.
          </p>
          <p>
            LPTB Solutions is growing through practical client work, digital
            partnerships, and platform development, with trusted technical
            collaborators supporting larger builds where needed.
          </p>
        </section>

        {/* Vision & Mission Section */}
        <section className="vision-section">
          <h2>Where We Are Going</h2>
          <p>
            LPTB Solutions was founded with a clear, practical vision:{" "}
            <strong>
              to help local businesses, founders, and growing organisations move
              into digital systems with solutions that match their stage of growth
            </strong>{" "}
            .
          </p>
          <ul>
            <li>
              <strong>Build clearly:</strong> Define scope, timelines, budget,
              and the right first phase before development starts.
            </li>
            <li>
              <strong>Grow through real work:</strong> Active projects like
              YaBatho, The Chairman Group platforms, and client websites continue
              to strengthen our delivery capacity.
            </li>
            <li>
              <strong>Build for long-term partnerships:</strong> Work with clients
              and partners who want steady improvement, not just a once-off website.
            </li>
          </ul>
        </section>

        {/* Team & Expertise Section */}
        <section className="team-section">
          <h2>How We Work</h2>
          <p>
            LPTB Solutions is founder-led, with Tebogo staying closely involved in
            project planning and delivery while trusted developers support
            backend, full-stack, database, API, and mobile requirements where needed.
          </p>
          <ul>
            <li>
              <strong>Web and mobile development:</strong> Websites, customer apps,
              dashboards, and platform interfaces.
            </li>
            <li>
              <strong>Product and UI thinking:</strong> Structuring features,
              screens, and user flows around real business needs.
            </li>
            <li>
              <strong>Backend and integrations:</strong> Delivering APIs,
              databases, authentication, payments, and operational tools with the
              right technical support.
            </li>
            <li>
              <strong>Partnership growth:</strong> Building with partners like
              C-Digital and The Chairman Group on practical digital products.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About
