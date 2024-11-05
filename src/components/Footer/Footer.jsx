import React from 'react'
import { Link } from 'react-router-dom'

import { TiSocialFacebook, TiSocialLinkedin  } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaYoutube } from "react-icons/fa";





import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className='footer-logo'>
                <Link to='/' className='footer-h3'>
                    <h3>LPTB</h3>
                </Link>
            </div>

            <div className='footer-links'>
                <p><Link className='links' to='/about'>About</Link></p>
                <p><Link className='links' to='/services'>Services</Link></p>
                <p><Link className='links' to='/contact'>Contact</Link></p>    
            </div>
            
           
            <div className="social-icons">
                <h5>Follow Us</h5>
                <div className="icons">
                    <a href="https://www.facebook.com/lptbsolutions/" target="_blank" rel="noopener noreferrer" className='fs-icon'>
                        <TiSocialFacebook />
                    </a>
                    <a href="https://www.linkedin.com/company/lptbsolutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className='fs-icon'>
                        <TiSocialLinkedin />
                    </a>
                    <a href="https://wa.me/27676228529" target="_blank" rel="noopener noreferrer" className='fs-icon'>
                        <FaWhatsapp />
                    </a>
                    <a href="https://github.com/Dikgatlong27" target="_blank" rel="noopener noreferrer" className='fs-icon'>
                        <FaGithub />
                    </a>
                    <a href="https://www.youtube.com/channel/UC-f9Qw9aqn2voaiqP5rS__g" target="_blank" rel="noopener noreferrer" className='fs-icon'>
                        <FaYoutube />
                    </a>   
                </div>
            </div>
           
        </div>

        <p style={{marginTop: '10px', fontSize: '11px'}}>LPTB Solution (Pty) Ltd. &copy; 2024 All Rights Reserved</p>

    </div>
  )
}

export default Footer
