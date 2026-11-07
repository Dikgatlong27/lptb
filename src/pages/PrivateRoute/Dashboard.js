import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState('');

  useEffect(() => {
    let active = true;
    setProfileName('');
    if (currentUser?.uid) {
      getDoc(doc(db, 'users', currentUser.uid))
        .then((snapshot) => {
          if (active && snapshot.exists()) setProfileName(snapshot.data().name || '');
        })
        .catch(() => {
          /* The authentication name remains available if the profile cannot load. */
        });
    }
    return () => {
      active = false;
    };
  }, [currentUser?.uid]);

  const welcomeName = profileName.trim() || currentUser?.displayName?.trim();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const goToProjects = () => {
    navigate('/projects');
  };

  const goToInvoices = () => {
    navigate('/invoices');
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>{welcomeName ? `Welcome, ${welcomeName}` : 'Welcome back'}</p>
      <div className="dashboard-buttons">
        <button onClick={goToProjects}>My Projects</button>
        <button onClick={goToInvoices}>Quotes</button>
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <button className="go-to-quotes-page" onClick={() => navigate('/quotation')}>
        Build Quote
      </button>
    </div>
  );
};

export default Dashboard;
