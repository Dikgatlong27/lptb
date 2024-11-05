// src/Dashboard.js
import React from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {currentUser.email}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
