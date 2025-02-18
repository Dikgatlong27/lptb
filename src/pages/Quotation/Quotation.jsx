import React, { useState } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";


import "./Quotation.css";

const Quotation = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [packageType, setPackageType] = useState("");
  const [features, setFeatures] = useState([]);
  const [businessName, setBusinessName] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleFeatureChange = (feature) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!currentUser) {
      navigate("/login");
      return;
    }

    const quote = {
      packageType,
      features,
      businessName,
      contact,
      description,
      userId: currentUser.uid,
      date: new Date().toISOString(),
    };

    console.log("Quote Submitted:", quote);
    alert("Your quote has been submitted and saved to your profile!");
    navigate("/dashboard");
  };

  return (
    <div className="quotation-container">
      <h2>Build Your Quote</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>

        {/* Software Package Selection */}
        <label className="form-label">Select Package:</label>
        <select className="form-input" value={packageType} onChange={(e) => setPackageType(e.target.value)} required>
          <option value="">Choose a package</option>
          <option value="Bronze">Bronze (R2,500)</option>
          <option value="Silver">Silver (R8,500)</option>
          <option value="Gold">Gold (R15,500)</option>
          <option value="Platinum">Platinum (R50,000)</option>
          <option value="Premium">Premium (R100,000+)</option>
        </select>

        {/* Additional Features */}
        <label className="additional">Additional Features:</label>

        <div className="feature-options">
          <div className="feartures column-center">
            <h3 className="additional">Design & Branding </h3>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Custom Logo & Branding")} /> Custom Logo & Branding
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("UI/UX Design Optimization")} /> UI/UX Design Optimization
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Dark Mode & Custom Themes")} /> Dark Mode & Custom Themes
            </label>
          </div>

          <div className="feartures column-center">
            <h3 className="additional">General Website Features </h3>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Custom Domain & Hosting")} /> Custom Domain & Hosting
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Responsive Design")} /> Responsive Design (Mobile-Friendly)
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Blog Setup")} /> Blog Setup
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Contact Forms & Lead Capture")} /> Contact Forms & Lead Capture
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Newsletter Subscription")} /> Newsletter Subscription
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Live Chat Support")} /> Live Chat Support
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Multi-Language Support")} /> Multi-Language Support
            </label>
          </div>  
          
          <div className="feartures column-center">
            <h3 className="additional">E-commerce Features</h3>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Online Store Integration")} /> Online Store Integration
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Payment Gateway Setup")} /> Payment Gateway Setup
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Shopping Cart & Checkout")} /> Shopping Cart & Checkout
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Product Management")} /> Product Catalog & Management
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Inventory Management")} /> Inventory Management
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Wishlist Functionality")} /> IWishlist Functionality
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Multi-Vendor Marketplace")} /> Multi-Vendor Marketplace
            </label>
          </div>

          <div className="feartures column-center">
            <h3 className="additional">SEO & Marketing</h3>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Advanced SEO")} /> Advanced SEO Optimization
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Google Analytics Setup")} /> Google Analytics Setup
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Social Media Integration")} /> Social Media Integration
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Social Media Integration")} /> Google My Business Setup
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Google My Business Setup")} /> Google My Business Setup
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Paid Ads (Google & Social Media Setup)")} /> Paid Ads (Google & Social Media Setup)
            </label>
          </div>

          <div className="feartures column-center">
            <h3 className="additional">Security & Performance</h3>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("SSL Security")} /> SSL Security & HTTPS
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Website Backup & Recovery")} /> Website Backup & Recovery
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Performance Optimization")} /> Performance Optimization
            </label>
          </div>

          <div className="feartures column-center">
            <h3 className="additional">Advanced Web & App Development</h3>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Progressive Web App")} /> Progressive Web App (PWA)
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Custom Web Portal")} /> Custom Web Portal Development (e.g., Job Portals, Real Estate Listings)
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Membership & Subscription")} /> Membership & Subscription System
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Learning Management System")} /> Learning Management System (LMS)
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Booking & Appointment System")} /> Booking & Appointment System
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("API Integration (3rd Party Services)")} /> API Integration (3rd Party Services)
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("CRM & ERP Integration")} /> CRM & ERP Integration
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Web3 & Blockchain Integration")} /> Web3 & Blockchain Integration
            </label>
            <label className="form-label">
              <input className="form-input" type="checkbox" onChange={() => handleFeatureChange("Mobile App Development")} /> Mobile App Development (iOS & Android)
            </label>
          </div>
        </div>

  <     div className="biz-details">
          <h3 className="additional">Business Details</h3>
          <label className="form-label">Business Name:</label>
          <input className="form-input" type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required />

          <label className="form-label">Contact Details:</label>
          <input className="form-input" type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />

          <label className="form-label">Project Description:</label>
          <textarea className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

          <button className="form-submit-btn" type="submit">Submit Quote</button>
        </div>
      </form>
      
    </div>
  );
};

export default Quotation;
