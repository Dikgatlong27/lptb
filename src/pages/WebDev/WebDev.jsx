import React from 'react';
import { Link } from 'react-router-dom';

import './WebDev.css';

const WebDev = () => {
  return (
    <div className="webdev-container">
      <h1 className="webdev-title">Web & Mobile Development</h1>
      <p className="webdev-intro">
        We provide cutting-edge web and mobile development solutions tailored to your business needs.
        Choose a package that best fits your business goals.
      </p>

      <div className="packages-container">
        {/* Bronze Package */}
        <div className="package bronze">
          <h2>🥉 Bronze Package (R2,500)</h2>
          <p><strong>Perfect for Startups</strong></p>
          <ul>
            <li>1-Page Website (Landing Page)</li>
            <li>Mobile Responsive Design</li>
            <li>Basic Branding (Logo & Colors)</li>
            <li>Contact Form</li>
            <li>Social Media Links Integration</li>
            <li>Basic Hosting (12 Months)</li>
          </ul>
        </div>

        {/* Silver Package */}
        <div className="package silver">
          <h2>🥈 Silver Package (R8,500 - R15,500)</h2>
          <p><strong>Ideal for Small Businesses</strong></p>
          <ul>
            <li>3-5 Page Website (Home, About, Services, Contact, etc.)</li>
            <li>Custom UI/UX Design</li>
            <li>SEO Optimization (Basic)</li>
            <li>Mobile-Friendly Design</li>
            <li>Blog Setup (Optional)</li>
            <li>Google Analytics Setup</li>
            <li>12 Months Hosting Included</li>
          </ul>
        </div>

        {/* Gold Package */}
        <div className="package gold">
          <h2>🥇 Gold Package (R15,500+)</h2>
          <p><strong>For Established Businesses</strong></p>
          <ul>
            <li>5+ Pages or Custom Web App</li>
            <li>Advanced SEO & Performance Optimization</li>
            <li>E-commerce (Online Store with Payment Gateway)</li>
            <li>Admin Dashboard (Manage Orders, Users, etc.)</li>
            <li>User Authentication (Login/Signup System)</li>
            <li>Google My Business & Social Media Integration</li>
            <li>Chatbot Support</li>
            <li>12 Months Hosting & Maintenance</li>
          </ul>
        </div>

        {/* Platinum Package */}
        <div className="package platinum">
          <h2>💎 Platinum Package (R50,000+)</h2>
          <p><strong>The Ultimate Business Solution</strong></p>
          <ul>
            <li>Everything in Gold Package **PLUS:**</li>
            <li>Web & Mobile App Development (React.js + React Native/Flutter)</li>
            <li>AI-Powered Chatbot & Automation</li>
            <li>Cloud Hosting & Scalable Database (AWS/Afrihost/Firebase)</li>
            <li>Custom API Development</li>
            <li>Performance Optimization & Speed Enhancements</li>
            <li>Monthly Security Updates & Maintenance</li>
            <li>Priority Support (Dedicated Manager)</li>
          </ul>
        </div>

        {/* Premium Package */}
        <div className="package premium">
          <h2>🚀 Premium Package (R100,000+)</h2>
          <p><strong>Enterprise-Level, Fully Custom Solutions</strong></p>
          <ul>
            <li>Everything in Platinum Package **PLUS:**</li>
            <li>AI & Machine Learning Integration</li>
            <li>Blockchain-Based Security Features</li>
            <li>Custom SaaS (Software as a Service) Development</li>
            <li>Multi-Vendor Marketplace Development</li>
            <li>High-Traffic Website Optimization</li>
            <li>Business Intelligence & Data Analytics</li>
            <li>Enterprise-Grade Hosting & Cloud Infrastructure</li>
            <li>Ongoing Development & Support</li>
            <li>Exclusive VIP Consultation & Strategy Planning</li>
          </ul>
        </div>
      </div>

      <div className="contact-section">
        <h2>📩 Ready to Build Your Dream Project?</h2>
        <p>Sign up today or login to build a quote, and let's bring your vision to life!</p>
        <button className="contact-button"><Link className="links" to='/login'>Get a Free Quote</Link></button>
      </div>
    </div>
  );
};

export default WebDev;
