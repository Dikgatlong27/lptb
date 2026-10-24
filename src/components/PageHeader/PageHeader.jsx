import React from 'react';
import { useLocation } from 'react-router-dom';
import '../HomePage/Hero.css';
import './PageHeader.css';

export const pageHeaders = {
  "/about": {
    "name": "About",
    "title": "The people behind your next digital step.",
    "description": "Meet LPTB Solutions: a founder-led software studio building practical digital solutions with a hands-on approach.",
    "highlights": [
      "Our founder",
      "Our approach",
      "Our vision"
    ]
  },
  "/services": {
    "name": "Services",
    "title": "Practical solutions. Built around your business.",
    "description": "Websites, mobile apps, product design, and business technology support for teams ready to grow.",
    "highlights": [
      "Software development",
      "Design & branding",
      "Business systems"
    ]
  },
  "/our-work": {
    "name": "Our Work",
    "title": "Real ideas. Real businesses. Our work.",
    "description": "Explore the websites, applications, and connected platforms we build with our clients and partners.",
    "highlights": [
      "Client websites",
      "Connected platforms",
      "Project portfolio"
    ]
  },
  "/dev": {
    "name": "Dev",
    "title": "Websites and apps with room to grow.",
    "description": "Explore our development packages and find a practical starting point for your next website or digital platform.",
    "highlights": [
      "Website packages",
      "App development",
      "Custom solutions"
    ]
  },
  "/contact": {
    "name": "Contact",
    "title": "Let’s build something useful together.",
    "description": "Tell us about your website, app, or platform. We’ll help you plan the right next step.",
    "highlights": [
      "Project enquiries",
      "Partnerships",
      "Direct communication"
    ]
  },
  "/quotation": {
    "name": "Quotation",
    "title": "Your next project starts with a clear plan.",
    "description": "Choose a package, explore features, and share your requirements to build an initial project estimate.",
    "highlights": [
      "Choose a package",
      "Select features",
      "Plan your budget"
    ]
  },
  "/login": {
    "name": "Log In",
    "title": "Welcome back to LPTB Solutions.",
    "description": "Log in to manage your quote requests and continue your project conversation.",
    "highlights": [
      "Account access",
      "Quote requests",
      "Project conversations"
    ]
  },
  "/signup": {
    "name": "Sign Up",
    "title": "Let’s get your project started.",
    "description": "Create your account to plan a quote and start a conversation about your website, app, or business system.",
    "highlights": [
      "Create an account",
      "Plan your project",
      "Request a quote"
    ]
  },
  "/dashboard": {
    "name": "Dashboard",
    "title": "Your projects. One clear overview.",
    "description": "Manage your projects and invoices from your LPTB Solutions account.",
    "highlights": [
      "Your account",
      "Your projects",
      "Your invoices"
    ]
  },
  "/projects": {
    "name": "My Projects",
    "title": "Your projects, all in one place.",
    "description": "Keep track of your work with LPTB Solutions.",
    "highlights": [
      "Project overview",
      "Your work",
      "Project details"
    ]
  },
  "/invoices": {
    "name": "Invoices",
    "title": "Your invoices, organised.",
    "description": "View and manage your project invoices.",
    "highlights": [
      "Invoice overview",
      "Billing details",
      "Project invoices"
    ]
  },
  "/profile": {
    "name": "Profile",
    "title": "Your account. Your details.",
    "description": "Manage your LPTB Solutions profile and account information.",
    "highlights": [
      "Personal details",
      "Account information",
      "Your profile"
    ]
  }
};

const PageHeader = () => {
  const { pathname } = useLocation();
  const content = pageHeaders[pathname];
  
  
  if (!content) return null;
  return (
    <header className="hero page-header">
      <div className="hero-content">
        <div className="hero-kicker"><span /> LPTB SOLUTIONS · {content.name.toUpperCase()}</div>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <div className="hero-capabilities" aria-label={`${content.name} highlights`}>
          {content.highlights.map(highlight => <span key={highlight}>{highlight}</span>)}
        </div>
      </div>
    </header>
  );
};
export default PageHeader;
