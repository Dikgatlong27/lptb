import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX, FiUser } from 'react-icons/fi';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import './Navbar.css';

const navigation = [['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/dev', 'Dev'], ['/our-work', 'Our Work'], ['/contact', 'Contact']];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef(null);
  const closeButton = useRef(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const trigger = menuButton.current;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    return () => { document.body.style.overflow = previous; trigger?.focus(); };
  }, [open]);
  const handleLogout = async () => {
    try { setLoggingOut(true); await logout(); setOpen(false); navigate('/'); }
    catch (error) { console.error('Logout failed:', error); }
    finally { setLoggingOut(false); }
  };
  const accountLinks = <>
    <NavLink className="navbar-account-link" to={currentUser ? '/dashboard' : '/login'} onClick={() => setOpen(false)}><FiUser aria-hidden="true" />{currentUser ? 'Dashboard' : 'Log In'}</NavLink>
    {currentUser ? <button className="navbar-cta" disabled={loggingOut} onClick={handleLogout}>{loggingOut ? 'Logging out…' : 'Log Out'}</button> : <Link className="navbar-cta" to="/signup" onClick={() => setOpen(false)}>Sign Up <FiArrowUpRight aria-hidden="true" /></Link>}
  </>;
  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-shell">
        <Link className="navbar-brand" to="/" aria-label="LPTB Solutions home"><img src="/logoflat.svg" alt="LPTB Solutions" /><span>IDEAS INTO SOLUTIONS</span></Link>
        <ul className="navbar-desktop-links">{navigation.map(([url, title]) => <li key={url}><NavLink to={url} end={url === '/'} className={({isActive}) => `navbar-link${isActive ? ' is-active' : ''}`}>{title}</NavLink></li>)}</ul>
        <div className="navbar-desktop-account">{accountLinks}</div>
        <button className="navbar-menu-trigger" ref={menuButton} aria-label="Open navigation" aria-expanded={open} aria-controls="navbar-mobile-panel" onClick={() => setOpen(true)}><FiMenu aria-hidden="true" /><span>Menu</span></button>
      </div>
      {open && <div className="navbar-mobile-backdrop" onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className="navbar-mobile-panel" id="navbar-mobile-panel" role="dialog" aria-modal="true" aria-label="Navigation" onKeyDown={event => {
          if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
          if (event.key === 'Tab') {
            const controls = event.currentTarget.querySelectorAll('a[href], button:not(:disabled)');
            const first = controls[0], last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
          }
        }}>
          <div className="navbar-mobile-heading"><span>Explore LPTB</span><button ref={closeButton} aria-label="Close navigation" onClick={() => setOpen(false)}><FiX aria-hidden="true" /></button></div>
          <ul className="navbar-mobile-links">{navigation.map(([url, title], index) => <li key={url}><NavLink to={url} end={url === '/'} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'is-active' : ''}><span className="navbar-link-number">0{index + 1}</span>{title}<FiArrowUpRight aria-hidden="true" /></NavLink></li>)}</ul>
          <div className="navbar-mobile-account">{accountLinks}</div>
          <p className="navbar-mobile-note">Founder-led. Built around your business.</p>
        </div>
      </div>}
    </nav>
  );
};
export default Navbar;
