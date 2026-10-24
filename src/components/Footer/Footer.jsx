import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowUp, FiMail, FiPhone } from 'react-icons/fi';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { FaWhatsapp, FaGithub, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const socials = [
  ['Facebook', 'https://www.facebook.com/lptbsolutions/', <TiSocialFacebook />],
  ['LinkedIn', 'https://www.linkedin.com/company/lptbsolutions/', <TiSocialLinkedin />],
  ['WhatsApp', 'https://wa.me/27676228529', <FaWhatsapp />],
  ['GitHub', 'https://github.com/Dikgatlong27', <FaGithub />],
  ['YouTube', 'https://www.youtube.com/channel/UC-f9Qw9aqn2voaiqP5rS__g', <FaYoutube />],
];
const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <div className="footer-invitation"><div><p>HAVE SOMETHING IN MIND?</p><h2>Let’s make it happen.</h2></div><Link to="/contact">Talk to the studio <FiArrowUpRight aria-hidden="true" /></Link></div>
      <div className="footer-columns">
        <div className="footer-studio"><Link className="footer-brand" to="/" aria-label="LPTB Solutions home"><img src="/logoflat.svg" alt="LPTB Solutions" /></Link><p>A founder-led software studio.<br/>Practical ideas. Thoughtful digital solutions.</p><span className="footer-location">BASED IN SOUTH AFRICA</span></div>
        <div className="footer-column"><h3>Explore</h3><Link to="/">Home</Link><Link to="/about">About the studio</Link><Link to="/services">Services</Link><Link to="/dev">Development packages</Link><Link to="/our-work">Our Work</Link></div>
        <div className="footer-column"><h3>Let’s connect</h3><a href="mailto:info@lptbsolutions.co.za"><FiMail aria-hidden="true" />info@lptbsolutions.co.za</a><a href="tel:+27676228529"><FiPhone aria-hidden="true" />+27 67 622 8529</a><Link to="/quotation">Plan your quotation <FiArrowUpRight aria-hidden="true" /></Link><div className="footer-social-links" aria-label="Social media">{socials.map(([name,url,icon])=><a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`}>{icon}</a>)}</div></div>
      </div>
      <div className="footer-bottom-row"><p>© {new Date().getFullYear()} LPTB Solution (Pty) Ltd. All rights reserved.</p><button type="button" onClick={() => { window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}); document.getElementById('page-content')?.focus({preventScroll:true}); }}>Back to top <FiArrowUp aria-hidden="true" /></button></div>
    </div>
  </footer>
);
export default Footer;
