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
import './LptbButtons.css';
import { applyMetadata } from './seo/metadata';

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
        <div className="hero-kicker">
          <span /> LPTB SOLUTIONS · PAGE NOT FOUND
        </div>
        <h1>Let’s get you back on track.</h1>
        <p>This page may have moved, or the address may be incorrect.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/')}>Back to Home</button>
          <button className="btn-outline" onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
};

function App() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    applyMetadata(pathname);
  }, [pathname]);
  return (
    <div className={`App${pageHeaders[pathname] ? ' has-page-header' : ''}`}>
      <ScrollToTop />
      <a className="skip-navigation" href="#page-content">
        Skip to content
      </a>
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
