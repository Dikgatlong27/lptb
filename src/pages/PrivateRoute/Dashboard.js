// src/Dashboard.js
import React from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'; // Assuming you will create a CSS file for styling

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const goToProjects = () => {
    navigate("/projects");
  };

  const goToInvoices = () => {
    navigate("/invoices");
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome, {currentUser.email}</p>
      <div className="dashboard-buttons">
        <button onClick={goToProfile}>View Profile</button>
        
        <button onClick={goToProjects}>My Projects</button>
        <button onClick={goToInvoices}>Quotes</button>
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <button className="go-to-quotes-page" onClick={() => navigate("/quotation")}>
      Build Quote
      </button>
    </div>
  );
};

export default Dashboard;
