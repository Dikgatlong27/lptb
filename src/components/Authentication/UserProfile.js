import React, { useState, useEffect } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase"; // Firestore & Storage
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "./UserProfile.css";

const UserProfile = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "",
    contact: "",
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProfile = async () => {
      if (!currentUser) return;

      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setProfileData(userSnap.data());
      }
      setLoading(false);
    };

    fetchProfile();
  }, [currentUser]);

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const userRef = doc(db, "users", currentUser.uid);
    await updateDoc(userRef, profileData);

    alert("Profile updated successfully!");
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>

      {loading ? (
        <p>Loading profile...</p>
      ) : (
        <form onSubmit={handleProfileUpdate}>
          
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />

          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={profileData.contact}
            onChange={handleInputChange}
          />

          <button type="submit">Update Profile</button>
        </form>
      )}

      <button className="back-to-dashboard" onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default UserProfile;
