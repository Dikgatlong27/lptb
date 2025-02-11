import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseSquare } from "react-icons/ai"

import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='navbar'>
            <div className="nav-larger">
                
                <Link to='/' className='nav-logo'>
                    <img src="logoflat.svg" className='logo' alt="" srcset="" />
                </Link>
                
                
                <ul className='nav-links'>
                    <li><Link className='links' to='/'>Home</Link></li>
                    <li><Link className='links' to='/about'>About</Link></li>
                    <li><Link className='links' to='/services'>Services</Link></li>
                    <li><Link className='links' to='/webdev'>Dev</Link></li>
                    <li><Link className='links' to='/contact'>Contact</Link></li>
                </ul>

                <div className='account'>
                    <Link className='links' to='/login'>Log In</Link>
                    <Link className='links' to='/signup'>Sign Up</Link>
                </div>
            </div>

            <div className="nav-links_small-screens">
                <GiHamburgerMenu className='hamburger-menu' onClick={() => setToggleMenu(true)} />


                {toggleMenu && (
                    <div className='navlinks-small_overlay slide-bottom'>
                        <AiFillCloseSquare className='hamburger-close' onClick={() => setToggleMenu(false)} />
                    
                        <Link onClick={() => setToggleMenu(false)} to='/'>
                            <img src="logoflat.svg" className='logo-small' alt="" srcset="" />
                        </Link>
                        
                        

                        <ul className='nav-links_small'>
                            <li onClick={() => setToggleMenu(false)}><Link className='links' to='/'>Home</Link></li>
                            <li onClick={() => setToggleMenu(false)}><Link className='links' to='/about'>About</Link></li>
                            <li onClick={() => setToggleMenu(false)}><Link className='links' to='/services'>Services</Link></li>
                            <li onClick={() => setToggleMenu(false)}><Link className='links' to='/webdev'>Dev</Link></li>
                            <li onClick={() => setToggleMenu(false)}><Link className='links' to='/contact'>Contact</Link></li>
                        </ul>

                        <div className='account-small'>
                            <Link onClick={() => setToggleMenu(false)} className='links' to='/login'>Log In</Link>
                            <Link onClick={() => setToggleMenu(false)} className='links' to='/signup'>Sign Up</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
