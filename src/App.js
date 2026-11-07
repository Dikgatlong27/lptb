import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Chat from './components/UI/Chat';
import Home from './pages/Home/Home';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';

import PageHeader, { pageHeaders } from './components/PageHeader/PageHeader';
import './SectionMakeover.css';
import './LptbButtons.css';
import { applyMetadata } from './seo/metadata';
import CookieConsent from './privacy/CookieConsent';

const About = React.lazy(() => import('./pages/About/About'));
const Services = React.lazy(() => import('./pages/Services/Services'));
const Dev = React.lazy(() => import('./pages/WebDev/Dev'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Quotation = React.lazy(() => import('./pages/Quotation/Quotation'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const SignUp = React.lazy(() => import('./pages/Signup/SignUp'));
const Dashboard = React.lazy(() => import('./pages/PrivateRoute/Dashboard'));
const Projects = React.lazy(() => import('./pages/PrivateRoute/Projects'));
const Invoices = React.lazy(() => import('./pages/PrivateRoute/Invoices'));
const UserProfile = React.lazy(() => import('./components/Authentication/UserProfile'));
const OurWork = React.lazy(() => import('./pages/OurWork/OurWork'));
const LegalPage = React.lazy(() => import('./privacy/LegalPage'));

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
        <React.Suspense
          fallback={
            <p className="route-loading" role="status">
              Loading page…
            </p>
          }
        >
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
            <Route path="/privacy" element={<LegalPage kind="privacy" />} />
            <Route path="/cookies" element={<LegalPage kind="cookies" />} />
            <Route path="/terms" element={<LegalPage kind="terms" />} />

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
        </React.Suspense>
      </div>
      <Chat />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
