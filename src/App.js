import React from 'react';
import { Navbar, Footer, UserProfile, Chat } from './components';
import {
  Home,
  About,
  Services,
  Dev,
  Contact,
  Quotation,
  Login,
  SignUp,
  PrivateRoute,
  Dashboard,
  Projects,
  Invoices,
} from './pages';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import OurWork from './pages/OurWork/OurWork';
import PageHeader, { pageHeaders } from './components/PageHeader/PageHeader';
import './SectionMakeover.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="hero">
      <div className="hero-content">
        <div className="hero-kicker"><span /> LPTB SOLUTIONS · PAGE NOT FOUND</div>
        <h1>Let’s get you back on track.</h1>
        <p>This page may have moved, or the address may be incorrect.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/')}>Back to Home</button>
          <button className="btn-outline" onClick={() => navigate('/contact')}>Contact Us</button>
        </div>
      </div>
    </main>
  );
};

function App() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    const page = pageHeaders[pathname];
    document.title = pathname === '/' ? 'LPTB Solutions | Websites, Apps & Software Development' : `${page?.name || 'Page Not Found'} | LPTB Solutions`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = page?.description || (pathname === '/' ? 'Founder-led website, mobile app, and custom software development for growing businesses in South Africa.' : 'Find your way back to LPTB Solutions websites, services, and project portfolio.');
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.appendChild(robots); }
    const publicRoutes = ['/', '/about', '/services', '/our-work', '/dev', '/contact'];
    robots.content = publicRoutes.includes(pathname) ? 'index, follow' : 'noindex, follow';
  }, [pathname]);
  return (
    <div className={`App${pageHeaders[pathname] ? ' has-page-header' : ''}`}>
      <ScrollToTop />
      <a className="skip-navigation" href="#page-content">Skip to content</a>
      <Navbar />
      <div id="page-content" tabIndex={-1}>
      <PageHeader />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          }
        />

        <Route
          path="/invoices"
          element={
            <PrivateRoute>
              <Invoices />
            </PrivateRoute>
          }
        />
      </Routes>
      </div>
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
