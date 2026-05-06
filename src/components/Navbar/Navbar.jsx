import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='navbar'>
            <div className="nav-larger">
                
                <Link to='/' className='nav-logo'>
                    <img src="logoflat.svg" className='logo' alt="LPTB Solutions" />
                </Link>
                
                
                <ul className='nav-links'>
                    <li><Link className='links' to='/'>Home</Link></li>
                    <li><Link className='links' to='/about'>About</Link></li>
                    <li><Link className='links' to='/services'>Services</Link></li>
                    <li><Link className='links' to='/dev'>Dev</Link></li>
                    <li><Link className='links' to='/contact'>Contact</Link></li>
                </ul>

                <div className='account'>
                    <Link className='links' to='/login'>Log In</Link>
                    <Link className='links' to='/signup'>Sign Up</Link>
                </div>
            </div>

            <div className="nav-links_small-screens">
                <Link to='/' className='mobile-logo'>
                    <img src="logoflat.svg" className='logo' alt="LPTB Solutions" />
                </Link>
                <button className='hamburger-menu' onClick={() => setToggleMenu(true)} aria-label="Open navigation">
                    <FiMenu />
                </button>


                {toggleMenu && (
                    <div className='navlinks-small_overlay slide-bottom'>
                        <button className='hamburger-close' onClick={() => setToggleMenu(false)} aria-label="Close navigation">
                            <FiX />
                        </button>
                    
                        <Link onClick={() => setToggleMenu(false)} to='/'>
                            <img src="logoflat.svg" className='logo-small' alt="LPTB Solutions" />
                        </Link>
                        
                        

                        <ul className='nav-links_small'>
                            <li onClick={() => setToggleMenu(false)}><Link className='links' to='/'>Home</Link></li>
                            <li onClick={() => setToggleMenu(false)}><Link className='links' to='/about'>About</Link></li>
                            <li onClick={() => setToggleMenu(false)}><Link className='links' to='/services'>Services</Link></li>
                            <li onClick={() => setToggleMenu(false)}><Link className='links' to='/dev'>Dev</Link></li>
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
