import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiMessageSquare, FiCode, FiTrendingUp } from 'react-icons/fi';
import './AbtLPTB.css';
const AbtLPTB = () => (
  <section className="studio-about">
    <div className="studio-about-layout">
      <div className="studio-about-copy">
        <p className="section-eyebrow">01 / THE STUDIO</p>
        <h2>Good software starts with a real conversation.</h2>
        <p>We’re LPTB Solutions, a founder-led software studio directed by <strong>Tebogo Patrick Dikgatlong.</strong> We work closely with businesses to turn practical needs into websites, applications, and platforms.</p>
        <p>From the first conversation to delivery, Tebogo stays involved—with trusted development collaborators supporting larger builds.</p>
        <Link className="studio-text-link" to="/about">Meet the studio <FiArrowUpRight aria-hidden="true" /></Link>
      </div>
      <div className="studio-principles">
        <div className="studio-principles-top"><span>SMALL STUDIO. DIRECT CONNECTION.</span><span aria-hidden="true">↗</span></div>
        {[{icon:<FiMessageSquare/>,title:'Understand first',text:'Your goals, your customers, your next step.'},{icon:<FiCode/>,title:'Build with purpose',text:'A clear scope and a solution that fits.'},{icon:<FiTrendingUp/>,title:'Leave room to grow',text:'Practical foundations for what comes next.'}].map((point,index)=><div className="studio-principle" key={point.title}><span className="studio-principle-icon" aria-hidden="true">{point.icon}</span><div><h3>{point.title}</h3><p>{point.text}</p></div><small>0{index+1}</small></div>)}
        <div className="studio-founder"><span>TD</span><div><strong>Tebogo Patrick Dikgatlong</strong><small>Founder & Director · LPTB Solutions</small></div></div>
      </div>
    </div>
  </section>
);
export default AbtLPTB;
