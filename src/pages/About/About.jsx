import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiGlobe, FiLayers, FiCode, FiUsers } from 'react-icons/fi';
import './About.css';

const principles = [
  ['01', 'Start with clarity', 'Agree on scope, timelines, budget, and the right first phase before development begins.'],
  ['02', 'Grow through real work', 'Build on experience from client websites and connected platforms like YaBatho.'],
  ['03', 'Think beyond launch', 'Work towards lasting relationships and steady improvements as your business grows.'],
];
const expertise = [
  {icon:<FiGlobe />,title:'Web & mobile',text:'Websites, customer applications, dashboards, and platform interfaces.'},
  {icon:<FiLayers />,title:'Product & experience',text:'Features, screens, and user journeys shaped around real business needs.'},
  {icon:<FiCode />,title:'Backend & integrations',text:'APIs, databases, authentication, payments, and operational tools with the right technical support.'},
  {icon:<FiUsers />,title:'Partnerships',text:'Collaboration with C-Digital and The Chairman Group on practical digital products.'},
];
const About = () => (
  <main className="about-page about-redesign">
    <div className="about-content">
      <section className="about-director" aria-labelledby="director-heading">
        <div className="about-director-copy">
          <p className="section-eyebrow">THE PERSON BEHIND THE STUDIO</p>
          <h2 id="director-heading">Meet the Director.</h2>
          <p><strong>Tebogo Patrick Dikgatlong</strong> founded LPTB Solutions with a hands-on approach to building useful digital products.</p>
          <p>Born and raised in Bohlokong, Bethlehem, Free State, he leads client relationships, planning, product direction, and delivery. Trusted development collaborators support larger builds where needed.</p>
          <Link className="studio-text-link" to="/contact">Start a conversation <FiArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="about-director-card">
          <div className="about-director-monogram" aria-hidden="true">TD<span>↗</span></div>
          <h3>Tebogo Patrick Dikgatlong</h3>
          <p>Founder & Director</p>
          <div className="about-director-location">Bohlokong roots. A practical digital vision.</div>
          <div className="about-director-tags"><span>Strategy</span><span>Communication</span><span>Delivery</span></div>
        </div>
      </section>
      <section className="about-direction" aria-labelledby="direction-heading">
        <div className="about-section-intro"><div><p className="section-eyebrow">OUR DIRECTION</p><h2 id="direction-heading">Build clearly. Grow steadily.</h2></div><p>Helping local businesses, founders, and organisations adopt digital systems that fit their stage of growth.</p></div>
        <div className="about-principle-grid">{principles.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="about-expertise" aria-labelledby="expertise-heading">
        <div className="about-section-intro"><div><p className="section-eyebrow">HOW WE WORK</p><h2 id="expertise-heading">Close to the work.<br/>Connected to the right people.</h2></div><p>Tebogo stays involved from planning to delivery, supported by trusted developers for specialist requirements.</p></div>
        <div className="about-expertise-grid">{expertise.map(item=><article key={item.title}><span aria-hidden="true">{item.icon}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        <Link className="studio-text-link" to="/our-work">See our work <FiArrowUpRight aria-hidden="true" /></Link>
      </section>
    </div>
  </main>
);
export default About;
